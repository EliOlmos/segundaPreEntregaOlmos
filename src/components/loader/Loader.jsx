import React from "react";
import { useContext } from "react";
import { RotatingSquare } from "react-loader-spinner";
import { GlobalContext } from "../../context/GlobalContex";

const Loader = () => {
  const { loading } = useContext(GlobalContext);

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RotatingSquare
            height="150"
            width="150"
            color="#a6be06"
            ariaLabel="rotating-square-loading"
            strokeWidth="4"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : null}
    </>
  );
};

export default Loader;
