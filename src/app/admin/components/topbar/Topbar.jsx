'use client'
import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings } from '@material-ui/icons'
import Image from 'next/image'

function Topbar() {
  return (
    <div className="bg-black/60 topbar">
      <div className="topbarWrapper">
        <div className="topRight">
          <div className="topbarIconsContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconsContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconsContainer">
            <Settings />
          </div>
          
          <div className="topAvatar">
            <Image
              src="/rahma.PNG"
              alt="Avatar"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
