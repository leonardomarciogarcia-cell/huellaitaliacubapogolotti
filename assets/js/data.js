/* ============================================================
   POGOLOTTI · Contenido del sitio
   ------------------------------------------------------------
   Para ampliar la web: añade una nueva entrada al objeto
   `peopleData` (con su imagen en assets/img/personajes/ y
   assets/img/grande/) y, si quieres un nuevo bloque cronológico,
   una entrada en `periodData` más una sección en index.html.
   El orden de visualización sigue el de `peopleOrder`.

   Un bloque de `periodData` puede incluir, opcionalmente:
     · pill     → texto de la etiqueta de fechas del popup
     · sections → [{ label, paras: [..], items: [[clave, texto], ..] }]
       (`gallery: true` → galería de Futurismo; `gallery: "barrio"` → galería del barrio; ver `galleries`)
       (`video: { src }` → reproductor en el popup, solo visible si el archivo existe y se reproduce)
       (`link: { text, url }` → enlace que abre el vídeo de YouTube en un popup, respetando su tiempo de inicio)
       (`kicker`: línea superior opcional de la sección)
     · (en `peopleData`) sections → mismas secciones que en `periodData`, bajo la descripción de la ficha
     · nodeView → { video: { label, title, src } }: vista reducida del popup al pulsar el nodo
       del timeline (solo cita, notas y enlace al vídeo). La figura del bloque sigue abriendo la ficha completa.
       `src` del vídeo: URL de YouTube/Vimeo, o ruta a un .mp4/.webm (p. ej. assets/video/futurismo.mp4).
       Para Futurismo basta con copiar el vídeo como assets/video/futurismo.mp4.
       Si el archivo aún no existe (o `src` está vacío), el reproductor muestra «próximamente».
   ============================================================ */

const peopleOrder = ["dino", "marcelo", "graziella"];

