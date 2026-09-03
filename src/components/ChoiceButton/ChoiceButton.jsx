import styles from './ChoiceButton.module.css';

/**
 * Interactive choice button for narrative decisions.
 */
export default function ChoiceButton({ label, sublabel, onClick, variant = 'default', disabled = false }) {
  return (
    <button
      className={`${styles.btn} ${styles[variant]} ${disabled ? styles.disabled : ''}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={sublabel ? `${label} — ${sublabel}` : label}
    >
      <span className={styles.label}>{label}</span>
      {sublabel && <span className={styles.sublabel}>{sublabel}</span>}
    </button>
  );
}
