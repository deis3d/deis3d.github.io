$(function() {
	$("img").each(function(){
		var id = $(this).attr("id");
		$.ajax({
			url: id + ".dat"
		}).done(function(data) {
			$("#"+id).attr("src",data);
		});
	});

	$(":text").each(function(){
		var id = $(this).attr("id");
		$.ajax({
			url: id + ".dat"
		}).done(function(data) {
			$("#"+id).val(data);
		});
	});

	$(":text").keyup(function () {
		console.log($(this).attr("id"));
		$.post( "updatecomments.php", { elementId: $(this).attr("id"), comments: $(this).val() } );
	});
});




function changeStatus(elementId, statusImage) {
	$.post( "updatestatus.php", { elementId: elementId, data: statusImage } );
	img = document.getElementById(elementId);
	img.src=statusImage;
	return false;
}