import React from 'react'

const options = [
  { value: 'hour', label: 'Date' },
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
]

const GraphDataWidget = ({ data }) => {
  return (
    <div style={{
      display: 'flex',
      backgroundColor: '#fff',
      borderRadius: 6,
      boxShadow: '0px 3px 6px rgba(0,0,0,0.08)',
      width: 728,
      padding: '28px 18px',
      flexDirection: 'column',
      flex: 1,
      maxHeight: 470,
    }}>
      <div style={{
        fontWeight: 'bold',
        fontSize: 16,
        color: '#C5C5C5',
        marginBottom: 14,
      }}>Graph Data
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap',  overflowY:'auto' }}>{
        Object.entries(data).map(
          entry => (
            <div
              key={entry[0]}
              style={{
                height: 28,
                width: 100,
                backgroundColor: '#F8F8F8',
                marginRight: 8,
                marginBottom: 8,
                padding: '14px 18px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',


              }}>
              <div style={{
                color: '#898989',
                marginBottom: 8,
                fontSize: 12,
              }}>{entry[0]}
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{
                  border: '3px #F1B950 solid',
                  height: 4,
                  width: 4,
                  borderRadius: '50%',
                  marginRight: 12,

                }}/>
                <div style={{
                  color: '#262626',
                  fontSize: 14,
                  fontWeight: 'medium',
                }}>{entry[1]}%
                </div>
              </div>
            </div>
          ))
      }</div>
    </div>
  )
}


export default GraphDataWidget
