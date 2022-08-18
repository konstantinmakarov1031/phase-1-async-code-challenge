function renderShows(title){
    let showLi = document.createElement('li')
    showLi.id = "listOfShows"
    showLi.innerText = `${title.value}` 
    document.getElementById('list').appendChild(showLi)
    console.log(showLi)
}



function getAllShows(){
    fetch('http://localhost:3000/shows')
    .then(res => res.json())
    .then(shows => {
        let showName = shows.title
        console.log(showName)
        shows.forEach(show => renderShows(show))}     
)}


function initialize(){
    getAllShows()
}

initialize();  





