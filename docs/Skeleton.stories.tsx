import * as React from 'react';
import { Skeleton } from '../packages/portal-components/src';

export default {
  title: 'Skeleton',
  parameters: { component: Skeleton }
};

export const Base = () => {
  const [loading, setLoading] = React.useState(true);
  const ref: any = React.useRef();
  React.useEffect(() => {
    ref.current = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => {
      clearTimeout(ref.current);
    };
  }, []);
  return (
    <Skeleton loading={loading}>
      <p>🚗🚗🚗🚗</p>
    </Skeleton>
  );
};

export const Custom = () => (
  <Skeleton
    render={() => (
      <>
        <Skeleton.Avatar></Skeleton.Avatar>
        <Skeleton.Card></Skeleton.Card>
        <Skeleton.List></Skeleton.List>
        <Skeleton.Paragraph></Skeleton.Paragraph>
        <Skeleton.Title></Skeleton.Title>
      </>
    )}
  ></Skeleton>
);
