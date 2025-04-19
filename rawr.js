function muncul(id) {
    // Sembunyikan semua elemen dengan class 'options'
    const allOptions = document.querySelectorAll('.options');
    allOptions.forEach(option => {
        if (option.id !== id) {
            option.style.display = 'none';
        }
    });

    // Toggle tampilan options yang diklik
    const current = document.getElementById(id);
    if (current.style.display === 'block') {
        current.style.display = 'none';
    } else {
        current.style.display = 'block';
    }
}