const peopleData = {
  dino: {
    year: "1873–1923 · LA FUNDACIÓN",
    title: "Doménico «Dino» Pogolotti",
    role: "Empresario y promotor urbano · Piamonte → Marianao",
    short: "El italiano que dio nombre a un barrio obrero de La Habana.",
    desc: "Emigrado del Piamonte, llegó a Cuba en 1898 y compró un terreno barato en las afueras rurales de La Habana, devastado tras las guerras de independencia. Para elevar su valor impulsó una urbanización completa: trazado de calles, sistema de agua potable y viviendas. Así nació el Reparto Pogolotti, en Marianao, primer barrio obrero construido en Cuba en el siglo XX, que aún lleva su apellido.",
    sections: [
      {
        label: "Domenico Pogolotti: el italiano que encontró en Cuba el escenario de sus sueños",
        paras: [
          "De un pequeño pueblo del Piamonte a los terrenos de Marianao, la vida de Dino Pogolotti estuvo marcada por la aventura migratoria, el espíritu emprendedor y una singular vocación por transformar el paisaje urbano cubano.",
          "El 9 de enero de 1873 nació en Giaveno, una pequeña localidad de la región del Piamonte, al noroeste de Italia, Domenico Pogolotti, conocido familiarmente como Dino. Su nombre quedaría unido para siempre a la historia urbana de Cuba, particularmente a la fundación del primer barrio obrero del país, que con el paso del tiempo adoptaría su apellido.",
          "Hijo de Francesco Pogolotti y María Carnino, fue el cuarto de nueve hermanos. Sus padres eran propietarios de un horno de panadería situado en las proximidades de la actual Via del Forno, en Giaveno, actividad que proporcionaba cierta estabilidad económica a la familia y permitió ofrecer a sus hijos una educación adecuada.",
          "Dino cursó estudios en la escuela del seminario de su localidad natal. Allí desarrolló un particular interés por los clásicos griegos y latinos, una inclinación intelectual que conservaría durante toda su vida. Su formación estuvo marcada tanto por los valores del trabajo, la disciplina y el sentido práctico como por una profunda curiosidad cultural. Aunque mantuvo siempre sus convicciones católicas, no sintió verdadera vocación sacerdotal y decidió apartarse del camino religioso para emprender una aventura que cambiaría definitivamente su destino.",
          "En 1895 embarcó rumbo a Nueva York, como tantos otros europeos que buscaban en América nuevas oportunidades."
        ]
      },
      {
        label: "De la incertidumbre neoyorquina a una nueva vida",
        paras: [
          "Su llegada a Estados Unidos estuvo lejos de las expectativas de prosperidad que acompañaban a los emigrantes. Sin familiares ni conocidos que pudieran ayudarlo, comenzó trabajando como camarero, empleo que perdió poco después. Durante un tiempo tuvo que ganarse la vida como estibador en los muelles, enfrentándose a las dificultades de una existencia precaria.",
          "Una circunstancia inesperada modificó su suerte. Mientras leía los anuncios de empleo, encontró uno en el que se solicitaba un profesor de francés. Sin referencias profesionales y con un conocimiento limitado del idioma, decidió presentarse ante el anunciante, un rico industrial propietario de fábricas de sombreros y pinturas.",
          "Pogolotti propuso trabajar durante dos semanas sin remuneración, confiando en que su desempeño demostraría sus capacidades. El industrial aceptó y le presentó a su hija, Grace Joyce, quien sería su alumna y posteriormente su esposa.",
          "El matrimonio le proporcionó una nueva estabilidad y, a través de la herencia recibida por Grace, Dino encontró los recursos económicos que más tarde le permitirían desarrollar sus proyectos empresariales en Cuba. De aquella unión nació Marcelo Pogolotti, quien llegaría a convertirse en una de las figuras más relevantes de la pintura cubana del siglo XX."
        ]
      },
      {
        label: "Cuba: el comienzo de una aventura empresarial",
        paras: [
          "A finales de 1898, Pogolotti llegó a La Habana contratado como secretario de Frank Steinhart, representante consular estadounidense durante el período de intervención norteamericana y futuro empresario vinculado al sistema de tranvías de la capital.",
          "Su llegada coincidió con un momento de profundas transformaciones políticas, económicas y urbanas. La ciudad comenzaba a experimentar nuevas dinámicas de crecimiento, mientras las comunicaciones y el desarrollo de infraestructuras favorecían la expansión de sus núcleos poblacionales.",
          "En 1903, aprovechando los recursos económicos procedentes de la herencia de su esposa, comenzó a adquirir extensas propiedades en Marianao. Entre ellas figuraban las fincas Larrazábal, Benítez, Jesús María y San José, terrenos que posteriormente formarían parte de distintos repartos de aquella zona en expansión.",
          "Pogolotti no se limitó a comprar tierras. Se interesó por la urbanización, la construcción y el desarrollo de infraestructuras, actividades que le permitieron diversificar sus negocios y adquirir una posición cada vez más importante en el ámbito empresarial local. Él mismo gustaba definirse como un proyectista, expresión que refleja su interés por concebir y materializar iniciativas de transformación territorial.",
          "En 1905, asociado con Bartolomé Ferrer, dirigió la fábrica de ladrillos El Tejar. También desempeñó responsabilidades en la Compañía Nacional Constructora, donde ejerció como tesorero, y presidió la Sociedad Urbanizadora de Marianao.",
          "Sin embargo, el proyecto que consolidaría su nombre en la historia cubana llegaría algunos años después."
        ]
      },
      {
        label: "El proyecto que inmortalizó su apellido",
        paras: [
          "En 1910, tras aprobarse la Ley Valdés Carrero, destinada a promover la construcción de viviendas económicas para familias trabajadoras, la Compañía Nacional Constructora presentó una propuesta que resultó seleccionada por las autoridades.",
          "Pogolotti participó directamente en aquella iniciativa, que contemplaba la edificación de un nuevo núcleo residencial en terrenos de la finca Jesús María, en Marianao. El proyecto dio origen al barrio obrero que inicialmente recibió el nombre de Redención y que posteriormente sería conocido como Pogolotti.",
          "La colocación de su primera piedra tuvo lugar el 30 de octubre de 1910, en un acto al que asistieron el presidente de la República, José Miguel Gómez; el representante Luis Valdés Carrero y el alcalde de Marianao, Baldomero Acosta.",
          "El 24 de febrero de 1911 se entregaron las primeras cien viviendas. Aunque el proyecto contemplaba alcanzar las mil casas, finalmente se construyeron alrededor de 950.",
          "La iniciativa no se limitó a levantar viviendas. En sus alrededores se desarrollaron establecimientos comerciales, espacios de encuentro y servicios que contribuyeron a dinamizar la vida del nuevo asentamiento. También se construyeron una estación ferroviaria, un café y un teatro, este último vinculado al particular interés de Dino por la cultura y el entretenimiento.",
          "El reconocimiento popular terminó imponiendo su apellido al reparto, que desde entonces sería identificado como barrio Pogolotti."
        ]
      },
      {
        label: "Un empresario de múltiples intereses",
        paras: [
          "Después de aquella experiencia, Dino continuó desarrollando proyectos de urbanización en Marianao. Entre 1914 y 1920 intentó promover nuevos repartos residenciales destinados a sectores económicamente acomodados. Sin embargo, estas operaciones no alcanzaron los resultados esperados, pues la adquisición de terrenos no se tradujo en el desarrollo constructivo que había previsto.",
          "Su actividad empresarial se extendió entonces hacia otros campos. En colaboración con el ingeniero estadounidense Mac Comb, se interesó por la química del petróleo y promovió la construcción de una instalación de refinación en el reparto Zamora, en Marianao. El proyecto contemplaba la aplicación de procedimientos tecnológicos de cracking, pero nunca llegó a funcionar, debido a las dificultades técnicas que suponía alcanzar las condiciones de temperatura y presión necesarias.",
          "También investigó la posible existencia de yacimientos de cobre en la provincia de Matanzas y exploró oportunidades de desarrollo agrícola en San Juan y Martínez, Pinar del Río.",
          "Su curiosidad lo llevó incluso a estudiar, junto al doctor Mario Calvino, director de la Estación Agronómica Experimental de Santiago de las Vegas, la posibilidad de aprovechar los cangrejos como materia prima para la producción de fertilizantes. Aquella iniciativa revela una personalidad interesada en la experimentación y en la búsqueda de soluciones productivas poco convencionales.",
          "Uno de sus últimos grandes proyectos fue la construcción de una fábrica de ladrillos que aspiraba a convertirse en la mayor de América Latina. Para financiarla hipotecó buena parte de sus propiedades e invirtió prácticamente todo su patrimonio.",
          "La enfermedad y las dificultades económicas terminaron por frustrar sus planes."
        ]
      },
      {
        label: "El regreso al Piamonte y el legado cubano",
        paras: [
          "Debilitado por los problemas de salud y el fracaso de sus últimos emprendimientos, Dino Pogolotti decidió regresar a Italia. Se estableció en Brunera, una localidad perteneciente a Giaveno, donde falleció en 1923, a los cincuenta años de edad.",
          "Su vida fue la de un emigrante que convirtió la incertidumbre en oportunidad y que encontró en Cuba el escenario para desarrollar una extraordinaria diversidad de proyectos. Empresario, urbanizador, industrial e inversionista, Pogolotti representó también una de aquellas presencias italianas que participaron activamente en la transformación económica y social de la Isla durante las primeras décadas republicanas.",
          "Su mayor legado no quedó recogido únicamente en documentos empresariales ni en las propiedades que llegó a poseer. Permaneció, sobre todo, en un barrio que lleva su apellido y cuya historia forma parte de la memoria colectiva de Marianao.",
          "También permanece en la trayectoria de su hijo Marcelo, destacado representante de las artes visuales cubanas, y en la de su nieta Graziella Pogolotti, reconocida intelectual y ensayista.",
          "Más allá de los éxitos y fracasos de sus negocios, Dino Pogolotti dejó una huella singular en la historia de Cuba: la de un italiano que, llegado desde un pequeño pueblo del Piamonte, terminó dando nombre a uno de los asentamientos obreros más emblemáticos del país."
        ]
      },
      {
        label: "Galería de imágenes",
        gallery: "dino",
        paras: ["Pulsa una imagen para ver la fotografía ampliada y su ficha."]
      }
    ],
    specs: {
      "Nacimiento": "1873 · Valle de Susa, Piamonte, Italia",
      "Llegada a Cuba": "1898",
      "Actividad": "Empresario, panadero y promotor inmobiliario",
      "Legado urbano": "Reparto Pogolotti, municipio Marianao",
      "Trayectoria": "Trazado viario, agua potable y viviendas obreras",
      "Memoria": "Homenajes Italia–Cuba en el Valle de Susa"
    },
    img: "assets/img/personajes/dino.png",
    imgLarge: "assets/img/grande/dino.png"
  },

  marcelo: {
    year: "1902–1988 · LA VANGUARDIA",
    title: "Marcelo Pogolotti",
    role: "Pintor, dibujante y escritor · Hijo de Dino",
    short: "Pintor de las masas obreras, el cubano más avanzado de su generación.",
    desc: "Nació en La Habana y creció entre Cuba, Italia y Estados Unidos. Formado entre Nueva York, Rensselaer y la Art Students League, participó en la Exposición de Arte Nuevo (1927), punto de arranque de la vanguardia artística cubana. En Europa se integró al segundo futurismo italiano de Turín y a la Asociación de Escritores y Artistas Revolucionarios de París. El Manifiesto del Arte Sagrado Futurista lo incluyó entre los cien mejores pintores del movimiento. Alejo Carpentier lo juzgó «el artista de técnica e ideas más avanzadas» que había producido Cuba. Una ceguera por glaucoma cerró su etapa pictórica en 1938; desde entonces se dedicó a la escritura. Su autobiografía, Del barro y las voces, es un clásico testimonial cubano.",
    sections: [
      {
        kicker: "Un artista cubano en el corazón del futurismo italiano",
        label: "Marcelo Pogolotti: la modernidad entre dos orillas",
        paras: [
          "La trayectoria de Marcelo Pogolotti George (La Habana, 12 de julio de 1902 – 25 de agosto de 1988) constituye uno de los episodios más singulares de la relación cultural entre Cuba e Italia durante la primera mitad del siglo XX. Pintor, dibujante, ensayista y narrador, su vida estuvo atravesada por desplazamientos geográficos, búsquedas estéticas y profundas transformaciones históricas. Su obra, breve en el tiempo pero intensa en sus alcances, articuló la experimentación de las vanguardias europeas con una mirada crítica sobre la realidad social cubana. En ella, la máquina, la ciudad y el trabajo dejaron de ser simples motivos de representación para convertirse en signos de una época marcada por la industrialización, las desigualdades y los conflictos ideológicos.",
          "Hijo de Domenico «Dino» Pogolotti, inmigrante italiano nacido en Giaveno, Piamonte, y de la estadounidense Grace George, Marcelo creció en un ambiente familiar y cultural que desbordaba las fronteras insulares. Su infancia transcurrió entre Cuba e Italia, mientras completaba la enseñanza secundaria en Estados Unidos. Esta formación cosmopolita, acompañada por el conocimiento de varios idiomas, le permitió acercarse tempranamente a distintas tradiciones culturales y desarrollar una sensibilidad abierta a los debates intelectuales de su tiempo.",
          "La figura de su padre constituye un antecedente significativo para comprender el entorno en que se formó. Dino Pogolotti fue un empresario y urbanizador que participó en proyectos vinculados al desarrollo económico y urbano de La Habana. Entre sus iniciativas más relevantes estuvo la creación, a partir de 1910, de un barrio destinado a familias trabajadoras en Marianao, conocido inicialmente como Redención y posteriormente como barrio de Pogolotti. Aquella experiencia, asociada a la vivienda y a las transformaciones de la ciudad moderna, formó parte del paisaje familiar del joven Marcelo. Sin establecer una relación causal directa, resulta sugerente reconocer en ese contexto una proximidad temprana con los problemas de la industria, el trabajo y la organización social que más tarde ocuparían un lugar central en su pintura.",
          "En 1919 inició estudios de Ingeniería Mecánica en el Rensselaer Polytechnic Institute, en Troy, Nueva York. Sin embargo, su inclinación por las artes visuales terminó imponiéndose. Tras la muerte de su madre, abandonó la formación técnica y en 1923 ingresó en The Art Students League de Nueva York, donde estudió pintura y dibujo. Esta experiencia le permitió familiarizarse con las corrientes postimpresionistas y consolidar una vocación que ya se había manifestado en sus primeros trabajos. De regreso a Cuba, alternó la actividad artística con diversos empleos, entre ellos labores en la Compañía Cubana de Electricidad y como delineante técnico en el Ministerio de Obras Públicas. Su formación ingenieril y el ejercicio del dibujo técnico dejaron una huella reconocible en la precisión de sus trazos, la construcción geométrica de las formas y su interés por los espacios urbanos.",
          "En 1925 presentó obras en la Asociación de Pintores y Escultores de La Habana, y dos años después participó en la Exposición de Arte Nuevo, organizada en el contexto de la revista Revista de Avance. Aquel acontecimiento marcó un momento decisivo para la renovación de las artes plásticas cubanas y para la ruptura con los modelos académicos tradicionales. Pogolotti se incorporó a esa primera vanguardia desde una posición propia: compartía su voluntad de transformación formal, pero desconfiaba de las representaciones que reducían la identidad nacional a un repertorio pintoresco destinado a satisfacer las expectativas del público extranjero.",
          "En 1928 emprendió un nuevo viaje a Europa. Después de una estancia en París, se estableció en Turín, donde el contacto con su familia paterna le abrió las puertas de un ambiente artístico que resultaría determinante. A través de su tía Mañatín conoció al escritor Pitigrilli, quien lo puso en relación con Luigi Colombo, conocido como Fillìa, una de las figuras del futurismo turinés. Aquel encuentro favoreció su aproximación al movimiento y, finalmente, su incorporación formal en 1931, fecha que el propio artista consignó en su autobiografía Del barro y las voces. Aunque su interés por la estética de la máquina había comenzado antes, su integración al grupo lo situó en un espacio de intercambio con algunos de los protagonistas del Segundo Futurismo italiano. La historiografía ha destacado esta experiencia como un caso excepcional de participación cubana en las corrientes de vanguardia europeas.",
          "El futurismo encontró en Pogolotti un creador que no llegaba a él como un simple seguidor. Su interés por la tecnología, la geometría y las transformaciones del mundo moderno había madurado durante años. Obras como Campos magnéticos y El hombre de hierro, realizadas en 1931, muestran esa búsqueda mediante la superposición de planos, la fragmentación de las figuras y la incorporación de materiales diversos, entre ellos metal pintado y clavos. La máquina aparece en ellas como una estructura visual y simbólica: una presencia que modifica la percepción del espacio y plantea interrogantes sobre la relación entre el ser humano y la civilización industrial.",
          "También se aproximó a la aeropintura y a determinadas experiencias del arte sacro futurista, sin que ello supusiera una adhesión acrítica a todos los postulados del movimiento. Su relación con el futurismo estuvo atravesada por tensiones ideológicas. Mientras algunos de sus integrantes aceptaban la cercanía del régimen de Mussolini como una vía de promoción y apoyo institucional, Pogolotti mantenía posiciones progresistas y antifascistas. Esa contradicción se hizo insostenible cuando sus dibujos de contenido político comenzaron a generar inquietud entre las autoridades italianas. Hacia finales de 1932, el artista se vio obligado a abandonar Italia.",
          "La experiencia europea, sin embargo, no concluyó con una ruptura absoluta de sus lenguajes plásticos. En París se vinculó, en 1934, a la Asociación de Escritores y Artistas Revolucionarios, espacio comprometido con la cultura antifascista y las luchas sociales. Allí reorientó los recursos formales de la vanguardia hacia una representación crítica de la realidad. Las diagonales, la fragmentación óptica, la síntesis geométrica y la multiplicación de perspectivas dejaron de responder únicamente a la fascinación por la velocidad y la máquina para expresar las contradicciones de la sociedad industrial.",
          "En ese proceso se inscribe Paisaje cubano (1933), una de sus obras más representativas. Pintada en París, propone una imagen distante de las convenciones del paisaje tropical. En lugar de una naturaleza exuberante, aparecen instalaciones fabriles, chimeneas, árboles desprovistos de follaje y figuras humanas subordinadas a un entorno productivo. El paisaje se convierte así en una lectura de la realidad económica de Cuba, marcada por la dependencia, la explotación y el peso de los intereses extranjeros en la industria azucarera. Los trabajadores, representados sin rasgos individuales, adquieren una dimensión colectiva: son figuras de una condición social antes que retratos particulares.",
          "Pogolotti se apartaba de la imagen de Cuba concebida como escenario exótico. Su propósito era representar los conflictos humanos y sociales que atravesaban el país, incluso cuando estos no coincidieran con las expectativas visuales de quienes buscaban en el arte cubano una expresión folclórica o pintoresca. En esa voluntad de construir una pintura atenta a las estructuras económicas y a la experiencia del trabajo radica una de las contribuciones más importantes de su obra a la primera vanguardia nacional.",
          "Hacia finales de la década de 1930, cuando había alcanzado una notable madurez artística, su trayectoria experimentó un giro irreversible. En 1938, después de concluir Encuentro de dos épocas, perdió completamente la visión como consecuencia de un glaucoma progresivo. Tenía apenas treinta y seis años. La imposibilidad de continuar pintando no significó, sin embargo, el retiro de la vida intelectual. En 1939 regresó definitivamente a Cuba y emprendió una nueva etapa como escritor, ensayista, crítico de arte y narrador.",
          "Su producción literaria fue amplia y diversa. Publicó novelas como La ventana de mármol (1943), Estrella Molina (1946), Segundo remanso (1948) y El caserón del Cerro (1961), además de ensayos y textos dedicados a la cultura, la estética y los problemas de la creación artística. En Del barro y las voces (1968), su autobiografía, reconstruyó episodios de su vida y reflexionó sobre las experiencias que habían configurado su pensamiento. La escritura se convirtió en el medio para prolongar una actividad creadora que la pérdida de la visión había obligado a transformar.",
          "Su figura fue reivindicada progresivamente por la crítica y las instituciones culturales cubanas. En 1986, su ausencia de una importante muestra internacional dedicada al futurismo en Venecia motivó cuestionamientos desde Cuba. Años después, el Museo Nacional de Bellas Artes organizó la exposición Marcelo Pogolotti: un pintor cubano con los futuristas italianos, presentada en 2002 con la colaboración de la Embajada de Italia. La muestra contribuyó a situar nuevamente su obra en el contexto internacional de las vanguardias y a reconocer la singularidad de su participación en el movimiento futurista.",
          "Marcelo Pogolotti falleció en La Habana el 25 de agosto de 1988. Su legado permanece como testimonio de una modernidad construida desde el intercambio entre culturas. En su pintura confluyeron la formación técnica estadounidense, la experiencia de las vanguardias europeas y una preocupación profundamente cubana por las condiciones sociales de su tiempo. En su literatura, aquella mirada crítica encontró otras formas de expresión y continuidad.",
          "Su vida permite comprender que el diálogo entre Italia y Cuba no se limitó a la transmisión de modelos artísticos o a la influencia de una tradición sobre otra. Fue también un proceso de apropiación, debate y transformación. Pogolotti encontró en el futurismo italiano un lenguaje para interrogar la modernidad, pero lo hizo desde una sensibilidad propia, capaz de cuestionar sus contradicciones y devolverlas a la realidad de su país. Entre dos orillas, su obra trazó un puente singular: el de un artista que hizo de la vanguardia una herramienta para pensar el mundo y de la creación intelectual una forma de resistencia."
        ]
      },
      {
        label: "Galería de imágenes",
        gallery: "marcelo",
        paras: ["Pulsa una imagen para ver la obra ampliada y su ficha técnica."]
      },
      { label: "Pogolotti Un Aventurero de la Modernidad", video: { src: "assets/video/Pogolotti Un Aventurero de la Modernidad.mp4" } },
      { label: "Marcelo Pogolotti", video: { src: "assets/video/Marcelo Pogolotti.mp4" } },
      { label: "Marcelo Pogolotti, un maestro de las formas", video: { src: "assets/video/Marcelo Pogolotti, un maestro de las formas.mp4" } },
      { label: "Marcelo", video: { src: "assets/video/Marcelo.mp4" } }
    ],
    specs: {
      "Nacimiento": "1902 · La Habana",
      "Formación": "Rensselaer Institute, Art Students League (Nueva York)",
      "Movimientos": "Futurismo italiano, surrealismo, arte social",
      "Obra clave": "El hombre de hierro (1931), Campos magnéticos",
      "Última pintura": "Encuentro de dos épocas (1938)",
      "Literatura": "Del barro y las voces (autobiografía)"
    },
    img: "assets/img/personajes/marcelo.png",
    imgLarge: "assets/img/grande/marcelo.png"
  },

  graziella: {
    year: "1932– · LA MEMORIA CRÍTICA",
    title: "Graziella Pogolotti Jacobson",
    role: "Ensayista y crítica de arte · Nieta de Dino, hija de Marcelo",
    short: "Vanguardia, memoria y crítica: la voz que atesoró el legado familiar y cubano.",
    desc: "Nació en París en 1932 y llegó a La Habana a los siete años. Doctora en Filosofía y Letras por la Universidad de La Habana, con estudios en la Sorbona, fue profesora universitaria, decana de la Facultad de Artes Escénicas del Instituto Superior de Arte y presidenta de la Fundación Alejo Carpentier. Su obra ensayística —El oficio de leer, Materia y memoria, Dinosauria soy— atesora la cultura cubana y difundió la obra de su padre Marcelo. Premio Nacional de Literatura, Premio Nacional de Crítica de Arte y Héroe del Trabajo de la República de Cuba.",
    sections: [
      {
        kicker: "Una vida dedicada al pensamiento, la educación y la cultura cubana",
        label: "Graziella Pogolotti: entre la memoria, la vanguardia y la conciencia crítica",
        paras: [
          "La trayectoria de Graziella Pogolotti Jacobson (París, 24 de enero de 1932) constituye una de las contribuciones intelectuales más relevantes a la cultura cubana contemporánea. Ensayista, crítica de arte, pedagoga y dirigente cultural, su obra ha transitado por la literatura, las artes visuales, la educación y el análisis de los procesos históricos que han configurado la vida cultural del país. Su pensamiento, marcado por una formación cosmopolita y una profunda vinculación con Cuba, ha encontrado en la memoria, el ejercicio de la crítica y la responsabilidad social del intelectual sus principales ejes de reflexión.",
          "Su historia personal está estrechamente relacionada con una singular genealogía europea. Por la rama paterna, desciende de Domenico «Dino» Pogolotti (1873–1923), emigrante italiano nacido en Giaveno, Piamonte, quien llegó a Cuba después de una estancia en Nueva York y participó en la fundación del barrio obrero de Pogolotti, en Marianao, entre 1910 y 1911. Su padre, Marcelo Pogolotti (1902–1988), fue uno de los representantes más singulares de la vanguardia artística cubana y mantuvo una estrecha relación con el Segundo Futurismo italiano, al que se incorporó durante su estancia en Turín. Obras como El hombre de hierro y Campos magnéticos, realizadas en 1931, revelan su interés por la estética mecanicista y por las transformaciones sociales asociadas a la modernidad industrial.",
          "Por su madre, Sonia Jacobson, Graziella heredó otros referentes culturales europeos. Nacida en París, creció en un entorno familiar políglota en el que convivían el francés, el italiano, el ruso y el español. En noviembre de 1939 llegó a La Habana para reunirse con su familia y alejarse de la Europa amenazada por la Segunda Guerra Mundial. Aquella experiencia temprana de desplazamiento entre culturas contribuyó a configurar una identidad intelectual abierta al diálogo entre tradiciones, sin perder su arraigo cubano.",
          "Italia no fue para ella solamente una referencia familiar. Durante su juventud viajó a Giaveno para reencontrarse con las raíces paternas y, en 1958, obtuvo una beca de estudios en Roma. Su estancia coincidió con un momento decisivo de la historia de Cuba. Al conocerse el triunfo revolucionario del 1 de enero de 1959, participó junto a otros cubanos en la ocupación pacífica de la Embajada de Cuba en Roma, con el propósito de asegurar la transición diplomática. Este episodio constituye una expresión significativa de la relación que mantuvo con sus orígenes europeos y, al mismo tiempo, de su compromiso con el destino de su país.",
          "Su formación académica consolidó las bases de una trayectoria dedicada al estudio y la interpretación de la cultura. En 1952 obtuvo el título de Doctora en Filosofía y Letras por la Universidad de La Habana. Posteriormente realizó estudios de posgrado en literatura francesa en la Universidad de La Sorbona, en París, entre 1952 y 1953, con una investigación dedicada al escritor Roger Martin du Gard. En 1959 se graduó como periodista profesional en la Escuela Manuel Márquez Sterling.",
          "Una experiencia familiar contribuyó de manera particular a desarrollar su sensibilidad hacia las artes visuales. Debido a la pérdida progresiva de la visión de su padre, Marcelo Pogolotti, Graziella lo acompañaba desde muy joven a exposiciones y galerías, donde describía con detalle las obras que ambos contemplaban: sus formas, colores, volúmenes y composiciones. Aquel ejercicio de observación y traducción verbal, realizado en la intimidad familiar, se convirtió en una singular escuela de análisis visual. La necesidad de transformar lo percibido en palabras afinó su capacidad para reconocer estructuras plásticas, interpretar lenguajes artísticos y comprender las relaciones entre forma, contenido y contexto histórico.",
          "Esta experiencia encontraría continuidad en su labor como crítica de arte. Sus estudios sobre figuras fundamentales de la plástica cubana, entre ellas Wifredo Lam, René Portocarrero y Carlos Enríquez, contribuyeron a enriquecer la historiografía artística nacional. Su aproximación a la obra de los creadores no se limitó a la descripción formal: procuró comprender las circunstancias culturales, las búsquedas estéticas y las tensiones históricas que daban sentido a cada producción. En ese ejercicio, la mirada crítica se convirtió también en una forma de conocimiento y de preservación de la memoria artística.",
          "Su actividad pedagógica e institucional amplió considerablemente ese campo de acción. Entre 1963 y 1971 dirigió el Departamento de Lenguas y Literaturas Modernas de la Universidad de La Habana. Posteriormente, como subdirectora de la Escuela de Letras, encabezó, entre 1971 y 1975, una investigación sociocultural en la Sierra del Escambray. El proyecto acercó a profesores y estudiantes a las realidades de las comunidades de la región y aportó fundamentos sociológicos y conceptuales al trabajo del Grupo Teatro Escambray. Más adelante, asumió la responsabilidad de decana fundadora de la Facultad de Artes Escénicas del Instituto Superior de Arte, institución en la que contribuyó a consolidar una concepción de la enseñanza artística vinculada con la investigación, la práctica creadora y la realidad social.",
          "La escritura ha sido otro territorio esencial de su pensamiento. Desde Examen de conciencia (1965), pasando por El camino de los maestros (1976) y El oficio de leer (1983), hasta Experiencia de la crítica (2003) y Polémicas culturales de los sesenta (2006), su obra ensayística ha examinado los problemas de la creación, la educación, la lectura y la responsabilidad del intelectual. Sus textos permiten reconstruir debates fundamentales de la cultura cubana y comprender las tensiones que acompañaron la construcción de sus instituciones y políticas culturales.",
          "En Dinosauria soy. Memorias (2011), Graziella Pogolotti ofrece una mirada retrospectiva sobre su vida y sobre los acontecimientos que marcaron el siglo XX. El título, asumido con ironía, expresa la posición de quien reconoce en la memoria acumulada una herramienta para observar críticamente el presente. En sus páginas recupera la historia familiar, sus desplazamientos entre Europa y Cuba y las experiencias de su formación intelectual. También aborda episodios de la vida cultural revolucionaria, las contradicciones entre la libertad de creación y el dogmatismo estético, y las tensiones que antecedieron al llamado Quinquenio Gris. La memoria personal adquiere así una dimensión colectiva: no solo reconstruye una biografía, sino que examina los desafíos éticos e intelectuales de una época.",
          "A partir de 1976, con la creación del Ministerio de Cultura, desempeñó responsabilidades de asesoramiento y mediación en un período de reordenamiento institucional. Su labor estuvo vinculada a los esfuerzos por revisar exclusiones, recuperar espacios de diálogo con creadores e intelectuales y promover una política cultural más abierta e integradora. También ocupó responsabilidades en la Unión de Escritores y Artistas de Cuba (UNEAC), fue elegida miembro de número de la Academia Cubana de la Lengua y asumió la presidencia de la Fundación Alejo Carpentier, desde donde contribuyó a la preservación y difusión del legado literario del escritor cubano.",
          "Su trayectoria ha recibido importantes reconocimientos, entre ellos el Premio Nacional de Literatura y el Premio Nacional de Enseñanza Artística, ambos en 2005; el Premio a la Dignidad de la Unión de Periodistas de Cuba, en 2020; la Orden José Martí, en 2021, y el título de Heroína del Trabajo de la República de Cuba. Estas distinciones reconocen una vida dedicada a la creación intelectual, la formación de nuevas generaciones y el desarrollo de las instituciones culturales.",
          "En Graziella Pogolotti convergen varias historias: la de una familia de raíces italianas que encontró en Cuba un espacio de realización; la de una intelectual formada entre diferentes tradiciones europeas y americanas; y la de una mujer que ha participado activamente en la construcción y el examen crítico de la cultura nacional. Su vínculo con Italia, heredado y renovado a través de los viajes, los estudios y la memoria familiar, constituye una dimensión significativa de esa trayectoria.",
          "Más que un puente entre dos geografías, su obra representa un espacio de encuentro entre memoria y pensamiento, tradición y contemporaneidad, creación y responsabilidad social. En su larga labor como ensayista, crítica, pedagoga y promotora cultural, Graziella Pogolotti ha hecho de la cultura no solo un campo de conocimiento, sino también un ejercicio permanente de conciencia crítica."
        ]
      },
      {
        label: "Galería de imágenes",
        gallery: "graziella",
        paras: ["Pulsa una imagen para ver su ficha."]
      }
    ],
    specs: {
      "Nacimiento": "24 de enero de 1932 · París",
      "Formación": "Universidad de La Habana · Sorbona (París)",
      "Materias": "Crítica de arte y literatura, historia del teatro",
      "Libros": "El oficio de leer · Dinosauria soy · Alejo, el ojo crítico",
      "Instituciones": "Fundación Alejo Carpentier · UNEAC · ISA",
      "Reconocimientos": "Premios Nacionales de Literatura y de Crítica"
    },
    img: "assets/img/personajes/graziella.png",
    imgLarge: "assets/img/grande/graziella.png"
  }
};

