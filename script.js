const btn = document.getElementById('btn');
const music = document.getElementById('music');


btn.addEventListener("click", func, {once:true});

function func() {
    alert ("This song about to play reminds me of you! I heard it the first time and this was definetely for you.");
    music.play();
}