import { useState } from 'react';
import styles from './SpotifyPlayer.module.css';

// Álbum Secos & Molhados (1973) — playlist YouTube completa
const ALBUM_YOUTUBE_PLAYLIST = 'https://www.youtube.com/embed/videoseries?list=OLAK5uy_k3XEimExTfD-b2LIFpF_4TA3nA8ZNFT8&autoplay=1';

const TRACKS = [
  { name: 'Sangue Latino',              youtubeId: 'pHOwnIil_0o' },
  { name: 'Primavera nos Dentes',       youtubeId: 'oIbled8a3lY' },
  { name: 'O Patrão Nosso de Cada Dia', youtubeId: '7nEf7qDskUc' },
  { name: 'Rosa de Hiroshima',          youtubeId: '7bvrMzwr4wI' },
  { name: 'As Andorinhas',              youtubeId: 'b8gGLVNeONE' },
  { name: 'O Vira',                     youtubeId: 'tBxf_gp2Xho' },
  { name: 'Fala',                       youtubeId: 'IpXeo_nvEF4' },
];

export default function MusicPlayer() {
  const [open, setOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(null);

  const currentEmbed = selectedTrack
    ? `https://www.youtube.com/embed/${selectedTrack.youtubeId}?autoplay=1&rel=0`
    : ALBUM_YOUTUBE_PLAYLIST;

  return (
    <section className={styles.wrapper} aria-label="Trilha sonora — Secos & Molhados 1973">
      <button
        className={styles.toggle}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        id="spotify-sidebar-toggle"
      >
        <span className={styles.vinylIcon} aria-hidden="true">
          {/* YouTube icon */}
          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </span>
        <span className={styles.toggleLabel}>TRILHA SONORA — SECOS &amp; MOLHADOS</span>
        <span className={styles.arrow} aria-hidden="true">{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div className={styles.content}>
          {/* YouTube iframe */}
          <div className={styles.iframeWrapper}>
            <iframe
              key={currentEmbed}
              title={selectedTrack ? selectedTrack.name : 'Álbum — Secos e Molhados 1973'}
              src={currentEmbed}
              width="100%"
              height="200"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
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
                    className={`${styles.trackBtn} ${selectedTrack?.name === track.name ? styles.active : ''}`}
                    onClick={() => setSelectedTrack(track)}
                    title={`Ouvir ${track.name}`}
                  >
                    <span className={styles.trackDot} aria-hidden="true">▸</span>
                    {track.name}
                    <span className={styles.playable}>▶</span>
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
