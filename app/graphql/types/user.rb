class Types::User < Types::BaseObject
  field :id, ID, null: false
  field :name, String, null: true
  field :surname, String, null: true
  field :gender, String, null: true
  field :region, String, null: true
  field :age, String, null: true
  field :title, String, null: true
  field :phone, String, null: true
  field :birthday, String, null: true
  field :email, String, null: true
  field :password, String, null: true
  field :photo_url, String, null: true
end
