const prompts = [
"A group of friends accidentally book a haunted Airbnb for their weekend getaway.", 
"A group of robots starts a band and becomes a huge hit.",
"A group of penguins tries to break the world record for the longest pillow fight.",
"A group of friends who are all in different stages of their lives must find a way to balance their personal and professional lives.",
"A group of friends who are all trying to achieve their dreams must find a way to support each other and stay true to themselves.",
"A group of friends discovers that their town is actually a giant experiment being conducted by aliens.",
"A couple must navigate the challenges of being in a long-distance relationship while attending different colleges.",
"A hopeless romantic finally meets the love of their life and must navigate the challenges of a long-distance relationship.",
"A high school sweetheart reconnects after being separated for many years and must decide if their love is strong enough to overcome the obstacles in their way.",
"A team of astronauts must find a way to survive after their spaceship is attacked by aliens.",
"A couple struggles to keep their relationship alive as they navigate their busy careers and the challenges of modern dating.",
"A penguin is elected mayor of a small town.", 
"A brave little girl goes on a thrilling adventure to rescue her pet dragon from a band of nefarious knights.",
"A clumsy young witch must save the day when her community is threatened by a group of evil witches",
"A group of explorers discovers a lost civilization on a distant planet and must find a way to communicate with the inhabitants.",
"A group of time travelers must find a way to prevent a disaster that will destroy humanity in the future.",
"A group of survivors must find a way to survive on a post-apocalyptic earth after a nuclear war.",
"A group of scientists must find a way to reverse the effects of climate change before it's too late.",
"A group of mischievous animals team up to outsmart a mean old farmer.",
"A couple's love is put to the test when one of them is offered their dream job in a different city.",
"A young couple must overcome the disapproval of their families in order to be together.",
"A group of humans must find a way to survive on a distant planet after their spaceship crashes.",
"A group of rebels fights against a tyrannical government in a dystopian future.",
"A group of scientists discover a portal to another dimension and must find a way to use it to save humanity.",
"A group of friends navigates the ups and downs of dating in the modern world.",
"A group of recent college graduates must navigate the challenges of adult life and the transition from college to the real world.",
"A family must deal with the challenges of raising kids in the modern world.",
"A group of friends must navigate the challenges of living in a new city and trying to make a life for themselves.",
"A group of friends must deal with the challenges of growing older and facing new responsibilities.",
"A small town is plagued by a series of gruesome murders, and a young detective must uncover the truth before it's too late.",
"A group of friends goes on a hiking trip in the mountains and becomes lost in a mysterious fog that seems to have a mind of its own.",
"A young couple moves into a new home, only to discover that it is haunted by the ghost of a child who died under mysterious circumstances.",
"A group of friends discovers an old abandoned asylum, but they quickly realize that they are not alone inside.",
"A young couple falls in love while traveling the world together.",
"A group of astronauts discovers that their spaceship is actually a giant hamster wheel.", 
"A goldfish becomes the star of a popular cooking show.", 
"A group of mischievous monkeys takes over a luxury resort.", 
"A couple's relationship is challenged by the arrival of a third person who threatens to come between them.",
"A group of penguins tries to break the world record for the largest game of limbo.",
"A giant monster attacks a city, but it turns out to be just a giant puppet controlled by a group of puppeteers trying to promote their new play.",
"A young person discovers they have magical powers and must come to terms with their new abilities.",
"A group of friends go on a hike and get lost in the woods, only to discover that they are being hunted by a mysterious creature.",
"After a global disaster, a small group of survivors must band together to rebuild society and fend off dangerous threats.",
"A talented musician must overcome their inner demons in order to achieve their dreams of stardom.",
"A detective is tasked with solving a string of grisly murders, but the killer is closer to them than they realize.",
"A person with amnesia struggles to piece together their past and uncover their true identity.",
"A young girl discovers a hidden world of magic and adventure in her own backyard.",
"A group of strangers are stranded on a deserted island and must work together to survive.",
"A scientist creates a time machine and must use it to prevent a catastrophic event from occurring.",
"A young woman is suddenly thrust into the role of leader of her community and must make difficult decisions to keep her people safe.",
"A group of friends discover a hidden treasure map and embark on a treasure hunt full of obstacles and danger.",
"A group of friends discovers an old book of spells and unwittingly unleashes a powerful demon.",
"A couple must find a way to stay together despite the challenges posed by their different cultural backgrounds.",
"A time traveler shows up at a high school prom in the wrong year.", 
"A cat starts a successful business selling custom-made sweaters for dogs.", 
"A group of superheroes discover that their powers only work when they are in a hot air balloon.",
"A couple's love is tested when one of them is diagnosed with a terminal illness.",
"A clumsy wizard accidentally turns himself into a chicken.",
"A group of pirates accidentally hijack a cruise ship full of retirees.",
"A talking tree runs for president.",
"A group of survivors must find a way to rebuild society after a catastrophic event wipes out most of humanity.",
"A team of scientists must find a way to stop a rogue AI that has become self-aware and is threatening to destroy humanity.",
"A group of aliens tries to learn human behavior by joining a high school drama club.",
"A group of students starts a food truck selling the world's hottest chili.",
"A group of coworkers at a quirky office navigate their daily lives and the challenges of working together.",
"A group of time travelers accidentally creates a time loop and has to figure out how to break it.",
"A group of friends discovers a cursed object in an old antique shop and must find a way to break the curse before it's too late.",
"A young couple moves into a new house, only to discover that it is haunted by the ghost of a former resident.",
"A group of friends becomes stranded in a remote cabin in the woods and starts to suspect that they are being watched by something sinister.",
"A family inherits an old mansion, but soon realizes that the previous occupants were hiding a dark secret.",
"A young woman begins to suspect that she is being stalked by a mysterious figure that only appears in her dreams.",
"A group of friends accidentally gets stranded on a deserted island, but it turns out to be a luxurious resort in disguise.",
"A group of dogs starts a band and becomes famous overnight.",
"A group of penguins accidentally stows away on a spaceship and ends up on a tropical planet.",
"A group of friends discovers a hidden door in their apartment that leads to a magical world.",
"A group of superheroes accidentally becomes a boy band and becomes more famous for their singing than their crime-fighting.",
"A group of friends starts a business selling personalized dream experiences.",
"A talking dog becomes a famous news anchor.",
"A group of aliens tries to learn human behavior by joining a high school sports team.",
"A group of friends accidentally gets trapped in a video game and has to defeat the final boss to escape.",
"A young boy learns the importance of being true to oneself after befriending a shape-shifting alien.",
"A group of bank robbers tries to make their getaway on a school bus.", 
"A chicken and a penguin become roommates and start a detective agency.", 
"A group of friends navigates the challenges of living in a small apartment in the city.",
"A family struggles to deal with the eccentric personalities of their extended family members.",
];


