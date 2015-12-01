class Api::V1::IdeasController < ApplicationController
  respond_to :json

  def index
    respond_with Idea.all
  end

  def create
    respond_with Idea.create(idea_params)
  end

  def update

  end

  def destroy

  end

  private

  def idea_params
    params.require(:idea).permit(:title, :body)
  end
end
