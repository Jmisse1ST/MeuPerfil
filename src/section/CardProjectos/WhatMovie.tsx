import { FaReact, FaGithub, FaGithubAlt } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiVercel } from 'react-icons/si';

function CardFilmes() {
  return (

    
    <div className="relative isolate overflow-hidden bg-white px-3 py-0 sm:py-32 lg:overflow-visible lg:px-0 ">
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




      <div className="relative isolate overflow-hidden px-4 pt-4 shadow-2xl rounded-3xl sm:px-4  md:pt-4 lg:flex lg:gap-x-20 lg:px-4 lg:pt-2 border-2 border-gray-200 md:mx-auto md:w-3/5 bg-white">



        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-1 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base/7 font-semibold bg-gradient-to-t from-sky-400 via-gray-400 to-sky-400 bg-clip-text text-transparent">
                  <a
                    href="/portifolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-100 rounded px-2 py-1 text-sm font-mono hover:bg-gray-100/10 transition-colors"
                  >
                    Visitar
                  </a>
                </p>
                
                <h1 className="mt-2 text-4xl font-semibold tracking-tight bg-gradient-to-b from-gray-800 via-sky-400 to-emerald-800 bg-clip-text text-transparent">
                  Portifolio
                </h1>
                <p className="mt-3 text-3xl/10 bg-gradient-to-r from-gray-800 via-sky-400 to-emerald-800 bg-clip-text text-transparent">
                  Uma Single Page Application moderna e responsiva, desenvolvida para destacar minhas habilidades e projetos como Software Developer/Enginner.
                </p>
              </div>
            </div>
          </div>
          
          <br />
          <br />

          <div className="@container relative min-h-120 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">

            <div className="absolute inset-x-1 top-1 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
              <img
                alt=""

                src='/JemissePortifolio.png'

                className="size-full object-cover object-top"
              />
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base/7 text-gray-600 lg:max-w-lg
              py-9
              ">
                <div className="flex flex-wrap gap-2 text-xl/8 bg-gradient-to-r from-gray-800 via-sky-400 to-emerald-800 bg-clip-text text-transparent font-mono">
                  {/* TypeScript */}
                  <span className="border border-gray-300 rounded px-2 py-1 text-sm flex items-center gap-1">
                    <SiTypescript className="text-blue-600" /> TypeScript
                  </span>

                  {/* React */}
                  <span className="border border-gray-300 rounded px-2 py-1 text-sm flex items-center gap-1">
                    <FaReact className="text-blue-400" /> React
                  </span>

                  {/* Tailwind */}
                  <span className="border border-gray-300 rounded px-2 py-1 text-sm flex items-center gap-1">
                    <SiTailwindcss className="text-cyan-400" /> Tailwind
                  </span>

                  {/* Git(Hub) */}
                  <span className="border border-gray-300 rounded px-2 py-1 text-sm flex items-center gap-1">
                    <FaGithub className="text-cyan-700" /> Git(Hub)
                  </span>

                  {/* Git Actions */}
                  <span className="border border-gray-300 rounded px-2 py-1 text-sm flex items-center gap-1">
                    <FaGithubAlt className="text-cyan-600"/> Git Actions
                  </span>

                  {/* Vercel */}
                  <span className="border border-gray-300 rounded px-2 py-1 text-sm flex items-center gap-1">
                    <SiVercel className="text-black/100 " /> Vercel
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      
    </div>


    


  )
}

export default CardFilmes;





