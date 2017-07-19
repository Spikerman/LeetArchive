/**
 * Created by chenhao on 10/07/2017.
 */

import React from 'react';
import {Input, Button, Row, Col, Card} from 'antd';
import Axios from 'axios';// module for ajax
const cheerio = require('cheerio'); // module for html parser

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
        this.parseHtml = this.parseHtml.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});

    }

    parseHtml(html) {
        const $ = cheerio.load(html);
        let diff = $('.side-bar-list').children('.list-item').first().children().last().text();
        let tags = [];
        $('div #tags-topics').children('a').each((i, el) => {
            console.log(el);
//todo this undefined
        });
        console.log(tags);
        // each(function (i, el) {
        //     //tags[i] = $(this).attr('href');
        //
        // });
        //console.log(tags);
        this.setState({difficulty: diff});
    }

    handleClick() {
        let str = this.state.value.toLowerCase();
        let strArr = str.split(" ");
        let question = "";
        for (let word of strArr) {
            question += (word + "-");
        }
        question = question.slice(0, -1);
        Axios.get(`https://leetcode.com/problems/${question}/#/description`)
            .then((response) => this.parseHtml(response.data))
            .catch((error) => console.log(error));
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
                <div style={{height: '20px'}}>
                </div>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Difficulty" bordered={true}>{this.state.difficulty}</Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Topics" bordered={true}>Card content</Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Relate" bordered={true}>Card content</Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Search