import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

const DuckContext = createContext();

const DuckProvider = ({ children }) => {
    const [duck, setDuck] = useState(null);

    const getRandomDuck = async () => {
        try {
            const response = await api.get('/rubberDucks/random');
            setDuck(response.data);
        } catch (error) {
            console.error('Error fetching the random duck:', error);
        }
    };

    useEffect(() => {
        getRandomDuck();
    }, []);

    return (
        <DuckContext.Provider value={{ duck, getRandomDuck }}>
            {children}
        </DuckContext.Provider>
    );
};

export { DuckContext, DuckProvider };