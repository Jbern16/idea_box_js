'use strict'

$(document).ready( () => {
  $.getJSON('/api/v1/ideas')
  .then(enumIdeas)
	.fail((data) => { console.log('It Failed') })
  .always((data) => { console.log('Something Happened') })
})

var renderIdeas = (idea) => {
  $('#ideas').append(
    "<h3>"
    + idea.title
    + "</h3><p>"
    + idea.body
    + "</p>"
  )
}

var enumIdeas = (data) => {
    let ideas = data
    $.each (ideas, (index, idea) => {
    renderIdeas(idea)
  })
}
