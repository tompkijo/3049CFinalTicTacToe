const NOBODY=0,PLAYER_X=1,PLAYER_O=2;

var game;
var playerXScore = 0;
var playerOScore = 0;
var DrawScore = 0;
var playerXScoreText;
var playerOScoreText;
var DrawScoreText;


window.onload=function(){
    var e={
        type:Phaser.AUTO,
        width:620,
        height:620,
        backgroundColor:0,
        scene:[BootScene,PlayGameScene],
        parent:"gameDiv"};
    
    
    
    
    
    new Phaser.Game(e)};
    
    
    
    
    class BootScene extends Phaser.Scene{
        constructor(){super("BootScene")
    }

        preload(){
            this.load.image("WhiteSquare","WhiteSquare.png"),
            this.load.spritesheet("XandO","XandO.png",{frameWidth:200,frameHeight:173})}
            
        create(){this.scene.start("PlayGameScene")
    }
        
    }        
        
        
            class PlayGameScene extends Phaser.Scene{
            
            constructor(){super("PlayGameScene")
        }
            
            
            
            create(){
                
                let e=this
                e.gameOver=!1,
                e.whoseTurn=PLAYER_X,
                e.boardArray=[];
                
                
                let t=0;
                
                for(let r=0;r<3;r++){
                    let a=100+200*r+10*r;
                    for(let r=0;r<3;r++){
                        let i=100+200*r+10*r,
                        s=e.add.image(i,a,"WhiteSquare");
                        s.myKey=t++;
                        s.setInteractive();
                        s.on("pointerdown",e.handleClick);
                        e.boardArray.push({occupiedBy:NOBODY,playerSprite:null})}}e.whoseTurnIsIt()}
                        
                        
                        
                        
                        
                        
                        
                        
                handleClick(e){
                    let t=this.myKey,
                    r=this.scene;
                    
                    if(r.gameOver)
                    return!0; 
                    
                    let a,i=r.boardArray[t].occupiedBy;
                    
                    i==NOBODY&&(r.whoseTurn==PLAYER_X?(a=r.add.sprite(this.x,this.y,"XandO",1),i=PLAYER_X):(a=r.add.sprite(this.x,this.y,"XandO",0),i=PLAYER_O),
                    r.boardArray[t].occupiedBy=i,
                    r.boardArray[t].playerSprite=a,
                    r.checkForWinner(r.whoseTurn),
                    r.whoseTurn==PLAYER_X?r.whoseTurn=PLAYER_O:r.whoseTurn=PLAYER_X),
                    
                    r.whoseTurnIsIt()
                }
                    
                    
                    
                    whoseTurnIsIt(){
                        let e,t=this.game.config.width/2,
                        r=this.game.config.height/2;
                        e=this.whoseTurn==PLAYER_X?"PLAYER X":"PLAYER O";
                        let a=this.add.text(t,r,e,
                            {fontSize:"72px Arial",fill:"#F00"});
                        a.setOrigin(.5,.5);
                        
                        this.tweens.add({
                            targets:a,
                            alpha:0,
                            ease:"Power1",
                            duration:3e3})}
                            
                            
                            
                            
                    checkForWinner(e){
                        let t=[
                            [0,1,2],
                            [3,4,5],
                            [6,7,8],
                            [0,4,8],
                            [2,4,6],
                            [0,3,6],
                            [1,4,7],
                            [2,5,8]
                        ];
                            
                        for(let r=0;r<t.length;r++){
                            let a=t[r];
                            
                            if(this.boardArray[a[0]].occupiedBy==e&&this.boardArray[a[1]].occupiedBy==e&&this.boardArray[a[2]].occupiedBy==e)
                            return this.broadcastWinner(e,a),!0}
                            
                            
                        let r=!1;
                        for(let e=0;e<this.boardArray.length;e++)
                            this.boardArray[e].occupiedBy==NOBODY&&(r=!0);
                            return r||this.broadcastWinner(NOBODY),!1}
                            
                            
                    broadcastWinner(e,t){
                        this.gameOver=!0,
                        this.tweens.killAll();
                        
                        
                        let r,a=this.game.config.width/2,
                        i=this.game.config.height/2;
                        if(e==PLAYER_X){
                           r= "X WINS!";
                           playerXScore++;
                        }else if (e==PLAYER_O){
                            r = "O WINS!"
                            playerOScore++;
                        }else{
                            r = "No Winner."
                            DrawScore++;
                        }
                      
                        
                        let s=this.add.text(a,i,r,{fontSize:"104px Arial",fill:"#000000",backgroundColor:"#000000"});
                        
                        
                        if(s.setOrigin(.5,.5),s.setInteractive(),s.on("pointerdown",function(){
                            this.scene.start("PlayGameScene")},this),
                            (s=this.add.text(a,i,r,{fontSize:"104px Arial",fill:"#bcf008"})).setOrigin(.5,.5),
                            
                            
                            this.tweens.add({
                                targets:s,
                                alpha:0,
                                ease:"Power1",
                                duration:1e3,
                                yoyo:!0,
                                repeat:-1}),
                                e!=NOBODY)
                                
                            for(let e=0;e<t.length;e++){
                                
                                let r=this.boardArray[t[e]].playerSprite;
                                
                                this.tweens.add({
                                    targets:r,
                                    angle:360,
                                    ease:"None",
                                    duration:1e3,
                                    repeat:-1
                                
                                })
                        }                   
    }
            
    
  //  playerXScoreText = game.add.text(5, 5, 'Points: 0', { font: '18px Arial', fill: '#0095DD' });
   // playerOScoreText = game.add.text(5, 5, 'Points: 0', { font: '18px Arial', fill: '#0095DD' });
   // DrawScoreText = game.add.text(5, 5, 'Points: 0', { sfont: '18px Arial', fill: '#0095DD' });

}