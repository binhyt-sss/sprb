import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './DetailHelp.module.css';
import anh from '../406995021_882709106637797_4689841829377960494_n.jpg';
import MenuItem from './MenuItem'; 

function DetailHelp() {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState('');
  const [selectedSubItem, setSelectedSubItem] = useState('');

  const onLogoClickHandler = () => {
    navigate('/shop');
  };

  const onMenuItemClick = (title) => {
    setOpenMenu(openMenu === title ? '' : title);
  };

  const onSubItemClick = (subItem) => {
    setSelectedSubItem(subItem);
  };

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <img src={anh} alt="Logo" className={classes.logo} onClick={onLogoClickHandler} />
        <span className={classes.headerText}>Trung tâm trợ giúp T1 Kon Shop</span>
        <span className={classes.headerPolicies}>T1 Shop Policies</span>
      </header>
      <div className={classes.searchBar}>
        <input
          type="text"
          placeholder="Nhập từ khóa hoặc nội dung cần tìm"
          aria-label="Search"
          className={classes.searchInput}
        />
        <button className={classes.searchButton}>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
      <div className={classes.mainContent}>
        <div className={classes.menuContainer}>
          <div className={classes.row} style={{ cursor: 'pointer' }}>
            <div className={classes.left}>
              <MenuItem 
                title="Mua Sắm Cùng Shopee" 
                isOpen={openMenu === "Mua Sắm Cùng Shopee"} 
                onClick={() => onMenuItemClick("Mua Sắm Cùng Shopee")}
                onSubItemClick={onSubItemClick}
                style={{ cursor: 'pointer' }}
              >
                <div>Người dùng mới</div>
                <div>Thao tác</div>
                <div>Tính năng của Shopee</div>
                <div>Khám phá</div>
                <div>Thanh toán đơn hàng</div>
                <div>Phổ biến</div>
                <div>Shopee Mall</div>
                <div>Shopee Mart</div>
                <div>SEasy Vay Tiêu Dùng</div>
              </MenuItem>
              <MenuItem title="Khuyến Mãi & Ưu Đãi"
              isOpen={openMenu === "Khuyến Mãi & Ưu Đãi"} 
              onClick={() => onMenuItemClick("Khuyến Mãi & Ưu Đãi")}
              onSubItemClick={onSubItemClick}
              style={{ cursor: 'pointer' }}>
                <div>Chương trình khuyến mãi</div>
                <div>Chương trình cho Người dùng</div>
              </MenuItem>
              <MenuItem title="Thanh Toán"
              isOpen={openMenu === "Thanh Toán"} 
              onClick={() => onMenuItemClick("Thanh Toán")}
              onSubItemClick={onSubItemClick}
              style={{ cursor: 'pointer' }}
              >
                <div>Ví ShopeePay</div>
                <div>SPayLater</div>
                <div>Shopee Xu</div>
                <div>Số dư TK Shopee</div>
                <div>Thuế & Hóa đơn</div>
                <div>Phương thức thanh toán khác</div>
                <div>Ứng dụng ShopeePay</div>
              </MenuItem>
              <MenuItem title="Đơn Hàng & Vận Chuyển"
              isOpen={openMenu === "Đơn Hàng & Vận Chuyển"} 
              onClick={() => onMenuItemClick("Đơn Hàng & Vận Chuyển")}
              onSubItemClick={onSubItemClick}
              style={{ cursor: 'pointer' }}>
                <div>Đơn hàng</div>
                <div>Đánh giá & Bình luận</div>
                <div>Thông tin vận chuyển khác</div>
                <div>Phương thức vận chuyển</div>
              </MenuItem>
              <MenuItem title="Trả Hàng & Hoàn Tiền" 
              isOpen={openMenu === "Trả Hàng & Hoàn Tiền"} 
              onClick={() => onMenuItemClick("Trả Hàng & Hoàn Tiền")}
              onSubItemClick={onSubItemClick}
              style={{ cursor: 'pointer' }}>
                <div>Gửi yêu cầu</div>
                <div>Xử lý yêu cầu</div>
                <div>Khiếu nại</div>
              </MenuItem>
              <MenuItem title="Thông Tin Chung" 
              isOpen={openMenu === "Thông Tin Chung"} 
              onClick={() => onMenuItemClick("Thông Tin Chung")}
              onSubItemClick={onSubItemClick}
              style={{ cursor: 'pointer' }}>
                <div>Chính sách Shopee</div>
                <div>Tài khoản Shopee</div>
                <div>Mua sắm an toàn</div>
                <div>Thư viện thông tin</div>
                <div>Ứng dụng Shopee</div>
                <div>Khác</div>
                <div>Hướng dẫn chung</div>
              </MenuItem>
            </div>
            <div className={classes.right}>
              {selectedSubItem === "Người dùng mới" && (
                <div className={classes.text1}>
                  <div className={classes.titlep}>
                    [Thành viên mới] Shop Yêu Thích/Shop Yêu Thích+ trên Shopee là gì?
                  </div>
                  <div className={classes.headerp}>Shop Yêu Thích</div>
                  <div className={classes.contentp}>
                    Shop Yêu Thích là những Shop được Shopee đánh giá có doanh số bán hàng và dịch vụ chăm sóc khách hàng tốt. Khi mua sắm tại các gian hàng thuộc phân loại Shop Yêu Thích, bạn sẽ được đảm bảo trải nghiệm mua sắm tốt nhất do những gian hàng này cần phải duy trì các tiêu chuẩn bán hàng nghiêm ngặt bởi các tiêu chí: Điểm đánh giá Shop, Tỉ lệ phản hồi Chat, Tỷ lệ đơn hàng giao trễ hoặc không thành công,...
                    Những gian hàng thuộc phân loại Shop Yêu thích sẽ được gắn biểu tượng Yêu Thích trên logo gian hàng, cũng như trên các sản phẩm mà gian hàng đăng bán
                    <img src='https://fileproxycdn.cs.susercontent.com/api/v2/files/Y3MtaW5ob3VzZTAx/a271051e751f4cf79979f19dde46a4e1.jpg' className={classes.imagep} />
                    <div className={classes.headerp}>Shop Yêu Thích+</div>
                    Shop Yêu thích+ là những Shop có chỉ số vận hành tốt và sở hữu dịch vụ chăm sóc khách hàng nổi bật do Shopee chọn lọc bởi những tiêu chí: Điểm đánh giá Shop, Tỉ lệ phản hồi Chat, Tỷ lệ đơn hàng giao trễ hoặc không thành công,...
                    Những gian hàng thuộc phân loại Shop Yêu Thích+ sẽ được gắn biểu tượng Yêu Thích+ trên logo gian hàng, cũng như trên các sản phẩm mà gian hàng đăng bán
                    <img src='https://fileproxycdn.cs.susercontent.com/api/v2/files/Y3MtaW5ob3VzZTAx/ae17f103124b4cfea2562b69f132393a.jpg' className={classes.imagep} />
                    Bạn cũng có thể tìm kiếm các sản phẩm được đăng bán bởi gian hàng Shop Yêu Thích/Shop Yêu Thích+ bằng tính năng Bộ lọc tìm kiếm tại trang Kết quả tìm kiếm.
                    <img src='https://fileproxycdn.cs.susercontent.com/api/v2/files/Y3MtaW5ob3VzZTAx/9acbd02bb2614c1787edddd39180e62a.jpg' className={classes.imagep} />           
                  </div> 
                </div>
              )}
              {selectedSubItem === "Thao tác" && (
                <div className={classes.text1}>
                  <div className={classes.titlep}>
                  [Tài khoản ngân hàng] Hướng dẫn cập nhật/bổ sung thông tin
                  </div>
                  <div className={classes.headerp}>Trên ứng dụng Shopee </div>
                  <div className={classes.contentp}>
                  Bước 1:Tại mục Tôi -- biểu tượng bánh răng -- Tài khoản / Thẻ ngân hàng 
                  Bước 2: Chọn tài khoản / thẻ cần cập nhật thông tin (thường sẽ hiển thị Từ chối) -- chọn Sửa 
                  Bước 3: Điền chính xác các thông tin được yêu cầu -- Hoàn thành 
                    <img src='https://lh5.googleusercontent.com/W2Z7-P_rV2f_rqYi2HwwJ7eZCZ7v4IS_Kw7og7JXGkF6Tqg7Io2jNmm-EC0gMh7FbG8=w2400' className={classes.imagep} />
                  </div> 
                  <div className={classes.headerp}>Trên website Shopee</div>
                  <div className={classes.contentp}>
                  Bước 1: Tại mục Tôi -- Tài khoản của tôi -- Tài khoản Ngân hàng 
                  Bước 2: Chọn tài khoản / thẻ cần cập nhật thông tin (thường sẽ hiển thị Từ chối) -- chọn Sửa 
                  Bước 3: Điền chính xác các thông tin được yêu cầu -- Lưu 
                  <img src='https://lh4.googleusercontent.com/B0B1mZcrbP7i24DawGVGRH5szg6Pv9t5wPpkRmNxf1nD7whGT1pImKgW8FQ5eoauBl0=w2400' className={classes.imagep} />
                  </div> 
                  </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailHelp;
