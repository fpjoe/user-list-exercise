class Types::UsersInfo < Types::BaseObject
  field :users, [Types::User], null: false
  field :num_start, Int, null: false
  field :num_end, Int, null: false
  field :num_total, Int, null: false
  field :pages, [Int], null: false
end
