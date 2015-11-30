require 'test_helper'

class IdeaTest < ActiveSupport::TestCase
  test "it has correct defaults" do
    idea = Idea.create

    assert_equal nil, idea.title
    assert_equal nil, idea.body
    assert_equal "Swill", idea.quality
  end

  test "it can change quality to plausible" do
    idea = Idea.create(quality: 1)

    assert_equal nil, idea.title
    assert_equal nil, idea.body
    assert_equal "Plausible", idea.quality
  end

  test "it can change quality to genius" do
    idea = Idea.create(quality: 1)

    assert_equal nil, idea.title
    assert_equal nil, idea.body
    assert_equal "Genius", idea.quality
  end
end
