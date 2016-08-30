function parse_video() {

	$.ajax({
		type: "POST",
		url: "video.php",
		cache: false,
		data: { video_id: $("#video_id").attr("value") },
		success: function(data){
			if (data.toLowerCase().indexOf('СЃСЃС‹Р»РєР°') != -1) {
				$("#video_id").blur();
				alert(data);
			} else {
				var id = data;

				$("#show_videos").html("<img src='ajax-loader.gif'>");
				$("#show_videos").fadeIn();

					$.ajax({
						type: "POST",
						url: "parse.php",
						cache: false,
						data: { video_id: id },
						success: function(data){
							$("#show_videos").html(data);
						}
					});

			}
		}
	});

}