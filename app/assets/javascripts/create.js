$( document ).ready( () => {
  newIdea();
});

var newIdea = () => {
  $('#submit-idea').click( () => {

    $.ajax({
       method: "POST",
       url: "api/v1/ideas",
       data: {
               title: ideaTitle(),
               body: ideaBody()
             },
       success: () => {
         renderIdeas()
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
