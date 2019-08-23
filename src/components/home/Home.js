import React, { useEffect, useState } from 'react'
import AnalyticsWidget from '../elements/AnalyticsWidget'
import SiloStatusWidget from '../elements/SiloStatusWidget'
import SiloSearchWidget from '../elements/SiloSearchWidget'
import SpecificationWidget from '../elements/SpecificationWidget'
import Header from '../header/Header'
import { useStore } from '../../context/StateContext'
import getSilos from '../../services/SilosService'
import Spinner from '../spinner/Spinner'
import SiloGraphWidget from '../elements/SiloGraphWidget'
import GraphDataWidget from '../elements/GraphDataWidget'

const Home = ({ history }) => {
  const [{ silos }, dispatch] = useStore()
  const [{ measurements }, dispatchMeasurements] = useStore()

  const [showGraph, setShowGraph] = useState(false)

  useEffect(() => {
    getSilos(dispatch)
  }, [dispatch])

  useEffect(() => {
    if (silos['data'] !== undefined && silos.data.length > 0) {
      setSelectedSilo(silos.data[0])
    }
  }, [silos])

  const [selectedSilo, setSelectedSilo] = useState(null)

  if (silos === undefined || silos.loading === true) {
    return (
      <div style={styles.loading}>
        <Spinner/>
      </div>
    )
  } else {
    return (
      <div style={styles.container}>
        <div style={{ width: 1440 }}>
          <Header history={history}/>
          <div style={styles.contentContainer}>
            <SiloSearchWidget
              data={silos.data}
              selectedSiloId={selectedSilo && selectedSilo.id}
              setSelectedSilo={setSelectedSilo}
            />

            <div style={styles.widgetsContainer}>
              {selectedSilo && (
                showGraph && measurements.data ? <>
                    <SiloGraphWidget
                      data={measurements.data} selectedSiloId={selectedSilo.id}
                      onPressBack={() => setShowGraph(false)}/>
                    <GraphDataWidget data={measurements.data}/></> :
                  <>
                    <SiloStatusWidget silos={selectedSilo}/>
                    <div style={styles.detailWidgetsContainer}>
                      <AnalyticsWidget
                        silos={selectedSilo}
                        onPressAnalytics={() => setShowGraph(true)}/>
                      <SpecificationWidget silos={selectedSilo}/>
                    </div>
                  </>

              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'column',
  },
  contentContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  widgetsContainer: {
    minWidth:780,
    flex: 'initial',
    margin: '0 0px 20px 0',
  },
  detailWidgetsContainer: {
    display: 'flex',
    flex: 1,
    height: 400,
  },
  loading: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default Home
