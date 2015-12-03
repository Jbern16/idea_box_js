var editTitle = () => {
  $('#ideas').one('click', '#title', () => {
    console.log('editTitle')
    var doIt = event
    $(this).attr('contenteditable', 'true')
    .focus()
    .keypress( function() {
        if (event.which === 13) {
          updateTitle(doIt)
        }
      })
  })
}

var editBody = () => {
  $('#ideas').one('click', '#body', () => {
    console.log('editBody')
    var doIt = event
    $(this).attr('contenteditable', 'true')
    .focus()
    .keypress( function() {
        if (event.which === 13) {
          updateBody(doIt)
        }
      })
  })
}

var updateTitle = (event) => {
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
    });
}

var updateBody = (event) => {
  console.log("wow")
  var $idea = $(event.toElement)
  var $body = $idea.text()
  debugger
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
    });
}
