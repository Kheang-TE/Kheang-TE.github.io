import './Contact.scss';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import contactItems from '../../constants/contactItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const schema = z.object({
    firstname: z.string({ required_error: 'Un prénom est requis.' }).min(2, 'Le prénom doit contenir au moins 2 caractères.'),
    lastname: z.string({ required_error: 'Un nom est requis.' }).min(2, 'Le nom doit contenir au moins 2 caractères.'),
    email: z.string({ required_error: 'Une adresse email valide est requis.' }).email('Adresse email invalide.').regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Adresse email invalide.'),
    phone: z.string({ required_error: 'Un numéro de téléphone est requis.' }).length(10, 'Numéro de téléphone invalide.').regex(/^[0-9]{10}$/, 'Numéro de téléphone invalide.'),
    subject: z.string({ required_error: 'Un sujet est requis.' }).min(3, 'Le sujet doit contenir au moins 5 caractères.'),
    message: z.string({ required_error: 'Un message est requis.' }).min(10, 'Le message doit contenir au moins 10 caractères.')
});

type FormFields = z.infer<typeof schema>;

function ContactLinks() {
    return (
        <>
            {contactItems.map((item, index) => (
                <div className="contact-item" key={index}>
                    <a href={item.url}>{item.icon}{item.name}</a>
                </div>
            ))}
        </>
    );
}

function Contact() {
    const [checked, setChecked] = useState(false);
    const form = useRef<HTMLFormElement>(null);

    const toggleCheck = () => {
        setChecked(!checked);
    };

    const sendMail = async (datas: FormFields) => {
        const serviceId = "service_w7oqadc";
        const templateId = "template_8cv057p";
        const emailKey = "kF7V5US62v9tcw1Cg";
        const { firstname, lastname, email, phone, subject, message } = datas;
        
        emailjs
            .send(serviceId, templateId, { firstname, lastname, email, phone, subject, message }, emailKey)
            .then((result) => {
                console.log(result.text);
                alert("Votre message a bien été envoyé. Je vous recontacte dès que possible.");
                form.current?.reset();
            });
    };

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting }
    } = useForm<FormFields>({
        resolver: zodResolver(schema)
    });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            sendMail(data);
        } catch (error) {
            setError("root", {
                message: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer plus tard."
            });
        }
    };

    return (
        <section id="contact" className="backgroundColor">
            <div className="container">
                <div className="title-container">
                    <h1 className="title-content">Me contacter</h1>
                </div>
                <div className="container-content">
                    <div className="contact-form">
                        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                            <div className="input-container">
                                <label>
                                    <input {...register('firstname')} type="text" className="control-form" name="firstname" placeholder="" />
                                    <span>Nom</span>
                                    {errors.firstname && (<div className="error">{errors.firstname.message}</div>)}
                                </label>
                                <label>
                                    <input {...register('lastname')} type="text" className="control-form" name="lastname" placeholder="" />
                                    <span>Prénom</span>
                                    {errors.lastname && (<div className="error">{errors.lastname.message}</div>)}
                                </label>
                            </div>
                            <div className="input-container">
                                <label>
                                    <input {...register('email')} type="email" className="control-form" name="email" placeholder="" />
                                    <span>Email</span>
                                    {errors.email && (<div className="error">{errors.email.message}</div>)}
                                </label>
                                <label>
                                    <input {...register('phone')} type="tel" className="control-form" name="phone" placeholder="" />
                                    <span>Téléphone</span>
                                    {errors.phone && (<div className="error">{errors.phone.message}</div>)}
                                </label>
                            </div>
                            <div className="input-container">
                                <label>
                                    <input {...register('subject')} type="text" className="control-form" name="subject" placeholder="" />
                                    <span>Sujet</span>
                                    {errors.subject && (<div className="error">{errors.subject.message}</div>)}
                                </label>
                            </div>
                            <div className="input-container">
                                <label>
                                    <textarea {...register('message')} name="message" placeholder=""></textarea>
                                    <span>Message</span>
                                    {errors.message && (<div className="error">{errors.message.message}</div>)}
                                </label>
                            </div>
                            <div className="input-container">
                                <label>
                                    <input type="checkbox" name="" checked={checked} onChange={toggleCheck} />
                                    En cochant cette case, j'accepte que les informations renseignées soient utilisées dans le cadre d'une réponse ou d'être recontacté.
                                </label>
                            </div>
                            <div className="input-container">
                                <button type="submit" disabled={!checked}>
                                    {isSubmitting ? "En cours d'envoi ..." : "Envoyer"}
                                </button>
                            </div>
                            {errors.root && (<div className="error">{errors.root.message}</div>)}
                        </form>
                    </div>
                    <div className="contact-content">
                        <span className="triangle_corner triangle_corner-tl"></span>
                        <p>
                            N'hésitez pas à prendre contact pour discuter de votre projet, de vos attentes ou même échanger des idées. Je suis ouvert à de nombreuses formes de collaboration.
                        </p>
                        <hr />
                        <div className="contact-item">
                            <a href="./CV_Kheang_Developpeur_Fullstack_-_DevOps.pdf" target="_blank" rel="noreferrer" title="CV">
                                <i><FontAwesomeIcon icon={faFilePdf} /></i>CV
                            </a>
                        </div>
                        <ContactLinks />
                        <span className="triangle_corner triangle_corner-br"></span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
