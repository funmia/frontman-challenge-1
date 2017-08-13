$(document).ready(function() {

  function loadMoreContent() {
    setTimeout(loadMore, 1000);
    // loadMore();
  }

  function showTweets() {
    document.getElementById("loader").style.display = "none";
    // document.getElementById("myDiv").style.display = "block";
  }

  var listElm = $('#infiniteList');
  var nextTweet = " Kickstarter nostrud quis aesthetic butcher stuff. Echo park helvetica heirloom mumblecore enim kogi"
  function loadMore () {

    for (var i = 0; i < 20; i++) {
      var item = document.createElement('div');
      item.className = 'new-tweet animate-bottom'
      item.innerHTML = nextTweet;
      document.getElementById("loader").style.display = "none";
      listElm.append(item);
    }
  }

  $('#infiniteList').on('scroll', function() {
    if ($('#infiniteList').scrollTop + $('#infiniteList').height >= $('#infiniteList').height) {
    loadMoreContent();
    }
  });


});