/* Galería del popup «Futurismo»: obras y fichas técnicas.
   El orden de la galería sigue el de `artworkOrder` (cronológico).
   Para añadir una obra: imagen en assets/img/futurismo/ + entrada aquí + id en `artworkOrder`. */
const artworkOrder = ["mafarka", "ciudad", "galli", "visiones", "perro", "automovil", "formas", "zang"];

const artworkData = {
  mafarka: {
    caption: "Marinetti · 1909",
    thumbPos: "50% 28%",
    img: "assets/img/futurismo/marinetti-mafarka.jpg",
    alt: "Cubierta de la edición Oscar Mondadori de «Mafarka il futurista», de Marinetti, con un rostro fragmentado en naranjas, rojos y azules",
    title: "Mafarka il futurista",
    author: "Filippo Tommaso Marinetti",
    specs: {
      "Autor": "Filippo Tommaso Marinetti (1876–1944)",
      "Título": "Mafarka il futurista (original francés: Mafarka le futuriste)",
      "Identificación": "Por el texto de la cubierta: Marinetti, «Mafarka il futurista», Oscar Mondadori, colección «Scrittori moderni».",
      "Fecha": "Novela de 1909 (ed. francesa) y 1910 (ed. italiana); la edición de la imagen es posterior (año no visible)",
      "Técnica y soporte": "Libro impreso en rústica; cubierta con reproducción pictórica",
      "Dimensiones": "No determinables; formato de bolsillo (≈ 11 × 18 cm, estimación)",
      "Ubicación": "Edición comercial; ejemplares en bibliotecas y librerías"
    },
    text: "Aunque no es una pintura, este libro es una pieza clave del futurismo literario. Mafarka il futurista es una novela de Marinetti, publicada primero en francés en 1909 y en italiano en 1910, que cuenta cómo un rey africano, para superar los límites del cuerpo humano, engendra sin mujer un hijo alado, Gazurmah. La obra exalta la voluntad, la técnica y la superación del hombre; su lenguaje es desmesurado, violento y lleno de imágenes mecánicas. Provocó escándalo y un proceso por obscenidad en Milán en 1910, que terminó con la absolución del autor. La imagen es la cubierta de una edición moderna de Oscar Mondadori, con una reproducción pictórica de factura futurista cuyo autor no he podido identificar con seguridad: un rostro fragmentado en planos de naranjas, rojos y azules, de ojos muy abiertos y atravesado por trazos violentos. Ese color vibrante y esos planos quebrados resumen visualmente el espíritu del texto. En la trayectoria de Marinetti, es su novela más conocida y una de las primeras aplicaciones de sus ideas a la narrativa."
  },

  ciudad: {
    caption: "Boccioni · 1910–11",
    thumbPos: "50% 50%",
    img: "assets/img/futurismo/boccioni-ciudad.jpg",
    alt: "«La ciudad que sube», de Umberto Boccioni: un enorme caballo rojo y obreros en un torbellino de color ante chimeneas y andamios",
    title: "La ciudad que sube",
    author: "Umberto Boccioni",
    specs: {
      "Autor": "Umberto Boccioni (1882–1916)",
      "Título": "La città che sale (La ciudad que sube)",
      "Identificación": "Por el título del archivo y por la firma «U. Boccioni» visible abajo a la derecha.",
      "Fecha": "1910–1911",
      "Técnica y soporte": "Óleo sobre lienzo",
      "Dimensiones": "≈ 199 × 301 cm",
      "Ubicación": "Museum of Modern Art (MoMA), Nueva York"
    },
    text: "Es la primera gran pintura plenamente futurista de Boccioni y una de las obras emblemáticas del movimiento. Representa la construcción de un barrio industrial de Milán: al fondo, chimeneas y andamios; en primer plano, un caballo rojo enorme, lanzado hacia delante, y obreros que intentan sujetarlo y son arrastrados por su fuerza. El caballo, símbolo del trabajo y de la energía moderna, se confunde con las figuras y con la propia ciudad. Boccioni emplea la técnica divisionista, con pinceladas largas y filamentosas de rojos, naranjas, azules y blancos que producen una vibración luminosa y la sensación de polvo en suspensión. Las líneas de fuerza y la fusión entre figuras y entorno anuncian los principios de simultaneidad y dinamismo que el pintor defendería en los manifiestos de 1910. En su trayectoria, la obra marca el paso desde el simbolismo y el divisionismo de su juventud hacia una pintura que celebra el trabajo, la industria y la velocidad."
  },

  galli: {
    caption: "Carrà · 1910–11",
    thumbPos: "50% 50%",
    img: "assets/img/futurismo/carra-galli.jpg",
    alt: "«El funeral del anarquista Galli», de Carlo Carrà: un torbellino de figuras, caballos y lanzas en rojos, negros y verdes",
    title: "El funeral del anarquista Galli",
    author: "Carlo Carrà",
    specs: {
      "Autor": "Carlo Carrà (1881–1966)",
      "Título": "I funerali dell’anarchico Galli (El funeral del anarquista Galli)",
      "Identificación": "Por el título del archivo y por su composición característica: cortejo y carga policial en un torbellino de diagonales.",
      "Fecha": "1910–1911",
      "Técnica y soporte": "Óleo sobre lienzo",
      "Dimensiones": "≈ 199 × 259 cm",
      "Ubicación": "Museum of Modern Art (MoMA), Nueva York"
    },
    text: "Carrà evoca un hecho real: en 1904, durante el funeral del anarquista Angelo Galli en Milán, manifestantes y policía chocaron violentamente ante el cementerio. El pintor, que dijo haber presenciado la escena, la transforma en un torbellino: caballos, lanzas, banderas rojas y negras, cuerpos y bastones se entrecruzan en diagonales que parten del centro, y el féretro apenas se distingue entre la multitud. Dominan los rojos, naranjas y negros, con un cielo de verdes y amarillos que irradia como un sol fracturado; la luz no ilumina las figuras, las disgrega. Se advierte la herencia del divisionismo y del simbolismo, pero la fragmentación y las líneas de fuerza son ya plenamente futuristas. Pintada entre 1910 y 1911, es una de las obras más ambiciosas de Carrà y expresa la unión del movimiento con la violencia colectiva y con el tema de la multitud en la ciudad moderna, que tanto interesó a los futuristas."
  },

  visiones: {
    caption: "Boccioni · 1911",
    thumbPos: "50% 50%",
    img: "assets/img/futurismo/boccioni-visiones.jpg",
    alt: "«Visiones simultáneas», de Umberto Boccioni: un rostro de mujer repetido ante edificios inclinados y una calle vista desde arriba",
    title: "Visiones simultáneas",
    author: "Umberto Boccioni",
    specs: {
      "Autor": "Umberto Boccioni (1882–1916)",
      "Título": "Visioni simultanee (Visiones simultáneas)",
      "Identificación": "Por su composición (mujer ante un balcón, calle en picado y rostro desdoblado); el archivo no traía título.",
      "Fecha": "1911",
      "Técnica y soporte": "Óleo sobre lienzo",
      "Dimensiones": "≈ 60 × 60 cm (formato cuadrado)",
      "Ubicación": "Von der Heydt-Museum, Wuppertal (Alemania)"
    },
    text: "Boccioni pinta aquí la experiencia de asomarse a la ciudad moderna: una mujer en un balcón mira la calle y su rostro aparece repetido, como si la mirada se desdoblara. Los edificios se inclinan y se abren hacia el espectador, mientras la plaza, vista desde arriba, se llena de figuras diminutas y de fragmentos de otras escenas. Aplica así el principio de simultaneidad: reunir en un mismo plano lo que se ve, lo que se recuerda y lo que se imagina. El color procede del divisionismo italiano, con pinceladas cortas de amarillos, naranjas y rojos cálidos que se enfrentan a verdes y azules fríos, y la luz parece quebrarse en facetas casi cristalinas. Se nota también la lección del cubismo parisino, que Boccioni conoció en 1911. En su trayectoria, la obra señala el momento en que la ciudad deja de ser un simple escenario para convertirse en una energía que transforma a quien la habita."
  },

  perro: {
    caption: "Balla · 1912",
    thumbPos: "30% 50%",
    img: "assets/img/futurismo/balla-perro.jpg",
    alt: "«Dinamismo de un perro con correa», de Giacomo Balla: un perro salchicha con patas y cola multiplicadas, junto a los pies de su dueña",
    title: "Dinamismo de un perro con correa",
    author: "Giacomo Balla",
    specs: {
      "Autor": "Giacomo Balla (1871–1958)",
      "Título": "Dinamismo di un cane al guinzaglio (Dinamismo de un perro con correa)",
      "Identificación": "Por el título del archivo y por la composición (perro salchicha, correa y pies de la dueña).",
      "Fecha": "1912",
      "Técnica y soporte": "Óleo sobre lienzo (la imagen muestra un marco claro de madera)",
      "Dimensiones": "≈ 90 × 110 cm",
      "Ubicación": "Buffalo AKG Art Museum (antes Albright-Knox Art Gallery), Nueva York"
    },
    text: "Balla convierte una escena cotidiana, una mujer que pasea a su perro salchicha por la calle, en un estudio del movimiento. De la señora solo vemos los pies y el bajo de la falda; el protagonista es el perro, cuyas patas, cola y orejas se multiplican en abanicos de formas repetidas, igual que la correa y los pies que lo acompañan. Balla traslada a la pintura el efecto de las fotografías de movimiento de Étienne-Jules Marey y de Anton Giulio Bragaglia: no representa un instante, sino la sucesión de posiciones en el tiempo. La composición es sencilla y casi diagonal, sobre un suelo de tablas en grises y blancos que apenas compite con los negros y azules oscuros de las figuras. La luz es fría y uniforme; todo el interés recae en el ritmo. En la trayectoria de Balla, la obra marca el paso del divisionismo de su formación al dinamismo futurista que desarrollaría con la velocidad, las luces y el vuelo de las golondrinas."
  },

  automovil: {
    caption: "Russolo · 1912–13",
    thumbPos: "50% 50%",
    img: "assets/img/futurismo/russolo-automovil.jpg",
    alt: "«Dinamismo de un automóvil», de Luigi Russolo: un coche azul y negro en forma de cuña que irrumpe entre franjas rojas y naranjas",
    title: "Dinamismo de un automóvil",
    author: "Luigi Russolo",
    specs: {
      "Autor": "Luigi Russolo (1885–1947)",
      "Título": "Dinamismo di un’automobile (Dinamismo de un automóvil)",
      "Identificación": "Por su composición (automóvil en forma de cuña y franjas rojas radiales), que corresponde a Russolo.",
      "Fecha": "1912–1913",
      "Técnica y soporte": "Óleo sobre lienzo",
      "Dimensiones": "≈ 106 × 140 cm",
      "Ubicación": "Centre Pompidou, Musée national d’art moderne, París"
    },
    text: "Russolo, pintor y músico que más tarde inventaría los instrumentos del «arte de los ruidos», pinta aquí un automóvil que irrumpe en la calle como una cuña. La carrocería, de azules y negros metálicos, se repite en formas en V que avanzan hacia la izquierda, y de ellas parten franjas rojas y naranjas, a modo de «líneas de fuerza», que se expanden y envuelven las casas y la calzada. No vemos pasajeros ni detalles mecánicos: el coche es una energía en movimiento que desplaza el espacio que lo rodea. El contraste entre el rojo cálido y los azules fríos intensifica la sensación de velocidad, y la luz no viene de un punto concreto, sino de la propia vibración del color. Russolo traduce así a la pintura la idea del Manifiesto de 1909, según la cual un automóvil rugiente es más bello que la Victoria de Samotracia. Es su obra más célebre y una de las imágenes emblemáticas de la velocidad futurista."
  },

  formas: {
    caption: "Boccioni · 1913",
    thumbPos: "0% 45%",
    img: "assets/img/futurismo/boccioni-formas.jpg",
    alt: "Dos vistas de la escultura de bronce «Formas únicas de continuidad en el espacio», de Boccioni: una figura en marcha de planos ondulantes",
    title: "Formas únicas de continuidad en el espacio",
    author: "Umberto Boccioni",
    specs: {
      "Autor": "Umberto Boccioni (1882–1916)",
      "Título": "Forme uniche della continuità nello spazio (Formas únicas de continuidad en el espacio)",
      "Identificación": "Por el título del archivo y por la forma inconfundible de la figura.",
      "Fecha": "1913 (modelo en yeso); fundiciones en bronce póstumas",
      "Técnica y soporte": "Bronce fundido (el original de 1913 es de yeso); en la foto, sobre base de madera",
      "Dimensiones": "≈ 110–120 cm de altura (estimación; varía según la fundición)",
      "Ubicación": "Varias fundiciones en museos (entre ellos MoMA, Nueva York, y Museo del Novecento, Milán); la fotografía no permite saber cuál es"
    },
    text: "Es la escultura más conocida del futurismo y una de las imágenes más reconocibles del siglo XX. Boccioni representa una figura humana en marcha, pero no como un cuerpo estático: la musculatura se funde con el aire y se deforma, y los pliegues laterales de las piernas y del torso parecen estelas dejadas por la velocidad. Aplica así su idea de «dinamismo plástico», según la cual el objeto y el espacio que lo rodea se compenetran. La figura carece de rostro y de brazos; es una síntesis de la energía del hombre moderno, más cercana a una máquina o a una forma de la naturaleza que a un retrato clásico. Las dos vistas de la fotografía muestran cómo la silueta cambia por completo según el ángulo, algo esencial en una obra concebida para ser recorrida. El brillo del bronce acentúa los planos, que se suceden como ondas. Pertenece a la etapa de madurez de Boccioni, que moriría en 1916."
  },

  zang: {
    caption: "Marinetti · 1914",
    thumbPos: "50% 40%",
    img: "assets/img/futurismo/marinetti-zang.jpg",
    alt: "Cubierta amarilla de «Zang Tumb Tumb», de Marinetti, con letras negras inclinadas que forman una composición de palabras en libertad",
    title: "Zang Tumb Tumb",
    author: "Filippo Tommaso Marinetti",
    specs: {
      "Autor": "Filippo Tommaso Marinetti (1876–1944)",
      "Título": "Zang Tumb Tumb (subtítulo en la cubierta: Adrianopoli ottobre 1912 · parole in libertà)",
      "Identificación": "Por el texto de la cubierta: «F. T. Marinetti futurista», «Zang Tumb Tumb», Edizioni Futuriste di «Poesia», Milano, 1914.",
      "Fecha": "1914 (la cubierta evoca el asedio de Adrianópolis, octubre de 1912)",
      "Técnica y soporte": "Libro impreso tipográficamente; cubierta de papel amarillo con composición de palabras en libertad",
      "Dimensiones": "No determinables con precisión (≈ 20 × 14 cm, estimación)",
      "Ubicación": "Ejemplar de la fotografía no identificado; existen ejemplares en bibliotecas y colecciones de arte"
    },
    text: "Zang Tumb Tumb es un libro de poesía futurista de Marinetti, publicado en Milán en 1914 por las Ediciones Futuristas de «Poesía». Narra, con onomatopeyas y sin sintaxis tradicional, el asedio de Adrianópolis durante la primera guerra de los Balcanes, que Marinetti vivió como corresponsal. Es el ejemplo más célebre de las «palabras en libertad» (parole in libertà): el poeta abandona el verso y la puntuación y reúne sustantivos, sonidos y signos en composiciones tipográficas libres. La cubierta, de papel amarillo con letras negras, ya lo anuncia: los títulos se inclinan, cambian de tamaño y se cruzan en diagonal, y el sonido «tuuumb» se reparte como una explosión. No hay figuración ni color: el diseño depende de la tipografía y del contraste entre negro y amarillo. En la trayectoria de Marinetti, este libro lleva a la práctica las ideas del Manifiesto técnico de la literatura futurista de 1912 y convierte la página impresa en un espacio visual, con influencia posterior en el diseño gráfico y en la poesía concreta."
  }
};

