let ctx = document.getElementById('root').getContext('2d')

function drawSquare(frames){ //functional 
    ctx.fillStyle = "orange"
    ctx.fillRect(frames,10,50,50)
}

let square = { //object 
    draw: (frames) => {
        ctx.fillStyle = "purple"
        ctx.fillRect(frames,150,50,50)  
    }
}

class squareComponent { //class 
    constructor(frames){
        this.frames = frames
    }
    draw(){
        ctx.fillStyle = "pink"
        ctx.fillRect(this.frames,350,50,50)    
    }
}


let f = 0; 

let animationFrameThingy; //To stop later using cancelAnimationFrame(animationFrameThingy) 
function animate() {
    animationFrameThingy = window.requestAnimationFrame(animate)
    f++; 
    //console.log('animate',f)

    ctx.clearRect(0,0,500,500)

    drawSquare(f) //functional approach 

    square.draw(f) //object approach

    let s = new squareComponent(f) //class approach 
    s.draw()
}

animate()




