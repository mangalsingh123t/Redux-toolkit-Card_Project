import ClipLoader from "react-spinners/ClipLoader";

function Loding() {
  return (
    <div className="sweet-loading">
      <ClipLoader
        color={"#000"}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loding;