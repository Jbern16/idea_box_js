'use strict'

$(document).ready( () => {
  loadIdeas()
  deleteIdea()
  upgradeQuality()
  downgradeQuality()
  filterElements()
  editTitle()
  editBody()
})

var renderIdeas = (idea) => {
  $('#ideas').prepend(
    `<div id='idea'>`
    + `<h3 contenteditable='true' class='well idea-title' id='title' idea-id='${idea.id}' tile=${idea.title}>`
    + `${idea.title}`
    + `</h3><p contenteditable='true' class='well' id='body' idea-id=${idea.id} >`
    + `${truncate(idea.body)}`
    + `</p>`
    + `<p>`
    + `Quality: ${idea.quality}`
    + `</p>`
    + `<button type='button' class='btn btn-warning'id='delete-idea' data-id=${idea.id}><span class="glyphicon glyphicon-trash" aria-hidden="true"></button>`
    + `<button type='button' class='btn btn-success'id='upgrade-quality' quality-value=${idea.quality} idea-id=${idea.id}><span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span></button>`
    + `<button type='button' class='btn btn-danger'id='downgrade-quality' quality-value=${idea.quality} idea-id=${idea.id}><span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></button>`
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
