// Wait for the DOM to be fully loaded before executing the JavaScript
document.addEventListener('DOMContentLoaded', function () {

	// Example: Function to handle a button click event
	function handleButtonClick() {
	  alert('Button clicked!');
	  // Add your code here to handle the button click event
	}
  
	// Example: Adding a click event listener to a button with the class "button"
	const buttonElement = document.querySelector('.button');
	if (buttonElement) {
	  buttonElement.addEventListener('click', handleButtonClick);
	}
  
	// Your other JavaScript functions and event listeners can be added here
  
	// Example: Function to toggle a mobile navigation menu
	function toggleMobileMenu() {
	  const nav = document.querySelector('nav');
	  nav.classList.toggle('show');
	}
  
	// Example: Adding a click event listener to a button with the class "button"
	const buttonElement = document.querySelector('.button');
	if (buttonElement) {
	  buttonElement.addEventListener('click', handleButtonClick);
	}

  	// Example: Function to toggle a mobile navigation menu
	function toggleMobileMenu() {
		const nav = document.querySelector('nav');
		nav.classList.toggle('show');
	  }

	// Example: Function to fetch data from a server using the Fetch API
	async function fetchDataFromServer() {
	  try {
		const response = await fetch('https://api.example.com/data');
		if (!response.ok) {
		  throw new Error('Network response was not ok');
		}
		const data = await response.json();
		// Add your code here to handle the fetched data
	  } catch (error) {
		console.error('Error fetching data:', error);
	  }
	}
  
	// Call the fetchDataFromServer function
	fetchDataFromServer();
  
  });
  
