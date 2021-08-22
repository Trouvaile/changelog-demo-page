import React from 'react'
import './Mailbox.css'
import {useTranslation} from 'react-i18next';
import emailjs from 'emailjs-com';

function Mailbox() {
    const {t} = useTranslation()
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_i7y8x57', 'template_vd4rydi', e.target, 'user_GXIIjUrmEOoWWgywUc0tT')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }
    return (
        <div className="blog-subscription-form">
            <div className="blog-subscription-form-wrapper">
                <div className="blog-subcription-form-message">
                    <p className="message">{t('Đăng ký ngay để không bỏ lỡ bất kì thông báo nào của WordsMine')}</p>
                </div>
                <div className="blog-subcription-form-box">
                    <form enctype="text/plain" onSubmit={sendEmail}>
                        <input type="text" name="email" placeholder="Email"></input>
                        <button className="Subcribe">
                            {t('Đăng ký')}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Mailbox