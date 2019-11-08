class OrdersController < ApplicationController

  def index
    load_user_props
  end

  private

  def load_user_props
    @user_props =
      UserClientPropGenerationService.new.
        get_all_props
  end

end
