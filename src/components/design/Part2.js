import React from "react";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/pub.svg";
import "./Part2.css";
const Part2 = () => {
  const styles = { margin: "10px" };

  return (
    <>
      <div className="back__2  ">
        <div className="container">
          <div
            className="row handle__margin__part2 "
            // style={{ border: "1px dotted green" }}
          >
            <div className="col-md-6 col-sm-12  w-100 p-3" >
              <div className="row mx-auto">
                <img src={img3} className="imgg1 col-md-3 col-sm-6 " alt="" />
                <img src={img1} alt="" className="imgg2 col-md-3  col-sm-6 " />
                <img src={img4} className="imgg3 col-sm-6 col-md-3 " alt="" />
                <img src={img2} alt="" className="imgg4  col-sm-6 col-md-3 " />
              </div>

              {/* <div class="w-sm-100"></div> */}
            </div>

            <div className="d-flex  flex-column w-100 p-3  mt-4 col-md-6 col-sm-12 " >
              <h1 className="text-danger mx-auto text-center mt-5 font-weight-bold">EA FEATURED GAMES</h1>
              <ul
                class="h-75 d-inline-block mt-3 bg-transparent mx-auto"
                style={{ color: "white" }}
              >
                <p class="p2 text-white mt-3">VALORANT</p>
                <p class="p2 text-white mt-3">BATTLEGROUNDS MOBILE INDIA</p>
                <p class="p2 text-white mt-3">PUBG PC</p>
                <p class="p2 text-white mt-3">FREE FIRE</p>
                <p class="p2 text-white mt-3">UPCOMING MORE......</p>
              </ul>

              <button className="h-25 d-inline-block btn3 btn p3 m-5 button__part2  btn-sm border border-danger mt-4">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
      {/*<div className="under__cover"></div>*/}
    </>
  );
};

export default Part2;
