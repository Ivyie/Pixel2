
```
const searchInput = document.querySelector('input[type="search"]');
const searchResults = document.querySelector('.search-results');

searchInput.addEventListener('input', (e) => {
const searchTerm = e.target.value.toLowerCase();
const businesses = document.querySelectorAll('.business');

businesses.forEach((business) => {
const businessName = business.querySelector('h3').textContent.toLowerCase();

if (businessName.includes(searchTerm)) {
business.classList.add('show');
} else {
business.classList.remove('show');
}
});
});
```
