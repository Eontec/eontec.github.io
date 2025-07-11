// A $( document ).ready() block.
$( document ).ready(function() {

	// DropCap.js
	var dropcaps = document.querySelectorAll(".dropcap");
	window.Dropcap.layout(dropcaps, 2);

	// Responsive-Nav
	var nav = responsiveNav(".nav-collapse");

	// Round Reading Time
    $(".time").text(function (index, value) {
      return Math.round(parseFloat(value));
    });

    // Theme Toggle
    initThemeToggle();

});

// Theme toggle functionality
function initThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');
    
    if (!toggleBtn) return;
    
    // Get current theme or detect system preference
    let currentTheme = localStorage.getItem('theme');
    
    if (!currentTheme) {
        // If no manual theme is set, detect system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            currentTheme = 'dark';
        } else {
            currentTheme = 'light';
        }
    }
    
    // Apply the theme
    applyTheme(currentTheme);
    
    // Handle toggle button click
    toggleBtn.addEventListener('click', function() {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        currentTheme = newTheme;
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });
}

function applyTheme(theme) {
    const html = document.documentElement;
    const themeIcon = document.querySelector('.theme-icon');
    
    // Set data attribute to override CSS media queries
    html.setAttribute('data-theme', theme);
    
    // Update icon only (no text since it's a floating button)
    if (themeIcon) {
        themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
    }
}

// Remove the responsive display functions since we now have a floating button


