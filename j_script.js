function quita_acentos(){
	con_acentos="áéíóúüñ "
	sin_acentos="aeiouun_"
	salida="";
	for (i=0;i<=cor.length-1;i++){
		letra=cor.charAt(i);
		pos=con_acentos.indexOf(letra);
		if (pos>=0) letra=sin_acentos.charAt(pos);
		salida=salida+letra;
	}
	return(salida);
}

function ejecutar(){
	nom=document.f_correo.nom.value;
	app=document.f_correo.app.value;
	apm=document.f_correo.apm.value;
	fec=document.f_correo.fec.value;
	nom=nom.toLowerCase();
	app=app.toLowerCase();
	apm=apm.toLowerCase();
	anio=fec.substr(2,2);
	mes=fec.substr(5,2);
	dia=fec.substr(8,2);

	if (nom.length!=0){
		if (app.length!=0){
			if (apm.length!=0){
				if (fec.length!=0){
					cor=nom.charAt(0)+app+apm.charAt(0)+"@empresa.com.mx";
					cont=dia+mes+anio;
					corr=quita_acentos(cor);
					document.f_correo.correo.value=corr;
					document.f_correo.contra.value=cont;
				}
				else{
				alert("Necesita indicar su fecha de nacimiento")
				document.f_correo.fec.style.background="red";
				}
			}
			else{
			alert("Necesita indicar su apellido materno")
			document.f_correo.apm.style.background="red";
			}
		}
		else{
		alert("Necesita indicar su apellido paterno")
		document.f_correo.app.style.background="red";
		}
	}
	else{
		alert("Necesita indicar su nombre")
		document.f_correo.nom.style.background="red";
	}
}

function campo1(){
	document.f_correo.nom.style.background="blue";
}

function campo2(){
	document.f_correo.app.style.background="blue";
}

function campo3(){
	document.f_correo.apm.style.background="blue";
}

function campo4(){
	document.f_correo.fec.style.background="blue";
}

function campos1234(){
	document.f_correo.nom.style.background="blue";
	document.f_correo.app.style.background="blue";
	document.f_correo.apm.style.background="blue";
	document.f_correo.fec.style.background="blue";
}