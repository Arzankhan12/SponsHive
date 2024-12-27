import React, { useRef } from "react";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import {
  setShowCards,
  setVal,
} from "../../features/LandingPage/LandingPageSlice";
import { useEffect } from "react";
import "./hiddencard.css";

export default function HiddenCards() {
  const setRef = useRef(null);
  const setRef2 = useRef(null);
  const setRef3 = useRef(null);
  const setBoxRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShowCards({ setRef, setRef2, setRef3, setBoxRef }));
  });

  return (
    <Box
      className="HiddenCards"
      sx={{ zIndex: 5, display: "none", position: "absolute" }}
      ref={setBoxRef}
      onClick={() => {
        setBoxRef.current.style.display = "none";
      }}
      onMouseLeave={() => {
        setBoxRef.current.style.display = "none";
        dispatch(setVal());
      }}
    >
      <div className="grow grow1" ref={setRef}>
        <div className="growin">
            <h3 className="grow-h5">Events </h3>
        </div>
      </div>
      <div className="grow grow2" ref={setRef2}>
        <div className="growin">
            <h3 className="grow-h5">Celebs </h3>
        </div>
      </div>
      <div className="grow grow3" ref={setRef3}>
        <div className="growin">
            <h3 className="grow-h5">Sponsors </h3>
        </div>
      </div>
    </Box>
  );
}
