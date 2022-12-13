import React from 'react';

function ContainerHistory(name,date) {
    return (
        <div className="container-history">
            <h2>{name}</h2>
            <h3>Le :  {date}</h3>
        </div>
    );
}

export default ContainerHistory;