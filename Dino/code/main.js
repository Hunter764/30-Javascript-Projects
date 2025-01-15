import kaplay from "kaplay";

const k = kaplay({
    width: 1280,
    height: 720,
});

k.loadBean();

k.setGravity(1800);  //player effected by gravity

//adding jumpinf property to the platform


const player = k.add([
    k.sprite("bean"),  
    k.pos(k.center()),    //position the player bean to center
    k.area(),    //specifying the area use F1 key to look
    k.body(),
    k.offscreen(),
]);


//adding the jumping property to the player
player.onKeyPress("space", () =>{
    if(player.isGrounded( )) player.jump();
})
 
player.onExitScreen( ()=>{
    k.go("gameover");
});

k.scene("gameover", ()=>{
    k.add([k.text("Game Over!"),k.pos(k.center())]);
});

//adding platform for the player to jump on

k.add([
    k.rect(k.width(),300),
     k.pos(0,500),
      k.area(),
      k.outline(3), //outline of the platform
      k.body({isStatic: true}), //this property make your object not susceptible to gravity
]);


//adding the block for the player to jump on


//setting up timer

let counter = 0;
const counterUI = k.add([k.text("0")]);

k.loop(1, () => {
    counter++;
    counterUI.text = counter.toString();

    const speeds =[300, 500 , 800, 1000, 1500 ];
    const currentSpeed =  speeds[Math.floor(Math.random() * speeds.length)];

    k.add([
        k.rect(50,50),
        k.pos(1000,500 ), 
        k.area(),
        k.body(),
        k.outline(3) , 
        k.move(k.vec2(- 1,0),currentSpeed ), //vec2 is for 2d movement

    ]);
});

