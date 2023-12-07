//Main Nav script
document.addEventListener("DOMContentLoaded", function() {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const welcomeText = document.querySelector(".navbar-text");

    navbarToggler.addEventListener("click", function() {
      if (welcomeText.style.display !== "none") {
        welcomeText.style.display = "none";
      } else {
        welcomeText.style.display = "block";
      }
    });
  });

//Home Page Script
function typeText() {
    const startWritingElement = document.getElementById('startWriting');
    const textToType = " Start Writing!";
    let index = 0;

    function typeNextCharacter() {
      if (index < textToType.length) {
        startWritingElement.textContent += textToType.charAt(index);
        index++;

        setTimeout(typeNextCharacter, 100); // Adjust typing speed here (milliseconds)
      }
    }

    typeNextCharacter(); // Start typing immediately

    setTimeout(() => {
      startWritingElement.textContent = ''; // Clear the text after typing once
      setTimeout(typeText, 3000); // Repeat the typing after a delay (adjust interval here - milliseconds)
    }, textToType.length * 100 + 2000); // Adjust the time before the text clears
  }

  window.addEventListener('load', typeText);


// Delete button pop-up
function confirmDelete(blogPostId) {
    let isConfirmed = confirm('Are you sure you want to delete this blog post?');
    if (isConfirmed) {
        window.location.href = '/blog/delete/' + blogPostId;
    }
}

//Add data page script
document.addEventListener("DOMContentLoaded", function() {
    const titleTextField = document.getElementById("titleTextField");
    const charCountDisplay = document.getElementById("charCount");

    titleTextField.addEventListener("input", function() {
        const currentLength = titleTextField.value.length;
        charCountDisplay.textContent = `${currentLength}/60`;
    });
});

//Footer scripts
function toggleNamesPopup() {
    const namesPopup = document.getElementById('namesPopup');
    namesPopup.style.display = namesPopup.style.display === 'none' ? 'block' : 'none';
}

function openLinkedIn(name) {
    const linkedinProfiles = {
        'Purva': 'https://www.linkedin.com/in/purva-patel-78a10121b/',
        'Purvam': 'https://www.linkedin.com/in/purvampatel/',
        'Chinmaya': 'https://www.linkedin.com/in/chinmaya-ramani-b89308254/',
        'Saaketh': 'https://www.linkedin.com/in/saaketh-potluri-a76a2b272/',
    };

    if (linkedinProfiles[name]) {
        window.open(linkedinProfiles[name], '_blank');
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