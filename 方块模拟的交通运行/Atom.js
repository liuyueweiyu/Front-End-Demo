let flag = true;
let atom = [];
const Speed = 1.5;
// console.log(flag);
window.onload = function () {
    let Canvas = function (w, h) {
        this.width = w;
        this.height = h;
    }
    Canvas.prototype = {
        init: function () {
            let oC = document.createElement("canvas");
            oC.setAttribute('width', this.width);
            oC.setAttribute('height', this.height);
            oC.setAttribute('id', 'canvas');
            document.body.appendChild(oC);
        }
    }
    let curWinWidth = window.innerWidth,
        curWinHeight = window.innerHeight;
    let positionx = curWinWidth/2,
        positiony = curWinHeight/2;
    let oCanvas = new Canvas(curWinWidth, curWinHeight);
    oCanvas.init();

    let oC = document.querySelector('#canvas');
    let width = oC.width, 
        height = oC.height, 
        oGc = oC.getContext('2d');

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }
    let Atom = function () {};
    Atom.prototype = {
        init: function (index) {
            this.index = index;
            this.w = random(20,120);
            this.x = - this.w;
            this.y = (index%4)*100;
            this.space = random(10,50)
            this.fill = Math.random() > 0.15 ;
        },
        draw: function (cxt) {
            let tj = (flag && (this.index <= 3 || atom[this.index - 4].x >this.space))
            || 
            (!flag && ((this.index <= 3 && atom[this.index + 196].x >this.space )||(this.index> 3 &&atom[this.index - 4].x >this.space )));
            // console.log(flag);
            if(tj) {
                
                cxt.beginPath();
                cxt.fillStyle = 'rgb(145,203,205)';
                cxt.rect(this.x, this.y ,this.w,20);
                cxt.stroke();
                if(this.fill)
                    cxt.fill();
                this.update(cxt);
            }
        },
        update: function (cxt) {
            if(this.x < curWinWidth){
                this.x += Speed;
            }
            else {
                if(flag && this.index == 3)
                    flag = false;
                this.init(this.index);
            }
        }
    }

    
    const atomCount = 200;
    for (let i = 0; i < atomCount; i++) {
        setTimeout(function () {
            let oAtom = new Atom();
            oAtom.init(i);
            atom.push(oAtom);
        }, 10 * i);
    }

    (function move() {
        oGc.clearRect(0, 0, width, height);
        for (let i = 0; i < atom.length; i++) {
            atom[i].draw(oGc);
        }
        requestAnimationFrame(move);
    })();
}