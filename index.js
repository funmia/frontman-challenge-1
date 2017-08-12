$(document).ready(function() {

  function loadMoreContent() {
    setTimeout(showTweets, 1000);
  }

  function showTweets() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
  }

  $('#infiniteList').on('scroll', function() {
  if ($('#infiniteList').scrollTop + $('#infiniteList').height >= $('#infiniteList').height) {
    loadMoreContent();
  }
});


});
