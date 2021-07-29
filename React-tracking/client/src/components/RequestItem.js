import React, {useState,useCallback, useRef,useEffect} from "react";
import '../App.css';

function RequestItem(props) {
    const { requestest,parentStateSetter } = props;
    const childRef = useRef();
    const [childState, setChildState] = useState(0);
  
    useEffect(() => {
      parentStateSetter(childState);
    }, [parentStateSetter, childState]);
  
    const onSliderChangeHandler = () => {
    //pass slider's event value to child's state
      setChildState(requestest.title);
    };
    return (
       
           <div class="request-title">
               <div className="box" >
               <p>{requestest.title}</p>
              
               </div>
           </div>
            // <img  className="row_poster"  src={requestest.img} alt=""/>
           
        
           

               
        
        
        
    );
}
export default RequestItem;