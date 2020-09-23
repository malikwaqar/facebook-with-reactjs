import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons';
import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow title="Malik Waqar" src="https://avatars1.githubusercontent.com/u/49842187?s=460&u=f40259e1e37e9346d757848196904a23dbd664da&v=4" />
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
