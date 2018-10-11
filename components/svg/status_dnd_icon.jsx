// Copyright (c) 2015-present Silicon Chat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import {localizeMessage} from 'utils/utils.jsx';

export default class StatusDndIcon extends React.PureComponent {
    render() {
        return (
            <span {...this.props}>
                <svg
                    width='100%'
                    height='100%'
                    viewBox='0 0 20 20'
                    style={style}
                    role='icon'
                    aria-label={localizeMessage('mobile.set_status.dnd.icon', 'Do Not Disturb Icon')}
                >
                    <path
                        className='dnd--icon'
                        d='M10,0c5.519,0 10,4.481 10,10c0,5.519 -4.481,10 -10,10c-5.519,0 -10,-4.481 -10,-10c0,-5.519 4.481,-10 10,-10Zm5.25,8.5l-10.5,0c-0.414,0 -0.75,0.336 -0.75,0.75l0,1.5c0,0.414 0.336,0.75 0.75,0.75l10.5,0c0.414,0 0.75,-0.336 0.75,-0.75l0,-1.5c0,-0.414 -0.336,-0.75 -0.75,-0.75Z'
                    />
                </svg>
            </span>
        );
    }
}

const style = {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    strokeLinejoin: 'round',
    strokeMiterlimit: 1.41421,
};
