

$('#button').click(OnButtonClick);

var socket = io.connect();

function OnButtonClick(){
    debugger;
	var selectedColor = $('#color').css('backgroundColor');
	socket.emit('change-color', { color: selectedColor});
}