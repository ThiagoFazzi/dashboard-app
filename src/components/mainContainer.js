import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { getSensorValue } from '../actions/sensors'
import SensorComponent from './sensorComponent';


const styles = {
    docker: {
        marginTop: '50px',
        marginLeft: '200px',
        width: '50px',
        height: '300px',
        border: '1px solid black',
        backgroundColor: 'red'

    }
}

class MainComponent extends PureComponent {

    componentDidMount() {
        setInterval(
            this.props.getSensorValue
        ,1000)
    }

    render(){
        const { sensors } = this.props
        console.log('props',sensors)
        return(
            <div style={styles.docker}>
                <SensorComponent value={sensors.value} >{`ttt`}</SensorComponent>
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