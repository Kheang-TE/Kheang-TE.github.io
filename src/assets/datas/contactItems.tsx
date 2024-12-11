import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
const contactItems = [
    {
        "icon": <i><FontAwesomeIcon icon={faLinkedin} /></i>,
        "name": "LinkedIn",
        "url": "https://linkedin.com/in/kheang-te"
    },
    {
        "icon": <i><FontAwesomeIcon icon={faGithub} /></i>,
        "name": "GitHub",
        "url": "https://github.com/kheangte"

    },
    {
        "icon": <i><FontAwesomeIcon icon={faAt} /></i>,
        "name": "kheang.te@live.fr",
        "url": "mailto:kheang.te@live.fr"
    }
];

export default contactItems;