import React from 'react';
import './Day.css';
export const Day = (props) =>{

    const styles = {
        
        backgroundImage:`url(${props.Cover})`,
      }
    return(
        
         <div id={props.iD}onClick={props.onClickDay}role="img" aria-label={`${props.name}`} className=" link  dt tc hide-child br2 cover bg-center grow br100 w-100 h100 ma1 card tc ba bw b--pin" style={styles} >
            <span className="gold white dtc v-mid w-100 h-100 child bg-black-40 pa5 bg-animate hover-bg-red tc v-mid  ">
                <p>
                    {`Day ${props.iD}`}
                </p>
            </span>
        </div> 
        
        
        
    )
};