import React from 'react';
import HousesModal from '/src/components/housesModal'

const House0001 = () => {
    const imagesHouse001 = [
        '../img/house1/01JC6SV3X22RG38F7JEX1B9Y85.webp',
        '../img/house1/01JC6SVB7CYA2HWMQJ441HGDXQ.webp',
        '../img/house1/01JC6SVK28SZDDKKEFJMQ2Q2Y5.webp',
        '../img/house1/01JC6SVVNZKGMGK2926ACP6RAA.webp',
    ];
    return (
        <>
            <HousesModal Imagetitle='../img/house1/01JC6STMHJEC867E0V8NGRYPZ0.webp' images={imagesHouse001} description="House Detail" />
        </>
    );
};

export default House0001;