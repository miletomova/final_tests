$('#btn').click(

		function(ev){
			ev.preventDefault();
			
			if($('#name').val().trim() === ''){

				 $('<div></div>').text('Enter name').appendTo(document.body).css('color', 'red');
			}else if($('#pd').val().trim() === ''){

				$('<div></div>').text('Enter password').appendTo(document.body).css('color', 'red');
			
			}else if($('#pd').val().trim().length <= 6){
				$('<div></div>').text('Enter at least 6 digits').appendTo(document.body).css('color', 'red');
			}else{
					$('<div></div>').text('Success').appendTo(document.body).css('color', 'red');
				}

		}
	);