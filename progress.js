var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var bar = document.querySelector('.bar');

var translate = 0;

btn1.onclick = () => {
    translate += 100;
    before.transform = "translate(100, 0)";
}
btn2.onclick = () => {
    console.log("Hello Worlds");
}