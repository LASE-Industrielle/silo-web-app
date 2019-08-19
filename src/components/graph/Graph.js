import React, { useState } from 'react'
import Header from '../elements/Header'
import SiloSearchWidget from '../elements/SiloSearchWidget'
import SiloGraphWidget from '../elements/SiloGraphWidget'

const data = [
  {
    'id': 1,
    'sensor': {
      'id': 1,
      'serial_number': 'sensor#111',
      'type': 'LASER',
    },
    'values_by_day': {
      '2019-08-31': 34.0,
      '2019-08-30': 28.0,
      '2019-08-29': 28.0,
    },
    'last_update': '2 w, 3 d ago',
    'percentage': 84.0,
    'name': 'Solingen',
    'height': 60.0,
    'width': 10.0,
    'capacity': 4500.0,
    'location': 'Walter-Horn-Weg 1, Solingen',
  }]

const Graph = () => {

  const [selectedSilo, setSelectedSilo] = useState(null)

  return (
    <div style={styles.container}>
      <div style={{ width: '80%' }}>
        <Header/>
        <div style={styles.contentContainer}>
          <SiloSearchWidget data={data}/>


          <div style={styles.widgetsContainer}>
            <SiloGraphWidget silos={data[0]}/>

          </div>

        </div>
      </div>
    </div>
  )
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
    alignItems: 'space-between',
  },
  widgetsContainer: {
    flex: 3,
    margin: '0 0 20px 0',
  },

}
export default Graph
