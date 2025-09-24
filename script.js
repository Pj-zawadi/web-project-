document.addEventListener('DOMContentLoaded', function () {
    // Responsive navigation toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });

        // Close nav menu when a link is clicked (mobile UX)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Booking form validation and confirmation
    const form = document.querySelector('.booking form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const destination = form.destination.value;
            const date = form.date.value;

            // Simple email regex
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Validation
            if (!name || !email || !destination || !date) {
                alert('Please fill in all fields.');
                return;
            }
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Confirmation message
            alert(`Thank you, ${name}! Your trip to ${destination} on ${date} has been booked. We will contact you at ${email}.`);

            // Optionally, reset the form
            form.reset();
        });
    }
});