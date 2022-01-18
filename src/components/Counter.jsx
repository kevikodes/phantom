import React from 'react'

function Counter() {
    return (
        <div>
            <div id='clock'>
                <p>Get ready! Phantom  has</p>
                <p className='date'>{{ date }}</p>
                <p className="time">{{ time }}</p>
                <p className="text">UNTIL LAUNCH!</p>
            </div>
        </div>
)}


export default Counter


