function confirmDelete(blogPostId) {
    let isConfirmed = confirm('Are you sure you want to delete this blog post?');
    if (isConfirmed) {
        window.location.href = '/blog/delete/' + blogPostId;
    }
}

 // Function to hide the logo on mobile screens
 function hideLogoOnMobile() {
    const logo = document.querySelector('.img-hide-custom'); // Select the logo element

    // Check if the screen width is less than or equal to 767px (typical mobile screen size)
    if (window.innerWidth <= 767) {
      logo.style.display = 'none'; // Hide the logo
    } else {
      logo.style.display = 'block'; // Show the logo for larger screens
    }
  }

  // Initial call to hide the logo based on the screen size on page load
  window.addEventListener('load', hideLogoOnMobile);

  // Listener for window resize events to dynamically update logo visibility
  window.addEventListener('resize', hideLogoOnMobile);