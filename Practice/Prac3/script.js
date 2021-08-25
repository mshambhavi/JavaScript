import Songs from "./Songs.js"

const newSong = new Songs(
    "Bohemian Rhapsody",
    "Queen",
    "Rock",
    "6 min"
)

const content = `
<article>
<h1>Song Detail: </h1>
<ul>
    <li>Name: ${newSong.name}</li>
    <li>Singer: ${newSong.singer}</li>
    <li>Genre: ${newSong.genre}</li>
    <li>Length: ${newSong.length}</li>
</ul>
</article>
`;

document.body.innerHTML = content;