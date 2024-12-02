async function Click(event) {
  event.preventDefault();
  const nameError = document.getElementById('nameError');
  const passwordError = document.getElementById('passwordError');

  const username = document.getElementById('Username').value;
  const password = document.getElementById('pswd').value;
  let valid = true;

  if (username.trim() === '') {
      nameError.textContent = 'Username is required';
      nameError.style.color = "red";
      valid = false;
  }

  else if (username !== "ebrain") {
    nameError.textContent = " Invalid Username .";
    nameError.style.color = "red";
    nameError.style.fontSize = "13px";
    nameError.style.paddingLeft = "15px";
   valid = false;

  }
  else {
    nameError.textContent = '';
  }

  if (password.trim() === '') {
      passwordError.textContent = 'Password is required';
      passwordError.style.color = "red";
      valid = false;

  }
  else if (password !== "Ji#993te") {
    passwordError.textContent = "Invalid password";
    passwordError.style.color = "red";
    passwordError.style.fontSize = "13px";
    passwordError.style.paddingLeft = "15px";
   valid = false;
   
  }
  else {
    passwordError.textContent = '';
  }

  if (valid) {
      const data = { 
        "userName": username, 
        "password": password };

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
              // alert("User created successfully!");

              // Store token and access code in localStorage
              localStorage.setItem('opaque', result.data.opaque);
              localStorage.setItem('accessCode', result.data.accessCode);
              localStorage.setItem('jwtToken', result.data.jwt);

                //  // Display OTP success message
                //  alert("OTP verified successfully!" );

              // Call openOtpModal to display the OTP modal
              openOtpModal();
          } else {
              throw new Error("Login failed");
          }
      } catch (error) {
          console.error("Error:", error);
          alert("There was an error in the form.");
      }
  }
}

// Close OTP Modal
function closeOtpModal() {
  document.getElementById('otpModal').style.display = 'none';
  clearInterval(timerInterval);
}

// Open OTP Modal
function openOtpModal() {
  const opaque = localStorage.getItem('opaque');
  const accessCode = localStorage.getItem('accessCode');

  document.getElementById('otpPrefix').textContent = opaque;
  document.getElementById('otpInput').value = accessCode; 
  document.getElementById('otpModal').style.display = 'block';

  startTimer();

  
  document.getElementById('resendOtp').onclick = function () {
      const payload = { opaque, accessCode };
      sendOtp(payload);
      startTimer();
  };
}

let timerInterval;
function startTimer() {
  let timeRemaining = 60;
  document.getElementById('timer').textContent = "01:00";
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
      timeRemaining--;
      const minutes = Math.floor(timeRemaining / 60);
      const seconds = timeRemaining % 60;

      document.getElementById('timer').textContent =
          `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

      if (timeRemaining <= 0) {
          clearInterval(timerInterval);
          alert("OTP has expired. Please resend OTP.");
      }
  }, 1000);
}

// Validate and send OTP
async function sendOtp(data) {
  try {
      const enteredOtp = document.getElementById('otpInput').value;
      const storedOtp = localStorage.getItem('accessCode');

      if (enteredOtp !== storedOtp) {
          alert("Invalid OTP. Please enter the correct OTP.");
          return; 
      }

      const jwtToken = localStorage.getItem('jwtToken');
      if (!jwtToken) {
          alert("Authorization token is missing.");
          return;
      }

      const response = await fetch('https://hastin-container.com/staging/app/auth/access-code/validate', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `BslogiKey ${jwtToken}`
          },
          body: JSON.stringify(data),
      });

      if (response.ok) {
          const result = await response.json();
          console.log("OTP verified:", result);
          alert("OTP verified!");
          window.location = "vendor.html"; 
          document.getElementById('form').reset(); 
          clearInterval(timerInterval);
      } else {
          throw new Error("Invalid OTP.");
      }
  } catch (error) {
      console.error("Error:", error);
      alert("There was an error in OTP verification.");
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