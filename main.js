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


