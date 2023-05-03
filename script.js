const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowheight= window.innerHeight;
    const reveal= 140;

    if (sectionTop + reveal<  windowheight ) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
});