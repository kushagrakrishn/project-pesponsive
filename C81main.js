canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color = "red";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    color=document.getElementById("color").value;
    console.log(color);
   mouse_x=e.clientX - canvas.offsetLeft;
   mouse_y=e.clientY - canvas.offsetTop;
   console.log("X= " + mouse_x +" ,y = " + mouse_y);
   circle(mouse_x , mouse_y);

  
}

function circle (mouse_x, mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(200,200,40,0,2*Math.PI);
    ctx.stroke();
}

function get()
{
	select_option = document.getElementById("select_option").value;
	if(select_option == "radius")
	{
		document.getElementById("radius").style.display = "block";
		document.getElementById("sangle").style.display = "none";
		document.getElementById("eangle").style.display = "none";
	}
	if(select_option == "startAngle")
	{
		document.getElementById("sangle").style.display = "block";
		document.getElementById("radius").style.display = "none";
		document.getElementById("eangle").style.display = "none";
	}
	if(select_option == "endAngle")
	{
		document.getElementById("eangle").style.display = "block";
		document.getElementById("radius").style.display = "none";
		document.getElementById("sangle").style.display = "none";
	}
}
function applyr()
{
    var ele = document.getElementsByName('r'); 
    for(i = 0; i < ele.length; i++) 
    { 
        if(ele[i].checked) 
        {
		r = ele[i].value; 
	    ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.beginPath();
		ctx.strokeStyle = color;
		ctx.lineWidth = 3;
		ctx.arc(200, 200, r ,0 , 2 * Math.PI);
		ctx.stroke();
		document.getElementById("html_code").innerHTML = "ctx.arc(200, 200, <b>"+r+"</b> ,0 , 2 * Math.PI)";
        }
    }
}

function applysa()
{
    var ele = document.getElementsByName('sa'); 
    for(i = 0; i < ele.length; i++) 
    { 
        if(ele[i].checked) 
        {
		sa = ele[i].value; 
	    ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.beginPath();
		ctx.strokeStyle = color;
		ctx.lineWidth = 3;
		ctx.arc(200, 200, 40 ,sa , 2 * Math.PI);
		ctx.stroke();
		document.getElementById("html_code").innerHTML = "ctx.arc(200, 200, 40 , <b>"+sa+"</b> , 2 * Math.PI)";
        }
    }
}


