import Badge from '@mui/material/Badge';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import withReducer from 'app/store/withReducer';
import reducer from './store';
import { getUserConfigurationSetting, setPersonalSettings, setSyncing } from './store/syncUserConfigurationSlice';
import { selectNavigation } from 'app/store/fuse/navigationSlice';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

function SyncUserConfigurationButton(props) {
    const dispatch = useDispatch();
    const {
        syncing, personalSettings
    } = useSelector(({syncUserConfiguration}) => syncUserConfiguration?.syncUserConfiguration);
    const navigation = useSelector(selectNavigation);
    const {setting_id, token} = useSelector(({auth}) => auth.user.data);

    const [cookie, setCookie, removeCookie] = useCookies();

    useEffect(() => {
        if (navigation[0]?.children?.length > 0) {
            const navigationList = navigation[0]?.children;
            let filteredList = [];
            navigationList.map((item) => {
                const data = {title: item.title, slug: item.id.replace(/\_+/g, '-').toLowerCase(), components: null}
                filteredList.push(data)
            })
            dispatch(setPersonalSettings([...filteredList]));
        }
    }, []);

    useEffect(() => {
        dispatch(setPersonalSettings(cookie?.settings))
    }, [cookie])

    const onSyncUserConfiguration = () => {
        dispatch(setSyncing(true));
        if (setting_id && token) {
            const data = {setting_id, token}
            dispatch(getUserConfigurationSetting(data));
            setTimeout(() => {
                dispatch(setSyncing(false));
            }, 2000)
        }
    }

    return (<IconButton
        className="w-40 h-40"
        disabled={!setting_id}
        onClick={(ev) => onSyncUserConfiguration()}
        size="large"
    >
        <Badge color="secondary" variant="dot" invisible={!syncing}>
            {props.children}
        </Badge>
    </IconButton>);
}

SyncUserConfigurationButton.defaultProps = {
    children: <Icon>refresh</Icon>,
};

export default withReducer('syncUserConfiguration', reducer)(SyncUserConfigurationButton);
