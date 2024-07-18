import React from 'react';
import styles from './Home.module.css';
import FirstComponent from '../../components/FirstComponent/FirstComponent';


const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <h1 className={styles.headline}>Welcome to Your App</h1>
        <FirstComponent />
      </div>
    </div>
  );
};

export default Home;
