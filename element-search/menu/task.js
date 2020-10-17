let menu = document.getElementsByClassName("menu__link");
let menuLink = Array.from(menu);
for (let i = 0; i < menuLink.length; i++){
    let parentMenuLink = menuLink[i];
    parentMenuLink.onclick = function() {
        if (parentMenuLink.nextElementSibling.classList.contains('menu_sub')) {
            parentMenuLink.nextElementSibling.classList.toggle('menu_active');
            return false;
		}
	}
}

	// 			if (parentMenuLink.nextElementSibling.classList.contains('menu_active')) {
	// 				parentMenuLink.nextElementSibling.classList.remove('menu_active');
	// 				return false;


	// 	}
		
	// 				if (parentMenuLink.nextElementSibling.classList.contains('menu_sub'))
	// 					{parentMenuLink.nextElementSibling.classList.add('menu_active')
	// 					return false;
	// 	}

	// }







