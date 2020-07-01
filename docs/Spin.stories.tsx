import * as React from 'react';
import { Spin } from '../packages/portal-components/src';

export default {
  title: 'Spin',
  parameters: { component: Spin }
};

export const Base = () => <Spin size={'40px'} color="red"></Spin>;

export const Base2 = () => <Spin indicator={Spin.SpinIndicatorC2} size={'40px'} color="red"></Spin>;
