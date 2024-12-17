// Select the theme toggle button
const themeToggleButton = document.getElementById('theme-toggle');

// Check the current theme from local storage or default to light theme
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply the current theme to the body element
document.body.setAttribute('data-theme', currentTheme);

// Function to toggle theme
function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    
    // Toggle between 'light' and 'dark' theme
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Apply the new theme to the body
    document.body.setAttribute('data-theme', newTheme);
    
    // Save the new theme to local storage
    localStorage.setItem('theme', newTheme);
}

// Add event listener to toggle theme when the button is clicked
themeToggleButton.addEventListener('click', toggleTheme);
