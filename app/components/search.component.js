/**
 * Created by chenhao on 10/07/2017.
 */

import React from 'react';
import {Input, Button, Row, Col, Card} from 'antd';
import Axios from 'axios';
import {cheerio} from 'cheerio';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            difficulty: "",
            topics: [],
            questions: []

        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.parseHtml = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});

    }

    parseHtml(html) {
        const $ = cheerio.load(html);
        let diff = $('ul .side-bar-list li:first').text();
        this.setState({difficulty: diff});
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
                //console.log(response.data);
                this.parseHtml(response.data);
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
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Difficulty" bordered={true}>{this.state.difficulty}</Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Topics" bordered={true}>Card content</Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Relate Questions" bordered={true}>Card content</Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Search