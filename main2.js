canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color = "red";
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

function applyea()
{
    var ele = document.getElementsByName('ea'); 
    for(i = 0; i < ele.length; i++) 
    { 
        if(ele[i].checked) 
        {
		ea = ele[i].value; 
	    ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.beginPath();
		ctx.strokeStyle = color;
		ctx.lineWidth = 3;
		ctx.arc(200, 200, 40 ,0 , ea * Math.PI);
		ctx.stroke();
		document.getElementById("html_code").innerHTML = "ctx.arc(200, 200, 40 ,0 , <b>"+ea+"</b> * Math.PI)";
        }
    }
}
