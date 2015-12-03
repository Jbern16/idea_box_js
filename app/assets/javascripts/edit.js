$(document).ready( () => {
  editTitle()
  editBody()
})

var editTitle = () => {
  $('#ideas').on('click', '#title', () => {
    console.log('editTitle')
    var doIt = event
    $(event.toElement).attr('contenteditable', 'true')
    .focus()
    .keypress( function() {
        if (event.which === 13) {
          console.log('keypressed');
          updateTitle(doIt)
        }
      })
  })
}

var editBody = () => {
  $('#ideas').on('click', '#body', () => {
    console.log('editBody')
    var doIt = event
    $(event.toElement).attr('contenteditable', 'true')
    .focus()
    .keypress( function() {
        if (event.which === 13) {
          console.log('keypressed')
          updateBody(doIt)
        }
      })
  })
}

var updateTitle = (event) => {
  event.preventDefault()
  console.log("wow")
  var $idea = $(event.toElement)
  var $title = $idea.text()
  $.ajax({
      type: 'PATCH',
      url: '/api/v1/ideas/' + $idea.attr('idea-id'),
      data: { title: $title },
      success: function(){
        console.log("Success")
        clearIdeas()
        loadIdeas()
      },
      error: function(err){
        console.log("Failed!")
        clearIdeas()
        loadIdeas()
      }
    })
}

var updateBody = (event) => {
  event.preventDefault()
  console.log("wow")
  var $idea = $(event.toElement)
  var $body = $idea.text()
  $.ajax({
      type: 'PATCH',
      url: '/api/v1/ideas/' + $idea.attr('idea-id'),
      data: { body: $body },
      success: function(){
        console.log("Success")
        clearIdeas()
        loadIdeas()
      },
      error: function(err){
        console.log("Failed!")
        clearIdeas()
        loadIdeas()
      }
    })
}
