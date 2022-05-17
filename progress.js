var btn1 = document.querySelector('.btn1');
var btn2 = document.querySelector('.btn2');
var cover = document.querySelector('.cover');
var body = document.querySelector('body');
var fade = document.querySelector('.fade');
var value = 0;

btn1.onclick = () => {
    if (value < 80) {
        value += 20;
        trnaslate = value + 'vw';
        cover.style.transform = `translate(${trnaslate})`;
        fade.style.backgroundColor = `rgb(53, 52, 52, ${1 - (0.0125 * value)} )`;
        console.log(0.0125 * value)
    } else {
        alert("#define TRUE FALSE // Happy debugging")
    }
}
btn2.onclick = () => {
    if (value > 0) {
        value -= 20
        trnaslate = value + 'vw'
        cover.style.transform = `translate(${trnaslate})`;
        fade.style.backgroundColor = `rgb(53, 52, 52, ${1 - (0.0125 * value)} )`;
    } else {
        alert("one less bug in my life ..... ☻")
    }
}