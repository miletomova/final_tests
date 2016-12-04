$('#btn').click(
		function(ev){
			ev.preventDefault();
			if ($('#name').val().trim()==='' || $('#pd').val().trim()==='' || $('#pd').val().trim().length<=6){
				
			$('<div></div>').text('Wrong name or password').appendTo('body').css('color', 'red');
			}else{
			$('<div></div>').text('Success').appendTo('body').css('color', 'green');

			}
			

		}
		);


