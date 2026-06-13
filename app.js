// Konfigurasi Firebase harus sama dengan di login.js
const firebaseConfig = {
    apiKey: "AIzaSyAkvMKjTC_pyErEeV8WPlAnDUw86a9NFZ8",
    authDomain: "rumahkita-f21d2.firebaseapp.com",
    projectId: "rumahkita-f21d2",
    storageBucket: "rumahkita-f21d2.firebasestorage.app",
    messagingSenderId: "492534029830",
    appId: "1:492534029830:web:0e60c3020192100028ad87"
  };


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

// Cek Status Login
auth.onAuthStateChanged((user) => {
    if (user) {
        // Tampilkan data user di halaman Account
        document.getElementById("userName").innerText = user.displayName;
        document.getElementById("userPhoto").src = user.photoURL;
    } else {
        // Jika tidak ada user login, tendang balik ke login
        window.location.href = "login.html";
    }
});

// Fungsi Logout
function logout() {
    auth.signOut().then(() => {
        window.location.href = "login.html";
    });
}

// Fungsi Ganti Menu Navigasi Bawah
function bukaMenu(idMenu, elemenNav) {
    // Sembunyikan semua section
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('active'));

    // Hilangkan efek aktif di semua icon navigasi
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(nav => nav.classList.remove('active'));

    // Tampilkan section yang dipilih & beri efek aktif pada icon yang diklik
    document.getElementById(idMenu).classList.add('active');
    elemenNav.classList.add('active');
}
