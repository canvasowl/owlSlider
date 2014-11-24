// hide owl-slider on start
$('.owl-slider div').not(':first').hide();

// set working variable
var num_of_slides	=	$('.owl-slider div').length;
    current_index	=	$('.owl-slider div:first-child').index();
    i 				=	0;

/**
 * Hide all owl-slider and how the next one 
 */
setInterval(function () {	
	$('.owl-slider div').removeClass("fadeInUp");
	$('.owl-slider div:eq('+i+')').hide();	
	
	if (i == num_of_slides -1) {
		i = 0;
	}else{
		i++;
	};

	$('.owl-slider div:eq('+i+')').show().addClass("fadeInUp");
	
}, 5000);