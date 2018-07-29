let flag = true;
let atom = [[],[],[],[]];
const Speed = 1.5;
const atomCount = 60;
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
        init: function (q) {
            this.w = random(20,120);
            this.x = - this.w;
            // this.y = (index%4)*100;
            this.q = q;
            this.y = q*100;
            this.space = random(10,50);
            this.fill = Math.random() > 0.15 ;
        },
        draw: function (cxt) {
            let index = atom[this.q].indexOf(this);
            const tj = index == 0 || atom[this.q][index - 1].x > this.space;
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
                atom[this.q].splice(0,1);
                this.init(this.q);
            }

        }
    }
    for(let j = 0;j<4;j++){
        for (let i = 0; i < atomCount; i++) {
                let oAtom = new Atom();
                oAtom.init(j);
                atom[j].push(oAtom);
        }
    }
    (function move() {
        oGc.clearRect(0, 0, width, height);
        for(let j = 0;j<4;j++){
            for (let i = 0; i < atom[j].length; i++) {
                atom[j][i].draw(oGc);
            }
        }
        requestAnimationFrame(move);
        
    })();

}