import React from 'react'

// bg image
import IndexHeaderImg from "../components/images/indexHeaderImage"

const Header = ({title, subTitle}) => {
    return(
        <IndexHeaderImg>      
                <header className="h-100 d-flex align-items-center justify-content-center flex-column text-light">
                    <h1 className="text-shadow-wine display-4 mb-2">{title}</h1>
                    <p className="lead wine bg-light p-2 rounded-right shadow mt-2">{subTitle}</p>
                </header>
        </IndexHeaderImg>
    )
}

export default Header