function valores(){
	var matricula = document.getElementById("matricula").value;
	var observa = document.getElementById("observacion").value;


	var listas = document.getElementById("marca");
	// Obtener el valor de la opción seleccionada
	var valorSeleccionados = listas.options[listas.selectedIndex].value;
	// Obtener el texto que muestra la opción seleccionada
	var valorSeleccionados = listas.options[listas.selectedIndex].text;

	var lista = document.getElementById("modelo");
	// Obtener el valor de la opción seleccionada
	var valorSeleccionado = lista.options[lista.selectedIndex].value;
	// Obtener el texto que muestra la opción seleccionada
	var valorSeleccionado = lista.options[lista.selectedIndex].text;

	var radios = document.getElementsByName("Registro");

	var chck = document.getElementById("pintura");
	var chck1 = document.getElementById("luces");
	var chck2 = document.getElementById("espejo");
	var chck3 = document.getElementById("cristal");
	
 


	/*Inicio de los alert */
	alert("Matrícula: "+ matricula);
	alert("Marca: " +  valorSeleccionados);
	alert("Modelo: " +  valorSeleccionado);
	for(var i=0; i<radios.length; i++) {
		if (radios[0].checked==true) {
  		alert(" Registro: Entrada");
  		}else
  		alert(" Registro: Salida");
	}
	alert("Observación: "+ observa);

	alert(" Elemento: " + chck.value + "\n Seleccionado: " + chck.checked);
	alert(" Elemento: " + chck1.value + "\n Seleccionado: " + chck1.checked);
	alert(" Elemento: " + chck2.value + "\n Seleccionado: " + chck2.checked);
	alert(" Elemento: " + chck3.value + "\n Seleccionado: " + chck3.checked);

}
