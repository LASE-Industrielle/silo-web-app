import React from 'react'
import SiloListItem from '../elements/SiloListItem'

const Home = (props) => {

  return (
    <div style={{
      display:'flex',
      flex:1,
      alignSelf:'stretch',
      alignItems:'center',
      flexDirection:'column',
    }}>

      <div
        style={{
          width:'80%',
          }}>

      <div style={{
        display:'flex',
        flex:1,
        backgroundColor:'#FFF',
        alignSelf:'stretch',
        flexDirection:'row',
        padding: '20px 120px',
        borderBottomLeftRadius: 20,
        marginBottom: 20,
        boxShadow: '0px 3px 6px rgba(0,0,0,0.08)'
      }}>
      <div
        style={{ flex:1 }}>
        HEADER
      </div>
        <div style={{
        display:'flex',
          flex:1,
          justifyContent:'flex-end'
        }}>
          notifications, profile
        </div>
      </div>

        <div style={{
          display:'flex',
          flex:1,
          flexDirection:'row'
        }}>
          <div style={{
            backgroundColor:'#fff',
            flex:1,
            minWidth:400,
            borderRadius:6,
            margin: '0 20px 30px 100px',
            boxShadow: '0px 3px 6px rgba(0,0,0,0.08)',
          }}>
            <div
            style={{
              fontSize: 18,
              color: '#898989',
              fontWeight:'bold',
              padding:24,
              borderBottom: '1px #E9E9E9 solid'}}>
              Silos
            </div>

            <div style={{
              padding: 10,
              margin: 10,
              flex: 1,
              display: 'flex',
              borderRadius:50,
              border:'1px #cfcfcf solid',
            }}>
              <div> --(o) </div>
              <input
                style={{
                  flex: 1,
                  fontSize: 12,
                  border: '0px',
                  outlineWidth: 0,
                  paddingLeft:10
                }}
                placeholder={'search...'} />
            </div>

            <div style={{
              overflow:'auto',
              height:700,
              padding:10
            }}>
          <SiloListItem/>
          <SiloListItem/>
          <SiloListItem/>
          <SiloListItem/>
            </div>
          </div>

          <div style={{flex:3,              margin:'0 100px 20px 0',}}>

            <div style={{
              flex:1,
              height: 236,
              borderRadius:6,
              background: 'linear-gradient(#6CC799, #3A7F78)',
              padding: '28px 26px',
              color:'#fff',
              marginBottom:20,
              boxShadow: '0px 3px 6px rgba(0,0,0,0.08)',
            }}>
              <div style={{display:'flex'}}>
                <div style={{flex:1}}>
                  <div style={{
                    fontSize:16,
                    fontWeight:'bold',
                    marginBottom:6}}>Solingen</div>
                  <div style={{ fontSize:14,marginBottom:32}}>
                    Walter-Horn-Weg 1, Solingen
                  </div>
                </div>

                <div style={{
                  display:'flex',
                  flexDirection:'column',
                  flex:1,
                  alignItems:'flex-end'}}>
                  <div style={{
                    fontSize:16,
                    fontWeight:'bold',
                    marginBottom:6}}>36% full</div>
                  <div style={{ fontSize:14,marginBottom:32}}>
                    0" 100"
                  </div>
                </div>
              </div>

              <div style={{display:'flex',flex:1,}}>
                Meter
              </div>

            </div>
            <div style={{display:'flex',flex:1, height:400}}>
              <div style={{
                flex:1,
                borderRadius:6,
                marginRight:20,
                backgroundColor:'#fff',
                boxShadow: '0px 3px 6px rgba(0,0,0,0.08)',
                padding: '36px 30px 32px 30px'
              }}>
                donji left
              </div>
              <div style={{
                flex:1,
                borderRadius:6,
                backgroundColor:'#fff',
                boxShadow: '0px 3px 6px rgba(0,0,0,0.08)',
                padding: '36px 30px 32px 30px'
              }}>
                donji right
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Home;
