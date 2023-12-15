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

function getId(element){
	let id = element.target.id
	return Number(id.replace(/[^+\d]/g, ''))
}

function addListenerForArray(elements, event, func){
	for(let i=0;i!=elements.length;i++){
		elements[i].addEventListener(event, func);
	}
}

function deleteClassForIDs(currentId, elements, cl, maxId){
	for(let i=0;i!=maxId;i++){
		if(currentId!=i+1){
			elements[i].classList.remove(cl);
		}
		continue;
	}

}

const makeLineActive = function(el){
	document.querySelectorAll(".scroll__el-underline")[getId(el)-1].classList.add("scroll__el-underline-current")
}

const makeLineDisabled = function(el){
	document.querySelectorAll(".scroll__el-underline")[getId(el)-1].classList.remove("scroll__el-underline-current")
}

addListenerForArray(scrollElements, "mouseenter", makeLineActive)
addListenerForArray(scrollElements, "mouseleave", makeLineDisabled)

const infoScreenScrollElements = document.querySelectorAll(".info__screen-scroll-el");

const infoMakeLineActive = function(el){
	document.querySelectorAll(".info__screen-scroll-el")[getId(el)-1].classList.add("info__screen-scroll-el_current")
	deleteClassForIDs(getId(el), document.querySelectorAll(".info__screen-scroll-el"), "info__screen-scroll-el_current", 3)
}

addListenerForArray(infoScreenScrollElements, "click", infoMakeLineActive)