let HOST = 'http://localhost:8002';

if (['gcsconsultant.com', 'https://gcsconsultant.com'].includes(window.location.hostname)) {
  HOST = 'https://api.gcsconsultant.in';
} else {
  HOST = 'https://admin.gcsconsultant.com';
}

let USER_ROUTE = '/admin/user';
let PUBLIC_ROUTE = '/admin/user';
let BASE_URL = HOST + USER_ROUTE;

function submitForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(formData).toString()
  })
  .then(response => {
    if (response.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Thanks you for contact us',
        text: 'We will contact you soon.'
    })
    event.target.reset();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please enter valid email'
    })
    }
  })
  .catch(error => {
    Swal.fire({
      icon: 'error',
      title: 'An error occurred while sending your message',
    })
    console.error(error);
  });
}
