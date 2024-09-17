// Handle login
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const credentials = { email, password };

    try {
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        });

        const result = await response.json();
        if (response.ok) {
            localStorage.setItem('token', result.token);
            alert('Login successful');
        } else {
            alert('Error: ' + result.msg);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

// Handle OTP request
document.getElementById('requestOtp').addEventListener('click', async () => {
    const contactNo = document.getElementById('contactNo').value;
    
    try {
        const response = await fetch('http://localhost:5000/api/auth/request-otp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contactNo })
        });

        const result = await response.json();
        if (response.ok) {
            alert('OTP sent successfully');
        } else {
            alert('Error: ' + result.msg);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

// Handle signup
document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('signupEmail').value;
    const contactNo = document.getElementById('contactNo').value;
    const otp = document.getElementById('otp').value;
    const university = document.getElementById('university').value;
    const role = document.getElementById('role').value;
    const password = document.getElementById('signupPassword').value;

    const userData = { username, email, contactNo, otp, university, role, password };

    try {
        const response = await fetch('http://localhost:5000/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });

        const result = await response.json();
        if (response.ok) {
            alert('Sign-up successful');
        } else {
            alert('Error: ' + result.msg);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
