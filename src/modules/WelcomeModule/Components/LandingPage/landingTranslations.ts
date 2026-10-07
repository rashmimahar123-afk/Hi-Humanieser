export type LandingLanguage = "en" | "es";

export const landingLanguageOptions: { value: LandingLanguage; label: string }[] = [
  { value: "en", label: "English" },
  { value: "es", label: "Español" },
];

export interface LandingHeroParagraph {
  text: string;
  bold?: string;
}

export interface LandingFaq {
  title: string;
  paragraph: string;
}

export interface LandingContent {
  logoTagline: string;
  heroParagraphs: LandingHeroParagraph[];
  letsGo: string;
  infoBoxText: string;
  infoBoxLinkText: string;
  infoBoxMiddle: string;
  infoBoxFaqText: string;
  infoBoxEnd: string;
  faqHeading: string;
  faqIntroBefore: string;
  faqIntroLink?: string;
  faqIntroAfter?: string;
  faqs: LandingFaq[];
  deeperBefore: string;
  deeperLink?: string;
  deeperAfter?: string;
  stillNotSure: string;
  quote: string;
  footerCopyright: string;
  footerProduct: string;
}

export const landingContent: Record<LandingLanguage, LandingContent> = {
  en: {
    logoTagline: "Human Habits. Clear Decision. Reliable Execution.",
    heroParagraphs: [
      { text: "", bold: "Build the human skills that make work work better." },
      {
        text: "Hi Humaniser helps people develop practical workplace behaviours, then gives teams a structured way to practise them together.",
      },
      {
        text: "Explore your pathway. Practise small actions. Build better ways of working together.",
      },
      {
        text: "",
        bold: "Because performance doesn’t grow despite people.\nIt grows because of them.",
      },
    ],
    letsGo: "Let’s Go",
    infoBoxText:
      "Curious? Explore how to join or bring Hi Humaniser!™ to your organisation. Visit",
    infoBoxLinkText: "HumanisingOurWorkplaces.com",
    infoBoxMiddle: "or check the",
    infoBoxFaqText: "FAQs",
    infoBoxEnd: "",
    faqHeading: "Frequently Asked Questions",
    faqIntroBefore: "Find answers to common questions below, read the full FAQs",
    faqIntroLink: "here",
    faqIntroAfter: "or pop us an email at",
    faqs: [
      {
        title: "What is Hi Humaniser!™?",
        paragraph: `Hi Humaniser!™ is a digital human-skills platform that helps people and teams build better ways of working.\n\nIt turns everyday behaviours — how we communicate, listen, build trust, make decisions and work together — into practical actions people can use in real work.\n\nIndividuals practise small actions. Teams practise shared rituals. Over time, those behaviours become part of how the team works.`,
      },
      {
        title: "Who is Hi Humaniser!™ for?",
        paragraph: `Hi Humaniser!™ is for organisations where performance depends on people working well together.\n\nIt is designed for individuals, teams and leaders who want to improve how they communicate, collaborate, build trust and make decisions.\n\nIf your work depends on people working well together, Hi Humaniser!™ is for you.`,
      },
      {
        title: "Is this just another platform or initiative I don’t have time for?",
        paragraph: `Fair question. Hi Humaniser!™ is designed to fit into the work people are already doing.\n\nIt does not require long training sessions or extra meetings. The actions are small, practical and designed to be used in real conversations, meetings and decisions.\n\nThe aim is to help teams build better habits without adding more noise to the working day.\n\nIf it feels like one more thing, it is not doing its job.`,
      },
      {
        title: "What problem is Hi Humaniser!™ trying to solve?",
        paragraph: `Hi Humaniser!™ helps tackle the everyday friction that gets in the way of good work.\n\nThat can look like unclear communication, slow decisions, low trust, team disconnection or people working hard without enough alignment.\n\nHi Humaniser!™ helps teams build the habits that make work clearer, more connected and easier to move forward.`,
      },
      {
        title: "How does Hi Humaniser!™ work?",
        paragraph: `Hi Humaniser!™ starts with you, then brings that practice into the team.\n\nThrough Personal Pathways, people explore everyday behaviours, choose small actions to try and reflect on what they notice.\n\nTeams then practise together through shared rituals and HH Moments, bringing those behaviours into real meetings, conversations and everyday work.\n\nFor organisations with several teams, wider views help show what is gaining momentum and where a little more support might help.`,
      },
      {
        title: "Are my reflections and activity private?",
        paragraph: `Yes. We want people to feel comfortable reflecting honestly, so personal reflections stay private unless you choose to share them.\n\nIf you do share a reflection, it is anonymous. Wider organisational views show patterns and trends, not individual responses.\n\nYour personal development record is yours too, so you decide what you want to bring into reviews or development conversations.`,
      },
      {
        title: "How much time does it take each week?",
        paragraph: `Very little. That is part of the design.\n\nHi Humaniser!™ fits into the meetings, conversations and decisions already happening, so there is no need to block out hours for it.\n\nMost actions take only a few minutes. A different question. A small shift in a meeting. A moment to reflect on what helped or got in the way.\n\nOver time, those small changes can build better habits without adding more to the working day.`,
      },
      {
        title: "How does Hi Humaniser!™ track progress and impact?",
        paragraph: `Hi Humaniser!™ brings together survey insights, platform activity and what teams are experiencing in everyday work.\n\nOrganisations can use short surveys at different points to track changes in areas such as clarity, alignment, safety, ownership and workload.\n\nThe platform also shows how people and teams are engaging with pathways, micro-actions and team rituals. Anonymous shared reflections add a valuable pulse check on what people are noticing along the way.\n\nTogether, this helps organisations see what is gaining traction, where teams may need more support and whether better ways of working are starting to take hold.`,
      },
      {
        title: "Is onboarding difficult or time-consuming?",
        paragraph: `No. Onboarding is designed to be simple and straightforward.\n\nWe help you set up your organisation and teams, invite people into the platform and give everyone a clear introduction to how Hi Humaniser!™ works.\n\nThere is no lengthy implementation process or training programme to complete before people can get started. Once they are in, they can begin exploring their Personal Pathways and teams can start practising together through their first Team Journey.`,
      },
      {
        title: "Does the whole organisation need to take part?",
        paragraph: `No. One team can have the full Hi Humaniser!™ experience without the whole organisation taking part.\n\nHi Humaniser!™ is also designed to work across several teams, creating opportunities to share learning, practise together and spot wider patterns across the organisation.\n\nAnd the impact does not stop with the teams using the platform. The behaviours people practise can travel into other projects, client relationships and everyday interactions, influencing how people work together even when others are not using Hi Humaniser!™ themselves.`,
      },
    ],
    deeperBefore: "Want to go deeper? Explore the full FAQs",
    deeperLink: "here",
    deeperAfter: ".",
    stillNotSure: "Still not sure, or just want to talk it through? Drop us a note at",
    quote: "Small shifts. Real work. Better outcomes.",
    footerCopyright: "© 2026 Humanising Our Workplaces Ltd. All rights reserved.",
    footerProduct: "Hi Humaniser!™ is a product of Humanising Our Workplaces Ltd.",
  },
  es: {
    logoTagline: "Mejores Hábitos. Mejores Formas de Trabajar.",
    heroParagraphs: [
      { text: "Desarrolla comportamientos prácticos para el trabajo." },
      {
        text: "Hi Humaniser te permite explorar y practicar hábitos que fortalecen capacidades humanas clave, para aplicarlos en situaciones reales y contribuir a un mejor rendimiento.",
      },
      {
        text: "Explora nuevas ideas. Practica pequeñas acciones. Construye mejores formas de trabajar juntos.",
      },
      { text: "", bold: "Porque los resultados no mejoran al margen de las personas. Mejoran gracias a ellas." },
    ],
    letsGo: "¡Vamos!",
    infoBoxText: "¿Tienes curiosidad? Descubre cómo funciona Hi Humaniser™ en",
    infoBoxLinkText: "HumanisingOurWorkplaces.com",
    infoBoxMiddle: "o consulta las",
    infoBoxFaqText: "preguntas frecuentes",
    infoBoxEnd: "más abajo.",
    faqHeading: "Preguntas Frecuentes",
    faqIntroBefore: "Encuentra respuestas a las preguntas más comunes o escríbenos a",
    faqs: [
      {
        title: "¿Qué es Hi Humaniser!™?",
        paragraph: `Hi Humaniser!™ es una plataforma digital que ayuda a personas y equipos a desarrollar capacidades humanas y construir mejores formas de trabajar.\n\nConvierte comportamientos cotidianos, como la forma en que nos comunicamos, escuchamos, construimos confianza, tomamos decisiones y colaboramos, en acciones prácticas que podemos aplicar en situaciones reales de trabajo.\n\nCada persona practica pequeñas acciones. Los equipos practican rituales compartidos. Con el tiempo, esos comportamientos se vuelven parte de la dinámica del equipo.`,
      },
      {
        title: "¿Para quién es Hi Humaniser!™?",
        paragraph: `Hi Humaniser!™ está pensado para organizaciones cuyo rendimiento depende de una buena colaboración entre las personas.\n\nEstá diseñado para personas, equipos y líderes que quieren mejorar cómo se comunican, colaboran, construyen confianza y toman decisiones.\n\nSi tu trabajo depende de coordinarte bien con otros, Hi Humaniser!™ es para ti.`,
      },
      {
        title: "¿Es otra plataforma o iniciativa para la que no tengo tiempo?",
        paragraph: `Si… es una pregunta válida. Hi Humaniser!™ está diseñado para integrarse en el trabajo que ya hacemos.\n\nNo requiere largas sesiones de formación ni reuniones adicionales. Las acciones son pequeñas, prácticas y están pensadas para aplicarse en conversaciones, reuniones y decisiones reales.\n\nEl objetivo es que los equipos desarrollen mejores hábitos sin añadir más carga al día de trabajo.\n\nSi se siente como una cosa más que hacer, entonces no está cumpliendo su propósito.`,
      },
      {
        title: "¿Qué problema busca resolver Hi Humaniser!™?",
        paragraph: `Hi Humaniser!™ ayuda a reducir esas dificultades del día a día que hacen que trabajar bien juntos sea más difícil.\n\nPuede ser una comunicación poco clara, decisiones que tardan demasiado, falta de confianza, desconexión dentro del equipo o mucho esfuerzo sin suficiente alineación.\n\nHi Humaniser!™ ayuda a los equipos a desarrollar hábitos que aportan más claridad, conexión y fluidez al trabajo.`,
      },
      {
        title: "¿Cómo funciona Hi Humaniser!™?",
        paragraph: `Hi Humaniser!™ empieza contigo y después lleva esa práctica al equipo.\n\nA través de los Recorridos Personales, cada persona explora comportamientos cotidianos, elige pequeñas acciones para poner en práctica y reflexiona sobre lo que va observando.\n\nDespués, el equipo practica de forma conjunta mediante rituales compartidos y HH Moments, incorporando esos comportamientos a reuniones, conversaciones y situaciones reales de trabajo.\n\nEn organizaciones con varios equipos, una visión más amplia permite ver dónde se está generando impulso y dónde puede hacer falta un poco más de apoyo.`,
      },
      {
        title: "¿Mis reflexiones y mi actividad son privadas?",
        paragraph: `Sí. Queremos que las personas se sientan cómodas reflexionando con honestidad, por eso las reflexiones personales permanecen privadas a menos que decidas compartirlas.\n\nSi compartes una reflexión, se muestra de forma anónima. Las vistas generales de la organización muestran patrones y tendencias, no respuestas individuales.\n\nTu recorrido de desarrollo personal también es tuyo, así que tú decides qué quieres llevar a una evaluación o a una conversación sobre tu progreso.`,
      },
      {
        title: "¿Cuánto tiempo requiere cada semana?",
        paragraph: `Muy poco. Y eso es parte del diseño.\n\nHi Humaniser!™ se integra en las reuniones, conversaciones y decisiones que ya forman parte del trabajo, así que no necesitas reservar horas adicionales.\n\nLa mayoría de las acciones requieren solo unos minutos. Hacer una pregunta diferente. Introducir un pequeño cambio en una reunión. Tomarte un momento para reflexionar sobre qué ayudó o qué dificultó las cosas.\n\nCon el tiempo, esos pequeños cambios ayudan a desarrollar mejores hábitos sin añadir más carga a la jornada laboral.`,
      },
      {
        title: "¿Cómo mide Hi Humaniser!™ el progreso y el impacto?",
        paragraph: `Hi Humaniser!™ combina información de encuestas, actividad dentro de la plataforma y lo que los equipos están experimentando en su trabajo cotidiano.\n\nLas organizaciones pueden utilizar encuestas breves en distintos momentos para observar cambios en áreas como claridad, alineación, seguridad psicológica, responsabilidad y carga de trabajo.\n\nLa plataforma también muestra cómo participan las personas y los equipos en los recorridos, las microacciones y los rituales de equipo. Las reflexiones compartidas de forma anónima aportan además una visión valiosa de lo que las personas van observando durante el proceso.\n\nEn conjunto, esta información permite ver qué está ganando fuerza, dónde puede hacer falta más apoyo y si las nuevas prácticas empiezan a consolidarse.`,
      },
      {
        title: "¿Es complicado o lleva mucho tiempo empezar a usar Hi Humaniser!™?",
        paragraph: `No. La puesta en marcha está diseñada para ser sencilla y clara.\n\nTe ayudamos a configurar la organización y los equipos, invitar a las personas a la plataforma y dar a todos una introducción clara sobre cómo funciona Hi Humaniser!™.\n\nNo hay un largo proceso de implementación ni un programa de formación que completar antes de empezar. Una vez dentro, cada persona puede comenzar a explorar sus Recorridos Personales y los equipos pueden empezar a practicar juntos a través de su primer Recorrido de Equipo.`,
      },
      {
        title: "¿Tiene que participar toda la organización?",
        paragraph: `No. Un solo equipo puede vivir la experiencia completa de Hi Humaniser!™ sin que tenga que participar toda la organización.\n\nHi Humaniser!™ también está diseñado para funcionar entre varios equipos, creando oportunidades para compartir aprendizajes, practicar juntos y detectar patrones más amplios dentro de la organización.\n\nY el impacto no se queda solo en los equipos que utilizan la plataforma. Los comportamientos que las personas practican pueden trasladarse a otros proyectos, relaciones con clientes e interacciones cotidianas, influyendo en cómo trabajamos juntos incluso cuando otras personas no utilizan Hi Humaniser!™ directamente.`,
      },
    ],
    deeperBefore: "¿Quieres profundizar un poco más o simplemente hablarlo?",
    stillNotSure: "Escríbenos a",
    quote: "Pequeños cambios. Práctica diaria. Mejores resultados.",
    footerCopyright: "© 2026 Humanising Our Workplaces Ltd. All rights reserved.",
    footerProduct: "Hi Humaniser!™ is a product of Humanising Our Workplaces Ltd.",
  },
};
