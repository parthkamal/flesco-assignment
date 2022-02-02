import React from 'react';
import Item from './Item';


export default function Container(props) {
     return <div className="container" style={{backgroundColor:props.primary}}>
          <div className="heading">{props.obj.heading}</div>
          <ul style={{}}>
               {props.obj.items.map((item,index)=> {
                    return <Item title={item.title} index={index} secondary={props.secondary} cm={item.cm} lm={item.lm}/>
               })}
          </ul>

     </div>;

}
