// To change css properties WTMG
//Let's declare the ranges and assign them to variables
const borderSize = document.getElementById('spacing');
const blurSize = document.getElementById('blur');
const colorBorder = document.getElementById('colorBorder');
const form = document.querySelector('.form');

 // change properties
form.addEventListener('input',(e)=>{
    e.preventDefault();
    document.getElementById('wallpaper').style.borderWidth = borderSize.value.concat('px');
    document.getElementById('wallpaper').style.filter = "blur(" + blurSize.value + "px)";
    document.getElementById('wallpaper').style.borderColor = colorBorder.value ;

})