module Types
  class QueryType < Types::BaseObject

    field :users_info, Types::UsersInfo, null: false do
      argument :page, Int, required: true
    end

    def users_info(page:)
      UserClientPropGenerationService.new(
        page: page
      ).get_props([:users_info])[:users_info]
    end

  end
end
