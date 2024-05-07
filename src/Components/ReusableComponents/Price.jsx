import React from 'react'

const Price = ({classNames,textVAlue}) => {
    return (
        <div className={`${classNames} d-flex main-value-cls`}>
            <p className='first'>

            </p>
            <p className='second' >
            {textVAlue}
            </p>


        </div>
    )
}

export default Price