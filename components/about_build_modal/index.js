// Copyright (c) 2015-present Silicon Chat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {getConfig, getLicense} from 'mattermost-redux/selectors/entities/general';

import AboutBuildModal from './about_build_modal.jsx';

function mapStateToProps(state) {
    return {
        config: getConfig(state),
        license: getLicense(state),
    };
}

export default connect(mapStateToProps)(AboutBuildModal);
