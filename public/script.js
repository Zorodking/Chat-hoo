document.getElementById('signup').addEventListener('click', function() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
  
    if (username && password) {
      // Replace with your actual signup logic, e.g., sending data to the server
      console.log('Sign up with username:', username, 'and password:', password);
      alert(`Signup successful for ${username}`);
    } else {
      alert('Please fill out all fields.');
    }
  });
  