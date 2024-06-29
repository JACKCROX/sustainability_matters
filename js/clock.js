function updateCurrentTime() {
    const currentTimeElement = document.getElementById('current-time');
    const now = new Date();
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedTime = now.toLocaleTimeString(undefined, options);
    currentTimeElement.textContent = formattedTime;
  }
  
  updateCurrentTime(); // Call the function to display the current time initially
  
  // Optionally, update the current time every second to show the live time
  setInterval(updateCurrentTime, 1000);