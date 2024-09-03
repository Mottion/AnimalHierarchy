import React from "react"
import { Link } from "react-router-dom";

const EmptyHierarchy: React.FC = () => {
  return (
    <div className="sm:max-w-[625px] bg-neutral-900 border-none rounded-lg m-auto mt-8 pt-8">
      <p className="text-white text-center mt-4 text-base" >
        Você ainda não possui hierarquias criadas. Que tal começar a criar uma?{' '}
      </p>
      <div className="justify-self-center text-center py-8">
        <Link to="/create" className="text-yellow-400">+ Nova Lista</Link>
      </div>
    </div>
  )
}

export default EmptyHierarchy;