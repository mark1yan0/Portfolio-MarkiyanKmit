//Contact Form

(function () {
  // https://dashboard.emailjs.com/admin/integration
  emailjs.init('user_hvOPwbuRYEjLO5ZnYv7mF');
})();

window.onload = function () {
  let form = document.getElementById('contact-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    // these IDs from the previous steps
    emailjs.sendForm('service_hc7h2kl', 'contact_form', this).then(
      function () {
        console.log('SUCCESS!');
      },
      function (error) {
        console.log('FAILED...', error);
      }
    );
  });
};
