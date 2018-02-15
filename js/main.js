$(document).ready(function(){

  // SQUARE SIZES
  if ($(window).width() > 992) {
    var boxDimensions = (($(window).width() * .7) / 6); 
    $(".box").width(boxDimensions  - 25);
    $(".box").height(boxDimensions  - 25);
  }

  if ($(".box").width() > 200) {
    $(".box").width(200);
    $(".box").height(200);
  }
  // SQUARE SIZES


	// MUSIC
	var currentSong = null;
	var paused = false;

	function play_audio(file_names) {
    sound = new Howl({
        src: [file_names[0]],
        volume: 0.5,
        onend: function() {
            file_names.shift();
            if (file_names.length > 0) {
                play_audio(file_names);
            }
        }
    });
    currentSong = sound;  
    sound.play();
	}

	var playlist = [
        'media/christmas_song.mp3',
        'media/half_light.mp3',
        'media/baby_its_cold.mp3',
        'media/silent_night.mp3',
        'media/have_yourself.mp3'
        ];

  play_audio(playlist);

  $(document).keypress(function(e) {
	  if(e.which == 112) {
	    if (currentSong != null) {
	    	if (paused) {
	    		currentSong.play();
	    		paused = !paused;
	    	} else {
	    		currentSong.pause();
	    		paused = !paused;
	    	}
	    }
	  }
	});
  // MUSIC


  $(document).keypress(function(e) {
    if(e.which == 108) {
      var str = prompt("Code");
      var res = str.toLowerCase();
      if (res == "lol") {
        $('.box').css('background', 'url("img/poo.jpg") no-repeat center center fixed');
        $('.box').css("background-color", "rgba(255, 255, 255, .1)");
      } else if (res == "stopp") {
        $('.box').css('background', 'none');
        $('.box').css("background-color", "rgba(255, 255, 255, .1)");
      } else if (res == "valentine") {
        $('body').css('background', 'url("img/flower.jpg") no-repeat center center fixed');
        $('body').css('-webkit-background-size', 'cover');
        $('body').css('-moz-background-size', 'cover');
        $('body').css('-o-background-size', 'cover');
        $('body').css('background-size', 'cover');

        $('.christmas').css('display', 'none');
        $('#happy_valentines').css('display', 'block');
        $('.valentines').css('display', 'block');
      } else if (res == "advent") {
        $('body').css('background', 'url("img/ornament.jpg") no-repeat center center fixed');
        $('body').css('-webkit-background-size', 'cover');
        $('body').css('-moz-background-size', 'cover');
        $('body').css('-o-background-size', 'cover');
        $('body').css('background-size', 'cover');

        $('.christmas').css('display', 'block');
        $('#happy_valentines').css('display', 'none');
        $('.valentines').css('display', 'none');
      }
    }
  });

  $('.modal').modal();


  $('#day-1').click(function() {
  	$('#day1').modal('open');
  });
  $('#day-2').click(function() {
  	$('#day2').modal('open');
  });
  $('#day-3').click(function() {
  	$('#day3').modal('open');
  });
  $('#day-4').click(function() {
  	$('#day4').modal('open');
  });
  $('#day-5').click(function() {
  	$('#day5').modal('open');
  });
  $('#day-6').click(function() {
  	$('#day6').modal('open');
  });
  $('#day-7').click(function() {
  	$('#day7').modal('open');
  });
  $('#day-8').click(function() {
  	$('#day8').modal('open');
  });
  $('#day-9').click(function() {
  	$('#day9').modal('open');
  });
  $('#day-10').click(function() {
  	$('#day10').modal('open');
  });
  $('#day-11').click(function() {
  	$('#day11').modal('open');
  });
  $('#day-12').click(function() {
  	$('#day12').modal('open');
  });
  $('#day-13').click(function() {
  	$('#day13').modal('open');
  });
  $('#day-14').click(function() {
  	$('#day14').modal('open');
  });
  $('#day-15').click(function() {
  	$('#day15').modal('open');
  });
  $('#day-16').click(function() {
  	$('#day16').modal('open');
  });
  $('#day-17').click(function() {
  	$('#day17').modal('open');
  });
  $('#day-18').click(function() {
  	$('#day18').modal('open');
  });
  $('#day-19').click(function() {
  	$('#day19').modal('open');
  });
  $('#day-20').click(function() {
  	$('#day20').modal('open');
  });
  $('#day-21').click(function() {
  	$('#day21').modal('open');
  });
  $('#day-22').click(function() {
  	$('#day22').modal('open');
  });
  $('#day-23').click(function() {
  	$('#day23').modal('open');
  });
  $('#day-24').click(function() {
  	$('#day24').modal('open');
  });
  $('#day-v').click(function() {
    $('#dayv').modal('open');
  });
});