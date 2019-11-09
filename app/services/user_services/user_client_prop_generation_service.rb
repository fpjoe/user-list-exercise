class UserClientPropGenerationService

  # To generate props used by React on client side
  #
  # HOW TO USE:
  # Just add a prop_* method to this service and that prop will be available
  # (camelCased) as an attribute on the users object on initial load of the
  # page, e.g. if you add a prop_frog_color method below, then the return
  # value of that method is available as users.frogColor in React javascript

  USERS_PER_PAGE = 25

  def initialize(options = {})
    @page = options[:page] || nil
  end

  def get_props(props = [])
    values = {}

    props.each do |prop|
      if self.respond_to?("prop_#{prop}",true)
        values[prop.to_sym] = self.send("prop_#{prop}")
      else
        raise no_such_prop_error_message(prop)
      end
    end

    values
  end

  def get_all_props
    values = {}

    all_props.each do |prop|
      values[prop.to_sym] = self.send("prop_#{prop}")
    end

    values
  end

  def all_props
    props = []

    self.class.instance_methods(false).each do |method_name|
      if method_name.to_s =~ /\Aprop_(.+)/
        props.push($1.to_sym)
      end
    end

    props
  end

  def prop_users_info
    load_raw_users

    load_pagination_info

    load_users

    {
      users:     @users,
      num_start: @num_start,
      num_end:   @num_end,
      num_total: @num_total,
      pages:     @pages
    }
  end

  def prop_photo_height
    100
  end

  private

  def load_raw_users
    @raw_users = User.order(:surname)
  end

  def load_pagination_info
    (@raw_users,
     @num_start,
     @num_end,
     @num_total,
     @pages) = ClientPropUtilsService.new.
       pagination_info(
         @raw_users,
         @page,
         USERS_PER_PAGE
      )
  end

  def load_users
    @users = []

    load_raw_users_by_id

    if @raw_users_by_id.present?

      load_raw_user_info.each do |each_info|
        @users.push(get_props_for_user(each_info))
      end

    end
  end

  def load_raw_users_by_id
    @raw_users_by_id = {}
    @raw_users.each do |user|
      @raw_users_by_id[user.id] = user
    end
  end

  def load_raw_user_info
    User.
      where(id: raw_user_ids).
      select('
        id,
        name,
        surname,
        gender,
        region,
        age,
        title,
        phone,
        birthday,
        email,
        password,
        photo_url
      ').
      order('surname asc')
  end

  def raw_user_ids
    @raw_users.map(&:id)
  end

  def get_props_for_user(info)
    {
      id:        info.id,
      name:      info.name,
      surname:   info.surname,
      gender:    info.gender,
      region:    info.region,
      age:       info.age.to_s,
      title:     info.title,
      phone:     info.phone,
      birthday:  DisplayUtils.date_display(info.birthday),
      email:     info.email,
      password:  info.password,
      photo_url: info.photo_url
    }
  end

  def no_such_prop_error_message(prop)
    "UserClientPropGenerationService: Tried to load prop #{prop} but " +
    "there is no method defined for that prop in this service"
  end

end
