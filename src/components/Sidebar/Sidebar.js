import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons';
import React from 'react';
import { useStateValue } from '../../StateProvider';
import './Sidebar.css';
import SidebarRow from './SidebarRow';

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow title={user.displayName} src={user.photoURL} />
            <SidebarRow title="COVID-19 Information Center" Icon={LocalHospital} />
            <SidebarRow title="Pages" Icon={EmojiFlags} />
            <SidebarRow title="Friends" Icon={People} />
            <SidebarRow title="Messanger" Icon={Chat} />
            <SidebarRow title="Marketplace" Icon={Storefront} />
            <SidebarRow title="Videos" Icon={VideoLibrary} />
            <SidebarRow title="Marketplace" Icon={ExpandMoreOutlined} />
        </div>
    )
}

export default Sidebar;
