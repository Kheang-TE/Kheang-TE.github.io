import './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
const contactItems = [
    {
        "icon": <i><FontAwesomeIcon icon={faAt} /></i>,
        "name": "kheang.te@live.fr",
        "url": "kheang.te@live.fr"
    },
    {
        "icon": <i><FontAwesomeIcon icon={faLinkedin} /></i>,
        "name": "LinkedIn",
        "url": "linkedin.com/in/kheang-te"
    },
    {
        "icon": <i><FontAwesomeIcon icon={faGithub} /></i>,
        "name": "GitHub",
        "url": "github.com/kheangte"

    }
];

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
    return (
        <section id="contact" className="backgroundColor">
            <div className="container">
                <div className="title-container">
                    <h1 className="title-content">Me contacter</h1>
                </div>
                <div className="container-content">
                    <div className="contact-form">
                        <form>
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
                                <button type="submit">Envoyer</button>
                            </div>
                        </form>
                    </div>
                    <div className="contact-content">
                        <span className="triangle_corner triangle_corner-tl"></span>
                        <p>
                            Prenez contact avec moi pour discuter de votre projet, de vos attentes ou même échanger des idées. Je suis ouvert à de nombreuses formes de collaboration.
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