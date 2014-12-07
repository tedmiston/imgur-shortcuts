$(function(){
  function clickSelector(selector) {
    var firstResult = $(selector)[0];
    firstResult.click();
  }

  function bindKeys() {
    Mousetrap.bind(['k', ','], function() {
      clickSelector('#side-gallery div.next-prev-browse div.next-prev div.navPrev');
    });

    Mousetrap.bind(['j', '.'], function() {
      clickSelector('#side-gallery div.next-prev-browse div.next-prev div.navNext');
    });

    Mousetrap.bind(['l', 'f'], function() {
      clickSelector('#under-image div.favorite-icon div.favorite-image');
    });

    Mousetrap.bind(['r', 'v', 'c'], function() {
      clickSelector('#stats-reddit');
    });
  }

  // setup
  bindKeys()
});
