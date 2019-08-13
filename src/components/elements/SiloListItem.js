import React from 'react'

const SiloListItem = () => {
  return (
    <div style={{
      display:'flex',
      padding: '10px 14px',
      borderBottom: '1px #E9E9E9 solid'
    }}>
      <div style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        border:'1px grey solid',
        width:46,
        height:46,
        borderRadius:'50%',
        marginRight:16
      }}>36%</div>
      <div style={{
        display:'flex',
        flex:2,
        flexDirection:'column',
        justifyContent:'center',}}>
        <div style={{ fontSize: 16, fontWeight: 'bold' }}>Solingen</div>
        <div style={{ fontSize: 14,color: '#898989'}}>Walter-Horn-Weg 1, Solingen</div>
      </div>
      <div style={{
        display:'flex',
        flex:1,
        fontSize:14,
        color: '#c5c5c5',
        alignItems:'flex-start',
        justifyContent:'flex-end'
      }}>
        <div>1d 2w ago</div>
      </div>
    </div>
  )
}

export default SiloListItem
