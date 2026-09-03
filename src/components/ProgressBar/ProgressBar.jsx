import { useGame } from '../../context/GameContext';
import styles from './ProgressBar.module.css';

export default function ProgressBar() {
  const { progress, visitedScenes } = useGame();

  return (
    <div className={styles.wrapper} aria-label={`Progresso da investigação: ${progress}%`}>
      <div className={styles.label}>
        <span className={styles.labelText}>INVESTIGAÇÃO</span>
        <span className={styles.labelValue}>{progress}%</span>
      </div>
      <div className={styles.track} role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
        <div className={styles.fill} style={{ width: `${progress}%` }} />
      </div>
      {visitedScenes.length > 0 && (
        <p className={styles.sceneCount}>{visitedScenes.length} localização{visitedScenes.length > 1 ? 'ões' : ''} visitada{visitedScenes.length > 1 ? 's' : ''}</p>
      )}
    </div>
  );
}
