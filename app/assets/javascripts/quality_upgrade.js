'use strict'

var upgradeQuality = () => {
  $('#ideas').delegate('#upgrade-quality', 'click', (event) => {
    let $idea           = $(event.toElement)
    let qualityUpdateId = $idea.attr('idea-id')
    let qualityName     = $idea.attr('quality-value')
    let qualityEnumNum  = 'Genius'
    $.ajax({
      type: 'PATCH',
      url: '/api/v1/ideas/' + qualityUpdateId,
      data: {
              quality: thumbsUp(
                qualityArray,
                qualityName,
                findQualityIndex(qualityArray, qualityName)
              )
            },
      success: () => {
        clearIdeas()
        loadIdeas()
      },
      error: () => {
        clearIdeas()
        loadIdeas()
        alert("Something went HORRIBLY wrong!")
      }
    })
  })
}

var qualityArray = ['Swill', 'Plausible', 'Genius']

var thumbsUp = (qualities, qualityName, qualityIndex) => {
  let i = qualityIndex
  if (qualityName === 'Genius') {
    alert("Cannot upgrade further!")
  } else {
    let y = qualityArray[i += 1]
    return y
  }
}

var findQualityIndex = (array, findQual) => {
  let j = 0
    array.forEach( (quality, index) => {
      if (findQual === quality) {
        j = index
      }
  });
  return j
}

var fetchIdea = (updateId) => {
  $.getJSON('/api/v1/ideas/' + updateId)
}
