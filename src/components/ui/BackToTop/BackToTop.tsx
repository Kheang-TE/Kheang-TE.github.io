import './BackToTop.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { useScrollPosition } from '../../../hooks';

function BackToTop() {
    const { isScrolled } = useScrollPosition(300);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div 
            className="backToTop" 
            style={{ 
                opacity: isScrolled ? '1' : '0', 
                zIndex: isScrolled ? '1000' : '-1' 
            }}
        >
            <button type="button" onClick={scrollToTop}>
                <i><FontAwesomeIcon icon={faAnglesUp} /></i>
                <span>Back to top</span>
            </button>
        </div>
    );
}

export default BackToTop;
