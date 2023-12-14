colorButton__blue=document.querySelectorAll("#circle__blue")[0]
colorButton__khaki=document.querySelectorAll("#circle__khaki")[0]
colorButton__black=document.querySelectorAll("#circle__black")[0]
orderImage=document.querySelectorAll('.order__img')[0]


function bikeToBlue(){
	orderImage.src="images/orderImage-Blue.png"
	colorButton__blue.src="images/circle_blue-Current.svg";
	colorButton__blue.classList.add("color-picker__circle-current")
	colorButton__khaki.classList.remove("color-picker__circle-current")
	colorButton__black.classList.remove("color-picker__circle-current")
	colorButton__khaki.src="images/circle_khaki.svg"
	colorButton__black.src="images/circle_black.svg"

}

function bikeToKhaki(){
	orderImage.src="images/orderImage.png"
	colorButton__khaki.src="images/circle_khaki-Current.svg";
	colorButton__khaki.classList.add("color-picker__circle-current")
	colorButton__blue.classList.remove("color-picker__circle-current")
	colorButton__black.classList.remove("color-picker__circle-current")
	colorButton__blue.src="images/circle_blue.svg"
	colorButton__black.src="images/circle_black.svg"
}

function bikeToBlack(){
	orderImage.src="images/orderImage-Black.png"
	colorButton__black.src="images/circle_black-Current.svg";
	colorButton__black.classList.add("color-picker__circle-current")
	colorButton__khaki.classList.remove("color-picker__circle-current")
	colorButton__blue.classList.remove("color-picker__circle-current")
	colorButton__blue.src="images/circle_blue.svg"
	colorButton__khaki.src="images/circle_khaki.svg"
}

colorButton__blue.addEventListener("click", bikeToBlue)
colorButton__khaki.addEventListener("click", bikeToKhaki)
colorButton__black.addEventListener("click", bikeToBlack)

const scrollElements = document.querySelectorAll(".scroll__el")

function makeLineActive(el){
	id = el.target.id;
	id = Number(id.replace(/[^+\d]/g, ''))-1;
	document.querySelectorAll(".scroll__el-underline")[id].classList.add("scroll__el-underline-current")
}

function makeLineDisabled(el){
	id = el.target.id;
	id = Number(id.replace(/[^+\d]/g, ''))-1;
	document.querySelectorAll(".scroll__el-underline")[id].classList.remove("scroll__el-underline-current")
}


for(let i=0;i!=4;i++){
	 scrollElements[i].addEventListener("mouseenter", makeLineActive)
	 scrollElements[i].addEventListener("mouseleave", makeLineDisabled)
}
