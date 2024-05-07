import React from 'react'

const DollerImage = ({classNames,imagePath}) => {
  return (

    <div className={`${classNames}   text-center rounded-circle doller-image-size rounded mx-auto d-block `} >
    <img src={imagePath} height={20} className="pt-1  float-center" />
  </div>
  )
}

export default DollerImage