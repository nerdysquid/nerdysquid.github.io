 function carousel_bg(id) {
	 
                var bgimgs = ['b','dp','dp2','g','r','v','y']; // add images here..
                if (id >= bgimgs.length) {
                    id = 0;
                }
                var img1 = bgimgs[id];
                id++;
                
        $('#bg').css("background-image", "url(images/bg-linen-" + img1 + ".jpg)");

                
             setTimeout("carousel_bg("+id+")", 7000);
        }

        $(document).ready(function() {
			alert("..");
                     carousel_bg(0);
        });
