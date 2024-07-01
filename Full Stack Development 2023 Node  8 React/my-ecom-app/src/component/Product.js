import './Product.css';



/* Functional Component Product Receiving Props - In The Product Component, Props Are Received From Its Parent Component Where Product Is Likely Being Used. */
const Product = ({ _id, title, thumbnail, price, discountPercentage, rating, handleClick }) => {
  return (
    <>
      {/* Container For The Entire Product Card, Using Bootstrap Classes For Layout */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">

            {/* Card Container */}
            <div className="card">

              {/* Container For Product Image And Details */}
              <div className="image-container">
                {/* Top section in the card */}
                <div className="first">
                  {/* Display discount percentage and wishlist heart icon */}
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="discount">-{discountPercentage}%</span>
                    {/* Heart Icon For Wishlist Functionality */}

                    <span className="wishlist">

                    </span>

                  </div>
                </div>
                {/* Product Thumbnail Image */}
                <img
                  src={thumbnail}
                  className="img-fluid rounded thumbnail-image"
                  alt={title}
                />
              </div>

              {/* Container For Product Details */}
              <div className="product-detail-container p-2">

                {/* Title And Price Section */}
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="dress-name">{title}</h5>
                  {/* Display New And Old Prices */}
                  <div className="d-flex flex-column mb-2">
                    <span className="new-price">$ {Math.round(price - discountPercentage * price / 100)}</span>
                    <small className="old-price text-right">$ {price}</small>
                  </div>
                </div>

                {/* Rating Section */}
                <div className="d-flex justify-content-between align-items-center pt-1">
                  <div>
                    <i className="fa fa-star-o rating-star" />
                    {/* Display Rating Number */}
                    <span className="rating-number">{rating}</span>
                  </div>

                  <span className="buy" onClick={() => handleClick(_id)}>Delete</span>

                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Product; 