/* Galería del popup del nodo «1873 / 1923» (Dino): fotografías del barrio.
   Reutiliza el mismo popup de ficha que la galería de Futurismo (ficha reducida).
   Para añadir una foto: imagen en assets/img/barrio/ + entrada aquí + id en `barrioOrder`. */
const barrioOrder = ["f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8"];
const BARRIO_AUTOR = "Barrio de Pogolotti · Marianao, La Habana";

const barrioData = {
  f1: {
    caption: "Ca. 1950", thumbPos: "50% 50%",
    img: "assets/img/barrio/barrio-01.jpg",
    alt: "Vista aérea en blanco y negro de viviendas de una planta en hileras, con calles amplias y árboles jóvenes",
    title: "Vista aérea de las viviendas", author: BARRIO_AUTOR,
    specs: { "Título": "Vista aérea de las viviendas", "Fecha aproximada": "Mediados del siglo XX (estimada por los vehículos y el aspecto del conjunto)" },
    text: "Fotografía en blanco y negro tomada desde una posición elevada. Muestra un conjunto de viviendas de una sola planta, de fachadas claras y cubiertas planas, dispuestas en hileras a lo largo de calles amplias, con aceras curvas en las esquinas y árboles jóvenes recién plantados. Al fondo se extienden terrenos aún sin edificar y una torre metálica. Algunos automóviles circulan por la calle y varias personas caminan por las aceras. La imagen transmite la idea de un barrio planificado, con trazado regular, manzanas ordenadas y espacios abiertos."
  },
  f2: {
    caption: "Ca. 1940", thumbPos: "50% 50%",
    img: "assets/img/barrio/barrio-02.jpg",
    alt: "Calle en blanco y negro con un gran árbol de raíces visibles junto a casas bajas y un edificio con portal de columnas",
    title: "Calle con árbol de grandes raíces", author: BARRIO_AUTOR,
    specs: { "Título": "Calle con árbol de grandes raíces", "Fecha aproximada": "Hacia 1940 (estimada por el vehículo y el aspecto de la calle)" },
    text: "Fotografía en blanco y negro de una calle con acera de tierra y césped. A la izquierda se ve un edificio con portal de columnas y, sobre la calzada, un automóvil antiguo; a la derecha, un árbol de gran copa y raíces visibles junto a casas bajas de mampostería. Los postes de madera con cables marcan la perspectiva. Es una escena cotidiana de barrio, con poca circulación y espacios todavía sin pavimentar."
  },
  f3: {
    caption: "1948–1952", thumbPos: "50% 50%",
    img: "assets/img/barrio/barrio-03.jpg",
    alt: "Calle de tierra flanqueada por edificios con portales y, a la izquierda, un cartel del Ministerio de Obras Públicas",
    title: "Calle con portales y cartel de Obras Públicas", author: BARRIO_AUTOR,
    specs: { "Título": "Calle con portales y cartel de Obras Públicas", "Fecha aproximada": "1948–1952 (según el gobierno que menciona el cartel visible)" },
    text: "Fotografía en blanco y negro de una calle de tierra flanqueada por edificios con portales de columnas. En primer plano, a la izquierda, un cartel de obras del Ministerio de Obras Públicas que, según se lee, menciona al gobierno de Carlos Prío Socarrás y al ministro Manuel Pérez Valdés. A la derecha, un niño junto a la acera y, al fondo, la calle se pierde entre postes y árboles. La imagen documenta una obra pública en curso en la vía; el cartel permite situarla en el periodo de ese gobierno."
  },
  f4: {
    caption: "Ca. 1925", thumbPos: "50% 50%",
    img: "assets/img/barrio/barrio-04.jpg",
    alt: "Lámina en sepia con orla decorativa: calle recta con viviendas bajas de portal y jardines, y una torre al fondo",
    title: "Calle arbolada con viviendas de portal", author: BARRIO_AUTOR,
    specs: { "Título": "Calle arbolada con viviendas de portal", "Fecha aproximada": "Hacia 1920–1930 (estimada por el estilo de la impresión)" },
    text: "Copia impresa en tonos sepia, con orla decorativa, de una calle recta y despejada. A ambos lados se alinean viviendas bajas con techos de teja, portales y jardines con arbustos recortados; al fondo se distingue una torre. El trazado simétrico y la vegetación cuidada ofrecen una imagen ordenada del conjunto residencial. Por su formato, parece una lámina de álbum o de una publicación de la época."
  },
  f5: {
    caption: "Ca. 1920", thumbPos: "50% 50%",
    img: "assets/img/barrio/barrio-05.jpg",
    alt: "Fotografía en sepia de un edificio de esquina con arcadas, un automóvil antiguo y un grupo de hombres a la entrada",
    title: "Edificio comercial con arcadas", author: BARRIO_AUTOR,
    specs: { "Título": "Edificio comercial con arcadas", "Fecha aproximada": "Hacia 1920 (estimada por el vehículo y la vestimenta)" },
    text: "Fotografía en sepia de un edificio de esquina con arcadas de medio punto y cubierta de teja. Ante la entrada se agrupan varios hombres vestidos de claro, junto a un poste con rótulo; a la izquierda, un automóvil antiguo. La arquitectura de arcos se repite a lo largo de la fachada y da carácter unitario al edificio. Sugiere un local de uso comercial en un barrio en crecimiento."
  },
  f6: {
    caption: "Ca. 1920", thumbPos: "50% 50%",
    img: "assets/img/barrio/barrio-06.jpg",
    alt: "Fotografía en sepia de una vivienda de una planta con portal de arcos y tres mujeres vestidas de claro",
    title: "Vivienda con portal de arcos", author: BARRIO_AUTOR,
    specs: { "Título": "Vivienda con portal de arcos", "Fecha aproximada": "Hacia 1920 (estimada por el estilo de la imagen y la indumentaria)" },
    text: "Fotografía en sepia de una vivienda de una planta, con muros lisos, cubierta de tejas y un portal de arcos de medio punto, en cuya baranda se asoman tres mujeres vestidas de claro. Un poste de madera cruza la imagen en primer plano y pequeños jardines bordean la acera. La fotografía muestra el tipo de casa con portal propio de los repartos de la época."
  },
  f7: {
    caption: "Ca. 1945", thumbPos: "50% 50%",
    img: "assets/img/barrio/barrio-07.jpg",
    alt: "Acera frente a edificios con portales de columnas y letreros comerciales, con niños y un hombre caminando",
    title: "Calle con portales y comercios", author: BARRIO_AUTOR,
    specs: { "Título": "Calle con portales y comercios", "Fecha aproximada": "Hacia 1940–1950 (estimada por la indumentaria)" },
    text: "Fotografía en blanco y negro de una acera frente a una hilera de edificios con portales de columnas y letreros comerciales. En primer plano, a la izquierda, se ve a unas personas sentadas bajo un árbol; en la calle caminan varios niños y un hombre vestido de claro. Al fondo asoma una torre con aguja. Es una escena de la vida cotidiana en una calle comercial del barrio."
  },
  f8: {
    caption: "Ca. 1935", thumbPos: "50% 50%",
    img: "assets/img/barrio/barrio-08.jpg",
    alt: "Calle de tierra con una larga hilera de viviendas adosadas con portales corridos y postes de madera con cables",
    title: "Hilera de viviendas con portal", author: BARRIO_AUTOR,
    specs: { "Título": "Hilera de viviendas con portal", "Fecha aproximada": "Hacia 1930–1940 (estimada por el aspecto de la calle y los vehículos)" },
    text: "Fotografía en blanco y negro de una calle de tierra con una larga hilera de viviendas adosadas, de cubierta a dos aguas y portales corridos con columnas. En primer plano se alzan postes de madera con tendido eléctrico y telefónico y, a la izquierda, se ve un vehículo antiguo. Un niño camina por la acera. La repetición de portales muestra la disposición en serie de las viviendas obreras."
  }
};

