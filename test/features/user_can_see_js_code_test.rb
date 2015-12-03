require 'test_helper'

# module PossibleJSDriver
#   def require_js
#     Capybara.current_driver = :selenium
#   end
#
#   def teardown
#     super
#     Capybara.use_default_driver
#   end
# end
#
# class MiniTest::Unit::TestCase
#   include PossibleJSDriver
# end

class WebsiteTest < MiniTest::Unit::TestCase

  Capybara.current_driver = :selenium
  def test_with_javascript
    require_js
    visit "/"
    assert page.has_content?("POOP")
  end

  def test_without_javascript
    visit "/"
    click_link "Hide"
    assert has_link?("Hide")
  end
end
