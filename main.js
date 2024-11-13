async function Click(event) {
  event.preventDefault();  
  // Clear previous error messages
  const nameError = document.getElementById('nameError');
  const passwordError = document.getElementById('passwordError');
  nameError.textContent = '';
  passwordError.textContent = '';

  const username = document.getElementById('Username').value;
  const password = document.getElementById('pswd').value;
  const rememberMe = document.getElementById('rememberMe').checked;
  let valid = true;

  // Validate Username
  if (username.trim() === '') {
    nameError.textContent = 'Username is required';
    nameError.style.color = "red";
    nameError.style.fontSize = "13px";
    nameError.style.paddingLeft = "15px";
    valid = false;
  } else {
    nameError.textContent = '';
  }

  // Validate Password
  if (password.trim() === '') {
    passwordError.textContent = 'Password is required';
    passwordError.style.color = "red";
    passwordError.style.fontSize = "13px";
    passwordError.style.paddingLeft = "15px";
    valid = false;
  } else {
    passwordError.textContent = '';
  }

  // Validate Remember Me
  if (!rememberMe) {
    alert('You must select "Remember me" to submit the form.');
    valid = false;
  }

  // If all validations pass, submit the form
  if (valid) {
    const data = {
      "userName": username,
      "password": password,
    };

    try {
      const response = await fetch('https://hastin-container.com/staging/app/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const result = await response.json();
        alert("User created successfully!");
        document.getElementById('form').reset(); 
      } else {
        throw new Error("User failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error in the form.");
    }
  }
}

// Toggle password visibility
function togglePassword() {
  const passwordInput = document.getElementById('pswd');
  const passwordIcon = document.getElementById('togglePassword');
  
  // Check current type and toggle it
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    passwordIcon.classList.remove('fa-eye');
    passwordIcon.classList.add('fa-eye-slash');
  } else {
    passwordInput.type = 'password';
    passwordIcon.classList.remove('fa-eye-slash');
    passwordIcon.classList.add('fa-eye');
  }
}
  

  //  if (valid) {
  //     // Set values in local storage if "Remember Me" is checked
  //     if (rememberMe) {
  //         localStorage.setItem('username', username);
  //         localStorage.setItem('password', password);
  //         localStorage.setItem('rememberMe', rememberMe);
  //     }


   