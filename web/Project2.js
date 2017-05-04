var mychar=document.getElementById("tbl");
var row_number = 0;
function changeColor()
{
	td11.style.backgroundColor="#ff0000";
}

function displayTime()
{
	var mydate=new Date();
	var nowtime=mydate.toLocaleString();
	alert(nowtime);
}

function addTable()
{
	row_number++;
	var newRow=mychar.insertRow();
	newRow.innerHTML="New Row "+row_number;
	newRow.style.backgroundColor="#ccccff";
}

function deleteSecondRow()
{
	mychar.deleteRow(1);
}

function displayCoordinate()
{
	tbl.onmousemove = function(e)
	{
   		var pointer = getCoordInDocument(e);
   		var coord = document.getElementById("td31");
   		td31.innerHTML = "X,Y=("+pointer.x+", "+pointer.y+")";
  	}
  	var getCoordInDocument = function(e) 
 	{
 		e = e || window.event;
  		var x = e.pageX || (e.clientX +(document.documentElement.scrollLeft || document.body.scrollLeft));
  		var y= e.pageY || (e.clientY + (document.documentElement.scrollTop || document.body.scrollTop));
  		return {'x':x,'y':y};
 	}
 	window.onload = function()
 	{
   	 getCoordInDocumentExample();
	}
}

function taobao()
{
	var k_open;
	var temp=confirm("是否要打开淘宝主页？");
	if(temp) 
    {   
        k_open=prompt("请输入你要打开的网址：","https://www.taobao.com/");
       	window.open(k_open,'_blank','width=400,height=500,menubar=no,toolbar=no')
   	}
}