import React from 'react'
import {withStyles} from '@material-ui/core/styles'

const styles = {

}
class TercerComponente extends React.Component {
    render() {
        return(
            <div>
           <div class="alert alert-primary" role="alert">
  Hola, soy ruta 3
</div>

            </div>
        )
    }
}

export default withStyles(styles)(TercerComponente)