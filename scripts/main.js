// Contact form validation
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const message = form.elements['message'].value.trim();
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
    // Simple email validation
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    alert('Thank you for your message!');
    form.reset();
  });
}
// Sticky note hover effect
const notes = document.querySelectorAll('.note');
notes.forEach(note => {
  note.addEventListener('mouseenter', () => {
    note.style.transform = 'scale(1.05) rotate(-2deg)';
    note.style.boxShadow = '4px 8px 24px rgba(0,0,0,0.12)';
  });
  note.addEventListener('mouseleave', () => {
    note.style.transform = '';
    note.style.boxShadow = '';
  });
}); 