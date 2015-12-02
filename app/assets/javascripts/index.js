'use strict'

$(document).ready( () => {
  loadIdeas()
  deleteIdea()
  upgradeQuality()
  downgradeQuality()
  filterElements()
})

var renderIdeas = (idea) => {
  $('#ideas').prepend(
    `<div>`
    + "<h3 class='well' id='title'>"
    + `Title: ${idea.title}`
    + `</h3><p class='well' id ='body'>`
    + `Body: ${truncate(idea.body)}`
    + `</p>`
    + `<p>`
    + `Quality: ${idea.quality}`
    + `</p>`
    + `<button type='button' class='btn btn-danger'id='edit-idea' data-id=${idea.id}>Edit</button>`
    + `<button type='button' class='btn btn-danger'id='delete-idea' data-id=${idea.id}>Delete</button>`
    + `<button type='button' class='btn btn-danger'id='upgrade-quality' quality-value=${idea.quality} idea-id=${idea.id}>Thumbs Up</button>`
    + `<button type='button' class='btn btn-danger'id='downgrade-quality' quality-value=${idea.quality} idea-id=${idea.id}>Thumbs Down</button>`
    + `<hr>`
    + `</div>`
  )
}

var enumIdeas = () => {
  $.getJSON( "/api/v1/ideas", function( data ) {
      data.sort(function(a, b) {return a.id - b.id}).forEach( (idea) => {
        renderIdeas(idea)
    })
  })
}

var loadIdeas = (event) => {
  $.getJSON('/api/v1/ideas')
    .then(enumIdeas())
  	.fail((data) => { alert('Something Went Wrong!') })
    .always((data) => { console.log('Something Happened') })
}

var truncate = (string) => {
  if (string === null) {
  } else if(string.length > 100) {
    return $.trim(string).substring(0, 100)
           .split(" ").slice(0, -1).join(" ") + "...";
  } else {
    return string;
  }
}

var clearIdeas = () => {
  $('#ideas').children().remove()
};
