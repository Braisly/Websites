//Estes efectos de jquery se cargar�a cuando cargue la p�gina
$(document).ready(function(){//Cargamos los elementos/nodos o el objeto que sea, para darle un efecto con la libreria jquery
    $("body").fadeIn(2500);//Que aparezca lo que est� oculto con el efecto fade
	$(".caixa_global").fadeIn(3000); //Lo mismo que en el caso anterior pero para una clase diferente
	$(".tapa_caixa").fadeIn(3000);//Igual que el anterior
	$(".caixa_home_bot").fadeIn(3000);
	$(".slideshow").cycle({ // La clase slideshow le pasamos un plugin de jquery para hacer un slideshow
fx: 'scrollUp' // Tipo de transici�n a elegir para el slideshow: fade, scrollUp, shuffle, etc�
});

	
});




