'use strict'

var filterElements = () => {
  $(".search-field").keyup(function(event) {
    var search = $(this).val().toLowerCase()
    var ideas = $("#ideas").children()
    ideas.removeClass("hidden")
    var hide = ideas.filter(function() {
      let title = $(this).children('.well').text()
      let searchMore = (title).toLowerCase()
      return !(searchMore.includes(search))
    })
    hide.addClass("hidden")
  })
}
