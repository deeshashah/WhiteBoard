import React from 'react'

const ParagraphWidget = ({widget, updateWidget}) => 
			<div className="container widget">
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <textarea 
                className="form-control" 
                rows="3" 
                placeholder="Put each item in a separate row"
                value={widget.text}
                onChange={event => {
                  widget.text = event.target.value
                  updateWidget(widget)
                }}></textarea>
            </div>
            <br></br>
            <input className="form-control" placeholder="Widget name"/>
            <br></br>
            <h3>Preview</h3>
            <p>{widget.text}</p>
          </div>
        </div>
    </div>

export default ParagraphWidget