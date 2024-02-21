<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;
  require 'PHPMailer/src/Exception.php';
  require 'PHPMailer/src/PHPMailer.php';
  require 'PHPMailer/src/SMTP.php';

  $para = "heimdallr20@gmail.com";
  $nombre = $_POST['nombre'];
  $email = $_POST['email'];
  $telefono = $_POST['telefono'];
  $service = $_POST['service'];
  $mensaje = $_POST['mensaje'];

  // Crea una instancia de PHPMailer
  $mail = new PHPMailer();

  // Configura el servidor SMTP de Gmail
  $mail->isSMTP();
  $mail->Host = 'smtp.gmail.com';
  $mail->SMTPAuth = true;
  $mail->Username = 'dbastidas00@gmail.com';
  $mail->Password = 'De6393581.';
  $mail->SMTPSecure = 'tls';
  $mail->Port = 587;

  // Configura el mensaje
  $mail->setFrom($email, $nombre);
  $mail->addAddress($para);
  $mail->Subject = "Mensaje enviado desde www.integratic.com.co por $nombre";
  $mail->Body = "Nombre: $nombre\nCorreo electrónico: $email\n Telefono: $telefono\n Tipo de Servicio: $service \nMensaje:\n$mensaje";

  // Envía el mensaje y verifica si hay errores
  if(!$mail->send()) {
      echo 'Error al enviar el mensaje: ' . $mail->ErrorInfo;
  } else {
      echo 'Mensaje enviado correctamente';
  }

  // Redirige al usuario a una página de confirmación
  header("Location: confirmacion.html");
  exit;
?>