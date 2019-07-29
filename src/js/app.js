const c = document.getElementById("myCanvas");
c.width = window.innerWidth;
c.height = window.innerHeight;
const ctx = c.getContext("2d");

let circleArray = [];
for (let step = 0; step < 100; step++) {
    const x = Math.random() * innerWidth
    const y = Math.random() * innerHeight;
    circleArray.push(new Circle(x, y))

}

function Circle(x, y) {
    this.x = x
    this.y = y
    this.dx = (Math.random() - 0.5) * 6
    this.dy = (Math.random() - 0.5) * 6
    this.radius = Math.random() * 9 + 5
    this.minRadius = Math.random() * 9 + 5
    this.maxRadius = 40
    this.mouseX = undefined
    this.mouseY = undefined
    this.colorCode = ['red', 'blue', 'green', 'purple', 'grey']
    this.color = this.colorCode[Math.floor(Math.random() * this.colorCode.length)]
    
    
    this.draw = () => {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.strokeStyle = this.color
        ctx.stroke();

    }

    this.mouseMove = (event) => {
        this.mouseX = event.x
        this.mouseY = event.y
    }

    window.addEventListener("mousemove", this.mouseMove, false);

    this.update = () => {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) { this.dx = -this.dx }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) { this.dy = -this.dy }
        this.x += this.dx
        this.y += this.dy
        if (this.mouseX - this.x < 50 && this.mouseX - this.x > -50 && this.mouseY - this.y < 50 && this.mouseY - this.y > -50 ) {
            if (this.radius < this.maxRadius) this.radius += 1
        }
        else if (this.radius > this.minRadius) {
            this.radius -= 1
        }
        this.draw()
    }

    // this.animate = () => {
    //     window.requestAnimationFrame(this.animate)    
    //     // console.log('hello')
    //     ctx.clearRect(0, 0, innerWidth, innerHeight)
    //     // for (let step = 0; step < circleArray.length; step++) {
    //         this.update()

    //     // }
    // }
    // this.animate()

}

function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, innerWidth, innerHeight)
    for (let step = 0; step < circleArray.length; step++) {
        circleArray[step].update()
    }
}
animate()

