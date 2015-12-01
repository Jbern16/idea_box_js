'use strict'

$(document).ready( () => {
  loadIdeas
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

var loadIdeas = () => {
  $.getJSON('/api/v1/ideas')
    .then(enumIdeas)
  	.fail((data) => { alert('Something Went Wrong!') })
    .always((data) => { console.log('Something Happened') })
}

var clearOut = () => {
   $('#create-ideas').children().remove()
}
