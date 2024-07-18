import React, { useState } from 'react';
import styles from './FirstComponent.module.css';
// import api from '../../utils/api';
import axios from 'axios';
import FirstButton from '../common/FirstButton/FirstButton';

const FirstComponent = () => {
  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/message');
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  };

  return (
    <div className={styles.container}>
      <FirstButton onClick={fetchMessage}>Fetch Data</FirstButton>
      {message && <p>{message}</p>}
    </div>
  );
};

export default FirstComponent;
