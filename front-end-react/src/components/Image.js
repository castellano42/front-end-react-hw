import React from 'react';



const Image = props => (
      <div className="image-wrapper">
        <img width ="200" height="200" src={props.url} onClick = {props.onClick} />
      </div>
);
  


export default Image;
