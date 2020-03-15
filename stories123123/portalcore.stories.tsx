import { PortalContext, routesMap, RouteContext } from 'portal-core';

import cms, { createHttpClient } from 'portal-data-cms';
import React from 'react';
import {
    Nav,
    List,
    Picture,
    Breadcrumb,
    Carousel,
    ConfigProvider,
    Header,
    Center,
    ListView
} from 'portal-elements';
import { createBrowserHistory } from 'history';
export default {
    title: 'portal'
};
export const test1 = () => (
    <PortalContext models={[routesMap]} dataProvider={cms(http)}>
        <RouteContext history={createBrowserHistory()} root={'cn'}>
            {/* <Nav exclude={['slide']}></Nav> */}
            <List
                pagination={{
                    pageCount: 8
                }}
                resource="News"
                renderItem={(item) => {
                    return (
                        <List.Item>
                            <List.Item.Meta
                                avatar={
                                    <Picture
                                        style={{
                                            width: 260,
                                            height: 160
                                        }}
                                        src={item.imgSrc}
                                    ></Picture>
                                }
                                title={
                                    <>
                                        {item.title}
                                        <h6
                                            style={{
                                                margin: '7px 0 15px',
                                                padding: 0,
                                                fontSize: '14px',
                                                fontWeight: 'normal'
                                            }}
                                        >
                                            {item.publishDate}
                                        </h6>
                                    </>
                                }
                                description={item.$content}
                            ></List.Item.Meta>
                        </List.Item>
                    );
                }}
            />
        </RouteContext>
    </PortalContext>
);

const http = createHttpClient(
    'http://220.191.224.251:80/api/',
    'ce72b99f3d484ef4ba927d656e89205b',
    'C7843A866062AFC06F736F6DF793183B'
);
