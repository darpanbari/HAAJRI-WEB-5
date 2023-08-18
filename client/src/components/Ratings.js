import React, { useState } from "react";
import Rating from "@mui/material/Rating";

const Ratings = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <Rating
        name="simple-controlled"
        className="orange-1"
        style={{ marginRight: "100px" }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </>
  );
};

export default Ratings;
