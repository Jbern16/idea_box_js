ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require 'minitest/pride'
require 'minitest/unit'
require 'simplecov'
SimpleCov.start "rails"

class ActiveSupport::TestCase
  fixtures :all
  include Capybara::DSL
end
