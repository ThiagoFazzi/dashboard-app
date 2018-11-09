import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { getSensorValue } from '../actions/sensors'
import ColumnProgressBar from './columnProgressBar';
import CircularProgressBar from './circularProgressBar'

class MainComponent extends PureComponent {

    componentDidMount() {
        setInterval(
            () => this.props.getSensorValue()
        ,2000)
    }

    render(){
        const { sensors } = this.props
        if(!sensors) return null
        return(
            <div>
                {sensors.map(s => 

                    <CircularProgressBar
                        color="green"
                        strokeWidth="5"
                        sqSize="100"
                        percentage={s.value}
                    />



                )}


            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    sensors: state.sensors
  
})

const mapDispatchToProps = {
    getSensorValue
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent)