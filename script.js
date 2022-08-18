const form = document.querySelector('form'),
  statusTxt = form.querySelector('.button-area span');

form.onsubmit = (e) => {
  e.preventDefault(); //prevent form from submitting
  statusTxt.style.color = '#fef7e5';
  statusTxt.style.display = 'block';
  statusTxt.innerText = 'Sending your message...';
  form.classList.add('disabled');

  let xhr = new XMLHttpRequest(); //creating new xml object
  xhr.open('POST', 'message.php', true); //sending post request to message.php file
  xhr.onload = () => {
    //once ajax loaded
    if (xhr.readyState == 4 && xhr.status == 200) {
      //if ajax response status is 200 & ready status is 4 means there is no error
      let response = xhr.response; //storing ajax response in a response variable
      if (
        response.indexOf('required') != -1 ||
        response.indexOf('valid') != -1 ||
        response.indexOf('failed') != -1
      ) {
        statusTxt.style.color = 'red';
      } else {
        form.reset();
        setTimeout(() => {
          statusTxt.style.display = 'none';
        }, 3000);
      }
      statusTxt.innterText = response;
      form.classList.remove('disabled');
    }
  };
  let formData = new FormData(form); // creating new FormData obj. This obj is used to send form data
  xhr.send(formData); //sending form data
};
