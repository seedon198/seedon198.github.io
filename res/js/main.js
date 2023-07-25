// Function to toggle the mobile menu
function toggleMobileMenu() {
	const navLinks = document.querySelector('.nav-links');
	navLinks.classList.toggle('show');
  }
  
  // Function to display user data and progress on the dashboard
  function displayUserDataAndProgress() {
	// Simulated data - replace with actual user data fetched from the server
	const completedLessons = 8;
	const totalLessons = 15;
	const completedQuizzes = 3;
	const totalQuizzes = 5;
  
	// Select the progress section element
	const progressSection = document.getElementById('content');
  
	// Create and update the progress content
	const progressHTML = `
	  <div class="container">
		<h2>User Dashboard</h2>
		<div class="graph">
		  <!-- Add your graphs or charts here using libraries like Chart.js -->
		</div>
		<div class="progress">
		  <h3>Your Progress</h3>
		  <p>Completed Lessons: ${completedLessons}/${totalLessons}</p>
		  <p>Completed Quizzes: ${completedQuizzes}/${totalQuizzes}</p>
		</div>
	  </div>
	`;
  
	// Set the HTML content for the progress section
	progressSection.innerHTML = progressHTML;
  }
  
  // Function to display different pages based on the menu item clicked
  function showPage(pageName) {
	const content = document.getElementById('content');
  
	// Load the corresponding page based on the pageName
	if (pageName === 'home') {
	  // You can add your home page content here
	  content.innerHTML = `
		<div class="container">
		  <h1>Welcome to Hardware Hacking 101</h1>
		  <p>
			At Hardware Hacking 101, we are passionate about empowering individuals to understand and secure the technology that surrounds us. Our comprehensive video learning platform offers hands-on tutorials, expert-led courses, and practical projects to enhance your skills and equip you with the knowledge to explore hardware hacking, IoT security, and more.
		  </p>
		  <!-- Add your Home page content here -->
		</div>
	  `;
	} else if (pageName === 'learn') {
	  // You can add your Learn page content here
	  content.innerHTML = `
		<div class="container">
		  <h2>Learn</h2>
		  <!-- Add your Learn page content here -->
		</div>
	  `;
	} else if (pageName === 'village') {
	  // You can add your Village page content here
	  content.innerHTML = `
		<div class="container">
		  <h2>Village</h2>
		  <!-- Add your Village page content here -->
		</div>
	  `;
	}
  }
  
  // Call the displayUserDataAndProgress function when the page loads
  document.addEventListener('DOMContentLoaded', displayUserDataAndProgress);
  
  // Call the toggleMobileMenu function when the mobile menu button is clicked
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  mobileMenuButton.addEventListener('click', toggleMobileMenu);
  
  // Show the home page content by default when the page loads
  showPage('home');
  