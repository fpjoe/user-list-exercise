class User < ActiveRecord::Base

  validates :surname, presence: true
  validates :gender, presence: true
  validates :region, presence: true
  validates :age, presence: true
  validates :title, presence: true
  validates :phone, presence: true
  validates :birthday, presence: true
  validates :email, presence: true
  validates :password, presence: true
  validates :photo_url, presence: true

end
