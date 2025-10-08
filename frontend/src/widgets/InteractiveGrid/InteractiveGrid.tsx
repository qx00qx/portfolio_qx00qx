import React from 'react'
import styles from './InteractiveGrid.module.scss'
import GridCell from '@/shared/ui/GridCell/GridCell'

const InteractiveGrid: React.FC = () => {
    const rows = 20
    const cols = 20
    return (
        <div className={styles.interactive_grid}>
            {Array.from({ length: rows * cols }).map((_, index) => (
                <GridCell key={index} />
            ))}
        </div>
    )
}

export default InteractiveGrid
