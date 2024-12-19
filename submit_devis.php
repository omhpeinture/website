<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $telephone = $_POST['telephone'];
    $description = $_POST['description'];
    $surface = $_POST['surface'];
    $type_peinture = $_POST['type_peinture'];

    // Valider les données, si nécessaire

    // Exemple d'envoi d'email
    $to = "votreemail@exemple.com";
    $subject = "Demande de devis pour peinture";
    $message = "Nom: $nom\nEmail: $email\nTéléphone: $telephone\nDescription: $description\nSurface: $surface m²\nType de peinture: $type_peinture";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Merci! Votre demande de devis a été envoyée.";
    } else {
        echo "Une erreur est survenue, veuillez réessayer.";
    }
}
?>
