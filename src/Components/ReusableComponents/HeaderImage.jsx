import React from 'react'

const HeaderImage = ({ imagePath ,classProperties}) => {
    return (
        <div className='col-3  '>
            <img src={imagePath} height={15}  className={classProperties}/>

        </div>
    )
}

export default HeaderImage