/* Galería del popup de la figura de Dino (mismo popup de ficha que las demás galerías). */
const dinoOrder = ["d1", "d2"];
const DINO_AUTOR = "Doménico «Dino» Pogolotti · 1873–1923";

const dinoData = {
  d1: {
    caption: "Ca. 1910", thumbPos: "50% 25%",
    img: "assets/img/dino/dino-01.jpg",
    alt: "Retrato fotográfico en sepia de Dino Pogolotti, con sombrero de ala ancha, traje oscuro y chaleco claro",
    title: "Retrato de Dino Pogolotti", author: DINO_AUTOR,
    specs: { "Título": "Retrato de Dino Pogolotti", "Fecha aproximada": "Hacia 1910 (estimada por el estilo de la fotografía y la indumentaria)" },
    text: "Retrato fotográfico en tonos sepia de un hombre visto de tres cuartos, con la mirada dirigida hacia un lado. Lleva sombrero de ala ancha, traje oscuro de solapas amplias, chaleco claro y corbata; una mano descansa a la altura de la cintura. El fondo manchado y la composición corresponden a una fotografía de estudio de comienzos del siglo XX. La pose sobria y el atuendo formal transmiten la imagen de un empresario de su época."
  },
  d2: {
    caption: "Recorte de prensa", thumbPos: "50% 30%",
    img: "assets/img/dino/dino-02.jpg",
    alt: "Recorte de prensa con el retrato en óvalo de un hombre con bigote y barba corta, y la leyenda «Dino F. Pogolotti, constructor de las casas del barrio obrero»",
    title: "Dino F. Pogolotti, constructor de las casas del barrio obrero", author: DINO_AUTOR,
    specs: { "Título": "Dino F. Pogolotti, constructor de las casas del barrio obrero (según la leyenda impresa)", "Fecha aproximada": "No determinada (recorte de prensa sin fecha visible; retrato de las primeras décadas del siglo XX)" },
    text: "Recorte de prensa con un retrato en viñeta ovalada de un hombre de bigote y barba corta, vestido con traje oscuro, camisa de cuello alto y corbata de lazo. Al pie, la leyenda impresa dice: «Dino F. Pogolotti, constructor de las casas del barrio obrero. (Foto Archivo Inclán Lavastida)». Es un documento útil porque asocia su imagen con la construcción del barrio obrero. La reproducción es pequeña y de baja resolución, propia de una impresión de prensa."
  }
};

/* Galería del popup de la figura de Marcelo (mismo popup de ficha que las demás galerías).
   Pendientes de añadir: 4 obras sin título (images.jpeg, images__2_, images__3_, images__4_). */
const marceloOrder = ["m1", "m2", "m3", "m4", "m5"];
const MARCELO_AUTOR = "Marcelo Pogolotti · 1902–1988";

const marceloData = {
  m1: {
    caption: "1931", thumbPos: "50% 50%",
    img: "assets/img/marcelo/marcelo-01.jpg",
    alt: "«El lago de sangre», de Marcelo Pogolotti: una multitud de figuras redondeadas y entrelazadas en una calle, ante edificios, con figuras armadas a la izquierda",
    title: "El lago de sangre", author: MARCELO_AUTOR,
    specs: {
      "Autor": "Marcelo Pogolotti (1902–1988)",
      "Título": "El lago de sangre",
      "Identificación": "Por el título y la fecha del nombre del archivo, y por el estilo característico del autor.",
      "Fecha": "1931",
      "Técnica y soporte": "Técnica mixta sobre papel (carbón o tinta; deducida de la imagen)",
      "Dimensiones": "No determinadas",
      "Ubicación": "No determinada"
    },
    text: "Una calle flanqueada por edificios de ventanas regulares sirve de escenario a un enfrentamiento: a la izquierda, figuras de sombrero y brazos extendidos avanzan sobre una multitud que se agolpa en el centro, donde los cuerpos caídos y los que se debaten forman un nudo compacto. Pogolotti simplifica a las personas en formas redondeadas, casi de muñeco, de contornos gruesos y sin rasgos individuales, lo que las convierte en símbolo de una condición colectiva. El dibujo se construye con negros profundos y grises cálidos, y la luz recorta los volúmenes como si fueran piezas mecánicas. La geometría de la arquitectura y la síntesis de las figuras recuerdan el lenguaje de la vanguardia que conoció en Europa en esos años. Pertenece a la etapa en que, hacia 1931, se acerca al futurismo turinés y empieza a dar a su dibujo un contenido social y político cada vez más explícito."
  },

  m2: {
    caption: "Ca. 1935–36", thumbPos: "50% 50%",
    img: "assets/img/marcelo/marcelo-02.jpg",
    alt: "«Fiesta campestre», de Marcelo Pogolotti: figuras en blanco y negro con ropas rayadas y gorras, que bailan y beben sobre un fondo de trama",
    title: "Fiesta campestre", author: MARCELO_AUTOR,
    specs: {
      "Autor": "Marcelo Pogolotti (1902–1988)",
      "Título": "Fiesta campestre",
      "Identificación": "Por el título y la fecha del nombre del archivo.",
      "Fecha": "Hacia 1935–1936",
      "Técnica y soporte": "Dibujo a tinta con aspecto de grabado, en blanco y negro (deducida de la imagen)",
      "Dimensiones": "No determinadas",
      "Ubicación": "No determinada"
    },
    text: "Un grupo de personas baila, bebe y conversa al aire libre, en una composición apretada donde las figuras ocupan casi toda la superficie. Pogolotti trabaja solo con negro y blanco y sustituye el color por tramas de rayas, cuadros y puntos: las camisetas a rayas, las gorras de cuadros y las faldas punteadas dan ritmo visual y distinguen a cada personaje sin recurrir a rasgos individuales. Abajo, a la izquierda, asoma la boca de un instrumento, y alguien alza una botella. El dibujo, de líneas rotundas y planos geométricos, conserva el vocabulario de la vanguardia, pero lo aplica a una escena de ocio popular y no a la máquina o la ciudad industrial. Se sitúa en los años de París, cuando se vincula a la Asociación de Escritores y Artistas Revolucionarios y reorienta los recursos formales de la vanguardia hacia una mirada atenta a la gente común y a su vida social."
  },

  m3: {
    caption: "Ca. 1937", thumbPos: "50% 50%",
    img: "assets/img/marcelo/marcelo-03.jpg",
    alt: "«Grupo», de Marcelo Pogolotti, expuesto en un museo: hombres con gorras comprimidos en una masa que avanza, en ocres, verdes y marrones sobre fondo rosado",
    title: "Grupo", author: MARCELO_AUTOR,
    specs: {
      "Autor": "Marcelo Pogolotti (1902–1988)",
      "Título": "Grupo",
      "Identificación": "Por la cartela del museo visible en la fotografía («Grupo, ca. 1937») y por la firma «Pogo.» en la esquina inferior derecha. Fotografía: Claudio Peláez Sordo (OnCuba).",
      "Fecha": "Hacia 1937",
      "Técnica y soporte": "Óleo sobre lienzo, con marco oscuro (deducida de la imagen)",
      "Dimensiones": "No determinadas",
      "Ubicación": "No determinada (fotografiada en una sala de exposición, probablemente de un museo cubano)"
    },
    text: "Un grupo de hombres con gorras y ropas de trabajo avanza apretado, inclinado hacia delante, como si empujara o cargara juntos. Los cuerpos se superponen y se encajan unos con otros, de manera que ninguno destaca: el verdadero protagonista es la masa. Pogolotti construye las figuras con volúmenes redondeados y contornos simplificados, y las agrupa en un ritmo diagonal que transmite esfuerzo colectivo. La paleta es terrosa y contenida —ocres, verdes oliva, marrones y rojizos— sobre un suelo rosado y un cielo gris con nubes blancas, lo que da a la escena un aire sobrio y monumental. La obra resume su interés por el trabajo y por la dimensión colectiva de la condición obrera, que sustituyó en su madurez a la fascinación inicial por la máquina. Se fecha hacia 1937, cuando estaba a punto de perder la visión y de abandonar la pintura."
  },

  m4: {
    caption: "Ca. 1937", thumbPos: "50% 50%",
    img: "assets/img/marcelo/marcelo-04.jpg",
    alt: "Pintura de Marcelo Pogolotti expuesta en un museo: obreros a pie y en bicicleta por un camino, junto a una fábrica con una chimenea humeante",
    title: "Obreros a la salida de la fábrica (título provisional)", author: MARCELO_AUTOR,
    specs: {
      "Autor": "Marcelo Pogolotti (1902–1988)",
      "Título": "Obreros a la salida de la fábrica (título descriptivo provisional; la cartela no es legible en la fotografía)",
      "Identificación": "Por la firma «pogolotti» en la esquina inferior izquierda y por el estilo. La cartela del museo, de lectura parcial, indica «ca. 1937». Fotografía: Claudio Peláez Sordo (OnCuba).",
      "Fecha": "Hacia 1937 (según la cartela, de lectura parcial)",
      "Técnica y soporte": "Óleo sobre lienzo, con marco de madera (deducida de la imagen)",
      "Dimensiones": "No determinadas",
      "Ubicación": "No determinada (fotografiada en una sala de exposición, probablemente de un museo cubano)"
    },
    text: "Una larga fila de obreros avanza por un camino que serpentea desde la fábrica: algunos caminan, otros van en bicicleta, y al fondo se pierden figuras diminutas sobre una loma. A la derecha, un edificio geométrico y una chimenea expulsan una nube negra que domina el cielo. Pogolotti organiza la escena con grandes planos y siluetas simplificadas, y reparte unos pocos acentos de rojo y naranja en las ropas de las figuras para guiar la mirada a lo largo de la procesión. La paleta de tierras, grises y ocres, y la luz crepuscular del cielo dan al conjunto un tono austero y casi solemne. La imagen presenta el trabajo industrial no como épica sino como rutina colectiva: la masa anónima de trabajadores que entra y sale de la fábrica. Es un ejemplo de la madurez de su pintura social, entre las últimas que realizó antes de perder la vista en 1938."
  },

  m5: {
    caption: "Fotografía", thumbPos: "40% 30%",
    img: "assets/img/marcelo/marcelo-05.jpg",
    alt: "Fotografía en sepia de Marcelo Pogolotti sentado ante su caballete, con la paleta en la mano y la mirada hacia la cámara",
    title: "Marcelo Pogolotti pintando", author: MARCELO_AUTOR,
    specs: {
      "Autor": "Fotógrafo no identificado",
      "Título": "Marcelo Pogolotti pintando (título descriptivo)",
      "Identificación": "Por el nombre del archivo («Marcelo Pogolotti») y por el parecido con otros retratos conocidos del artista.",
      "Fecha": "Antes de 1938 (estimada; en ese año dejó de pintar)",
      "Técnica y soporte": "Fotografía en tonos sepia",
      "Dimensiones": "No determinadas",
      "Ubicación": "No determinada"
    },
    text: "Fotografía en sepia que muestra a Marcelo Pogolotti sentado a su mesa de trabajo, de perfil, con el pincel y la paleta en las manos y la mirada fija hacia la cámara. Viste una camisa clara de manga corta y tiene el cabello oscuro peinado hacia atrás. Detrás se ven las contraventanas de una ventana, una estantería con botes y utensilios, y a la derecha un lienzo con motivos vegetales de líneas curvas. La imagen, de luz natural y composición sencilla, lo presenta en su faceta de pintor, antes de que el glaucoma lo dejara ciego en 1938 y lo llevara a dedicarse a la escritura. Es un documento valioso porque muestra al artista en pleno trabajo y no en el retrato formal. La fecha es una estimación basada en esa circunstancia."
  }
};

/* Galería del popup de la figura de Graziella (mismo popup de ficha que las demás galerías; ficha reducida). */
const graziellaOrder = ["g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8"];
const GRAZIELLA_AUTOR = "Graziella Pogolotti Jacobson · 1932–";

