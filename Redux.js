import React from 'react'
import { useSelector } from 'react-redux'

const Redux = () => {
    const number = useSelector((state) => state.increment.value)
    console.log('number:', number);


    return (
        <>
            <nav className="navbar navbar-light bg-dark text-light">
                <div className="container-fluid">
                    <h1 className="navbar-brand text-light">

                        Increment
                    </h1>


                    <div>
                        number : <strong>{number}</strong>
                    </div>


                </div>
            </nav>
        </>
    )
}

export default Redux


