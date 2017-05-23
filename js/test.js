var callPage = {
				about : function(){
					$(".body").load("menu-centent/about.html", function(data) {
						$('#img_person').addClass('animated bounceInDown');	
						$('#img_person').on('click',function(){
							alert("s");
						});
					});
				},
				test : function(){
					$(".body").load("menu-centent/test.html", function(data) {
						$('#img_person').addClass('animated bounceInDown');	
						$('#img_person').on('click',function(){
							alert("s");
						});
					});
				}		
			};