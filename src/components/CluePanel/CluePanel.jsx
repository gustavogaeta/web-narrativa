import { useState } from 'react';
import { useGame } from '../../context/GameContext';
import styles from './CluePanel.module.css';

export default function CluePanel() {
  const { clues, unlockedCluesCount } = useGame();
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(null);

  const clueList = Object.values(clues);
  const total = clueList.length;

  const handleClueClick = (clue) => {
    if (clue.locked) return;
    setSelected(selected?.id === clue.id ? null : clue);
  };

  return (
    <aside className={styles.panel} aria-label="Arquivo da Investigação">
      <button
        className={styles.toggle}
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        aria-controls="clue-panel-content"
      >
        <span className={styles.toggleIcon}>📁</span>
        <span className={styles.toggleLabel}>ARQUIVO DA INVESTIGAÇÃO</span>
        <span className={styles.toggleCount}>{unlockedCluesCount}/{total}</span>
        <span className={styles.toggleArrow} aria-hidden="true">{expanded ? '▲' : '▼'}</span>
      </button>

      {expanded && (
        <div id="clue-panel-content" className={styles.content}>
          <ul className={styles.list} role="list">
            {clueList.map((clue) => (
              <li key={clue.id} className={styles.item}>
                <button
                  className={`${styles.clueBtn} ${clue.locked ? styles.locked : styles.unlocked} ${selected?.id === clue.id ? styles.active : ''}`}
                  onClick={() => handleClueClick(clue)}
                  disabled={clue.locked}
                  aria-label={clue.locked ? `${clue.name} — ainda não descoberto` : `Ver: ${clue.name}`}
                >
                  <span className={styles.clueIcon}>{clue.icon}</span>
                  <span className={styles.clueName}>{clue.name}</span>
                  {clue.locked && <span className={styles.lockIcon} aria-hidden="true">🔒</span>}
                </button>

                {selected?.id === clue.id && !clue.locked && (
                  <div className={styles.clueDetail} role="region" aria-label={`Detalhes: ${clue.name}`}>
                    <p className={styles.clueDesc}>{clue.description}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}
