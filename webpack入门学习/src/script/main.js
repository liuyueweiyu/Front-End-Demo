import common from "../style/common.css";
import scss from "../style/test.scss";
import Layer from "../component/layer.js";
function helloworld() {
    let layer = new Layer();
    document.getElementById("box").innerHTML = layer.tpl;
}

helloworld();