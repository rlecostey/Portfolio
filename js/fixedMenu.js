(function(){

  function scrollY(){
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
  }

  var element = document.querySelector('.menu')
  var top = element.getBoundingClientRect().top + scrollY()
  console.log(top)
  var menuTitles = document.querySelectorAll('.menu-title')
  var bannerButton = document.querySelector('.btn-banner')
  bannerButton.addEventListener('click', function () {
    menuTitles[0].classList.add('active')
    for ( let i = 1; i < menuTitles.length; i++) {
      menuTitles[i].classList.remove('active')
    }
  })

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

  // var macFlightPicture = document.querySelector('.mac-flight-interface')
  // var player = document.querySelector('#player')
  // var video = document.querySelector("#ourvideo")
  // var touchDevice = ('ontouchstart' in document.documentElement);

  // function displayPlayer(){
  //   macFlightPicture.style.display = "none";
  //   player.style.display = "block";
  //   video.load();
  //   video.play();
  //   // document.getElementById("ourvideo").click();
  // }
  // if (touchDevice){
  //   macFlightPicture.addEventListener('click', displayPlayer).fadeIn( "slow" )
  //   player.setAttribute('width', '1px');
  //   player.setAttribute('height', '1px');
  //   player.setAttribute('scrolling', 'no');
  //   player.style.border="0px";
  // } else {
  //   macFlightPicture.addEventListener('click', displayPlayer)
  // }

$('.video-modal').on('click', function(e){
  console.log("show");
  $( '#' + $(this).data('modal-id') ).modal();
});

$('body').on('hidden.bs.modal', function(e){
  console.log("hide")
  var video = document.getElementsByTagName("video");
  video[0].load();
});


//  function hidePlayer(){
//     player.style.display = "none";
//     macFlightPicture.style.display = "";
//  }
//  video.addEventListener('ended', hidePlayer).fadeOut( "slow" )


})()
