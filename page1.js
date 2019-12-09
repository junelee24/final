//function makeownname(){}
function makesquare(){
	var sq = document.createElement("div");
    //ownname.classList.add("css ownname")
	sq.classList.add("square");
	var container = document.getElementById("container");
	container.appendChild(sq);
    //make square clickable
    sq.addEventListener("click", makesquare);
    console.log("squares made");
}

function makecircle(){
	var circle = document.createElement("div");
	circle.classList.add("circle");
	var container = document.getElementById("container");
	container.appendChild(circle);
    //make circle clickable
    circle.addEventListener("click", makecircle);
    console.log("circles made");
}

var button = document.getElementById("intro");
button.addEventListener("click", drawtenshapes);


//activates function
    // makecircle();
    // makesquare();

function drawtenshapes(){ //button
for(i=0; i<2; i++){
    //even: if i is divisible (%) by 2
    if(i % 2 == 0){
        makecircle()
    }
    //everything else (odds)
    else{
        makesquare()
        }
    }
}
