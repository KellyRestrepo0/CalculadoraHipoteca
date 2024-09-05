import "./App.css";
import Formulario from "./components/formulario";
import Resultado from "./components/Resultado";

function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen max-sm:h-0">
        <div className=" w-[80%] h-[60%] max-sm:w-[100%] max-sm:hyphens-manual overflow-y-visible grid grid-cols-2 max-sm:grid-cols-1 bg-white rounded-tr-xl rounded-tl-xl rounded-bl-xl ">
          <div className="bg-white h-[100%]">
            <Formulario />
          </div>
          <div className="bg-bgResultado h-[100%] rounded-tr-xl  rounded-br-xl  rounded-bl-[20%] max-sm:rounded-b-none">
            <Resultado />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
