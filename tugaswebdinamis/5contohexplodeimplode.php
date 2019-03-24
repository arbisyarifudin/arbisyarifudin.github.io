<?php 

echo "<h2>Arbi Syarifudin | 12181630</h2>";
echo "<h3>arbisyarifudin.github.com</h3>";
echo "<br/>";

$kalimat = "Ini adalah contoh kalimat yang akan di pisah dengan fungsi explode();";

// memisahkan string menjadi array
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
echo " Data 6 = " . $data[5];
echo "<br/>";
echo " Data 7 = " . $data[6];
echo "<br/>";
echo " Data 7 = " . $data[7];

echo "<br/>";
echo "<br/>";
echo "<h3>Menggabungkan string dengan implode</h3>";
echo "<br/>";

// menggabungkan string kembali dengan fungsi implode()
echo implode(" ",$data);
?>
