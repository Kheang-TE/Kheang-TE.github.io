import { useState, useEffect, useCallback } from 'react';
import type { SectionPosition } from '../types';

interface UseScrollPositionReturn {
  scrollY: number;
  activeSection: string;
  isScrolled: boolean;
}

/**
 * Hook personnalisé pour gérer la position du scroll
 * et détecter la section actuellement visible
 */
export function useScrollPosition(threshold: number = 300): UseScrollPositionReturn {
  const [scrollY, setScrollY] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<string>('#home');

  const getSectionsPositions = useCallback((): SectionPosition[] => {
    const sections = document.querySelectorAll('section');
    return Array.from(sections).map(section => ({
      id: section.id,
      top: section.getBoundingClientRect().top
    }));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Détection de la section active
      const sectionsPositions = getSectionsPositions();
      sectionsPositions.forEach(section => {
        if (section.top <= threshold && section.top >= -threshold) {
          const newActiveSection = `#${section.id}`;
          setActiveSection(prev => prev !== newActiveSection ? newActiveSection : prev);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup pour éviter les memory leaks
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold, getSectionsPositions]);

  return {
    scrollY,
    activeSection,
    isScrolled: scrollY > threshold
  };
}

export default useScrollPosition;
