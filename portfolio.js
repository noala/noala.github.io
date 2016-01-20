// $(document).ready(function(){

//     function mouseDown() {
//         document.getElementByClass("which-icon").style.width = 60;
//     }
    

//  	$('.which-icon').click(function(){
//  		$(this).toggleClass('open');
//  	});

    

// });

/**
 * JQuery Plugin for a modal box
 * Will create a simple modal box with all HTML and styling
 * 
 * Author: Paul Underwood
 * URL: http://www.paulund.co.uk
 * 
 * Available for free download from http://www.paulund.co.uk
 */

(function($){

	// Defining our jQuery plugin

	$.fn.paulund_modal_box = function(prop){

		// Default parameters

		var options = $.extend({
			height : ($(window).height() - 5),
			width : ($(window).width() - 5),
			title:"hi",
			description: "lol popup.",
		},prop);
				
		//Click event on element
		return this.click(function(e){
			add_block_page();
			add_popup_box();
			add_styles();
			
			$('.paulund_modal_box').fadeIn();
		});
		
		/**
		 * Add styles to the html markup
		 */
		 function add_styles(){			
			$('.paulund_modal_box').css({ 
				'left':options.left,
				'top':options.top,
				'display':'none',
				'height': options.height + 'px',
				'width': options.width + 'px',
				'border':'none',
				'box-shadow': '0px 2px 7px #292929',
				'-moz-box-shadow': '0px 2px 7px #292929',
				'-webkit-box-shadow': '0px 2px 7px #292929',
				'border-radius':'2px',
				'-moz-border-radius':'2px',
				'-webkit-border-radius':'2px',
				'background': 'rgba(0,0,0,0.6)', 
				'z-index':'50',
			});
			$('.paulund_modal_close').css({
				'position':'relative',
				'top':'25px',
				'right':'20px',
				'float':'right',
				'display':'block',
				'height':'50px',
				'width':'50px',
				'size': '20px',
				'font-size': '30px',
				'color': '#ffffff',
				'text-decoration': 'none',
// 				'background': 'url(images/close.png) no-repeat'
			});
			
			/*Block page overlay*/
			var pageHeight = $(window).height();
			var pageWidth = $(window).width();

			$('.paulund_block_page').css({
				'position':'absolute',
				'top':'0',
				'left':'0',
				'background-color':'rgba(0,0,0,0.6)',
				'height':pageHeight,
				'width':pageWidth,
				'z-index':'10'
			});
			$('.paulund_inner_modal_box').css({
				'background-color':'rgba(0,0,0,0)',
				'height':(options.height - 50) + 'px',
				'width':(options.width - 50) + 'px',
				'padding':'10px',
				'margin': 'auto',
				'border-radius':'2px',
				'-moz-border-radius':'2px',
				'-webkit-border-radius':'2px'
			});
		}
		
		 /**
		  * Create the block page div
		  */
		 function add_block_page(){
			var block_page = $('<div class="paulund_block_page"></div>');
						
			$(block_page).appendTo('body');
		}
		 	
		 /**
		  * Creates the modal box
		  */
		 function add_popup_box(){
			 var pop_up = $('<div class="paulund_modal_box"><a href="#" class="paulund_modal_close">close</a><div class="paulund_inner_modal_box"><h2>' + options.title + '</h2><p>' + options.description + '</p></div></div>');
			 $(pop_up).appendTo('.paulund_block_page');
			 			 
			 $('.paulund_modal_close').click(function(){
				$(this).parent().fadeOut().remove();
				$('.paulund_block_page').fadeOut().remove();				 
			 });
		}

		return this;
	};
	
})(jQuery);