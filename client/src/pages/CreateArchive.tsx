import React from "react"
import ButtonComponent from '../components/ButtonComponent'

const CreateArchive: React.FC = () => {

  return (
    <div className="sm:max-w-[625px] bg-neutral-900 border-none rounded-lg m-auto mt-8 pt-8 flex items-center flex-col">
      <p className="text-center text-white text-3xl mb-8 font-semibold" >Novo Arquivo de Hierarquia</p>
      <p className="text-center text-white text-2xl font-light" style={{fontFamily: "Nerko One"}}>TITLE:</p>
      <input type="text" className="border-zinc-300 border bg-transparent w-[80%] text-neutral-100 text-center outline-0 mb-4 text-xl" />

      <div className="flex gap-4 w-[80%] pb-6">
        <ButtonComponent title="cancelar" style="border" />
        <ButtonComponent title="salvar" style="full" />
      </div>
    </div>
  )
}

export default CreateArchive;