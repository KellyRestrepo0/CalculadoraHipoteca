import { useContext } from "react";
import FormContext from "../context/formContext";

const Formulario = () => {
  const {
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
  } = useContext(FormContext);

  const validarCampo = (campo, setError) => {
    setError(campo === "");
  };
  function calculateMortgage() {

    try {
        validarCampo(montoHipoteca, setErrorMonto);
        validarCampo(plazoHipoteca, setErrorPlazo);
        validarCampo(tipoInteres, setErrorInteres);
        validarCampo(tipoHipoteca, setErrorHipoteca);

        const totalPagos = plazoHipoteca * 12;
        const tasaInteres = tipoInteres / 12;
        if (tipoHipoteca === "Reembolso") {
          setPagoMensual(
            (montoHipoteca * (tasaInteres * Math.pow(1 + tasaInteres, totalPagos))) / (Math.pow(1 + tasaInteres, totalPagos) - 1)
          );
        } else{
          setPagoMensual(montoHipoteca * tasaInteres);
        }

        let reem =
          tipoHipoteca === "Reembolso"
            ? pagoMensual * totalPagos
            : pagoMensual * totalPagos + montoHipoteca;
        setReembolsoTotal(reem);
        return reembolsoTotal;   
    } catch {
      alert("Ha ocurido un error");
    }
  }
  function limpiarCampos() {
    setMontoHipoteca("");
    setPagoMensual("");
    setPlazoHipoteca("");
    setReembolsoTotal("");
    setTipoHipoteca("");
    setTipoInteres("");
  }
  return (
    <section className="m-[10%]">
      <div className="flex flex-row  max-sm:flex-col gap-[5%] mb-7">
        <h1 className="font-bold text-xl text-bgResultado">
          Calculadora de hipotecas
        </h1>
        <h3
          className="text-bgTxt text-s underline cursor-pointer"
          onClick={limpiarCampos}
        >
          Borrar todo
        </h3>
      </div>
      <div>
        <label className="text-sm font-medium text-bgSubTitle ">
          Monto de la hipoteca
        </label>
        <div className="mt-1 relative rounded-md shadow-sm border border-borderInputs-2px  hover:border-bgRsultado2">
          <div className="absolute inset-y-0 left-0  flex items-center ">
            <span className={`${errormonto ? 'bg-red-500 text-white' : 'bg-bgFondo text-gray-500 '} sm:text-sm  active:bg-bgBtn w-[35px] h-full p-[30%] font-semibold`}>
              $
            </span>
          </div>
          <input
            type="text"
            value={montoHipoteca}
            className="p-2 w-full text-black pl-10 "
            aria-invalid={errormonto}
            aria-errormessage="err1"
            onChange={(e) => setMontoHipoteca(e.target.value)}
          />
        </div>
        {errormonto && <span style={{ color: 'red' }}>El monto de la hipoteca es requerido.</span>}

      </div>
      <div className="">
        <div className="flex flex-row my-2 max-sm:flex-col max-md:flex-col gap-5">
          <div>
            <label className="text-sm font-medium text-bgSubTitle">
              Plazo de la hipoteca
            </label>
            <div className="mt-1 relative rounded-md shadow-sm border border-borderInputs-2px  hover:border-bgRsultado2 cursor-pointer">
              <input
                value={plazoHipoteca}
                type="text"
                className="p-2 w-full text-black pr-10 cursor-pointer"
                onChange={(e) => setPlazoHipoteca(e.target.value)}
                aria-invalid={errorplazo}
                aria-errormessage="err1"
              />
              <div className="absolute inset-y-0 right-0  flex items-center ">
                <span className={`sm:text-sm ${errorplazo ? 'bg-red-500 text-white' : 'bg-bgFondo text-gray-500 '} w-[50px] h-full p-[15%] font-semibold`}>
                  años
                </span>
              </div>
            </div>
            {errorplazo && <span style={{ color: 'red' }}>El plazo de la hipoteca es requerido.</span>}

          </div>
          
          <div>
            <label className="text-sm font-medium text-bgSubTitle ">
              Tipo de interés
            </label>
            <div className="mt-1 relative rounded-md shadow-sm border border-borderInputs-2px hover:border-bgRsultado2 cursor-pointer">
              <input
                value={tipoInteres}
                type="text"
                className="p-2 w-full text-black pl-10 cursor-pointer"
                onChange={(e) => setTipoInteres(e.target.value)}
                aria-invalid={errorInteres}
                aria-errormessage="err1"
              />
              <div className="absolute inset-y-0 right-0  flex items-center ">
                <span className={`${errormonto ? 'bg-red-500 text-white' : 'bg-bgFondo text-gray-500 '} sm:text-sm w-[35px] h-full p-[30%] font-semibold`}>
                  %
                </span>
              </div>
            </div>
            {errorInteres && <span style={{ color: 'red' }}>El tipo de interés es requerido.</span>}

          </div>
          
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-medium text-bgSubTitle">
            Tipo de hipoteca
          </h3>
          <label className="text-zinc-600 text-sm border border-borderInputs-2px rounded-md p-1  hover:border-bgBtn cursor-pointer">

            <input
              value="Reembolso"
              onChange={(e) => setTipoHipoteca(e.target.value)}
              className="m-2 cursor-pointer"
              type="radio"
              name="tipoHipoteca"
              placeholder=""
            />
            <strong>Reembolso</strong>
          </label>
          <label className="text-zinc-600 text-sm border border-borderInputs-2px rounded-md p-1  hover:border-bgBtn cursor-pointer active:bg-bgHoverInput">
            <input
              value="SoloInteres"
              onChange={(e) => setTipoHipoteca(e.target.value)}
              className="m-2 cursor-pointer"
              type="radio"
              name="tipoHipoteca"
              placeholder=""
            />
            <strong>Solo interés</strong>
          </label>
        </div>
        {errorHipoteca && <span style={{ color: 'red' }}>El tipo de hipoteca es requerido.</span>}

        <button
          className="bg-bgBtn hover:bg-bgHoverBtn rounded-full p-3 flex flex-row gap-2 mt-5 max-sm:w-[300px]"
          onClick={calculateMortgage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="#133041"
              d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z"
            />
          </svg>
          <strong>Calcular reembolsos</strong>
        </button>
      </div>
    </section>
  );
};

export default Formulario;
