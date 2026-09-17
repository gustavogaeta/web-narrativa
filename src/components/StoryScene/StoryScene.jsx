import { useEffect, useRef } from 'react';
import { STORY } from '../../data/story';
import { useGame } from '../../context/GameContext';
import ChoiceButton from '../ChoiceButton/ChoiceButton';
import CluePanel from '../CluePanel/CluePanel';
import MusicReference from '../MusicReference/MusicReference';
import ProgressBar from '../ProgressBar/ProgressBar';
import SpotifyPlayer from '../SpotifyPlayer/SpotifyPlayer';
import styles from './StoryScene.module.css';

/**
 * Main narrative scene renderer.
 * Handles text display, clue unlocking, musical references, and choices.
 */
export default function StoryScene({ sceneId }) {
  const { navigate, unlockClues, setEnding, choiceHistory } = useGame();
  const scene = STORY[sceneId];
  const topRef = useRef(null);

  // Scroll to top on scene change
  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [sceneId]);

  // Unlock clues when scene loads
  useEffect(() => {
    if (scene?.cluesUnlocked?.length) {
      unlockClues(scene.cluesUnlocked);
    }
  }, [sceneId, scene, unlockClues]);

  if (!scene) return null;

  const handleChoice = (choice) => {
    if (choice.finalType) setEnding(choice.finalType);
    navigate(choice.next, choice.label);
  };

  // Determine scene image
  const getSceneImage = () => {
    if (sceneId === 'fita') return '/cassette.jpg';
    if (sceneId === 'caixa' || sceneId === 'outra_pista') return '/helena.jpg';
    if (sceneId.includes('teatro')) return '/teatro_1973.jpg';
    return null;
  };

  const img = getSceneImage();

  return (
    <div className={`${styles.wrapper} scene-enter`} ref={topRef}>
      {/* ── Header strip ─────────────────────────────────────── */}
      <header className={styles.header}>
        <div className={styles.meta}>
          <span className={styles.location}>{scene.location}</span>
          {scene.date && <span className={styles.date}>{scene.date}</span>}
        </div>
        <h1 className={styles.title}>{scene.title}</h1>
        <div className={styles.dividerLine} aria-hidden="true" />
      </header>

      <div className={styles.layout}>
        {/* ── Main column ──────────────────────────────────────── */}
        <main className={styles.main}>
          {/* Scene image */}
          {img && (
            <figure className={styles.imageWrapper}>
              <img src={img} alt={`Cena: ${scene.title}`} className={styles.sceneImage} />
              {sceneId === 'caixa' && (
                <figcaption className={styles.imageCaption}>
                  Fotografia de Helena — verso: "Sangue Latino"
                </figcaption>
              )}
              {sceneId === 'fita' && (
                <figcaption className={styles.imageCaption}>
                  Fita cassete deixada por Helena na caixa
                </figcaption>
              )}
            </figure>
          )}

          {/* Narrative text */}
          <div className={styles.narrative}>
            {scene.text.map((paragraph, i) => {
              // Detect quote paragraphs
              const isQuote = paragraph.startsWith('"') || paragraph.startsWith('\u201c');
              return isQuote ? (
                <blockquote key={i} className={styles.quote}>
                  {paragraph}
                </blockquote>
              ) : (
                <p key={i} className={styles.paragraph}>{paragraph}</p>
              );
            })}
          </div>

          {/* Musical reference */}
          {scene.musicRef && (
            <MusicReference
              title={scene.musicRef.title}
              theme={scene.musicRef.theme}
              note={scene.musicRef.note}
              spotifyId={scene.musicRef.spotifyId}
            />
          )}

          {/* Final decision banner */}
          {scene.isFinalDecision && (
            <div className={styles.finalBanner} role="alert">
              <span aria-hidden="true">⚠</span>
              Esta é a decisão final da investigação. Escolha com cuidado.
            </div>
          )}

          {/* Choices */}
          {scene.choices?.length > 0 && (
            <section className={styles.choices} aria-label="Opções de investigação">
              <p className={styles.choicesLabel}>O que você faz?</p>
              <div className={styles.choicesGrid}>
                {scene.choices.map((choice) => (
                  <ChoiceButton
                    key={choice.next}
                    label={choice.label}
                    sublabel={choice.sublabel}
                    variant={scene.isFinalDecision ? 'final' : 'default'}
                    onClick={() => handleChoice(choice)}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Choice history */}
          {choiceHistory.length > 0 && (
            <details className={styles.history}>
              <summary className={styles.historySummary}>
                Histórico de decisões ({choiceHistory.length})
              </summary>
              <ol className={styles.historyList}>
                {choiceHistory.map((c, i) => (
                  <li key={i} className={styles.historyItem}>
                    <span className={styles.historyFrom}>{STORY[c.from]?.title || c.from}</span>
                    <span className={styles.historyArrow} aria-hidden="true"> → </span>
                    <span className={styles.historyChoice}>{c.label}</span>
                  </li>
                ))}
              </ol>
            </details>
          )}
        </main>

        {/* ── Sidebar ─────────────────────────────────────────── */}
        <aside className={styles.sidebar}>
          <ProgressBar />
          <CluePanel />
          <SpotifyPlayer />
        </aside>
      </div>
    </div>
  );
}
