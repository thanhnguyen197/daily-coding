import React, { useState, useEffect, useRef } from 'react';

const randomColor = (currentColor: string) => {
    const colors = ['red', 'green', 'cyan'];
    const currentIndex = colors.indexOf(currentColor);
    let newIndex = currentIndex;

    while (currentIndex === newIndex) {
        newIndex = Math.trunc(Math.random() * colors.length);
    }

    return colors[newIndex];
};

const useMagicColor = () => {
    const [color, setColor] = useState('transparent');
    const colorRef = useRef('transparent');

    useEffect(() => {
        const colorInterval = setInterval(() => {
            const color = randomColor(colorRef.current);

            setColor(color);
            colorRef.current = color;
        }, 1000);

        return () => {
            clearInterval(colorInterval);
        };
    }, []);

    return { color };
};

export default useMagicColor;