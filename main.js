// Changing color of the element button when i write 1 character or more

const inputElem = $('section#input-code .container .contain .column-right .input input');
const buttonElem = $('section#input-code .container .contain .column-right .input button');

inputElem.on('input', function () {
  const firstChar = $(this).val().charAt(0);

  // Sets the background-color of the button element to white if the first character of the input value is truthy
  buttonElem.css('background-color', firstChar ? 'white' : '');
});




// SECTION: EVOLUTION
const buttons = document.querySelectorAll('section#evolution .container .contain .buttons .button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  })
});


//Footer Anchor Link scolling to the header section
const anchorLink = document.querySelector('footer.egloo .container .avon-logo .anchor-link');

anchorLink.addEventListener('click', () => {
  const header = document.querySelector('header');
  header.scrollIntoView({
    behavior: 'smooth'
  });
});

// SECTION: Header Scrolling to the Section Course Start
const anchorLink_2 = document.querySelector('header.egloo .container .button .anchor-link-2');
const courseStart = document.querySelector('section#course-start');
anchorLink_2.addEventListener('click', () => {
  courseStart.scrollIntoView({
    behavior: 'smooth'
  });
});


// SECTION: Hero Scrolling to the Section  Section Video
const anchorLink3 = document.querySelector('section#hero .container .cont-text .button .anchor-link3');
const videoSection = document.querySelector('section#video .container .contain .video');
anchorLink3.addEventListener('click', () => {
  videoSection.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
});


// SECTION: VIDEO Pop-up Video Watching
const watchVideo = document.querySelector('section#video .container .contain .video .watch-video');
const containVideo = document.querySelector('section#video .container .contain .video .contain-video');
const closeBtn = document.querySelector('section#video .container .contain .video .contain-video .close-button');

watchVideo.addEventListener('click', () => {
  containVideo.classList.toggle('full-screen');
});

closeBtn.addEventListener('click', () => {
  containVideo.classList.remove('full-screen');
});


