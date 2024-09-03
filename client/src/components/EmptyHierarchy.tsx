import React from "react"

const EmptyHierarchy: React.FC = () => {
  return (
    <div className="sm:max-w-[625px] bg-neutral-900 border-none rounded-lg m-auto pb-8">
      <p className="text-white text-center mt-4 text-base pt-8">
        Você ainda não possui hierarquias criadas. Que tal começar a criar uma?{' '}
      </p>
      <div className="justify-self-center pt-8 text-center">
        <button className="text-yellow-400">+ Nova Lista</button>
      </div>
    </div>
  )
}

export default EmptyHierarchy;