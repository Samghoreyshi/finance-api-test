

fetch('https://finance-api-test-production.up.railway.app/results')
.then(response => response.json())
.then(data => console.log(data));

