const c = document.getElementById("sineWavesCanvas");
c.width = window.innerWidth;
c.height = window.innerHeight;
const ctx = c.getContext("2d");

const grd = ctx.createLinearGradient(0, 0, 0, c.height);
grd.addColorStop(0, "#262626");
grd.addColorStop(1, "#404040");

ctx.fillStyle = grd
ctx.fillRect(0, 0, c.width, c.height)

function Star(x, y, r){
    this.x = x;
    this.y = y;
    this.radius = r;
    this.maxRadius = 20
    this.minRadius = 2
    this.velocity = 0.1
    this.toggle = false
}

Star.prototype.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    // ctx.shadowBlur = 20;
    // ctx.shadowColor = "#595959";
    ctx.fillStyle = "#D9D9D9";
    ctx.fill()
}

Star.prototype.update = function () {
    
    // if (this.radius > this.maxRadius) {
    //     this.velocity += this.velocity * 0.2
    // }
    // else {
    //     this.velocity -= this.velocity * 0.2
    // }

    // if (this.radius < this.maxRadius) {
    //     this.radius += 1
    // }
    // else if (this.radius > this.minRadius) {
    //     this.radius -= 1
    // }

    // if(this.radius >= this.minRadius) {
    //     this.toggle = false
    // }
    // else {
    //     this.toggle = true
    // }
    
    
    this.draw()
}

let starArray = []
for (let index = 0; index < 100; index++) {
    const x = Math.random() * innerWidth
    const y = Math.random() * innerHeight
    const r = Math.random() * 5
    const star = new Star(x, y, r)
    star.draw()

    starArray.push(star)
}

function animate(){
    requestAnimationFrame(animate)

    for (let index = 0; index < starArray.length; index++) {
        const element = starArray[index];
        element.update()
    }    
}
animate()