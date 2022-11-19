
(function () {

    var helpButton = document.getElementById("help-button");
    var settingsButton = document.getElementById("settings-button");
    var helpScreen = document.getElementById("help-screen");
    var settingsScreen = document.getElementById("settings-screen");
    
    var submitInput = document.getElementById("submit-input"); 
    var submitButton = document.getElementById("submit-button");    
    
    var s0 = document.getElementById("s0");
    var s1 = document.getElementById("s1");
    var s2 = document.getElementById("s2");
    var s3 = document.getElementById("s3");
    var s4 = document.getElementById("s4");
    var s5 = document.getElementById("s5");
    var s6 = document.getElementById("s6");
    var s7 = document.getElementById("s7");
    var s8 = document.getElementById("s8");
    var s9 = document.getElementById("s9");
     
    var title = "Title"  
    var story = [];
    var line = 0;

    function addLine(msg) {
		if (line < 10) story[line] = msg;
		if (line == 10) title = msg;
		line++;
		updateGameState();
    }
 

    function clearStory() {
		line = 0;
		var i;
		for (i = 0; i < 10; i++) story[i] = "";
		title = "";
		showStory();	
	}
	
	function showStory() {			
		s0.className = 'storyline'; s0.innerHTML = story[0];
		s1.className = 'storyline'; s1.innerHTML = story[1];
		s2.className = 'storyline'; s2.innerHTML = story[2];
		s3.className = 'storyline'; s3.innerHTML = story[3];
		s4.className = 'storyline'; s4.innerHTML = story[4];
		s5.className = 'storyline'; s5.innerHTML = story[5];
		s6.className = 'storyline'; s6.innerHTML = story[6];
		s7.className = 'storyline'; s7.innerHTML = story[7];
		s8.className = 'storyline'; s8.innerHTML = story[8];
		s9.className = 'storyline'; s9.innerHTML = story[9];
	}
	
	function reveal() {
		showStory();
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
		
		switch (line) {
			case 0:
				s0.className = 'storylineactive';
				s1.className = 'storylinenext';
				break;
			case 1:
				s0.className = 'storyline'; s0.innerHTML = story[0];
				s1.className = 'storylineactive';
				break;
			case 2:
				s0.className = 'storylinehidden'; s0.innerHTML = "";
				s1.className = 'storyline'; s1.innerHTML = story[1];
				s2.className = 'storylineactive';
				s3.className = 'storylinenext';
				break;
			case 3:
				s1.className = 'storylinehidden'; s1.innerHTML = "";
				s2.className = 'storylinehidden'; s2.innerHTML = "";
				s3.className = 'storylinenext';
				break;
			case 4:
				s3.className = 'storyline'; s3.innerHTML = story[3];
				s4.className = 'storylineactive';
				s5.className = 'storylinenext';
				break;
			case 5:
				s4.className = 'storyline'; s4.innerHTML = story[4];
				s5.className = 'storylineactive';
				break;
			case 6:
				sA3.className = 'storylinehidden'; s3.innerHTML = "";
				s4.className = 'storylinehidden'; s4.innerHTML = "";
				s5.className = 'storyline'; s5.innerHTML = story[5];
				s6.className = 'storylinenext';
				s7.className = 'storylinenext';
				break;
			case 7:
				s5.className = 'storylinehidden'; s5.innerHTML = "";
				s6.className = 'storylinehidden'; s6.innerHTML = "";
				break;
			case 8:
				s7.className = 'storyline'; s7.innerHTML = story[7];
				s8.className = 'storylineactive';
				s9.className = 'storylinenext';
				break;
			case 9:
				s8.className = 'storyline'; s8.innerHTML = story[8];
				s9.className = 'storylineactive';
				break;
			case 10:
				s9.className = 'storyline'; s9.innerHTML = story[9];
				//titleBox.className = 'visible';
				//titleButton.className = 'visible';
				break;
			case 11:
				s7.className = 'storylinehidden'; s7.innerHTML = "";
				s8.className = 'storylinehidden'; s8.innerHTML = "";
				s9.className = 'storylinehidden'; s9.innerHTML = "";
				//titleBox.className = 'hidden';
				//titleButton.className = 'hidden';
				break;
		};
			

		//revealButton.className = 'hidden';
		//if (line==11) revealButton.className = 'visible';
		
		//newgameButton.className = 'hidden';
		//if (line==12) newgameButton.className = 'visible';
		
		//if(newgame) startnew();
		
	}
    
    

    // Listen for enter in Input line
    submitInput.addEventListener('keypress', function (e) {
        var event = e || window.event;
        var char = event.which || event.keyCode;
        if (char == '13') submitButton.click();
    });
    // Submit Input line for story
    submitButton.addEventListener('click', function () {
        addLine(submitInput.value);
        submitInput.value = "";   
    });
    
    //// Listen for enter in title box A
    //sendTitleBoxA.addEventListener('keypress', function (e) {
    //    var event = e || window.event;
    //    var char = event.which || event.keyCode;
    //    if (char == '13')
    //        titleButtonA.click();
    //});
    //// Send title
    //titleButtonA.addEventListener('click', function () {
    //    if (conn && conn.open) {
    //        var msg = "0" + sendTitleBoxA.value;
    //        sendTitleBoxA.value = "";
    //        conn.send(msg);
    //        console.log("Sent: " + msg);
    //        addLine(msg);
    //    } else {
    //        console.log('Connection is closed');
    //    }
    //});
    
    // Reveal Stories
    //revealButton.addEventListener('click', reveal);
    
    // New Game
    //newgameButton.addEventListener('click', readyfornew);
    
    clearStory();
    updateGameState();
    
})();

