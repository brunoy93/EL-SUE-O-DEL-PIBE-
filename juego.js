/* =================================================================
   EL SUEÑO DEL PIBE — juego.js v4.2 (con escudos)
   ================================================================= */


/* ---------------------------------------------------------------
   DIVISIONES
   --------------------------------------------------------------- */
   const DIVISIONES = [
    { nombre: "Federal A",         nivel: 1, prestigio: 1,  sueldoBase: 200  },
    { nombre: "Primera Nacional",  nivel: 2, prestigio: 5,  sueldoBase: 800  },
    { nombre: "Liga Profesional",  nivel: 3, prestigio: 15, sueldoBase: 4000 }
  ];
  
  
  /* ---------------------------------------------------------------
     CLUBES (20 por división, con colores y diseño de escudo)
     --------------------------------------------------------------- */
  const CLUBES = [
    /* Federal A */
    { nombre: "Ferro Carril Oeste",      division: "Federal A", sueldo: 200,  fuerza: 3,  color1: "#0d4a2b", color2: "#ffffff", diseño: "banda" },
    { nombre: "Atlanta",                 division: "Federal A", sueldo: 220,  fuerza: 3,  color1: "#1c3d8a", color2: "#f5c518", diseño: "rayas" },
    { nombre: "Deportivo Morón",         division: "Federal A", sueldo: 240,  fuerza: 3,  color1: "#8b1f1a", color2: "#ffffff", diseño: "liso" },
    { nombre: "Almagro",                 division: "Federal A", sueldo: 260,  fuerza: 4,  color1: "#ffffff", color2: "#1c3d8a", diseño: "rayas" },
    { nombre: "Nueva Chicago",           division: "Federal A", sueldo: 280,  fuerza: 4,  color1: "#1b6b28", color2: "#ffffff", diseño: "banda" },
    { nombre: "Estudiantes de Caseros",  division: "Federal A", sueldo: 250,  fuerza: 3,  color1: "#8b1f1a", color2: "#ffffff", diseño: "liso" },
    { nombre: "Defensores Unidos",       division: "Federal A", sueldo: 210,  fuerza: 2,  color1: "#1c3d8a", color2: "#ffffff", diseño: "liso" },
    { nombre: "Tristán Suárez",          division: "Federal A", sueldo: 200,  fuerza: 2,  color1: "#ffffff", color2: "#1c3d8a", diseño: "liso" },
    { nombre: "Flandria",                division: "Federal A", sueldo: 190,  fuerza: 2,  color1: "#e8b64a", color2: "#0d4a2b", diseño: "rayas" },
    { nombre: "Colegiales",              division: "Federal A", sueldo: 195,  fuerza: 2,  color1: "#ffffff", color2: "#000000", diseño: "rayas" },
    { nombre: "Comunicaciones",          division: "Federal A", sueldo: 200,  fuerza: 2,  color1: "#e8b64a", color2: "#000000", diseño: "liso" },
    { nombre: "Villa Dálmine",           division: "Federal A", sueldo: 210,  fuerza: 3,  color1: "#1b6b28", color2: "#ffffff", diseño: "liso" },
    { nombre: "Argentino de Quilmes",    division: "Federal A", sueldo: 205,  fuerza: 2,  color1: "#1c3d8a", color2: "#ffffff", diseño: "banda" },
    { nombre: "San Miguel",              division: "Federal A", sueldo: 215,  fuerza: 3,  color1: "#1b6b28", color2: "#ffffff", diseño: "rayas" },
    { nombre: "Los Andes",               division: "Federal A", sueldo: 230,  fuerza: 3,  color1: "#8b1f1a", color2: "#ffffff", diseño: "liso" },
    { nombre: "Talleres (RE)",           division: "Federal A", sueldo: 220,  fuerza: 3,  color1: "#ffffff", color2: "#1c3d8a", diseño: "liso" },
    { nombre: "Sacachispas",             division: "Federal A", sueldo: 195,  fuerza: 2,  color1: "#1b6b28", color2: "#e8b64a", diseño: "rayas" },
    { nombre: "Acassuso",                division: "Federal A", sueldo: 200,  fuerza: 2,  color1: "#1c3d8a", color2: "#ffffff", diseño: "liso" },
    { nombre: "UAI Urquiza",             division: "Federal A", sueldo: 210,  fuerza: 3,  color1: "#ffffff", color2: "#8b1f1a", diseño: "banda" },
    { nombre: "Deportivo Merlo",         division: "Federal A", sueldo: 200,  fuerza: 2,  color1: "#1b6b28", color2: "#ffffff", diseño: "liso" },
  
    /* Primera Nacional */
    { nombre: "Quilmes",                 division: "Primera Nacional", sueldo: 800,  fuerza: 5, color1: "#ffffff", color2: "#1c3d8a", diseño: "liso" },
    { nombre: "All Boys",                division: "Primera Nacional", sueldo: 850,  fuerza: 5, color1: "#ffffff", color2: "#000000", diseño: "liso" },
    { nombre: "Chacarita",               division: "Primera Nacional", sueldo: 900,  fuerza: 5, color1: "#000000", color2: "#e8b64a", diseño: "rayas" },
    { nombre: "Platense",                division: "Primera Nacional", sueldo: 950,  fuerza: 6, color1: "#ffffff", color2: "#6caffe", diseño: "liso" },
    { nombre: "Tigre",                   division: "Primera Nacional", sueldo: 1000, fuerza: 6, color1: "#1c3d8a", color2: "#e85a4f", diseño: "banda" },
    { nombre: "Argentinos Juniors",      division: "Primera Nacional", sueldo: 1100, fuerza: 6, color1: "#8b1f1a", color2: "#ffffff", diseño: "liso" },
    { nombre: "Gimnasia de Mendoza",     division: "Primera Nacional", sueldo: 880,  fuerza: 5, color1: "#ffffff", color2: "#000000", diseño: "rayas" },
    { nombre: "San Martín de Tucumán",   division: "Primera Nacional", sueldo: 920,  fuerza: 5, color1: "#ffffff", color2: "#8b1f1a", diseño: "liso" },
    { nombre: "Instituto",               division: "Primera Nacional", sueldo: 1050, fuerza: 6, color1: "#e85a4f", color2: "#ffffff", diseño: "rayas" },
    { nombre: "Belgrano",                division: "Primera Nacional", sueldo: 1080, fuerza: 6, color1: "#6caffe", color2: "#ffffff", diseño: "liso" },
    { nombre: "Defensa y Justicia",      division: "Primera Nacional", sueldo: 1000, fuerza: 6, color1: "#e8b64a", color2: "#1b6b28", diseño: "banda" },
    { nombre: "San Martín de San Juan",  division: "Primera Nacional", sueldo: 950,  fuerza: 5, color1: "#1b6b28", color2: "#ffffff", diseño: "rayas" },
    { nombre: "Alvarado",                division: "Primera Nacional", sueldo: 830,  fuerza: 4, color1: "#1c3d8a", color2: "#ffffff", diseño: "liso" },
    { nombre: "Brown de Adrogué",        division: "Primera Nacional", sueldo: 820,  fuerza: 4, color1: "#ffffff", color2: "#1b6b28", diseño: "liso" },
    { nombre: "Guillermo Brown",         division: "Primera Nacional", sueldo: 810,  fuerza: 4, color1: "#ffffff", color2: "#6caffe", diseño: "banda" },
    { nombre: "Atlético Rafaela",        division: "Primera Nacional", sueldo: 870,  fuerza: 5, color1: "#ffffff", color2: "#6caffe", diseño: "rayas" },
    { nombre: "Gimnasia de Jujuy",       division: "Primera Nacional", sueldo: 900,  fuerza: 5, color1: "#ffffff", color2: "#1c3d8a", diseño: "banda" },
    { nombre: "Riestra",                 division: "Primera Nacional", sueldo: 830,  fuerza: 4, color1: "#ffffff", color2: "#8b1f1a", diseño: "liso" },
    { nombre: "Almirante Brown",         division: "Primera Nacional", sueldo: 880,  fuerza: 5, color1: "#e8b64a", color2: "#000000", diseño: "rayas" },
    { nombre: "Deportivo Madryn",        division: "Primera Nacional", sueldo: 850,  fuerza: 5, color1: "#1c3d8a", color2: "#e8b64a", diseño: "rayas" },
  
    /* Liga Profesional */
    { nombre: "Racing",                  division: "Liga Profesional", sueldo: 4000,  fuerza: 8,  color1: "#6caffe", color2: "#ffffff", diseño: "rayas" },
    { nombre: "Independiente",           division: "Liga Profesional", sueldo: 4200,  fuerza: 8,  color1: "#8b1f1a", color2: "#ffffff", diseño: "liso" },
    { nombre: "San Lorenzo",             division: "Liga Profesional", sueldo: 4400,  fuerza: 8,  color1: "#1c3d8a", color2: "#8b1f1a", diseño: "rayas" },
    { nombre: "Vélez",                   division: "Liga Profesional", sueldo: 4300,  fuerza: 8,  color1: "#ffffff", color2: "#1c3d8a", diseño: "banda" },
    { nombre: "Estudiantes",             division: "Liga Profesional", sueldo: 4500,  fuerza: 8,  color1: "#ffffff", color2: "#8b1f1a", diseño: "rayas" },
    { nombre: "Talleres",                division: "Liga Profesional", sueldo: 4100,  fuerza: 7,  color1: "#ffffff", color2: "#1c3d8a", diseño: "rayas" },
    { nombre: "Boca",                    division: "Liga Profesional", sueldo: 6000,  fuerza: 10, color1: "#1c3d8a", color2: "#e8b64a", diseño: "banda" },
    { nombre: "River",                   division: "Liga Profesional", sueldo: 6200,  fuerza: 10, color1: "#ffffff", color2: "#e85a4f", diseño: "banda-diagonal" },
    { nombre: "Rosario Central",         division: "Liga Profesional", sueldo: 4800,  fuerza: 9,  color1: "#1c3d8a", color2: "#e8b64a", diseño: "rayas" },
    { nombre: "Newell's",                division: "Liga Profesional", sueldo: 4700,  fuerza: 9,  color1: "#8b1f1a", color2: "#000000", diseño: "rayas" },
    { nombre: "Lanús",                   division: "Liga Profesional", sueldo: 4600,  fuerza: 8,  color1: "#8b1f1a", color2: "#ffffff", diseño: "liso" },
    { nombre: "Banfield",                division: "Liga Profesional", sueldo: 4400,  fuerza: 8,  color1: "#1b6b28", color2: "#ffffff", diseño: "rayas" },
    { nombre: "Argentinos Juniors LP",   division: "Liga Profesional", sueldo: 4300,  fuerza: 8,  color1: "#8b1f1a", color2: "#ffffff", diseño: "liso" },
    { nombre: "Huracán",                 division: "Liga Profesional", sueldo: 4200,  fuerza: 7,  color1: "#ffffff", color2: "#e85a4f", diseño: "liso" },
    { nombre: "Gimnasia",                division: "Liga Profesional", sueldo: 4200,  fuerza: 7,  color1: "#ffffff", color2: "#1c3d8a", diseño: "rayas" },
    { nombre: "Colón",                   division: "Liga Profesional", sueldo: 4300,  fuerza: 7,  color1: "#e85a4f", color2: "#000000", diseño: "rayas" },
    { nombre: "Unión",                   division: "Liga Profesional", sueldo: 4300,  fuerza: 7,  color1: "#e85a4f", color2: "#ffffff", diseño: "rayas" },
    { nombre: "Godoy Cruz",              division: "Liga Profesional", sueldo: 4100,  fuerza: 7,  color1: "#1c3d8a", color2: "#ffffff", diseño: "banda" },
    { nombre: "Instituto LP",            division: "Liga Profesional", sueldo: 4200,  fuerza: 7,  color1: "#e85a4f", color2: "#ffffff", diseño: "rayas" },
    { nombre: "Belgrano LP",             division: "Liga Profesional", sueldo: 4200,  fuerza: 7,  color1: "#6caffe", color2: "#ffffff", diseño: "liso" }
  ];
  
  
  /* ---------------------------------------------------------------
     PUESTOS
     --------------------------------------------------------------- */
  const PUESTOS = {
    Arquero: {
      nombre: "Arquero", icono: "🧤",
      descripcion: "Ataja penales y salva partidos",
      pesos: { defensa: 0.35, fisico: 0.25, velocidad: 0.15, pase: 0.15, tiro: 0.05, regate: 0.05 },
      golesPorPartido: 0
    },
    Defensor: {
      nombre: "Defensor", icono: "🛡️",
      descripcion: "Marca, roba y saca del fondo",
      pesos: { defensa: 0.35, fisico: 0.25, velocidad: 0.15, pase: 0.15, regate: 0.05, tiro: 0.05 },
      golesPorPartido: 0.1
    },
    Mediocampista: {
      nombre: "Mediocampista", icono: "⚙️",
      descripcion: "Maneja la pelota y arma juego",
      pesos: { pase: 0.3, regate: 0.2, fisico: 0.2, velocidad: 0.15, defensa: 0.1, tiro: 0.05 },
      golesPorPartido: 0.3
    },
    Delantero: {
      nombre: "Delantero", icono: "⚡",
      descripcion: "Hace los goles y define partidos",
      pesos: { tiro: 0.35, regate: 0.25, velocidad: 0.2, fisico: 0.1, pase: 0.05, defensa: 0.05 },
      golesPorPartido: 0.8
    }
  };
  
  
  /* ---------------------------------------------------------------
     STATS
     --------------------------------------------------------------- */
  const STATS_DEF = [
    { id: "velocidad", nombre: "Velocidad", descripcion: "Qué tan rápido corre" },
    { id: "tiro",      nombre: "Tiro",      descripcion: "Puntería y potencia" },
    { id: "pase",      nombre: "Pase",      descripcion: "Precisión para asistir" },
    { id: "regate",    nombre: "Regate",    descripcion: "Habilidad para gambetear" },
    { id: "defensa",   nombre: "Defensa",   descripcion: "Robo y quite" },
    { id: "fisico",    nombre: "Físico",    descripcion: "Resistencia y aguante" }
  ];
  
  const STATS_INICIALES = 30;
  const STATS_MAX       = 99;
  
  
  /* ---------------------------------------------------------------
     ENTRENAMIENTO
     --------------------------------------------------------------- */
  const ENTRENAMIENTO = {
    costoBase: 100,
    exponente: 2.2,
    statReferencia: 30,
    intensivoMultiplicador: 3,
    intensivoGanancia: 3,
    intensivoRiesgo: 0.15
  };
  
  function costoSubirStat(valorActual) {
    const factor = Math.pow(valorActual / ENTRENAMIENTO.statReferencia, ENTRENAMIENTO.exponente);
    return Math.round(ENTRENAMIENTO.costoBase * factor);
  }
  
  
  /* ---------------------------------------------------------------
     CONFIG GENERAL
     --------------------------------------------------------------- */
  const TORNEO = {
    puntosVictoria: 3, puntosEmpate: 1, idaYVuelta: true,
    premioBase: 3000, reputacionCampeon: 10,
    ascensosDirectos: 2, descensosDirectos: 2
  };
  
  const COPA = {
    cadaCuanto: 4, premioBase: 8000, reputacionGanar: 15,
    rondas: ["32avos", "16avos", "Octavos", "Cuartos", "Semifinal", "Final"]
  };
  
  const CARRERA = {
    edadInicial: 16, edadRetiro: 38,
    edadPicoInicio: 26, edadPicoFin: 30,
    edadDeclive: 31, decrecimientoPorAnio: 2
  };
  
  const EVENTOS = {
    chancePrensa: 0.35, chanceEscandalo: 0.04,
    chanceLesion: 0.06, duracionLesion: [1, 4]
  };
  
  const TIPOS_TROFEOS = {
    liga:      { icono: "🏆", nombre: "Campeón de Liga" },
    copa:      { icono: "🏆", nombre: "Copa Argentina" },
    goleador:  { icono: "👟", nombre: "Goleador del Torneo" },
    mvp:       { icono: "⭐", nombre: "Mejor Jugador (MVP)" },
    ascenso:   { icono: "⬆️", nombre: "Ascenso" },
    seleccion: { icono: "🇦🇷", nombre: "Convocado a la Selección" }
  };
  
  
  /* ---------------------------------------------------------------
     NOMBRES Y FRASES
     --------------------------------------------------------------- */
  const NOMBRES_JUGADORES = [
    "Martínez", "Rodríguez", "Gómez", "Fernández", "López", "Díaz", "Pérez", "García",
    "Sánchez", "Romero", "Sosa", "Torres", "Álvarez", "Ruiz", "Ramírez", "Flores",
    "Acosta", "Benítez", "Medina", "Herrera", "Aguirre", "Giménez", "Molina", "Silva",
    "Castro", "Rojas", "Ortiz", "Núñez", "Luna", "Juárez", "Cabrera", "Ríos",
    "Morales", "Godoy", "Moreno", "Ferreyra", "Domínguez", "Carrizo", "Vega", "Pereyra"
  ];
  const NOMBRES_PILA = [
    "Juan", "Lucas", "Mateo", "Santiago", "Tomás", "Franco", "Nicolás", "Joaquín",
    "Facundo", "Agustín", "Bruno", "Thiago", "Lautaro", "Valentín", "Bautista", "Ignacio",
    "Emiliano", "Ramiro", "Federico", "Gonzalo"
  ];
  
  const FRASES_GOL = [
    "¡GOOOL! La clavó de zurda al ángulo.",
    "¡GOLAZO! Se sacó dos tipos de encima y la puso al lado del palo.",
    "¡GOL! La empujó en la línea, pero vale igual.",
    "¡GOOOL! De tiro libre, una obra de arte.",
    "¡GOL! La picó por arriba del arquero. Un descaro.",
    "¡GOL! Cabezazo firme tras un córner perfecto.",
    "¡GOOOL! Se fue solo, enganchó y definió cruzado."
  ];
  const FRASES_GOL_COMPANERO = [
    "¡GOL DEL COMPAÑERO! El 9 la empujó en la línea.",
    "¡GOOOL! Centro perfecto y cabezazo del compañero.",
    "¡GOL! El enganche la puso al ángulo. ¡Qué golazo!",
    "¡GOOOL! Pase filtrado y definición del compañero.",
    "¡GOL! El lateral se sumó al ataque y la clavó.",
    "¡GOOOL! El volante la puso de tiro libre. Obra de arte.",
    "¡GOL! El compañero la peleó en el área y facturó."
  ];
  const FRASES_JUGADA = [
    "Metió un caño que hizo levantar a toda la cancha.",
    "Corrió 40 metros con la pelota pegada al pie.",
    "Se tiró un lujo que el técnico festejó desde el banco.",
    "Bajó la pelota con el pecho y la dejó muerta.",
    "Se comió una patada pero siguió jugando.",
    "Hizo una rabona que encendió a la hinchada."
  ];
  const FRASES_ERROR = [
    "Se apuró y la tiró a la tribuna.",
    "Quedó en offside por dormirse.",
    "Se la dio al rival en un pase fácil.",
    "Erró un mano a mano inolvidable.",
    "Resbaló justo cuando iba a rematar."
  ];
  const FRASES_ERROR_COMPANERO = [
    "El compañero se apuró y la tiró a la tribuna.",
    "Pase malo del compañero, casi la pierde el equipo.",
    "El 9 quedó en offside por dormirse.",
    "El enganche se la dio al rival en un pase fácil.",
    "El compañero erró un mano a mano inolvidable.",
    "Resbaló el compañero justo cuando iba a rematar."
  ];
  const FRASES_INICIO_PARTIDO = [
    "La cancha está que explota.",
    "Día de clásico. Se siente en el aire.",
    "El técnico te miró a los ojos antes de salir.",
    "La hinchada cantó desde el vestuario.",
    "Llueve y la cancha está pesada."
  ];
  const FRASES_PRENSA_BUENA = [
    "El pibe de barrio que la rompe y sueña en grande.",
    "Dicen que varios clubes grandes ya preguntaron por él.",
    "El técnico lo llenó de elogios en conferencia de prensa.",
    "La hinchada corea su nombre en cada partido."
  ];
  const FRASES_PRENSA_MALA = [
    "Algunos cuestionan su regularidad en la cancha.",
    "Dicen que se la cree y no rinde como antes.",
    "El técnico le habría llamado la atención en privado.",
    "Los hinchas piden a otro titular en su puesto."
  ];
  
  const FRASES_NOTA = {
    1:  ["Un desastre. El técnico te va a matar.", "Horrible. No te salió nada."],
    2:  ["Muy mal. Te comiste todas.", "Flojo partido. A trabajar."],
    3:  ["Mal. No te encontrabas en la cancha.", "Para el olvido."],
    4:  ["Regular. Cumpliste a medias.", "Ni fu ni fa."],
    5:  ["Aceptable. Ni brillaste ni la rompiste.", "Partido discreto."],
    6:  ["Bien. Aportaste lo tuyo.", "Correcto. Buen partido."],
    7:  ["Muy bien. Fuiste importante.", "Buena actuación."],
    8:  ["Excelente. De los mejores de la cancha.", "Gran partido. Figura del encuentro."],
    9:  ["¡Figura del partido! Te salió todo.", "Espectacular. Nivel altísimo."],
    10: ["¡PERFECTO! Partido de 10. Historia pura.", "¡INCREÍBLE! No se puede jugar mejor."]
  };
  
  function fraseNota(nota) {
    const n = Math.max(1, Math.min(10, Math.round(nota)));
    return azar(FRASES_NOTA[n] || FRASES_NOTA[5]);
  }
  
  
  /* ---------------------------------------------------------------
     ESTADO GLOBAL
     --------------------------------------------------------------- */
  let estado = {};
  let partidoEnCurso = false;
  let intervaloPartidoActual = null;
  let puestoElegido = null;
  
  
  /* ---------------------------------------------------------------
     ESTADO INICIAL
     --------------------------------------------------------------- */
  function crearStatsIniciales() {
    const stats = {};
    STATS_DEF.forEach(s => { stats[s.id] = STATS_INICIALES; });
    return stats;
  }
  
  function estadoInicial(nombre, apodo, puesto) {
    // Club inicial aleatorio del Federal A
    const clubesFederalA = CLUBES.filter(c => c.division === "Federal A");
    const clubInicial = azar(clubesFederalA);
  
    return {
      nombre, apodo, puesto,
      edad: CARRERA.edadInicial,
      retirado: false,
      clubActual: clubInicial,
      division: DIVISIONES[0],
      plata: 0,
      reputacion: 0,
      partidosJugados: 0,
      partidosGanados: 0,
      partidosEmpatados: 0,
      partidosPerdidos: 0,
      goles: 0,
      notasPartidos: [],
      sumaNotas: 0,
      notaPromedio: 0,
      mejorNota: 0,
      notasHistoricas: [],
      temporada: 1,
      temporadaTerminada: false,
      historialTemporadas: [],
      stats: crearStatsIniciales(),
      torneo: null,
      copa: null,
      jugadoresDivision: [],
      trofeos: [],
      distinciones: [],
      noticias: [],
      ofertas: [],
      mercadoAbierto: false,
      lesionado: 0,
      terminado: false
    };
  }
  
  
  /* ---------------------------------------------------------------
     UTILIDADES
     --------------------------------------------------------------- */
  function azar(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  function numeroAzar(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function formatearPlata(n) {
    return "$" + Math.round(n).toLocaleString("es-AR");
  }
  
  /* ---------------------------------------------------------------
     ESCUDOS SVG
     --------------------------------------------------------------- */
  function obtenerInicialesClub(nombre) {
    if (!nombre) return "?";
    const ignorar = ["club", "atletico", "atl", "deportivo", "dep", "de", "la", "el", "los", "las"];
    const palabras = nombre.split(/\s+/).filter(p => {
      const l = p.toLowerCase().replace(/[.,()]/g, "");
      return !ignorar.includes(l) && l.length > 0;
    });
    if (palabras.length === 0) return nombre.slice(0, 3).toUpperCase();
    if (palabras.length === 1) return palabras[0].slice(0, 3).toUpperCase();
    return (palabras[0][0] + palabras[1][0]).toUpperCase();
  }
  
  function generarEscudoSVG(nombreClub, tamaño = 28) {
    const club = CLUBES.find(c => c.nombre === nombreClub);
    const altura = Math.round(tamaño * 1.15);
  
    if (!club) {
      return `<svg viewBox="0 0 40 46" width="${tamaño}" height="${altura}" class="escudo-svg" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2 L38 8 L38 30 Q38 43 20 45 Q2 43 2 30 L2 8 Z" fill="#444" stroke="#000" stroke-width="2"/>
        <text x="20" y="28" text-anchor="middle" font-size="12" font-family="'Pixelify Sans', sans-serif" fill="#fff" font-weight="bold">?</text>
      </svg>`;
    }
  
    const c1 = club.color1 || "#333";
    const c2 = club.color2 || "#fff";
    const diseño = club.diseño || "liso";
    const iniciales = obtenerInicialesClub(nombreClub);
    const forma = "M20 2 L38 8 L38 30 Q38 43 20 45 Q2 43 2 30 L2 8 Z";
    const idClip = "clip-" + nombreClub.replace(/[^a-zA-Z0-9]/g, "").slice(0, 12) + "-" + tamaño;
  
    let fondo = "";
  
    if (diseño === "liso") {
      fondo = `<path d="${forma}" fill="${c1}" stroke="#000" stroke-width="2"/>`;
    } else if (diseño === "rayas") {
      fondo = `
        <defs><clipPath id="${idClip}"><path d="${forma}"/></clipPath></defs>
        <g clip-path="url(#${idClip})">
          <rect x="0" y="0" width="40" height="46" fill="${c1}"/>
          <rect x="5"  y="0" width="5" height="46" fill="${c2}"/>
          <rect x="15" y="0" width="5" height="46" fill="${c2}"/>
          <rect x="25" y="0" width="5" height="46" fill="${c2}"/>
          <rect x="35" y="0" width="5" height="46" fill="${c2}"/>
        </g>
        <path d="${forma}" fill="none" stroke="#000" stroke-width="2"/>
      `;
    } else if (diseño === "banda") {
      fondo = `
        <defs><clipPath id="${idClip}"><path d="${forma}"/></clipPath></defs>
        <g clip-path="url(#${idClip})">
          <rect x="0" y="0" width="40" height="46" fill="${c1}"/>
          <rect x="0" y="18" width="40" height="10" fill="${c2}"/>
        </g>
        <path d="${forma}" fill="none" stroke="#000" stroke-width="2"/>
      `;
    } else if (diseño === "banda-diagonal") {
      fondo = `
        <defs><clipPath id="${idClip}"><path d="${forma}"/></clipPath></defs>
        <g clip-path="url(#${idClip})">
          <rect x="0" y="0" width="40" height="46" fill="${c1}"/>
          <polygon points="0,0 40,46 40,34 10,0" fill="${c2}"/>
        </g>
        <path d="${forma}" fill="none" stroke="#000" stroke-width="2"/>
      `;
    }
  
    return `<svg viewBox="0 0 40 46" width="${tamaño}" height="${altura}" class="escudo-svg" xmlns="http://www.w3.org/2000/svg">
      ${fondo}
      <text x="20" y="29" text-anchor="middle" font-size="11" font-family="'Pixelify Sans', sans-serif"
            fill="#ffffff" font-weight="bold" stroke="#000000" stroke-width="2.5" paint-order="stroke">${iniciales}</text>
    </svg>`;
  }
  
  function fraseSegura(arr, fallback) {
    if (Array.isArray(arr) && arr.length > 0) return azar(arr);
    if (Array.isArray(fallback) && fallback.length > 0) return azar(fallback);
    return "...";
  }
  
  function promedioPonderado() {
    if (!estado.puesto || !PUESTOS[estado.puesto]) {
      const valores = Object.values(estado.stats);
      return valores.reduce((a, b) => a + b, 0) / valores.length;
    }
    const pesos = PUESTOS[estado.puesto].pesos;
    let total = 0;
    for (const id in pesos) total += (estado.stats[id] || 0) * pesos[id];
    return total;
  }
  
  function fuerzaDeClub(nombreClub) {
    const club = CLUBES.find(c => c.nombre === nombreClub);
    return club ? (club.fuerza || 5) : 5;
  }
  
  function crearNombreJugador() {
    return azar(NOMBRES_PILA) + " " + azar(NOMBRES_JUGADORES);
  }
  
  
  /* ---------------------------------------------------------------
     NOTICIAS
     --------------------------------------------------------------- */
  function agregarNoticia(tipo, titulo, cuerpo) {
    if (!estado.noticias) estado.noticias = [];
    estado.noticias.unshift({ tipo, titulo, cuerpo, fecha: `T${estado.temporada}` });
    if (estado.noticias.length > 60) estado.noticias.pop();
  }
  
  
  /* ---------------------------------------------------------------
     TORNEO
     --------------------------------------------------------------- */
  function crearTorneo(nombreDivision, clubJugador) {
    let equipos = CLUBES.filter(c => c.division === nombreDivision).map(c => c.nombre);
    if (!equipos.includes(clubJugador.nombre)) equipos.push(clubJugador.nombre);
    if (equipos.length % 2 !== 0) {
      const extras = CLUBES.filter(c => c.division !== nombreDivision);
      if (extras.length > 0) equipos.push(extras[0].nombre);
    }
  
    const tabla = {};
    equipos.forEach(nombre => {
      tabla[nombre] = { nombre, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, pts: 0 };
    });
  
    const fixture = generarFixture(equipos, TORNEO.idaYVuelta);
  
    return {
      division: nombreDivision, equipos, tabla, fixture,
      fechaActual: 0, terminado: false, campeon: null
    };
  }
  
  function generarFixture(equipos, idaYVuelta) {
    const lista = [...equipos];
    if (lista.length % 2 !== 0) lista.push(null);
    const n = lista.length;
    const rondas = [];
  
    for (let r = 0; r < n - 1; r++) {
      const ronda = [];
      for (let i = 0; i < n / 2; i++) {
        const local = lista[i];
        const visita = lista[n - 1 - i];
        if (local && visita) {
          if (r % 2 === 0) ronda.push({ local, visita });
          else             ronda.push({ local: visita, visita: local });
        }
      }
      rondas.push(ronda);
      lista.splice(1, 0, lista.pop());
    }
  
    if (idaYVuelta) {
      const vuelta = rondas.map(r => r.map(p => ({ local: p.visita, visita: p.local })));
      return [...rondas, ...vuelta];
    }
    return rondas;
  }
  
  function partidosDeLaFecha() {
    if (!estado.torneo) return [];
    return estado.torneo.fixture[estado.torneo.fechaActual] || [];
  }
  
  function proximoPartidoDelJugador() {
    if (!estado.torneo || estado.torneo.terminado) return null;
    const fecha = partidosDeLaFecha();
    return fecha.find(p => p.local === estado.clubActual.nombre
                        || p.visita === estado.clubActual.nombre);
  }
  
  function registrarResultado(nombreLocal, nombreVisita, gfLocal, gfVisita) {
    if (!estado.torneo) return;
    const t = estado.torneo.tabla;
  
    if (t[nombreLocal]) {
      t[nombreLocal].pj++;
      t[nombreLocal].gf += gfLocal;
      t[nombreLocal].gc += gfVisita;
      if (gfLocal > gfVisita)      { t[nombreLocal].g++; t[nombreLocal].pts += 3; }
      else if (gfLocal < gfVisita) { t[nombreLocal].p++; }
      else                         { t[nombreLocal].e++; t[nombreLocal].pts += 1; }
    }
    if (t[nombreVisita]) {
      t[nombreVisita].pj++;
      t[nombreVisita].gf += gfVisita;
      t[nombreVisita].gc += gfLocal;
      if (gfVisita > gfLocal)      { t[nombreVisita].g++; t[nombreVisita].pts += 3; }
      else if (gfVisita < gfLocal) { t[nombreVisita].p++; }
      else                         { t[nombreVisita].e++; t[nombreVisita].pts += 1; }
    }
  }
  
  function simularPartidoRapido(local, visita) {
    const fLocal  = fuerzaDeClub(local);
    const fVisita = fuerzaDeClub(visita);
    const maxLocal  = Math.max(1, Math.round((fLocal * 1.15) / 2) + 1);
    const maxVisita = Math.max(1, Math.round(fVisita / 2) + 1);
    return { gf: numeroAzar(0, maxLocal), gc: numeroAzar(0, maxVisita) };
  }
  
  function simularOtrosPartidosDeLaFecha() {
    if (!estado.torneo) return;
    const fecha = partidosDeLaFecha();
    fecha.forEach(p => {
      if (p.local === estado.clubActual.nombre || p.visita === estado.clubActual.nombre) return;
      const r = simularPartidoRapido(p.local, p.visita);
      registrarResultado(p.local, p.visita, r.gf, r.gc);
      for (let i = 0; i < r.gf; i++) asignarGolRival(p.local);
      for (let i = 0; i < r.gc; i++) asignarGolRival(p.visita);
    });
  }
  
  function asignarGolRival(nombreClub) {
    if (!estado.jugadoresDivision) return;
    const jugadores = estado.jugadoresDivision.filter(j => j.club === nombreClub);
    if (jugadores.length === 0) return;
    const j = azar(jugadores);
    if (j) j.goles++;
  }
  
  function avanzarFecha() {
    if (!estado.torneo) return;
    estado.torneo.fechaActual++;
    if (estado.torneo.fechaActual >= estado.torneo.fixture.length) {
      cerrarTorneo();
    }
  }
  
  function tablaOrdenada() {
    if (!estado.torneo) return [];
    return Object.values(estado.torneo.tabla).sort((a, b) => {
      if (b.pts !== a.pts) return b.pts - a.pts;
      const difA = a.gf - a.gc;
      const difB = b.gf - b.gc;
      if (difB !== difA) return difB - difA;
      return b.gf - a.gf;
    });
  }
  
  
  /* ---------------------------------------------------------------
     JUGADORES DE LA DIVISIÓN
     --------------------------------------------------------------- */
  function crearJugadoresDeDivision(nombreDivision) {
    const clubes = CLUBES.filter(c => c.division === nombreDivision);
    const jugadores = [];
    clubes.forEach(club => {
      for (let i = 0; i < 18; i++) {
        jugadores.push({ nombre: crearNombreJugador(), club: club.nombre, goles: 0 });
      }
    });
    return jugadores;
  }
  
  
  /* ---------------------------------------------------------------
     COPA
     --------------------------------------------------------------- */
  function crearCopa(nombreDivision) {
    const deMiDivision = CLUBES.filter(c => c.division === nombreDivision).map(c => c.nombre);
    const otros = CLUBES.filter(c => c.division !== nombreDivision).map(c => c.nombre);
  
    const invitados = [];
    const pool = [...otros];
    while (invitados.length < 12 && pool.length > 0) {
      const idx = Math.floor(Math.random() * pool.length);
      invitados.push(pool.splice(idx, 1)[0]);
    }
  
    const participantes = [...deMiDivision, ...invitados];
    const mezclados = [...participantes].sort(() => Math.random() - 0.5);
  
    const cruces = [];
    for (let i = 0; i < mezclados.length; i += 2) {
      if (mezclados[i + 1]) cruces.push({ local: mezclados[i], visita: mezclados[i + 1] });
    }
  
    return {
      ronda: COPA.rondas[0], rondaIndex: 0, cruces, historial: [],
      eliminado: false, campeon: null,
      bracket: { "32avos": cruces, "16avos": [], "Octavos": [], "Cuartos": [], "Semifinal": [], "Final": [] }
    };
  }
  
  
  /* ---------------------------------------------------------------
     PROGRESIÓN Y EVENTOS
     --------------------------------------------------------------- */
  function progresarPorEdad() {
    const edad = estado.edad;
    if (edad < 25) {
      STATS_DEF.forEach(def => {
        const subida = numeroAzar(1, 2);
        estado.stats[def.id] = Math.min(STATS_MAX, estado.stats[def.id] + subida);
      });
    } else if (edad >= CARRERA.edadPicoInicio && edad <= CARRERA.edadPicoFin) {
      STATS_DEF.forEach(def => {
        if (Math.random() < 0.5) estado.stats[def.id] = Math.min(STATS_MAX, estado.stats[def.id] + 1);
      });
    } else if (edad >= CARRERA.edadDeclive) {
      STATS_DEF.forEach(def => {
        const bajada = numeroAzar(1, CARRERA.decrecimientoPorAnio);
        estado.stats[def.id] = Math.max(1, estado.stats[def.id] - bajada);
      });
    }
  }
  
  function chequearLesion() {
    if (estado.lesionado > 0) return;
    if (Math.random() < EVENTOS.chanceLesion) {
      const fechas = numeroAzar(EVENTOS.duracionLesion[0], EVENTOS.duracionLesion[1]);
      estado.lesionado = fechas;
      agregarNoticia("derrota", "Lesión", `Vas a estar ${fechas} fecha(s) afuera.`);
    }
  }
  
  function reducirLesion() {
    if (estado.lesionado > 0) {
      estado.lesionado--;
      if (estado.lesionado === 0) agregarNoticia("dorado", "Recuperado", "Volviste a las canchas.");
    }
  }
  
  function tirarEventos() {
    if (Math.random() < EVENTOS.chancePrensa) {
      const esBuena = estado.reputacion > 20 || Math.random() < 0.6;
      if (esBuena) {
        agregarNoticia("prensa", "Prensa", azar(FRASES_PRENSA_BUENA));
        estado.reputacion += 1;
      } else {
        agregarNoticia("prensa", "Prensa", azar(FRASES_PRENSA_MALA));
        estado.reputacion = Math.max(0, estado.reputacion - 1);
      }
    }
    if (Math.random() < EVENTOS.chanceEscandalo) {
      agregarNoticia("derrota", "Escándalo",
        "Te agarraron de joda antes de un partido. La dirigencia está que arde.");
      estado.reputacion = Math.max(0, estado.reputacion - 3);
      estado.plata = Math.max(0, estado.plata - 500);
    }
  }
  
/* ---------------------------------------------------------------
   GENERAR JUGADAS
   --------------------------------------------------------------- */
function generarJugadas(factor) {
    const jugadas = [];
    const cantidad = 10;
    const minutos = [5, 12, 20, 27, 35, 42, 50, 58, 65, 72, 78, 85];
  
    const puestoInfo = PUESTOS[estado.puesto];
    const probGolPorExito = puestoInfo ? puestoInfo.golesPorPartido / 5 : 0.2;
  
    let reduccionRival = 0;
    const defensaStat = estado.stats.defensa || 0;
    const fisicoStat  = estado.stats.fisico  || 0;
  
    if (estado.puesto === "Arquero") {
      reduccionRival = (defensaStat + fisicoStat) / 250;
    } else if (estado.puesto === "Defensor") {
      reduccionRival = defensaStat / 300 + fisicoStat / 600;
    } else if (estado.puesto === "Mediocampista") {
      reduccionRival = defensaStat / 500;
    } else {
      reduccionRival = defensaStat / 800;
    }
  
    let bonusGolPropio = 0;
    if (estado.puesto === "Defensor")           bonusGolPropio = 0.05;
    else if (estado.puesto === "Mediocampista") bonusGolPropio = 0.08;
    else if (estado.puesto === "Delantero")     bonusGolPropio = 0.15;
  
    const fuerzaMiClub = fuerzaDeClub(estado.clubActual.nombre);
    const probGolCompaniero = Math.min(0.35, 0.05 + (fuerzaMiClub / 10) * 0.25);
  
    for (let k = 0; k < cantidad; k++) {
      const minuto = minutos[k % minutos.length];
      const exito = Math.random() < factor;
  
      if (exito) {
        if (Math.random() < probGolCompaniero * 0.5) {
          jugadas.push({ tipo: "golCompaniero", minuto });
          continue;
        }
        if (Math.random() < probGolPorExito + bonusGolPropio) {
          jugadas.push({ tipo: "gol", deQuien: "jugador", minuto });
        } else {
          jugadas.push({ tipo: "jugada", minuto });
        }
      } else {
        const esErrorTuyo = Math.random() < 0.6;
        if (esErrorTuyo) {
          const probGolRival = Math.max(0.05, 0.30 - reduccionRival);
          if (Math.random() < probGolRival) {
            jugadas.push({ tipo: "gol", deQuien: "rival", minuto });
          } else {
            jugadas.push({ tipo: "error", minuto });
          }
        } else {
          const probGolRival = Math.max(0.05, 0.25 - reduccionRival * 0.5);
          if (Math.random() < probGolRival) {
            jugadas.push({ tipo: "gol", deQuien: "rival", minuto });
          } else {
            jugadas.push({ tipo: "errorCompaniero", minuto });
          }
        }
      }
    }
    return jugadas;
  }
  
  function procesarJugada(jugada, goles) {
    if (jugada.tipo === "gol") {
      if (jugada.deQuien === "jugador") {
        goles.propios++;
        narrar(`Minuto ${jugada.minuto}': ${fraseSegura(FRASES_GOL)}`, "gol");
        mostrarEfectoGol(false); // 🆕 efecto verde GOL
      } else {
        goles.rival++;
        narrar(`Minuto ${jugada.minuto}': Gol del rival. La defensa dormida.`, "derrota");
        mostrarEfectoGol(true); // 🆕 efecto rojo GOL RIVAL
      }
    } else if (jugada.tipo === "golCompaniero") {
      goles.propios++;
      narrar(`Minuto ${jugada.minuto}': ${fraseSegura(FRASES_GOL_COMPANERO, FRASES_GOL)}`, "gol");
      mostrarEfectoGol(false); // 🆕 efecto verde GOL (de compañero)
    } else if (jugada.tipo === "jugada") {
      narrar(`Minuto ${jugada.minuto}': ${fraseSegura(FRASES_JUGADA)}`, "dato");
    } else if (jugada.tipo === "errorCompaniero") {
      narrar(`Minuto ${jugada.minuto}': ${fraseSegura(FRASES_ERROR_COMPANERO, FRASES_ERROR)}`, "dato");
    } else {
      narrar(`Minuto ${jugada.minuto}': ${fraseSegura(FRASES_ERROR)}`);
    }
  }
  
  
  /* ---------------------------------------------------------------
     CALIFICACIÓN DEL PARTIDO
     --------------------------------------------------------------- */
  function calcularNotaPartido(golesPropios, golesRival, gano, empato) {
    let nota = 5.0;
    nota += golesPropios * 1.5;
    if (gano) nota += 1.0;
    else if (empato) nota += 0.3;
    else nota -= 1.0;
  
    const esDefensivo = estado.puesto === "Arquero" || estado.puesto === "Defensor";
    if (esDefensivo && golesRival === 0) nota += 1.5;
    if (esDefensivo) nota -= golesRival * 0.3;
  
    const rendimiento = promedioPonderado();
    if (rendimiento > 70)      nota += 0.5;
    else if (rendimiento > 50) nota += 0.2;
  
    nota = Math.max(1, Math.min(10, nota));
    return Math.round(nota * 10) / 10;
  }
  
  
  /* ---------------------------------------------------------------
     CERRAR TORNEO
     --------------------------------------------------------------- */
  function cerrarTorneo() {
    if (!estado.torneo || estado.torneo.terminado) return;
    estado.torneo.terminado = true;
    estado.temporadaTerminada = true;
  
    const ordenada = tablaOrdenada();
    const campeon = ordenada[0];
    estado.torneo.campeon = campeon.nombre;
    const miPosicion = ordenada.findIndex(eq => eq.nombre === estado.clubActual.nombre) + 1;
  
    const jugadores = [...estado.jugadoresDivision];
    jugadores.sort((a, b) => b.goles - a.goles);
    const goleadorLiga = jugadores[0] || { nombre: "—", goles: 0 };
  
    if (estado.goles >= goleadorLiga.goles && estado.goles > 5) {
      estado.distinciones.push({
        titulo: `Goleador ${estado.torneo.division} T${estado.temporada}`,
        descripcion: `Con ${estado.goles} goles.`,
        temporada: estado.temporada
      });
      estado.trofeos.push({
        tipo: "goleador",
        nombre: `Goleador ${estado.torneo.division} T${estado.temporada}`,
        temporada: estado.temporada
      });
    }
  
    if (campeon.nombre === estado.clubActual.nombre
        && (estado.notaPromedio >= 6.8 || estado.goles > 15)) {
      estado.distinciones.push({
        titulo: `MVP ${estado.torneo.division} T${estado.temporada}`,
        descripcion: `Promedio ${estado.notaPromedio.toFixed(1)} en la temporada.`,
        temporada: estado.temporada
      });
      estado.trofeos.push({
        tipo: "mvp",
        nombre: `MVP ${estado.torneo.division} T${estado.temporada}`,
        temporada: estado.temporada
      });
    }
  
    estado.historialTemporadas.push({
      temporada: estado.temporada,
      division: estado.torneo.division,
      club: estado.clubActual.nombre,
      posicion: miPosicion,
      puntos: estado.torneo.tabla[estado.clubActual.nombre].pts,
      campeon: campeon.nombre
    });
  
    agregarNoticia("dorado", `Fin temporada ${estado.temporada}`,
      `Campeón: ${campeon.nombre}. Tu posición: ${miPosicion}°.`);
  
    if (campeon.nombre === estado.clubActual.nombre) {
      const premio = TORNEO.premioBase * estado.division.nivel;
      estado.plata += premio;
      estado.reputacion += TORNEO.reputacionCampeon;
      estado.trofeos.push({
        tipo: "liga",
        nombre: `Campeón ${estado.torneo.division} T${estado.temporada}`,
        temporada: estado.temporada
      });
      agregarNoticia("dorado", "¡CAMPEONES!",
        `Ganaste la ${estado.torneo.division}. Premio: ${formatearPlata(premio)}.`);
    }
  
    if (estado.notasPartidos.length > 0) {
      agregarNoticia("dato", `Temporada ${estado.temporada} cerrada`,
        `Tu promedio fue de ${estado.notaPromedio.toFixed(1)}. Mejor nota: ${estado.mejorNota.toFixed(1)}.`);
    }
  
    // Reset de notas para la próxima temporada
    estado.notasPartidos = [];
    estado.sumaNotas = 0;
    estado.notaPromedio = 0;
  
    aplicarAscensosYDescensos(miPosicion, ordenada.length);
    progresarPorEdad();
    estado.edad++;
  
    if (estado.edad >= CARRERA.edadRetiro) estado.retirado = true;
  
    abrirMercadoDePases();
  }
  
  function aplicarAscensosYDescensos(miPosicion, totalEquipos) {
    const miDivision = estado.division;
    const divisionSuperior = DIVISIONES.find(d => d.nivel === miDivision.nivel + 1);
    const divisionInferior = DIVISIONES.find(d => d.nivel === miDivision.nivel - 1);
  
    if (miPosicion <= TORNEO.ascensosDirectos && divisionSuperior) {
      const nuevo = elegirClubDeDivision(divisionSuperior.nombre);
      if (nuevo) {
        estado.clubActual = nuevo;
        estado.division = divisionSuperior;
        estado.reputacion += 5;
        estado.trofeos.push({
          tipo: "ascenso",
          nombre: `Ascenso a ${divisionSuperior.nombre} (T${estado.temporada})`,
          temporada: estado.temporada
        });
        agregarNoticia("dorado", "¡ASCENSO!",
          `Pasás a ${divisionSuperior.nombre} con ${nuevo.nombre}.`);
      }
    }
  
    if (miPosicion >= totalEquipos - (TORNEO.descensosDirectos - 1) && divisionInferior) {
      const nuevo = elegirClubDeDivision(divisionInferior.nombre);
      if (nuevo) {
        estado.clubActual = nuevo;
        estado.division = divisionInferior;
        estado.reputacion = Math.max(0, estado.reputacion - 3);
        agregarNoticia("derrota", "Descenso",
          `Bajás a ${divisionInferior.nombre} con ${nuevo.nombre}.`);
      }
    }
  
    if (miDivision.nombre === "Federal A"
        && miPosicion >= totalEquipos - (TORNEO.descensosDirectos - 1)) {
      agregarNoticia("dato", "Federal A es el piso",
        "Salvaste la ropa. No hay categoría inferior.");
    }
  }
  
  function elegirClubDeDivision(nombreDivision) {
    const candidatos = CLUBES.filter(c => c.division === nombreDivision);
    if (candidatos.length === 0) return null;
    const filtrados = candidatos.filter(c => c.nombre !== estado.clubActual.nombre);
    return filtrados.length > 0 ? azar(filtrados) : candidatos[0];
  }
  
  
  /* ---------------------------------------------------------------
     MERCADO DE PASES
     --------------------------------------------------------------- */
  function abrirMercadoDePases() {
    estado.mercadoAbierto = true;
    estado.ofertas = [];
  
    const candidatos = CLUBES.filter(c => {
      const divClub = DIVISIONES.find(d => d.nombre === c.division);
      return divClub && divClub.nivel > estado.division.nivel;
    });
  
    const cantOfertas = Math.min(3, Math.floor(estado.reputacion / 15) + 1);
    for (let i = 0; i < cantOfertas; i++) {
      if (Math.random() > 0.6 + estado.reputacion / 200) continue;
      if (candidatos.length === 0) break;
      const club = azar(candidatos);
      if (!club) break;
      const division = DIVISIONES.find(d => d.nombre === club.division);
      if (estado.ofertas.some(o => o.club.nombre === club.nombre)) continue;
      estado.ofertas.push({
        club, division,
        sueldo: club.sueldo,
        firma: 500 * division.nivel,
        duracion: numeroAzar(2, 4)
      });
    }
  
    if (estado.ofertas.length > 0) {
      agregarNoticia("dato", "Mercado de pases",
        `Te llegaron ${estado.ofertas.length} oferta(s). Mirá la sección Mercado.`);
    }
  }
  
  function aceptarOferta(i) {
    const o = estado.ofertas[i];
    if (!o) return;
    estado.clubActual = o.club;
    estado.division = o.division;
    estado.plata += o.firma;
    estado.ofertas = [];
    estado.mercadoAbierto = false;
    agregarNoticia("dorado", "Nuevo club",
      `Firmaste con ${o.club.nombre} por ${o.duracion} temporada(s).`);
    mostrarPantalla("hub");
  }
  
/* =================================================================
   RENDERIZADO
   ================================================================= */

const pantallas = {
    inicio:        document.getElementById("pantalla-inicio"),
    hub:           document.getElementById("pantalla-hub"),
    partido:       document.getElementById("pantalla-partido"),
    torneo:        document.getElementById("pantalla-torneo"),
    copa:          document.getElementById("pantalla-copa"),
    entrenamiento: document.getElementById("pantalla-entrenamiento"),
    perfil:        document.getElementById("pantalla-perfil"),
    trofeos:       document.getElementById("pantalla-trofeos"),
    mercado:       document.getElementById("pantalla-mercado"),
    noticias:      document.getElementById("pantalla-noticias"),
    goleadores:    document.getElementById("pantalla-goleadores"),
    final:         document.getElementById("pantalla-final")
  };
  
  function mostrarPantalla(nombre) {
    if (nombre !== "partido") {
      if (intervaloPartidoActual) { clearInterval(intervaloPartidoActual); intervaloPartidoActual = null; }
      partidoEnCurso = false;
    }
  
    Object.values(pantallas).forEach(p => { if (p) p.classList.remove("activa"); });
    if (pantallas[nombre]) pantallas[nombre].classList.add("activa");
  
    // 🆕 Si entramos a la pantalla de partido, generamos el estadio
    if (nombre === "partido") {
      iniciarEstadio();
    } else {
      quitarEstadio();
    }
  
    if (nombre === "hub")           renderizarHub();
    if (nombre === "torneo")        renderizarTorneo();
    if (nombre === "copa")          renderizarCopa();
    if (nombre === "entrenamiento") renderizarEntrenamientoPantalla();
    if (nombre === "perfil")        renderizarPerfil();
    if (nombre === "trofeos")       renderizarTrofeos();
    if (nombre === "mercado")       renderizarMercado();
    if (nombre === "noticias")      renderizarNoticias();
    if (nombre === "goleadores")    renderizarGoleadores();
    if (nombre === "final")         renderizarPantallaFinal();
  }
  /* ---------------------------------------------------------------
   ESTADIO — césped, tribuna, cielo y momento del día
   --------------------------------------------------------------- */
function iniciarEstadio() {
  const pantalla = pantallas.partido;
  if (!pantalla) return;

  // Sacamos cualquier fondo anterior
  quitarEstadio();

  // Elegimos momento del día al azar
  const momentos = ["dia", "atardecer", "noche"];
  const momento = azar(momentos);

  // Creamos el fondo del estadio
  const fondo = document.createElement("div");
  fondo.className = "estadio-fondo";
  fondo.dataset.momento = momento;
  fondo.innerHTML = `
    <div class="estadio-cielo"></div>
    <div class="estadio-sol"></div>
    <div class="estadio-estrella"></div>
    <div class="estadio-reflector estadio-reflector-1"></div>
    <div class="estadio-reflector estadio-reflector-2"></div>
    <div class="estadio-tribuna"></div>
    <div class="estadio-cesped">
      <div class="estadio-lineas"></div>
    </div>
  `;

  // Lo insertamos como primer hijo de la pantalla
  pantalla.insertBefore(fondo, pantalla.firstChild);
}

function quitarEstadio() {
  const pantalla = pantallas.partido;
  if (!pantalla) return;
  const viejo = pantalla.querySelector(".estadio-fondo");
  if (viejo) viejo.remove();
}

/* ---------------------------------------------------------------
   EFECTO DE GOL
   --------------------------------------------------------------- */
function mostrarEfectoGol(esDelRival) {
  // Si ya hay un efecto en pantalla, lo sacamos
  const anterior = document.querySelector(".gol-overlay");
  if (anterior) anterior.remove();

  const overlay = document.createElement("div");
  overlay.className = "gol-overlay" + (esDelRival ? " rival" : "");

  const texto = esDelRival ? "GOL RIVAL" : "¡GOOOL!";
  const sub   = esDelRival ? "" : "¡GRITALO PIBE!";

  overlay.innerHTML = `
    <div class="gol-texto">${texto}</div>
    ${sub ? `<div class="gol-sub">${sub}</div>` : ""}
  `;

  document.body.appendChild(overlay);

  // Lo sacamos después de la animación (2.2 segundos)
  setTimeout(() => {
    if (overlay.parentNode) overlay.remove();
  }, 2200);
}
  function actualizarHUD() {
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set("hud-nombre",     `${estado.nombre} "${estado.apodo}"`);
    set("hud-puesto",     estado.puesto || "—");
    set("hud-edad",       estado.edad);
    set("hud-club",       estado.clubActual.nombre);
    set("hud-division",   estado.division.nombre);
    set("hud-temporada",  estado.temporada);
    set("hud-plata",      formatearPlata(estado.plata));
    set("hud-reputacion", estado.reputacion);
  
    const promEl = document.getElementById("hud-promedio");
    if (promEl) {
      promEl.textContent = estado.notasPartidos && estado.notasPartidos.length > 0
        ? estado.notaPromedio.toFixed(1)
        : "—";
      promEl.style.color = estado.notaPromedio >= 7 ? "var(--verde-claro)"
                         : estado.notaPromedio >= 5 ? "var(--dorado)"
                         : estado.notaPromedio > 0 ? "var(--rojo)"
                         : "var(--dorado)";
    }
  }
  
  /* HUB */
  function renderizarHub() {
    actualizarHUD();
  
    const cont = document.getElementById("hub-proximo-info");
    const btn = document.getElementById("hub-btn-jugar");
    if (!cont || !btn) return;
  
    if (estado.temporadaTerminada) {
      cont.innerHTML = `
        <div class="prox-vs-card">
          <div class="prox-equipo mio">
            <span class="prox-escudo-svg">${generarEscudoSVG(estado.clubActual.nombre, 26)}</span>
            <span>🏁 Fin de temporada ${estado.temporada}</span>
          </div>
          <div class="prox-equipo rival">
            <span>Esperando nueva temporada...</span>
          </div>
        </div>
      `;
      btn.textContent = "▶ ARRANCAR NUEVA TEMPORADA";
      return;
    }
  
    if (!estado.torneo) {
      estado.torneo = crearTorneo(estado.division.nombre, estado.clubActual);
      estado.jugadoresDivision = crearJugadoresDeDivision(estado.division.nombre);
      estado.copa = crearCopa(estado.division.nombre);
    }
  
    const partido = proximoPartidoDelJugador();
  
    if (!partido) {
      cont.innerHTML = `
        <div class="prox-vs-card">
          <div class="prox-equipo mio">
            <span class="prox-escudo-svg">${generarEscudoSVG(estado.clubActual.nombre, 26)}</span>
            <span>Fecha libre</span>
          </div>
        </div>
        <div class="prox-meta"><span>Apretá el botón para avanzar</span></div>
      `;
      btn.textContent = "▶ AVANZAR FECHA";
      return;
    }
  
    const soyLocal = partido.local === estado.clubActual.nombre;
    const rival = soyLocal ? partido.visita : partido.local;
  
    let infoExtra = estado.lesionado > 0
      ? `🤕 Lesionado (${estado.lesionado} fecha/s)`
      : `Fecha ${estado.torneo.fechaActual + 1} de ${estado.torneo.fixture.length}`;
  
    let copaInfo = "";
    if (estado.copa && !estado.copa.eliminado && !estado.copa.campeon) copaInfo = `🏆 Copa: ${estado.copa.ronda}`;
    else if (estado.copa && estado.copa.campeon === estado.clubActual.nombre) copaInfo = `🏆 Campeón de Copa`;
    else if (estado.copa && estado.copa.eliminado) copaInfo = `🏆 Copa: eliminado`;
  
    cont.innerHTML = `
      <div class="prox-vs-card">
        <div class="prox-equipo mio">
          <span class="prox-escudo-svg">${generarEscudoSVG(estado.clubActual.nombre, 28)}</span>
          <span>${estado.clubActual.nombre}</span>
        </div>
        <div class="prox-equipo rival">
          <span class="prox-escudo-svg">${generarEscudoSVG(rival, 28)}</span>
          <span>${rival}</span>
        </div>
      </div>
      <div class="prox-meta">
        <span>${soyLocal ? "🏠 LOCAL" : "✈️ VISITANTE"}</span>
        <span class="destaque">${infoExtra}</span>
      </div>
      ${copaInfo ? `<div class="prox-meta"><span>${copaInfo}</span></div>` : ""}
    `;
    btn.textContent = "▶ JUGAR PARTIDO";
  }
  
  /* PARTIDO */
  function configurarPantallaPartido(local, visita, tipo, fecha) {
    const t = document.getElementById("partido-titulo");
    if (t) t.textContent = tipo;
  
    const ft = document.getElementById("partido-tipo");
    if (ft) ft.textContent = fecha;
  
    const elLocal = document.getElementById("partido-local");
    const elVisita = document.getElementById("partido-visita");
    const elMarcador = document.getElementById("marcador");
  
    if (elLocal) {
      elLocal.innerHTML = `
        <span>${local}</span>
        <span class="escudo-junto">${generarEscudoSVG(local, 34)}</span>
      `;
    }
    if (elVisita) {
      elVisita.innerHTML = `
        <span class="escudo-junto">${generarEscudoSVG(visita, 34)}</span>
        <span>${visita}</span>
      `;
    }
    if (elMarcador) elMarcador.textContent = "0 - 0";
  
    const nar = document.getElementById("narracion");
    if (nar) nar.innerHTML = "";
    const acc = document.getElementById("partido-acciones");
    if (acc) acc.innerHTML = "";
  }
  
  function limpiarNarracion() {
    const el = document.getElementById("narracion");
    if (el) el.innerHTML = "";
  }
  
  function narrar(texto, clase = "") {
    const cont = document.getElementById("narracion");
    if (!cont) return;
    const p = document.createElement("p");
    p.className = "linea " + clase;
    p.textContent = texto;
    cont.appendChild(p);
    cont.scrollTop = cont.scrollHeight;
  }
  
  function actualizarMarcador(golesLocal, golesVisita) {
    const el = document.getElementById("marcador");
    if (el) el.textContent = `${golesLocal} - ${golesVisita}`;
  }
  
  function agregarBotonPartido(texto, callback, clase = "boton-principal") {
    const cont = document.getElementById("partido-acciones");
    if (!cont) return;
    const btn = document.createElement("button");
    btn.className = clase;
    btn.textContent = texto;
    btn.addEventListener("click", callback);
    cont.appendChild(btn);
  }
  
  /* TORNEO */
  function renderizarTorneo() {
    const info = document.getElementById("torneo-info");
    const cuerpo = document.getElementById("cuerpo-tabla");
    if (!info || !cuerpo) return;
  
    if (!estado.torneo) {
      info.innerHTML = `<span class="vacio">No hay torneo en curso.</span>`;
      cuerpo.innerHTML = "";
      return;
    }
  
    const torneo = estado.torneo;
    const ordenada = tablaOrdenada();
    const miPos = ordenada.findIndex(eq => eq.nombre === estado.clubActual.nombre) + 1;
  
    info.innerHTML = `
      <div class="info-item"><span class="info-etiqueta">División</span><span class="info-valor">${torneo.division}</span></div>
      <div class="info-item"><span class="info-etiqueta">Fecha actual</span><span class="info-valor">${Math.min(torneo.fechaActual + 1, torneo.fixture.length)} / ${torneo.fixture.length}</span></div>
      <div class="info-item"><span class="info-etiqueta">Tu posición</span><span class="info-valor">${miPos}° de ${ordenada.length}</span></div>
      <div class="info-item"><span class="info-etiqueta">Estado</span><span class="info-valor">${torneo.terminado ? "🏁 Terminado" : "En curso"}</span></div>
    `;
  
    cuerpo.innerHTML = "";
    const divActual = DIVISIONES.find(d => d.nombre === torneo.division);
    const esFederal = divActual && divActual.nombre === "Federal A";
    const esLigaPro = divActual && divActual.nombre === "Liga Profesional";
  
    ordenada.forEach((eq, i) => {
      const tr = document.createElement("tr");
      if (eq.nombre === estado.clubActual.nombre) tr.classList.add("mi-club");
      if (torneo.campeon === eq.nombre) tr.classList.add("campeon");
      if (!esFederal && i >= ordenada.length - TORNEO.descensosDirectos) tr.classList.add("desciende");
      if (!esLigaPro && i < TORNEO.ascensosDirectos) tr.classList.add("asciende");
  
      const dif = eq.gf - eq.gc;
      tr.innerHTML = `
        <td>${i + 1}</td>
        <td class="celda-club">${generarEscudoSVG(eq.nombre, 20)}<span>${eq.nombre}</span></td>
        <td>${eq.pj}</td>
        <td>${eq.g}</td>
        <td>${eq.e}</td>
        <td>${eq.p}</td>
        <td>${eq.gf}</td>
        <td>${eq.gc}</td>
        <td>${dif > 0 ? "+" : ""}${dif}</td>
        <td><strong>${eq.pts}</strong></td>
      `;
      cuerpo.appendChild(tr);
    });
  }
  
  /* COPA */
  function renderizarCopa() {
    const info = document.getElementById("copa-info");
    const bracket = document.getElementById("copa-bracket");
    if (!info || !bracket) return;
  
    if (!estado.copa) {
      info.innerHTML = `<span class="vacio">Sin copa en curso.</span>`;
      bracket.innerHTML = "";
      return;
    }
  
    const copa = estado.copa;
    let estadoCopa = "";
    if (copa.campeon)        estadoCopa = `🏆 Campeón: <span class="destacado">${copa.campeon}</span>`;
    else if (copa.eliminado) estadoCopa = `<span class="destacado">Eliminado</span> en ${copa.ronda}`;
    else                     estadoCopa = `Ronda actual: <span class="destacado">${copa.ronda}</span>`;
  
    info.innerHTML = `
      <div>${estadoCopa}</div>
      <div style="margin-top:6px;font-size:0.85rem">32 equipos · eliminación directa · cada ${COPA.cadaCuanto} fechas de liga</div>
    `;
  
    bracket.innerHTML = "";
    COPA.rondas.forEach(nombreRonda => {
      const cruces = copa.bracket[nombreRonda] || [];
      if (cruces.length === 0 && nombreRonda !== copa.ronda) return;
  
      const div = document.createElement("div");
      div.className = "copa-ronda";
      let html = `<h4>${nombreRonda}</h4>`;
  
      const jugados = copa.historial.filter(h => h.ronda === nombreRonda);
      const mapa = {};
      jugados.forEach(j => {
        mapa[j.local + "|" + j.visita] = j;
        mapa[j.visita + "|" + j.local] = j;
      });
  
      cruces.forEach(cruce => {
        const esMiPartido = cruce.local === estado.clubActual.nombre
                         || cruce.visita === estado.clubActual.nombre;
        const jugado = mapa[cruce.local + "|" + cruce.visita]
                    || mapa[cruce.visita + "|" + cruce.local];
  
        let gfLocal = "", gfVisita = "", claseLocal = "", claseVisita = "";
        if (jugado) {
          if (jugado.local === cruce.local) { gfLocal = jugado.gfLocal; gfVisita = jugado.gfVisita; }
          else                              { gfLocal = jugado.gfVisita; gfVisita = jugado.gfLocal; }
          if (jugado.ganador === cruce.local) { claseLocal = "ganador"; claseVisita = "perdedor"; }
          else                                { claseLocal = "perdedor"; claseVisita = "ganador"; }
        }
  
        html += `
          <div class="copa-cruce ${esMiPartido ? "tu-partido" : ""}">
            <div class="equipo ${claseLocal}">
              <span class="celda-club">${generarEscudoSVG(cruce.local, 18)}<span>${cruce.local}</span></span>
              <span class="goles">${gfLocal}</span>
            </div>
            <div class="equipo ${claseVisita}">
              <span class="celda-club">${generarEscudoSVG(cruce.visita, 18)}<span>${cruce.visita}</span></span>
              <span class="goles">${gfVisita}</span>
            </div>
          </div>
        `;
      });
  
      div.innerHTML = html;
      bracket.appendChild(div);
    });
  }
  
  /* ENTRENAMIENTO */
  function renderizarEntrenamientoPantalla() {
    renderizarRadar();
  
    const cont = document.getElementById("lista-entrenamiento");
    if (!cont) return;
    cont.innerHTML = "";
  
    STATS_DEF.forEach(def => {
      const valor = estado.stats[def.id];
      const maxeado = valor >= STATS_MAX;
      const costoNormal  = costoSubirStat(valor);
      const costoIntenso = Math.round(costoNormal * ENTRENAMIENTO.intensivoMultiplicador);
      const alcanzaNormal  = !maxeado && estado.plata >= costoNormal;
      const alcanzaIntenso = !maxeado && estado.plata >= costoIntenso;
  
      const div = document.createElement("div");
      div.className = "tren" + (maxeado ? " max" : "");
      div.innerHTML = `
        <div class="fila-sup">
          <span class="nomb">${def.nombre}</span>
          <span class="val">${valor}${maxeado ? " ★" : ""}</span>
        </div>
        <div class="barra"><div class="barra-relleno" style="width:${valor}%"></div></div>
        <div class="costo ${maxeado ? "maxeado" : (alcanzaNormal ? "" : "no-alcanza")}">
          ${maxeado ? "MÁXIMO" : `+1 ${formatearPlata(costoNormal)}`}
        </div>
        <div class="fila-botones">
          <button class="btn-normal"  ${alcanzaNormal  ? "" : "disabled"}>+1</button>
          <button class="btn-intenso" ${alcanzaIntenso ? "" : "disabled"}>+${ENTRENAMIENTO.intensivoGanancia} (${formatearPlata(costoIntenso)})</button>
        </div>
      `;
      if (!maxeado) {
        div.querySelector(".btn-normal").addEventListener("click", () => entrenar(def.id, "normal"));
        div.querySelector(".btn-intenso").addEventListener("click", () => entrenar(def.id, "intenso"));
      }
      cont.appendChild(div);
    });
  }
  
  function renderizarRadar() {
    const cont = document.getElementById("radar-contenedor");
    if (!cont) return;
  
    const stats = estado.stats;
    const orden = ["tiro", "regate", "velocidad", "fisico", "defensa", "pase"];
    const defs = {};
    STATS_DEF.forEach(d => { defs[d.id] = d; });
  
    const tam = 320, cx = tam / 2, cy = tam / 2, radioMax = tam / 2 - 55, niveles = 4;
    let svg = `<svg class="radar-svg" viewBox="0 0 ${tam} ${tam}" xmlns="http://www.w3.org/2000/svg">`;
  
    for (let n = 1; n <= niveles; n++) {
      const r = (radioMax / niveles) * n;
      const clase = n === niveles ? "radar-grid-fuerte" : "radar-grid";
      let puntos = "";
      for (let i = 0; i < orden.length; i++) {
        const ang = (Math.PI * 2 / orden.length) * i - Math.PI / 2;
        puntos += `${cx + Math.cos(ang) * r},${cy + Math.sin(ang) * r} `;
      }
      svg += `<polygon class="${clase}" points="${puntos.trim()}"/>`;
    }
    for (let i = 0; i < orden.length; i++) {
      const ang = (Math.PI * 2 / orden.length) * i - Math.PI / 2;
      svg += `<line class="radar-eje" x1="${cx}" y1="${cy}" x2="${cx + Math.cos(ang) * radioMax}" y2="${cy + Math.sin(ang) * radioMax}"/>`;
    }
  
    let puntosStats = "";
    orden.forEach((id, i) => {
      const v = Math.max(0, Math.min(99, stats[id] || 0));
      const ang = (Math.PI * 2 / orden.length) * i - Math.PI / 2;
      puntosStats += `${cx + Math.cos(ang) * radioMax * (v/99)},${cy + Math.sin(ang) * radioMax * (v/99)} `;
    });
    svg += `<polygon class="radar-area" points="${puntosStats.trim()}"/>`;
  
    orden.forEach((id, i) => {
      const v = Math.max(0, Math.min(99, stats[id] || 0));
      const ang = (Math.PI * 2 / orden.length) * i - Math.PI / 2;
      svg += `<circle class="radar-punto" cx="${cx + Math.cos(ang) * radioMax * (v/99)}" cy="${cy + Math.sin(ang) * radioMax * (v/99)}" r="4"/>`;
    });
  
    orden.forEach((id, i) => {
      const ang = (Math.PI * 2 / orden.length) * i - Math.PI / 2;
      const dist = radioMax + 30;
      const x = cx + Math.cos(ang) * dist, y = cy + Math.sin(ang) * dist;
      const nombre = defs[id] ? defs[id].nombre.toUpperCase() : id.toUpperCase();
      svg += `<text class="radar-etiqueta" x="${x}" y="${y - 6}">${nombre}</text>`;
      svg += `<text class="radar-valor"    x="${x}" y="${y + 10}">${stats[id] || 0}</text>`;
    });
  
    svg += `</svg>`;
    cont.innerHTML = svg;
  }
  
  function entrenar(statId, tipo) {
    const valor = estado.stats[statId];
    if (valor >= STATS_MAX) return;
  
    const costo = tipo === "intenso"
      ? Math.round(costoSubirStat(valor) * ENTRENAMIENTO.intensivoMultiplicador)
      : costoSubirStat(valor);
    if (estado.plata < costo) return;
  
    estado.plata -= costo;
    const ganancia = tipo === "intenso" ? ENTRENAMIENTO.intensivoGanancia : 1;
    const antes = estado.stats[statId];
    estado.stats[statId] = Math.min(STATS_MAX, estado.stats[statId] + ganancia);
    const subido = estado.stats[statId] - antes;
  
    const nombreStat = STATS_DEF.find(s => s.id === statId).nombre;
    agregarNoticia("dato", "Entrenamiento",
      `Entrenaste ${nombreStat}: +${subido} (costó ${formatearPlata(costo)}).`);
  
    if (tipo === "intenso" && Math.random() < ENTRENAMIENTO.intensivoRiesgo) {
      estado.stats.fisico = Math.max(1, estado.stats.fisico - 1);
      agregarNoticia("derrota", "Molestia", `Te tiraste de más. Físico -1.`);
    }
  
    actualizarHUD();
    renderizarEntrenamientoPantalla();
  }
  
  /* PERFIL */
  function renderizarPerfil() {
    const datos = document.getElementById("perfil-datos");
    if (datos) {
      datos.innerHTML = `
        <div class="pd-item"><span class="pd-etiqueta">Nombre</span><span class="pd-valor">${estado.nombre} "${estado.apodo}"</span></div>
        <div class="pd-item"><span class="pd-etiqueta">Puesto</span><span class="pd-valor">${PUESTOS[estado.puesto].icono} ${estado.puesto}</span></div>
        <div class="pd-item"><span class="pd-etiqueta">Edad</span><span class="pd-valor">${estado.edad} años</span></div>
        <div class="pd-item"><span class="pd-etiqueta">Club</span><span class="pd-valor">${estado.clubActual.nombre}</span></div>
        <div class="pd-item"><span class="pd-etiqueta">División</span><span class="pd-valor">${estado.division.nombre}</span></div>
        <div class="pd-item"><span class="pd-etiqueta">Temporada</span><span class="pd-valor">${estado.temporada}</span></div>
        <div class="pd-item"><span class="pd-etiqueta">Promedio</span><span class="pd-valor">${estado.notaPromedio > 0 ? estado.notaPromedio.toFixed(1) : "—"}</span></div>
        <div class="pd-item"><span class="pd-etiqueta">Plata</span><span class="pd-valor">${formatearPlata(estado.plata)}</span></div>
      `;
    }
  
    const lista = document.getElementById("perfil-stats-lista");
    if (lista) {
      lista.innerHTML = "";
      STATS_DEF.forEach(def => {
        const valor = estado.stats[def.id];
        const div = document.createElement("div");
        div.className = "perfil-stat-item";
        div.innerHTML = `
          <div class="ps-fila"><span class="ps-nombre">${def.nombre}</span><span class="ps-valor">${valor}</span></div>
          <div class="barra"><div class="barra-relleno" style="width:${valor}%"></div></div>
        `;
        lista.appendChild(div);
      });
    }
  
    const hist = document.getElementById("perfil-historial");
    if (hist) {
      hist.innerHTML = "";
      if (estado.historialTemporadas.length === 0) {
        hist.innerHTML = `<p class="vacio">Todavía no terminaste ninguna temporada.</p>`;
      } else {
        estado.historialTemporadas.forEach(t => {
          const div = document.createElement("div");
          div.className = "perfil-hist-item";
          div.innerHTML = `
            <span class="ph-temp">T${t.temporada}</span>
            <span class="ph-datos">${t.division} — ${t.club}</span>
            <span class="ph-pos">${t.posicion}° · ${t.puntos} pts</span>
          `;
          hist.appendChild(div);
        });
      }
    }
  }
  
  /* TROFEOS */
  function renderizarTrofeos() {
    const vitrina = document.getElementById("trofeos-vitrina");
    const dist = document.getElementById("trofeos-distinciones-lista");
  
    if (vitrina) {
      vitrina.innerHTML = "";
      if (estado.trofeos.length === 0) {
        vitrina.innerHTML = `<p class="trofeo-vacio">Todavía no ganaste ningún trofeo. ¡A la cancha!</p>`;
      } else {
        estado.trofeos.forEach(t => {
          const info = TIPOS_TROFEOS[t.tipo] || { icono: "🏆" };
          const div = document.createElement("div");
          div.className = "trofeo-item";
          div.innerHTML = `
            <div class="trofeo-icono">${info.icono}</div>
            <div class="trofeo-nombre">${t.nombre}</div>
            <div class="trofeo-temp">T${t.temporada}</div>
          `;
          vitrina.appendChild(div);
        });
      }
    }
  
    if (dist) {
      dist.innerHTML = "";
      if (estado.distinciones.length === 0) {
        dist.innerHTML = `<p class="vacio">Sin distinciones todavía.</p>`;
      } else {
        estado.distinciones.forEach(d => {
          const div = document.createElement("div");
          div.className = "distincion-item";
          div.innerHTML = `<span class="di-titulo">${d.titulo}</span><span class="di-desc">${d.descripcion}</span>`;
          dist.appendChild(div);
        });
      }
    }
  }
  
  /* MERCADO */
  function renderizarMercado() {
    const info = document.getElementById("mercado-info");
    const cont = document.getElementById("mercado-ofertas");
    if (!info || !cont) return;
  
    if (!estado.mercadoAbierto) {
      info.innerHTML = `<p>El mercado de pases está <span class="destacado">cerrado</span>.</p>
        <p style="margin-top:6px;font-size:0.85rem">Se abre entre temporadas.</p>`;
      cont.innerHTML = "";
      return;
    }
  
    info.innerHTML = `<p>El mercado está <span class="destacado">abierto</span>.</p>`;
    cont.innerHTML = "";
  
    if (estado.ofertas.length === 0) {
      cont.innerHTML = `<p class="mercado-vacio">Ningún club te ofertó todavía.</p>`;
      return;
    }
  
    estado.ofertas.forEach((o, i) => {
      const div = document.createElement("div");
      div.className = "tarjeta-oferta";
      div.innerHTML = `
        <div class="club celda-club">${generarEscudoSVG(o.club.nombre, 22)}<span>${o.club.nombre}</span></div>
        <div class="division">${o.division.nombre}</div>
        <div class="linea-info"><span>Sueldo</span><span>${formatearPlata(o.sueldo)}/partido</span></div>
        <div class="linea-info"><span>Firma</span><span>${formatearPlata(o.firma)}</span></div>
        <div class="linea-info"><span>Contrato</span><span>${o.duracion} temporada(s)</span></div>
        <button data-index="${i}">ACEPTAR</button>
      `;
      div.querySelector("button").addEventListener("click", () => aceptarOferta(i));
      cont.appendChild(div);
    });
  }
  
  /* NOTICIAS */
  function renderizarNoticias() {
    const cont = document.getElementById("noticias-lista");
    if (!cont) return;
    cont.innerHTML = "";
    if (estado.noticias.length === 0) {
      cont.innerHTML = `<p class="noticia-vacia">Sin noticias por ahora.</p>`;
      return;
    }
    estado.noticias.forEach(n => {
      const div = document.createElement("div");
      div.className = "noticia-item tipo-" + n.tipo;
      div.innerHTML = `
        <div class="noticia-titulo">${n.titulo}</div>
        <div class="noticia-cuerpo">${n.cuerpo}</div>
        <div class="noticia-fecha">${n.fecha}</div>
      `;
      cont.appendChild(div);
    });
  }
  
  /* GOLEADORES */
  function renderizarGoleadores() {
    const cont = document.getElementById("goleadores-lista");
    if (!cont) return;
    cont.innerHTML = "";
  
    const jugadores = [...(estado.jugadoresDivision || [])];
    const yo = {
      nombre: `${estado.nombre} "${estado.apodo}"`,
      club: estado.clubActual.nombre,
      goles: estado.goles,
      yo: true
    };
    const todos = [...jugadores, yo];
    todos.sort((a, b) => b.goles - a.goles);
    const top = todos.slice(0, 30);
  
    if (top.length === 0) {
      cont.innerHTML = `<p class="goleadores-vacio">Sin datos todavía.</p>`;
      return;
    }
  
    top.forEach((j, i) => {
      const div = document.createElement("div");
      div.className = "fila-goleador" + (j.yo ? " yo" : "");
      div.innerHTML = `
        <span class="pos">${i + 1}°</span>
        <span class="nombre">${j.nombre}</span>
        <span class="club celda-club">${j.club ? generarEscudoSVG(j.club, 16) : ""}<span>${j.club || ""}</span></span>
        <span class="goles">${j.goles} ⚽</span>
      `;
      cont.appendChild(div);
    });
  }
  
  /* FINAL */
  function renderizarPantallaFinal() {
    const resumen = document.getElementById("resumen-final");
    const texto = document.getElementById("texto-final");
  
    if (texto) texto.textContent = `${estado.nombre} "${estado.apodo}" colgó los botines. Una carrera digna.`;
    if (!resumen) return;
  
    let historialHTML = `<span class="titulo-resumen">Historial de temporadas</span>`;
    if (estado.historialTemporadas.length === 0) historialHTML += `Sin temporadas completadas.<br>`;
    else estado.historialTemporadas.forEach(t => {
      historialHTML += `T${t.temporada} · ${t.division} · ${t.club} · ${t.posicion}° (${t.puntos} pts)<br>`;
    });
  
    let trofeosHTML = `<span class="titulo-resumen">Trofeos ganados</span>`;
    if (estado.trofeos.length === 0) trofeosHTML += `Ninguno.<br>`;
    else estado.trofeos.forEach(t => {
      const info = TIPOS_TROFEOS[t.tipo] || { icono: "🏆" };
      trofeosHTML += `${info.icono} ${t.nombre}<br>`;
    });
  
    let distHTML = `<span class="titulo-resumen">Distinciones</span>`;
    if (estado.distinciones.length === 0) distHTML += `Ninguna.<br>`;
    else estado.distinciones.forEach(d => { distHTML += `⭐ ${d.titulo}<br>`; });
  
    const promHist = estado.notasHistoricas.length > 0
      ? (estado.notasHistoricas.reduce((a, b) => a + b, 0) / estado.notasHistoricas.length).toFixed(1)
      : "—";
  
    resumen.innerHTML = `
      <span class="titulo-resumen">Resumen de la carrera</span>
      Edad de retiro: <span class="destacado">${estado.edad}</span><br>
      Temporadas jugadas: <span class="destacado">${estado.temporada}</span><br>
      Partidos jugados: <span class="destacado">${estado.partidosJugados}</span><br>
      Ganados: <span class="destacado">${estado.partidosGanados}</span> ·
      Empatados: <span class="destacado">${estado.partidosEmpatados}</span> ·
      Perdidos: <span class="destacado">${estado.partidosPerdidos}</span><br>
      Goles: <span class="destacado">${estado.goles}</span><br>
      Promedio histórico: <span class="destacado">${promHist}</span><br>
      Mejor nota: <span class="destacado">${estado.mejorNota.toFixed(1)}</span><br>
      Reputación final: <span class="destacado">${estado.reputacion}</span><br>
      Plata acumulada: <span class="destacado">${formatearPlata(estado.plata)}</span>
      ${trofeosHTML}
      ${distHTML}
      ${historialHTML}
    `;
  }
  
  
  /* =================================================================
     LÓGICA DE PARTIDO
     ================================================================= */
  
  function jugarPartido() {
    if (partidoEnCurso) return;
    if (estado.temporadaTerminada) { iniciarNuevaTemporada(); return; }
  
    if (!estado.torneo) {
      estado.torneo = crearTorneo(estado.division.nombre, estado.clubActual);
      estado.jugadoresDivision = crearJugadoresDeDivision(estado.division.nombre);
      estado.copa = crearCopa(estado.division.nombre);
    }
  
    const partido = proximoPartidoDelJugador();
    if (!partido) {
      simularOtrosPartidosDeLaFecha();
      avanzarFecha();
      renderizarHub();
      return;
    }
  
    const tocaCopa = estado.torneo.fechaActual > 0
                  && estado.torneo.fechaActual % COPA.cadaCuanto === 0
                  && estado.copa && !estado.copa.eliminado && !estado.copa.campeon;
  
    iniciarPartidoLiga(partido, tocaCopa);
  }
  
  function iniciarPartidoLiga(partido, tocaCopa) {
    partidoEnCurso = true;
    const esLocal = partido.local === estado.clubActual.nombre;
    const rival = esLocal ? partido.visita : partido.local;
  
    mostrarPantalla("partido");
    configurarPantallaPartido(
      partido.local, partido.visita,
      "Liga — " + estado.torneo.division,
      `Fecha ${estado.torneo.fechaActual + 1} de ${estado.torneo.fixture.length}`
    );
  
    narrar(`🏟️  ${partido.local} vs ${partido.visita}`, "dorado");
    narrar(`📅  ${estado.torneo.division} — Fecha ${estado.torneo.fechaActual + 1}`, "dato");
    narrar(`💬  ${fraseSegura(FRASES_INICIO_PARTIDO)}\n`);
  
    if (estado.lesionado > 0) {
      narrar(`🤕 Estás lesionado. Te perdés este partido.`, "derrota");
      reducirLesion();
      simularOtrosPartidosDeLaFecha();
      avanzarFecha();
      partidoEnCurso = false;
      agregarBotonPartido("▶ CONTINUAR", () => {
        if (tocaCopa && estado.copa && !estado.copa.eliminado && !estado.copa.campeon) {
          setTimeout(() => iniciarPartidoCopa(), 200);
        } else mostrarPantalla("hub");
      });
      return;
    }
  
    const rendimiento = promedioPonderado();
    const factorBase = 0.15 + (rendimiento / 100) * 0.55 + estado.reputacion / 300;
    const factor = Math.min(0.92, factorBase);
    const fuerzaRival = fuerzaDeClub(rival);
    const bonusRival = (fuerzaRival - 3) * 0.03;
    const factorFinal = Math.max(0.1, factor - bonusRival);
  
    const jugadas = generarJugadas(factorFinal);
    const goles = { propios: 0, rival: 0 };
  
    if (intervaloPartidoActual) { clearInterval(intervaloPartidoActual); intervaloPartidoActual = null; }
  
    let i = 0;
    intervaloPartidoActual = setInterval(() => {
      try {
        if (i >= jugadas.length) {
          clearInterval(intervaloPartidoActual);
          intervaloPartidoActual = null;
          partidoEnCurso = false;
          finalizarPartidoLiga(partido, esLocal, goles.propios, goles.rival, tocaCopa);
          return;
        }
        procesarJugada(jugadas[i], goles);
        const mLocal  = esLocal ? goles.propios : goles.rival;
        const mVisita = esLocal ? goles.rival   : goles.propios;
        actualizarMarcador(mLocal, mVisita);
        i++;
      } catch (e) {
        console.error("Error en jugada:", e);
        clearInterval(intervaloPartidoActual);
        intervaloPartidoActual = null;
        partidoEnCurso = false;
        narrar(`⚠️  Ocurrió un problema. Terminamos el partido acá.`, "derrota");
        finalizarPartidoLiga(partido, esLocal, goles.propios, goles.rival, tocaCopa);
      }
    }, 380);
  }
  
  function finalizarPartidoLiga(partido, esLocal, golesPropios, golesRival, tocaCopa) {
    if (intervaloPartidoActual) { clearInterval(intervaloPartidoActual); intervaloPartidoActual = null; }
    partidoEnCurso = false;
  
    const gfLocal  = esLocal ? golesPropios : golesRival;
    const gfVisita = esLocal ? golesRival   : golesPropios;
    const gano   = golesPropios > golesRival;
    const empato = golesPropios === golesRival;
  
    narrar("\n📣  RESULTADO FINAL", "dorado");
    narrar(`   ${partido.local} ${gfLocal} - ${gfVisita} ${partido.visita}`,
           gano ? "gol" : empato ? "dato" : "derrota");
  
    registrarResultado(partido.local, partido.visita, gfLocal, gfVisita);
  
    estado.partidosJugados++;
    if (gano) estado.partidosGanados++;
    else if (empato) estado.partidosEmpatados++;
    else estado.partidosPerdidos++;
    estado.goles += golesPropios;
  
    // Calificación
    const nota = calcularNotaPartido(golesPropios, golesRival, gano, empato);
    estado.notasPartidos.push(nota);
    estado.notasHistoricas.push(nota);
    estado.sumaNotas += nota;
    estado.notaPromedio = estado.sumaNotas / estado.notasPartidos.length;
    if (nota > estado.mejorNota) estado.mejorNota = nota;
  
    let plataGanada = estado.clubActual.sueldo;
    let reputacionGanada = 0;
    if (gano) {
      plataGanada += 500 * estado.division.nivel;
      reputacionGanada = 3 * estado.division.nivel;
      narrar("\n✅  Ganamos. La hinchada te canta.", "gol");
    } else if (empato) {
      plataGanada += 200 * estado.division.nivel;
      reputacionGanada = 1;
      narrar("\n🤝  Empate. Se reparte la plata.", "dato");
    } else {
      reputacionGanada = -1;
      narrar("\n❌  Perdimos. A entrenar más.", "derrota");
    }
  
    estado.plata += plataGanada;
    estado.reputacion = Math.max(0, estado.reputacion + reputacionGanada);
    narrar(`\n💰  Plata: +${formatearPlata(plataGanada)}`);
    narrar(`⭐  Reputación: ${reputacionGanada >= 0 ? "+" : ""}${reputacionGanada}`);
  
    narrar(`\n📊  CALIFICACIÓN: ${nota.toFixed(1)} / 10`, nota >= 7 ? "gol" : nota >= 5 ? "dato" : "derrota");
    narrar(`   ${fraseNota(nota)}`, nota >= 7 ? "gol" : nota >= 5 ? "dato" : "derrota");
  
    subirStatsPorPartido(gano, golesPropios);
    tirarEventos();
    chequearLesion();
    simularOtrosPartidosDeLaFecha();
    avanzarFecha();
  
    agregarBotonPartido("▶ CONTINUAR", () => {
      if (tocaCopa && estado.copa && !estado.copa.eliminado && !estado.copa.campeon) {
        setTimeout(() => iniciarPartidoCopa(), 200);
      } else mostrarPantalla("hub");
    });
  }
  
  function subirStatsPorPartido(gano, goles) {
    const subidos = [];
    function intentarSubir(id) {
      if (estado.stats[id] >= STATS_MAX) return;
      estado.stats[id]++;
      subidos.push(STATS_DEF.find(s => s.id === id).nombre);
    }
    if (goles > 0) intentarSubir(Math.random() < 0.5 ? "tiro" : "regate");
    if (gano) { for (let i = 0; i < 2; i++) intentarSubir(azar(STATS_DEF).id); }
    else { if (Math.random() < 0.5) intentarSubir(Math.random() < 0.5 ? "fisico" : "defensa"); }
    if (subidos.length > 0) narrar(`\n📈  Mejoraste: ${subidos.join(", ")}`, "dorado");
  }
  
  
  /* =================================================================
     PARTIDO DE COPA
     ================================================================= */
  function iniciarPartidoCopa() {
    if (!estado.copa || estado.copa.eliminado || estado.copa.campeon) { mostrarPantalla("hub"); return; }
    partidoEnCurso = true;
    const copa = estado.copa;
  
    const miCruce = copa.cruces.find(c =>
      c.local === estado.clubActual.nombre || c.visita === estado.clubActual.nombre
    );
  
    if (!miCruce) {
      resolverRondaCopaSinJugador();
      partidoEnCurso = false;
      mostrarPantalla("hub");
      return;
    }
  
    const esLocal = miCruce.local === estado.clubActual.nombre;
    const rivalNombre = esLocal ? miCruce.visita : miCruce.local;
  
    mostrarPantalla("partido");
    configurarPantallaPartido(
      miCruce.local, miCruce.visita,
      "🏆 Copa Argentina — " + copa.ronda,
      "Eliminación directa — si perdés, quedás afuera"
    );
  
    narrar(`🏆  ${miCruce.local} vs ${miCruce.visita}`, "dorado");
    narrar(`📅  Copa Argentina — ${copa.ronda}`, "dato");
    narrar(`💬  Partido a todo o nada.\n`);
  
    if (estado.lesionado > 0) {
      narrar(`🤕 Estás lesionado. No podés jugar. Quedás eliminado.`, "derrota");
      reducirLesion();
      copa.eliminado = true;
      partidoEnCurso = false;
      agregarBotonPartido("▶ CONTINUAR", () => mostrarPantalla("hub"));
      return;
    }
  
    const rendimiento = promedioPonderado();
    const factorBase = 0.15 + (rendimiento / 100) * 0.55 + estado.reputacion / 300;
    const factor = Math.min(0.92, factorBase);
    const fuerzaRival = fuerzaDeClub(rivalNombre);
    const bonusRival = (fuerzaRival - 3) * 0.03;
    const factorFinal = Math.max(0.1, factor - bonusRival);
  
    const jugadas = generarJugadas(factorFinal);
    const goles = { propios: 0, rival: 0 };
  
    if (intervaloPartidoActual) { clearInterval(intervaloPartidoActual); intervaloPartidoActual = null; }
  
    let i = 0;
    intervaloPartidoActual = setInterval(() => {
      try {
        if (i >= jugadas.length) {
          clearInterval(intervaloPartidoActual);
          intervaloPartidoActual = null;
          partidoEnCurso = false;
          finalizarPartidoCopa(miCruce, esLocal, goles.propios, goles.rival);
          return;
        }
        procesarJugada(jugadas[i], goles);
        const mLocal  = esLocal ? goles.propios : goles.rival;
        const mVisita = esLocal ? goles.rival   : goles.propios;
        actualizarMarcador(mLocal, mVisita);
        i++;
      } catch (e) {
        console.error("Error en jugada de copa:", e);
        clearInterval(intervaloPartidoActual);
        intervaloPartidoActual = null;
        partidoEnCurso = false;
        narrar(`⚠️  Ocurrió un problema. Terminamos el partido acá.`, "derrota");
        finalizarPartidoCopa(miCruce, esLocal, goles.propios, goles.rival);
      }
    }, 380);
  }
  
  function finalizarPartidoCopa(miCruce, esLocal, golesPropios, golesRival) {
    if (intervaloPartidoActual) { clearInterval(intervaloPartidoActual); intervaloPartidoActual = null; }
    partidoEnCurso = false;
  
    const copa = estado.copa;
    const gfLocal  = esLocal ? golesPropios : golesRival;
    const gfVisita = esLocal ? golesRival   : golesPropios;
  
    narrar("\n📣  RESULTADO FINAL", "dorado");
    narrar(`   ${miCruce.local} ${gfLocal} - ${gfVisita} ${miCruce.visita}`, "dorado");
  
    let gano = golesPropios > golesRival;
    const empato = golesPropios === golesRival;
  
    if (empato) {
      narrar(`\n⚽  Empate. Vamos a penales...`, "dato");
      const prob = 0.5 + (estado.stats.defensa + estado.stats.fisico) / 600;
      gano = Math.random() < prob;
      if (gano) narrar("🥅  ¡Pasamos por penales!", "gol");
      else      narrar("🥅  Nos eliminan por penales.", "derrota");
    }
  
    if (gano) {
      narrar(`\n✅  ¡Pasamos de ronda en la Copa!`, "gol");
      estado.reputacion += 3;
      estado.plata += 500 * estado.division.nivel;
    } else {
      narrar(`\n❌  Quedamos eliminados de la Copa.`, "derrota");
      copa.eliminado = true;
    }
  
    resolverRondaCopa(miCruce, gano);
    agregarBotonPartido("▶ CONTINUAR", () => mostrarPantalla("hub"));
  }
  
  function resolverRondaCopa(miCruce, ganoJugador) {
    const copa = estado.copa;
    const ronda = copa.ronda;
    const resultados = [];
  
    copa.cruces.forEach(cruce => {
      const esMiPartido = cruce.local === miCruce.local && cruce.visita === miCruce.visita;
      let gfLocal, gfVisita, ganador;
      if (esMiPartido) {
        const esLocal = miCruce.local === estado.clubActual.nombre;
        if (ganoJugador) {
          ganador = estado.clubActual.nombre;
          gfLocal  = esLocal ? 2 : 1;
          gfVisita = esLocal ? 1 : 2;
        } else {
          ganador = esLocal ? cruce.visita : cruce.local;
          gfLocal  = esLocal ? 1 : 2;
          gfVisita = esLocal ? 2 : 1;
        }
      } else {
        const r = simularPartidoRapido(cruce.local, cruce.visita);
        gfLocal = r.gf; gfVisita = r.gc;
        if (gfLocal > gfVisita) ganador = cruce.local;
        else if (gfVisita > gfLocal) ganador = cruce.visita;
        else ganador = Math.random() < 0.5 ? cruce.local : cruce.visita;
      }
      resultados.push({ ronda, local: cruce.local, visita: cruce.visita, gfLocal, gfVisita, ganador, esMiPartido });
    });
  
    copa.historial.push(...resultados);
    const ganadores = resultados.map(r => r.ganador);
  
    if (ganadores.length === 1) {
      copa.campeon = ganadores[0];
      if (copa.campeon === estado.clubActual.nombre) {
        const premio = COPA.premioBase * estado.division.nivel;
        estado.plata += premio;
        estado.reputacion += COPA.reputacionGanar;
        estado.trofeos.push({ tipo: "copa", nombre: `Copa Argentina (T${estado.temporada})`, temporada: estado.temporada });
        agregarNoticia("dorado", "¡CAMPEÓN DE LA COPA!", `Ganaste la Copa. Premio: ${formatearPlata(premio)}.`);
      } else {
        agregarNoticia("dato", "Copa Argentina", `Campeón: ${copa.campeon}.`);
      }
      return;
    }
  
    copa.rondaIndex++;
    copa.ronda = COPA.rondas[copa.rondaIndex] || "Final";
    const proximos = [];
    for (let i = 0; i < ganadores.length; i += 2) {
      if (ganadores[i + 1]) proximos.push({ local: ganadores[i], visita: ganadores[i + 1] });
    }
    copa.cruces = proximos;
    copa.bracket[copa.ronda] = proximos;
  }
  
  function resolverRondaCopaSinJugador() {
    const copa = estado.copa;
    const resultados = [];
    copa.cruces.forEach(cruce => {
      const r = simularPartidoRapido(cruce.local, cruce.visita);
      let ganador;
      if (r.gf > r.gc) ganador = cruce.local;
      else if (r.gc > r.gf) ganador = cruce.visita;
      else ganador = Math.random() < 0.5 ? cruce.local : cruce.visita;
      resultados.push({ ronda: copa.ronda, local: cruce.local, visita: cruce.visita, gfLocal: r.gf, gfVisita: r.gc, ganador, esMiPartido: false });
    });
    copa.historial.push(...resultados);
    const ganadores = resultados.map(r => r.ganador);
    if (ganadores.length === 1) { copa.campeon = ganadores[0]; return; }
  
    copa.rondaIndex++;
    copa.ronda = COPA.rondas[copa.rondaIndex] || "Final";
    const proximos = [];
    for (let i = 0; i < ganadores.length; i += 2) {
      if (ganadores[i + 1]) proximos.push({ local: ganadores[i], visita: ganadores[i + 1] });
    }
    copa.cruces = proximos;
    copa.bracket[copa.ronda] = proximos;
  }
  
  
  /* =================================================================
     TEMPORADA / ARRANQUE / EVENTOS
     ================================================================= */
  function iniciarNuevaTemporada() {
    if (estado.retirado) { estado.terminado = true; mostrarPantalla("final"); return; }
  
    estado.temporada++;
    estado.temporadaTerminada = false;
    estado.mercadoAbierto = false;
    estado.ofertas = [];
  
    estado.torneo = crearTorneo(estado.division.nombre, estado.clubActual);
    estado.jugadoresDivision = crearJugadoresDeDivision(estado.division.nombre);
    estado.copa = crearCopa(estado.division.nombre);
  
    agregarNoticia("dato", `Temporada ${estado.temporada}`,
      `Arranca la temporada con ${estado.clubActual.nombre} en ${estado.division.nombre}.`);
  
    mostrarPantalla("hub");
  }
  
  function empezarJuego() {
    const nombre = document.getElementById("input-nombre").value.trim() || "Anónimo";
    const apodo  = document.getElementById("input-apodo").value.trim()  || "El Pibe";
    if (!puestoElegido) return;
  
    estado = estadoInicial(nombre, apodo, puestoElegido);
    estado.torneo = crearTorneo(estado.division.nombre, estado.clubActual);
    estado.jugadoresDivision = crearJugadoresDeDivision(estado.division.nombre);
    estado.copa = crearCopa(estado.division.nombre);
  
    agregarNoticia("dato", "¡Arranca la carrera!",
      `${nombre} "${apodo}" empieza su sueño en ${estado.clubActual.nombre}.`);
  
    mostrarPantalla("hub");
  }
  
  
  /* =================================================================
     EVENT LISTENERS
     ================================================================= */
  document.querySelectorAll(".puesto-card").forEach(card => {
    card.addEventListener("click", () => {
      document.querySelectorAll(".puesto-card").forEach(c => c.classList.remove("seleccionado"));
      card.classList.add("seleccionado");
      puestoElegido = card.dataset.puesto;
      document.getElementById("btn-empezar").disabled = false;
    });
  });
  
  document.getElementById("btn-empezar").addEventListener("click", empezarJuego);
  document.getElementById("hub-btn-jugar").addEventListener("click", jugarPartido);
  
  document.querySelectorAll(".hub-btn").forEach(btn => {
    btn.addEventListener("click", () => mostrarPantalla(btn.dataset.seccion));
  });
  
  document.querySelectorAll(".boton-volver").forEach(btn => {
    btn.addEventListener("click", () => mostrarPantalla("hub"));
  });
  
  document.getElementById("btn-reiniciar").addEventListener("click", () => {
    mostrarPantalla("inicio");
    document.getElementById("input-nombre").value = "";
    document.getElementById("input-apodo").value = "";
    document.getElementById("btn-empezar").disabled = true;
    document.querySelectorAll(".puesto-card").forEach(c => c.classList.remove("seleccionado"));
    puestoElegido = null;
  });
  
/* =================================================================
   MÚSICA DE INICIO — Rock argentino generado por Web Audio API
   ================================================================= */

let musicaCtx = null;
let musicaActiva = false;
let musicaLoopId = null;
let musicaMuteada = false;

// Inicializa el contexto de audio para la música (independiente del de sonidos)
function initMusica() {
  if (musicaCtx) return true;
  try {
    musicaCtx = new (window.AudioContext || window.webkitAudioContext)();
    return true;
  } catch (e) {
    console.warn("Web Audio API no soportado para música");
    return false;
  }
}

/* ---------------------------------------------------------------
   NOTAS MUSICALES (frecuencias)
   --------------------------------------------------------------- */
const NOTAS = {
  // Octava 2 (bajos)
  C2: 65.41, D2: 73.42, E2: 82.41, F2: 87.31, G2: 98.00, A2: 110.00, B2: 123.47,
  // Octava 3 (medios)
  C3: 130.81, D3: 146.83, E3: 164.81, F3: 174.61, G3: 196.00, A3: 220.00, B3: 246.94,
  // Octava 4 (melodía)
  C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.00, A4: 440.00, B4: 493.88,
  // Octava 5 (agudos para énfasis)
  C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99, A5: 880.00, B5: 987.77
};

/* ---------------------------------------------------------------
   MOTOR DE INSTRUMENTOS
   --------------------------------------------------------------- */

// Toca una nota con un sintetizador (tipo "guitarra eléctrica")
function tocarNotaGuitarra(frec, cuando, duracion, volumen = 0.1) {
  if (!musicaCtx || musicaMuteada) return;

  const osc = musicaCtx.createOscillator();
  const gain = musicaCtx.createGain();
  const filtro = musicaCtx.createBiquadFilter();

  // Onda diente de sierra = suena "rockero"
  osc.type = "sawtooth";
  osc.frequency.value = frec;

  filtro.type = "lowpass";
  filtro.frequency.setValueAtTime(2000, cuando);
  filtro.frequency.exponentialRampToValueAtTime(800, cuando + duracion);
  filtro.Q.value = 5;

  gain.gain.setValueAtTime(0, cuando);
  gain.gain.linearRampToValueAtTime(volumen, cuando + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, cuando + duracion);

  osc.connect(filtro);
  filtro.connect(gain);
  gain.connect(musicaCtx.destination);

  osc.start(cuando);
  osc.stop(cuando + duracion);
}

// Toca un bajo (onda cuadrada suave)
function tocarNotaBajo(frec, cuando, duracion, volumen = 0.12) {
  if (!musicaCtx || musicaMuteada) return;

  const osc = musicaCtx.createOscillator();
  const gain = musicaCtx.createGain();

  osc.type = "triangle";
  osc.frequency.value = frec;

  gain.gain.setValueAtTime(0, cuando);
  gain.gain.linearRampToValueAtTime(volumen, cuando + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, cuando + duracion);

  osc.connect(gain);
  gain.connect(musicaCtx.destination);

  osc.start(cuando);
  osc.stop(cuando + duracion);
}

// Bombo (kick drum) — pulso grave
function tocarBombo(cuando, volumen = 0.25) {
  if (!musicaCtx || musicaMuteada) return;

  const osc = musicaCtx.createOscillator();
  const gain = musicaCtx.createGain();

  osc.type = "sine";
  osc.frequency.setValueAtTime(150, cuando);
  osc.frequency.exponentialRampToValueAtTime(40, cuando + 0.15);

  gain.gain.setValueAtTime(volumen, cuando);
  gain.gain.exponentialRampToValueAtTime(0.001, cuando + 0.2);

  osc.connect(gain);
  gain.connect(musicaCtx.destination);

  osc.start(cuando);
  osc.stop(cuando + 0.25);
}

// Caja / redoblante — ruido corto
function tocarCaja(cuando, volumen = 0.08) {
  if (!musicaCtx || musicaMuteada) return;

  const bufferSize = musicaCtx.sampleRate * 0.1;
  const buffer = musicaCtx.createBuffer(1, bufferSize, musicaCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
  }

  const source = musicaCtx.createBufferSource();
  source.buffer = buffer;

  const filtro = musicaCtx.createBiquadFilter();
  filtro.type = "highpass";
  filtro.frequency.value = 1500;

  const gain = musicaCtx.createGain();
  gain.gain.setValueAtTime(volumen, cuando);
  gain.gain.exponentialRampToValueAtTime(0.001, cuando + 0.1);

  source.connect(filtro);
  filtro.connect(gain);
  gain.connect(musicaCtx.destination);

  source.start(cuando);
  source.stop(cuando + 0.15);
}

/* ---------------------------------------------------------------
   PATRÓN DE LA CANCIÓN
   Duración: 4 compases (16 tiempos). Se repite en loop.
   --------------------------------------------------------------- */

// BPM ~ 120 (rock medio). Un "beat" = 0.5 segundos.
const BPM = 120;
const BEAT = 60 / BPM;       // 0.5 seg
const COMPAS = BEAT * 4;      // 2 seg
const LOOP_DURACION = COMPAS * 4; // 8 seg

// Progresión de acordes en La menor: Am - F - C - G
// (la típica progresión rockera)
const ACORDES = [
  { bajo: "A2", notas: ["A3", "C4", "E4"] },     // Am
  { bajo: "F2", notas: ["F3", "A3", "C4"] },     // F
  { bajo: "C3", notas: ["C4", "E4", "G4"] },     // C
  { bajo: "G2", notas: ["G3", "B3", "D4"] }      // G
];

// Riff melódico (notas sueltas por beat)
const RIFF = [
  // Compás 1 (Am)
  ["A4", null, "C5", null, "E5", null, "C5", "A4"],
  // Compás 2 (F)
  ["F4", null, "A4", null, "C5", null, "A4", "F4"],
  // Compás 3 (C)
  ["C5", null, "E5", null, "G5", null, "E5", "C5"],
  // Compás 4 (G)
  ["B4", null, "D5", null, "G5", null, "D5", "B4"]
];

/* ---------------------------------------------------------------
   REPRODUCIR UN LOOP DE LA CANCIÓN
   --------------------------------------------------------------- */
function programarLoop(inicio) {
  if (!musicaCtx || musicaMuteada) return;

  // Batería: bombo en cada beat, caja en contratiempos
  for (let beat = 0; beat < 16; beat++) {
    const t = inicio + beat * BEAT;
    tocarBombo(t, beat % 2 === 0 ? 0.25 : 0.15);
    if (beat % 2 === 1) tocarCaja(t, 0.06);
    // Caja también en el 4° beat de cada compás (énfasis)
    if (beat % 4 === 3) tocarCaja(t, 0.1);
  }

  // Bajo y acordes: un acorde por compás
  ACORDES.forEach((acorde, i) => {
    const t = inicio + i * COMPAS;

    // Bajo en cada beat del compás (pulso rockero)
    for (let b = 0; b < 4; b++) {
      tocarNotaBajo(NOTAS[acorde.bajo], t + b * BEAT, BEAT * 0.9, 0.12);
    }

    // Guitarra rítmica: toca las notas del acorde en cada beat
    for (let b = 0; b < 4; b++) {
      const nota = acorde.notas[b % acorde.notas.length];
      tocarNotaGuitarra(NOTAS[nota], t + b * BEAT, BEAT * 0.5, 0.05);
    }
  });

  // Riff melódico por encima
  RIFF.forEach((compas, i) => {
    const t = inicio + i * COMPAS;
    compas.forEach((nota, j) => {
      if (nota && NOTAS[nota]) {
        tocarNotaGuitarra(NOTAS[nota], t + j * (BEAT / 2), BEAT * 0.35, 0.08);
      }
    });
  });
}

/* ---------------------------------------------------------------
   LOOP PRINCIPAL
   --------------------------------------------------------------- */
function iniciarMusica() {
  if (!initMusica()) return;
  if (musicaActiva) return;

  // Si el contexto está suspendido (por políticas del navegador), lo reanudamos
  if (musicaCtx.state === "suspended") {
    musicaCtx.resume();
  }

  musicaActiva = true;
  const btn = document.getElementById("btn-musica");
  if (btn) {
    btn.textContent = musicaMuteada ? "🔇" : "🎵";
    btn.classList.toggle("mute", musicaMuteada);
    btn.classList.toggle("sonando", !musicaMuteada);
  }

  // Programamos el primer loop con un pequeño retraso
  let siguienteInicio = musicaCtx.currentTime + 0.1;

  const programarYRepetir = () => {
    if (!musicaActiva) return;
    programarLoop(siguienteInicio);
    siguienteInicio += LOOP_DURACION;
    // Programamos el próximo loop medio segundo antes de que termine
    const delay = (siguienteInicio - musicaCtx.currentTime - 0.5) * 1000;
    musicaLoopId = setTimeout(programarYRepetir, Math.max(100, delay));
  };

  programarYRepetir();
}

function detenerMusica() {
  musicaActiva = false;
  if (musicaLoopId) {
    clearTimeout(musicaLoopId);
    musicaLoopId = null;
  }
  const btn = document.getElementById("btn-musica");
  if (btn) {
    btn.classList.remove("sonando");
  }
}

function toggleMusica() {
  if (!initMusica()) return;
  musicaMuteada = !musicaMuteada;

  const btn = document.getElementById("btn-musica");
  if (btn) {
    btn.textContent = musicaMuteada ? "🔇" : "🎵";
    btn.classList.toggle("mute", musicaMuteada);
    btn.classList.toggle("sonando", !musicaMuteada);
  }

  // Si se acaba de desmutear y la música estaba activa, reanudamos
  if (!musicaMuteada && musicaActiva) {
    // El loop natural lo va a retomar en el próximo ciclo
  }
}

/* ---------------------------------------------------------------
   HOOKS: arrancar en inicio, parar al empezar carrera
   --------------------------------------------------------------- */

// Intentar arrancar la música cuando el usuario interactúa
// (los navegadores lo requieren)
function intentarArrancarMusica() {
  if (document.getElementById("pantalla-inicio").classList.contains("activa")) {
    iniciarMusica();
  }
}

// Conectamos el botón de música
(function conectarBotonMusica() {
  const btn = document.getElementById("btn-musica");
  if (btn && !btn.dataset.hookeado) {
    btn.dataset.hookeado = "true";
    btn.addEventListener("click", () => {
      if (!musicaActiva) {
        musicaMuteada = false;
        iniciarMusica();
      } else {
        toggleMusica();
      }
    });
  }
})();

// El primer click en cualquier parte arranca la música si estamos en inicio
document.addEventListener("click", intentarArrancarMusica, { once: true });

// Cuando arranca la carrera, paramos la música
(function hookearEmpezar() {
  const btnEmpezar = document.getElementById("btn-empezar");
  if (btnEmpezar && !btnEmpezar.dataset.musicaHook) {
    btnEmpezar.dataset.musicaHook = "true";
    btnEmpezar.addEventListener("click", () => {
      detenerMusica();
    });
  }
})();