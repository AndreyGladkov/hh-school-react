import React from 'react';

const Info = ({info, error}) => {
    let counter = 0;
    const display = Object.keys(info)
        .map((elem) => {
            return (
                <div key={elem}>
                    <h3>{elem}</h3>
                        {info[elem].map(({timestamp, message}) => {
                            return <div key={counter++}>
                                        <b>{timestamp} </b>
                                        {message}
                                    </div>
                        })}
                </div>)
        });
    return (
        <div className="info">
            {error ? error : display}
        </div>
    )
}

export default Info;