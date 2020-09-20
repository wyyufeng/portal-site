import * as React from 'react';
import { List, Picture } from '../packages/portal-components/src';

export default {
  title: 'Components/List',
  parameters: { component: List }
};
const dataSource = [
  {
    title: '1',
    publishDate: '2020-02-02',
    content:
      'WGDEGDBTHPSAKWRPKWABDTQRPQWEBSSZWBHHJGMSEXFNKRQPHPQBHJWPKXTGQNBKRFEWFGPSEAWYDAAQDAYNHRQAFFDEEAWAYNQAMRJEDTXYHRGJYFDNWBQJRPFHMQGSZQRFQJXHKEYERNQDRGSWYDAABFFXQKBTSPTWWMHKRYWKQHMSHNQYHZGGWTBSMHAYYEFCSQSK'
  },
  {
    title: '2',
    publishDate: '2020-02-02',
    content:
      'WGDEGDBTHPSAKWRPKWABDTQRPQWEBSSZWBHHJGMSEXFNKRQPHPQBHJWPKXTGQNBKRFEWFGPSEAWYDAAQDAYNHRQAFFDEEAWAYNQAMRJEDTXYHRGJYFDNWBQJRPFHMQGSZQRFQJXHKEYERNQDRGSWYDAABFFXQKBTSPTWWMHKRYWKQHMSHNQYHZGGWTBSMHAYYEFCSQSK'
  },
  {
    title: '3',
    publishDate: '2020-02-02',
    content:
      'WGDEGDBTHPSAKWRPKWABDTQRPQWEBSSZWBHHJGMSEXFNKRQPHPQBHJWPKXTGQNBKRFEWFGPSEAWYDAAQDAYNHRQAFFDEEAWAYNQAMRJEDTXYHRGJYFDNWBQJRPFHMQGSZQRFQJXHKEYERNQDRGSWYDAABFFXQKBTSPTWWMHKRYWKQHMSHNQYHZGGWTBSMHAYYEFCSQSK'
  },
  {
    title: '4',
    publishDate: '2020-02-02',
    content:
      'WGDEGDBTHPSAKWRPKWABDTQRPQWEBSSZWBHHJGMSEXFNKRQPHPQBHJWPKXTGQNBKRFEWFGPSEAWYDAAQDAYNHRQAFFDEEAWAYNQAMRJEDTXYHRGJYFDNWBQJRPFHMQGSZQRFQJXHKEYERNQDRGSWYDAABFFXQKBTSPTWWMHKRYWKQHMSHNQYHZGGWTBSMHAYYEFCSQSK'
  }
];
export const Base = () => <List dataSource={dataSource}></List>;
export const Pagination = () => (
  <List
    dataSource={dataSource}
    // fix
    // @ts-ignore
    pagination={{
      pageCount: 4,
      forcePage: 1,
      onPageChange: () => {}
    }}
  ></List>
);

export const Custom1 = () => (
  <List
    renderItem={(item) => {
      return (
        <List.Item>
          <List.Item.Meta
            title={item.title}
            avatar={
              <span
                style={{
                  width: 9,
                  height: 9,
                  border: '2px solid #39678d',
                  borderRadius: '50%',
                  display: 'inline-block',
                  verticalAlign: 'middle'
                }}
              />
            }
          />
          <div
            style={{
              lineHeight: '30px',
              color: '#898989'
            }}
          >
            {item.publishDate}
          </div>
        </List.Item>
      );
    }}
    dataSource={dataSource}
  ></List>
);

export const Custom2 = () => (
  <List
    dataSource={dataSource}
    renderItem={(item) => {
      return (
        <List.Item>
          <List.Item.Meta
            title={item.title}
            secondary={item.publishDate}
            description={item.content}
            avatar={
              <Picture
                source=""
                style={{
                  width: 260,
                  height: 160
                }}
              />
            }
            actions={
              <a
                style={{
                  marginLeft: 10,
                  textDecoration: 'none',
                  color: '#0002'
                }}
                href="http://www.baidu.com"
              >
                查看详情
              </a>
            }
          />
        </List.Item>
      );
    }}
  />
);

export const Custom3 = () => (
  <List
    dataSource={dataSource}
    renderItem={(item) => {
      return (
        <List.Item
          extra={
            <Picture
              style={{
                width: 260,
                height: 160
              }}
              source={item.imgSrc}
            />
          }
        >
          <List.Item.Meta
            title={item.title}
            secondary={item.publishDate}
            description={item.content}
          />
        </List.Item>
      );
    }}
  />
);
