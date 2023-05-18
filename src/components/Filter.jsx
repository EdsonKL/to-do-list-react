/* eslint-disable react/prop-types */

function Filter({filter, setFilter, setSort}) {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filter-options">
            <div>
                <p>Status:</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incomplete">Incompletas</option>
                </select>
            </div>
            <div>
                <p>Ordem Alfabetica</p>
                <button onClick={() => setSort("Asc")}>Cresc</button>
                <button onClick={() => setSort("Decres")}>Decres</button>

            </div>
        </div>
    </div>
  )
}

export default Filter