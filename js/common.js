/**
 * 
 * @authors vfasky (vfasky@gmail.com)
 * @date    2017-04-06 17:11:39
 * @version $Id$
 */

/**
 * 
 * @authors vfasky (vfasky@gmail.com)
 * @date    2017-04-06 17:11:39
 * @version $Id$
 */

$(function(){
toastr.options = {
			  "closeButton": false,
			  "debug": false,
			  "positionClass": "toast-top-full-width",
			  "onclick": null,
			  "showDuration": "3000",
			  "hideDuration": "1000",
			  "timeOut": "2500",
			  "extendedTimeOut": "1000",
			  "showEasing": "swing",
			  "hideEasing": "linear",
			  "showMethod": "fadeIn",
			  "hideMethod": "fadeOut"
};
$("#manageBlock").mouseover(function(){$("#manage").css({"display":"block"});});
$("#manageBlock").mouseout(function(){$("#manage").css({"display":"none"});});	
var navheight=$(window).innerHeight()-45;
$("nav").height(navheight);
var rightheight=$(window).innerHeight()-50;
$(".right-show").height(rightheight);
})
$(window).resize(function () {  
	$("nav").height($(window).innerHeight()-45);
	$(".right-show").height($(window).innerHeight()-50);
});

