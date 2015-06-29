function $SVCOdefer(method) {
    if (window.jQuery)
        method();
    else
        setTimeout(function() { $SVCOdefer(method) }, 50);
}

function $SVAppendToHeader() {
    $('.book-header').prepend(
      '<a href="http://sv.co" class="btn pull-left">SV.CO</a>'
    )
  }

$SVCOdefer(function() {
  $($SVAppendToHeader());
});