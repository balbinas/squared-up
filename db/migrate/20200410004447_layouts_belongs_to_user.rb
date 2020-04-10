class LayoutsBelongsToUser < ActiveRecord::Migration[6.0]
  def change
    change_table :layouts do |t|
      t.belongs_to :user, null: false, foreign_key: true, default: 1
    end
  end
end
