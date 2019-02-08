import React from 'react'


const ImageWidget = ({widget, updateWidget, checked}) =>
      <div className="row">
        <div className="col-md-12">
            {
                checked?<div> <input
                        type="text"
                        className="form-control"
                        placeholder="http://lorempixel.com/300/150"
                        value={widget.src}
                        onChange={event => {
                            widget.src = event.target.value
                            updateWidget(widget)
                        }}/>
                    <br></br>
                    <input type="text" className="form-control"aria-describedby="emailHelp" placeholder="Widget name"/>
                    <br></br>
                </div>:''
            }

          <h3>Preview</h3>
          <img src={widget.src}/>
          <br></br>
        </div>
      </div>

export default ImageWidget