import React from 'react'

const LinkWidget = ({widget, updateWidget, checked}) =>

        <div className="row">
          <div className="col-md-12">
              {
                  checked?
                  <div>
                      <input
                          type="text"
                          className="form-control"
                          placeholder="http://youtube.com/300/150"
                          value={widget.href}
                          onChange={event => {
                              widget.href = event.target.value
                              updateWidget(widget)
                          }}
                      />
                      <br></br>
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Link text"
                          value={widget.title}
                          onChange={event => {
                              widget.title = event.target.value
                              updateWidget(widget)
                          }}
                      />
                      <br></br>
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Widget name"
                      />
                      <h3>Preview</h3>
                  </div>:''
              }

            <a href={widget.href}>{widget.title}</a>
            <br></br>
          </div>
        </div>




export default LinkWidget;