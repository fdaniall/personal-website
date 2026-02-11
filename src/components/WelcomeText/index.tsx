'use client';

import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const WelcomeText = () => {
    const [text] = useTypewriter({
        words: [
            'Selamat Datang',       // Indonesia
            'ようこそ',               // Jepang (Yōkoso)
            'Bienvenidos',           // Spanyol
            'Welcome',               // Inggris
            '환영합니다',             // Korea (Hwan-yeong-habnida)
            'Benvenuto',             // Italia
            'Willkommen',            // Jerman
            '欢迎',                   // China (Huānyíng)
            'Bienvenue',             // Prancis
            'أهلاً وسهلاً',          // Arab (Ahlan wa sahlan)
        ],
        loop: true,
        typeSpeed: 100,
        deleteSpeed: 100,
    });

    return (
        <div className="flex items-center justify-center h-screen" id='welcome'>
            <h2 className="text-5xl lg:text-7xl text-center text-white">
                {text}
                <Cursor />
            </h2>
        </div>
    );
};

export default WelcomeText;