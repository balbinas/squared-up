class RectanglesController < ApplicationController
  before_action :set_rectangle, only: [:show, :update, :destroy]

  # GET /rectangles
  def index
    @rectangles = Rectangle.all

    render json: @rectangles
  end

  # GET /rectangles/1
  def show
    render json: @rectangle
  end

  # POST /rectangles
  def create
    @rectangle = Rectangle.new(rectangle_params)

    if @rectangle.save
      render json: @rectangle, status: :created, location: @rectangle
    else
      render json: @rectangle.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /rectangles/1
  def update
    if @rectangle.update(rectangle_params)
      render json: @rectangle
    else
      render json: @rectangle.errors, status: :unprocessable_entity
    end
  end

  # DELETE /rectangles/1
  def destroy
    @rectangle.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_rectangle
      @rectangle = Rectangle.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def rectangle_params
      params.permit(:layout_id, :startX, :startY, :endX, :endY)
    end
end
