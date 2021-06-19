const contactButtons = document.querySelectorAll('.contactBtn')

async function contactItemHandler(event) {
    event.preventDefault();
    console.log('You clicked the contact button.')
    const id = event.target.getAttribute('data-id')
    const type = event.target.getAttribute('data-type')

    const response = await fetch('api/contact', {
        method: 'POST',
        body: JSON.stringify({
            id,
            type
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        window.alert('Message sent successfully.')
    } else {
        alert(response.statusText);
    }
}

for(each of contactButtons) {
    each.addEventListener('click', contactItemHandler)
}