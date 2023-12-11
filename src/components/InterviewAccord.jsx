import Ouestion from "./Question";
import data from "../helper/data.js";
import { useState } from "react";
import { arrowup, arrowdown } from "../helper/icons.js";

const InterviewAccord = () => {
  // const [show, setshow] = useState(false);
  //tek state ten olmaz hepsi açılır kapanır.

  // key e apiden gelen id kullanılır
  //? uid paketi de kullanılır

const [seciliId, setSeciliId] = useState("");

const handleState = (id) => {
  setSeciliId(id);
}

const isEqual = (id) => {
  return seciliId === id
}


  return (
    <div className="row">
      {data.map((item) => (
        <Ouestion key={item.id}  item={item} handleState={handleState} isEqual={isEqual} />
       
      ))}
        {/* {data.map((item) => (
          <details className="card">
            <summary className="ques">
             <h5>{item.question}</h5> 
             {arrowup} {arrowdown}
            </summary>
            <p>{item.answer}</p>
          </details>
        ))} */}



    </div>
  );
};

export default InterviewAccord;
