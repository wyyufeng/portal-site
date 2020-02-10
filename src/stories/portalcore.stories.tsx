

import {
    CorePortalContext,
    routesMap,
    RouteContext
} from "portal-core";

import cms, { createHttpClient } from "portal-data-cms";
import React from "react";
import { Nav, List, Picture, Breadcrumb, Carousel } from "portal-elements";
import { createBrowserHistory } from "history";
export default {
    title: "portal"
};
export const test1 = () => (
    <CorePortalContext
        history={createBrowserHistory()}
        models={[routesMap]}
        dataProvider={cms(http)}
    >
        <RouteContext root={"cn"}>
            {/* <Nav exclude={['slide']}></Nav> */}
            <List pagination={{
                pageCount: 8
            }} resource="News" renderItem={item => {
                return <List.Item>
                    <List.Item.Meta
                        avatar={<Picture src={item.imgSrc}></Picture>}
                        title={<>{item.title}
                            <h6 style={{
                                margin: '7px 0 15px',
                                padding: 0,
                                fontSize: '14px',
                                fontWeight: 'normal'
                            }}>{item.publishDate}</h6>
                        </>}
                        description={item.$content}
                    >

                    </List.Item.Meta>

                </List.Item>
            }} />
        </RouteContext>
    </CorePortalContext>
);

export const test2 = () => {
    return <CorePortalContext
        history={createBrowserHistory()}
        models={[routesMap]}
        dataProvider={cms(http)}
    >
        <RouteContext root={"cn"}>
            {/* <Nav exclude={['slide']}></Nav> */}
            <List pagination={{
                pageCount: 8
            }} resource="News" renderItem={item => {
                return <List.Item>
                    <List.Item.Meta
                        avatar={<span style={{
                            display: "inline-block",
                            width: 8, height: 8,
                            border: '1px solid #dcb295',
                            boxShadow: "0 0 0 1px #fff, 0 0 0 2px #dcb295",
                            borderRadius: '50%'
                        }}></span>}
                        title={item.title}
                    >

                    </List.Item.Meta>
                    <div>{item.publishDate}</div>
                </List.Item>
            }} />
        </RouteContext>
    </CorePortalContext>
}

export const test3 = () => {
    return <CorePortalContext
        history={createBrowserHistory()}
        models={[routesMap]}
        dataProvider={cms(http)}
    >
        <RouteContext root={"cn"}>
            <Carousel></Carousel>
        </RouteContext>
    </CorePortalContext>
}

const http = createHttpClient(
    "http://220.191.224.251:80/api/",
    "ce72b99f3d484ef4ba927d656e89205b",
    "C7843A866062AFC06F736F6DF793183B"
);
