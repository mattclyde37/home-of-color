
$(document).ready(function(){
	$('#color').click(OnButtonClick);
});


function OnButtonClick(){
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
}