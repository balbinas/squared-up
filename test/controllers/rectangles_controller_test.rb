require 'test_helper'

class RectanglesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @rectangle = rectangles(:one)
  end

  test "should get index" do
    get rectangles_url, as: :json
    assert_response :success
  end

  test "should create rectangle" do
    assert_difference('Rectangle.count') do
      post rectangles_url, params: { rectangle: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show rectangle" do
    get rectangle_url(@rectangle), as: :json
    assert_response :success
  end

  test "should update rectangle" do
    patch rectangle_url(@rectangle), params: { rectangle: {  } }, as: :json
    assert_response 200
  end

  test "should destroy rectangle" do
    assert_difference('Rectangle.count', -1) do
      delete rectangle_url(@rectangle), as: :json
    end

    assert_response 204
  end
end
