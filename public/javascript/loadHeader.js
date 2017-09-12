function onLoad() {
    const header = document.querySelector('#header');

    const req = new XMLHttpRequest();
    req.open('GET', 'public/html/header.html', true);
    req.addEventListener('load', function (event) {
        if (req.responseText) {
            header.innerHTML = req.responseText;
        }
    });
    req.addEventListener('error', function (event) {
        header.innerHTML = document.createTextNode('There was a problem loading the website. Pleasse agin.');
    });
    req.send();
}

window.addEventListener('load', onLoad);