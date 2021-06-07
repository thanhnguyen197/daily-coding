import React from 'react';
import {Link} from 'react-router-dom';

import styles from './styles.module.scss';

const Navigation = () => {

    return (
        <ul className={styles['main']}>
            <li className={styles['nav-item']}>
                <Link to="/">Home</Link>
            </li>
            <li className={styles['nav-item']}>
                <Link to="/products">Products</Link>
            </li>
            <li className={styles['nav-item']}>
                <Link to="/about">About</Link>
            </li>
        </ul>
    );
};

export default Navigation;