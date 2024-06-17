document.addEventListener("DOMContentLoaded", function() {
    // Page elements
    const loginPage = document.getElementById('login-page');
    const forgotPasswordPage = document.getElementById('forgot-password-page');
    const resetPasswordPage = document.getElementById('reset-password-page');
    const registerPage = document.getElementById('register-page');
    const courseSelectionPage = document.getElementById('course-selection-page');
    const semesterSelectionPage = document.getElementById('semester-selection-page');
    const syllabusPage = document.getElementById('syllabus-page');

    // Form elements
    const loginForm = document.getElementById('login-form');
    const forgotPasswordForm = document.getElementById('forgot-password-form');
    const resetPasswordForm = document.getElementById('reset-password-form');
    const registerForm = document.getElementById('register-form');
    const courseSelectionForm = document.getElementById('course-selection-form');
    const semesterSelectionForm = document.getElementById('semester-selection-form');

    // Links
    const forgotPasswordLink = document.getElementById('forgot-password-link');
    const registerLink = document.getElementById('register-link');

    // Event Listeners
    forgotPasswordLink.addEventListener('click', function() {
        loginPage.classList.add('hidden');
        forgotPasswordPage.classList.remove('hidden');
    });

    registerLink.addEventListener('click', function() {
        loginPage.classList.add('hidden');
        registerPage.classList.remove('hidden');
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Implement login functionality
        // On success:
        loginPage.classList.add('hidden');
        courseSelectionPage.classList.remove('hidden');
    });

    forgotPasswordForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Implement forgot password functionality
        // On success:
        forgotPasswordPage.classList.add('hidden');
        resetPasswordPage.classList.remove('hidden');
    });

    resetPasswordForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Implement reset password functionality
        // On success:
        alert('Password reset successfully!');
        resetPasswordPage.classList.add('hidden');
        loginPage.classList.remove('hidden');
    });

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Implement registration functionality
        // On success:
        alert('Register successfully done!');
        registerPage.classList.add('hidden');
        loginPage.classList.remove('hidden');
    });

    courseSelectionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Implement course selection functionality
        // On success:
        courseSelectionPage.classList.add('hidden');
        semesterSelectionPage.classList.remove('hidden');
    });

    semesterSelectionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Implement semester selection functionality
        // On success:
        semesterSelectionPage.classList.add('hidden');
        syllabusPage.classList.remove('hidden');
        document.getElementById('syllabus-content').innerText = 'Here is the syllabus for your selected course and semester.';
    });
});
