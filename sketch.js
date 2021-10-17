// https://editor.p5js.org/socalledsound/sketches/DDN5qjcrE
// https://editor.p5js.org/socalledsound/sketches/EYQmgTJuZ
const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
const center = {x: canvasWidth/2, y: canvasHeight/2}
// const initCircle = {x: canvasWidth/2, y: canvasHeight/2}
const circleSize = 20
const loopRadius = 400
const circleColor = [220, 0, 220]
let circles
let angle = 0
let arc = {
    numPoints: 100,
    angle: 90,
    center: {x: canvasWidth * 0.75, y: canvasHeight/2},
    radius: 40,
}


function setup(){
    createCanvas(canvasWidth, canvasHeight) 
    circles = Array.from({length: 255 * 2}, (el, i) => {
        const x = 100 + i
        const y = (sin(i/(255/TWO_PI)) * loopRadius) + canvasHeight/2
        const color = i % 255
        return {x, y, color}
    })
    arcPoints = Array.from({length: arc.numPoints} , (el, i) => {
        const point = createArcPoint(i, arc.angle, arc.center, arc.radius)
        console.log(point)
        return point
    })
}

function draw(){
    background(30)
    circles.forEach(circle => drawCircle(circle))

    stroke([220, 0, 0])
    drawUpperTriangle(canvasWidth, canvasHeight, angle)
    drawLowerTriangle(canvasWidth, canvasHeight, angle)
    drawAngleLine(angle)
    drawAngleCircle(angle)
    drawCirclingCircle(angle)
    drawCirclingLine(angle)
    angle+=0.01
}

// const drawArc = (angle) => {
//     stroke([120, 0, 120])
//     //arc(canvasWidth/2, canvasHeight/2, 40, 40, 0, 90)
//     arc(100,100,50,50,PI/1.5,TWO_PI * 0.75)
// }


const drawCircle = (circle) => {
    fill(circle.color)
    noStroke()
    ellipse(circle.x, circle.y, circleSize)
}

const drawAngleCircle = (angle) => {
    ellipse(canvasWidth/2, cos(angle) * loopRadius + canvasHeight/2, 100) 
    //ellipse(sin(angle) * loopRadius + canvasWidth/2, cos(angle) * loopRadius + canvasHeight/2, 100)
}

const drawAngleLine = (angle) => {
    line(canvasWidth * 0.75, canvasHeight/2, canvasWidth/2, cos(angle) * loopRadius + canvasHeight/2)
}


const drawCirclingCircle = (angle) => {
    //ellipse(canvasWidth/2, cos(angle) * loopRadius + canvasHeight/2, 100) 
    ellipse(sin(angle) * loopRadius + canvasWidth/2, cos(angle) * loopRadius + canvasHeight/2, 100)
}

const drawCirclingLine = (angle) => {
    line(canvasWidth/2, canvasHeight/2, sin(angle) * loopRadius + canvasWidth/2, cos(angle) * loopRadius + canvasHeight/2)
}


const createArcPoint = (idx, angle, center, radius) => {
    const a = idx/angle
    const x = sin(a) * radius + center.x
    const y = cos(a) * radius + center.y
    console.log(x, y)
    return {
        x, y
    }
}


const drawUpperTriangle = (canvasWidth, canvasHeight, angle) => {
    stroke([120, 0, 0])
    line(canvasWidth/2, canvasHeight/2, canvasWidth/2, canvasHeight/2 - loopRadius)
    stroke([160, 0, 0])
    line(canvasWidth * 0.75, canvasHeight/2, canvasWidth/2, canvasHeight/2 - loopRadius)
    //stroke([160, 160, 160])
    line(canvasWidth * 0.75, canvasHeight/2, canvasWidth/2, canvasHeight/2)    
}

const drawLowerTriangle = (canvasWidth, canvasHeight, angle) => {
    stroke([120, 0, 0])
    line(canvasWidth/2, canvasHeight/2, canvasWidth/2, canvasHeight/2 + loopRadius)
    stroke([160, 0, 0])
    line(canvasWidth * 0.75, canvasHeight/2, canvasWidth/2, canvasHeight/2 + loopRadius)
    stroke([160, 160, 160])
    line(canvasWidth * 0.75, canvasHeight/2, canvasWidth/2, canvasHeight/2)    
}




const drawTriangle2 = (canvasWidth, canvasHeight, angle) => {
    line(canvasWidth * 0.75, canvasHeight/2, canvasWidth/2, canvasHeight/2 - loopRadius)
    line(canvasWidth * 0.75, canvasHeight/2, canvasWidth/2, cos(angle) * loopRadius + canvasHeight/2)
    //line(canvasWidth * 0.75, canvasHeight/2, sin(angle) * loopRadius + canvasWidth/2, cos(angle) * loopRadius + canvasHeight/2)
    
    //ellipse(sin(angle) * loopRadius + canvasWidth/2, cos(angle) * loopRadius + canvasHeight/2, 100)
   // stroke(255)
    //line(canvasWidth/2, canvasHeight/2, sin(angle) * loopRadius + canvasWidth/2, cos(angle) * loopRadius + canvasHeight/2)
    stroke([160, 160, 160])
    line(canvasWidth/2, canvasHeight/2, canvasWidth/2, canvasHeight/2 - loopRadius)
}

const getCircleCoordinates = () => {
    const x = (sin(angle) * canvasWidth/2) + canvasWidth/2 
    const y = canvasHeight/2
    return {
        x, 
        y
    }
}



const drawAngle = (points) => {
    // console.log(points)
    stroke([200, 0, 200])
    beginShape()
        points.forEach(point => {
            // console.log(point)
            vertex(point.x, point.y)
        })
    endShape()
}

const drawAngleData = (x,y,angle) => {

}
