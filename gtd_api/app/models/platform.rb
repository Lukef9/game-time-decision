class Platform < ApplicationRecord
  has_and_belongs_to_many :game
end
