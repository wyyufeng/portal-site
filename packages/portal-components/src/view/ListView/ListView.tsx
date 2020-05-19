import React, { Component } from 'react';
import Container from '../../layout/Container';
import Breadcrumb from '../../block/Breadcrumb';
import List from '../../block/List';

export default class ListView extends Component {
    render() {
        return (
            <div className="portal-listview">
                <Container>
                    <Breadcrumb
                        routes={[
                            { name: '首页', path: '/' },
                            { name: '新闻', path: '/news/notice' }
                        ]}
                    ></Breadcrumb>
                    <List
                        resource="News"
                        renderItem={(item) => {
                            return (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={
                                            <span
                                                style={{
                                                    display: 'inline-block',
                                                    width: 8,
                                                    height: 8,
                                                    border: '1px solid #dcb295',
                                                    boxShadow: '0 0 0 1px #fff, 0 0 0 2px #dcb295',
                                                    borderRadius: '50%'
                                                }}
                                            ></span>
                                        }
                                        title={item.title}
                                    ></List.Item.Meta>
                                    <div>{item.publishDate}</div>
                                </List.Item>
                            );
                        }}
                    />
                </Container>
            </div>
        );
    }
}
