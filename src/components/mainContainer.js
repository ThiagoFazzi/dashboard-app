import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { getSensorValue } from '../actions/sensors'
import SensorComponent from './sensorComponent';
import CircularProgressBar from './circularProgressBar'

class MainComponent extends PureComponent {

    componentDidMount() {
        setInterval(
            this.props.getSensorValue
        ,1000)
    }

    render(){
        const { sensors } = this.props
        return(
            <div>
                <SensorComponent
                    value={sensors.value} />
                
                <CircularProgressBar
                    strokeWidth="5"
                    sqSize="200"
                    percentage={sensors.value}/>
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