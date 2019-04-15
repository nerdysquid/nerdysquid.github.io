$(document).ready(function() {
	anim();

function anim() {
	$("body").animate({
        backgroundColor: "#6CAD45"
    }, {
        duration: 5000,
        complete: function () {
		$("body").animate({
			backgroundColor: "#458FAC"
		}, {
			duration: 5000,
			complete: function () {	
	    		$("body").animate({
   	     		backgroundColor: "#623c70"
   	 		}, {
   	     		duration: 5000,
   		     		complete: function () {
        	    	$("body").animate({
        	        	backgroundColor: "#9e53b9"
        	    	}, {
        	        	duration: 5000,
        	        	complete: function () {
        	        	    $("body").animate({
        	            	    backgroundColor: "#AE4691"
        	            	}, {
        	            	    duration: 5000,
        	            	    complete: function () {
        	            	        $("body").animate({
        	            	            backgroundColor: "#AE4651"
        	            	        }, {
        	            	            duration: 5000,
        	            	            complete: function () {
        	            	                $("body").animate({
        	            	                    backgroundColor: "#AC5544"
        	            	                }, {
        	            	                    duration: 5000,
        	            	                    complete: function () {
        	            	                        $("body").animate({
        	            	                            backgroundColor: "#AFA546"
        	            	                        }, {
        	            	                            duration: 5000,
        	            	                            complete: function () {
        	            	                                                anim();
        	            	                                            }
        	            	                                        });
        	            	                                    }
        	            	                                });
	    	                                            }
	    	                                        });
	    	                                    }
	    	                                });
	    	                            }
	    	                        });
	    	                    }
	    	                });
	    	            }
	    	        });
	    	    }
	    	});
		}	
});
	