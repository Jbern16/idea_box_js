$(document).ready( () => {
  $('h1').remove()
  $.getJSON('/api/v1/ideas')
    .then((data) => { console.log('It Worked') })
  	.fail((data) => { console.log('It Failed') })
    .always((data) => { console.log('Something Happened') })
})
