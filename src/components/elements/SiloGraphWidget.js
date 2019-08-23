import React, { useEffect, useState } from 'react'
import { VictoryAxis, VictoryChart, VictoryLine } from 'victory'
import Select from 'react-select'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import './DateTimePicker.css'
import {
  getMeasurementsForGraph,
  getMeasurementsForGraphWithTimestamp,
} from '../../services/MeasurementsService'
import { useStore } from '../../context/StateContext'
import getCsvExport from  '../../services/CsvService'

const options = [
  { value: 'hour', label: 'Last hour' },
  { value: 'day', label: 'Last day' },
  { value: 'week', label: 'Last week' },
  { value: 'month', label: 'Last month' },
]

const RoundDatePicker = ({ date, setDate }) => {
  return (<DatePicker
    selected={date}
    onChange={e => setDate(e)}
    dateFormat="dd.MM.yyyy."
    className="dateTimePicker"
  />)
}

const RoundDateTimePicker = ({ time, setTime }) => {
  return (<DatePicker
    className="dateTimePicker"
    showTimeSelect
    showTimeSelectOnly
    timeIntervals={15}
    selected={time}
    onChange={e => setTime(e)}
    timeFormat="HH:mm"
    dateFormat="HH:mm"
  />)
}

const SiloGraphWidget = ({ data, onPressBack , selectedSiloId}) => {

  const [startDate, setStartDate] = useState(new Date())
  const [startTime, setStartTime] = useState(new Date())

  const [endDate, setEndDate] = useState(new Date())
  const [endTime, setEndTime] = useState(new Date())

  const [{ measurements }, dispatch] = useStore()
  const [selectedPeriod, setSelectedPeriod] = useState('hour')

  useEffect(() => {
    getMeasurementsForGraph(dispatch, selectedSiloId, selectedPeriod)
  }, [dispatch, selectedPeriod, selectedSiloId])

  return (

    <div
      style={styles.graphWidgetContainer}>
      <div
        style={styles.graphWidgetButtonsWrapper}>
        <div style={styles.graphWidgetHeader}><span
          onClick={() => onPressBack()}
          style={styles.backArrow}>&lt;</span> Analytics
        </div>


        <div><Select
          styles={styles.reactSelect}
          options={options}
          defaultValue={options[0]}
          onChange={option => setSelectedPeriod(option.value)}
        /></div>
        <div style={{ marginTop: 20 }}>
          <div style={styles.dateTimePickerLabel}>
            Select start date & time
          </div>
          <div style={styles.dateTimePickerWrapper}>
            <RoundDatePicker date={startDate} setDate={setStartDate}/>
            <RoundDateTimePicker time={startTime} setTime={setStartTime}/>
          </div>

          <div style={{ marginTop: 20 }}>
            <div style={styles.dateTimePickerLabel}>
              Select end date & time
            </div>
            <div style={styles.dateTimePickerWrapper}>
              <RoundDatePicker date={endDate} setDate={setEndDate}/>
              <RoundDateTimePicker time={endTime} setTime={setEndTime}/>
            </div>
          </div>
        </div>

        <div style={styles.actionButtonsWrapper}>
          <div style={styles.button}
               onClick={() => getMeasurementsForGraphWithTimestamp(dispatch, selectedSiloId,
                 startDate, startTime,
                 endDate, endTime)}>
            Apply
          </div>
          <div onClick={()=> getCsvExport(selectedSiloId)} style={styles.button}>Export data to csv
          </div>
        </div>
      </div>
      <div style={styles.graphWrapper}>
        <div>

          <VictoryChart
            width={472}
            height={394}
          >
            <VictoryAxis
              style={styles.victoryAxisX}
            />
            <VictoryAxis
              dependentAxis
              style={styles.victoryAxisY}
            />
            <VictoryLine
              interpolation="natural"
              style={styles.victoryLine}
              data={Object.entries(data).
                map((val) => ({ x: val[0], y: val[1] }))}
            />
          </VictoryChart>

        </div>
      </div>
    </div>
  )
}

const styles = {
  selectPeriodDropdown: {
    borderRadius: 50,
    border: '1px #fff solid',
    height: 18,
    padding: 10,
    marginLeft: 4,
    fontSize: 12,
    color: '#fff',

  },
  button: {
    cursor: 'pointer',
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
  graphWidgetContainer: {
    display: 'flex',
    flex: 1,
    padding: '28px 18px',
    height: 400,
    width: 728,
    background: 'linear-gradient(180deg, #6CC799, #439A93)',
    marginBottom: 20,
    borderRadius: 6,
    boxShadow: '0px 3px 6px rgba(0,0,0,0.08)',

  },
  graphWidgetHeader: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 42,
  },
  graphWidgetButtonsWrapper: {
    display: 'flex',
    flex: 'initial',
    flexDirection: 'column',
    width: 250,
  },
  graphWrapper: {
    display: 'flex',
    marginLeft: 26,
    flex: 1,
    width: 462,
    height: 394,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#fff',
  },
  backArrow: {
    cursor:'pointer',
    width: 24,
    marginRight: 8,
  },
  dateTimePickerLabel: {
    color: '#fff',
    fontSize: 12,
    marginBottom: 10,
  },
  dateTimePickerWrapper: { display: 'flex' },

  reactSelect: {
    control: () => ({
      borderRadius: 50,
      border: '1px #fff solid',
      flex: 1,
      height: 38,
      display: 'flex',
      cursor: 'pointer',
    }),
    singleValue: () => ({ color: '#fff', fontSize: 12 }),
    option: (base, state) => ({
      ...base,
      fontSize: 12,
      color: state.isSelected ? '#6CC799' : '#c9c9c9',
      backgroundColor: state.isSelected ? '#F5F5F5' : '#fff',
      fontWeight: state.isSelected ? 'bold' : 'normal',

      '&:hover': {
        color: '#6CC799',
        backgroundColor: '#E2F4EB',
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
  },

  actionButtonsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    flex: 1,
  },

  victoryAxisX: {
    axis: { stroke: 'none' },
    grid: {
      stroke: '#58A08C', strokeDasharray: '5,5',
      strokeWidth: 0.5,
      fill: '#fff',
    },
    tickLabels: { fill: '#fff' },
  },

  victoryAxisY: {
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
  },
  victoryLine: {
    data: { stroke: '#fff' },
    parent: { border: '5px solid #fff' },
  },
}

export default SiloGraphWidget
