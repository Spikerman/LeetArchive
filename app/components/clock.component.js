/**
 * Created by chenhao on 10/07/2017.
 */
import React from 'react';
import {Button} from 'antd';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillMount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
                <Button type="primary">Test</Button>
            </div>
        );
    }
}

export default Clock