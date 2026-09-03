import { useGame } from '../../context/GameContext';
import styles from './Credits.module.css';

// ─── EDITE AQUI: integrantes, turma ─────────────────────────────
const INTEGRANTES = ['[COLOCAR NOMES]'];
const TURMA = '[COLOCAR TURMA]';
const ESCOLA = 'SESI SENAI';
// ────────────────────────────────────────────────────────────────

export default function Credits() {
  const { navigate } = useGame();

  return (
    <div className={`${styles.wrapper} scene-enter`} role="main">
      <div className={styles.stamp} aria-hidden="true">CONFIDENCIAL</div>

      <header className={styles.header}>
        <p className={styles.section}>CRÉDITOS</p>
        <h1 className={styles.title}>O Mistério de 1973</h1>
        <div className={styles.divider} aria-hidden="true" />
      </header>

      <div className={styles.doc}>
        <Row label="Projeto" value="O Mistério de 1973" />
        <Row label="Tema" value="Discografia Secos & Molhados" />
        <Row label="Álbum de referência" value="Secos & Molhados — 1973" />
        <Row label="Documentário de referência" value="Primavera nos Dentes" />

        <div className={styles.separator} aria-hidden="true" />

        <Row
          label="Integrantes"
          value={
            <ul className={styles.nameList}>
              {INTEGRANTES.map((name, i) => (
                <li key={i} className={styles.nameItem}>{name}</li>
              ))}
            </ul>
          }
        />
        <Row label="Turma" value={TURMA} />
        <Row label="Escola" value={ESCOLA} />

        <div className={styles.separator} aria-hidden="true" />

        <Row label="Tipo de experiência" value="Web-narrativa investigativa interativa" />
        <Row label="Tecnologia" value="React + Vite" />
        <Row label="Finalidade" value="Atividade escolar — sem fins comerciais" />
      </div>

      <footer className={styles.footer}>
        <p className={styles.disclaimer}>
          Esta é uma obra fictícia criada para fins educacionais. Os personagens são
          originais. O conteúdo histórico é apresentado como contexto e inspiração.
          Nenhum trecho integral de letras de músicas é reproduzido.
        </p>
      </footer>

      <div className={styles.actions}>
        <button className={styles.backBtn} onClick={() => navigate('home')}>
          ← Voltar ao início
        </button>
        <button className={styles.aboutBtn} onClick={() => navigate('sobre')}>
          Sobre o Projeto
        </button>
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className={styles.row}>
      <span className={styles.rowLabel}>{label}</span>
      <span className={styles.rowValue}>{value}</span>
    </div>
  );
}
