import React, {useState} from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import './Header.css';
import { useTranslation } from 'react-i18next';
  

function Header() {
    const {t,i18n} = useTranslation()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng.target.value);
    }
    return (
        <Router>
            <div className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="header-logo">
                        WordsMine!
                    </Link>
                    <div className="header-category">
                        <ul className="header-category-item-containter">
                            <li className="header-category-item"><a href="https://wordsmine.com/#tryme" target="_blank">{t('Dùng Thử')}</a></li>
                            <li className="header-category-item"><a href="https://wordsmine.com/#overview" target="_blank">{t('WordsMine! Là Gì')}</a></li>
                        </ul>
                        <div className="change-language">
                            <select onChange={changeLanguage}>
                                <option value="vi">Tiếng Việt</option>
                                <option selected value="en">English</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default Header