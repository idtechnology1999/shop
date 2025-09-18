
import "./App.css"; // external CSS fileag
import Img1 from "../img/S1302e9f0db9740168824e827ffa3e920G.jpg_480x480q75.jpg_.avif"
import img2 from "../img/images (1).jpg"
import Img3 from "../img/phone.jpg"
import Img4 from "../img/images (2).jpg"
import Img5 from "../img/images.jpg"
import Img6 from "../img/ke.jpg"


function User() {
  const userSession = JSON.parse(sessionStorage.getItem("UserSession") || "null");

  return (
    <div className="">
      welcome {userSession ? userSession.email : "No user found"}
    </div>
  );
}


function UserShop() {

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

  return (
    <>
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

      {/* Item Grid */}
   <div className="parent">


  {items.map((item)=>(
    
    <div className="child item card shadow-sm" key={item.id}>
    <div className="badge-free">Free {item.id}</div>
    <img src={item.image} className="card-img-top" alt="Item" />

    <div className="card-body text-center">
      <h5 className="card-title">{item.name}</h5>
      <p className="card-text text-success fw-bold">{item.price}</p>

     <a href={`/select/${item.id}`}  > <button className="btn btn-warning w-100">
        <i className="bi bi-bag-check-fill me-2"></i>
        Buy Now
      </button></a>
    </div>
  </div>

))}




</div>

    </>
  );
}

function Shopping() {
  return (
    <>

 
    <UserShop/>
    
    </>
  )
};

export default Shopping;