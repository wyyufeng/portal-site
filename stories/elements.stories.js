import React from 'react';
import Picture from '../packages/portal-elements/src/elements/Picture';

export default {
    title: 'Elements',
};

export const picture = () => (
    <Picture
        style={{
            width: 200,
            height: 200,
            objectFit: 'cover',
        }}
        src="http://static.iaminvoker.com/tig.jpg"
    ></Picture>
);
