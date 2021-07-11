import React, {useEffect,useContext} from "react";
// import "./CoverPage.css";
import Part2 from "../components/design/Part2";
import Part1 from "../components/design/Part1";
import Part3 from "../components/design/Part3";
import CreateNewProfile from '../admin/CreateNewProfile';
const CoverPage = () => {

  return (
    <>
      <Part1 />
      <Part2 />
      <Part3 />
    </>
  );
};

export default CoverPage;
