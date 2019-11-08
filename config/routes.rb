Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  get "/graphql", to: "graphql#execute"
  post "/graphql", to: "graphql#execute"

  root to: "users#index"

end
