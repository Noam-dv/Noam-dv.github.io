const showProjectsButton = document.getElementById('showProjects');
const showAboutButton = document.getElementById('showAbout');
const showContactButton = document.getElementById('showContact');
const projectsContainer = document.querySelector('.projects');
const aboutPage = document.querySelector('.about-page');
const contactPage = document.querySelector('.contact-page');

showProjectsButton.addEventListener('click', function() {
    projectsContainer.classList.add('show');
    aboutPage.classList.remove('show');
    contactPage.classList.remove('show');
});

showAboutButton.addEventListener('click', function() {
    aboutPage.classList.add('show');
    projectsContainer.classList.remove('show');
    contactPage.classList.remove('show');
});

showContactButton.addEventListener('click', function() {
    contactPage.classList.add('show');
    projectsContainer.classList.remove('show');
    aboutPage.classList.remove('show');
});


document.querySelectorAll('.preview-image').forEach(function(item) {
    item.addEventListener('click', function() {
      const dataImage = this.getAttribute('data-image'); 
      switch (dataImage) {
        case '1':
          window.open('https://www.regionnews.online', '_blank'); 
          break;
        default:
          window.open('https://github.com/Noam-dv', '_blank'); 
          break;
      }
    });
  });