import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import type { ContactItem } from '../types';

const contactItems: ContactItem[] = [
    {
        icon: <i><FontAwesomeIcon icon={faLinkedin} /></i>,
        name: "LinkedIn",
        url: "https://linkedin.com/in/kheang-te"
    },
    {
        icon: <i><FontAwesomeIcon icon={faGithub} /></i>,
        name: "GitHub",
        url: "https://github.com/kheangte"
    },
    {
        icon: <i><FontAwesomeIcon icon={faGitlab} /></i>,
        name: "GitLab",
        url: "https://gitlab.com/dev.kheang.te"
    },
    {
        icon: <i><FontAwesomeIcon icon={faAt} /></i>,
        name: "kheang.te@live.fr",
        url: "mailto:kheang.te@live.fr"
    }
];

export default contactItems;
