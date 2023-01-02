import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hola, soy Eliecer.
            <br className="hidden lg:inline-block" />
            Full Stack Developer
          </h1>
          <p className="mb-8 leading-relaxed">
            En mi recorrido de 15+ años por la industria IT como Especialista de
            soporte IT software, Admin de servicios IT, QA & Testing y ahora
            como desarrollador web full stack; he aprendido el valor de trabajar
            en equipo, la proactividad, el aprendizaje continuo, la autonomía en
            el trabajo, el compromiso y la responsabilidad, no solo en el
            trabajo, sino también en mi vida personal. ¡Doy gracias a la vida
            por eso!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Trabaja conmigo
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Ver mis trabajos
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://avatars.githubusercontent.com/u/92558922?v=4"
          />
        </div>
      </div>
    </section>
  );
}
