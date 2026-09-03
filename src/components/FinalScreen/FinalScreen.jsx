import { useState } from 'react';
import { STORY } from '../../data/story';
import { useGame } from '../../context/GameContext';
import MusicReference from '../MusicReference/MusicReference';
import styles from './FinalScreen.module.css';

const ENDING_CONFIG = {
  verdade: {
    color: '#4a7c59',
    colorLight: '#6aad7e',
    icon: '🔍',
    bgAccent: 'rgba(74, 124, 89, 0.08)',
  },
  armadilha: {
    color: '#8b1a1a',
    colorLight: '#b22222',
    icon: '⚠',
    bgAccent: 'rgba(139, 26, 26, 0.08)',
  },
  silencio: {
    color: '#4a6480',
    colorLight: '#6a8fad',
    icon: '📰',
    bgAccent: 'rgba(74, 100, 128, 0.08)',
  },
};

function ShareBlock({ endingLabel, endingTitle }) {
  const text = `Joguei "O Mistério de 1973" e alcancei: ${endingLabel} — ${endingTitle}. Uma web-narrativa investigativa sobre os Secos & Molhados, censura e 1973.`;
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className={styles.share}>
      <p className={styles.shareLabel}>COMPARTILHAR RESULTADO</p>
      <div className={styles.shareText}>{text}</div>
      <button className={styles.copyBtn} onClick={copy} aria-live="polite">
        {copied ? '✓ Copiado!' : '📋 Copiar texto'}
      </button>
    </div>
  );
}

export default function FinalScreen({ sceneId }) {
  const { navigate, restart, choiceHistory } = useGame();
  const scene = STORY[sceneId];
  const cfg = ENDING_CONFIG[scene.endingType] || ENDING_CONFIG.verdade;

  return (
    <div
      className={`${styles.wrapper} scene-enter`}
      style={{ '--ending-color': cfg.color, '--ending-bg': cfg.bgAccent }}
    >
      {/* ── Ending label ─────────────────────────────────────── */}
      <div className={styles.endingBadge} style={{ borderColor: cfg.color, color: cfg.colorLight }}>
        <span aria-hidden="true">{cfg.icon}</span>
        {scene.endingLabel}
      </div>

      <h1 className={styles.title}>{scene.title}</h1>

      <div className={styles.divider} style={{ background: cfg.color }} aria-hidden="true" />

      {/* ── Narrative text ───────────────────────────────────── */}
      <div className={styles.narrative}>
        {scene.text.map((paragraph, i) => {
          const isQuote = paragraph.startsWith('"') || paragraph.startsWith('\u201c');
          return isQuote ? (
            <blockquote key={i} className={styles.quote} style={{ borderLeftColor: cfg.color }}>
              {paragraph}
            </blockquote>
          ) : (
            <p key={i} className={styles.paragraph}>{paragraph}</p>
          );
        })}
      </div>

      {/* ── Epilogue ─────────────────────────────────────────── */}
      <div className={styles.epilogueBox} style={{ borderColor: cfg.color, background: cfg.bgAccent }}>
        <p className={styles.epilogue}>"{scene.epilogue}"</p>
      </div>

      {/* ── Musical reference ────────────────────────────────── */}
      {scene.musicRef && (
        <MusicReference
          title={scene.musicRef.title}
          theme={scene.musicRef.theme}
          note={scene.musicRef.note}
        />
      )}

      {/* ── Choices history ──────────────────────────────────── */}
      {choiceHistory.length > 0 && (
        <details className={styles.history}>
          <summary className={styles.historySummary}>Suas decisões nesta investigação</summary>
          <ol className={styles.historyList}>
            {choiceHistory.map((c, i) => (
              <li key={i} className={styles.historyItem}>
                <span className={styles.step}>{i + 1}.</span>
                {c.label}
              </li>
            ))}
          </ol>
        </details>
      )}

      {/* ── Share ────────────────────────────────────────────── */}
      <ShareBlock endingLabel={scene.endingLabel} endingTitle={scene.title} />

      {/* ── Actions ──────────────────────────────────────────── */}
      <div className={styles.actions}>
        <button className={styles.restartBtn} onClick={restart}>
          ↺ RECOMEÇAR INVESTIGAÇÃO
        </button>
        <button className={styles.aboutBtn} onClick={() => navigate('sobre')}>
          Sobre o Projeto
        </button>
        <button className={styles.aboutBtn} onClick={() => navigate('creditos')}>
          Créditos
        </button>
      </div>
    </div>
  );
}
