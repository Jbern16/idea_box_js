require 'test_helper'

class UserCanSeeRootPageTest < ActiveSupport::TestCase
  def setup
    Capybara.app = IdeaBox2::Application
  end

  test "it can find the root page" do
    visit "/"

    assert page.has_content?("Idea Box")
  end
end
