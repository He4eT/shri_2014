(function($) {
 
    // значени по умолчанию
    var defaults = {
    	timeout:'500',
    	colWidth:'1',
   	};

    $.fn.spanEqualizr = function(params){
        return this.each(function () {
			var self = $(this);

	        var options = $.extend({}, defaults, params);
	        
	        // Стили
	        self.css({
	        	verticalAlign: 'bottom',
				lineHeight: self.height() + 'px',
			});

			// Вычисляем кол-во столбцов
			var colQuantity = Math.ceil($(this).width() / options.colWidth);

			// Аппендим и стилизуем столбцы
			for (var i = 0; i <= colQuantity; i++) {
				var span = $('<span/>').css({
					width: options.colWidth,
					
					background: 'pink',
					borderTop: '2px solid red',

					display: 'inline-block',
					verticalAlign: 'bottom',
					lineHeight: 0,
					fontSize: 0,

					transition: 'height '+ options.timeout/2000+'s ease',
				}).appendTo(this);
			}

			// Первый запуск, чтобы не ждать setInterval
			run_equalizer(self, options.timeout);
			
			//Все готово, начинаем
			setInterval(function(){
					run_equalizer(self, options.timeout)
				}, options.timeout / 2);
		
		});
    };

	function run_equalizer (self, timeout) {
		var spans = self.find('span');
		var half_height = self.height() / 2;

		// Если на контейнере висит класс, то устанавливаем рандомные значения
		if(self.hasClass('eqZero')) {
			spans.each(function () {	
				var colHeight = Math.round(half_height * 2 * Math.random());
				$(this).height(colHeight);
			});
		} else { //если нет - нормализуем
			spans.each(function () {	
				$(this).height(half_height);	
			});
		}

		// Переключаем класс, чтобы знать, что делать в следующий раз
		self.toggleClass('eqZero');
	}

})(jQuery);
