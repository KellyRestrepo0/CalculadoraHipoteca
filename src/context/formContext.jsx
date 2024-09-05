import { createContext, useState } from "react";
import PropTypes from "prop-types";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const [montoHipoteca, setMontoHipoteca] = useState("");
  const [plazoHipoteca, setPlazoHipoteca] = useState("");
  const [tipoInteres, setTipoInteres] = useState("");
  const [tipoHipoteca, setTipoHipoteca] = useState("");
  const [pagoMensual, setPagoMensual] = useState(0);
  const [reembolsoTotal, setReembolsoTotal] = useState(0);
  const [errormonto, setErrorMonto] = useState(false);
  const [errorplazo, setErrorPlazo] = useState(false);
  const [errorInteres, setErrorInteres] = useState(false);
  const [errorHipoteca, setErrorHipoteca] = useState(false);
  return (
    <FormContext.Provider
      value={{
        montoHipoteca,
        setMontoHipoteca,
        plazoHipoteca,
        setPlazoHipoteca,
        tipoInteres,
        setTipoInteres,
        tipoHipoteca,
        setTipoHipoteca,
        reembolsoTotal,
        setReembolsoTotal,
        pagoMensual,
        setPagoMensual,
        errormonto,
        setErrorMonto,
        errorplazo,
        setErrorPlazo,
        errorInteres,
        setErrorInteres,
        errorHipoteca,
        setErrorHipoteca,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
FormProvider.propTypes = {
  children: PropTypes.node,
};
export default FormContext;
