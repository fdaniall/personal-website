'use client';

import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const WelcomeText = () => {
    const [text] = useTypewriter({
        words: [
            'Segera Hadir',           // Indonesia
            '近日公開',               // Jepang (Kinjitsu kōkai)
            'Próximamente',           // Spanyol
            'Coming Soon',            // Inggris
            '곧 출시됩니다',           // Korea (Got chulsi dobnida)
            'In Arrivo',              // Italia
            'Demnächst verfügbar',    // Jerman
            '即将推出',               // China (Jíjiāng tuīchū)
            'À venir',                // Prancis
            'قريبا',                 // Arab (Qarīban)
        ],
        loop: true,
        typeSpeed: 100,
        deleteSpeed: 100,
    });

    return (
        <div className="flex items-center justify-center h-screen">
            <h2 className="text-5xl lg:text-7xl text-white text-center text-black">
                {text}
                <Cursor />
            </h2>
        </div>
    );
};

export default WelcomeText;