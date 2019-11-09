#
# This file should contain all the record creation needed to seed the
# database with its default values.  The data can then be loaded with the
# rake db:seed (or created alongside the db with db:setup).
#

SEED_DATA_DIR = "db/seed_data"

users_file = "#{SEED_DATA_DIR}/users.json"

if !User.exists?

  users_file_contents = IO.read(users_file)

  if users_file_contents.present?

    JSON.parse(users_file_contents).each do |each_user|
      User.create!( 
        name:      each_user['name'],
        surname:   each_user['surname'],
        gender:    each_user['gender'].capitalize,
        region:    each_user['region'],
        age:       each_user['age'],
        title:     each_user['title'].capitalize,
        phone:     each_user['phone'],
        birthday:  DatetimeUtils.datetime_for_date_str(each_user['birthday']['mdy']),
        email:     each_user['email'],
        password:  each_user['password'],
        photo_url: each_user['photo']
      )
    end

  end

end
