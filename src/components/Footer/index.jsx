import React from 'react'

export const Footer = (props) => {
    return (
        <footer
            style={{
                background: '#0d6efd',
                paddingTop: 15,
                paddingBottom: 15,
                marginTop: 15,
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <p>{props.name}</p>
        </footer>
    )
}