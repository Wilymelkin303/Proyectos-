<?php
	
	 $destino= "josue1323.lm@gmail.com";
	 //Esto es al correo que se enviarÃ¡ el mensaje
	
     $introducir_nombre = $_POST['introducir_nombre'];
     $introducir_email = $_POST['introducir_email'];
     $introducir_telefono = $_POST['introducir_telefono'];
     $introducir_mensaje = $_POST['introducir_mensaje'];
     $introducir_asunto = $_POST['introducir_asunto'];
   
	
	 $header= "Enviado desde formulario de contacto en xampp";
	 $mensajeCompleto= "\n". "nombre:".   $introducir_nombre. 
                       "\n". "email:".   $introducir_email. 
                       "\n". "telefono:".   $introducir_telefono. 
                       "\n". "asunto:".   $introducir_asunto. 
                       "\n". "mensaje:".   $introducir_mensaje;
	 mail( $destino,   $introducir_asunto,  $mensajeCompleto,  $header );
	 header( "location: index.html" );
     ?>
     