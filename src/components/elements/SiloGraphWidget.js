import React from 'react'

const SiloStatusWidget = ({ silos }) => {
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        padding: '28px 18px',
        height: 400,
        width: 728,
        background: 'linear-gradient(180deg, #6CC799, #439A93)',
        marginBottom: 20,
        borderRadius: 6,
        boxShadow: '0px 3px 6px rgba(0,0,0,0.08)',

      }}>
      <div
        style={{
          display: 'flex',
          flex: 'initial',
          flexDirection: 'column',
          width: 250,
        }}>
        <div style={{
          color: '#fff',
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 42,
        }}><span style={{ width: 24, marginRight: 8 }}>&lt;</span> Analytics
        </div>
        <div style={styles.dateTimeInput}>Select Period
        </div>


        <div style={{ marginTop: 20 }}>
          <div style={{ color: '#fff', fontSize: 12, marginBottom: 10 }}>
            Select start date & time
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ ...styles.dateTimeInput, flex: 1 }}>Date
            </div>
            <div style={{ ...styles.dateTimeInput, flex: 1 }}>Time
            </div>
          </div>

          <div style={{ marginTop: 20 }}>
            < div style={{ color: '#fff', fontSize: 12, marginBottom: 10 }}>
              Select end date & time
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ ...styles.dateTimeInput, flex: 1 }}>20. July
              </div>
              <div style={{ ...styles.dateTimeInput, flex: 1 }}>14:00
              </div>
            </div>
          </div>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',

          flex: 1,

        }}>
          <div style={styles.button}>
            Apply
          </div>
          <div style={styles.button}>Export data to csv
          </div>
        </div>
      </div>
      <div style={{
        display:'flex',
        marginLeft: 26,
        flex: 1,
        width: 462,
        height: 394,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        color:'#fff'
      }}><div>/\/^ Chart goes here</div>
      </div>
    </div>
  )
}

const styles = {
  dateTimeInput: {
    borderRadius: 50,
    border: '1px #fff solid',
    height: 18,
    marginLeft: 4,
    padding: 10,
    fontSize: 12,
    color: '#fff',

  },
  button: {
    display: 'flex',
    color: '#fff',
    fontSize: 12,
    justifyContent: 'center',
    alignItems: 'center',
    height: 38,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    textTransform: 'uppercase',
  },
}

export default SiloStatusWidget
