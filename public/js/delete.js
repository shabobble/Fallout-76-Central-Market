const deleteButtons = document.querySelectorAll('.deleteBtn')

async function deleteItemHandler(event) {
    event.preventDefault();
    console.log('You clicked the delete button.');
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/weapons/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
            weapon_id: id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard/view-edit');
    } else {
        alert(response.statusText);
    }
}

for(each of deleteButtons) {
    each.addEventListener('click', deleteItemHandler);
}
