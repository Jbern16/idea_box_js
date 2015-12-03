'use strict'

var filterElements = () => {
  $(".search-field").keyup(function(event) {
    var search = $(this).val().toLowerCase()
    var ideas = $("#ideas").children()
    ideas.removeClass("hidden")
    var hide = ideas.filter(function() {
      let all = $(this).children('.well').text()
      let searchMore = (all).toLowerCase()
      return !(searchMore.includes(search))
    })
    hide.addClass("hidden")
  })
}
