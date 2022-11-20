
(function () {

    var helpButton = document.getElementById("help-button");
    var settingsButton = document.getElementById("settings-button");
    var helpScreen = document.getElementById("help-screen");
    var settingsScreen = document.getElementById("settings-screen");  
    
    var s = [] 
    s[0] = document.getElementById("s0");
    s[1] = document.getElementById("s1");
    s[2] = document.getElementById("s2");
    s[3] = document.getElementById("s3");
    s[4] = document.getElementById("s4");
    s[5] = document.getElementById("s5");
    s[6] = document.getElementById("s6");
    s[7] = document.getElementById("s7");
    s[8] = document.getElementById("s8");
    s[9] = document.getElementById("s9");
     
    var story = [];
    var line = 0;

    function addLine(msg) {
		if (line < 10) story[line] = msg;
		line++;
		updateGameState();
    }
 

    function clearStory() {
		line = 0;
		var i;
		for (i = 0; i < 10; i++) story[i] = "";
		showStory();	
	}
	
	function showStory() {	
		var i;
		for (i = 0; i < 10; i++) {
			s[i].className = 'storyline'; 
			s[i].value = story[i];
	    }
	}
	
	function reveal() {
		showStory();
		var i;
		for (i = 0; i < 10; i++) {
			var player = (Math.floor((i % 4)/2) + 1);
			s[i].className = 'storylineactive1';
			if(player==2) s[i].className = 'storylineactive2';
		}
		line++;
		updateGameState();
	}
	
	function startnew() {
		clearStory();
		updateGameState();
	}

	
	/** Main Game Logic
	 */
	function updateGameState() {

		var player = (Math.floor((line % 4)/2) + 1);

		for (i = 0; i < 10; i++) {
			s[i].disabled=true;
			s[i].placeholder="";
		}

		if (line < 10)	{
			var i;
			for (i = 0; i < 10; i++) s[i].value="";
			s[line].disabled=false; 
			s[line].focus();
			s[line].placeholder="Player "+player+", write the next line of the story ...";
		}
		
		switch (line) {
			case 0:
				s[0].className = 'storylinenext1';
				s[1].className = 'storylineactive1';
				break;
			case 1:
			    s[0].value = story[0];
				s[0].className = 'storylineactive1';
				s[1].className = 'storylinenext1';
				break;
			case 2:
			    s[1].value = story[1];
				s[0].className = 'storylinehidden';
				s[1].className = 'storylineactive1';
				s[2].className = 'storylinenext2';
				s[3].className = 'storylineactive2';
				break;
			case 3:
			    s[1].value = story[1];
			    s[2].value = story[2];
				s[2].className = 'storylineactive2';
				s[3].className = 'storylinenext2';
				break;
			case 4:
			    s[3].value = story[3];
				s[1].className = 'storylinehidden';
				s[2].className = 'storylinehidden';
				s[3].className = 'storylineactive2';
				s[4].className = 'storylinenext1';
				s[5].className = 'storylineactive1';
				break;
			case 5:
			    s[3].value = story[3];
			    s[4].value = story[4];
				s[4].className = 'storylineactive1';
				s[5].className = 'storylinenext1';
				break;
			case 6:
			    s[5].value = story[5];
				s[3].className = 'storylinehidden';
				s[4].className = 'storylinehidden';
				s[5].className = 'storylineactive1';
				s[6].className = 'storylinenext2';
				s[7].className = 'storylineactive2';
				break;
			case 7:
			    s[5].value = story[5];
			    s[6].value = story[6];
				s[6].className = 'storylineactive2';
				s[7].className = 'storylinenext2';
				break;
			case 8:
			    s[7].value = story[7];
			    s[5].className = 'storylinehidden';
				s[6].className = 'storylinehidden';
				s[7].className = 'storylineactive2';
				s[8].className = 'storylinenext1';
				s[9].className = 'storylineactive1';
				break;
			case 9:
			    s[7].value = story[7];
			    s[8].value = story[8];
				s[8].className = 'storylineactive1';
				s[9].className = 'storylinenext1';
				break;
			case 10:
				reveal();
				break;
		};
			

		//revealButton.className = 'hidden';
		//if (line==11) revealButton.className = 'visible';
		
		//newgameButton.className = 'hidden';
		//if (line==12) newgameButton.className = 'visible';
		
		//if(newgame) startnew();
		
	}
    
    

    // Listen for enter in Input line
    var i;
    for (i = 0; i < 10; i++) {
		s[i].addEventListener('keypress', function (e) {
			var event = e || window.event;
			var char = event.which || event.keyCode;
			if (char == '13') addLine(this.value);
		});
	}

    // resize input box as needed
	$('textarea').on({input: function(){
			var totalHeight = $(this).prop('scrollHeight') - parseInt($(this).css('padding-top')) - parseInt($(this).css('padding-bottom')) + 12;
			$(this).css({'height':totalHeight});
		}
	});

    // Reveal Stories
    //revealButton.addEventListener('click', reveal);
    
    // New Game
    //newgameButton.addEventListener('click', readyfornew);
    
    clearStory();
    updateGameState();
    
})();

