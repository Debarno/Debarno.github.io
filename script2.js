window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    var navi = document.querySelector('.nav-item');
    var logo = document.querySelector('.logo');
    if (window.scrollY > 0) {
      nav.classList.add('scrolled');
      navi.classList.add('scrolled');
      logo.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
      navi.classList.add('scrolled');
      logo.classList.add('scrolled');
    }
    
  });
