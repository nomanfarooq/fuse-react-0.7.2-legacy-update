import QuickPanel from 'app/fuse-layouts/shared-components/quickPanel/QuickPanel';
import NotificationPanel from 'app/fuse-layouts/shared-components/notificationPanel/NotificationPanel';
import ActivityDialog from 'app/fuse-layouts/shared-components/activityDialogue/ActvityDialogue';

import { memo } from 'react';

function RightSideLayout1(props) {
    return (
        <>
            <QuickPanel />
            <ActivityDialog />
            <NotificationPanel />
        </>
    );
}

export default memo(RightSideLayout1);
