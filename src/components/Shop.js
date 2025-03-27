import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Shop.module.css';
import Modal from './Modal';
import Header from './Header';
import Giohang from './Giohang';
import ImageSlider from './ImageSlider';
import Footer from './Footer';


import anh2 from '../banner-la-gi.jpg';
import anh3 from '../laptop-chung-800-450_800x450.png';
import anh4 from '../laptop-hp-giam-den-22-hoac-tra-gop-0-gia-chi-tu-9-thumb-560x292.jpg';

import gif from '../gifit_1720782958318.gif';

export const categories = [
  { id: 1, name: 'Công nghệ', apiCategory: 'electronics' },
  { id: 3, name: 'Quần, Áo Nam', apiCategory: "men's clothing" },
  { id: 4, name: 'Quần, Áo Nữ', apiCategory: "women's clothing" },
  {id: 2, name: 'Trang sức', apiCategory: "jewelery"}
];

function Shop({ cart, setCart, isShowCart, setShowCart }) {
  const navigate = useNavigate();
  const [selectedCategory, setCategory] = useState(null);
  const [selectedProduct, setProduct] = useState(null);
  const [isShowModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?sort=desc')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const onClickCategoryHandler = (categoryName) => {
    setCategory(categoryName);
  };

  const onClickProductHandler = (product) => {
    setProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const onClickAddtoCartHandler = (product) => {
    const arr = [...cart];
    const existingProduct = arr.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.amount += 1;
    } else {
      product.amount = 1;
      arr.push(product);
    }
    setCart([...arr]);
    setCartCount(cartCount + 1);
  };

  const removeSingleOrder = (product) => {
    const arr = [...cart];
    const existingProduct = arr.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.amount -= 1;
      if (existingProduct.amount === 0) {
        const newCart = arr.filter((item) => item.id !== product.id);
        setCart(newCart);
      } else {
        setCart(arr);
      }
      setCartCount(cartCount - 1);
    }
  };

  const removeAllOrders = () => {
    setCart([]);
    setCartCount(0);
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const resetShop = () => {
    setCategory(null);
    setSearchTerm('');
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  let filterProduct = [...products];
  if (selectedCategory != null) {
    filterProduct = filterProduct.filter(
      (product) => product.category === selectedCategory
    );
  }
  if (searchTerm) {
    filterProduct = filterProduct.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  const images = [anh2, anh3, anh4];

  return (
    <div className={classes.container}>
      <Header
        soluong={cart.reduce((total, item) => total + item.amount, 0)}
        setShowCart={setShowCart}
        onSearch={handleSearch}
        onReset={resetShop}
      />
      <div className={classes.menu}>
        <div className={classes.logo}></div>
      </div>
      <ImageSlider images={images} />
      <div className={classes.row}>
        {isShowModal && selectedProduct && (
          <Modal closeModal={closeModal}>
            <div className={classes.row}>
              <div className={classes.left}>
                <img
                  src={selectedProduct.image}
                  className={classes.proding}
                  alt={selectedProduct.title}
                />
              </div>
              <div className={classes.right}>
                <h3>{selectedProduct.title}</h3>
                <h4>{selectedProduct.price}</h4>
                <p>{selectedProduct.description}</p>
              </div>
            </div>
          </Modal>
        )}
      </div>
      <div className={classes.row}>
        <div className={classes.left}>
          <h2>Danh mục sản phẩm</h2>
          <img src={gif} alt="Sparkle Gif" className={classes.gif} />
          {categories && categories.map((cate) => (
            <div
              className={classes.cat}
              key={cate.id}
              onClick={() => onClickCategoryHandler(cate.apiCategory)}
            >
              {cate.name}
            </div>
          ))}
        </div>
        <div className={classes.right}>
          <h2>Danh sách sản phẩm</h2>
          {!isShowCart && (
            <>
              <div className={classes.boxes}>
                {filterProduct.length > 0 ? (
                  filterProduct.map((pro) => (
                    <div className={classes.pro} key={pro.id}>
                      <h3>{pro.title}</h3>
                      <img
                        src={pro.image}
                        className={classes.proding}
                        alt={pro.title}
                      />
                      <h4>{pro.price} $</h4>
                      
                      <button onClick={() => onClickProductHandler(pro)}>
                        Xem chi tiết
                      </button>
                      &nbsp;
                      <button onClick={() => onClickAddtoCartHandler(pro)}>
                        Đặt hàng
                      </button>
                      &nbsp;
                      <button onClick={() => removeSingleOrder(pro)}>
                        Xóa đơn hàng
                      </button>
                      &nbsp;
                      <button onClick={() => removeAllOrders()}>
                        Xóa toàn bộ đơn hàng
                      </button>
                    </div>
                  ))
                ) : (
                  <p className={classes.thongbao}>
                    <b>Không tìm thấy sản phẩm nào</b>
                  </p>
                )}
              </div>
            </>
          )}
          {isShowCart && (
            <Giohang
              setShowCart={setShowCart}
              cart={cart}
              setCart={setCart}
              setCartCount={setCartCount}
            />
          )}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Shop;
