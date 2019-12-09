var body = document.getElementById('body');
body.addEventListener('click', addImg);

function addImg(event){
	//create img
	//add img
	//set an img based on mouse position
	var newImg = document.createElement('img');
	newImg.src = "img/sparkle.png";
	var x = event.pageX;
	var y = event.pageY;
	newImg.style.left = x + "px";
	newImg.style.top = y + "px";
	newImg.classList.add ('img');
	body.appendChild(newImg);
}
