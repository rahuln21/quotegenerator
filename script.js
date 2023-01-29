// Select elements
const selectCategory = document.querySelector('.select-category select');
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteButton = document.getElementById('new-quote-button');

// API endpoint
const apiUrl = 'https://api.quotable.io/random';

// Fetch a quote from the API
async function getQuote() {
  // Get the selected category
  const category = selectCategory.value;

  // Create the API endpoint with the selected category
  let apiEndpoint = apiUrl;
  if (category !== 'all') {
    apiEndpoint = `${apiUrl}?category=${category}`;
  }

  try {
    const response = await fetch(apiEndpoint);
    const data = await response.json();

    // Update the quote text and author
    quoteText.textContent = data.content;
    quoteAuthor.textContent = data.author;
  } catch (error) {
    console.log(error);
  }
}

// Event listeners
selectCategory.addEventListener('change', getQuote);
newQuoteButton.addEventListener('click', getQuote);

// Get the first quote when the page loads
getQuote();
