import React from 'react'
import './Footer.css'
import {useTranslation} from 'react-i18next';

function Footer() {
    const {t} = useTranslation()
    return(
        <div className="footer">
            <div className="footer-link">
                <div>
                    <p>2021 WordsMine</p>
                </div>
                <div className="privacy">
                    <p>{t('Bảo mật')}</p>
                </div>
                <div className="term">
                    <p>{t('Điều khoản')}</p>
                </div>
            </div>
            <div className="footer-logo">
                <p>WordsMine!</p>
            </div>
        </div>
    )
}

export default Footer