document.getElementById('signup').addEventListener('click', function() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
  
    if (username && password) {
      // Simulate an API call to the server
      fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
      .then(response => {
        if (response.status === 200) {
          alert('Signup successful for ' + username);
          window.location.href = 'chat.html'; // Redirect to chat page
        } else {
          alert('Signup failed');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred during signup');
      });
    } else {
      alert('Please fill out all fields.');
    }
  });
  