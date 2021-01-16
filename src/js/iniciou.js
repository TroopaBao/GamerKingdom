

function Menu()
{
	var menu=document.getElementById('menu');
	var altura=menu.offsetTop;
	window.addEventListener('scroll' , function () {
		if(window.pageYOffset > altura+200)
		{
			menu.classList.add('fixed');
		}
		else
		{
			menu.classList.remove('fixed');
		}
	})
}