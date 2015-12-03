'use strict'

var downgradeQuality = () => {
  $('#ideas').delegate('#downgrade-quality', 'click', (event) => {
    let $idea           = $(event.toElement)
    let qualityUpdateId = $idea.attr('idea-id')
    let qualityName     = $idea.attr('quality-value')
    $.ajax({
      type: 'PATCH',
      url: '/api/v1/ideas/' + qualityUpdateId,
      data: {
              quality: thumbsDown(
                qualityArray,
                qualityName,
                findIndex(qualityArray, qualityName)
              )
            },
      success: () => {
        clearIdeas()
        loadIdeas()
      },
      error: () => {
        // clearIdeas()
        // loadIdeas()
        alert("Something went HORRIBLY wrong!")
      }
    })
  })
}

var thumbsDown = (qualities, qualityName, qualityIndex) => {
  let i = qualityIndex
  if (qualityName === 'Swill') {
    alert("Cannot downgrade further!")
  } else {
    let y = qualityArray[i -= 1]
    return y
  }
}
