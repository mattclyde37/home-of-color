

$('#color').click(OnButtonClick);

var socket = io.connect();


function OnButtonClick(){
	socket.emit('change-color', { color: '#000000'});
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