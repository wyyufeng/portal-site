import * as React from 'react';
import { Picture } from '../packages/portal-components/src';

export default {
  title: 'Picture',
  parameters: { component: Picture }
};

export const Base = () => (
  <Picture
    style={{
      height: 200
    }}
    source="https://images.unsplash.com/photo-1593091430804-30029c2a7bd0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
  ></Picture>
);

export const MultiSources = () => (
  <Picture
    style={{
      height: 200
    }}
    source={[
      '',
      'https://images.unsplash.com/photo-1590659235380-1b4300fe6238?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    ]}
  ></Picture>
);

MultiSources.story = {};
