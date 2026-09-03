import { useState, useRef } from 'react';
import styles from './SpotifyPlayer.module.css';

/**
 * Spotify playlist area — prepared for a future embed link.
 * Currently displays a placeholder with visual album art style.
 */
export default function SpotifyPlayer() {
  const [open, setOpen] = useState(false);

  // Replace this with a real Spotify embed URL when authorized.
  // e.g. "https://open.spotify.com/embed/album/XXXXXX?utm_source=generator"
  const SPOTIFY_EMBED_URL = null;

  return (
    <section className={styles.wrapper} aria-label="Playlist — Secos & Molhados 1973">
      <button
        className={styles.toggle}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className={styles.vinylIcon} aria-hidden="true">🎙️</span>
        <span className={styles.toggleLabel}>TRILHA SONORA — SECOS & MOLHADOS (1973)</span>
        <span className={styles.arrow} aria-hidden="true">{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div className={styles.content}>
          {SPOTIFY_EMBED_URL ? (
            <iframe
              title="Secos e Molhados — 1973 no Spotify"
              src={SPOTIFY_EMBED_URL}
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className={styles.spotifyFrame}
            />
          ) : (
            <div className={styles.placeholder}>
              <div className={styles.vinyl} aria-hidden="true">
                <div className={styles.vinylOuter}>
                  <div className={styles.vinylInner} />
                </div>
              </div>
              <div className={styles.albumInfo}>
                <p className={styles.albumTitle}>Secos & Molhados</p>
                <p className={styles.albumYear}>1973</p>
                <p className={styles.albumNote}>
                  Adicione o link de uma playlist autorizada do Spotify para ativar o player.
                </p>
                <ul className={styles.trackList}>
                  {[
                    'O Vira', 'Sangue Latino', 'El Rey', 'Rosa de Hiroshima',
                    'Primavera nos Dentes', 'O Patrão Nosso de Cada Dia',
                    'Assim Assado', 'Fala', 'Mulher Barriguda', 'Pierrot'
                  ].map((track) => (
                    <li key={track} className={styles.track}>
                      <span className={styles.trackDot} aria-hidden="true">▸</span>
                      {track}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
