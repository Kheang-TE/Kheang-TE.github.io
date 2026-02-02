import { ReactNode } from 'react';
import Header from './Header/Header';
import BackToTop from '../components/ui/BackToTop/BackToTop';

interface MainLayoutProps {
  children: ReactNode;
}

/**
 * Layout principal de l'application
 * Encapsule le header, le contenu principal et le bouton back to top
 */
function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <BackToTop />
    </>
  );
}

export default MainLayout;
