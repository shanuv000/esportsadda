import React from "react";
import "./Part3.css";
import imgCoin from "../../assets/coin.png";
const Part3 = () => {
  //   const imgCoin =
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfiuaqcb_8gsZcri6fo1LDO80Ym4UeJn2yKW2gSJ9IDry9d5QLqCH2-9r1AGEKgUL2q8k&usqp=CAU";
  const texts_arr = [
    {
      title: "FREE TOURNAMENTS",
      body: "WE ORGANISE DAILY FREE MATCHES WITH CASH PRIZE AND OPEN TO ALL. IT WILL BE ORGANISED IN ALL FORMAT AND FREE FOR ALL.",
      border:'success ',
      textColor:'white'
    },
    {
      title: "PAID TOURNAMENTS",
      body: "WE ALSO ORGANISE DAILY PAID CUSTOM WITH PER KILL PRIZE AND WINNER CASH PRIZE. SOME DAILY PAID TDM WILL ALSO BE ORGANISED.",
      border:'warning ',
      textColor:'white'

    },
    {
      title: "PRACTICE SCRIMS",
      body: "DAILY PRACTICE CUSTOMS T1, T2 & T3 MATCHES WILL BE ORGANISED AND MONTHLY PERFORMER GETS SOME EXCLUSIVE REWARDS.",
      border:'light ',textColor:'white'
    },
    {
      title: "BIG TOURNAMENTS",
      body: "A NATIONAL LEVEL ESPORTS TOURNAMENT WILL BE ORGANISED TWICE A YEAR WITH A HUGE PRIZE POOL AND WITH SOME INVITED TEAMS.",
      border:'info ',      textColor:'white'

    },
  ];
  return (
    <>
      <div className="back_3">
        <div className="container">
          <div className='margin__part3 p-2'>
          <h1 className="text-danger text-center font-weight-bold">OUR GAMING FEATURES</h1>
          <p className="text-white text-center ">
            Play competitive tournaments and win amazing cash prizes instantly!
            Join any of the multiple tournaments happening every hour, every
            day.
          </p>
          <div className="card-deck   card__part3">

            {texts_arr.map((texts) => (

              <div className={`card  border translate__new bg-dark border-${texts.border}`} >
                <div className="card-body ">
                  <h4 className="card-title text-danger font-weight-bold ">{texts.title}</h4>
                  <p className={`card-text font-weight-normal text-${texts.textColor}`}>{texts.body}</p>
                </div>
              </div>
            ))}
          </div>
<div className="part3__part2Margin">
          <div className="row">
            <div className="col-lg-2  col-sm-12 text-center">
              <img src={imgCoin} alt={''} className="img-fluid" />
            </div>
            <div className="col-lg-8 col-sm-12  text-center">
              <h1 className='display-5 text-danger font-weight-bold'>Refer To Your Friends Now And Get 25 </h1>
              <p className="text-white mt-2 ">
                EA Token Awesome Sign Up Offer Get 10 Token on Registration
                equivalent to 10rs. 1 token= 1 rupees
              </p>
            </div>
            <div className="col-lg-2 col-sm-12  mt-3 text-center ">
              <button className="btn btn-lg btn-outline-danger text-red">
                Refer Now
              </button>
            </div>
            {/* <div className="col-md-2 col-sm-12"></div> */}
          </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Part3;
