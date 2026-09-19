import { useState } from 'react';
import styles from './MusicReference.module.css';

/**
 * Visual callout for a musical reference embedded in the narrative.
 * When a youtubeId is provided, renders a YouTube iframe embed (full song, no login needed).
 */
export default function MusicReference({ title, theme, note, spotifyId, youtubeId }) {
  const [playerVisible, setPlayerVisible] = useState(false);

  // Prefer youtubeId; fall back to spotifyId for backwards compat
  const hasVideo = youtubeId || spotifyId;
  const embedUrl = youtubeId
    ? `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`
    : spotifyId
    ? `https://open.spotify.com/embed/track/${spotifyId}?utm_source=generator&theme=0`
    : null;

  const isYoutube = !!youtubeId;

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

        {embedUrl && (
          <div className={styles.spotifySection}>
            {!playerVisible ? (
              <button
                className={`${styles.revealBtn} ${isYoutube ? styles.revealBtnYt : ''}`}
                onClick={() => setPlayerVisible(true)}
                aria-label={`Ouvir "${title}" no YouTube`}
              >
                <span className={styles.spotifyLogo} aria-hidden="true">
                  {isYoutube ? (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  )}
                </span>
                <span>🎵 Ouvir {isYoutube ? 'no YouTube' : 'no Spotify'}</span>
                <span className={styles.revealArrow}>▶</span>
              </button>
            ) : (
              <div className={styles.iframeWrapper}>
                <iframe
                  title={`${isYoutube ? 'YouTube' : 'Spotify'} — ${title}`}
                  src={embedUrl}
                  width="100%"
                  height={isYoutube ? '200' : '152'}
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className={styles.spotifyFrame}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </aside>
  );
}
