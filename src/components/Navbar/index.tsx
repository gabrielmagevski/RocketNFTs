import RocketNFTs from '../../assets/logo.svg';
import MetaMask from '../../assets/logo_MetaMask.svg';

import styles from'./styles.module.scss';

export function Navbar() {
  return(
    <>
      <header>
        <nav>
          <div>
            <img src={RocketNFTs} alt="Logo RocketNFTs" />
          </div>
          <div>
            <ul className={styles.list}>
              <li>Comprar NFT</li>
              <li>Sobre</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <button className={styles.buttonMetamask} type='submit'>
              <img src={MetaMask} alt="Logo MetaMask" />
              Conectar carteira
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}