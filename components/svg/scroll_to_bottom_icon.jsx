// Copyright (c) 2015-present Silicon Chat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import {localizeMessage} from 'utils/utils.jsx';

export default class ScrollToBottomIcon extends React.PureComponent {
    render() {
        return (
            <span {...this.props}>
                <svg
                    id='Layer_1'
                    x='0px'
                    y='0px'
                    viewBox='-239 239 21 23'
                    style={style}
                    role='icon'
                    aria-label={localizeMessage('generic_icons.arrow.down', 'Down Arrow Icon')}
                >
                    <path d='M-239,241.4l2.4-2.4l8.1,8.2l8.1-8.2l2.4,2.4l-10.5,10.6L-239,241.4z M-228.5,257.2l8.1-8.2l2.4,2.4l-10.5,10.6l-10.5-10.6 l2.4-2.4L-228.5,257.2z'/>
                </svg>
            </span>
        );
    }
}

const style = {
    enableBackground: 'new -239 239 21 23',
};
