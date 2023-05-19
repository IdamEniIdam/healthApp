
import React, { useState } from "react";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";
import "../../styles/Header.css";
import "react-pro-sidebar/dist/css/styles.css";
import Overview from '../../images/svgs/Overview.svg'
import AppointmentIcon from '../../images/svgs/Appointments.svg'
import bigLogo from '../../images/svgs/Logowithname.svg'
import smallLogo from '../../images/svgs/Logo.svg'
import ExpandIcon from '../../images/svgs/ExpandIcon.svg'
import PathologyResultsIcon from '../../images/svgs/PathologyResults.svg'
import Doctors from '../../images/svgs/Doctors.svg'
import LogoutIcon from '../../images/svgs/Logout.svg'
import SettingsIcon from '../../images/svgs/Settings.svg'
import ChatsIcon from '../../images/svgs/Chats.svg'
import TelephoneIcon from '../../images/svgs/TelephoneIcon.svg'
import OverView from "../OverView/OverView";
import Appointments from "../Appointments/Appointment"
import Doctor from '../Doctors/Doctor';
import PathologyResults from '../PathologyResults/PathologyResults'
import Chats from '../Chats/Chats'
import Settings from "../Settings/Setting";
import Logout from '../Logout/Logout'

const Sidebar = () => {

    const [menuCollapse, setMenuCollapse] = useState(false)
    const [activeComponent, setActiveComponent] = useState("Dashboard");

    const handleMenuItemClick = (componentName) => {
        setActiveComponent(componentName);
    };

    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    const renderActiveComponent = () => {
        switch (activeComponent) {
            case "OverView":
                return <OverView />;
            case "Appointments":
                return <Appointments />;
            case "Doctor":
                return <Doctor />;
            case "PathologyResults":
                return <PathologyResults />;
            case "Chats":
                return <Chats />;
            case "Settings":
                return <Settings />;
            case "Logout":
                return <Logout />;
            default:
                return null;
        }
    };


    return (
        <div style={{ flexDirection: 'row', display: 'flex' }}>
            <div style={{ flexShrink: 0 }}>
                <div id="header">
                    <ProSidebar collapsed={menuCollapse}>
                        <SidebarHeader>
                            <div className="logotext">
                                <p>{menuCollapse ? <img src={smallLogo} alt="log" /> : <img src={bigLogo} alt="log" />}</p>
                            </div>
                            <div className="closemenu" onClick={menuIconClick}>
                                {menuCollapse ? (
                                    <img src={ExpandIcon} alt="ExpandIcon" />
                                ) : (
                                    <img src={ExpandIcon} alt="ExpandIcon" />
                                )}
                            </div>
                        </SidebarHeader>
                        <SidebarContent>
                            <Menu iconShape="square">
                                <MenuItem
                                    active={activeComponent === "OverView"}
                                    icon={<img src={Overview} alt="OverView" />}
                                    onClick={() => handleMenuItemClick("OverView")}
                                    className={activeComponent === "OverView" ? "active" : ""}
                                >
                                    Over View
                                </MenuItem>
                                <MenuItem
                                    active={activeComponent === "Appointments"}
                                    icon={<img src={AppointmentIcon} alt="AppointmentIcon" />}
                                    onClick={() => handleMenuItemClick("Appointments")}
                                >
                                    Appointments
                                </MenuItem>
                                <MenuItem
                                    active={activeComponent === "Doctor"}
                                    icon={<img src={Doctors} alt="sourcers" />}
                                    onClick={() => handleMenuItemClick("Doctor")}
                                >
                                    Doctors
                                </MenuItem>
                                <MenuItem
                                    active={activeComponent === "PathologyResults"}
                                    icon={<img src={PathologyResultsIcon} alt="PathologyResults" />}
                                    onClick={() => handleMenuItemClick("PathologyResults")}
                                >
                                    Pathology Results
                                </MenuItem>
                                <MenuItem
                                    active={activeComponent === "Chats"}
                                    icon={<img src={ChatsIcon} alt="ChatIcon" />}
                                    onClick={() => handleMenuItemClick("Chats")}
                                >
                                    Chats
                                </MenuItem>
                                <MenuItem>
                                    Account
                                </MenuItem>
                                <MenuItem
                                    active={activeComponent === "Settings"}
                                    icon={<img src={SettingsIcon} alt="SettingsIcon" />}
                                    onClick={() => handleMenuItemClick("Settings")}
                                >
                                    Settings
                                </MenuItem>
                                <MenuItem
                                    active={activeComponent === "Logout"}
                                    icon={<img src={LogoutIcon} alt="LogoutIcon" />}
                                    onClick={() => handleMenuItemClick("Logout")}
                                >
                                    Logout
                                </MenuItem>
                            </Menu>

                        </SidebarContent>
                        <SidebarFooter>
                            <Menu iconShape="square">
                                <MenuItem icon={<img src={TelephoneIcon} alt="TelephoneIcon" />}>Emergency Hotlines</MenuItem>
                            </Menu>
                        </SidebarFooter>
                    </ProSidebar>
                </div>
            </div>
            <div style={{
                width: '100%',
                // flexGrow: 1,
                //       overflow: "scroll",
                //       height: "100vh"
            }}>{renderActiveComponent()}</div>
        </div>

    )
};

export default Sidebar;

