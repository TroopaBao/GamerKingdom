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
	