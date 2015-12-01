'use strict'

// $(document).ready( () => {
//   $.postJSON('/api/v1/ideas')
//     .then((data) => { console.log("Something got Created") })
//   	.fail((data) => { alert('Something Went Wrong!') })
//     .always((data) => { console.log('Something Happened') })
// })

function createIdea(event) {
  event.preventDefault();
  postIdeaInfo();
}

var ideaInfo = () => {
  return {
    idea: {
      title: $("#title-field").val(),
      body:  $("#body-field").val()
    }
  };
}

var postIdeaInfo = () => {
  $.post("/api/v1/ideas", ideaInfo(), function(data) {
    $("#ideas").prepend(data)
    clearField()
  })
}

var clearField = () => {
   $("#title-field").val("")
   $("#body-field").val("")
}
