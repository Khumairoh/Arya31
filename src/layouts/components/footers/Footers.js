import React from 'react'

export default function Footers() {
    return (
        <footer  
        style={{ marginTop : '11%',
        textAlign: "center" }} 
        className="container">
            <p style={{ 
                fontWeight: '600',
                fontFamily: 'Lato' }}>
                &copy; 2023 Arya Hirawansyah &middot; 
            <a 
            href="https://fitnessfit.com.au/" 
            className='ms-1' 
            target={"_blank"}>
                FitnessFit
            </a>
            </p>
        </footer>
    )
}