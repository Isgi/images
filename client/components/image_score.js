import React from 'react';


const ImageScore = (props) => {
  const {ups, downs} = props;
  console.log(props);
  const upsPersent = `${100*(ups/(ups+downs))}%`;
  const downsPersent = `${100*(downs/(ups+downs))}%`;

  return(
    <div>
      Ups/Down
      <div className="progress">
        <div style={{width:upsPersent}} className="progress-bar progress-bar-success progress-bar-striped"/>
        <div style={{width:downsPersent}} className="progress-bar progress-bar-danger progress-bar-striped"/>
      </div>
    </div>

  )
}

export default ImageScore;