const graziellaData = {
  g1: {
    caption: "Retrato", thumbPos: "50% 30%",
    img: "assets/img/graziella/graziella-01.jpg",
    alt: "Retrato de Graziella Pogolotti con gafas oscuras, hablando ante un micrófono, con una chaqueta verde sobre un jersey amarillo",
    title: "Graziella Pogolotti con un micrófono", author: GRAZIELLA_AUTOR,
    specs: { "Título": "Graziella Pogolotti con un micrófono (título descriptivo)", "Fecha aproximada": "No determinada (fotografía de su madurez, sin fecha visible)" },
    text: "Fotografía a color de Graziella Pogolotti en primer plano, con el cabello claro y gafas oscuras de montura ovalada. Habla ante un micrófono que se ve a la derecha, y viste una chaqueta verde sobre un jersey amarillo; el fondo, desenfocado, parece un espacio exterior. La imagen la muestra en una intervención pública, una faceta constante de su trayectoria como ensayista, pedagoga y dirigente cultural. La toma cercana y la expresión atenta transmiten la serenidad de quien se dirige a un auditorio."
  },
  g2: {
    caption: "Retrato", thumbPos: "50% 25%",
    img: "assets/img/graziella/graziella-02.jpg",
    alt: "Retrato de Graziella Pogolotti con gafas oscuras, apoyando la barbilla en la mano, con una chaqueta beige y una blusa de rayas doradas",
    title: "Graziella Pogolotti pensativa", author: GRAZIELLA_AUTOR,
    specs: { "Título": "Graziella Pogolotti pensativa (título descriptivo)", "Fecha aproximada": "No determinada (fotografía de su madurez, sin fecha visible)" },
    text: "Retrato fotográfico a color en el que Graziella Pogolotti aparece de tres cuartos, con la barbilla apoyada en el puño y una leve sonrisa. Lleva gafas oscuras, el cabello corto y claro, una blusa de motivos dorados y una chaqueta beige; a la izquierda se aprecia un micrófono. El gesto de escucha reflexiva y el encuadre cercano subrayan su faceta de pensadora y crítica. La fotografía parece tomada durante un acto o conferencia."
  },
  g3: {
    caption: "1983", thumbPos: "50% 25%",
    img: "assets/img/graziella/graziella-03.jpg",
    alt: "Cubierta de «Oficio de leer», de Graziella Pogolotti, con un recuadro azul que contiene un dibujo de un perfil amarillo con gafas y un puntero",
    title: "Oficio de leer", author: GRAZIELLA_AUTOR,
    specs: { "Título": "Oficio de leer (en el texto del proyecto, El oficio de leer)", "Fecha aproximada": "1983 (año de la primera edición; la edición fotografiada no se puede precisar)" },
    text: "Fotografía de la cubierta del libro Oficio de leer, de Graziella Pogolotti. Sobre un fondo azul y negro destaca un recuadro con un dibujo en amarillo, azul y negro: un perfil caricaturizado con gafas que sostiene un puntero o varilla. Abajo aparecen el nombre de la autora y el título en letras grandes. Se trata de uno de sus libros de ensayos, dedicado a los problemas de la creación, la educación y la lectura. La imagen muestra un ejemplar con señales de uso, tomado con poca nitidez."
  },
  g4: {
    caption: "2006", thumbPos: "50% 40%",
    img: "assets/img/graziella/graziella-04.jpg",
    alt: "Cubierta de «Polémicas culturales de los 60», con selección y prólogo de Graziella Pogolotti, y un fondo rojo con rostros estilizados y estrellas",
    title: "Polémicas culturales de los 60", author: GRAZIELLA_AUTOR,
    specs: { "Título": "Polémicas culturales de los 60 (en el texto del proyecto, Polémicas culturales de los sesenta)", "Fecha aproximada": "Primera edición, 2006; la cubierta corresponde a la 2.ª edición (año no visible)" },
    text: "Cubierta de Polémicas culturales de los 60, volumen del que Graziella Pogolotti hizo la selección y el prólogo, según se lee en la portada, que además indica que es la segunda edición. El diseño, en rojos y rosados, repite el rostro estilizado de una figura con la mano ante la boca, en recuadros de estilo gráfico cercano al cartel de los años sesenta, con estrellas amarillas. El libro permite reconstruir debates fundamentales de la cultura cubana de esa década."
  },
  g5: {
    caption: "2011", thumbPos: "50% 45%",
    img: "assets/img/graziella/graziella-05.jpg",
    alt: "Cubierta de «Dinosauria soy. Memorias», de Graziella Pogolotti, con un remolino azul sobre fondo negro",
    title: "Dinosauria soy. Memorias", author: GRAZIELLA_AUTOR,
    specs: { "Título": "Dinosauria soy. Memorias", "Fecha aproximada": "2011 (año de publicación, según el texto del proyecto)" },
    text: "Cubierta de Dinosauria soy. Memorias, el libro en que Graziella Pogolotti hace una mirada retrospectiva sobre su vida y sobre los acontecimientos del siglo XX. El diseño es sobrio: un fondo negro y azul violáceo con una espiral de trazos azules, y el título en letra cursiva blanca, con el subtítulo «Memorias» y el nombre de la autora debajo. El título, asumido con ironía, expresa la posición de quien ve en la memoria acumulada una herramienta para observar críticamente el presente."
  },
  g6: {
    caption: "Libro", thumbPos: "50% 60%",
    img: "assets/img/graziella/graziella-06.jpg",
    alt: "Cubierta de «En busca del unicornio», de Graziella Pogolotti, con un dibujo urbano y una figura humana rojiza con las manos en el rostro",
    title: "En busca del unicornio", author: GRAZIELLA_AUTOR,
    specs: { "Título": "En busca del unicornio", "Fecha aproximada": "No determinada (el año de la edición no es visible)" },
    text: "Cubierta del libro En busca del unicornio, de Graziella Pogolotti. Sobre fondo blanco, un dibujo a línea muestra edificios de una calle urbana, y en primer plano una pintura de una figura humana en tonos rojizos que se cubre el rostro con las manos. El nombre de la autora y el título figuran en la parte superior. La imagen, fotografiada sobre una mesa, permite ver el diseño sencillo del volumen."
  },
  g7: {
    caption: "Libro", thumbPos: "50% 20%",
    img: "assets/img/graziella/graziella-07.jpg",
    alt: "Cubierta de «Pensar para hacer. Cultura y sociedad en Cuba», de Graziella Pogolotti, con una pintura de una figura leyendo ante una máquina de escribir",
    title: "Pensar para hacer. Cultura y sociedad en Cuba", author: GRAZIELLA_AUTOR,
    specs: { "Título": "Pensar para hacer. Cultura y sociedad en Cuba", "Fecha aproximada": "No determinada (edición de Ocean Sur; el año no es visible)" },
    text: "Cubierta del libro Pensar para hacer. Cultura y sociedad en Cuba, de Graziella Pogolotti, con el sello de Ocean Sur. La ilustración reproduce una pintura de estilo geométrico con una figura que lee inclinada sobre un papel, junto a una máquina de escribir, en grises, rojos y verdes. Sobre una franja verdosa aparece el nombre de la autora, y debajo el título y el subtítulo en letras doradas. Por el subtítulo, el libro reúne su reflexión sobre la cultura y la sociedad cubanas."
  },
  g8: {
    caption: "2020", thumbPos: "50% 40%",
    img: "assets/img/graziella/graziella-08.jpg",
    alt: "Cartel del Premio a la Dignidad 2020: un tronco con una boina verde con estrella como copa, sobre fondo rojo, con el texto «A: Graziella Pogolotti, insigne ensayista e intelectual cubana»",
    title: "Cartel del Premio a la Dignidad 2020", author: GRAZIELLA_AUTOR,
    specs: { "Título": "Cartel del Premio a la Dignidad 2020 (título descriptivo)", "Fecha aproximada": "2020 (según el cartel)" },
    text: "Cartel ilustrado del Premio a la Dignidad que la Unión de Periodistas de Cuba, a través de su Presidencia Nacional, otorgó en 2020 a Graziella Pogolotti. Sobre un fondo rojo y un cielo anaranjado se alza un tronco robusto coronado por una gran boina verde con una estrella, como si fuera la copa de un árbol, y una pequeña hoja en una de sus ramas. A la derecha se lee la dedicatoria «A: Graziella Pogolotti, insigne ensayista e intelectual cubana»; el nombre del premio figura a la izquierda. Es el reconocimiento a su labor intelectual."
  }
};

/* Galerías disponibles para el popup de ficha (artworkModal) */
const galleries = {
  futurismo: { order: artworkOrder, data: artworkData, textLabel: "Sobre la obra", unit: "OBRA" },
  barrio:    { order: barrioOrder,  data: barrioData,  textLabel: "Descripción",   unit: "FOTO" },
  dino:      { order: dinoOrder,    data: dinoData,    textLabel: "Descripción",   unit: "FOTO" },
  marcelo:   { order: marceloOrder, data: marceloData, textLabel: "Sobre la obra", unit: "IMAGEN" },
  graziella: { order: graziellaOrder, data: graziellaData, textLabel: "Descripción", unit: "IMAGEN" }
};

