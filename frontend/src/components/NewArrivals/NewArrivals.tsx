function NewArrivals() {
  return (
    <div className="container">
      <h1 className="new-arrivals_title">New Arrivals</h1>
      <div className="new-arrivals_container">
        <div className="single-product_container">
          <div className="product-picture"></div>
          <div className="product-info">
            <p>Xiaomi Redmi Note 11</p>
            <p>899$</p>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;
