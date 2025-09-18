import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Img1 from "../img/S1302e9f0db9740168824e827ffa3e920G.jpg_480x480q75.jpg_.avif"
import img2 from "../img/images (1).jpg"
import Img3 from "../img/phone.jpg"
import Img4 from "../img/images (2).jpg"
import Img5 from "../img/images.jpg"
import Img6 from "../img/ke.jpg"
import "./App.css"; // external CSS fileag

function User() {
  const userSession = JSON.parse(sessionStorage.getItem("UserSession") || "null");

  return (
    <div className="">
      welcome {userSession ? userSession.email : "No user found"}
    </div>
  );
}


function ReviewPage() {
  const [defaultPrice, setdefaultPrice] =useState<number>(0)
const [defaultValue, setdefaultvalue] = useState(1)
// const [total, settotal] = useState<number>(0)


    const items = [
    {
        id: 1,
        name: "Power Bank",
        price : 35000,
        image : Img1
    }
,

     {
        id: 2,
        name: "Kitchen Appliance",
        price : 35000,
        image : img2
    }, {
        id: 3,
        name: "Phone",
        price : 35000,
        image : Img3
    }, {
        id: 4,
        name: "Bag",
        price : 35000,
        image : Img4
    }, {
        id: 5,
        name: "Kitchen Appliance",
        price : 35000,
        image : Img5
    }, {
        id: 6,
        name: "Kettle",
        price : 35000,
        image : Img6
    }
]
const {id} = useParams<{id:string}>()
const item = items.find((i)=>i.id === Number(id))

useEffect(()=>{
if(item){
setdefaultPrice(item?.price)
// settotal(Number(item?.price))
}
}, [item])


 const total=  defaultPrice * defaultValue



function decres(){
  setdefaultvalue(prev => Math.max(1, prev - 1));

}

function incres(){
setdefaultvalue((prev)=>(prev + 1))
}
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🛒 Review Your Selection</h2>

      <div className="card shadow p-3 mb-3">
        <div className="row align-items-center">
          {/* Image */}
          <div className="col-md-3 text-center">
            <img
              src={item?.image}
              alt="Selected Item"
              className="img-fluid rounded"
              style={{ maxHeight: "120px" }}
            />
          </div>

          {/* Item Details */}
          <div className="col-md-6 text-center">
            <h5 className="fw-bold">ID-Tech:  {item?.name}</h5>
            <p className="text-muted">Unit Price: {defaultPrice}</p>

            {/* Quantity controls */}
            <div className="d-flex justify-content-center align-items-center">
              <button className="btn btn-outline-danger me-2" onClick={decres} disabled={defaultValue==1?true:false}>
                <i className="bi bi-dash-lg"></i>
              </button>

              <span className="fw-bold fs-5">{defaultValue}</span>

              <button className="btn btn-outline-success ms-2" onClick={incres}>
                <i className="bi bi-plus-lg"></i>
              </button>
            </div>
          </div>

          {/* Total */}
          <div className="col-md-3 text-center">
            <h5 className="fw-bold">Total:{total}</h5>
            <button className="btn btn-primary w-100 mt-2">
              <i className="bi bi-credit-card me-2"></i> Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


function Select() {
  return (
    <div>
             {/* Header */}
      <header className="shop-header">
        <div className="container-fluid fluid">
          <div className="logo">
            <i className="bi bi-gift-fill me-2 text-warning"></i>
            <span>ID-Tech</span>
          </div>
          <div className="select">
            <i className="bi bi-cart-fill me-2 text-light"></i>
            Select Item For Free
          </div>
        </div>
        <div className="container">
            <div className="row">
                <User/>
            </div>
        </div>
      </header>

        <ReviewPage/></div>
  )
};

export default Select;
