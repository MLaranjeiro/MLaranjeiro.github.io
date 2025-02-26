$(document).ready(function() {

    // Sticky header
    $(window).scroll(function() {
      $(".header-area").toggleClass("sticky", $(this).scrollTop() > 1);
    });
  
    // Smooth scrolling with offset for sticky header
    $('a[href*="#"]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - $('.header-area').outerHeight()
      }, 500, 'linear');
    });
  
    // Initial content revealing
    ScrollReveal({
      distance: "100px",
      duration: 2000,
      delay: 200
    });
  
    ScrollReveal().reveal(".header a, .profile-photo, .about-content, .education", { origin: "left" });
    ScrollReveal().reveal(".header ul, .profile-text, .about-skills, .experience", { origin: "right" });
    ScrollReveal().reveal(".project-title, .contact-title, .experience-title, .education-title", { origin: "top" });
    ScrollReveal().reveal(".projects, .contact", { origin: "bottom" });
    
  });
