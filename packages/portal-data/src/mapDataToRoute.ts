import { IRoute } from '@portal-site/types';
import { RouteMap } from './route';

export default function mapDataToRoute(data: any, parent: any): IRoute {
  const route = new RouteMap();
  const children = data.subChannel ? data.subChannel.map((i: any) => mapDataToRoute(i, route)) : [];
  route.id = data.channelId;
  route.children = children;
  route.name = data.channelName;
  route.route = data.channelNo;
  route.parent = parent;
  route.description = data.description;
  route.isVisible = data.isVisible;
  route.imgSrc = data.bannerPhotoPath;
  route.isHome = data.channelNo === 'Home';
  return route;
}
