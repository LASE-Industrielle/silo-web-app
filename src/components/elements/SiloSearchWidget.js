import React, { useState } from 'react'
import SiloListItem from './SiloListItem'
import { SearchIcon } from '../../icons/SearchIcon'
import { useTranslation } from 'react-i18next'

const SiloSearchWidget = ({ data = [], selectedSiloId, setSelectedSilo }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const { t } = useTranslation()

  return (
    <div
      style={{
        backgroundColor: '#fff',
        maxWidth: 400,
        borderRadius: 6,
        margin: '0 20px 30px 0',
        boxShadow: '0px 3px 6px rgba(0,0,0,0.08)',
      }}
    >
      <div
        style={{
          fontSize: 18,
          color: '#898989',
          fontWeight: 'bold',
          padding: 24,
          borderBottom: '1px #E9E9E9 solid',
        }}
      >
        {t("Silos")}
      </div>

      <div
        style={{
          padding: 10,
          margin: 10,
          flex: 1,
          display: 'flex',
          borderRadius: 50,
          border: '1px #cfcfcf solid',
        }}
      >
        <div>
          <SearchIcon fill={'#C5C5C5'} height={12} width={12}/>
        </div>
        <input
          style={{
            flex: 1,
            fontSize: 12,
            border: '0px',
            outlineWidth: 0,
            paddingLeft: 10,
          }}
          value={searchQuery}
          onChange={event => setSearchQuery(event.target.value)}
          placeholder={t("Search by name or address...")}

        />
      </div>

      <div
        style={{
          overflow: 'auto',
          height: 562,
          padding: 10,
        }}
      >
        {data.filter(
          value =>
            value.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            value.location.toLowerCase().includes(searchQuery.toLowerCase()),
        ).map(silo => (
          <div key={silo.id} onClick={() => setSelectedSilo(silo)}>
            <SiloListItem
              isHighlighted={selectedSiloId === silo.id}
              silo={silo}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SiloSearchWidget
