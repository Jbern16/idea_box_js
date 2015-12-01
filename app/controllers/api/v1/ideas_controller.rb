class Api::V1::IdeasController < ApplicationController
  respond_to :json, :xml

  def index
    respond_with Idea.all
  end

  def create

  end

  def update

  end

  def destroy

  end

  private

  def idea_params

  end
end
