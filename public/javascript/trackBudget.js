function onLoadBudget() {
    let budget = document.querySelector('#budget');

    const radios = document.querySelectorAll('.budget-type');
    radios.forEach((element) => {
        element.addEventListener('click', function() {
            budget.innerHTML = element.getAttribute('value');
        });
    });
}

window.addEventListener('load', onLoadBudget);