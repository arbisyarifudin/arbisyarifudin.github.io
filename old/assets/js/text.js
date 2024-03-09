var CharTimeout = 80; // скорость печатания
	var StoryTimeout = 7000; // время ожидания перед переключением
	var Summaries = new Array();
	var SiteLinks = new Array();
		Summaries[0] = 'I am Arbi Syarifudin';
		SiteLinks[0] = ' ';
		Summaries[1] = 'A developer from Indonesia';
		SiteLinks[1] = ' l';
		// Summaries[2] = 'Also a Creative Content Creator';
		// SiteLinks[2] = ' l';
	function startTicker(){
		massiveItemCount =  Number(Summaries.length); //количество элементов массива
		// Определяем значения запуска
		CurrentStory     = -1;
		CurrentLength    = 0;
		// Расположение объекта
		AnchorObject     = document.getElementById("Ticker");
		runTheTicker();
	}
	// Основной цикл тиккера
	function runTheTicker(){
		var myTimeout;
		// Переход к следующему элементу
		if(CurrentLength == 0){
			CurrentStory++;
			CurrentStory      = CurrentStory % massiveItemCount;
			StorySummary      = Summaries[CurrentStory].replace(/"/g,'-');
			AnchorObject.href = SiteLinks[CurrentStory];
		}
		// Располагаем текущий текст в анкор с печатанием
		AnchorObject.innerHTML = StorySummary.substring(0,CurrentLength) + znak();
		// Преобразуем длину для подстроки и определяем таймер
		if(CurrentLength != StorySummary.length){
			CurrentLength++;
			myTimeout = CharTimeout;
		} else {
			CurrentLength = 0;
			myTimeout = StoryTimeout;
		}
		// Повторяем цикл с учетом задержки
		setTimeout("runTheTicker()", myTimeout);
	}
	// Генератор подстановки знака
	function znak(){
		if(CurrentLength == StorySummary.length) return "";
		else return "|";
	}
	startTicker();