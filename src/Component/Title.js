import React from 'react'

function title({title}) {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-3 text-center">
                <h1 className="text-capitalize font-weight-bold">
                    {title}
                </h1>
            </div> 
        </div>
    )
}

export default title