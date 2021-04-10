import React from 'react';
import './menu-item.scss'

const MenuItem = ({title,imageUrl,size}) => (
    <div  className={`${size} menu-item`}>
        <div className='background-image' style={{backgroundImage:`url(${imageUrl})`}}/>
        <div className='content'>
            <hi className='title'>{title.toUpperCase() }</hi>
            <span classNam='subtitle'>Shop Now</span>
        </div>
    </div>
)

export default MenuItem