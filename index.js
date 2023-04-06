let chekbox = document.getElementsByTagName("input")[0];
let body = document.body;
console.log(chekbox);
chekbox.addEventListener("click" ,darkMode);
function darkMode(){
  if(chekbox.checked){
    body.style.backgroundColor="white"
    body.style.color="black"
  }
  else{
    body.style.backgroundColor="#161a20"
body.style.color="white"
  }
}


$(window).scroll(function() {
  $('.Scroll-righttoleft').each(function() {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100) {
          $(this).addClass('visible');
      }
  });
});



$(window).scroll(function() {
  $('.Scroll-lefttoright').each(function() {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100) {
          $(this).addClass('visible');
      }
  });
});




