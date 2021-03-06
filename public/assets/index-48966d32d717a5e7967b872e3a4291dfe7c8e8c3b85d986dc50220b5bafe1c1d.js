'use strict';

$(document).ready(function () {
  loadIdeas();
  deleteIdea();
  clearIdeas();
  upgradeQuality();
  downgradeQuality();
  filterElements();
  enumQuality();
});

var renderIdeas = function renderIdeas(idea) {
  $('#ideas').prepend('<div id=\'idea\'>' + ('<h3 contenteditable=\'true\' class=\'well idea-title\' id=\'title\' idea-id=\'' + idea.id + '\' tile=' + idea.title + '>') + ('' + idea.title) + ('</h3><p contenteditable=\'true\' class=\'well\' id=\'body\' idea-id=' + idea.id + ' >') + ('' + truncate(idea.body)) + '</p>' + '<p class=\'well\'>' + ('Quality: ' + idea.quality) + '</p>' + ('<span class="glyphicon glyphicon-trash" aria-hidden="true" id=\'delete-idea\' idea-id=' + idea.id + '></span>') + ('<span class="glyphicon glyphicon-thumbs-up" aria-hidden="true" id=\'upgrade-quality\' quality-value=' + idea.quality + ' idea-id=' + idea.id + '></span>') + ('<span class="glyphicon glyphicon-thumbs-down" aria-hidden="true" id=\'downgrade-quality\' quality-value=' + idea.quality + ' idea-id=' + idea.id + '></span>') + '<hr>' + '</div>');
};

var enumIdeas = function enumIdeas() {
  $.getJSON("/api/v1/ideas", function (data) {
    data.sort(function (a, b) {
      return a.id - b.id;
    }).forEach(function (idea) {
      renderIdeas(idea);
    });
  });
};

var sorterFlag = true;

var enumQuality = function enumQuality() {
  $('#sort-quality').click(function () {
    clearIdeas();
    $.getJSON("/api/v1/ideas", function (data) {
      if (sorterFlag) {
        data.sort(function (a, b) {
          return a.quality < b.quality;
        }).forEach(function (idea) {
          renderIdeas(idea);
          sorterFlag = false;
        });
      } else {
        data.sort(function (a, b) {
          return a.quality > b.quality;
        }).forEach(function (idea) {
          renderIdeas(idea);
          sorterFlag = true;
        });
      }
    });
  });
};

var loadIdeas = function loadIdeas(event) {
  $.getJSON('/api/v1/ideas').then(enumIdeas()).fail(function (data) {
    alert('Something Went Wrong!');
  });
};

var truncate = function truncate(string) {
  if (string === null) {} else if (string.length > 100) {
    return $.trim(string).substring(0, 100).split(" ").slice(0, -1).join(" ") + "...";
  } else {
    return string;
  }
};

var clearIdeas = function clearIdeas() {
  $('#ideas').children().remove();
};