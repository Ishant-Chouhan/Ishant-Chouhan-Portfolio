import { createContext, useContext, useState } from 'react';

const CursorContext = createContext({
    cursorType: 'default',
    setCursorType: () => { },
    cursorText: '',
    setCursorText: () => { },
});

export const CursorProvider = ({ children }) => {
    const [cursorType, setCursorType] = useState('default'); // default, hover, text, none
    const [cursorText, setCursorText] = useState('');

    return (
        <CursorContext.Provider value={{ cursorType, setCursorType, cursorText, setCursorText }}>
            {children}
        </CursorContext.Provider>
    );
};

export const useCursor = () => useContext(CursorContext);
