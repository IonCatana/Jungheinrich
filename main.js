// Changing color of the element button when i write 1 character or more
$(function () {
  const inputElem = $('section#input-code .container .contain .column-right .input input');
  const buttonElem = $('section#input-code .container .contain .column-right .input button');

  inputElem.on('input', function () {
    const firstChar = $(this).val().charAt(0);

    // Sets the background-color of the button element to white if the first character of the input value is truthy
    buttonElem.css('background-color', firstChar ? 'white' : '');
  });
  
});



// $(function () {
//   let $buttons = $('section#evolution .container .contain .buttons .button');
//   $buttons.on('click', function () {
//     // Remove .active class from all buttons
//     $buttons.removeClass('active');

//     // Add .active to the clicked button
//     $(this).addClass('active');
//   });
// });

const buttons =document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  })
});


