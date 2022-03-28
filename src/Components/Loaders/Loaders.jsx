import React from 'react'
import Styles from './loaders.module.css'
import { HashLoader } from 'react-spinners';

export const OpacityLoader = ({ color = "#23263B" }) => {
    return (
        <div className={Styles.withOpacity}>
            <HashLoader color={color} loading={true} size={70} />
        </div>
    )
}
