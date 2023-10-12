interface DayPickProp {
    values: string[];
}

import React from 'react';

export default function DayPicker({ values }: DayPickProp): JSX.Element {
    // You can use the "values" prop passed to the component here
    // For example:
    // values = ['Monday', 'Tuesday', 'Wednesday']
    const randIdx = Math.floor(Math.random() * values.length );
    const randElem = values[randIdx];
    return (
        <div>
            The array of values: {values}
            <p>
                Random generate element from the 
                values array: {randElem}
            </p>
        </div>
    );
}
