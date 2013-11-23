

$('#color').click(OnButtonClick);

var socket = io.connect();


function OnButtonClick(){
	var selectedColor = $('#color').val();

	socket.emit('change-color', { color: selectedColor});
	/*
	$.ajax({
		url: "http://change-my-lights.herokuapp.com/ChangeColor",
		type: "POST",
		data: '{"Color": "New Color"}',
		success: function(data){
			alert("Success");
		},
		error: function(xhr, status, error){
			alert("Error");
		}
	});
    //alert("Hooray for Christmas!");
    */
}