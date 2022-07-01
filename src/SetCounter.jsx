import React from 'react';

function SetCounter(props) {
    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault()
            }}>
                <label htmlFor="set-to">Set Count</label>
                <input type="number" id="set-to"/>
                <input type="submit"/>
            </form>
        </div>
    );
}

export default SetCounter;