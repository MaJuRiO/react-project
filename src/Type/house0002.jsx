import React from 'react'
import HousesModal from '/src/components/housesModal'

function House0002() {
    const imagesHouse002 = [
        '../img/house2/01JCNDTHK0032T59GDK8F3E2VR.webp',
        'img/house2/01JCNDV0JK12MJMRKB9S8JJNN2.webp',
        'img/house2/01JCNDVE934YGE3EX4E9WFR7B4.webp',
        'img/house2/01JCNDWD7PQRN6TC0DZC9R7HCZ.webp',
        'img/house2/01JCNDWPZR8Y5Q98MTTYNC09JF.webp',
        'img/house2/01JCNDX1N8PD699TY6QVAC915Q.webp',
        'img/house2/01JCNDXCD6JDJ166D237DVSB8D.webp'
    ];
    return (
        <>
            <HousesModal Imagetitle='../img/house2/01JCNDRN5AEFXHSC63P8FXZYK8.webp' images={imagesHouse002} description="House Detail" />
        </>

    )
}

export default House0002