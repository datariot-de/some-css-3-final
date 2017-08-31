(function($) {
  $('button').click(function(event) {
    if($(this).toggleClass('run').hasClass('run')) {
      $(this).find('strong').text('Start');
    } else {
      $(this).find('strong').text('Stop');
    }
  });
})(jQuery);
