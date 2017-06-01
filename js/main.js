
	$("#header").load("../menu-centent/header.html", function(data) {
		$("#img_logo").attr('src','../resource/img/logo.png');
		var a = function() {
			var defer = $.Deferred();
			console.log('a() called');
			setTimeout(function() {
				defer.resolve();
				$('nav').addClass('animated bounceInDown');
			}, 50);

			return defer;
		};
		var b = function() {
			var defer = $.Deferred();
			console.log('b() called');
			setTimeout(function () {
				defer.resolve();
				$('#body').addClass('animated');			
			}, 200);
			return defer;
		};
		var c = function() {
			var defer = $.Deferred();
			console.log('c() called');
			setTimeout(function () {
				defer.resolve();
				$("#footer").load("../menu-centent/footer.html", function(data) {
					$("#footer").html(data);
					$('[data-toggle="tooltip"]').tooltip();
					$("#img_f_face").attr('src','../resource/img/facebook.png');
					$('#img_person').addClass('animated fadeInDownBig');
				});

			}, 300);
			return defer;
		};
		a().then(b).then(c);
	});
