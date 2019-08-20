import React from 'react'
import { VictoryAxis, VictoryChart, VictoryLine } from 'victory'
import Select from 'react-select'

const options = [
  { value: 'hour', label: 'Date' },
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
]

const SiloGraphWidget = ({ silos }) => {
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
        <div><Select

          styles={{
            control: () => ({
              borderRadius: 50,
              border: '1px #fff solid', flex: 1, height: 38, display: 'flex',
            }),
            singleValue: () => ({ color: '#fff', fontSize: 12 }),
            option: (base, state) => ({
              ...base,
              fontSize:12,
              color: state.isSelected ? '#14A95C' : '#58A08C',
              backgroundColor: state.isSelected ? '#E2F4EB' : '#fff',
              fontWeight: state.isSelected ? 'medium' : 'normal',

              '&:hover': {
                color:'#58A08C',
                backgroundColor:'#E2F4EB'
              },

            }),

            dropdownIndicator: (base) => ({
              ...base, color: '#fff', '&:hover': {
                color: '#58A08C',
              },
            }),
            indicatorSeparator: (base) => ({
              ...base,
              backgroundColor: '#fff',
            }),
            valueContainer: (base) => ({ ...base, marginLeft: 6 }),
          }}

          options={options}
          defaultValue={options[0]}
        /></div>


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
        display: 'flex',
        marginLeft: 26,
        flex: 1,
        width: 462,
        height: 394,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        color: '#fff',
      }}>
        <div>

          <VictoryChart

            width={472}
            height={394}

          >

            <VictoryAxis
              style={{
                axis: { stroke: 'none' },
                grid: {
                  stroke: '#58A08C', strokeDasharray: '5,5',
                  strokeWidth: 0.5,
                  fill: '#fff',
                },
                tickLabels: { fill: '#fff' },
              }}
            />
            <VictoryAxis
              dependentAxis
              style={{
                axis: {
                  fill: 'transparent',
                  stroke: 'none',
                  strokeWidth: 1,
                },
                axisLabel: { fontSize: 50, padding: 30 },
                grid: {
                  stroke: '#58A08C', strokeDasharray: '5,5',
                  strokeWidth: 0.5,
                  fill: '#fff',
                },
                tickLabels: { fill: '#fff' },
              }}
            />
            <VictoryLine
              interpolation="natural"
              style={{
                data: { stroke: '#fff' },
                parent: { border: '5px solid #fff' },

              }}
              data={[
                { x: 1, y: 2 },
                { x: 2, y: 3 },
                { x: 3, y: 5 },
                { x: 4, y: 4 },
                { x: 5, y: 7 },
              ]}
            />
          </VictoryChart>

        </div>
      </div>
    </div>
  )
}

const styles = {
  dateTimeInput: {
    borderRadius: 50,
    border: '1px #fff solid',
    height: 18,
    padding: 10,
    marginLeft: 4,
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

export default SiloGraphWidget
