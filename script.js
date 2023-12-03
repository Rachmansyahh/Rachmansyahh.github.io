document.addEventListener('DOMContentLoaded', function () {
    // Inisialisasi pemutar musik dengan Howler.js
    const sound = new Howl({
        src: ['path_ke_lagu/your_song.mp3'],
        volume: 1.0,
        loop: true
    });

    // Toggle play/pause ketika tombol dipencet
    const playPauseBtn = document.getElementById('playPauseBtn');
    playPauseBtn.addEventListener('click', function () {
        if (sound.playing()) {
            sound.pause();
            playPauseBtn.innerHTML = '&#9654; Putar';
        } else {
            sound.play();
            playPauseBtn.innerHTML = '&#9616;&#9616; Jeda';
        }
    });

    // Mengatur volume
    const volumeSlider = document.getElementById('volumeSlider');
    volumeSlider.addEventListener('input', function () {
        sound.volume(volumeSlider.value / 100);
    });

    // Aktifkan BaguetteBox untuk galeri foto
    baguetteBox.run('.gallery');

    // Inisialisasi PDF.js untuk menampilkan PDF
    const pdfViewer = document.querySelector('.pdf-viewer iframe');
    const pdfSrc = 'path_ke_pdf/surat_cinta.pdf';

    // Menggunakan PDF.js untuk menampilkan PDF
    pdfjsLib.getDocument(pdfSrc).promise.then(function(pdfDoc) {
        const numPages = pdfDoc.numPages;
        pdfViewer.src = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${pdfSrc}`;
    });
});
