const c = document.getElementById("sineWavesCanvas");
c.width = window.innerWidth;
c.height = window.innerHeight;
const ctx = c.getContext("2d");

// let circleArray = [];
for (let step = 0; step < c.width; step++) {
    const x = Math.random() * innerWidth
    const y = Math.random() * innerHeight
    new Line(i, c.height / 2 + Math.sin(i * 0.01) * 100)
}

function Line(item1, item2) {
    ctx.moveTo(0, 0)
    
    ctx.lineTo(3300, 3400)

    ctx.stroke()
}



// funct ion animate() {
//     requestAnimationFrame(animate)
//     ctx.clearRect(0, 0, innerWidth, innerHeight)
//     for (let step = 0; step < circleArray.length; step++) {
//         // circleArray[step].update()
//     }
// }
// animate()