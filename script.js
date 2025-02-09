// Function to handle user registration
document.getElementById('registrationForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const team = document.getElementById('team').value;
    const contact = document.getElementById('contact').value;

    // Get existing users from local storage or initialize an empty array
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check for existing user with the same email
    const userExists = users.some(user => user.email === email);

    if (userExists) {
        document.getElementById('message').innerText = 'Error: Email already exists.';
    } else {
        // Create a new user object
        const newUser  = {
            name: name,
            email: email,
            team: team,
            contact: contact
        };

        // Add new user to the array
        users.push(newUser );
        // Save back to local storage
        localStorage.setItem('users', JSON.stringify(users));

        window.location.href = 'success.html'; // Redirect to success page
            document.getElementById('registrationForm').reset(); // Reset the form
    }
});

// Function to handle admin login
document.getElementById('adminLoginForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const password = document.getElementById('adminPassword').value;
    const adminPassword = 'admin123'; // Hardcoded password for admin

    if (password === adminPassword) {
        // Redirect to the dashboard
        window.location.href = 'admin_dashboard.html';
    } else {
        alert('Incorrect password. Please try again.');
    }
});

// Function to display registered users in the admin dashboard
function displayUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; // Clear the list

    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.length === 0) {
        userList.innerHTML = '<li>No users registered yet.</li>';
    } else {
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = '${user.name} - ${user.team} - ${user.game} - ${user.contact}'; // Display user name and team
            userList.appendChild(li);
        });
    }
    
}

// Function to go back to the admin login page
function goBack() {
    window.location.href = 'admin.html'; // Redirect to admin login page
}
function Back() {
    window.location.href = 'index.html'; // Redirect to admin login page
}
// Call the displayUsers function when the admin dashboard page loads
if (document.getElementById('userList')) {
    window.onload = displayUsers;
}

// Toggle password visibility in admin login
document.getElementById('showPassword')?.addEventListener('change', function() {
    const passwordField = document.getElementById('adminPassword');
    passwordField.type = this.checked ? 'text' : 'password'; // Show or hide password
});