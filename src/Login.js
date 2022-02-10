import React from "react";
import {connect} from 'react-redux'
import {getReactPosts} from './app/actions.js'
import {Card, Row, Col, message } from 'antd';
import { EditOutlined, EllipsisOutlined, DeleteOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";


class ReactMessage extends React.Component {

    componentDidMount() {
        this.props.getReactPosts();
    }

    

    render() {
        const posts = this.props.posts
        console.log(posts)

        return (
                    <Col span={12} offset={6}>
                        {posts.message}
                    </Col>
        );
    }
}

const mapStateToProps = (state) => ({
    posts: state.posts
})

const mapDispatchToProps = {
    getReactPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactMessage)