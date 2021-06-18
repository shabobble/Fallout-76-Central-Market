function searchHandler(event) {

if (event.keyCode == 13) {
    const search = document.getElementById('searchBar').value;

    document.location.replace('/search?terms=' + encodeURIComponent(search))
}
}



document.getElementById('searchBar').addEventListener('keydown', searchHandler)