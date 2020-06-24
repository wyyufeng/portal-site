import { Layer } from '../packages/portal-layer/src/index';
import React, { useState } from 'react';

export default {
    title: 'Article',
    parameters: { component: Layer }
};
export const LayerTest = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Layer handleClose={() => setIsOpen(false)} isOpen={isOpen}>
                <h1>hello world</h1>
            </Layer>
            <button onClick={() => setIsOpen(true)}>打开</button>
        </>
    );
};
