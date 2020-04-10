class CreateRectangles < ActiveRecord::Migration[6.0]
  def change
    create_table :rectangles do |t|
      t.integer :startX
      t.integer :endX
      t.integer :startY
      t.integer :endY
      t.belongs_to :layout, null: false, foreign_key: true

      t.timestamps
    end
  end
end
