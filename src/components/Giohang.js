import React, { useEffect, useState } from "react";
import classes from "./Giohang.module.css";
import Anhqr from "../z5622423183714_818f41e0ca27396cfa5f79df328fa7a5.jpg";

function Giohang({ setShowCart, cart, setCart, setCartCount }) {
  const [tongtien, setTongtien] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
  
    if (typeof setCartCount !== 'function') {
      console.error('setCartCount is not a function');
    }
  }, [setCartCount]);

  const thaydoisoluong = (sanpham, sl) => {
    const idx = cart.indexOf(sanpham);
    const arr = [...cart];
    arr[idx].amount += sl;
    if (arr[idx].amount === 0) arr[idx].amount = 1;
    setCart([...arr]);
    const count = arr.reduce((acc, item) => acc + item.amount, 0);

    if (typeof setCartCount === 'function') {
      setCartCount(count);
    }
  };

  const removeProduct = (sanpham) => {
    const arr = cart.filter(sp => sp.id !== sanpham.id);
    setCart([...arr]);
    const count = arr.reduce((acc, item) => acc + item.amount, 0);

    if (typeof setCartCount === 'function') {
      setCartCount(count);
    }
  };

  const tinhtongtien = () => {
    let tt = 0;
    cart.forEach(sp => {
      tt += sp.price * sp.amount;
    });
    setTongtien(tt);
  };

  useEffect(() => {
    tinhtongtien();
  }, [cart]);

  const onCloseCartHandler = () => {
    setShowCart(false);
  };

  const onThanhToanHandler = () => {
    setShowModal(true);
  };

  const onCloseModalHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      <h1>Giỏ hàng</h1>
      {Array.isArray(cart) && cart.length > 0 ? (
        cart.map(product => (
          <div className={classes.row} key={product.id}>
            <div className={classes.img}>
              <img src={product.image} alt={product.name} />
            </div>
            <div className={classes.title}>
              {product.title}
            </div>
            <div className={classes.controls}>
              <button onClick={() => thaydoisoluong(product, 1)}>+</button>
              <input type="text" value={product.amount} readOnly />
              <button onClick={() => thaydoisoluong(product, -1)}>-</button>
            </div>
            <div className={classes.thanhtien}>
              {product.price * product.amount} $
            </div>
            <button className={classes.remove} onClick={() => removeProduct(product)}>X</button>
          </div>
        ))
      ) : (
        <p>Giỏ hàng của bạn đang trống.</p>
      )}
      <h2>Tổng tiền thanh toán: {tongtien} $</h2>
      <button className={classes.pay} onClick={onThanhToanHandler}>Thanh toán</button>
      <button className={classes.home} onClick={onCloseCartHandler}>Về trang chủ</button>

      {showModal && (
        <div className={classes.modal}>
          <div className={classes.modalContent}>
            <span className={classes.close} onClick={onCloseModalHandler}>&times;</span>
            <div className={classes.modalImages}>
              <img src={Anhqr} alt="Mã Qr" className={classes.maqr} />
            </div>
            <div className={classes.modalText}>
              <p><b>Mã QR chuyển khoản</b></p>
              <p><b>Tổng tiền thanh toán: {tongtien} $</b></p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Giohang;