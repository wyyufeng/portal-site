export interface ListItem {
    id: string;
    channelNo: string;
    channelName: string;
    title: string;
    subTitle: string;
    publishDate: string;
    parentChannelNo: string;
    imgSrc: string;
    appImgSrc: string;
    abstract: string;
    content: string;
    $content?: string;
    source: string;
    linkUrl: string;
    isShowTitle: boolean;
    visitCount: number;
    $$rawData: any;
}
