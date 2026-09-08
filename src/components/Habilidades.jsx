const habilidades = [
  // HTML
  {
    icon: (
      <img src="./assets/html.png" alt="HTML5" className="w-6 h-6 sm:w-8 sm:h-8" />
    ),
    title: "HTML5",
    description: "Utilização de marcação semântica e organização acessível de conteúdo para SEO (Search Engine Optimization)",
  },

  // CSS
  {
    icon: (
      <img src="./assets/css.png" alt="css" className="w-6 h-6 sm:w-8 sm:h-8" />
    ),
    title: "CSS3",
    description: "Estilização com layouts flexíveis, animações simples e design responsivo.",
  },

  //JavaScript
  {
    icon: (
      <img src="./assets/js.png" alt="JavaScript" className="w-6 h-6 sm:w-8 sm:h-8" />
    ),
    title: "JavaScript",
    description: "Interatividade com manipulação de DOM (Document Object Model), eventos e criação de efeitos dinâmicos.",
  },

  // React
  {
    icon: (
      <img src="./assets/react.png" alt="React" className="w-6 h-6 sm:w-8 sm:h-8" />
    ),
    title: "React",
    description: "interfaces componentizadas, hooks e gerenciamento de estado eficiente.",
  },

  // TailwindCSS
  {
    icon: (
      <img src="./assets/tailwindcss.png" alt="tailwindcss" className="w-6 h-6 sm:w-8 sm:h-8" />
    ),
    title: "TailwindCSS",
    description: "Estilização rápida e eficiente com classes utilitárias, responsividade e temas customizáveis.",
  },

  // Next.js
  {
    icon: (
      <img src="./assets/nextjs-icon.png" alt="Next.js" className="w-6 h-6 sm:w-8 sm:h-8" />
    ),
    title: "Next.js",
    description: "Desenvolvimento full-stack com React, SSR, SSG e roteamento baseado em arquivos.",
  },
]

const colorVariant = {
 white: {
    border: "hover:border-white",
  },
}

function Habilidades() {
  return (
    <div className="text-white">

      {/* Sobre Mim */}
      <section id="sobre" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8">Sobre mim</h2>

        <article className="bg-zinc-950 border rounded-2xl border-zinc-700/30 text-left sm:text-justify p-6 sm:p-8 max-w-3xl shadow-xl">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-zinc-300">
            Sou desenvolvedor front-end freelancer
            em formação, com experiência na criação de interfaces modernas e responsivas, com foco na experiência
            do usuário (UI/UX), e ofereço soluções para potencializar projetos.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-zinc-300 mt-4">
            Participei de projetos de criação de APIs com operações CRUD, incluindo o desenvolvimento de sistemas de gestão de estoque e de assinaturas digitais, 
            aplicando boas práticas de organização de código e integração entre front-end e back-end.
          </p>
        </article>
      </section>

      {/* Habilidades */}
      <section id="habilidades" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-12 text-center">
          Minhas habilidades
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {habilidades.map((hab) => {
            const color = colorVariant.white

            return (
              <div
                key={hab.title}
                className={`bg-zinc-950 border border-zinc-800 rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center transition-color ${color.border}`}
              >
                <div className={`p-3 sm:p-4 rounded-full mb-3 sm:mb-4`}>
                  {hab.icon}
                </div>
                <h3 className={`font-bold text-lg sm:text-xl mb-2`}>{hab.title}</h3>
                <p className="text-zinc-400 text-sm sm:text-base">{hab.description}</p>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Habilidades
