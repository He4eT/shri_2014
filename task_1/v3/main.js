$(function() {
	
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