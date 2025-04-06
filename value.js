
function contact(){
    let nama = document.getElementById('nama');
    let value = nama.value;
    let nohp = document.getElementById('Nohp');
    let valuehp = nohp.value;
    let alamat = document.getElementById('alamat')
    let valuealamat = alamat.value;
    let pesan = `saya Ingin pesan jasa laundry 
    nama saya :    ${value}
    no hp :    ${valuehp}
    alamat : ${valuealamat}`
    const nowa = '6281293139229'
    let url = `https://wa.me/${nowa}?text=${encodeURIComponent(pesan)}`;
    window.open(url, '_blank');
}
function dynamic(){
    let judulproduct = document.getAtrributes('data-product')
    
    let imgset = document.getElementById('img-product')
    
}