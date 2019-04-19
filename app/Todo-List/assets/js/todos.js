$(document).ready(function () {

// mengambil/menyimpan halaman html ke dalam localStorage
 $('#daftar-todo').html(localStorage.getItem('todoList'));

// check off spesific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("terlaksana");

	// save / update data terbaru ke localStorage
	localStorage.setItem('todoList', $('#daftar-todo').html());
});

//click on X to delete todos
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();

	// save / update data terbaru ke localStorage
	 localStorage.setItem('todoList', $('#daftar-todo').html())
	});
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13) { // which = 13 adalah tombol Enter //
		// masukan hasil ketikan keyboard ke dalam variabel
		 var isiKey = $('#todo-list-input').val();
		// Mengosongkan kotak input
		$('#todo-list-input').val("");
		// buat li baru berdasarkan isiKey
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> "+ isiKey + "</li>");
		
	// save / update data terbaru ke localStorage
		localStorage.setItem('todoList', $('#daftar-todo').html());

	};
});

$("h1").on("click", "i", function(){
	$(this).toggleClass("fa-plus fa-minus");
	$("input[type='text']").fadeToggle(100);
});

});