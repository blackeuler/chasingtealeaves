import React from 'react';
import {Day} from './Day.js';




export const DayLayout = ({posts, onClickDay}) =>{
    
    let days = posts
    function compare(a,b) {
        if (a.id < b.id)
          return -1;
        if (a.id > b.id)
          return 1;
        return 0;
      }
      
      
    if(days){
        days= days.sort(compare);
        days=days.map((day)=>{
            return <Day onClickDay={onClickDay} iD={day.id}Cover={'https:'+day.cover.fields.file.url}key={day.id}name={day.title}/>
        })
        
    }
    
    return(
        
        <div className="flex days flex-wrap items-center justify-center">
            {days}
        </div>
    )
};
