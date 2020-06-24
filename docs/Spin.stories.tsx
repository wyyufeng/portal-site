import { Spin } from '../packages/portal-components/src';
import React, { useState } from 'react';

export default {
    title: 'Article',
    parameters: { component: Spin }
};
export const LayerTest = () => {
    return (
        <div
            style={{
                color: 'red'
            }}
        >
            <Spin></Spin>
        </div>
    );
};
