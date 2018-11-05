import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { getSensorValue } from '../actions/sensors'
import ColumnProgressBar from './columnProgressBar';
import CircularProgressBar from './circularProgressBar'

class MainComponent extends PureComponent {

    componentDidMount() {
        setInterval(
            () => this.props.getSensorValue(1),
            () => this.props.getSensorValue(2)
        ,2000)
    }

    render(){
        const { sensors } = this.props
        return(
            <div>
                <ColumnProgressBar
                    color="red"
                    barWidth="5"
                    barHeight="200"
                    percentage={sensors.value} />
                
                <CircularProgressBar
                    color="red"
                    strokeWidth="5"
                    sqSize="200"
                    percentage={sensors.value}/>

                <ColumnProgressBar
                    color="lime"
                    barWidth="5"
                    barHeight="100"
                    percentage={sensors.value} />

                <CircularProgressBar
                    color="green"
                    strokeWidth="5"
                    sqSize="100"
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