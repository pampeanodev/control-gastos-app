import Gasto from "./Gasto"

const ListadoGastos = ({
  gastos,
  gastosFiltrados,
  filtro,
  setGastoEditar,
  eliminarGasto}) => {
  return (
    <div className="listado-gastos contenedor">

      { filtro ? (
          <>
            <h2>{gastosFiltrados.length ? 'Gastos' : 'No hay gastos para el filtro Aplicado'}</h2>
            {gastosFiltrados.map(gasto => (
                <Gasto 
                  key={gasto.id}
                  gasto={gasto}
                  setGastoEditar={setGastoEditar}
                  eliminarGasto={eliminarGasto} 
                />
            ))}
          </>             
        ) : (
          <>
            <h2>{gastos.length ? 'Gastos' : 'No hay gastos aún'}</h2>
            {gastos.map(gasto => (
              <Gasto 
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto} 
              />
            ))}
          </>
      )}
    </div>
  )
}

export default ListadoGastos