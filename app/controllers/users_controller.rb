class UsersController < ApplicationController

  def index
    load_user_list_info_props
  end

  private

  def load_user_list_info_props
    @user_list_info_props =
      UserClientPropGenerationService.new.
        get_all_props
  end

end
