function Sobre() {
  return (


    <div className="relative isolate overflow-hidden bg-white px-3 py-20 sm:py-32 lg:overflow-visible lg:px-0 ">
      <div className="absolute inset-0 -z-10 overflow-hidden">


        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,sky,transparent)] stroke-gray-200"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>


      <>
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-600 sm:text-4xl text-center">
          Sobre Mim
        </h2>
        <p className="text-center py-3 font-mono md:w-1/2 mx-auto">
          Com um conjunto de habilidades que incluem full-stack development, architecture, system design, devOps, sou um profissional completo na aréa de engenharia de software.
        </p>

        <br />
        <br />
        <br />

      </>


      <div className="relative isolate overflow-hidden px-4 pt-4 shadow-2xl rounded-3xl sm:px-4  md:pt-4 lg:flex lg:gap-x-20 lg:px-4 lg:pt-2 border-2 border-gray-200 md:mx-auto md:w-3/5 bg-white">



        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-1">
          <div className="">
            <div className="">
              <div className="">
                <p className="text-base/7 font-semibold bg-gradient-to-t from-sky-400 via-gray-400 to-sky-400 bg-clip-text text-transparent">

                  <span className="border border-gray-100 rounded px-2 py-1 text-sm font-mono"></span>
                </p>
                <h1 className="mt-2 text-2xl font-semibold text-gray-500">
                  Jemisse
                </h1>
                <p className="mt-3 text-xl/10 text-gray-600 font-sans ">
                  Desenvolvedor de software com experiência em várias tecnologias, com foco no desenvolvimento back-end com Java Spring Boot/Nodejs e front-end com Reactjs. Em adição as minhas capacidades tecnicas, tenho também fortes habilidades gerenciamento de tempo e multitarefa. Sou confiante quanto a minha habilidade de gerar valor e resultados a qualquer projecto.
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />





        </div>
      </div>
    </div>


  )
}

export default Sobre;


