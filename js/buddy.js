const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddies(data))
}
const displayBuddies = data => {
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies');
    for(const buddy of buddies){
        console.log(buddy.name);
        const p = document.createElement('p');
        // p.classList.add()
        // p.innerText = buddy.email;
        p.innerHTML =  `Name: <span>${buddy.name.title} ${buddy.name.first} ${buddy.name.last} </span> Email:<span> ${buddy.email} </span>`;
        buddiesDiv.appendChild(p);
    }
    
};
// loadBuddies();