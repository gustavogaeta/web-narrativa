import { useGame } from '../../context/GameContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { navigate, currentScene, restart } = useGame();

  const isHome = currentScene === 'home';

  return (
    <nav className={styles.nav} aria-label="Navegação principal">
      <div className={styles.inner}>
        {/* Logo / title */}
        <button
          className={styles.logo}
          onClick={() => navigate('home')}
          aria-label="Voltar à tela inicial"
        >
          O MISTÉRIO DE 1973
        </button>

        {/* Links — hidden on home screen */}
        {!isHome && (
          <ul className={styles.links} role="list">
            <li>
              <button className={styles.link} onClick={() => navigate('intro')}>
                Investigação
              </button>
            </li>
            <li>
              <button className={styles.link} onClick={() => navigate('sobre')}>
                Sobre
              </button>
            </li>
            <li>
              <button className={styles.link} onClick={() => navigate('creditos')}>
                Créditos
              </button>
            </li>
            <li>
              <button
                className={`${styles.link} ${styles.restart}`}
                onClick={restart}
                aria-label="Recomeçar investigação do início"
              >
                ↺ Recomeçar
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
