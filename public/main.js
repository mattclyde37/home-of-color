

$('#color').click(OnButtonClick);
$('#button').hover(OnButtonHover);

var socket = io.connect();

function OnButtonClick(){
	var selectedColor = $('#color').css('backgroundColor');
	socket.emit('change-color', { color: selectedColor});
}