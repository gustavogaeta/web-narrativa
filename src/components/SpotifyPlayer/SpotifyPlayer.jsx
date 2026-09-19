import { useState } from 'react';
import styles from './SpotifyPlayer.module.css';

// Álbum oficial Secos & Molhados (1973) no Spotify
const ALBUM_EMBED_URL =
  'https://open.spotify.com/embed/album/4rNGFFaXZ7l0Vg6QrcHcUi?utm_source=generator&theme=0&autoplay=1';

const TRACKS = [
  { name: 'Sangue Latino', id: '2DREhftHdD8pRmNdSs6nyF' },
  { name: 'Primavera nos Dentes', id: '3wRe1E7Lc4Ah05D45YRNrT' },
  { name: 'As Andorinhas', id: '38cKP29rg3n0Nvp9yMCdW4' },
];

export default function SpotifyPlayer() {
  const [open, setOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(null);

  const currentEmbed = selectedTrack
    ? `https://open.spotify.com/embed/track/${selectedTrack.id}?utm_source=generator&theme=0&autoplay=1`
    : ALBUM_EMBED_URL;

  return (
    <section className={styles.wrapper} aria-label="Trilha sonora — Secos & Molhados 1973">
      <button
        className={styles.toggle}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        id="spotify-sidebar-toggle"
      >
        <span className={styles.vinylIcon} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
        </span>
        <span className={styles.toggleLabel}>TRILHA SONORA — SECOS & MOLHADOS</span>
        <span className={styles.arrow} aria-hidden="true">{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div className={styles.content}>
          {/* Spotify iframe */}
          <div className={styles.iframeWrapper}>
            <iframe
              key={currentEmbed}
              title={selectedTrack ? selectedTrack.name : 'Álbum — Secos e Molhados 1973'}
              src={currentEmbed}
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className={styles.spotifyFrame}
            />
          </div>

          {/* Track list for quick selection */}
          <div className={styles.trackSection}>
            <p className={styles.trackSectionLabel}>FAIXAS DO ÁLBUM</p>
            <ul className={styles.trackList} role="list">
              <li>
                <button
                  className={`${styles.trackBtn} ${!selectedTrack ? styles.active : ''}`}
                  onClick={() => setSelectedTrack(null)}
                >
                  <span className={styles.trackDot} aria-hidden="true">◉</span>
                  Álbum completo
                </button>
              </li>
              {TRACKS.map((track) => (
                <li key={track.name}>
                  <button
                    className={`${styles.trackBtn} ${selectedTrack?.name === track.name ? styles.active : ''} ${!track.id ? styles.noLink : ''}`}
                    onClick={() => track.id && setSelectedTrack(track)}
                    disabled={!track.id}
                    title={!track.id ? 'Acesse pelo álbum completo' : `Ouvir ${track.name}`}
                  >
                    <span className={styles.trackDot} aria-hidden="true">{track.id ? '▸' : '·'}</span>
                    {track.name}
                    {track.id && <span className={styles.playable}>▶</span>}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
