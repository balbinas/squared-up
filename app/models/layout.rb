class Layout < ApplicationRecord
    belongs_to :user
    has_many :rectangles
end
