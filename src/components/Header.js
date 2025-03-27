import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Header.module.css';
import anh from '../406995021_882709106637797_4689841829377960494_n.jpg';

function Header({ soluong, setShowCart, onSearch, onReset }) {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const onShowCartHandler = () => {
    setShowCart(true);
  };

  const onSearchHandler = () => {
    if (onSearch) {
      onSearch(searchValue);
    }
  };

  const onInputChangeHandler = (event) => {
    setSearchValue(event.target.value);
  };

  const onLogoClickHandler = () => {
    navigate('/login');
  };

  const onResetHandler = () => {
    setSearchValue('');
    onReset();
  };

  const onHelpClickHandler = () => {
    navigate('/help'); 
  };

  return (
    <div className={classes.row}>
      <div className={classes.ReTurn} onClick={onResetHandler}>
        <b>T1 Kon Shop</b>
      </div>
      <img src={anh} alt="Logo" className={classes.logoImage} />
      <div className={classes.searchBar}>
        <input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={onInputChangeHandler}
          className={classes.searchInput}
        />
      </div>
      <div className={classes.search} onClick={onSearchHandler}>
        <i className="fa fa-search" aria-hidden="true"></i>
        <span className={classes.tooltip}>Tìm kiếm</span>
      </div>
      <div className={classes.help} onClick={onHelpClickHandler}>
        <i className="fa fa-question-circle-o" aria-hidden="true"></i>
        <span className={classes.tooltip}>Trợ giúp</span>
      </div>
      <div className={classes.cart} onClick={onShowCartHandler}>
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        <span className={classes.cartamount}>
          <sup>{soluong}</sup>
        </span>
        <span className={classes.tooltip}>Giỏ hàng</span>
      </div>
      <div className={classes.logo} onClick={onLogoClickHandler} style={{ cursor: 'pointer' }}>
        <i className="fa fa-sign-out" aria-hidden="true"></i>
        <span className={classes.tooltip}>Đăng xuất</span>
      </div>
    </div>
  );
}

export default Header;