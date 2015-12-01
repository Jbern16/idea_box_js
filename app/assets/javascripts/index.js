'use strict'

$(document).ready( () => {
  $.getJSON('/api/v1/ideas')
    .then(enumIdeas)
  	.fail((data) => { alert('Something Went Wrong!') })
    .always((data) => { console.log('Something Happened') })
})

var renderIdeas = (idea) => {
  $('#ideas').prepend(
    "<h3 class='well'>"
    + "Title: " + idea.title
    + "</h3><p class='well'>"
    + "Body: " + idea.body
    + "</p>"
    + "<button type='button' class='btn btn-danger'id='delete-idea'>Delete</button>"
    + "<hr>"
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
