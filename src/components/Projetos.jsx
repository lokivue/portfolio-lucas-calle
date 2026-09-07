const projetos = [
  {
    title: "Blog de Programação",
    description: "Este projeto foi desenvolvido como um blog educativo com foco em iniciantes, reunindo conteúdos introdutórios de programação em um formato simples de navegar.",
    techs: ["HTML", "JS", "TailwindCSS"],
    image: "./blog-de-programacao.png",
    link: "https://github.com/lokivue/blog-de-programacao",
  },
  {
    title: "Math Calculator",
    description: "Uma calculadora web que oferece uma interface funcional para operações matemáticas básicas e UI responsiva.",
    techs: ["NextJS", "TailwindCSS"],
    image: "./math-calculator.png",
    link: "https://github.com/lokivue/math-calculator",
  },
  {
    title: "Stokki Life",
    description: "Software para microempreendimentos com produtos em pó (shakes e chás) em controle de estoque, validade e reposição, com dados em tempo real.",
    techs: ["Laravel", "TailwindCSS", "MySQL"],
    image: "./stokki-life.png",
    link: "https://github.com/lokivue/stokki-life",
  },
  {
    title: "Subtrack",
    description: "Aplicativo mobile para gerenciamento de assinaturas, permitindo acompanhar gastos mensais e receber lembretes de vencimento.",
    techs: ["JS", "React Native", "Async Storage"],
    image: "./subtrack-mobile.png",
    link: "https://github.com/lokivue/subtrack",
  },
]

const ExternalLinkIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
  </svg>
)

function Projetos() {
  return (
    <section id="projetos" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 sm:mb-12 font-bold text-center">
          Meus projetos
        </h2>


        <div className="grid grid-cols-1 gap-7 sm:gap-8 lg:gap-10">
          {projetos.map((projeto) => (
            <article
              key={projeto.title}
              className="bg-zinc-950 rounded-2xl border-zinc-800 overflow-hidden transition-all duration-300 shadow-xl"
            >
              <div
                className={`flex flex-col ${projetos.indexOf(projeto) % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                <div className="lg:w-1/2 overflow-hidden">
                  <div className="w-full h-48 sm:h-56 md:h-64 lg:h-full min-h-50 lg:min-h-70 bg-linear-to-br from-zinc-950 to-zinc-950 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="mx-auto flex items-center justify-center">
                        <img src={projeto.image} alt={projeto.title} className="w-full h-full object-cover pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 lg:p-8 lg:w-1/2 flex flex-col justify-center">
                  <ul className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    {projeto.techs.map((tech) => (
                      <li
                        key={tech}
                        className="text-xs font-semibold bg-rose-500/10 text-red-500 px-2.5 sm:px-3 py-1 rounded-full border border-red-500/20"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-foreground">
                    {projeto.title}
                  </h3>
                  <p className="text-zinc-100 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                    {projeto.description}
                  </p>

                  <a
                    href={projeto.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black inline-flex items-center justify-center gap-2 bg-zinc-100 font-bold py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl transition-colors w-fit text-sm sm:text-base"
                  >
                    Ver projeto
                    <ExternalLinkIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div >
    </section >
  )
}

export default Projetos
