import React from 'react'
import AnalyticsWidget from '../elements/AnalyticsWidget'
import SiloStatusWidget from '../elements/SiloStatusWidget'
import SiloSearchWidget from '../elements/SiloSearchWidget'
import SpecificationWidget from '../elements/SpecificationWidget'
import Header from '../elements/Header'

const data = [
  {
    "id": 1,
    "sensor": {
      "id": 1,
      "serial_number": "sensor#111",
      "type": "LASER"
    },
    "values_by_day": {
      "2019-08-31": 34.0,
      "2019-08-30": 28.0,
      "2019-08-29": 28.0
    },
    "last_update": "2 w, 3 d ago",
    "percentage": 84.0,
    "name": "Solingen",
    "height": 60.0,
    "width": 10.0,
    "capacity": 4500.0,
    "location": "Walter-Horn-Weg 1, Solingen"
  },
  {
    "id": 2,
    "sensor": {
      "id": 2,
      "serial_number": "sensor#222",
      "type": "LASER"
    },
    "values_by_day": {
      "2019-08-05": 63.0,
      "2019-07-22": 85.0,
      "2019-07-20": 34.0
    },
    "last_update": "1 w, 1 d ago",
    "percentage": 40.0,
    "name": "Berlin",
    "height": 50.0,
    "width": 15.0,
    "capacity": 3000.0,
    "location": "Gabriel-Max-Straße 4, 10245 Berlin, Germany"
  },
  {
    "id": 3,
    "sensor": {
      "id": 3,
      "serial_number": "TESTING SENSOR",
      "type": "LASER"
    },
    "values_by_day": {
      "2019-08-25": 100.0,
      "2019-08-22": 99.0,
      "2019-08-15": 98.0
    },
    "last_update": "1 w, 5 d ago",
    "percentage": 100.0,
    "name": "TEST SILOS",
    "height": 0.0,
    "width": 0.0,
    "capacity": 6000.0,
    "location": "Testing location"
  }
]

const Home = (props) => {

  return (
    <div style={styles.container}>
      <div style={{ width: '80%' }}>
        <Header/>
        <div style={styles.contentContainer}>
          <SiloSearchWidget data={data}/>

          <div style={styles.widgetsContainer}>
            <SiloStatusWidget name={'Solingen'}
                              address={'Walter-Horn-Weg 1, Solingen'}
                              siloCapacityPercentage={36}/>
            <div style={styles.detailWidgetsContainer}>
              <AnalyticsWidget/>
              <SpecificationWidget/>
            </div>
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
  },
  widgetsContainer: {
    flex: 3,
    margin: '0 100px 20px 0',
  },
  detailWidgetsContainer: {
    display: 'flex',
    flex: 1,
    height: 400 }
}
export default Home
