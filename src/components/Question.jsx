import React, { useState } from "react";
import { arrowdown, arrowup } from "../helper/icons";

const Card = ({item, handleState, isEqual}) => {

  // const [show, setshow] = useState(false);
  // const [seciliId, setSeciliId] = useState("");

  return (
    // <div className="card-group">
    //     <div className="card">
    //       <div className="ques-answer">
    //         <h5>
    //           {item.question}
    //         </h5>
    //         <button className="btn-minus" onClick={() => setshow(!show)}>
    //          {show ? arrowup : arrowdown}
    //         </button>
    //       </div>
    //       <p>{show && item.answer}</p>
    //     </div>
    // </div>
    <div className="card-group">
        <div className="card">
          <div className="ques-answer">
            <h5>
              {item.question}
            </h5>
            <button className="btn-minus" onClick={() => handleState(item.id)} onDoubleClick={() => handleState(null)}>
            { isEqual(item.id)? arrowdown : arrowup}
            </button>
          </div>
          <p>{isEqual(item.id) && item.answer}</p>
        </div>
    </div>
  );
};

export default Card;
