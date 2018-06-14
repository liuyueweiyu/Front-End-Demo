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

    function randomPositon(r,blank) {   //在半径blank至r之间的圆环中随机生成粒子
        let rer = r;
        r = Math.random() * rer;
        while(r<=blank){
            r = Math.random() * rer;
        }
        let arcer = Math.random() * 360 *0.017453293;
        return [r*Math.sin(arcer)+positionx,r* Math.cos(arcer)+positiony,r*Math.sin(arcer),r* Math.cos(arcer)];
    }
    function random(min, max) {
        return Math.random() * (max - min) + min;
    }
    let Atom = function () {};
    Atom.prototype = {
        init: function () {
            this.counter = 0;
            [this.x,this.y,this.movex,this.movey]= randomPositon(1000,10);
            this.r = random(1, 5);
            this.v = random(0.05, 0.08);
        },
        draw: function (cxt) {
            cxt.beginPath();
            cxt.fillStyle = 'rgb(145,203,205)';
            cxt.arc(this.x, this.y + this.r, this.r, 0, Math.PI * 2, false);
            cxt.fill();
            cxt.closePath();
            this.update(cxt);
        },
        update: function (cxt) {
            if (this.y >= 0 && this.y <= height && this.x >= 0 && this.x <= width) {
                this.y += this.movey * this.v;
                this.x += this.movex * this.v;
            }
            else {
                this.init();
            }
        }
    }

    let atom = [];
    const atomCount = 200;
    for (let i = 0; i < atomCount; i++) {
        setTimeout(function () {
            let oAtom = new Atom();
            oAtom.init();
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