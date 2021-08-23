import React from 'react'
import './Version.css'
import {useTranslation} from 'react-i18next';
import {Link} from 'react-scroll'

function Version(){
    const {t} = useTranslation()
    return(
        <>
            <ul className="jumpBox">
                <li className="jumpTitle"><a>{t('Phiên bản')}</a></li>
                <li className="versionItem"><Link activeClass="active" to="ver1.3" spy={true} smooth={true}>{t('Phiên bản 1.3')}</Link></li>
                <li className="versionItem"><Link activeClass="active" to="ver1.2" spy={true} smooth={true}>{t('Phiên bản 1.2')}</Link></li>
                <li className="versionItem"><Link activeClass="active" to="ver1.1" spy={true} smooth={true}>{t('Phiên bản 1.1')}</Link></li>
            </ul>
        </>
    )
}

export default Version