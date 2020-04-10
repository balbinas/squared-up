require 'test_helper'

class LayoutsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @layout = layouts(:one)
  end

  test "should get index" do
    get layouts_url, as: :json
    assert_response :success
  end

  test "should create layout" do
    assert_difference('Layout.count') do
      post layouts_url, params: { layout: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show layout" do
    get layout_url(@layout), as: :json
    assert_response :success
  end

  test "should update layout" do
    patch layout_url(@layout), params: { layout: {  } }, as: :json
    assert_response 200
  end

  test "should destroy layout" do
    assert_difference('Layout.count', -1) do
      delete layout_url(@layout), as: :json
    end

    assert_response 204
  end
end
