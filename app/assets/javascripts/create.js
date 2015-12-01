<<<<<<< HEAD
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
=======
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
         loadIdeas()
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
>>>>>>> create-stuff
  alert("negative ghost rider")
}