(function () {

    var helpButton = document.getElementById("help-button");
    var infoButton = document.getElementById("info-button");
    var newButton = document.getElementById("new-button");
    var shareButton = document.getElementById("share-button");
    
    var helpScreen = document.getElementById("help-screen");
    var infoScreen = document.getElementById("info-screen");  
    
    var helpClose = document.getElementById("help-close");
    var infoClose = document.getElementById("info-close");
    
    var snackbar = document.getElementById("snackbar");
    
    var prompt = document.getElementById("prompt");
    
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
		updateGameState();
	}
	
	function showStory() {	
		showPrompt();
		var i;
		for (i = 0; i < 10; i++) {
			s[i].className = 'storyline'; 
			s[i].value = story[i];
	    }
	}
	
	function showPrompt() {	
		const date = new Date();
		const day = date.getDate();
		const month = date.getMonth();
		let idx = (month*31 + day) % 85;
		prompt.innerHTML = "Today's prompt: "+ prompts[idx];
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

	function showMessage(msg) {
		snackbar.className = "show";
		snackbar.innerHTML = msg;
		setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 1500);
	}

	
	/** Main Game Logic
	 */
	function updateGameState() {

		var player = (Math.floor((line % 4)/2) + 1);

		newButton.style.visibility = 'hidden';
		shareButton.style.visibility = 'hidden';

		for (i = 0; i < 10; i++) {
			s[i].disabled=true;
			s[i].placeholder="";
		}

		if (line < 11)	{
			var i;
			for (i = 0; i < 10; i++) s[i].value="";
		}
			
		if (line < 10)	{	
			s[line].disabled=false; 
			s[line].focus();
			s[line].placeholder="Player "+player+", write the next line of the story ...";
			if(line==0) s[line].placeholder="Player "+player+", write the first line of the story ...";
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
			    showMessage("Pass to Player 2");
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
			    showMessage("Pass to Player 1");
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
			    showMessage("Pass to Player 2");
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
			    showMessage("Pass to Player 1");
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
			    s[7].className = 'storylinehidden';
			    s[8].className = 'storylinehidden';
			    s[9].className = 'storylinehidden';
			    shareButton.innerHTML = "Reveal Story";
			    shareButton.style.visibility = 'visible';
			    break;
			case 11:
				reveal();
				shareButton.innerHTML = "Share <i class='fa fa-share-alt'></i>";
				shareButton.style.visibility = 'visible';
				newButton.style.visibility = 'visible';
				break;
		};

	}

	function takeScreenShot(){
		if(line==10) {
			line++;
			updateGameState();
		} else {
			// copy the full story to the clipboard
			var fullStory = "Story with a Friend (https://storywithafriend.github.io)";
			fullStory = fullStory + "\n\uD83D\uDFE9" + story[0]
			fullStory = fullStory + "\n\uD83D\uDFE9" + story[1]
			fullStory = fullStory + "\n\uD83D\uDFE6" + story[2]
			fullStory = fullStory + "\n\uD83D\uDFE6" + story[3]
			fullStory = fullStory + "\n\uD83D\uDFE9" + story[4]
			fullStory = fullStory + "\n\uD83D\uDFE9" + story[5]
			fullStory = fullStory + "\n\uD83D\uDFE6" + story[6]
			fullStory = fullStory + "\n\uD83D\uDFE6" + story[7]
			fullStory = fullStory + "\n\uD83D\uDFE9" + story[8]
			fullStory = fullStory + "\n\uD83D\uDFE9" + story[9]
			navigator.clipboard.writeText(fullStory).then(
		    	() => {
		    	/* success */
		    	showMessage("Copied story to clipboard..");
		    	},
		    	() => {
		    	/* failure */
		    	showMessage("Copy to clipboard failed..");
		    	}
		    );
	    }
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
	
    // open/close help
    helpButton.onclick = function() {
      helpScreen.style.display = "block";
    }
    helpClose.onclick = function() {
      helpScreen.style.display = "none";
    }
    
    // open/close info
    infoButton.onclick = function() {
      infoScreen.style.display = "block";
    }
    infoClose.onclick = function() {
      infoScreen.style.display = "none";
    }

    // Share screenshot button
    shareButton.addEventListener('click', takeScreenShot);
    
    // New Game button
    newButton.addEventListener('click', clearStory);
    
    clearStory();
    updateGameState();
    
})();

