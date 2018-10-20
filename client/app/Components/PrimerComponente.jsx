import React from 'react'
import {withStyles} from '@material-ui/core/styles'

const styles = {

}
class PrimerComponente extends React.Component {
    render() {
        return(
            <div>
                <div> 
                <div className="card" >
  <img className="card-img-top" src=".../100px180/" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
                </div>

                <div> 
                <div className="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
  </div>
</div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PrimerComponente)