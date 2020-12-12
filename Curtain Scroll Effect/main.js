window.addEventListener("scroll", function() {
    var target = document.querySelectorAll('.curtain');
    var i=0, len=target.length;
    for(i; i<len; i++){
      var pos = window.pageYOffset * target[i].dataset.rate;
      target[i].style.transform='translate('+pos+ 'px, 0px)'
    }
    
  });