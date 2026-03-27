document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const statusMessage = document.getElementById('statusMessage');
  const submitBtn = document.getElementById('submitBtn');

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Reset status message
    statusMessage.className = 'hidden';
    statusMessage.textContent = '';
    
    // UI Loading state
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Capture form data
    const formData = new FormData(contactForm);
    const data = {
      name: formData.get('name').trim(),
      email: formData.get('email').trim(),
      message: formData.get('message').trim()
    };

    try {
      // Send POST request to backend using Fetch API
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        // Success message from backend
        showStatus(result.message, 'success');
        contactForm.reset();
      } else {
        // Form Validation / Server Error from backend
        showStatus(result.error || 'Something went wrong.', 'error');
      }
    } catch (error) {
      // Network Error
      console.error('Fetch error:', error);
      showStatus('Unable to connect to the backend server. Is it running on port 5000?', 'error');
    } finally {
      // Restore UI
      submitBtn.textContent = originalBtnText;
      submitBtn.disabled = false;
    }
  });

  // Helper function to animate and show status message
  function showStatus(text, type) {
    statusMessage.textContent = text;
    statusMessage.className = `show ${type}`;
    
    // Auto hide after 5 seconds
    setTimeout(() => {
      statusMessage.classList.remove('show');
      setTimeout(() => {
        statusMessage.classList.add('hidden');
      }, 500); // Wait for transition
    }, 5000);
  }
});
