function muncul(id) {
    // Sembunyikan semua elemen dengan class "text"
    const allTexts = document.querySelectorAll('.text');
    allTexts.forEach(function(text) {
        if (text.id !== id) {
            text.style.display = 'none';
        }
    });

    // Toggle elemen yang dipilih
    const selected = document.getElementById(id);
    if (selected.style.display === 'block') {
        selected.style.display = 'none';
    } else {
        selected.style.display = 'block';
    }
}

function scrolotomatis(id) {
    const target = document.getElementById(id);
    const offset = 150; // Ubah sesuai tinggi navbar kamu
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = target.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}
