<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire en les sécurisant
    $nom = htmlspecialchars($_POST['nom']);
    $email = htmlspecialchars($_POST['email']);
    $telephone = htmlspecialchars($_POST['telephone']);
    $typeProjet = htmlspecialchars($_POST['type-projet']);
    $details = htmlspecialchars($_POST['details']);
    $budget = htmlspecialchars($_POST['budget']);

    // Adresse e-mail où les informations seront envoyées
    $to = "ton-email@exemple.com"; // Remplace avec ton adresse e-mail
    $subject = "Nouvelle demande de devis - OMH Peinture";

    // Contenu du message
    $message = "Vous avez reçu une nouvelle demande de devis :\n\n";
    $message .= "Nom complet : $nom\n";
    $message .= "Adresse email : $email\n";
    $message .= "Téléphone : $telephone\n";
    $message .= "Type de projet : $typeProjet\n";
    $message .= "Détails du projet :\n$details\n";
    $message .= "Budget estimé : $budget €\n";

    // Entêtes de l'email
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Envoi de l'e-mail
    if (mail($to, $subject, $message, $headers)) {
        // Rediriger vers une page de confirmation
        header("Location: merci.html");
        exit;
    } else {
        echo "Erreur : Impossible d'envoyer votre demande.";
    }
} else {
    echo "Méthode non autorisée.";
}
?>
