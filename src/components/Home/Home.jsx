import { useState, useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import styles from './Home.module.css';

export default function Home() {
  const { navigate, toggleReduceMotion, reduceMotion } = useGame();
  const [phase, setPhase] = useState('dark'); // dark → title → subtitle → button
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setPhase('button');
      return;
    }
    const t1 = setTimeout(() => setPhase('title'), 800);
    const t2 = setTimeout(() => setPhase('subtitle'), 2400);
    const t3 = setTimeout(() => setPhase('button'), 4000);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, [reduceMotion]);

  return (
    <div className={styles.wrapper} role="main">
      {/* Background image with overlay */}
      <div className={styles.bg} aria-hidden="true">
        <img src="/teatro_1973.jpg" alt="" className={styles.bgImg} />
        <div className={styles.overlay} />
        <div className={styles.vignette} />
      </div>

      {/* Horizontal scan lines effect */}
      <div className={styles.scanLines} aria-hidden="true" />

      {/* Content */}
      <div className={styles.content}>
        {/* Year stamp */}
        <p className={`${styles.year} ${phase !== 'dark' ? styles.visible : ''}`}>
          SÃO PAULO — 1973
        </p>

        {/* Main title */}
        <h1 className={`${styles.mainTitle} ${phase !== 'dark' ? styles.visible : ''}`}>
          O MISTÉRIO<br />DE 1973
        </h1>

        {/* Subtitle */}
        <p className={`${styles.subtitle} ${['subtitle','button'].includes(phase) ? styles.visible : ''}`}>
          Uma investigação entre música, censura e silêncio.
        </p>

        {/* Divider */}
        <div className={`${styles.divLine} ${['subtitle','button'].includes(phase) ? styles.visible : ''}`} aria-hidden="true" />

        {/* Secos & Molhados reference */}
        <p className={`${styles.albumRef} ${phase === 'button' ? styles.visible : ''}`}>
          Inspirado no álbum <em>Secos & Molhados</em> (1973)<br />
          e no documentário <em>Primavera nos Dentes</em>
        </p>

        {/* CTA Button */}
        <button
          id="start-investigation"
          className={`${styles.startBtn} ${phase === 'button' ? styles.visible : ''}`}
          onClick={() => setShowPopup(true)}
          aria-label="Iniciar investigação: O Mistério de 1973"
        >
          [ INICIAR INVESTIGAÇÃO ]
        </button>

        {/* Skip / accessibility controls */}
        <div className={`${styles.controls} ${phase === 'button' ? styles.visible : ''}`}>
          <button
            className={styles.controlBtn}
            onClick={() => navigate('sobre')}
            aria-label="Sobre o projeto"
          >
            Sobre o Projeto
          </button>
          <span className={styles.controlDivider} aria-hidden="true">·</span>
          <button
            className={styles.controlBtn}
            onClick={() => navigate('creditos')}
            aria-label="Ver créditos"
          >
            Créditos
          </button>
          <span className={styles.controlDivider} aria-hidden="true">·</span>
          <button
            className={styles.controlBtn}
            onClick={toggleReduceMotion}
            aria-label={reduceMotion ? 'Ativar animações' : 'Reduzir animações'}
          >
            {reduceMotion ? '✦ Animações: desativadas' : '✦ Reduzir animações'}
          </button>
        </div>
      </div>

      {/* Skip animation if still loading */}
      {phase !== 'button' && !reduceMotion && (
        <button
          className={styles.skipBtn}
          onClick={() => setPhase('button')}
          aria-label="Pular animação de abertura"
        >
          PULAR
        </button>
      )}

      {/* Hint Popup Modal */}
      {showPopup && (
        <div className={styles.popupOverlay} onClick={() => setShowPopup(false)}>
          <div className={styles.popupBox} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <h2 className={styles.popupTitle}>Aviso Importante</h2>
            <p className={styles.popupText}>
              Ao longo da investigação, você encontrará referências musicais destacadas. 
              <strong> As músicas servirão de pistas fundamentais para ajudar você a resolver o mistério.</strong> Preste atenção nelas.
            </p>
            <button
              className={styles.popupBtn}
              onClick={() => navigate('intro')}
              autoFocus
            >
              [ ENTENDI ]
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
