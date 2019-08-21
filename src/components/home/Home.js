import React, { useState, useEffect } from "react";
import AnalyticsWidget from "../elements/AnalyticsWidget";
import SiloStatusWidget from "../elements/SiloStatusWidget";
import SiloSearchWidget from "../elements/SiloSearchWidget";
import SpecificationWidget from "../elements/SpecificationWidget";
import Header from "../header/Header";
import { useStore } from "../../context/StateContext";
import getSilos from "../../services/SilosService";
import Spinner from "../spinner/Spinner";

const Home = ({ history }) => {
  const [{ silos }, dispatch] = useStore();

  useEffect(() => {
    getSilos(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (silos["data"] !== undefined && silos.data.length > 0) {
      setSelectedSilo(silos.data[0]);
    }
  }, [silos]);

  const [selectedSilo, setSelectedSilo] = useState(null);

  if (silos === undefined || silos.loading === true) {
    return (
      <div style={styles.loading}>
        <Spinner />
      </div>
    );
  } else {
    return (
      <div style={styles.container}>
        <div style={{ width: "80%" }}>
          <Header history={history} />
          <div style={styles.contentContainer}>
            <SiloSearchWidget
              data={silos.data}
              selectedSiloId={selectedSilo && selectedSilo.id}
              setSelectedSilo={setSelectedSilo}
            />

            <div style={styles.widgetsContainer}>
              {selectedSilo && (
                <>
                  <SiloStatusWidget silos={selectedSilo} />
                  <div style={styles.detailWidgetsContainer}>
                    <AnalyticsWidget silos={selectedSilo} />
                    <SpecificationWidget silos={selectedSilo} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const styles = {
  container: {
    display: "flex",
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "column"
  },
  contentContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row"
  },
  widgetsContainer: {
    flex: 3,
    margin: "0 100px 20px 0"
  },
  detailWidgetsContainer: {
    display: "flex",
    flex: 1,
    height: 400
  },
  loading: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};

export default Home;
