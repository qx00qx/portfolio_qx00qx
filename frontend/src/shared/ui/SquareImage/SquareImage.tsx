import React from 'react'
import styles from './SquareImage.module.scss'

interface SquareImageProp {
    url: string
    size?: number
}

const SquareImage: React.FC<SquareImageProp> = ({ url, size = 63 }) => {
    return (
        <div className={styles.square_image} style={{ height: size, width: size }}>
            <img src={url} alt={url} />
        </div>
    )
}

export default SquareImage
