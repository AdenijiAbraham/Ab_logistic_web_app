// import React from "react";
// import AbrahamLogo from "../assets/AbrahamLogo.png";

// const BrandLogo = () => {
//   return (
//     <div className="d-flex align-items-center gap-2">
//       {/* Logo image */}
//       <img
//         src={AbrahamLogo}
//         alt="Ab Logistics logo"
//         style={{ height: 56, width: "auto" }}
//       />

//       {/* Text with mixed case - explicitly override any text-transform */}
//       <div
//         className="fw-bold"
//         style={{ 
//           fontSize: "1.6rem", 
//           lineHeight: 1, 
//           transform: "translateY(6px)",
//           textTransform: "none" // This overrides any uppercase styling
//         }}
//       >
//         <span className="text-danger">Ab</span>
//         <span className="text-primary"> Logistics</span>
//       </div>
//     </div>
//   );
// };

// export default BrandLogo;




import "../CSS/footer.css";
import React from "react";
import AbrahamLogo from "../assets/AbrahamLogo.png";
import "aos/dist/aos.css";

const BrandLogo = () => {
  return (
    <div className="d-flex align-items-end gap-1">
      {/* Logo image */}
      <img
        src={AbrahamLogo}
        alt="Ab Logistics logo"
        style={{ height: 56, width: "auto" }}
      />

      {/* Text with mixed case - explicitly override any text-transform */}
      <div
        className="fw-bold"
        style={{ 
          fontSize: "1.6rem", 
          lineHeight: 1, 
          textTransform: "none"
        }}
      >
        <span className="text-danger mt-2"
        style={{ 
          fontSize: "2.9rem", 
          lineHeight: 0, 
          textTransform: "none"
        }}
        >Ab</span>
        <span id="llp"  
        style={{ 
          fontSize: "1.9rem", 
          lineHeight: 0, 
          textTransform: "none"
        }}
         > LOGISTICS LTD</span>
      </div>
    </div>
  );
};

export default BrandLogo;