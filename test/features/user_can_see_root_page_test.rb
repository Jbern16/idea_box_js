require 'test_helper'

class UserCanSeeRootPageTest < ActiveSupport::TestCase
  def setup
    Capybara.app = IdeaBox2::Application
  end

  test "it can find the root page" do
    visit "/"

    assert page.has_content?("Idea Box")
    assert page.has_content?("Search!")
  end

  test "it can find the submit button" do
    visit "/"

    assert page.has_content?("Submit")

    within '#create-ideas' do
      fill_in 'title', with: 'Nice'
      fill_in 'body', with: 'Test'
      click_button 'Submit'
    end

    assert page.has_content?("Submit")
  end
end
