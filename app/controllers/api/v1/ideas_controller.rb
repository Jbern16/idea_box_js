class Api::V1::IdeasController < ApplicationController
  respond_to :json

  def show
    respond_with Idea.find(params[:id])
  end

  def index
    respond_with Idea.all
  end

  def create
    respond_with :api, :v1, Idea.create(idea_params)
  end

  def update
    respond_with Idea.find(params[:id]).update(idea_params)
  end

  def destroy
    respond_with Idea.destroy(params[:id])
  end

  private

  def idea_params
    params.permit(:title, :body, :quality)
  end
end
