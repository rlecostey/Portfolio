(function(){

  function scrollY(){
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
  }

  var element = document.querySelector('.menu')
  var top = element.getBoundingClientRect().top + scrollY()
  var menuTitles = document.querySelectorAll('.menu-title')

  for(var i = 0; i < menuTitles.length; i++){
    var title = menuTitles[i]
    function activeTitle(){
      var oldActiveTitle = document.querySelector('.active')
      if (oldActiveTitle !== null){
        oldActiveTitle.classList.remove('active')
      }
      this.classList.add('active')
    }
    title.addEventListener('click', activeTitle)
  }

  function onScroll(){
    if (scrollY() > top){
      element.classList.add('fixed');
    } else {
      element.classList.remove('fixed');
    }
  }
  window.addEventListener('scroll', onScroll)

})()
