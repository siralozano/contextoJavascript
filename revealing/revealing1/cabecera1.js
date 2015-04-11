var cabecera = ( function( ) {
    var titulo="";
    var contexto="";
    function establecerTitulo(ititulo) {
        titulo=ititulo;
    }
    function establecerContexto(icontexto) {
        contexto=icontexto;
    }
    function pintarCabecera() {
        $("#cabeceraTitulo legend",contexto).text(titulo);
    }
    // exponemos solamente lo publico
    return {
        establecerTitulo : establecerTitulo,
        establecerContexto:establecerContexto,
        pintarCabecera:pintarCabecera
    };
} )(); 
$(document).ready(function(){
    cabecera.establecerTitulo("Noticias");
    cabecera.establecerContexto("#menuNoticias");
    cabecera.pintarCabecera();
});
