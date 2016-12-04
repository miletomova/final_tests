$('#btn').click(function (ev) {
  ev.preventDefault();
  if ($('#name').val()==0) {
    $('#name').css('background-color','red');
    alert('Your username is empty');
  }else if ($('#pd').val()==0) {
    alert('Your password is empty');
    $('#pd').css('background-color','red');
  }else if ($('#pd').val().length<6) {
    alert('Your password needs to be from more than 6 symbols')
    $('#pd').css('background-color','red');
  }else {
    alert('Success!');
      $('#name').css('background-color','white');
      $('#pd').css('background-color','white');
  }


//	console.log($('#pd').val().length);
})
