import React from 'react';
import BurgerLogo from '../../assets/images/original.png';
import styles from './Logo.css';

const Logo = (props) => (
    <div className={styles.Logo} style={{height: props.height}}>
        <img src={BurgerLogo} alt="BugerFlipper"/>
    </div>
);

export default Logo;