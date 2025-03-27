import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './HelpPage.module.css';
import anh from '../406995021_882709106637797_4689841829377960494_n.jpg';

function HelpPage({ setShowCart }) {
  const navigate = useNavigate();

  const onLogoClickHandler = () => {
    setShowCart(false); 
    navigate('/shop');  
  };

  const categories = [
    { id: 1, name: 'Mua Sắm Cùng T1 Shop' },
    { id: 2, name: 'Khuyến Mãi & Ưu Đãi' },
    { id: 3, name: 'Thanh Toán' },
    { id: 4, name: 'Đơn Hàng & Vận Chuyển' },
    { id: 5, name: 'Trả Hàng & Hoàn Tiền' },
    { id: 6, name: 'Thông Tin Chung' },
  ];

  const handleCategoryClick = (categoryId) => {
    if (categoryId === 1) {
      navigate('/detail-help');
    }
  };

  const faqs = [
    '[Cảnh báo lừa đảo] Mua sắm an toàn cùng T1 Shop',
    '[Dịch vụ] Làm sao để liên hệ Chăm sóc Khách hàng (CSKH) T1 Kon Shop?',
  ];

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <img src={anh} alt="Logo" className={classes.logo} onClick={onLogoClickHandler} />
        <span className={classes.headerText}>Trung tâm trợ giúp T1 Kon Shop</span>
        <span className={classes.headerPolicies}>T1 Kon Shop Policies</span>
      </header>
      <div className={classes.mainContent}>
        <h1>Xin chào, T1 Kon Shop có thể giúp gì cho bạn?</h1>
        <div className={classes.searchContainer}>
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
        <div className={classes.categories}>
          <h2 className={classes.sectionTitle}>Danh mục</h2>
          <div className={classes.categoryGrid}>
            {categories.map((category) => (
              <button
                key={category.id}
                className={classes.categoryItem}
                onClick={() => handleCategoryClick(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        <div className={classes.faqs}>
          <h2 className={classes.sectionTitle}>Câu hỏi thường gặp</h2>
          <ul>
            {faqs.map((faq, index) => (
              <li key={index}>{faq}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HelpPage;
