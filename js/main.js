$(document).ready(function(){


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

  
});