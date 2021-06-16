async function armorFormHandler(event) {
    event.preventDefault();

    const mainEffect = document.getElementById('main-effect').value;
    const majorEffect = document.getElementById('major-effect').value;
    const minorEffect = document.getElementById('minor-effect').value;
    const armorType = document.getElementById('armor-type').value;
    const capsValue = document.getElementById('caps-value').value;

    const response = await fetch('/api/armor', {
        method: 'POST',
        body: JSON.stringify({
            mainEffect,
            majorEffect,
            minorEffect,
            armorType,
            capsValue
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText)
    };
};

document.querySelector('.new-armor-form').addEventListener('submit', armorFormHandler);