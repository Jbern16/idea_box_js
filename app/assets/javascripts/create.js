'use strict'

var createIdea = (event) => {
  debugger
  event.preventDefault();
  postIdeaInfo();
}

var ideaInfo = () => {
  return {
    idea: {
      title: $("#title-field").val(),
      body:  $("#body-field").val()
    }
  }
}

var postIdeaInfo = () => {
  $.post("/api/v1/ideas", ideaInfo, (data) => {
    $("#ideas").prepend(data)
    clearField()
  })
}

var clearField = () => {
   $("#title-field").val("")
   $("#body-field").val("")
}