/* Textos de cada bloque cronológico (popup de los nodos de la línea del tiempo) */
const periodData = {
  "bloque-1": {
    quote: "“Un emigrante piamontés compró tierra arrasada por la guerra y levantó un barrio: agua, calles y viviendas para los trabajadores.”",
    notes: "NODOS: 1898 (LLEGADA A CUBA) · PRIMER BARRIO OBRERO DEL SIGLO XX · MARIANAO",
    sections: [
      {
        label: "Galería de imágenes",
        gallery: "barrio",
        paras: ["Pulsa una imagen para ver la fotografía ampliada y su ficha."]
      },
      {
        label: "107 años de Pogolotti",
        video: { src: "assets/video/107-anos-de-pogolotti.mp4" }
      },
      {
        label: "Vídeo en línea",
        link: { text: "Mi Pogolotti querido", url: "https://www.youtube.com/watch?v=HXPhz8J1eZ0&t=460s" }
      },
      {
        kicker: "Patrimonio urbano · Historia social de La Habana",
        label: "Pogolotti: nacimiento y memoria del primer barrio obrero de Cuba",
        paras: [
          "Concebido como un proyecto de viviendas populares durante los primeros años de la República, el barrio de Marianao constituye un capítulo singular de la historia del urbanismo cubano y de las transformaciones sociales que acompañaron el crecimiento de La Habana.",
          "En el actual municipio de Marianao, en La Habana, existe un barrio cuyo nombre remite a una historia de emigración, emprendimiento y transformación social. Pogolotti, reconocido como el primer barrio obrero de Cuba, surgió de un proyecto de viviendas populares impulsado durante los primeros años de la República y asociado a la iniciativa empresarial del italiano Domenico Pogolotti.",
          "Su fundación representó un episodio importante dentro de la expansión urbana de La Habana hacia el oeste y de los primeros intentos institucionales por responder a las necesidades habitacionales de los sectores trabajadores.",
          "Para comprender su origen es necesario situarse en las primeras décadas del siglo XX, cuando Marianao experimentaba un notable proceso de crecimiento. La extensión de las líneas del tranvía, el establecimiento de instalaciones militares, la apertura de nuevas vías de comunicación y la adquisición de grandes extensiones de terrenos favorecieron la aparición de nuevos repartos residenciales.",
          "En ese contexto, los terrenos de la finca Jesús María se convertirían en el escenario de una experiencia urbanística que terminaría dejando una profunda huella en la historia de la ciudad."
        ]
      },
      {
        label: "La Ley Valdés Carrero y el nacimiento de un proyecto social",
        paras: [
          "El 18 de julio de 1910 fue aprobada la Ley Valdés Carrero, iniciativa legislativa destinada a promover la construcción de viviendas económicas para familias cubanas cuyos recursos dependieran fundamentalmente del trabajo manual.",
          "La disposición establecía un presupuesto de 1 300 000 pesos y contemplaba la construcción de casas de mampostería y cubierta de tejas, con una distribución interior que debía garantizar condiciones básicas de habitabilidad.",
          "Las viviendas tendrían aproximadamente 48 metros cuadrados de superficie edificada y contarían con sala, comedor, dos dormitorios, cocina, baño y servicio sanitario. El puntal previsto era de cuatro metros y los beneficiarios pagarían una cuota mensual de 6,25 pesos.",
          "El 2 de septiembre de 1910 varias empresas presentaron sus propuestas para ejecutar las obras. Entre ellas figuraba la Compañía Nacional Constructora, vinculada a Domenico Pogolotti, cuya propuesta fue seleccionada después de la evaluación realizada por una comisión gubernamental el 3 de octubre de aquel año.",
          "La iniciativa representaba una oportunidad para desarrollar un conjunto residencial planificado, destinado a trabajadores que difícilmente podían acceder a una vivienda propia mediante los mecanismos habituales del mercado inmobiliario."
        ]
      },
      {
        label: "Redención: las primeras viviendas",
        paras: [
          "El 30 de octubre de 1910, a las diez de la mañana, se colocó la primera piedra del nuevo reparto en terrenos de la finca Jesús María, situada en el barrio de Los Quemados. El acto contó con la presencia del presidente de la República, José Miguel Gómez; del representante Luis Valdés Carrero y de Baldomero Acosta, alcalde de Marianao.",
          "El proyecto contemplaba levantar viviendas adosadas, organizadas en grupos de quince unidades que conformarían edificios continuos y completarían ocho manzanas.",
          "El reparto recibió inicialmente el nombre de Redención, una denominación que expresaba el sentido social atribuido a aquella iniciativa: facilitar el acceso a una vivienda a familias trabajadoras.",
          "El 15 de enero de 1911 una comisión presidida por el secretario de Agricultura efectuó el sorteo de las primeras cien casas. Posteriormente, el Gobierno adquirió cincuenta viviendas recién terminadas por un valor de 32 500 pesos. El 24 de febrero de ese año se entregaron las primeras cien casas a sus adjudicatarios, acontecimiento que marcó el nacimiento del nuevo barrio obrero.",
          "La construcción continuó durante los meses siguientes. Para julio de 1911 se habían entregado alrededor de 250 viviendas y, según los datos disponibles, la empresa llegó a edificar aproximadamente 950 casas, cincuenta menos de las mil inicialmente previstas."
        ]
      },
      {
        label: "Las contradicciones de un proyecto de vivienda popular",
        paras: [
          "Aunque el nacimiento de Pogolotti representó un avance en materia de planificación residencial, su desarrollo estuvo acompañado de dificultades que condicionaron la vida de sus primeros habitantes.",
          "La calidad constructiva de algunas viviendas no respondió plenamente a las expectativas iniciales. Tampoco se garantizaron desde el comienzo todos los servicios básicos que requería el nuevo asentamiento.",
          "La escasez de transporte, las dificultades para acceder al agua corriente y la insuficiencia del alumbrado eléctrico generaron numerosas privaciones. Estas condiciones influyeron en el escaso entusiasmo que inicialmente mostraron algunos trabajadores por ocupar las viviendas, particularmente los tabaqueros, sector que constituía entonces uno de los principales núcleos de la clase obrera cubana y al que estaba dirigida buena parte del espíritu de la legislación.",
          "Esta situación revela una de las contradicciones fundamentales del proyecto: la distancia entre la concepción institucional de una política de vivienda popular y las condiciones materiales necesarias para garantizar su funcionamiento.",
          "No bastaba con construir casas. Era imprescindible asegurar las comunicaciones, el suministro de agua, la electricidad, los servicios públicos y las condiciones de integración del nuevo barrio con el resto de la ciudad.",
          "A pesar de estas dificultades, Pogolotti logró consolidarse como un asentamiento de creciente importancia dentro de Marianao."
        ]
      },
      {
        label: "La infraestructura y la vida comunitaria",
        paras: [
          "El crecimiento del barrio estuvo acompañado por la aparición de nuevas instalaciones y actividades que contribuyeron a configurar su identidad urbana y social.",
          "La compañía Ferrocarriles Unidos construyó la Estación Pogolotti, situada en las proximidades del actual cruce de la avenida 33 y la calle 90. La instalación facilitó las comunicaciones y favoreció el movimiento de personas y mercancías en una zona que comenzaba a adquirir mayor dinamismo.",
          "Domenico Pogolotti promovió también la apertura de establecimientos comerciales y espacios destinados al entretenimiento. Entre ellos destacó el Café Torino, que alcanzó popularidad más allá de los límites de Marianao por sus salones para fiestas y banquetes y su pista de baile.",
          "Junto al café se construyó un teatro, una iniciativa que respondía al interés de Pogolotti por la cultura y que contribuyó a dotar al nuevo reparto de espacios de socialización y recreación.",
          "La educación también comenzó a ocupar un lugar importante en el desarrollo de la comunidad. El 5 de mayo de 1912, el presidente José Miguel Gómez inauguró una escuela pública situada en la calle Emilio Zola, entre Cuarta y Quinta, obra promovida por Luis Valdés Carrero y que representó una inversión de 37 885,41 pesos.",
          "Estas instalaciones contribuyeron a transformar progresivamente el asentamiento residencial en un espacio de vida colectiva, donde el trabajo, la educación, el comercio y el entretenimiento comenzaron a configurar una identidad comunitaria.",
          "Para noviembre de 1912, la población del reparto había experimentado un crecimiento considerable, aunque las cifras disponibles sobre el número de familias residentes deben contrastarse con los registros históricos y censales de la época."
        ]
      },
      {
        label: "Pogolotti en la expansión urbana de Marianao",
        paras: [
          "La fundación del barrio no puede entenderse de manera aislada. Formó parte de un proceso mucho más amplio de expansión urbana que transformó profundamente el territorio de Marianao durante las primeras décadas del siglo XX.",
          "Entre 1903 y 1915 surgieron o se desarrollaron distintos repartos, entre ellos Columbia, Almendares, Santa Catalina de Buenavista, Larrazábal, San José, Jesús María, Los Hornos, Miramar, La Serafina, Clarisa, Oriental Park y otros núcleos residenciales.",
          "El establecimiento del campamento militar de Columbia y de su aeropuerto contribuyó a intensificar la ocupación de estos territorios y estimuló el desarrollo de nuevas actividades económicas y residenciales.",
          "Entre 1914 y 1918 continuó el proceso de urbanización con la construcción de repartos destinados a sectores de mayores recursos, como La Sierra, Céspedes, las ampliaciones de Miramar y Almendares, Alturas del Río Almendares y Country Club.",
          "Esta expansión convivió con asentamientos de carácter más popular, como Pocito, Coco Solo, Los Quemados, Buenavista, Pogolotti, La Lisa y La Ceiba.",
          "De este modo, Marianao fue adquiriendo una estructura urbana heterogénea, donde coexistían zonas residenciales de prestigio y barrios populares, reflejo de las diferencias económicas y sociales de la época."
        ]
      },
      {
        label: "El agua y la electricidad: nuevos desafíos urbanos",
        paras: [
          "La expansión de los repartos residenciales hizo evidente la necesidad de desarrollar infraestructuras capaces de garantizar el abastecimiento y los servicios de las nuevas comunidades.",
          "En marzo de 1916, Domenico Pogolotti participó junto a otros inversionistas y promotores en la constitución de la Compañía Nacional de Fomento Urbano, que obtuvo un contrato para realizar trabajos relacionados con el acueducto destinado a resolver los problemas de abastecimiento de los nuevos repartos.",
          "La empresa intervino también en la instalación de una planta eléctrica en Marianao, ampliando así su participación en el desarrollo de infraestructuras urbanas.",
          "Estas actuaciones reflejaban una transformación importante en la concepción del crecimiento territorial: la urbanización comenzaba a exigir no solamente la parcelación y edificación de terrenos, sino también la creación de redes técnicas y servicios capaces de sostener la vida cotidiana de sus habitantes."
        ]
      },
      {
        label: "Un barrio entre la historia y la memoria",
        paras: [
          "Con el paso del tiempo, el nombre de Redención fue desplazado por el de Pogolotti. El apellido del empresario italiano terminó identificando no solo el reparto, sino también una comunidad que desarrolló una identidad propia dentro del municipio de Marianao.",
          "La fundación del barrio representó una contribución importante al crecimiento urbano de la zona. Se trataba de terrenos que, de otro modo, podían haber permanecido durante largo tiempo sin una ocupación residencial significativa. Su urbanización favoreció el incremento de la población y propició nuevas dinámicas económicas y sociales.",
          "Algunos testimonios históricos relacionan también estos terrenos con las investigaciones desarrolladas por el doctor Carlos J. Finlay sobre el mosquito Aedes aegypti, transmisor de la fiebre amarilla. Este dato merece una comprobación documental más precisa antes de establecer una relación directa entre las investigaciones del científico y el área específica donde se construyó el reparto.",
          "Más allá de sus limitaciones constructivas y de las dificultades experimentadas por sus primeros habitantes, Pogolotti constituyó una experiencia significativa de planificación residencial y organización social durante la República.",
          "Su importancia no radica únicamente en haber sido uno de los primeros proyectos de vivienda popular de Cuba, sino también en haber contribuido a poner de manifiesto la relación entre urbanismo, infraestructura, condiciones de vida y desigualdad social.",
          "Hoy, el barrio conserva un valor que trasciende sus límites geográficos. Sus calles, viviendas, espacios de encuentro y memoria comunitaria forman parte del patrimonio urbano de Marianao y de la historia de la ciudad de La Habana.",
          "Pogolotti es, en definitiva, mucho más que el apellido de un empresario italiano convertido en nombre de un barrio. Es el testimonio de una experiencia histórica en la que confluyeron la emigración europea, las transformaciones de la sociedad cubana, los primeros proyectos de vivienda obrera y la construcción de nuevas formas de vida comunitaria."
        ]
      }
    ]
  },
  "bloque-2": {
    quote: "“La vanguardia cubana encuentra en Europa sus colectivos: el futurismo de Turín y los artistas revolucionarios de París.”",
    notes: "NODOS: 1927 (EXPOSICIÓN DE ARTE NUEVO) · 1931 (MANIFIESTO FUTURISTA) · 1938 (DEL BARRO Y LAS VOCES)",
    sections: [
      { label: "Vanguardia", video: { src: "assets/video/vanguardia.mp4" } },
      {
        kicker: "La Vanguardia Artística Cubana (1925/1927 – 1951)",
        label: "Períodos, Protagonistas y Desarrollo Institucional · Introducción y Contexto Histórico",
        paras: [
          "El movimiento conocido como \"arte nuevo\" emergió en Cuba hacia 1927 como una urgencia impostergable por refundar la visualidad de la isla y hallar expresiones más auténticas y renovadas de lo nacional. Esta búsqueda de autoafirmación cultural se canalizó a través de idearios estéticos como el afrocubanismo, el criollismo y una pintura de acentuada preocupación social. La delimitación cronológica de este proceso transformador abarca desde los años de germinación y ruptura inicial (1925/1927) hasta su maduración e institucionalización formal hacia 1951. A lo largo de este período, la plástica cubana experimentó una acelerada modernización que reconfiguró las nociones de identidad, abriendo paso a uno de los ciclos artísticos más prolíficos y trascendentes de la historia cultural latinoamericana del siglo XX."
        ]
      },
      {
        label: "Periodización y Etapas Clave",
        paras: ["La evolución histórica de la vanguardia plástica cubana se articula en tres fases fundamentales:"],
        items: [
          ["1. La Arrancada (1925-1927)", "Marca el momento germinal de la ruptura vanguardista a través del impulso editorial de la Revista Avance y la celebración coyuntural de la Exposición de Arte Nuevo. En este hito fundacional destacan Antonio Gattorno, articulador de una de las primeras formulaciones del criollismo modernista; Juan José Sicre, en la escultura, desplazándose con maestría entre el impresionismo matérico y el clasicismo formal; y Víctor Manuel García, pionero en realizar la primera transposición conceptual del modernismo europeo a los temas, tipos y ambientes locales."],
          ["2. Consolidación de la Primera Generación (Años 30)", "Período signado por los viajes de formación de los creadores a París, donde se nutren directamente de las corrientes del modernismo europeo (cubismo, posimpresionismo, surrealismo). A la par, desde mediados de la década de 1930, se consolidó una profunda impronta del muralismo y la pintura mexicana, impregnando a las artes visuales de un tamiz monumental y de un firme compromiso social y telúrico."],
          ["3. Emergencia de la Segunda Generación (1938 - Años 40)", "A partir de 1938 irrumpe una nueva promoción artística integrada por creadores que se reconocen como \"hijos de los años de frustración tras el fracaso de la llamada revolución del 30\". Este desencanto socio-político provocó un viraje estético decisivo: la generación abandona las proclamas colectivas e ideológicas para replegarse hacia la introspección, la búsqueda del hábitat íntimo y la exploración de una nueva iconografía urbana y religiosa."]
        ]
      },
      {
        label: "Evolución Temática y Características Generales",
        paras: ["El tránsito entre la primera y la segunda generación de la vanguardia evidencia mutaciones esenciales en la sensibilidad estética y en los presupuestos ideológicos del arte cubano:"],
        items: [
          ["Primera Generación (1925-1930s)", "Influencias y temáticas principales: Idearios del afrocubanismo, criollismo y pintura de sentido social. Fuerte preocupación político-social e impacto directo del muralismo mexicano desde mediados de los años 30.\nEnfoque estético y espacial: Búsqueda y afirmación de la identidad nacional centrada en el mundo rural/campesino, la fabulación del paisaje, los mitos afrocubanos y el paisaje patrio."],
          ["Segunda Generación (1938-1940s)", "Influencias y temáticas principales: Desintegración del discurso político-social directo y abandono del pintoresquismo afrocubano. Emergencia de motivos urbanos, el hábitat cotidiano y tradiciones religiosas heterogéneas, derivados de la desilusión histórica post-1930.\nEnfoque estético y espacial: Intimismo, investigación de espacios interiores cerrados, acento nostálgico e inquisitivo. Exploración constante del umbral entre la figuración lírica y la abstracción."]
        ]
      },
      {
        label: "Principales Exponentes de la Vanguardia Plástica · Pintura: Primera Generación y Pioneros",
        items: [
          ["Víctor Manuel García", "Aportes y significación: Considerado indiscutiblemente el padre de la pintura moderna cubana, erigiéndose en un referente ético y estético singular mediante un magisterio orgánico ejercido sobre las promociones jóvenes.\nCaracterísticas formales: Influenciado por las escuelas posimpresionistas europeas, operó la primera transposición estilística de los códigos modernos al contexto tropical.\nObra clave: Gitana Tropical (1929), obra cumbre del modernismo cubano que funde tradición y vanguardia al aproximarse a la figura de la mestiza y la india americana —un abordaje sumamente inusual y rupturista para la época—."],
          ["Eduardo Abela", "Aportes y significación: Incorpora la gráfica satírica e ilustrada a la modernidad plástica con la creación, en 1925, de El Bobo, personaje emblemático de crítica política.\nEvolución y obras clave: Realiza en París su Serie afrocubana (1928) y culmina en 1938 su célebre óleo Guajiros, piedra angular de la imaginación criollista bajo una elaborada asimilación del muralismo mexicano."],
          ["Amelia Peláez", "Aportes y significación: Asimila rigurosamente las estructuras formales del cubismo en París, reelaborándolas de manera original al reintegrarse al medio nacional.\nCaracterísticas formales: Decanta la arquitectura doméstica colonial e incorpora la ornamentación de las artes decorativas del siglo XIX cubano (cancelas, vitrales, mediacañas), convirtiendo el rigor estricto del cubismo en un lenguaje barroco, frondoso y exuberante."],
          ["Carlos Enríquez", "Aportes y significación: Representante insubordinado de la vanguardia, asimila la libertad conceptual y compositiva del surrealismo europeo. A su regreso a Cuba en 1936, postula la noción del \"romancero guajiro\" para reinterpretar la geografía rural.\nCaracterísticas formales y temáticas: Se apropia de los mitos, la violencia, la sensualidad y las fábulas del campo cubano a través de una técnica fluida apoyada en la superposición de transparencias y la movilidad del color.\nObra clave: El rapto de las mulatas, pieza capital que conmociona por el dinamismo de la escena, la exacerbación erótica y el desbordamiento cromático."],
          ["Marcelo Pogolotti", "Aportes y significación: Tras un período de experimentación avant-garde en los centros artísticos europeos, se convierte en el máximo exponente de la pintura de denuncia y contenido social.\nTemática: Estructura un ciclo pictórico de rigor geometrizante donde analiza críticamente la alienación industrial, el conflicto de clases y las contradicciones del hombre en la era tecnológica contemporánea."],
          ["Fidelio Ponce", "Aportes y significación: Figura insular e inclasificable que elude deliberadamente las directrices del nacionalismo pintoresco o identitario.\nCaracterísticas formales y temáticas: Desarrolla una poética acromática (\"sin color\"), fundamentada en gamas de blancos, ocre y tierras. Sus lienzos indagan en vivencias íntimas, la fragilidad humana, recuerdos remotos de la infancia y meditaciones continuas sobre la enfermedad y la muerte."]
        ]
      },
      {
        label: "Pintura: Segunda Generación y Casos Singulares",
        items: [
          ["Mario Carreño", "Evolución estética: Ilustra impecablemente el tránsito entre la primera arrancada vanguardista y la madurez estilística del movimiento. Inicia sus búsquedas formales bajo la influencia del arte mexicano hasta consolidar un \"nuevo clasicismo decididamente americano\", caracterizado por la solidez compositiva y el rigor monumental."],
          ["René Portocarrero", "Características formales y temáticas: Creador de una poética barroca marcada por el intimismo y un sesgo nostálgico e inquisitivo. Articula su universo visual en torno a la figura femenina, los interiores habaneros, las abigarradas arquitecturas de la ciudad y las procesiones y expresiones del sincretismo religioso."],
          ["Mariano Rodríguez", "Evolución estética: Inicia su trayectoria bajo los postulados del muralismo mexicano, manifestando una vocación por la sobriedad espacial y el universo femenino. Posteriormente, expande su paleta hacia una pintura de vibrante dinamismo expresivo estructurada en series icónicas como sus gallos, los guajiros, el paisaje insular y las naturalezas muertas."],
          ["Cundo Bermúdez", "Características formales: Define su sello en la frontera fronteriza donde colindan la figuración estilizada y la síntesis abstracta. Destaca por una orquestación cromática audaz que yuxtapone tonalidades opuestas y brillantes para representar personajes estáticos e interiores domésticos."],
          ["Wifredo Lam", "Aportes y significación: Caso excepcional por su prolongada inserción en los circuitos internacionales (vinculado a la vanguardia española desde 1923 y, más tarde, al surrealismo y a Pablo Picasso).\nCaracterísticas formales y temáticas: Al regresar a Cuba procedente de Europa, sintetiza en su propia sangre e identidad la triple herencia china, negra y española. Esta amalgama biológica y cultural alimentó un mensaje inédito de cubanía universal, penetrando profundamente en la metafísica de los mitos y leyendas afrocubanas.\nObra clave: El tercer mundo, monumento sintético de las conquistas formales de dos décadas de vanguardia, erigido en un poderoso símbolo poético de la emancipación de los pueblos oprimidos."]
        ]
      },
      {
        label: "Escultura de Vanguardia",
        items: [
          ["Juan José Sicre", "Aportes: Pionero y fundador indiscutible de la escultura moderna en Cuba, responsable de quebrar la tradición académica del siglo XIX mediante un lenguaje que osciló entre el impresionismo matérico y la síntesis clásica."],
          ["Rita Longa", "Aportes: Escultora de precoz e influyente magisterio. Su producción sitúa a la figura femenina como sujeto articulador, destacándose por una fluidez orgánica, elegancia espacial y un alto poder de síntesis formal."],
          ["Teodoro Ramos Blanco y Ernesto Navarro", "Aportes: Escultores fundamentales que dieron continuidad y densidad conceptual al proceso de renovación plástica iniciado a finales de la década de 1920."]
        ]
      },
      {
        label: "Desarrollo e Hitos Institucionales (1951-1955)",
        paras: ["La legitimación e institucionalización del arte moderno cubano se estructuró a través de los siguientes hechos históricos:"],
        items: [
          ["1951", "Tras padecer más de tres décadas de hacinamiento e insalubridad institucional en la vieja casona de la calle Aguiar, se aprueba el proyecto arquitectónico diseñado por Esteban Rodríguez Pichardo. Se determina el solar que ocupaba el antiguo Mercado de Colón como el emplazamiento idóneo para edificar la sede definitiva del Palacio de Bellas Artes."],
          ["18 de junio de 1954", "Se efectúa la inauguración oficial del nuevo Palacio de Bellas Artes."],
          ["1955", "Se completa el traslado e instalación definitiva de las colecciones artísticas en sus respectivas salas de exhibición."]
        ]
      },
      {
        label: "Funciones y Relevancia Institucional",
        items: [
          ["Sede", "El Palacio asumió la sede del Museo Nacional y del Instituto Nacional de Cultura, organismo expresamente orientado a la promoción y difusión del arte moderno."],
          ["Política museográfica", "La institución transformó la política museográfica nacional al otorgar un espacio prioritario en sus salas permanentes a las tendencias más contemporáneas de la época, legitimando abiertamente el despliegue de la abstracción."],
          ["Patronato", "Creación del Patronato de Bellas Artes para la salvaguardia patrimonial."],
          ["Donaciones", "Reactivación sustancial de las donaciones y depósitos de colecciones privadas de alto valor, movilizadas gracias al prestigio, la intachable honestidad y la solidez institucional demostradas a lo largo de décadas por Rodríguez Morey."]
        ]
      },
      {
        label: "Conclusión",
        paras: [
          "El movimiento de vanguardia artística cubana comprendido entre 1925/1927 y 1951 representó una de las transformaciones poéticas e ideológicas más radicales del arte latinoamericano del siglo XX. A través de la ruptura inicial acometida por la primera generación y el posterior giro introspectivo de la segunda promoción, los creadores cubanos desarticularon los academicismos decimonónicos para erigir un lenguaje plástico capaz de expresar la densidad de la identidad nacional. El trayecto que se extiende desde la aparición de Gitana Tropical hasta las síntesis universales de Wifredo Lam encontró su correlato físico e institucional a mediados de la década de 1950 con la creación del Palacio de Bellas Artes. Esta edificación no solo dio albergue definitivo al patrimonio visual acumulado durante casi tres décadas de experimentación, sino que consagró oficialmente el ingreso del arte contemporáneo cubano en la historia universal de la cultura."
        ]
      }
    ]
  },
  "bloque-3": {
    quote: "“La crítica y el ensayo heredan la memoria: Graziella devuelve a Marcelo y a toda una cultura su lugar en la historia.”",
    notes: "NODOS: 1932 (NACE EN PARÍS) · 1965 (EXAMEN DE CONCIENCIA) · 2005 (PREMIO NACIONAL DE LITERATURA)",
    sections: [
      { label: "90 años de Graziella Pogolotti", video: { src: "assets/video/90 años de Graziella Pogolotti.mp4" } }
    ]
  },
  "bloque-4": {
    pill: "1909 / 1916",
    nodeView: {
      video: { label: "Ver vídeo", title: "Futurismo", src: "assets/video/futurismo.mp4" }
    },
    quote: "“Del manifiesto de Marinetti en Le Figaro a los grupos de Turín: el futurismo convirtió la máquina, la velocidad y la metrópolis en una estética nueva. Marcelo Pogolotti se integró en su segunda etapa.”",
    notes: "NODOS: 1909 (MANIFIESTO DEL FUTURISMO) · 1916 (INICIO DEL SEGUNDO FUTURISMO) · 1929 (MANIFIESTO DE LA AEROPINTURA) · 1944 (MUERTE DE MARINETTI)",
    sections: [
      {
        label: "Cuándo y dónde surgió",
        paras: [
          "El futurismo nace en Italia el 20 de febrero de 1909, cuando el poeta Filippo Tommaso Marinetti publica en el diario parisino Le Figaro el «Manifiesto del Futurismo», redactado en Milán. Su primera generación —Boccioni, Carrà, Russolo, Balla, Severini— se forma en torno a Milán.",
          "El segundo futurismo es la etapa que se abre en 1916, con la muerte de Boccioni y de Sant’Elia, y llega hasta la muerte de Marinetti en 1944. Sus focos son Roma, Turín —con el grupo de Fillia—, Milán, Rovereto y Perugia. La periodización no es unánime entre los historiadores; aquí se toma 1916 como punto de partida."
        ]
      },
      {
        label: "Contexto y motivos de su aparición",
        items: [
          ["Italia joven", "Unificada en 1861, cargaba con el peso del pasado clásico y renacentista (el «pasatismo» que Marinetti combate) y con un retraso industrial que el norte empezaba a superar."],
          ["Modernización", "Milán y Turín crecían con la industria (la Fiat nace en Turín en 1899), la electricidad, el automóvil, el tranvía, la aviación y la multitud urbana."],
          ["Ideas de la época", "El dinamismo de Bergson, el vitalismo de Nietzsche, la crisis del positivismo, la cronofotografía de Marey y el cubismo parisino."],
          ["Nacionalismo y guerra", "Marinetti defiende la entrada de Italia en la Primera Guerra Mundial y exalta la guerra como «única higiene del mundo». El conflicto mata a Boccioni y a Sant’Elia."],
          ["Tras 1916", "El movimiento pasa de la ruptura con el pasado a la «reconstrucción futurista del universo»: arte, diseño, publicidad, arquitectura y vida cotidiana. Su relación con el fascismo fue ambigua y polémica: Marinetti participó en la fundación de los Fasci di combattimento en 1919 y fue nombrado académico de Italia en 1929."]
        ]
      },
      {
        label: "Características formales",
        items: [
          ["Dinamismo", "Representar el movimiento y la velocidad mediante «líneas de fuerza», la repetición de formas y la descomposición de la trayectoria."],
          ["Simultaneidad", "Varias acciones, tiempos y puntos de vista a la vez; compenetración de planos."],
          ["Color y geometría", "Colores intensos y planos nítidos. En el segundo futurismo predominan las formas mecánicas, geométricas y cercanas a la abstracción (arte mecánica)."],
          ["Nuevos medios", "Fotodinamismo, cine, collage, escultura con materiales industriales, teatro sintético, diseño gráfico y publicitario."],
          ["Palabras en libertad", "Sintaxis rota, sin puntuación, con onomatopeyas y composición tipográfica libre."]
        ]
      },
      {
        label: "Características conceptuales",
        items: [
          ["Ruptura", "Rechazo del pasado, de los museos, de la academia y del sentimentalismo."],
          ["Culto a la máquina", "La belleza de la velocidad: un automóvil rugiente «es más bello que la Victoria de Samotracia»."],
          ["Arte total", "En «Reconstrucción futurista del universo» (1915) se propone fundir arte y vida: diseñar el vestido, el juguete, el mueble, la publicidad y hasta la cocina."],
          ["Arte-acción", "Provocación pública, veladas futuristas y manifiestos concebidos como forma artística."]
        ]
      },
      {
        label: "Temas fundamentales",
        paras: [
          "La máquina y la velocidad (automóvil, tren, avión), la metrópolis y la electricidad, la multitud y el trabajo, la guerra, el deporte y el ruido. En el segundo futurismo se suman el vuelo y la visión aérea (aeropintura), la mecánica como mito moderno y, desde 1931, un «arte sagrado» futurista."
        ]
      },
      {
        label: "Principales manifestaciones",
        items: [
          ["1909", "«Manifiesto del Futurismo» de Marinetti, en Le Figaro (París, 20 de febrero)."],
          ["1910", "«Manifiesto de los pintores futuristas» y «Manifiesto técnico de la pintura futurista» (Milán)."],
          ["1912", "Exposición futurista en la galería Bernheim-Jeune de París y gira por Europa; «Manifiesto técnico de la literatura futurista»."],
          ["1913–1914", "«El arte de los ruidos» de Russolo (1913) y sus intonarumori; «Zang Tumb Tumb» de Marinetti y manifiesto de la arquitectura futurista de Sant’Elia (1914)."],
          ["1915", "«Reconstrucción futurista del universo», de Balla y Depero."],
          ["1916", "Mueren Boccioni y Sant’Elia: comienza el segundo futurismo. Se estrena la película «Vita futurista»."],
          ["1919", "Depero abre en Rovereto la Casa d’Arte Futurista; Marinetti publica «Les mots en liberté futuristes»."],
          ["Años 20 y 30", "Auge del futurismo turinés con Fillia, Diulgheroff, Oriani y Mino Rosso: pintura, arquitectura, publicidad y diseño."],
          ["1929", "«Manifiesto de la aeropintura futurista», publicado en la Gazzetta del Popolo de Turín."],
          ["1930–1931", "«Manifiesto de la cocina futurista» (1930) y «Manifiesto del arte sagrado futurista» (1931), de Marinetti y Fillia."],
          ["1944", "Muerte de Marinetti en Bellagio y fin del futurismo histórico."]
        ]
      },
      {
        label: "Máximos representantes",
        items: [
          ["F. T. Marinetti", "(1876–1944) Fundador, teórico y organizador del movimiento."],
          ["Primera generación", "Umberto Boccioni (1882–1916), Carlo Carrà (1881–1966), Luigi Russolo (1885–1947), Gino Severini (1883–1966) y Antonio Sant’Elia (1888–1916)."],
          ["Giacomo Balla", "(1871–1958) Del dinamismo de 1912 a la reconstrucción futurista: pintura, escultura, diseño y moda."],
          ["Fortunato Depero", "(1892–1960) Escultura, teatro plástico, publicidad y diseño."],
          ["Enrico Prampolini", "(1894–1956) Arte mecánica, escenografía y experimentación con materiales."],
          ["Gerardo Dottori", "(1884–1977) Aeropintura de paisaje desde Perugia."],
          ["Fillia", "(Luigi Colombo, 1904–1936) Líder del futurismo turinés y promotor del arte sagrado futurista."],
          ["N. Diulgheroff", "(1901–1982) Arquitecto y diseñador búlgaro establecido en Turín."],
          ["Tullio Crali", "(1910–2000) Aeropintura de vuelo en picado."],
          ["Benedetta Cappa", "(1897–1977) Pintora y aeropintora, esposa de Marinetti."]
        ]
      },
      {
        label: "Galería de obras",
        gallery: true,
        paras: ["Pulsa una imagen para ver la obra ampliada y su ficha técnica."]
      },
      {
        label: "Obras más significativas",
        items: [
          ["Marinetti", "«Manifiesto del Futurismo» y «Mafarka el futurista» (1909); «Zang Tumb Tumb» (1914)."],
          ["Boccioni", "«La ciudad que sube» (1910–1911); «Visiones simultáneas» (1911); «Formas únicas de continuidad en el espacio» (1913)."],
          ["Carrà y Severini", "«El funeral del anarquista Galli» (Carrà, 1910–1911); «Jeroglífico dinámico del Bal Tabarin» (Severini, 1912)."],
          ["Balla", "«Dinamismo de un perro con correa» (1912); «Velocidad de automóvil + luces» (1913)."],
          ["Russolo", "«La rebelión» (1911); «Dinamismo de un automóvil» (1912–1913); los intonarumori (1913)."],
          ["Sant’Elia", "Dibujos de «La Città Nuova» (1914)."],
          ["Depero", "«Rotación de bailarina y loros» (1917); «Balli plastici» (1918); el libro «Depero futurista» (1927)."],
          ["Dottori", "«Primavera umbra» (1923)."],
          ["Prampolini", "«Entrevista con la materia» (1930)."],
          ["Crali", "«Incuneandosi nell’abitato» (1939), conocida como «En picado sobre la ciudad»."],
          ["Diulgheroff", "Casa Mazzotti, en Albisola (1934)."]
        ]
      }
    ]
  }
};
