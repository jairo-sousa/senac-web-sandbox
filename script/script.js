window.addEventListener('DOMContentLoaded', () => {
    console.log("-- Olá mundo --");

    const displayName = document.getElementById("displayName")
    const nameToDisplay = document.getElementById("nameToDisplay")

    sendName.addEventListener("click", ()=>{
        displayName.innerHTML = nameToDisplay.value
        displayName.classList.add("color")
    })
});
