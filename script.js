  var hamburger = document.querySelector('.hamburger');
  var navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
  

  var hamburger = document.querySelector('.hamburger');
  var navLinks = document.querySelector('.nav-links');
  const xmark = document.querySelector('.xmark');

  hamburger.addEventListener('click', () => {
    navLinks.classList.add('show');
    xmark.style.display = 'block';
  });

  xmark.addEventListener('click', () => {
    navLinks.classList.remove('show');
    xmark.style.display = 'none';
  });


 function clearDesktopSearch() {
    document.getElementById('desktopSearch').value = '';
  }

  function clearMobileSearch() {
    document.getElementById('mobileSearch').value = '';
  }




  