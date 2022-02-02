import React from 'react';

export default function Item(props) {
     const lmManager=(lm)=>{
          if(Number.isNaN(lm)){
               return ;
          }else if(lm>=0){
               return <div style={{color:"#79d43c"}}>{'('+lm+')'}<span style={{backgroundColor:"#79d43c"}} className='dot'></span></div>
          }else{
               return <div style={{color:"#cc3e2a"}}>{'('+lm+')'}<span style={{backgroundColor:"#cc3e2a"}} className='dot'></span></div>
          }
     }
     
  return <div className="list-item" style={{backgroundColor:props.index%2===0?props.secondary:'inherit'}}>
       <div className="left">
       <div>{props.title}</div>
       <div>vs. last month</div>
       </div>
       <div className="right">
            <div >{props.cm}</div>
            {lmManager(props.cm-props.lm)}
       </div>
  </div>;
}
