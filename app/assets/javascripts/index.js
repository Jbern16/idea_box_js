'use strict'

$(document).ready( () => {
  loadIdeas()
  deleteIdea()
  updateQuality()
})

var renderIdeas = (idea) => {
  $('#ideas').prepend(
    `<div>`
    + "<h3 class='well'>"
    + `Title: ${idea.title}`
    + `</h3><p class='well'>`
    + `Body: ${truncate(idea.body)}`
    + `</p>`
    + `<p>`
    + `Quality: ${idea.quality}`
    + `</p>`
    + `<button type='button' class='btn btn-danger'id='delete-idea' data-id=${idea.id}>Delete</button>`
    + `<button type='button' class='btn btn-danger'id='update-quality' quality-value=${idea.quality} idea-id=${idea.id}>Thumbs Up</button>`
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

var truncate = (string) => {
  if(string.length > 100){
    return $.trim(string).substring(0, 100)
           .split(" ").slice(0, -1).join(" ") + "...";
  } else {
    return string;
  }
}

var clearIdeas = () => {
  $('#ideas').children().remove()
};
