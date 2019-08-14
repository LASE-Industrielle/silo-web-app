import React from 'react'
import AnalyticsListItem from './AnalyticsListItem'
import { AnalyticsIcon } from '../../icons/AnalyticsIcon'

const AnalyticsWidget = ({ silos }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      borderRadius: 6,
      marginRight: 20,
      backgroundColor: '#fff',
      boxShadow: '0px 3px 6px rgba(0,0,0,0.08)',
      padding: '36px 30px 32px 30px',
    }}>
      <div style={{
        display: 'flex',
        marginBottom: 16,
      }}>
        <div style={{
          flex: 1,
          borderRight: '1px #E8E6EA solid',
        }}>
          <div style={{
            color: '#BEB9B9',
            fontSize: 14,
            marginBottom: 6,
          }}>Content
          </div>
          <div style={{
            color: '#262626',
            fontSize: 16,
          }}
          >Soil
          </div>
        </div>
        <div style={{ flex: 2, paddingLeft: 20 }}>
          <div style={{
            color: '#BEB9B9',
            fontSize: 14,
            marginBottom: 6,
          }}>Capacity
          </div>
          <div style={{
            color: '#83D0A9',
            fontSize: 16,
            fontWeight: 'bold',
          }}
          >{silos.capacity && silos.percentage &&
          Math.round((silos.percentage * silos.capacity) / 100)} / {silos &&
          silos.capacity} <span style={{ color: '#BEB9B9' }}>kg</span>
          </div>
        </div>
      </div>

      <div style={{
        borderTop: '1px #E8E6EA solid',
        paddingTop: 16,
      }}>
        <div style={{
          padding: '8px 0',
          fontSize: 14,
          color: '#BEB9B9',
        }}>Average
        </div>

      </div>
      {Object.entries(silos.values_by_day).
        map(({ 0: date, 1: value }) => <AnalyticsListItem key={date} date={date}
                                                          value={value}/>,
        )}
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
      }}>
        <div style={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#02A04E',
          borderRadius: 36,
          height: 48,
          color: '#fff',
          fontSize: 14,
          boxShadow: '0px 3px 6px rgba(0,0,0,0.08)',
        }}><AnalyticsIcon fill={'#fff'}/><span
          style={{ marginLeft: 10 }}>ANALYTICS</span>
        </div>
      </div>

    </div>
  )
}

export default AnalyticsWidget
