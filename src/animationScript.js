document.addEventListener('DOMContentLoaded', function () {
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    const sidebar = document.querySelector('.sidebar');
    const menuButton = document.querySelector('.menu-button');

    sidebarLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        hideSidebar();
      });
    });

    menuButton.addEventListener('click', function (event) {
      event.stopPropagation(); // Prevents the body click event from triggering immediately
      showSidebar();
    });

    // Add an event listener to the entire document
    document.addEventListener('click', function (event) {
      const targetElement = event.target;

      // Check if the clicked element is part of the sidebar or menu button
      if (sidebar.contains(targetElement) || targetElement === menuButton) {
        return;
      }

      // If not, hide the sidebar
      hideSidebar();
    });

    function showSidebar() {
      sidebar.style.display = 'flex';
    }

    function hideSidebar() {
      sidebar.style.display = 'none';
    }
  });
  // Optional: You can replace the text or modify it dynamically
const textToType = "e're brewing up something special for Walkster. Check out the website soon for a sneak peek!";

const typingText = document.getElementById("typing-text");

function typeText() {
  typingText.innerHTML = 'W';
  let i = 0;
  const typeInterval = setInterval(() => {
    typingText.innerHTML += textToType[i];
    i++;
    if (i === textToType.length) {
      clearInterval(typeInterval);
      setTimeout(() => untypeText(), 1000); // Optional delay before untyping
    }
  }, 60); // Adjust the typing speed (milliseconds per character)
}

function untypeText() {
  const untypeInterval = setInterval(() => {
    typingText.innerHTML = typingText.innerHTML.slice(0, -1);
    if (typingText.innerHTML === 'W') {
        // typeText='\n';
      clearInterval(untypeInterval);
      setTimeout(() => typeText(), 100); // Optional delay before retyping
    }
  }, 50); // Adjust the untyping speed (milliseconds per character)
}

// Start the typing animation
typeText();




