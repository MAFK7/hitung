function countdown() {
    const targetDate = new Date('2023-11-23T16:30:00').getTime(); // Ganti dengan tanggal target Anda
    const now = new Date().getTime();
  
    const distance = targetDate - now;
  
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById('countdown').innerHTML = `
      ${days} hari 
      ${hours} jam 
      ${minutes} menit 
      ${seconds} detik
    `;
  
    if (distance < 0) {
      clearInterval(interval);
      document.getElementById('countdown').innerHTML = 'Waktu telah berakhir!';
    }
  }
  
  countdown(); // Memanggil fungsi countdown agar dijalankan segera
  
  // Update countdown setiap 1 detik
  const interval = setInterval(countdown, 1000);
  