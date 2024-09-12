import React from "react";
import Calories from '@/assets/calories.svg';
import Proteines from '@/assets/protein.svg';
import Glucides from '@/assets/apple.svg';
import Lipides from '@/assets/lipides.svg';

export default function KeyInfo({ data }) {

    /**
     * Display the right icon and name depending on the key
     */

    let img;
    let name;
    let unit;

    switch (data.key) {
        case 'calorieCount':
            img = Calories;
            name = 'Calories';
            unit = 'kCal';
            break;
        case 'proteinCount':
            img = Proteines;
            name = 'Proteines';
            unit = 'g';
            break;
        case 'carbohydrateCount':
            img = Glucides;
            name = 'Glucides';
            unit = 'g';
            break;
        case 'lipidCount':
            img = Lipides;
            name = 'Lipides';
            unit = 'g';
            break;
    }

    /**
     * Display the key info
     */

	return (
		<li className="flex items-center justify-left gap-6 w-fit">
			<img src={img} alt={name} className="aspect-square w-14 min-w-14" />
			<div className="flex flex-col items-left justify-center">
				<span className="font-bold">{data.value}{unit}</span>
                <p className="text-xs">{name}</p>
			</div>
		</li>
	);
}
