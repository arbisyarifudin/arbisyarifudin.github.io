function average(scores) {
    
    // jumlahlahkan masing-masing data dalam array scores
    var jml = 0;
    scores.forEach(function(bil){
        jml += bil;
    });

    // hitung rata-rata
    var rerata = jml/scores.length;

    // bulatkan hasil
    return Math.round(rerata);
}

var arr = [90, 98, 89, 100, 100, 86, 94];
console.log(average(arr)); // hasilnya 94

var arr2 = [10, 8, 8, 9, 7];
console.log(average(arr2)); // hasilnya