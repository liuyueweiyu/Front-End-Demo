let month = ["04月","03月","11月","10月","08月"];
let counts = [5,6,7,7,4];
let end = [30,30,20,30,30];

let imgs = ["images/TIM截图20180427154254.jpg","images/TIM截图20180427165854.jpg","images/TIM截图20180427165916.jpg","images/TIM截图20180427165937.jpg"];



function Item(date) {
    let i = new Object();
    i.img = imgs[Math.floor(Math.random()*4)];
    i.date = date;
    i.distance = (3+Math.random()).toFixed(2);
    i.speed = "6'" + Math.floor(Math.random()*100) +"''";
    i.time = "00:18:" + Math.floor(Math.random()*60);
    return i;
}

function getItems(count,index) {

    let items = new Array();
    for (let i = 0;i < count ;i++){
        let  it = Item(end[index]-parseInt(end[index]/count*(i+1)) + 1);
        items.push(it);
    }
    return items;
}

let $monthNode = $(".container .month");

$monthNode.children().each(function () {
    $(this).text (month[$(this).index()]);
});

$monthNode.on("click","div",function () {
    let index = $(this).index();
    $(this).parent().children().removeClass("green");
    $(this).addClass("green");
    bindItem(index);
})

function getItemNode(img,date,distance,time,speed) {
    let item = document.createElement("div");
    item.setAttribute("class","item");
    let content = `
     <img src="${img}">
                    <div>
                        <span>${date}日晚上 户外跑</span>
                        <h3>${distance}</h3>
                        <h4>公里</h4>
                        <p>
                            <img src="images/clock_96px_1164609_easyicon.net.png">
                            <span>${distance}</span>
                            <span class="blanket"></span>
                            <img src="images/clock_96px_1164610_easyicon.net.png">
                            <span>${speed}</span>
                        </p>
                    </div>
                    <a><img src="images/left_arrow_439px_1209022_easyicon.net-1.png"></a>
    `;
    item.innerHTML = content;
    return item;
}

function bindItem(index) {

    $(".board span:first-child").text(month[index]);
    let $itemlist = $(".item-list");
    $itemlist.empty();
    let f = document.createDocumentFragment();
    let items = getItems(counts[index],index);
    let sum = 0;
    for (let i = 0;i<counts[index];i++){
        f.appendChild(getItemNode(items[i].img,items[i].date,items[i].distance,items[i].time,items[i].speed));
        sum += Number(items[i].distance);
    }
    $itemlist.append($(f));
    $(".board span:first-child+span").text(sum.toFixed(2) + "公里");
    $(".board span:last-child").text(counts[index] + "次运动");
}

bindItem(0);