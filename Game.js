class Game {
    constructor() {
     
  
      this.leadeboardTitle = createElement("h2");
  
      this.leader1 = createElement("h2");
      this.leader2 = createElement("h2");
      this.playerMoving = false;
    }
  
    update(state) {
      ({
        gameState: state
      });
    }
  
    start() {
      player = new Player();
      playerCount = player.getCount();
  
      form = new Form();
      form.display();
 
     girl = createSprite(width / 2 - 50, height - 100);
     girl.addImage(" girlrunning",girlrunning_img);
     girl.scale = 0.07;
  
      boy = createSprite(width / 2 + 100, height - 100);
      boy.addImage(" boy",  boy_img);
      boy.scale = 0.07;
  
      players = [ girl,boy];
  
      
      obstacle = new Group();
     coin = new Group();
  
      
      this.addSprites(obstacle, 4,obstacleImage, 0.02);
  
      
      this.addSprites(coin, 18,coinImage, 0.09);
    }
  
    
    addSprites(spriteGroup, numberOfSprites, spriteImage, scale) {
      for (var i = 0; i < numberOfSprites; i++) {
        var x, y;
  
        x = random(width / 2 + 150, width / 2 - 150);
        y = random(-height * 4.5, height - 400);
  
        var sprite = createSprite(x, y);
        sprite.addImage("sprite", spriteImage);
  
        sprite.scale = scale;
        spriteGroup.add(sprite);
      }
    }
  
    handleElements() {
      form.hide();
      form.titleImg.position(40, 50);
      form.titleImg.class("gameTitleAfterEffect");
      
      this.leadeboardTitle.html("Leaderboard");
      this.leadeboardTitle.class("resetText");
      this.leadeboardTitle.position(width / 3 - 60, 40);
  
      this.leader1.class("leadersText");
      this.leader1.position(width / 3 - 50, 80);
  
      this.leader2.class("leadersText");
      this.leader2.position(width / 3 - 50, 130);
    }
  
    play() {
      this.handleElements();
  
      Player.getPlayersInfo();
  
      if (allPlayers !== undefined) {
  
        image(track, 0, -height * 5, width, height * 6);
        this.showLeaderboard();
  
        
        var index = 0;
        for (var plr in allPlayers) {
          
          index = index + 1;
  
          
          var x = allPlayers[plr].positionX;
          var y = height - allPlayers[plr].positionY;
  
          girl[index - 1].position.x = x;
          boy[index - 1].position.y = y;
  
          
          if (index === player.index) {
            stroke(10);
            fill("red");
            ellipse(x, y, 60, 60);
  
            this.handleObstacle(index);
            this.handleCoin(index);
      camera.position.x =   girl [index - 1].position.x;
            camera.position.y =    boy[index - 1].position.y;
            
           }}
        
        
           const finshLine = height * 6 - 100;

           } 
           if (keyIsDown(UP_ARROW)) {
            player.positionY += 10;
            player.update();
          }
           drawSprites();}}
  
    showLeaderboard() 
    {
      var leader1, leader2;
      var players = Object.values(allPlayers);
      if (
        (players[0].rank === 0 && players[1].rank === 0) ||
        players[0].rank === 1
      ) {
        leader1 =
          players[0].rank +
          "&emsp;" +
          players[0].name +
          "&emsp;" +
          players[0].score;
  
        leader2 =
          players[1].rank +
          "&emsp;" +
          players[1].name +
          "&emsp;" +
          players[1].score;
      }
  
      if (players[1].rank === 1) {
        leader1 =
          players[1].rank +
          "&emsp;" +
          players[1].name +
          "&emsp;" +
          players[1].score;
  
        leader2 =
          players[0].rank +
          "&emsp;" +
          players[0].name +
          "&emsp;" +
          players[0].score;
      }
  
      this.leader1.html(leader1);
      this.leader2.html(leader2);
    
  
        
  
  
    handleObstacle(index) 
      girl[index - 1].overlap(obstacle, function(collector, collected) {
        player.obstacle = 185;
      
        collected.remove();
      });
      boy[index - 1].overlap(obstacle, function(collector, collected) {
        player.obstacle = 185;
      
        collected.remove();
      });

    
        
        player.score += 21;
       
        player.update();
    }