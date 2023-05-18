function leerXML(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        callback(xmlhttp.responseXML);
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }
leerXML("http://home/alumno/Escritorio/final%20proyect/proyecto.xml", function(xml) {
    // Aquí puedes acceder y manipular el objeto `xml` que contiene la estructura del XML
    // Por ejemplo, puedes obtener elementos por su etiqueta usando los métodos proporcionados por la API XML
    var elementos = xml.getElementsByTagName("elemento");
  
    // Itera sobre los elementos y muestra su contenido
    for (var i = 0; i < elementos.length; i++) {
      var elemento = elementos[i];
      var texto = elemento.textContent;
      console.log(texto);
    }
  });


