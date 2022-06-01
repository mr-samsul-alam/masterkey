import React, { useState } from 'react';
import './SiteNav.css'

const SiteNav = () => {
    const [bnPageClick, setBnPageClick] = useState(true)
    const [enPageClick, setEnPageClick] = useState(false)
    const goToBnPage = () => {
        setBnPageClick(true)
        setEnPageClick(false)
    }
    const goToEnPage = () => {
        setEnPageClick(true)
        setBnPageClick(false)
    }

    return (
        <div>
            <div className='nav-container mx-5'>
                <div>
                    <h4
                        style={{
                            fontWeight: 'bolder'
                        }}>
                        LOGO
                    </h4>
                </div>
                <div>
                    <span
                        onClick={goToBnPage}
                        style={{
                            color: bnPageClick ? 'rgb(18, 214, 18)' : undefined,
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}>
                        BN
                    </span>
                    <span className='px-1' >/</span>
                    <span
                        onClick={goToEnPage}
                        style={{
                            color: enPageClick ? 'rgb(18, 214, 18)' : undefined,
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}>
                        EN
                    </span>
                </div>
            </div>
        </div >
    );
};

export default SiteNav;