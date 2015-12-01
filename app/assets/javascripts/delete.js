'use strict'

var deleteIdea = () => {
  $('#ideas').delegate('#delete-idea', 'click', (event) => {

  let $idea = $(event.toElement)
    $.ajax({
      type: 'DELETE',
      url: '/api/v1/ideas/' + $idea.attr('data-id'),
      success: () => {
        $idea.parent().remove()
      },
      error: () => {
        $idea.parent().remove()
        alert("Something went HORRIBLY wrong!")
      }
    })
  })
}
