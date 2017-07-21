import React from 'react';
import {Tag} from 'antd';

class Taglist extends React.Component {
    //todo define prop
    constructor(props) {
        super(props);
    }

    render() {
        this.tags = props.tags;
        this.listTags = this.tags.map((tag) =>
            <Tag>{tag}</Tag>
        );
        return (
            <div>
                {this.listTags}
            </div>

        );
    }
}

export default Taglist

