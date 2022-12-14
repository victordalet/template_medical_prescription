import React from 'react';
import createPdf from "./pdf";

function ContainerHistory(data) {

    function temp() {
        createPdf(data);
    }

    return (
        <div className="container-history" onClick={temp}>
            <h2>{data[0]}</h2>
            <h3>Le :  {data[1]}</h3>
        </div>
    );
}

export default ContainerHistory;