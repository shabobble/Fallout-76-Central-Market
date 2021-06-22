async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard#d-board');
      } else if (response.status === 400) {
<<<<<<< HEAD
        alert('Your username or password is incorrect.');
      }
=======
        alert('Your email or password is incorrect.');
>>>>>>> b16176d25444e2726970d544edb21a778bae6401
    }
  }
}
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);