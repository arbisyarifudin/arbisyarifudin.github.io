var banyakKotaks = 6; // variabel untk deklarasikan berapa banyaknya kotaks
var warnas = []; // buatWarnaAcak(bilangan)
var warnadiAmbil; // warna yang diambil 
var kotaks = document.querySelectorAll(".kotak"); // var kotak
var warnaDisplay = document.getElementById("warnaDisplay"); // Kode warna yang akan ditampilkan
var h1 = document.querySelector("h1");
var tombolReset = document.querySelector("#reset");
// var tombolEasy = document.querySelector("#easyTbl");
// var tombolHard = document.querySelector("#hardTbl");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	// persiapkan tombol mode
	setUpModeButton();
	// persiapkan kotak2
	setUpKotaks();
	// reset 
	reset();
};

function setUpModeButton() {
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			//menghapus class yang aktif
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			//menambahkan class
			this.classList.add("selected");

			this.textContent === "Mudah" ? banyakKotaks = 3: banyakKotaks = 6;
			// if(this.textContent === "Mudah") {
			// 	banyakKotaks = 3;
			// } else {
			// 	banyakKotaks = 6;
			// }
			reset();
		});
	}
};

function setUpKotaks() {
	for (var i = 0; i < kotaks.length; i++) {
		// tambahkan klik listener pda kotak
		kotaks[i].addEventListener("click", function(){
			// ubah tombolReset jadi "Warna Baru"
			tombolReset.textContent = "Warna Baru";

			// ambil data warna yang di klik ke dlm variabel
			var warnadiKlik = this.style.backgroundColor;
			// bandingkan data
			if(warnadiKlik === warnadiAmbil) {
				// ubah semua warna jadi seperti warna yang diklik
				ubahWarna(warnadiKlik);
				// ubah warna h1 atau header
				h1.style.backgroundColor = warnadiKlik;
				// munculkan pesan
				pesanDisplay.textContent = "Anda Benar!";
				// ubah tombolReset jadi "Play Again"
				tombolReset.textContent = "Main lagi?";

			} else {
				// kotak hilang / hide
				this.style.backgroundColor = "#232323";
				// munculkan pesan
				pesanDisplay.textContent = "Coba lagi.";
			}
		});
	}
};


function reset(){
	// buat ulang warna baru
	warnas = buatWarnaAcak(banyakKotaks);
	// ambil warna acak baru dalam array
	warnadiAmbil = ambilWarna();
	// ubah pesanDisplay ke kode warna baru yang sama
	warnaDisplay.textContent = warnadiAmbil;
	// kembalikan teks tombol reset dari main lagi ke warna baru
	this.textContent = "Warna Baru"

	// ubah warna kotak2nya
	for (var i = 0; i < kotaks.length; i++) {

		if(warnas[i]) {
			kotaks[i].style.display = "block";
			kotaks[i].style.backgroundColor = warnas[i];
		} else {
			kotaks[i].style.display = "none";

		}

	}
	// reset warna header
	h1.style.backgroundColor = "SteelBlue";
	// ganti / hilangkan pesan
	pesanDisplay.textContent = "";	
};

// tombolEasy.addEventListener("click", function(){
// 	// tambahan class kedalam tombol Easy/hard
// 	tombolHard.classList.remove("selected");
// 	tombolEasy.classList.add("selected");
// 	// dalam mode apa? Easy = 3
// 	banyakKotaks = 3;
// 	// buat ulang warna baru
// 	warnas = buatWarnaAcak(banyakKotaks);
// 	// ambil warna acak baru dalam array
// 	warnadiAmbil = ambilWarna();
// 	// ubah pesanDisplay ke kode warna baru yang sama
// 	warnaDisplay.textContent = warnadiAmbil;
// 	// ubah warna kotak2nya
// 	for (var i = 0; i < kotaks.length; i++) {
// 		// Cek apakah dalam mode easy atau tidak
// 		if(warnas[i]) {
// 			kotaks[i].style.backgroundColor = warnas[i];
// 		} else {
// 			kotaks[i].style.display = "none";
// 		}
// 	}
// 	// reset warna header
// 	h1.style.backgroundColor = "#232323";
// 	// ganti / hilangkan pesan
// 	pesanDisplay.textContent = "Tebak Warnanya.";	

// });


// tombolHard.addEventListener("click", function(){
// 	tombolHard.classList.add("selected");
// 	tombolEasy.classList.remove("selected");
// 	// dalam mode apa? Easy = 3
// 	banyakKotaks = 6;
// 	// buat ulang warna baru
// 	warnas = buatWarnaAcak(banyakKotaks);
// 	// ambil warna acak baru dalam array
// 	warnadiAmbil = ambilWarna();
// 	// ubah pesanDisplay ke kode warna baru yang sama
// 	warnaDisplay.textContent = warnadiAmbil;
// 	// ubah warna kotak2nya
// 	for (var i = 0; i < kotaks.length; i++) {
// 		// 
// 		kotaks[i].style.backgroundColor = warnas[i];
// 		kotaks[i].style.display = "block";
		
// 	}
// 	// reset warna header
// 	h1.style.backgroundColor = "SteelBlue";
// 	// ganti / hilangkan pesan
// 	pesanDisplay.textContent = "Tebak Warnanya.";	
// });

tombolReset.addEventListener("click", function(){ // tombol reset ulang permainan atau ganti warna baru
	reset();
});

warnaDisplay.textContent = warnadiAmbil; // merubah teks judul menjadi kode warna yang harus diambil

function ubahWarna(warna){
	//loop semua warna
	for (var i = 0; i < kotaks.length; i++) {
		// ubah tiap kotak menjadi warna yang benar
		kotaks[i].style.backgroundColor = warna;
	}
}

function ambilWarna() {
	// mengacak warna 
	var acak = Math.floor(Math.random() * warnas.length);
	return warnas[acak];
}

function buatWarnaAcak(bilangan) { // fungsi untuk menampung acakan warna ke dalam array

	// buat sebuah array
	var arr = [];

	// ulangi atau loop bilangan 
	for(var i = 0; i < bilangan; i++) {
		// ambil warna acak dan masukan/push ke dalam array
		arr.push(acakWarna());
	}

	// return nilai array
	return arr;

}

function acakWarna() { // fungsi untuk mengacak kode rgb
	// acak warna merah
	var r = Math.floor(Math.random() * 256);
	// acak warna hijau
	var g = Math.floor(Math.random() * 256);
	// acak warna biru
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

