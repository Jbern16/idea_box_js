var editTitle = () => {
  $('#ideas').one('click', 'title', () => {
    console.log('editTitle');
    $(this).attr('contenteditable', 'true')
    .focus()
    .on('blur', updateTitle())
  })
}

var updateTitle = () => {
  var $idea = $(this).closest('.idea')
  var $title = $idea.find('.title').text()
  $.ajax({
      type: 'PATCH',
      url: '/api/v1/ideas/' + $idea.attr( 'id' ),
      data: {idea: {title: $title}},
      success: function(){
        console.log("Success");
      },
      error: function(err){
        console.log("Failed!:" + err);
      }
    });
}
