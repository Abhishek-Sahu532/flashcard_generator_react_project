import React, { useRef } from 'react';
import {useReactToPrint} from 'react-to-print';
import ShowAllCreatedCards from '../Pages/ShowAllCreatedCards'


 const PrintComp = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  })

  return (
    <div>
      <ShowAllCreatedCards ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

 export default PrintComp;