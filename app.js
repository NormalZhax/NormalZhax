
const toggle = document.getElementById('themeToggle');

if(toggle){
toggle.onclick = ()=>{
document.body.classList.toggle('dark');
localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark':'light');
}
}

if(localStorage.getItem('theme') === 'dark'){
document.body.classList.add('dark');
}

function orderWA(game){
const msg = `Permisi, mau order jasa rank ${game}`;
window.open(`https://wa.me/6289519622832?text=${encodeURIComponent(msg)}`);
}

const searchInput = document.getElementById('searchInput');

if(searchInput){
searchInput.addEventListener('keyup', ()=>{
const cards = document.querySelectorAll('.card');
cards.forEach(card=>{
card.style.display = card.innerText.toLowerCase().includes(searchInput.value.toLowerCase()) ? 'block':'none';
});
});
}
