jQuery(document).ready(function() {

	// Adding the x button
	jQuery(".ui-message").append('<span class="ui-close">X</span>');

	// Handing the click event
	jQuery(".ui-close").click(function() {

		jQuery(this).parents(".ui-message").fadeOut();

	});

	// Initially hide the answers to the FAQ
	jQuery(".answer").hide();

	//Handling the FAQ click
	jQuery(".faq h4").click(function() {

		jQuery(this).next(".answer").slideToggle();

	});

	jQuery(".faq h4").addClass("faq-question");

	// Dynamically load aobut content
	jQuery("#about").click(function(){
		jQuery(".about-placeholder").load("about.html .body-text");
	return false;
	})
	

});