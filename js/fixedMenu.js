(function(){

  function scrollY(){
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
  }

  var element = document.querySelector('.menu')
  var top = element.getBoundingClientRect().top + scrollY()
  console.log(top)
  console.log(element)

  function onScroll(){
    if (scrollY() > top){
      element.classList.add('fixed');
    } else {
      element.classList.remove('fixed');
    }
  }
  window.addEventListener('scroll', onScroll)

})()
