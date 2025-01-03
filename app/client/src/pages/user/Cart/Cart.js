import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux"

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import { clearCart, removeFromCart, decrementProduct, incrementProduct } from "../../../Slices/CartSlice";
function Cart() {
  const cartProducts = useSelector((state) => state.cart.products);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const totalAmount = cartProducts.reduce((acc, product) => acc + product.SalePrice * product.quantity, 0);
 
  useEffect(() => {
    console.log(totalAmount)

  }, [cartProducts,totalAmount])
  const dispatch = useDispatch()
  return (
    <section className="h-110 h-custom" style={{ backgroundColor: "white" }}>
      {
        cartProducts.length > 0 ? (
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol className="d-flex justify-content-center" size="13">
                <MDBCard
                  className="ipad-card  card-registration card-registration-2"
                  style={{ borderRadius: "0px", boxShadow: "none" }}
                >
                  <MDBCardBody className="p-0">
                    <MDBRow className="g-0">
                      <MDBCol lg="8">
                        <div className="p-5">
                          <div className="d-flex justify-content-between align-items-center mb-5">
                            <MDBTypography
                              tag="h1"
                              className="fw-bold mb-0 text-black"
                            >
                              Shopping Cart
                            </MDBTypography>
                            <MDBTypography className="mb-0 text-muted">

                            </MDBTypography>
                            <MDBTypography style={{ cursor: "pointer" }} onClick={() => dispatch(clearCart())}>
                              Clear
                            </MDBTypography>
                          </div>



                          <div className="cart_items_contional">

                            {
                              cartProducts.map((product, index) => (
                                <><hr className="my-4" />
                                  <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                                    <MDBCol md="2" lg="2" xl="2">
                                      <MDBCardImage
                                        src={product.image[0]}
                                        fluid
                                        className="rounded-3"
                                        alt="Cotton T-shirt" />
                                    </MDBCol>
                                    <MDBCol md="3" lg="3" xl="3">
                                      <MDBTypography tag="h6" className="text-muted">
                                        {product.tags[0]}
                                      </MDBTypography>
                                      <MDBTypography tag="h6" className="text-black mb-0">
                                        {product.name}
                                      </MDBTypography>
                                    </MDBCol>
                                    <MDBCol
                                      md="3"
                                      lg="3"
                                      xl="3"
                                      className="d-flex align-items-center"
                                    >
                                      <MDBBtn onClick={() => dispatch(decrementProduct({ id: product._id }))} color="link" className="px-2">
                                        <MDBIcon fas icon="minus" />
                                      </MDBBtn>

                                      <MDBInput
                                        type="number"
                                        min="1"
                                        value={product.quantity}
                                        defaultValue={1}
                                        max="20"
                                        size="sm" />

                                      <MDBBtn onClick={() => dispatch(incrementProduct({ id: product._id }))} color="link" className="px-2">
                                        <MDBIcon fas icon="plus" />
                                      </MDBBtn>
                                    </MDBCol>
                                    <MDBCol md="3" lg="2" xl="2" className="text-end">
                                      <MDBTypography tag="h6" className="mb-0">
                                        Rs {product.SalePrice}
                                      </MDBTypography>
                                    </MDBCol>
                                    <MDBCol md="1" lg="1" xl="1" className="text-end">
                                      <Link onClick={() => dispatch(removeFromCart({ id: product._id }))} className="text-muted">

                                        <MDBIcon fas icon="times" />
                                      </Link>
                                    </MDBCol>
                                  </MDBRow></>

                              ))
                            }








                            <hr className="my-4" />


                          </div>


                          <div className="pt-5">
                            <MDBTypography tag="h6" className="mb-0">
                              <MDBCardText tag="a" href="#!" className="text-body">
                                <Link to="/shop">
                                  <MDBIcon fas icon="long-arrow-alt-left me-2" />
                                  Back to shop
                                </Link>
                              </MDBCardText>
                            </MDBTypography>
                          </div>
                        </div>
                      </MDBCol>

                      <MDBCol lg="4" className="bg-grey">
                        <div className="p-5">
                          <MDBTypography
                            tag="h3"
                            className="fw-bold mb-5 mt-2 pt-1"
                          >
                            Summary
                          </MDBTypography>

                          <hr className="my-4" />

                          <div className="d-flex justify-content-between mb-4">
                            <MDBTypography tag="h5" className="text-uppercase">
                              Products
                            </MDBTypography>
                            <MDBTypography tag="h5">{ totalAmount}Rs</MDBTypography>
                          </div>
                          <div className="d-flex justify-content-between mb-4">
                            <MDBTypography tag="h5" className="text-uppercase">
                              Shipping CHARGES
                            </MDBTypography>
                            <MDBTypography tag="h5">{250}Rs</MDBTypography>
                          </div>





                          <hr className="my-4" />

                          <div className="d-flex justify-content-between mb-5">
                            <MDBTypography tag="h5" className="text-uppercase">
                              Total price
                            </MDBTypography>
                            <MDBTypography tag="h5"> Rs {totalAmount+250}</MDBTypography>
                          </div>

                          <MDBBtn
                            href={isAuthenticated ? '/checkout' : 'login'}
                            style={{ backgroundColor: "#4BB497" }}
                            block
                            size="lg"
                          >
                            {isAuthenticated ? 'Checkout' : 'Register'}


                          </MDBBtn>
                        </div>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        ) : (
          <div className="no_items_inCart">
            <p className="no_cart_items_msg">
              There are no items in this cart
            </p>
            <Link to="/shop" className="no_cart_Link">
              CONTINUE SHOPPING
            </Link>
          </div>
        )
      }




    </section>
  );
}
export default Cart;
