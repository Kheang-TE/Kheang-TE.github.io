import { useCallback } from 'react';

interface UseScrollToSectionReturn {
  scrollToSection: (sectionId: string) => void;
  handleLinkClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

/**
 * Hook personnalisé pour gérer le scroll smooth vers une section
 */
export function useScrollToSection(): UseScrollToSectionReturn {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.querySelector(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      scrollToSection(href);
    }
  }, [scrollToSection]);

  return { scrollToSection, handleLinkClick };
}

export default useScrollToSection;
