import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import "./contact.scss";
import img from "../../asset/envoyé.png";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        sujet: "",
        message: "",
    });

    const [messageStatus, setMessageStatus] = useState({ text: "", type: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await emailjs.send(
                "service_evmh05b",  // Remplace avec ton Service ID
                "template_8bsa3hu", // Remplace avec ton Template ID
                {
                    name: formData.name,
                    email: formData.email,
                    sujet: formData.sujet,
                    message: formData.message,
                },
                "Zl8XCFsIOYRw5ZUlo" // Remplace avec ta Public Key
            );

            // Affichage du message de succès
            setMessageStatus({ text: "Email envoyé !", type: "success" });

            // Réinitialisation du formulaire après l'envoi
            setFormData({ name: "", email: "", sujet: "", message: "" });

        } catch (error) {
            console.error("Erreur:", error);
            setMessageStatus({ text: "Une erreur s'est produite lors de l'envoi.", type: "error" });
        }

        // Faire disparaître le message après 5 secondes
        setTimeout(() => setMessageStatus({ text: "", type: "" }), 5000);
    };

    return (
        <div id="contact">
            <h1>Contact <hr /></h1>
            <h2 className="text-contact">
                Envie d'en savoir plus sur mon profil ou de collaborer sur un projet ? Contactez-moi sans hésiter en remplissant ce formulaire ci-dessous, je vous répondrai dès que possible.
            </h2>
            <form className="form-contact" onSubmit={handleSubmit}>
                <div className="name">
                    <input type="text" id="nom" name="name" placeholder="NOM Prénom" value={formData.name} onChange={handleChange} required />
                    <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                </div>
                <input type="text" id="sujet" name="sujet" placeholder="Objet" value={formData.sujet} onChange={handleChange} required />
                <textarea id="message" name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />

                {/* Affichage du message de succès/erreur */}
                {messageStatus.text && <p className={`message-status ${messageStatus.type}`}>{messageStatus.text}</p>}

                <button type="submit" className="btn-envoyer">
                    <img src={img} alt="envoyer" className="img-btn" />
                </button>
            </form>
        </div>
    );
}

export default Contact;
