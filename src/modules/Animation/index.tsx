import React, {useState} from 'react';

import styles from './styles.module.scss';

const Animation = () => {
    const [img, setImg] = useState(<div>acv</div>);

    return (
        <div className={styles['animation']}>
            {img}
            <div className={styles['circle']}>Hover me</div>
            <img className={styles['cloud']} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/ICloud_logo.svg/1200px-ICloud_logo.svg.png" />
        </div>
    );
};

export default Animation;
