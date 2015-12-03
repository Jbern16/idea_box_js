require 'test_helper'

class Api::V1::IdeasControllerTest < ActionController::TestCase
  test "#index" do
    get :index, format: :json

    assert_response :success
  end

  test '#index returns the right number of JSON objects' do
    get :index, format: :json

    json_response = JSON.parse(response.body)

    assert_equal 2, json_response.count
  end

  test '#show returns the right number of JSON objects' do
    get :show, format: :json, id: 2

    assert_equal "Plausible", Idea.find(2).quality
  end

  test '#create creates an idea' do
    post :create, format: :json

    assert_equal 'Swill', Idea.third.quality
  end

  test '#update actually updates' do
    patch :update, format: :json, id: 2, title: "wow"

    assert_equal "wow", Idea.find(2).title
  end

  test '#destroy removes something form the database' do
    post :create, format: :json, title: "wow"

    assert_equal 'Swill', Idea.last.quality

    delete :destroy, format: :json, id: Idea.last.id

    assert_equal 2, Idea.last.id
  end
end
