import React, { useState } from "react";
import Product from "./Product";
import Header from "./Header";
import Cart from "./Cart";

function Parent() {
  // Khai bao state luu tru dataProduct
  const [dataProduct, setDataProduct] = useState([
    {
      id: 1,
      title: "Cola",
      price: 6,
      image:
        "https://ayb.akinoncdn.com/products/2019/01/18/3544/5aa1ee14-1c83-4213-a62b-773c4785e187_size780x780_quality60_cropCenter.jpg",
    },

    {
      id: 3,
      title: "Sprite",
      price: 5,
      image: "https://images.ofix.com/product-image/s99509_2.jpg",
    },
    {
      id: 4,
      title: "Ayran",
      price: 3,
      image:
        "https://konyamevlana.com/florya/wp-content/uploads/2020/12/sutas-ayran-285ml.jpg",
    },
    {
      id: 5,
      title: "Salgam",
      price: 4,
      image: "http://esenlik.com.tr//images/prod/5704.jpg",
    },
    {
      id: 6,
      title: "Cay",
      price: 3,
      image:
        "https://evidea.akinoncdn.com/products/2021/08/05/62421/e5bda9ce-91bf-453a-96e1-acea983efb2a.jpg",
    },
    {
      id: 7,
      title: "Kahve",
      price: 10,
      image:
        "https://media.istockphoto.com/photos/turkish-coffee-foamy-picture-id510413268?k=20&m=510413268&s=612x612&w=0&h=llBhDOUbNHaQXc-ch7UQ_OIWkmJAJUzaf6oZavKUrmQ=",
    },
    {
      id: 8,
      title: "Soda",
      price: 4,
      image: "http://esenlik.com.tr//images/prod/2928.jpg",
    },
    {
      id: 9,
      title: "Bisiklet",
      price: 1000,
      image:
        "https://productimages.hepsiburada.net/s/37/375/10567819821106.jpg",
    },

    {
      id: 11,
      title: "Bugatti Chiron",
      price: 2500000,
      image:
        "https://productimages.hepsiburada.net/s/34/375/10460429320242.jpg",
    },
    {
      id: 12,
      title: "Iskender",
      price: 50,
      image:
        "https://img3.aksam.com.tr/imgsdisk/2020/10/31/t25_en-kolay-iskender-sosu-ta-744.jpg",
    },
    {
      id: 13,
      title: "Lahmacun",
      price: 12,
      image:
        "https://cdn.yemek.com/mnresize/940/940/uploads/2020/04/lahmacun-yeni-one-cikan.jpg",
    },
    {
      id: 14,
      title: "Malikane",
      price: 2500000000,
      image:
        "https://foto.haberler.com/haber/2020/12/07/israil-de-4-odali-malikane-250-milyon-dolarda-13784975_amp.jpg",
    },
    {
      id: 15,
      title: "Helicopter",
      price: 28750000,
      image:
        "https://image.elitema.com.tr/db_images/224/4/11/arimg1138-8---bell-429-exter%C4%B1or.jpg",
    },
    {
      id: 16,
      title: "Luxury Yatch",
      price: 17500000,
      image: "https://d.neoldu.com/news/57966.jpg",
    },
    {
      id: 17,
      title: "Limosine",
      price: 1000000,
      image:
        "https://img.paratic.com/dosya/2015/03/dunyanin-en-pahali-limuzinleri-1024x683.jpg",
    },
    {
      id: 18,
      title: "Ada",
      price: 125000000,
      image: "https://icdn.ensonhaber.com/resimler/galeri/1_11195.jpg",
    },
    {
      id: 22,
      title: "Stadium",
      price: 2500000,
      image:
        "https://cdnuploads.aa.com.tr/uploads/Contents/2020/06/01/thumbs_b_c_dc24a18cc233bd960f410911f5d39bf2.jpg",
    },
    {
      id: 23,
      title: "Bitcoin",
      price: 60000,
      image:
        "https://www.cumhuriyet.com.tr/Archive/2021/9/27/1872247/kapak_141123.jpg",
    },
  ]);

  //   khai bao chua product
  const [cartProduct, setCartProduct] = useState([]);

  const addToCart = (product) => {
    const sameProduct = cartProduct.find((item) => item.id === product.id);
    if (sameProduct) {
      sameProduct.quantity += 1;
      setCartProduct([...cartProduct]);
    } else {
      setCartProduct([...cartProduct, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity >= 1) {
      const editQuantity = cartProduct.map((e) =>
        e.id === itemId ? { ...e, quantity: newQuantity } : e
      );
      setCartProduct(editQuantity);
    }
  };

  const handleDelete = (index) => {
    const deleteTodo = [...cartProduct];
    deleteTodo.splice(index, 1);
    setCartProduct(deleteTodo);
  };

  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="header-menu">
            <div className="header-menu-1">
              <ul>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Privacy Pollcy</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
                <li>
                  <a href="">Terms Of Use</a>
                </li>
              </ul>
            </div>
            <div className="header-menu-2">
              <ul>
                <li>
                  <i className="fa-brands fa-facebook" />
                </li>
                <li>
                  <i className="fa-brands fa-twitter" />
                </li>
                <li>
                  <i className="fa-brands fa-pinterest" />
                </li>
                <li>
                  <i className="fa-brands fa-instagram" />
                </li>
                <li>
                  <i className="fa-brands fa-youtube" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <section className="box-1">
          <div className="container">
            <Header />
          </div>
        </section>
        <section className="box-3">
          <div className="container">
            {/* hien thi du lieu tu state */}

            <Product
              dataProduct={dataProduct}
              addToCart={addToCart}
              cartProduct={cartProduct}
            />
          </div>
        </section>
      </main>
      <div className="box-all">
        <div className="table_list">
          <Cart cartProduct={cartProduct} updateQuantity={updateQuantity} handleDelete={handleDelete} />
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="footer-menu">
            <div className="footer-menu-1">
              <div className="menu-first">
                <div>
                  <span>TECH</span>LIGHT
                </div>
                <ul>
                  <li>
                    Technology is constantly evolving, shaping the way we live,
                    work, and interact with the word around us.
                  </li>
                  <li>Advanced Hackathon 01</li>
                </ul>
              </div>
            </div>
            <div className="footer-menu-1">
              <div className="footer-menu-1-center">
                <p>MORE FROM US</p>
                <ul>
                  <li>Iphone</li>
                  <li>MacBook</li>
                  <li>Best Laptop</li>
                  <li>Laptop Coupons</li>
                </ul>
              </div>
            </div>
            <div className="footer-menu-1">
              <div className="footer-menu-1-center">
                <p>ABOUT US</p>
                <ul>
                  <li>Advertise</li>
                  <li>More About Us</li>
                  <li>Newsletter</li>
                  <li>Licensing</li>
                </ul>
              </div>
            </div>
            <div className="footer-menu-1">
              <div className="menu-last">
                <p>POLICIES</p>
                <ul>
                  <li>Privacy Policy</li>
                  <li>Terms of Use</li>
                  <li>Cookies</li>
                  <li>Copyright</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Parent;
