import * as React from 'react';
import { Carousel } from '../packages/portal-components/src';

export default {
  title: 'Carousel',
  parameters: { component: Carousel }
};

export const Base = () => (
  <Carousel
    style={{
      height: 200
    }}
    dataSource={[
      'https://images.unsplash.com/photo-1587587004741-ea9a81b70bf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1593223772770-1841a123740a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1593055132632-6aeec3f1dc00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    ]}
  ></Carousel>
);
