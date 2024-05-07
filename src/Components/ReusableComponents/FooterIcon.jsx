import React from 'react'

const FooterIcon = ({imageValue,classNames}) => {
    return (<>
        {imageValue?.map((items,id) => {
            return <div className='col-3' key={id}>
                <img src={items} height={20} className={classNames} />

            </div>

        })}
    </>
    )
}

export default FooterIcon