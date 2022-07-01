import React, {useEffect, useState} from 'react';
import {useCounter} from "./useCounter";

function SetCounter(props) {
    const {count: countFromStore, set} = useCounter()
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(countFromStore)
    }, [countFromStore])

    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault()
                set(count)
            }}>
                <label htmlFor="set-to">Set Count</label>
                <input
                    type="number"
                    id="set-to"
                    value={count}
                    onChange={(event) => setCount(
                        parseInt(event.target.value || 0)
                    )}
                />
                <input type="submit"/>
            </form>
        </div>
    );
}

export default SetCounter;