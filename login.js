// ini adalah bagian inisialisasi firebase
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
const provider = new firebase.auth.GoogleAuthProvider();

const SANDI_RAHASIA = "sayang123"; 
// ini adalah akhir bagian inisialisasi firebase


// ini adalah bagian interaksi highlight foto & batal klik
function highlightPhoto(event, imgElement) {
    // Mencegah event klik tembus ke background/body web (stopPropagation)
    event.stopPropagation(); 
    
    const images = document.querySelectorAll('.photo-stack img');
    images.forEach(img => img.classList.remove('active'));
    
    imgElement.classList.add('active');
}

// Logika mendeteksi klik di sembarang tempat untuk membatalkan highlight foto
document.addEventListener('click', function(event) {
    const photoStack = document.getElementById('photoStack');
    
    // Jika area yang diklik di luar kotak tumpukan foto, hilangkan efek aktif
    if (!photoStack.contains(event.target)) {
        const images = document.querySelectorAll('.photo-stack img');
        images.forEach(img => img.classList.remove('active'));
    }
});
// ini adalah akhir bagian interaksi highlight foto & batal klik


// ini adalah bagian sistem custom alert hiasan
function tampilkanAlert() {
    const alertOverlay = document.getElementById("customAlert");
    alertOverlay.classList.add("show");
}

function tutupAlert() {
    const alertOverlay = document.getElementById("customAlert");
    alertOverlay.classList.remove("show");
}
// ini adalah akhir bagian sistem custom alert hiasan


// ini adalah bagian sistem cek sandi & login firebase
function mulaiLogin() {
    const inputSandi = document.getElementById("passwordInput").value;

    if (inputSandi === SANDI_RAHASIA) {
        // Jika sandi betul, sambungkan ke pop-up Firebase Google Auth
        auth.signInWithPopup(provider)
            .then((result) => {
                window.location.href = "app.html";
            })
            .catch((error) => {
                alert("Gagal login Google: " + error.message);
            });
    } else {
        // Mengganti alert bawaan browser lama dengan custom alert baru yang cantik
        tampilkanAlert();
    }
}

// Otomatis pindah jika sesi login Google masih aktif
auth.onAuthStateChanged((user) => {
    if (user) {
        window.location.href = "app.html";
    }
});
// ini adalah akhir bagian sistem cek sandi & login firebase
