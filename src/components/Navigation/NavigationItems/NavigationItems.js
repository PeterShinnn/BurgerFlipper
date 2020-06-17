import React from 'react';
import styles from './NavigationsItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/">Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default NavigationItems;