function Home() {
  return (
    <div className="home-container">
      <img src="clothing.jpg" alt="Clothing" className="home-image" />
      <h1 className="home-header">Welcome to Our Clothing Store!</h1>
      <p className="home-description">Browse our latest collection of trendy clothing and footwear.</p>


      <div className="products-grid">
        <div className="product-card">
          <img src="shoe1.png" alt="Nike Air Zoom Pegasus 40" className="product-image" />
          <h2 className="product-name">Nike Air Zoom Pegasus 40</h2>
          <p className="product-description"><br/>This shoes offering unmatched comfort and performance. Perfect for  everyday wear, they provide support in every step

.</p>
          <h2 className="product-price">$129.00</h2>
          <button className="product-button">Add to cart</button>
        </div>

        <div className="product-card">
          <img src="flat.png" alt="Comfy flat" className="product-image" />
          <h2 className="product-name">Adidas Comfy flat</h2>
          <p className="product-description"><br/>Premium comfort and superior style for the modern look. They offer a relaxed fit and a minimalist style that complements any casual outfit effortlessly.</p>
          <h2 className="product-price">$150.00</h2>
          <button className="product-button">Add to cart</button>
        </div>

        <div className="product-card">
          <img src="coat.png" alt="Classic Women’s Coat" className="product-image" />
          <h2 className="product-name">Classic Coat</h2>
          <p className="product-description"><br/>A timeless and elegant coat designed to keep you warm and stylish.Perfect for chilly days, this versatile coat pairs easily with both casual and formal outfits.

</p>
          <h2 className="product-price">$100.00</h2>
          <button className="product-button">Add to cart</button>
        </div>

        <div className="product-card">
          <img src="scatf.png" alt="Crimson Luxe Scarf" className="product-image" />
          <h2 className="product-name">Crimson Luxe Scarf</h2>
          <p className="product-description"><br/>A luxurious maroon scarf crafted from soft, premium fabric, offering warmth and elegance.Its smooth texture make it the perfect accessory for any winter ensemble.

.</p>
          <h2 className="product-price">$50.00</h2>
          <button className="product-button">Add to cart</button>
        </div>

        <div className="product-card">
          <img src="purse.png" alt="Elegant Faux Leather Handbag" className="product-image" />
          <h2 className="product-name">Elegant Leather Handbag</h2>
          <p className="product-description"><br/>This purse features a timeless design that can complement any outfit, whether it's for a casual day out or an evening event.</p>
          <h2 className="product-price">$55.00</h2>
          <button className="product-button">Add to cart</button>
        </div>

        <div className="product-card">
          <img src="backpack.png" alt="Backpack" className="product-image" />
          <h2 className="product-name">Trendy Backpack for Women</h2>
          <p className="product-description"><br/>Made from durable material, it offers comfort and convenience for everyday use. .</p>
          <h2 className="product-price">$150.00</h2>
          <button className="product-button">Add to cart</button>
        </div>

        <div className="product-card">
          <img src="bag.png" alt="Bag" className="product-image" />
          <h2 className="product-name">Laptop bag for men</h2>
          <p className="product-description"><br/>It features a padded compartment to safely store your laptop, along with extra pockets for accessories and documents. .</p>
          <h2 className="product-price">$150.00</h2>
          <button className="product-button">Add to cart</button>
        </div>

        <div className="product-card">
          <img src="heels.png" alt="heels" className="product-image" />
          <h2 className="product-name">Elegance Heels</h2>
          <p className="product-description"><br/>Elevate your style with these stunning maroon heels.They add a bold pop of color to any outfit, perfect for both casual and formal occasions.</p>
          <h2 className="product-price">$80.00</h2>
          <button className="product-button">Add to cart</button>
        </div>

        <div className="product-card">
          <img src="PureWalk Sneakers.jpg" alt="PureWalk Sneakers" className="product-image" />
          <h2 className="product-name">PureWalk Sneakers</h2><br/>
          <p className="product-description">Perfect for everything from casual daily wear to athletic pursuits, our Sneakers are a must-have for any active woman's wardrobe.</p>
          <h2 className="product-price">$85.00</h2>
          <button className="product-button">Add to cart</button>
        </div>

        <div className="product-card">
          <img src="hoodie.png" alt="hoodie" className="product-image" />
          <h2 className="product-name">Stylish Hoodie</h2><br/>
          <p className="product-description"> A soft, cozy hoodie made from comfortable fabric, featuring a spacious front pocket and adjustable hood..</p>
          <br/> <h2 className="product-price">$100.00</h2>
          <button className="product-button">Add to cart</button>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Oneclick.com. All rights reserved.</p>
        <p>Follow us:</p>
        <ul className="footer-links">
          <li><a href="#" target="_blank"><i className="fa fa-facebook"></i> Facebook</a></li>
          <li><a href="#" target="_blank"><i className="fa fa-instagram"></i> Instagram</a></li>
          <li><a href="#" target="_blank"><i className="fa fa-twitter"></i> Twitter</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default Home;
