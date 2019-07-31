const c = document.getElementById("sineWavesCanvas");
c.width = window.innerWidth;
c.height = window.innerHeight;
const ctx = c.getContext("2d");

const grd = ctx.createLinearGradient(0, 0, 0, c.height);
grd.addColorStop(0, "#262626");
grd.addColorStop(1, "#404040");

ctx.fillStyle = grd
ctx.fillRect(0, 0, c.width, c.height)

function Star(){
    this.x = 100;
    this.y = 75;
    this.radius = 50;
    
}

Star.prototype.draw = function() {
    ctx.beginPath();
    
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    
    ctx.fillStyle = "#D9D9D9";
    ctx.fill()

}

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
const star = new Star()
star.draw()