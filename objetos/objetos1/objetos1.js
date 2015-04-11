var cabecera = function( ) {
    var self=this;
    var titulo="";
    var contexto="";
    self.establecerTitulo = function (ititulo) {
        titulo=ititulo;
    }
    self.establecerContexto = function(icontexto) {
        contexto=icontexto;
    }
    self.pintarCabecera = function() {
        $("#cabeceraTitulo legend",contexto).text(titulo);
    }
    // exponemos solamente lo publico
}; 
$(document).ready(function(){
    var cabecera1 = new cabecera();
    cabecera1.establecerTitulo("Noticias");
    cabecera1.establecerContexto("#menuNoticias");
    cabecera1.pintarCabecera();
    
    var cabecera2 = new cabecera();
    cabecera2.establecerTitulo("Tiempo");
    cabecera2.establecerContexto("#menuTiempo");
    cabecera2.pintarCabecera();
});