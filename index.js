const logsignBtn = document.querySelector('#logsign-btn');
const loginModal = document.querySelector('#login-modal');
const loginCloseBtn = document.querySelector('#login-close-btn');
const signupLink = document.querySelector('#signup-link');
const signupModal = document.querySelector('#signup-modal');
const signupCloseBtn = document.querySelector('#signup-close-btn');
const backToLoginLink = document.querySelector('#back-to-login');

function showLoginModal() {
    signupModal.classList.add('hidden');
    loginModal.classList.remove('hidden');
}

function closeLoginModal() {
    loginModal.classList.add('hidden');
}

logsignBtn.addEventListener('click', showLoginModal);
loginCloseBtn.addEventListener('click', closeLoginModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        loginModal.classList.add('hidden');
        signupModal.classList.add('hidden');
    }
});

function showSignupModal() {
    loginModal.classList.add('hidden');
    signupModal.classList.remove('hidden');
}

signupLink.addEventListener('click', function (event) {
    event.preventDefault();
    showSignupModal();
});

//experimental
function closeSignupModal() {
    signupModal.classList.add('hidden');
}
signupCloseBtn.addEventListener('click', closeSignupModal);

//
// signupCloseBtn.addEventListener('click', () => {
//     signupModal.classList.add('hidden');
// });
//
backToLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    showLoginModal();
});

// SIGNUP
document.querySelector('#signup-modal form').addEventListener('submit', function (e) {
    e.preventDefault();

    const signupForm = document.querySelector('#signup-modal form');

    if (!signupForm.checkValidity()) {
        signupForm.reportValidity();
        return;
    }

    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.querySelector('input[placeholder="Confirm Password"]').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    if (localStorage.getItem(email)) {
        alert('User already exists. Please log in.');
    } 
    else {
    
        localStorage.setItem(email, password);
        alert('Signup successful! Please log in.');
        signupForm.reset();
        document.getElementById('signup-modal').classList.add('hidden');
        document.getElementById('login-modal').classList.remove('hidden');
    }
});



// LOGIn
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const loginForm = document.getElementById('login-form');

    if (!loginForm.checkValidity()) {
        loginForm.reportValidity();
        return;
    }

    const email = document.getElementById('usn').value;
    const password = document.getElementById('pw').value;
    const storedPassword = localStorage.getItem(email);

    if (storedPassword === null) {
        alert('No account found with this email. Please sign up.');
    } else if (storedPassword === password) {
        alert('Login successful!');
        document.getElementById('login-modal').classList.add('hidden');
        loginForm.reset();
    } else {
        alert('Incorrect password.');
    }
});


