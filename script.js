// document.getElementById('left').onclick = function() {
//     document.getElementbyId('img').src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/fac0652bee3b3e64.jpg?q=20"
// };

// document.getElementById('right').onclick = function() {
    
// };
const left=document.getElementById("left");
const right=document.getElementById("right");
const img=document.getElementById("img");
console.log(img);


left.addEventListener("mousedown",(e)=>{
    console.log(e);
    img.src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/fac0652bee3b3e64.jpg?q=20";

})

right.addEventListener("mousedown",(f)=>{
    console.log(f);
    img.src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/e906fc206eb17c68.jpg?q=20"


})