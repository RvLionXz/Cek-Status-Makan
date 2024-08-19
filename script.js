document.getElementById('checkButton').addEventListener('click', function() {
    const makan = parseInt(document.getElementById('makanInput').value);
    let result = '';
    let quote = '';

    const messages = {
        'Anda kenyang': "Selamat! Kamu sudah makan dengan baik. Terus pertahankan pola makan sehat, karena tubuh yang bugar membutuhkan keseimbangan nutrisi. Dengan pola makan yang benar, kamu bisa mencapai tujuan-tujuanmu dengan lebih efektif dan penuh energi.",
        'Anda Harus Makan Lagi': "Jangan lupa untuk makan cukup agar tubuhmu tetap sehat dan berenergi! Memenuhi kebutuhan nutrisi adalah kunci untuk mempertahankan kesehatan dan performa tubuh. Jangan lewatkan waktu makan yang penting untuk mendukung aktivitas sehari-hari dan menjaga kesehatan.",
        'Anda Makan Terlalu Banyak': "Cobalah untuk mengontrol porsi makan agar tetap seimbang dan menjaga kesehatan. Terlalu banyak makan bisa membuat tubuh tidak nyaman dan berdampak negatif pada kesehatan. Selalu ingat untuk menjaga pola makan yang seimbang dan sesuai dengan kebutuhan tubuhmu."
    };

    if (makan === 3) {
        result = 'Anda kenyang';
        quote = messages[result];
    } else if (makan == 2) {
        result = 'Anda Harus Makan Lagi';
        quote = messages[result];
    } else if (makan > 3) {
        result = 'Anda Makan Terlalu Banyak';
        quote = messages[result];
    } else {
        result = 'Anda harus makan lebih banyak';
        quote = "Memastikan bahwa kamu mengonsumsi cukup makanan adalah langkah penting dalam menjaga kesehatan. Perhatikan kualitas makanan yang kamu konsumsi dan pastikan mendapatkan berbagai nutrisi penting untuk mendukung aktivitas harian dan kesehatan tubuh secara keseluruhan.";
    }

    document.getElementById('statusMakan').textContent = result;
    document.getElementById('quote').textContent = quote;
});
