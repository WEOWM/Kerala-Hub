import React from "react";
import "./CartingPage.css";
import { useCart } from "react-use-cart";

const Cartng = () => {
  // const { cartList } = useSelector((state) => state.CartListSlice)

  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    cartTotal,
    emptycart,
    removeItem,
  } = useCart();

  // const [total, setTotal]=useState()
  var total = [];
  {
    items.map((data) => {
      return (total = data);
    });
  }

  console.log("swfeewsfewef:::::::::::::::", total);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div className="card-header bg-dark p-3">
        <div className="card-header-flex">
          <h5 className="text-white m-0">
            Cart Calculation {items.length > 0 ? `(${items.length})` : ""}
          </h5>
          {/* {items.length > 0 ? (
            <button
              className="btn btn-danger mt-0 btn-sm"
                onClick={() => emptycart()}
            >
              <i className="fa fa-trash-alt mr-2"></i>
              <span>Empty Cart</span>
            </button>
          ) : (
            ""
          )} */}
        </div>
      </div>
      <div className="card-body p-0">
        {items.length === 0 ? (
          <table className="table cart-table mb-0">
            <tbody>
              <tr>
                <td colSpan="6">
                  <div className="cart-empty">
                    <i className="fa fa-shopping-cart"></i>
                    <p>Your Cart Is empty</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <table className="table cart-table mb-0">
            <thead>
              <tr>
                <th>Action</th>
                <th>Product</th>
                <th>Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th className="text-right">
                  <span id="amount" className="amount">
                    Total Amount
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <button
                        className="prdct-delete"
                        onClick={() => removeItem(data.id)}
                      >
                        <i className="fa fa-trash-alt"></i>
                      </button>
                    </td>
                    <td>
                      <div className="product-img">
                        <img src={data.images} alt="" />
                      </div>
                    </td>
                    <td>
                      <div className="product-name">
                        <p>{data.title}</p>
                      </div>
                    </td>
                    <td>₹{data.price}</td>
                    <td>
                      <div className="prdct-qty-container">
                        <button
                          className="prdct-qty-btn"
                          type="button"
                            onClick={() => updateItemQuantity(data.id, data.quantity - 1)}
                        >
                          <i className="fa fa-minus"></i>
                        </button>
                        <input
                          type="text"
                          name="qty"
                          className="qty-input-box"
                          value={data.quantity}
                          disabled
                        />
                        <button
                          className="prdct-qty-btn"
                          type="button"
                            onClick={() => updateItemQuantity(data.id, data.quantity + 1)}
                        >
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </td>
                    <td className="text-right">₹{data.price}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <th>&nbsp;</th>
                <th colSpan="3">&nbsp;</th>
                <th>
                  Items in Cart<span className="ml-2 mr-2">:</span>
                  <span className="text-danger">{items.length > 0 ? `${items.length}` : ""}</span>
                </th>
                <th className="text-right">
                  Total Price<span className="ml-2 mr-2">:</span>
                  <span className="text-danger">₹{cartTotal}</span>
                </th>
              </tr>
            </tfoot>
          </table>
        )}
      </div>
    </div>
  );
};

export default Cartng;
