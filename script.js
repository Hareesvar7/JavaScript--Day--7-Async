// Function to fetch data from the API
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to render data in cards
async function renderData() {
    const container = document.querySelector('.container');
    const data = await fetchData();

    if (!data) {
        return;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const id = document.createElement('h2');
        id.textContent = item.id;



        const name = document.createElement('h1');
        name.textContent = item.name;

        const username = document.createElement('p');
        username.textContent = item.username;

        const email = document.createElement('p');
        email.textContent = item.email;

        card.appendChild(id);
        card.appendChild(name);
        card.appendChild(username);
        card.appendChild(email);
        container.appendChild(card);
    });
}

// Call the renderData function to display data
renderData();
