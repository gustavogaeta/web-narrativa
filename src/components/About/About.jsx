import { useGame } from '../../context/GameContext';
import styles from './About.module.css';

export default function About() {
  const { navigate } = useGame();

  return (
    <div className={`${styles.wrapper} scene-enter`} role="main">
      <header className={styles.header}>
        <p className={styles.section}>SOBRE O PROJETO</p>
        <h1 className={styles.title}>O Mistério de 1973</h1>
        <div className={styles.divider} aria-hidden="true" />
      </header>

      <article className={styles.article}>
        <p>
          Esta é uma história fictícia criada para uma atividade escolar. Os personagens
          Daniel, Helena e Augusto são personagens originais, criados especificamente para
          esta narrativa.
        </p>

        <p>
          A narrativa foi inspirada na importância cultural dos{' '}
          <strong>Secos & Molhados</strong>, no álbum que lançaram em 1973, no contexto
          histórico brasileiro da época e no documentário{' '}
          <em>Primavera nos Dentes</em>.
        </p>

        <p>
          O objetivo é transformar música, poesia, história e investigação em uma
          experiência digital interativa — uma web-narrativa onde o leitor toma decisões
          e pode alcançar diferentes finais.
        </p>

        <hr className={styles.hr} />

        <h2 className={styles.subtitle}>Contexto histórico</h2>
        <p>
          Em 1973, o Brasil vivia sob censura. Artistas, músicos e jornalistas precisavam
          encontrar formas de se expressar dentro de limites rígidos impostos pela
          ditadura militar.
        </p>
        <p>
          Os Secos & Molhados surgiram nesse contexto com um visual e uma sonoridade
          únicos: maquiagem, poesia, músicas que misturavam referências nacionais e
          internacionais. A banda chamou atenção de todo o país.
        </p>
        <p>
          Esta história usa esse momento como pano de fundo — sem afirmar que seus
          eventos fictícios realmente aconteceram. Daniel, Helena e Augusto não são
          pessoas históricas reais.
        </p>

        <hr className={styles.hr} />

        <h2 className={styles.subtitle}>Músicas como pistas</h2>
        <p>
          Na narrativa, Helena usava músicas do álbum dos Secos & Molhados como um
          sistema de códigos para organizar sua investigação. Cada música representava
          um tema:
        </p>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Música</th>
              <th>Tema na investigação</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Sangue Latino', 'identidade'],
              ['O Patrão Nosso de Cada Dia', 'poder'],
              ['Primavera nos Dentes', 'resistência'],
              ['Rosa de Hiroshima', 'memória'],
              ['Fala', 'não permanecer em silêncio'],
            ].map(([music, theme]) => (
              <tr key={music}>
                <td><em>{music}</em></td>
                <td>{theme}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <hr className={styles.hr} />

        <h2 className={styles.subtitle}>Aviso de copyright</h2>
        <p>
          As músicas dos Secos & Molhados são utilizadas apenas como referências
          narrativas — seus títulos e os temas que inspiram. Nenhuma letra completa
          é reproduzida. Este projeto não possui fins comerciais.
        </p>
      </article>

      <div className={styles.actions}>
        <button className={styles.backBtn} onClick={() => navigate('home')}>
          ← Voltar ao início
        </button>
        <button className={styles.creditsBtn} onClick={() => navigate('creditos')}>
          Ver Créditos
        </button>
      </div>
    </div>
  );
}
