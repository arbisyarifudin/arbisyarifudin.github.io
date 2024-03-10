// check off spesific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("terlaksana");
});

//click on X to delete todos
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13) { // which = 13 adalah tombol Enter //
		// masukan hasil ketikan keyboard ke dalam variabel
		var isiKey = $(this).val();
		// Mengosongkan kotak input
		$(this).val("");
		// buat li baru berdasarkan isiKey
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> "+ isiKey + "</li>");
	
		var html = $(this).html();
	};
});

$("h1").on("click", "i", function(){
	$(this).toggleClass("fa-plus fa-minus");
	$("input[type='text']").fadeToggle(100);
});