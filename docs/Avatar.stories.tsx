import * as React from 'react';
import { Avatar } from '../packages/portal-components/src';

export default {
  title: 'Avatar',
  parameters: { component: Avatar }
};

export const Base = () => <Avatar size={'40px'} color="red"></Avatar>;
