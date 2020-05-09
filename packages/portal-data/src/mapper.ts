import { getImgFromHtml, html2text } from './util';
import { ListItem } from '@portal-site/types';
export const listMapper = (source: any[]): ListItem[] => {
    return source.map(
        (item): ListItem => {
            return {
                $raw_data: item,
                id: item.archivesId, // 文章id
                channelNo: item.channelNo, // 栏目编号
                channelName: item.channelName, // 栏目名称
                title: item.title, // 标题
                subTitle: item.subTitle, // 副标题
                publishDate: item.publishDate.split(' ')[0],
                parentChannelNo: item.parentChannelNo, // 父栏目
                imgSrc: encodeURI(item.thumbImg ? item.thumbImg : getImgFromHtml(item.content)),
                appImgSrc: encodeURI(item.thumbAppImg ?? ''), // app缩略图，默认为'' 字符串作为 URI 进行编码
                content: item.content, // 详情
                $content: html2text(item.content),
                abstract: item.description, // 摘要内容
                source: item.source ?? '', // 文章来源
                linkUrl: item.linkUrl ?? '', // 自定义链接,
                isShowTitle: item.isShowTitle, // 是否显示标题
                visitCount: item.visitCount
            };
        }
    );
};
export function listOneMapper(source: any): ListItem {
    return {
        $raw_data: source,
        id: source.archivesId, // 文章id
        channelNo: source.channelNo, // 栏目编号
        channelName: source.channelName, // 栏目名称
        title: source.title, // 标题
        subTitle: source.subTitle, // 副标题
        publishDate: source.publishDate.split(' ')[0],
        parentChannelNo: source.parentChannelNo, // 父栏目
        imgSrc: encodeURI(source.thumbImg ? source.thumbImg : getImgFromHtml(source.content)),
        appImgSrc: encodeURI(source.thumbAppImg ?? ''), // app缩略图，默认为'' 字符串作为 URI 进行编码
        abstract: source.description, // 摘要内容
        content: source.content, // 详情
        source: source.source || '', // 文章来源
        linkUrl: source.linkUrl || '', // 自定义链接,
        isShowTitle: source.isShowTitle, // 是否显示标题
        visitCount: source.visitCount
    };
}
