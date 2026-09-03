import styles from './MusicReference.module.css';

/**
 * Visual callout for a musical reference embedded in the narrative.
 */
export default function MusicReference({ title, theme, note }) {
  return (
    <aside className={styles.wrapper} aria-label={`Referência musical: ${title}`}>
      <div className={styles.header}>
        <span className={styles.icon} aria-hidden="true">🎵</span>
        <span className={styles.label}>REFERÊNCIA MUSICAL</span>
      </div>
      <div className={styles.body}>
        <p className={styles.title}>
          <em>"{title}"</em>
          <span className={styles.separator}> — </span>
          <span className={styles.theme}>{theme}</span>
        </p>
        {note && <p className={styles.note}>{note}</p>}
      </div>
    </aside>
  );
}
