'use strict'

var updateQuality = () => {
  $('#ideas').delegate('#update-quality', 'click', (event) => {

  let $idea = $(event.toElement)
  let qualityUpdateId = $idea.attr('idea-id')

    $.ajax({
      type: 'PATCH',
      url: '/api/v1/ideas/' + qualityUpdateId,
      success: () => {
        loadIdeas()
      },
      error: () => {
        loadIdeas()
        alert("Something went HORRIBLY wrong!")
      }
    })
  })
}

var qualityArray = ['Swill', 'Plausible', 'Genius']

// var

// var upgradeQuality = () => {
//   if ()
// }

// $idea.attr('quality-value')
