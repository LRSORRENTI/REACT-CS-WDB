import Rating from '@mui/material/Rating';
import { useState } from 'react';

export default function RatingDemo() {
    const [score, setScore] = useState(3);
    return (
        <div>
            <h3>Rating Demo, current rating: {score} </h3>
            <Rating 
            name='simple-controlled'
            value={score}
            onChange={(event, newValue) => {
                setScore(newValue)
            }}
            />
        </div>
    )
}