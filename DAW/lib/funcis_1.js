/*Declaramos las funciones javascript*/
function onoverbut(elemento)/*Le pasamos elemento(sería la clase o id dada por this), función OnMouseOver, solo funcionará cuando mantegamos el ratón*/
{
elemento.style.color= "silver";
elemento.style.fontSize= "25px";/*Style método DOM para acceder al estilo, y así lo cambiamos */
}

function onoutbut(elemento)/*Le pasamos elemento(sería la clase o id dada por this), funcion OnMouseOut, funcionará cuando no estea el ratón encima*/
{
elemento.style.color='#FFFFFF';/*Style método DOM para acceder al css de la clase que le pasamos*/
elemento.style.fontSize='18px';
}


function onoversubli(elemento)/*Elemento tiene la clase a modificar*/
{
elemento.style.textDecoration= 'underline'; /*Sería como el efecto anterior, solo que con esto conseguimos subrayado*/
elemento.style.cursor='pointer';/*Con este efecto el el cursor cambia a una mano*/
}

function onoutsubli(elemento)/*Elemento contiene la clase a modificar*/
{
elemento.style.textDecoration= 'none';/*Devolvemos el aspecto*/
}


function cargar()/*Esta función no necesita recibir ningún parámetro, puesto que va a crear de 0 un archivo*/
{/*Inicializamos con window.open y creamos una ventana con los parámetros a pasar*/
Ventana = window.open("","Ventana JavaScript","toolbar=no, location=no, status=no, top=50px, left=50px, width=500px, height=300px");/*Con el write escribimos como si estuviésemos en el bloc de notas*/
Ventana.document.write('<html><head><title>Ventana de Ayuda - BLY Websites</title></head>');/*Lo que vamos a hacer es un html, introduciendo el código aquí en un archivo javascript, sin tener que cargar una página*/
Ventana.document.write('<body style="background: #33B29D;">');/*Colocamos el color del fondo*/
Ventana.document.write('<h1 style="text-align:center;">Secci&oacuten de Ayuda</h1>\n');
Ventana.document.write('<div style="text-align:justify;"><p>En esta pagina web, encontraras todo lo que necesita acerca de desarrollo de software y producciones graficas. Consta de 5 secciones: Inicio, explicamos brevemente la utilidad de la pagina y a que nos dedicamos. Dise&ntilde;o, incluimos el apartado web y grafico. SEO, seccion en la que damos una detallada informacion sobre SEO y nuestras politicas. Portafolio, mostramos los ultimos trabajos. Contacto, lugar donde te podras poner en contacto con nosotros. Todas las paginas cuentan con un submenu de acceso rapido, donde accedera directamente al contenido buscado.</p><br>\n');
Ventana.document.write('</div></body></html>');
Ventana.document.close();
}

function registrarse()
{
Ventana = window.open("./registrarse.html","Ventana JavaScript","toolbar=no, location=no, status=no, top=50px, left=50px, width=675px, height=450px");

}

function encuesta()
{

Ventana = window.open("./encuesta.html","Ventana JavaScript","toolbar=no, location=no, status=no, top=50px, left=50px, width=675px, height=525px");


}


function vacia(string)
{
if(string.length>0)//Comprobamos si hay algo
   return false; //Si está con algo devolvemos false
else 
   return true;//Si está vacía devolvemos true
}

function texto(elemento, msg)//Comprobamos que la cadena introducida sea texto
{
  var alpha = /^[a-zA-ZáéíóúñÁÉÍÓÚÑ\s]+$/; //Expresión regular para letras,etc.
 // alert(msg);
  if(elemento.match(alpha))//Validamos que se cumpla la expresión
      return true;
  else{
      alert(msg);//Sacamos mensaje en caso de que no se cumpla
	  return false;
	  }
}

function numero(elemento,msg)
{
  var alpha= /^[0-9]{1,4}$/;//Expresion regular para números de ata 4 digitos
  if(elemento.match(alpha))//Comprobamos de que se cumpla
	  return true;
  else{
      alert(msg);//Sacamos un mensaje en caso de que no se cumpla
	  return false;
   }
}


