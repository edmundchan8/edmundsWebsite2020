$(document).ready(function() {
	$("#draggable").draggable( {
		containment:"#playerGameSpace",
		scroll: false, /* prevents scrolling when reaching the edges of screen */
		/* cursorAt: { bottom: 5 }, element picked up appears { position } from cursor, problem is it always takes the cursor position when you click on it */
		/* grid: [ 125, 170 ] */
		} );
	$("#draggable").draggable( { 
	snap: "#playerAttack", snapMode: "inner" 
	}); 	
});