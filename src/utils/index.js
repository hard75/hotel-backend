const esTemporadaAlta = (fecha) => {
    const temporadaAltaInicio = new Date(fecha.getFullYear(), 5, 1);
    const temporadaAltaFin = new Date(fecha.getFullYear(), 7, 31);
  
    if (fecha >= temporadaAltaInicio && fecha <= temporadaAltaFin) {
      return true;
    } else {
      return false;
    }
}

export {
    esTemporadaAlta
}