/**
 * Created by chenhao on 10/07/2017.
 */

import React from 'react';
import {Input, Button, Row, Col} from 'antd';
import Axios from 'axios';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});

    }

    handleClick() {
        let str = this.state.value.toLowerCase();
        let strArr = str.split(" ");
        let question = "";
        for (let word of strArr) {
            question += (word + "-");
            console.log(question + "\n");
        }
        question = question.slice(0, -1);
        Axios.get(`https://leetcode.com/problems/${question}/#/description`)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={18}>
                        <Input
                            placeholder="Input Question..."
                            defaultValue=""
                            onChange={this.handleChange}
                        />
                    </Col>
                    <Col span={6}>
                        <Button type="primary" icon="search" onClick={this.handleClick}> Search </Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Search