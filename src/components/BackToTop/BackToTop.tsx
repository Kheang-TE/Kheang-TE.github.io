import './BackToTop.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function BackToTop(){

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if(scrolled > 300){
            setVisible(true);
        } else{
            setVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    window.addEventListener('scroll', toggleVisible);

    return (
        <div className="backToTop" style={{opacity: visible? '1' : '0', zIndex: visible ? '1000' : '-1' }}>
            <button type="button" onClick={scrollToTop}>
                <i><FontAwesomeIcon icon={faAnglesUp} /></i>
                <span>Back to top</span>
            </button>
        </div>
    );
}

export default BackToTop;