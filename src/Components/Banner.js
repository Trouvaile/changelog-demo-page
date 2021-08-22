import React from 'react';
import './Banner.css';
import {useTranslation} from 'react-i18next';

function Banner(){
    const {t} = useTranslation()
    return(
        <div class="bann">
            <div class="bann-container">
                <div class="bann-row">
                    <div class="bann-content-wrapper">
                        <div class="bann-content-title">
                            <p>{t('Chào mừng bạn đến với WordsMine!')}</p>
                        </div>
                        <div class="bann-content">
                            <p>
                                {t('WordsMine là ứng dụng hỗ trợ việc học tiếng anh mọi lúc mọi nơi. Chỉ với việc cài đặt extension trên trình duyệt của mình. Bạn có thể tra cứu một kho từ điển khổng lồ, hơn thế nữa bạn còn có thể lưu trữ từ vựng để có thể ôn tập.')}
                            </p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Banner