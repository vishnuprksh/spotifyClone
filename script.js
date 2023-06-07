// Get the language button and language window elements
const languageButton = document.querySelector('.language-button');
const languageWindow = document.querySelector('.language-window');

// Get the list of language links
const languageLinks = languageWindow.querySelectorAll('a');

// Attach click event listeners to each language link
languageLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const selectedLanguage = this.textContent;
        updateLanguage(selectedLanguage);
        hideLanguageWindow();
    });
});

// Update the language on the button
function updateLanguage(language) {
    const buttonTextElement = languageButton.querySelector('.button-text');
    buttonTextElement.textContent = language;
}

// Show or hide the language window
function hideLanguageWindow() {
    languageWindow.style.display = 'none';
}

function showLanguageWindow() {
    languageWindow.style.display = 'block';
}

// Toggle the visibility of the language window
function toggleLanguageWindow() {
    if (languageWindow.style.display === 'none') {
        showLanguageWindow();
    } else {
        hideLanguageWindow();
    }
}

// Attach click event listener to the language button
languageButton.addEventListener('click', toggleLanguageWindow);


// for toggling the menu bar
function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    var mainContent = document.querySelector('main');

    if (sidebar.style.display === 'none') {
        sidebar.style.display = 'block';
    } else {
        sidebar.style.display = 'none';
    }
}

window.addEventListener('resize', function () {
    var sidebar = document.querySelector('.sidebar');
    var mainContent = document.querySelector('main');

    if (window.innerWidth > 500) {
        sidebar.style.display = 'block';
        mainContent.style.marginLeft = '200px'; // Adjust the margin when the viewport is wider than 500px
    } else {
        sidebar.style.display = 'none';
        mainContent.style.marginLeft = '0'; // Reset the margin when the viewport is narrower than 500px
    }
});


// Attach click event listener to the menu button
const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', toggleSidebar);