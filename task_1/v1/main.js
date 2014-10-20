$(function() {

	//Костыльный фикс для FireFox. Баг 99 года
	//https://bugzilla.mozilla.org/show_bug.cgi?id=10212
	$("#popup").css("max-height",window.innerHeight*0.8);

	function showPopup() {
		$("#popup-wrap").removeClass("hidden");
	}

	function hidePopup() {
		$("#popup-wrap").addClass("hidden");
	}

	$(document).on( "click", "#showPopup", showPopup);
	$(document).on( "click", ".popup-close", hidePopup);
	
	$(document).on( "click", "#popup-wrap", hidePopup);
	$(document).on( "click", "#popup", function(e){
		e.stopPropagation();
	});
	
});