const baseURl = 'https://api.spacexdata.com/v3/history';

const searchForm = document.querySelector('form');
const rocketHistory = document.querySelector('ul');

searchForm.addEventListener('submit', fetchResults);

function fetchResults(e) {
    event.preventDefault();

    fetch(baseURl)
        .then(data => {
            return data.json();
        })
        .then(json => {
            displayResults(json);
        })
}

function displayResults(json) {
    console.log('display results', json);


    let results = json.forEach(history => {
        let title = document.createElement('p');
        title.innerText = history.title;
        rocketHistory.appendChild(title);

        let details = document.createElement('p');
        details.innerText = history.details;
        rocketHistory.appendChild(details);
    })
}