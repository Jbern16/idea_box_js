'use strict'

$(document).ready( () => {
  loadIdeas()
  deleteIdea()
})

var renderIdeas = (idea) => {
  $('#ideas').prepend(

    `<div>`
    + "<h3 class='well'>"
    + `Title: ${idea.title}`
    + `</h3><p class='well'>`
    + `Body: ${idea.body}`
    + `</p>`
    + `<button type='button' class='btn btn-danger'id='delete-idea' data-id=${idea.id}>Delete</button>`
    + `<hr>`
    + `</div>`
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
