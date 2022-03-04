import { Gallery } from '../Gallery';

import styles from './styles.module.scss';

import GroupAvatars from '../../assets/group-avarts.png';
import RocketArtistic from '../../assets/badge.svg';

export function Presentation() {
  return(
    <>
      <main>
        <div className={styles.container}>
          <div className={styles.column}>
            <p>
              Mercado digital para colecionáveis em criptos e tokens não fungível (NFT).
              Compre, venda e descubra ativos digitais exclusivos para você.
            </p>
            <div>
              <img src={GroupAvatars} alt="Artistas" />
              <div>
                <ul>
                  <li><b>+10</b></li>
                  <li>Artistas selecionados</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.columnSecond}>
            <h1>Descubra a verdadeira arte digital e colecione diversas <span>NFTs</span></h1>
          </div>
          <div className={styles.columnThird}>
            <img src={RocketArtistic} alt="RocketArtistic" />
          </div>
        </div>
        <Gallery />
      </main>
    </>
  )
}