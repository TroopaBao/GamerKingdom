var arr=new Array('ACU.jpg', 'gears.png	', 'play2x2.png', 'sonic.jpg', 'street.jpg', 'switch.png', 'un4.jpg', 'xbox.png', 'pokemon.jpg');
var arr2=new Array('ACU2.jpg', 'gears2.jpg', 'play4.png', 'sonic2.jpg', 'street2.jpg', 'switchp.jpg', 'un4p.jpg', 'xboxjuan.jpg', 'pokemon2.png');


function Menu() 
{
	var menu=document.getElementById('menu');
	var altura=menu.offsetTop;
	window.addEventListener('scroll' , function () {
		if(window.pageYOffset > altura)
		{
			menu.classList.add('fi');
		}
		else
		{
			menu.classList.remove('fi');
		}
	})
}


function CambioImagenes(pos)
{
	document.getElementsByTagName('img')[pos+1].setAttribute("src", "img/lo+nuevo/"+arr2[pos]);
}

function OriginalImagenes(pos)
{
	document.getElementsByTagName('img')[pos+1].setAttribute("src", "img/lo+nuevo/"+arr[pos]);	
}