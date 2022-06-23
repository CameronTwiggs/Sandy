const songs = ["Easy On Me","Stay","Heat Waves","Shivers","Industry","Cold Heart","Bad Habbits","Nerd"]
const list = document.querySelector(".song-list")

function updateSongs(songs,element) {
    let result = "";
    for (let song of songs) {
        result += `<li class="song-item">${song} <button>Move Up</button> <button>Move Down</button> <button>Remove</button></li>`
    }
    element.innerHTML = result
}


updateSongs(songs,list)
