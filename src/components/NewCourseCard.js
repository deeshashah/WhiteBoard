import React, {Component} from 'react'

class NewCourseCard extends Component{
    constructor(props){
      super(props)
      this.newCourse = ""
    }

    formChanged = (event) => {
      this.newCourse = event.target.value;
    }

    render() {
      return(
        <div className="col-sm-6 col-md-4 col-lg-2">
          <div className="card mb-4"
               styles={{width: '18rem'}}>
            <img className="card-img-top"
                 src="https://picsum.photos/300/200"/>
            <div className="card-body">
              <h5 className="card-title">New Course</h5>
              <p className="card-text">Card text</p>
              <form>
              <div class="form-group" id="inputFld">
                <input onChange={this.formChanged} placeholder="New course title"/>
              </div>
              </form>
              <br></br>
              <a onClick={() => this.props.addCourse(this.newCourse)}
                 className="btn btn-success">Add Course</a>
            </div>
          </div>
        </div>
      )

    }
}

  
export default NewCourseCard;