function funci_cp(elemento,msg)//Comprobacion Codigo Postal
{
  var alpha= /^[0-9]{5}$/;//Expresion regular para números de 5 digitos
  if(elemento.match(alpha))//Comprobamos de que se cumpla
	  return true;
  else{
      alert(msg);//Sacamos un mensaje en caso de que no se cumpla
	  return false;
   }
}


function funci_telefono(elemento,msg)//Comprobacion Numero de telefono
{
  var alpha= /^[0-9]{9}$/;//Expresion regular para números de 9 digitos
  if(elemento.match(alpha))//Comprobamos de que se cumpla
	  return true;
  else{
      alert(msg);//Sacamos un mensaje en caso de que no se cumpla
	  return false;
   }
}
function funci_email(elemento,msg)//Comprobacion Codigo Postal
{
  var alpha= /^\w{1,}@\w{1,}.[a-z]{2,4}$/;//Expresion regular para email
  if(elemento.match(alpha))//Comprobamos de que se cumpla
	  return true;
  else{
      alert(msg);//Sacamos un mensaje en caso de que no se cumpla
	  return false;
   }
}

function igual(elemento1, elemento2, msg)
{
 if(elemento1==elemento2)
  return true;
  else{
		 alert(msg);
		 return false;
	}
}



function validar()
{ 
var nombre = document.getElementById('fnombre').value; //Cargamos valor da variable
var apellidos = document.getElementById('fapel').value; //Cargamos valor da variable
var direccion = document.getElementById('fdirec').value; //Cargamos valor da variable
var num_casa = document.getElementById('fnum').value; //Cargamos valor da variable
var poblacion = document.getElementById('fpobla').value; //Cargamos valor da variable
var cod_postal = document.getElementById('fcp').value; //Cargamos valor da variable
var telefono = document.getElementById('ftelef').value; //Cargamos valor da variable
var email = document.getElementById('fmail').value; //Cargamos valor da variable
var user = document.getElementById('fuser').value; //Cargamos valor da variable
var pass_1 = document.getElementById('fpass1').value; //Cargamos valor da variable
var pass_2 = document.getElementById('fpass2').value; //Cargamos valor da variable


if((vacia(nombre))||(vacia(apellidos))||(vacia(direccion))||(vacia(num_casa))||(vacia(poblacion))||(vacia(cod_postal))||(vacia(telefono))||(vacia(email))||(vacia(user))||(vacia(pass_1))||(vacia(pass_2)))
{//Comprobamos con la función vacia, si todos los campos están llenos
  alert('Hay campos sin rellenar');
  return false;//Si no se cumple no enviamos
}
else
{//Validamos si los campos son los correctos
  if(texto(nombre, "Nombre incorrecto!"))
    if(texto(apellidos,"Apellidos incorrectos!"))
		if(texto(direccion,"Direccion incorrecta!"))
			if(numero(num_casa,"Numero incorrecto!"))
				if(texto(poblacion,"Poblacion incorrecta!"))
					if(funci_cp(cod_postal,"Codigo Postal incorrecto!"))
						if(funci_telefono(telefono,"Telefono incorrecto!"))
							if(funci_email(email,"Email incorrecto!"))
								if(texto(user,"Usuario incorrecto!"))
									if(igual(pass_1,pass_2,"Contraseñas erroneas!"))
									return true;//Si se cumplen enviamos el formulario
	//Si no se cumple no enviamos
	return false;
}

}


function validarencuesta()
{
 var nombre = document.getElementById('fnombre').value;//Cargamos la variable nombre
 var email = document.getElementById('fmail').value;//Cargamos la variable email
 if((vacia(nombre))||(vacia(email)))//Comprobamos que no esté vacía
{
  alert('Hay campos sin rellenar');
  return false;//Si no se cumple no enviamos
}
else
{//Comprobamos que los campos están bien escritos
 if(texto(nombre, "Nombre incorrecto!"))
 	if(funci_email(email,"Email incorrecto!"))
		return true;//Si se cumplen enviamos la encuesta
//Si no se cumple no enviamos
return false;
}

}