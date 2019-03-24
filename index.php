<!DOCTYPE html>
<html>
<head>
	<title>Latihan Explode dan Implode</title>
</head>
<body>

</body>
</html>

<?php 

echo "<h2>Arbi Syarifudin | 12181630</h2>";
echo "<h3>arbisyarifudin.github.com</h3>";
echo "<hr/>";

// CONTOH PERTAMA

echo "<h2>Contoh 1</h2>";
echo "<h3># Explode</h3>";
echo "Contoh Kalimat yang akan di-EXPLODE :   ";

$kalimat = "Hai, namaku Arbi Syarifudin.";

echo "<h3>".$kalimat."</h3>";

// memisahkan string menjadi array
echo "";
$data = explode(" " , $kalimat);

// tampilkan string pada $kalimat yang sudah dipisah
print_r($data);
//print_r berguna untuk menampilkan isi array

echo "<br/>";
echo "<br/>";

echo " Data 1 = " . $data[0];
echo "<br/>";
echo " Data 2 = " . $data[1];
echo "<br/>";
echo " Data 3 = " . $data[2];
echo "<br/>";
echo " Data 4 = " . $data[3];

echo "<br/>";
echo "<h3># Implode</h3>";
echo "Data ARRAY diatas akan digabungkan lagi menjadi :   ";
// menggabungkan string kembali dengan fungsi implode()
echo "<h3>".implode(" ",$data)."</h3>";

echo "<hr/>";

// CONTOH KEDUA


echo "<h2>Contoh 2</h2>";
echo "<h3># Explode</h3>";
echo "Contoh Kalimat yang akan di-EXPLODE :   ";

$kalimat = "Aku berasal dari Kebumen.";

echo "<h3>".$kalimat."</h3>";

// memisahkan string menjadi array
echo "";
$data = explode(" " , $kalimat);

// tampilkan string pada $kalimat yang sudah dipisah
print_r($data);
//print_r berguna untuk menampilkan isi array

echo "<br/>";
echo "<br/>";

echo " Data 1 = " . $data[0];
echo "<br/>";
echo " Data 2 = " . $data[1];
echo "<br/>";
echo " Data 3 = " . $data[2];
echo "<br/>";
echo " Data 4 = " . $data[3];

echo "<br/>";
echo "<h3># Implode</h3>";
echo "Data ARRAY diatas akan digabungkan lagi menjadi :   ";
// menggabungkan string kembali dengan fungsi implode()
echo "<h3>".implode(" ",$data)."</h3>";

echo "<hr/>";

// CONTOH KETIGA


echo "<h2>Contoh 3</h2>";
echo "<h3># Explode</h3>";
echo "Contoh Kalimat yang akan di-EXPLODE :   ";

$kalimat = "Umurku sekarang 24 tahun.";

echo "<h3>".$kalimat."</h3>";

// memisahkan string menjadi array
echo "";
$data = explode(" " , $kalimat);

// tampilkan string pada $kalimat yang sudah dipisah
print_r($data);
//print_r berguna untuk menampilkan isi array

echo "<br/>";
echo "<br/>";

echo " Data 1 = " . $data[0];
echo "<br/>";
echo " Data 2 = " . $data[1];
echo "<br/>";
echo " Data 3 = " . $data[2];
echo "<br/>";
echo " Data 4 = " . $data[3];

echo "<br/>";
echo "<h3># Implode</h3>";
echo "Data ARRAY diatas akan digabungkan lagi menjadi :   ";
// menggabungkan string kembali dengan fungsi implode()
echo "<h3>".implode(" ",$data)."</h3>";

echo "<hr/>";

// CONTOH KEEMPAT


echo "<h2>Contoh 4</h2>";
echo "<h3># Explode</h3>";
echo "Contoh Kalimat yang akan di-EXPLODE :   ";

$kalimat = "Sekarang Aku tinggal di Yogyakarta.";

echo "<h3>".$kalimat."</h3>";

// memisahkan string menjadi array
echo "";
$data = explode(" " , $kalimat);

// tampilkan string pada $kalimat yang sudah dipisah
print_r($data);
//print_r berguna untuk menampilkan isi array

echo "<br/>";
echo "<br/>";

echo " Data 1 = " . $data[0];
echo "<br/>";
echo " Data 2 = " . $data[1];
echo "<br/>";
echo " Data 3 = " . $data[2];
echo "<br/>";
echo " Data 4 = " . $data[3];
echo "<br/>";
echo " Data 5 = " . $data[4];

echo "<br/>";
echo "<h3># Implode</h3>";
echo "Data ARRAY diatas akan digabungkan lagi menjadi :   ";
// menggabungkan string kembali dengan fungsi implode()
echo "<h3>".implode(" ",$data)."</h3>";

echo "<hr/>";

// CONTOH KELIMA

echo "<h2>Contoh 5</h2>";
echo "<h3># Explode</h3>";
echo "Contoh Kalimat yang akan di-EXPLODE :   ";

$kalimat = "Sedang menempuh pendidikan Sarjana di El-Rahma Jogja.";

echo "<h3>".$kalimat."</h3>";

// memisahkan string menjadi array
echo "";
$data = explode(" " , $kalimat);

// tampilkan string pada $kalimat yang sudah dipisah
print_r($data);
//print_r berguna untuk menampilkan isi array

echo "<br/>";
echo "<br/>";

echo " Data 1 = " . $data[0];
echo "<br/>";
echo " Data 2 = " . $data[1];
echo "<br/>";
echo " Data 3 = " . $data[2];
echo "<br/>";
echo " Data 4 = " . $data[3];
echo "<br/>";
echo " Data 5 = " . $data[4];
echo "<br/>";
echo " Data 5 = " . $data[5];
echo "<br/>";
echo " Data 5 = " . $data[6];

echo "<br/>";
echo "<h3># Implode</h3>";
echo "Data ARRAY diatas akan digabungkan lagi menjadi :   ";
// menggabungkan string kembali dengan fungsi implode()
echo "<h3>".implode(" ",$data)."</h3>";

echo "<hr/>";

echo "<h3># SELESAI</h3>";


?>