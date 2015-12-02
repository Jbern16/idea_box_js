'use strict'

$( document ).ready( () => {
  newIdea()
})

var newIdea = () => {
  $('#submit-idea').click( (event) => {
    event.preventDefault()
    $.ajax({
       method: "POST",
       url: "api/v1/ideas",
       data: {
                title: ideaTitle(),
                body: ideaBody()
             },
       success: (data) => {
         clearIdeas()
         renderIdeas(data)
         clearForm()
       },
       error: () => {
         alertError()
       }
    })
  })
}

var ideaTitle = () => {
  return $('#title-field').val()
}

var ideaBody = () => {
  return $('#body-field').val()
}

var clearForm = () => {
  $('#title-field').val("")
  $('#body-field').val("")
}

var alertError = () => {
  alert("negative ghost rider")
}
