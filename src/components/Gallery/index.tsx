import styles from './styles.module.scss';

import FirstImage from '../../assets/galeria-1.png';
import SecondImage from '../../assets/galeria-2.png';
import ThirdImage from '../../assets/galeria-3.png';
import FourtheImage from '../../assets/galeria-4.png';
import FifthImage from '../../assets/galeria-5.png';
import SixthImage from '../../assets/galeria-6.png';
import SeventhImage from '../../assets/galeria-7.png';
import EighthImage from '../../assets/galeria-8.png';

export function Gallery() {
  return(
    <>
      <div className={styles.gallery}>
        <img src={FirstImage} alt="FirstImage" />
        <img src={SecondImage} alt="SecondImage" />
        <img src={ThirdImage} alt="ThirdImage" />
        <img src={FourtheImage} alt="FourtheImage" />
        <img src={FifthImage} alt="FifthImage" />
        <img src={SixthImage} alt="SixthImage" />
        <img src={SeventhImage} alt="SeventhImage" />
        <img src={EighthImage} alt="EighthImage" />
      </div>
    </>
  )
}