import { useMemo, useState } from 'react'
import GUNS from '../data/guns.js'
import GunCard from '../components/GunCard.jsx'

const TYPES = ['All', 'Pistol', 'Rifle', 'Shotgun']

function Catalog({ onAdd }) {
  const [query, setQuery] = useState('')
  const [type, setType] = useState('All')

  const filtered = useMemo(() => {
    return GUNS.filter((gun) => {
      const matchesQuery = gun.name.toLowerCase().includes(query.trim().toLowerCase())
      const matchesType = type === 'All' || gun.type === type
      return matchesQuery && matchesType
    })
  }, [query, type])

  return (
    <>
      <section className="masthead">
        <h1 className="display">Hardware, by the spec sheet.</h1>
        <p className="lede">
          A small armory of pistols, rifles, and shotguns. Every piece listed with its
          type, caliber, and price — nothing else.
        </p>
      </section>

      <section>
        <div className="list-head">
          <h2>Current stock</h2>
          <span className="count">{filtered.length} pieces</span>
        </div>

        <div className="toolbar">
          <input
            type="text"
            className="search-input"
            placeholder="Search guns by name…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select
            className="filter-select"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            {TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        {filtered.length === 0 ? (
          <p className="no-match">no guns match</p>
        ) : (
          <ul className="stock">
            {filtered.map((gun) => (
              <GunCard key={gun.name} gun={gun} onAdd={onAdd} />
            ))}
          </ul>
        )}
      </section>
    </>
  )
}

export default Catalog
