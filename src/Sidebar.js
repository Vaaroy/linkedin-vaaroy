import { Avatar } from '@material-ui/core';

import React from 'react'
import "./Sidebar.css";


function Sidebar() {

    const recentItem = (topic) => (

        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{ topic }</p>
        </div>
    );
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_960_720.jpg" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>Vaaroy Professor</h2>
                <h4>professor@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                    <div className="sidebar__stat">
                        <p>Who viewed you</p>
                        <p className="sidebar__statNumber">1,500</p>
                    </div>
               
                    <div className="sidebar__stat">
                        <p>Connections</p>
                        <p className="sidebar__statNumber">2,580</p>
                   
                    </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('Angularjs')}
                {recentItem('Programming')}
                {recentItem('Buildingclones')}
                {recentItem('Reactjs')}
                {recentItem('Laravel')}
            </div>
            
        </div>
    )
}

export default Sidebar
