const title = document.getElementById('title');
const helloButton = document.getElementById('hello-button');
const errorButton = document.getElementById('error-button');
const homeButton = document.getElementById('home-button');

const initialTitle = title.innerText;

let calledBackend = false;

function updateButtonVisibility() {
    homeButton.style.display = calledBackend ? '' : 'none';
    helloButton.style.display = !calledBackend ? '' : 'none';
    errorButton.style.display = !calledBackend ? '' : 'none';
}

function addClickEventToButton(button, endpoint) {
    button.addEventListener('click', e => {
        fetch(endpoint)
            .then((response) => response.text())
            .then((text) => {
                title.innerText = text
                calledBackend = true;
                updateButtonVisibility();
            })
            .catch(error => {
                title.innerText = error.response.data.message;
            });
    });
}

homeButton.addEventListener('click', e => {
    calledBackend = false;
    title.innerText = initialTitle;
    updateButtonVisibility();
});

addClickEventToButton(helloButton, '/api/hello');
addClickEventToButton(errorButton, '/api/error');