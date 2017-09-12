let budgetSpent;

function onLoadBudget() {
    budgetSpent = document.querySelector('#spent');
    let budget = document.querySelector('#budget');

    // Set listeners on all the budget radio inputs to change the total budget allowed.
    const budgetTypes = document.querySelectorAll('.budget-type');
    budgetTypes.forEach((element) => {
        element.addEventListener('click', function() {
            budget.innerHTML = element.getAttribute('value');
        });
    });

    // Set listeners on all the update forms.
    const upgradeForms = document.querySelectorAll('.upgrade-form');
    upgradeForms.forEach((element) => {
        //const c = element.childNodes;
        for(let i = 0; i < upgradeForms.length; i++) {
            addListenersToUpgradeForm(element);
        }
    });
}


// For each update form...
// when a radio button is clicked
// 1. we need to check if it's enabled with its 'enabled' checkbox
// 2. we need to get its value and add it to the budgetUsed variable

function addListenersToUpgradeForm(upgradeForm) {
    const checkbox = upgradeForm.getElementsByClassName('checkbox')[0];
    checkbox.addEventListener('click', function () {
        if(checkbox.checked) {
            budgetSpent.innerHTML = parseInt(budgetSpent.innerHTML) + parseInt(checkbox.getAttribute('value'));
        } else {
            budgetSpent.innerHTML = parseInt(budgetSpent.innerHTML) - parseInt(checkbox.getAttribute('value'));
        }
    });

    const tiers = upgradeForm.getElementsByClassName('radio');

    for(let i = 0; i < tiers.length; i++) {
        tiers[i].addEventListener('click', function () {
            if (checkbox.checked) {
                budgetSpent.innerHTML = parseInt(budgetSpent.innerHTML) - parseInt(checkbox.getAttribute('value'))
                    + parseInt(tiers[i].getAttribute('value'));
            }
            checkbox.value = tiers[i].getAttribute('value');
        });
    }
}

window.addEventListener('load', onLoadBudget);