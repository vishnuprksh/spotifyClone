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
