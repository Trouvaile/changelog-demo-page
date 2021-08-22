import React from 'react'
import './Body.css'
import {useTranslation} from 'react-i18next';
import {Link} from 'react-scroll'

function Version() {
    const {t} = useTranslation()
    return (
        <div className="body-content grid-container">
            <div className="gird-item left">
                <ul>
                    <li className="jumpTitle"><a>{t('Nhảy đến')}</a></li>
                    <li className="versionItem"><Link activeClass="active" to="ver1.3" spy={true} smooth={true}>{t('Phiên bản 1.3')}</Link></li>
                    <li className="versionItem"><Link activeClass="active" to="ver1.2" spy={true} smooth={true}>{t('Phiên bản 1.2')}</Link></li>
                    <li className="versionItem"><Link activeClass="active" to="ver1.1" spy={true} smooth={true}>{t('Phiên bản 1.1')}</Link></li>
                </ul>
            </div>
            
            <div className="gird-item right">
                
                <ul>
                    <li className="ver" id="ver1.3"><p>{t('Tháng 8, 2021 (Phiên bản 1.3)')}</p></li>
                    <li className="new"><p>{t('Chức năng mới')}</p>
                        <ul>
                            <li className="lnr lnr-checkmark-circle">{t('Bạn có thể dùng tính năng tuỳ chỉnh để tối ưu trải nghiệm học tập được cá nhân hoá cho riêng bạn.')}</li>
                            <li className="lnr lnr-checkmark-circle">{t('Bạn có thể gửi lại góp ý cho team WordsMine để team nỗ lực hỗ trợ các bạn học tập tốt hơn.')}</li>
                            <li className="lnr lnr-checkmark-circle">{t('Bạn có thể đổi avatar yêu thích của riêng mình.')}</li>
                            <li className="lnr lnr-checkmark-circle">{t('Những từ vựng mà bạn đã thêm, giờ đây bạn có thể xem nguồn website mà bạn đã lưu từ vựng đó.')}</li>
                            <li className="lnr lnr-checkmark-circle">{t('Những tính năng mới của nền tảng WordsMine sẽ được thể hiện trong thông báo để bạn tiện theo dõi.')}</li>
                            <li className="lnr lnr-checkmark-circle">{t('Ngoài ra, team WordsMine còn thêm chức năng giới thiệu nền tảng dành cho những người dùng mới nhằm để giúp quen với nền tảng WordsMine hơn!')}</li>
                        </ul>
                    </li>
                    <li className="update"><p>{t('Nâng cấp')}</p>
                        <ul>
                            <li className="lnr lnr-pushpin">{t('Tối ưu hóa hiệu suất.')}</li>
                        </ul>
                    </li>
                </ul>

                <ul>
                    <li className="ver" id="ver1.2"><p>{t('Tháng 4, 2021 (Phiên bản 1.2)')}</p></li>
                    <li className="new"><p>{t('Chức năng mới')}</p>
                        <ul>
                            <li className="lnr lnr-checkmark-circle">{t('Thêm nhanh từ mới trong trang extension popup.')}</li>
                            <li className="lnr lnr-checkmark-circle">{t('Chức năng tra định nghĩa đã được nâng cấp, bạn có thể tra từ với nghĩa chuyên ngành.')}</li>
                            <li className="lnr lnr-checkmark-circle">{t('Bạn sẽ biết cách sử dụng từ qua nhiều ví dụ khác nhau và có thể lưu lại ví dụ mà bạn muốn.')}</li>
                            <li className="lnr lnr-checkmark-circle">{t('Bên cạnh việc thêm từ thông qua đường link tắt, bạn còn có thể thêm nhanh định nghĩa và ví dụ đi kèm.')}</li>
                            <li className="lnr lnr-checkmark-circle">{t('Bạn có thể tạo từ mục để lưu từ vựng theo nhiều chủ đề khác nhau.')}</li>
                            <li className="lnr lnr-checkmark-circle">{t('Bạn có thể xem từ vựng trong chế độ phân trang hoặc xem tất cả từ vựng một trang.')}</li>
                            <li className="lnr lnr-checkmark-circle">{t('Card từ vựng có thêm chế độ hiển thị mới, bạn có thể xem từ vựng phiên âm và định nghĩa cá nhân một cùng một lúc.')}</li>
                            <li className="lnr lnr-checkmark-circle">{t('Bạn có thể cài đặt trang mà bạn muốn hiển thị/ tắt popup tra từ.')}</li>
                        </ul>
                    </li>
                    <li className="update"><p>{t('Nâng cấp')}</p>
                        <ul>
                            <li className="lnr lnr-pushpin">{t('Hiển thị thông báo khi người dùng lưu một từ đã được thêm trước đó.')}</li>
                            <li className="lnr lnr-pushpin">{t('Hiển thị nút đăng nhập khi người dùng lưu một từ vựng từ popup tra từ mà chưa đăng nhập.')}</li>
                            <li className="lnr lnr-pushpin">{t('Hiển thị định nghĩa tiếng Việt trên định nghĩa tiếng Anh trong definition popup của extension.')}</li>
                            <li className="lnr lnr-pushpin">{t('Hiển thị tùy chọn hiện tại khi người dùng chọn một chế độ sắp xếp hoặc nhóm theo thư mục.')}</li>
                            <li className="lnr lnr-pushpin">{t('Đăng nhập bằng tên đăng nhập hoặc email.')}</li>
                        </ul>
                    </li>
                    <li className="bug"><p>{t('Sửa lỗi')}</p>
                        <ul>
                            <li className="lnr lnr-bug">{t('Hiển thị trạng thái lưu của những từ không đồng nhất trong popup định nghĩa và danh sách từ trong extension.')}</li>
                            <li className="lnr lnr-bug">{t('Không click vào link trong menu được.')}</li>
                            <li className="lnr lnr-bug">{t('Kiểm tra tên đăng nhập hợp lệ khi đăng ký tài khoản.')}</li>
                            <li className="lnr lnr-bug">{t('Kiểm tra tên đăng nhập hợp lệ khi cập nhật thông tin cá nhân.')}</li>
                            <li className="lnr lnr-bug">{t('Tải lại trang khi thay đổi chế độ hiển thị trang.')}</li>
                            <li className="lnr lnr-bug">{t('Sắp xếp từ theo thời gian.')}</li>
                            <li className="lnr lnr-bug">{t('Hiển thị từ không chính xác khi thay đổi chế độ hiển thị trang.')}</li>
                            <li className="lnr lnr-bug">{t('Xóa từ.')}</li>
                            <li className="lnr lnr-bug">{t('Từ hiển thị trong popup và trong extension không đồng nhất.')}</li>
                            <li className="lnr lnr-bug">{t('Hiển thị thông báo lỗi khi lưu từ bị trùng lặp.')}</li>
                            <li className="lnr lnr-bug">{t('Sửa vị trí phản hồi của người dùng.')}</li>
                            <li className="lnr lnr-bug">{t('Không lấy được phát âm.')}</li>
                        </ul>
                    </li>
                </ul>
                
                <ul>
                    <li className="ver" id="ver1.1"><p>{t('Tháng 3, 2021 (Phiên bản 1.1)')}</p></li>
                    <li className="new"><p>{t('Chức năng mới')}</p>
                        <ul>
                            <li className="lnr lnr-checkmark-circle">{t('Người dùng có thể lưu từ vựng nhanh chóng bằng cách truy cập đường link tắt.')}</li>
                            <li className="lnr lnr-checkmark-circle">{t('Người dùng có thể biết được lịch sử nguồn lưu từ vựng.')}</li>
                            <li className="lnr lnr-checkmark-circle">{t('Người dùng có thể nhóm từ vựng theo thư mục.')}</li>
                            <li className="lnr lnr-checkmark-circle">{t('Người dùng có thể dùng thử chức năng của extension ngay trên trang chủ Wordsmine!')}</li>
                            <li className="lnr lnr-checkmark-circle">{t('Người dùng có thể thêm định nghĩa cho từ vào kho lưu trữ cá nhân.')}</li>
                        </ul>
                    </li>
                    <li className="update"><p>{t('Nâng cấp')}</p>
                        <ul>
                            <li className="lnr lnr-pushpin">{t('Thay đổi bố cục giao diện.')}</li>
                            <li className="lnr lnr-pushpin">{t('Hiển thị chú thích hướng dẫn cho các nút bấm.')}</li>
                            <li className="lnr lnr-pushpin">{t('Hiển thị chế độ sắp xếp từ vựng trang chủ từ vựng.')}</li>
                            <li className="lnr lnr-pushpin">{t('Thay đổi vị trí icon nhận xét từ người dùng.')}</li>
                            <li className="lnr lnr-pushpin">{t('Tìm kiếm từ vựng không phân biệt chữ hoa, chữ thường.')}</li>
                            <li className="lnr lnr-pushpin">{t('Hiện thị thông báo khi người dùng lưu từ vựng thành công từ popup extension.')}</li>
                        </ul>
                    </li>
                    <li className="bug"><p>{t('Sửa lỗi')}</p>
                        <ul>
                            <li className="lnr lnr-bug">{t('Chỉnh sửa định dạng của định nghĩa sau khi người dùng thêm định nghĩa mới.')}</li>
                            <li className="lnr lnr-bug">{t('Định dạng lại nội dung card từ vựng.')}</li>
                            <li className="lnr lnr-bug">{t('Lấy phát âm.')}</li>
                            <li className="lnr lnr-bug">{t('Hiển thị thông báo lỗi khi không tìm thấy âm thanh.')}</li>
                            <li className="lnr lnr-bug">{t('Hiển thị số từ được chọn còn lại sau khi xóa từ vựng.')}</li>
                            <li className="lnr lnr-bug">{t('Đổi phông chữ để hỗ trợ tiêng Anh và tiếng Việt.')}</li>
                            <li className="lnr lnr-bug">{t('Sắp xếp thứ tự từ vựng theo thời gian cập nhật.')}</li>
                            <li className="lnr lnr-bug">{t('Đặt lại modal chi tiết từ vựng sau mỗi lần đóng.')}</li>
                        </ul>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Version