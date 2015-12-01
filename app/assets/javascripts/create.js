$( document ).ready( () => {
  newIdea();
});

var newIdea = () => {
  $('#submit-button').click( () => {

    $.ajax({
       method: "POST",
       url: "api/v1/ideas",
       data: { title: getTitle(),
               body: getBody()
             },
       success: () => {
         clearOut();
         loadIdeas()
         clearForm()
       },
       error: () => {
         displayError()
       }
    });
  });
}

var getTitle = () => {
  return $('#title-field').val()
}

var getBody = () => {
  return $('#body-field').val()
}

var clearForm = () => {
  $('#title-field').val("")
  $('#body-field').val("")
}

var displayError = () => {
  alert("negative ghost rider")
}
