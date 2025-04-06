
const navactive = document.querySelector('.navbar')
 const Navscroll = () => {
    if(window.scrollY > 70){
        navactive.classList.add('nav-bg')
    }else {
       navactive.classList.remove('nav-bg')
    }
 } 

window.addEventListener('scroll',Navscroll);

let btnmenu = document.getElementById('btn-menu');
let menuToggle = document.querySelector('.toggle-menu');


btnmenu.addEventListener('click', function () {
    if (menuToggle.classList.contains('show')) {
        menuToggle.classList.remove('show'); // Hapus kelas show
        menuToggle.style.opacity = '0'; // Sembunyikan menu
    } else {
        menuToggle.classList.add('show'); // Tambah kelas show
    }
});

function nowa (){
  const nomor = '6281293139229'; 
  const pesan = 'Saya Pesan Jasa Laundry nyaa dong ! .'; 
  const url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;
  window.open(url, '_blank');
}
function pesan(){
 window.location.href = 'http://127.0.0.1:3000/pesan.html'
}
