class AddColorToRectangles < ActiveRecord::Migration[6.0]
  def change
    add_column :rectangles, :color, :string
  end
end
