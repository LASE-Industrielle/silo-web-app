import React, { useEffect, useState } from 'react'
import {
  VictoryAxis,
  VictoryChart,
  VictoryLabel,
  VictoryLine,
  VictoryScatter,
} from 'victory'
import Select from 'react-select'
import DatePicker, { registerLocale } from 'react-datepicker'
import { BackButton } from '../../icons/BackButton'

import 'react-datepicker/dist/react-datepicker.css'
import './DateTimePicker.css'
import {
  getMeasurementsForGraph,
  getMeasurementsForGraphWithTimestamp,
} from '../../services/MeasurementsService'
import { useStore } from '../../context/StateContext'
import getCsvExport from '../../services/CsvService'
import { useTranslation } from 'react-i18next'
import de from 'date-fns/locale/de'

registerLocale('de', de)

const RoundDatePicker = ({ date, setDate }) => {
  return (<DatePicker
    selected={date}
    onChange={e => setDate(e)}
    dateFormat="dd.MM.yyyy"
    className="dateTimePicker"
    locale="de"
  />)
}

const RoundDateTimePicker = ({ time, setTime }) => {
  const { t } = useTranslation()
  return (<DatePicker
    className="dateTimePicker"
    showTimeSelect
    timeCaption={t("Time")}
    showTimeSelectOnly
    timeIntervals={15}
    selected={time}
    onChange={e => setTime(e)}
    timeFormat="HH:mm"
    dateFormat="HH:mm"
    locale="de"
  />)
}

const SiloGraphWidget = ({ data, onPressBack, selectedSiloId }) => {
  const { t } = useTranslation()
  const options = [
    { value: 'hour', label: `${t('Last hour')}` },
    { value: 'day', label: `${t('Last day')}` },
    { value: 'week', label: `${t('Last week')}` },
    { value: 'month', label: `${t('Last month')}` },
  ]

  const [startDate, setStartDate] = useState(new Date())
  const [startTime, setStartTime] = useState(new Date())

  const [endDate, setEndDate] = useState(new Date())
  const [endTime, setEndTime] = useState(new Date())

  const [{ measurements }, dispatch] = useStore()

  const [selectedPeriod, setSelectedPeriod] = useState('hour')
  const initialCsvState = 'init'
  const [selectedPeriodForCsv, setSelectedPeriodForCsv] = useState(
    initialCsvState)

  useEffect(() => {
    getMeasurementsForGraph(dispatch, selectedSiloId, selectedPeriod)
    setSelectedPeriodForCsv(selectedPeriod)
  }, [dispatch, selectedPeriod, selectedSiloId])

  useEffect(() => {
    // prevent setting empty value on first render
    if (selectedPeriodForCsv !== initialCsvState) {
      setSelectedPeriodForCsv('')
    }
  }, [startDate, startTime, endDate, endTime])

  return (

    <div
      style={styles.graphWidgetContainer}>
      <div
        style={styles.graphWidgetButtonsWrapper}>
        <div style={styles.graphWidgetHeader}>
          <div onClick={() => onPressBack()}
               style={styles.backArrow}
          ><BackButton fill={'#fff'}/></div>
          <div style={{ height: 24 }}>{t('Analytics')}</div>
        </div>


        <div><Select
          styles={styles.reactSelect}
          options={options}
          defaultValue={options[0]}
          onChange={option => setSelectedPeriod(option.value)}
        /></div>
        <div style={{ marginTop: 20 }}>
          <div style={styles.dateTimePickerLabel}>
            {t('Select start date & time')}
          </div>
          <div style={styles.dateTimePickerWrapper}>
            <RoundDatePicker date={startDate} setDate={setStartDate}/>
            <RoundDateTimePicker time={startTime} setTime={setStartTime}/>
          </div>

          <div style={{ marginTop: 20 }}>
            <div style={styles.dateTimePickerLabel}>
              {t('Select end date & time')}
            </div>
            <div style={styles.dateTimePickerWrapper}>
              <RoundDatePicker date={endDate} setDate={setEndDate}/>
              <RoundDateTimePicker time={endTime} setTime={setEndTime}/>
            </div>
          </div>
        </div>

        <div style={styles.actionButtonsWrapper}>
          <div style={styles.button}
               onClick={() => getMeasurementsForGraphWithTimestamp(dispatch,
                 selectedSiloId,
                 startDate, startTime,
                 endDate, endTime)}>
            {t('Apply custom dates')}
          </div>
          <div onClick={() => getCsvExport(selectedSiloId,
            startDate, startTime,
            endDate, endTime, selectedPeriodForCsv)}
               style={styles.button}>{t('Export data to csv')}
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
              fixLabelOverlap
              tickLabelComponent={<VictoryLabel dy={20}/>}
            />
            <VictoryAxis
              dependentAxis
              crossAxis={false}
              style={styles.victoryAxisY}
              domain={{ y: [0, 100] }}
            />
            <VictoryLine

              interpolation="monotoneX"
              style={styles.victoryLine}
              data={Object.entries(data).
                map((val) => ({ x: val[0], y: val[1] }))}
            />

            <VictoryScatter
              style={styles.victoryScatter}
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
    display: 'flex',
    alignItems: 'center',
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
    cursor: 'pointer',
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
  victoryScatter: {
    data: { fill: '#fff' },
  },

}

export default SiloGraphWidget
