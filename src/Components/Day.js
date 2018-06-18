import React from 'react';
import './Day.css';
export const Day = (props) =>{

    const styles = {
        
        backgroundImage:`url(${props.Cover})`,
      }
    return(
        
         <div id={props.iD}onClick={props.onClickDay}role="img" aria-label={`${props.name}`} className="  grow br2 ma1 card tc " style={styles} >
            <span className="white   ">
                <p>
                    {`Day ${props.iD}`}
                </p>
            </span>
        </div> 
        
        
        
    )
};