import './Contact.scss';
import emailjs from '@emailjs/browser';
import { FormEvent, useRef, useState } from 'react';

import contactItems from '../../assets/datas/contactItems';

function contactLink(){
    return contactItems.map((item, index) => {
        return (
            <div className="contact-item" key={index}>
                <a href={item.url}>{item.icon}{item.name}</a>
            </div>
        );
    });
}

function Contact() {

    const [checked, setChecked] = useState(false);

    const toggleCheck = () => {
        setChecked(!checked);
    }

    const form = useRef<HTMLFormElement>(null);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const serviceId = "service_w7oqadc"
        const templateId = "template_8cv057p"
        const emailKey = "kF7V5US62v9tcw1Cg"
        const formDatas = new FormData(form.current as HTMLFormElement);
        const { firstname, lastname, email, phone, subject, message } = Object.fromEntries(formDatas.entries());
        emailjs
            .send(serviceId, templateId, { firstname, lastname, email, phone, subject, message }, emailKey)
            .then((result) => {
                console.log(result.text);
                alert("Votre message a bien été envoyé. Je vous recontacte dès que possible.");
                form.current?.reset();
            })
            .catch((error) => {
                console.error(error.text);
                alert("Une erreur est survenue lors de l'envoi du message. Veuillez réessayer plus tard.");
            });

    }

    return (
        <section id="contact" className="backgroundColor">
            <div className="container">
                <div className="title-container">
                    <h1 className="title-content">Me contacter</h1>
                </div>
                <div className="container-content">
                    <div className="contact-form">
                        <form ref={form} onSubmit={handleSubmit}>
                            <div className="input-container">
                                <label>
                                    <input type="text" className="control-form" name="firstname" placeholder="" required />
                                    <span>Nom</span>
                                </label>
                                <label>
                                    <input type="text" className="control-form" name="lastname" placeholder="" required />
                                    <span>Prénom</span>
                                </label>
                            </div>
                            <div className="input-container">
                                <label>
                                    <input type="email" className="control-form"  name="email" placeholder="" required />
                                    <span>Email</span>
                                </label>
                                <label>
                                    <input type="tel" className="control-form" name="phone" placeholder="" required />
                                    <span>Téléphone</span>
                                </label>
                            </div>
                            <div className="input-container">
                                <label>
                                    <input type="text" className="control-form"  name="subject" placeholder="" required />
                                    <span>Sujet</span>
                                </label>
                            </div>
                            <div className="input-container">
                                <label>
                                    <textarea name="message" placeholder="" required></textarea>
                                    <span>Message</span>
                                </label>
                            </div>
                            <div className="input-container">
                                <label>
                                    <input type="checkbox" name="" checked={checked} onChange={toggleCheck}/>
                                    En cochant cette case, j'accepte que les informations renseignées soient utilisées dans le cadre d'une réponse ou d'être recontacté.
                                </label>
                            </div>
                            <div className="input-container">
                                <button type="submit" disabled={!checked}>Envoyer</button>
                            </div>
                        </form>
                    </div>
                    <div className="contact-content">
                        <span className="triangle_corner triangle_corner-tl"></span>
                        <p>
                            N'hésitez pas à prendre contact pour discuter de votre projet, de vos attentes ou même échanger des idées. Je suis ouvert à de nombreuses formes de collaboration.
                        </p>
                        <hr />
                        {contactLink()}
                        <span className="triangle_corner triangle_corner-br"></span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;