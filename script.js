// script.js

// Fungsi untuk mendeteksi scroll dan mengaktifkan animasi
function revealOnScroll() {
    // Ambil semua elemen yang memiliki class 'fade-in'
    const reveals = document.querySelectorAll('.fade-in');

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        // Jarak elemen dari atas halaman
        let elementTop = reveals[i].getBoundingClientRect().top;
        // Seberapa dekat elemen ke tengah layar sebelum muncul (makin besar makin cepat)
        let elementVisible = 150; 

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active'); // Tambahkan class 'active' untuk trigger CSS transition
        } else {
            // (Opsional) Hapus jika ingin elemen hilang saat scroll ke atas lagi
            // reveals[i].classList.remove('active'); 
        }
    }
}

// Jalankan fungsi revealOnScroll setiap kali user melakukan scroll
window.addEventListener('scroll', revealOnScroll);

// Jalankan sekali saat halaman pertama kali dimuat (jika elemen sudah terlihat)
revealOnScroll();