import React from "react";

// import img4 from "../../assets/imggg.jpg";
import "./Part1.css";
import Header from'../Header';
const Part1 = () => {
  // const img4 =
  //   "";
const img4 ='https://staticg.sportskeeda.com/editor/2021/06/0c449-16239060827699-800.jpg';
  return (
    <>
      <div className="back__img ">
        {/*-----------------------*/}
<Header backColor='transparent'/>
        {/*-----------------------*/}
        <div className="container ">
          <div className=" handle__margin row ">
            <div className="col-lg-6 col-sm-6 mx-auto  text__color handle__margin  ">
              <h1 className="display-4  text-danger p-2 font-weight-bold">Play To Win</h1>
              <div className="border border-info bg-danger w-75 mt-3 rounded p-3 back__part1__title">
              <p className=" text-title  display-5   text-white ">
                INDIA’S LARGEST GROWING ESPORTS COMMUNITY</p>
                <br/>
                <p className=" text-white display-5 text-title ">Participate in tournaments, watch livestreams, chat with other
                gamers,<br/>
              discover content and a lot more!
              </p></div>
              {/*<p className="display-5"> discover content and a lot more!</p>*/}
              <button
                type="button"
                className=" col-lg-4 col-sm-6 btn-lg btn mt-4 btn-danger btn1"
              >
                PLAY NOW
              </button>
              <button
                type="button"
                className="col-lg-4 col-sm-6 border border-white btn-lg btn__hover bg-transparent text-white btn mt-4 ml-md-4  btn2"
              >
                EA NEWS
              </button>
            </div>
            <div className="col-lg-6 col-sm-6   handle__margin"   >
              <img
                src={img4}
                style={{ height: "auto", width: "100%" }}
                class="mt-4"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/*<div className="under__cover"></div>*/}
      {/* <div className="conatiner"></div> */}
    </>
  );
};

export default Part1;
