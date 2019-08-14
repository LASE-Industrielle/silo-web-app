import React from 'react'
import { NotificationIcon } from '../../icons/NotificationIcon'
import { LogoIcon } from '../../icons/LogoIcon'
import { ProfileIcon } from '../../icons/ProfileIcon'

const Header = () => {
  return (
    <div style={{
      display: 'flex',
      flex: 1,
      backgroundColor: '#FFF',
      alignSelf: 'stretch',
      flexDirection: 'row',
      padding: '20px 120px',
      borderBottomLeftRadius: 20,
      marginBottom: 20,
      boxShadow: '0px 3px 6px rgba(0,0,0,0.08)',
    }}>
      <div
        style={{ flex: 1 }}>
        <LogoIcon/>
      </div>
      <div style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-end',
      }}>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <NotificationIcon fill={'#6cc799'}/>
          <div style={{
            color: '#6cc799',
            fontSize: 16,
            marginLeft: 5,
          }}>Notifications
          </div>
          <div style={{
            display: 'flex',
            fontSize: 12,
            color: '#6cc799',
            alignItems: 'center',
            marginLeft: 10,
          }}>▼
          </div>
        </div>

        <div
          style={{ display: 'flex', alignItems: 'center', marginLeft: 30 }}>
          <ProfileIcon fill={'#6cc799'}/>
          <div style={{
            color: '#6cc799',
            fontSize: 16,
            marginLeft: 5,
          }}>Profile
          </div>
          <div style={{
            display: 'flex',
            fontSize: 12,
            color: '#6cc799',
            alignItems: 'center',
            marginLeft: 10,
          }}>▼
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
