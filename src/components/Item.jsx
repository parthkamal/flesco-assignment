import React from 'react';
// #79d43c



export default function Item(props) {
     const lmManager=(lm)=>{
          if(lm>=0){
               return <div style={{color:"#79d43c"}}>{lm}</div>
          }else{
               return <div style={{color:"#cc3e2a"}}>{lm}</div>
          }
     }
     
  return <div className="list-item" style={{backgroundColor:props.index%2==0?props.secondary:'inherit'}}>
       <div className="left">
       <div>{props.title}</div>
       <div>vs. last month</div>
       </div>
       <div className="right">
            <div className="cm">{props.cm}</div>
            {lmManager(props.cm-props.lm)}
       </div>
  </div>;
}
