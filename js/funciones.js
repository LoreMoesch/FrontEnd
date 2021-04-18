var ancho_pantalla,alto_pantalla,alto_menu;

var acciones = {
	listo : function(){
		
    	jQuery("#lacarta .boton-amarillo").click(acciones.clickbtnamarillo);
		jQuery(".cabecera .menu a[href*='#']").click(acciones.irancla);
		jQuery("#lacarta .contenedor-cuadrado").click(acciones.obtenersrc);
		jQuery(".cerrarimagen").click(acciones.cerrarimagen);
	},
					
	
	obtenersrc:function()
	{

	},

	clickbtnamarillo : function(e){
		e.preventDefault();
		var src = jQuery(this).closest(".contenedor-cuadrado").find("img").attr("src");
		
		jQuery(".cuerpoimagen").find("img").attr("src",src);
		jQuery(".trama").fadeIn("slow",function(){
			jQuery(".cuerpoimagen").fadeIn("fast");
		});

	},

	cerrarimagen: function(e)
	{
		e.preventDefault();
		jQuery(".cuerpoimagen").fadeOut("slow",function(){
			jQuery(".cuerpoimagen").find("img").attr("src","");
			jQuery(".trama").fadeOut("fast");
		});		
	},

 };

jQuery(document).ready(acciones.listo);