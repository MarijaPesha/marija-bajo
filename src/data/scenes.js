// ─── Scena 1 — Spite the Shadows ─────────────────────────
import wall from "../assets/img/home01.jpg";
import piano from "../assets/img/home02.jpg";
import bullets from "../assets/img/home03.jpg";

// ─── Scena 2 — In Memoriam Actualis ──────────────────────
 import ima01 from "../assets/img/actualis/step-1.png";
 import ima02 from "../assets/img/actualis/step-2.png";
 import ima03 from "../assets/img/actualis/step-3.png";

export const scenes = [
  // ─── Spite the Shadows ─────────────────────────────────────────────
  {
    images: [wall, piano, bullets],
    eng: {
      title: "Spite the Shadows",
      desc: "Spite the Shadows is a project that tells a story about the (non)culture of remembrance regarding the 1990's Bosnian War through a multimedia performance. This multimedia performance aims to unify a diversity of different artistic expressions with music as the most dominant form. Along with the performance of piano pieces, elements of recitation drawn from factual historic documentation of war crimes, a projection of photographs, and audio samples will be presented. The idea for the project originated during Beethoven's 250th birthday anniversary in Bonn. Bajo was inspired by Beethoven's struggle. Despite suffering from deafness, he composed the Ode to Joy, a profoundly human achievement that resonated deeply with her, particularly in light of the modern history of her country and the broader human experience. His ordeal made her realize the significance of conveying historical truths through music in a fresh manner. Subsequently, she followed various cues, such as meeting Josip Magdic in Zagreb, who provided her with the music sheet for War Picture Postcards from Sarajevo and shared its backstory. Her performance then gradually evolved, shaping the form it now embodies.",
    },
    bhs: {
      title: "U inat tami",
      desc: "U inat tami je projekt koji kroz multimedijalni performans priča priču o (ne)kulturi sjećanja na Rat u Bosni i Hercegovini. Ova izvedba objedinjuje raznolikost različitih umjetničkih izričaja pri čemu se muzika ističe kao najdominantniji oblik. Uz izvedbu klavirskih kompozicija, tu su i elementi recitacije sastavljeni od činjenične historijske dokumentacije ratnih zločina, projekcije fotografija i audio snimaka. Ideja za projekt nastala je tokom proslave Beethovenova 250. rođendana u Bonnu. Bajo je bila inspirirana Beethovenovom borbom. Usprkos tome što je patio od gluhoće, komponirao je Odu radosti, duboko ljudsko postignuće koje je s njom duboko odjeknulo, posebno u svjetlu moderne historije njene zemlje i ljudskog iskustva. Beethovenove teškoće potaknule su je da shvati važnost prenošenja historijskih istina kroz muziku na svjež način. Potom je pratila različite znakove na putu, poput susreta s Josipom Magdićem u Zagrebu, koji joj je dao note za Sarajevske ratne razglednice i ispričao njihovu pozadinsku priču. Potom se njena izvedba postupno razvijala u oblik koji sada utjelovljuje.",
    },
  },
 
  // ─── In Memoriam Actualis ─────────────────────────────────────────────
  {
    images: [ima01, ima02, ima03],
    eng: {
      title: "In Memoriam Actualis",
      desc: `The piano performance "In Memoriam Actualis" evokes through music the memory of the victims of the wars of modern history, while at the same time serving as a call for reflection and action in dealing with the terrifying context of today. Through the thematic repetitiveness of the musical backbone of the performance, Bajo's stage elements –the body in the service of media –focus on the genocide in Palestine that is taking place before the eyes of the entire world emphasizing the collective cry for action. In the performance, we have the opportunity to hear Josip Magdić's work Supernumerary, op. 233, which, unfortunately, has never been more relevant. The author himself says: "Listening to the eerie but impressive explosions of artillery, tanks, aircraft and other shelling in the city at the foot of Trebević day in and day out (siege duration 1425 days; length of the ring 62 km; every 25 m a cannon, howitzer or similar; number of shells - there is no consensus; I heard every one!), I decided to record that grandiose terrifying sound, thinking: if I survive, maybe I will be able to use it somewhere."`,
    },
    bhs: {
      title: "In Memoriam Actualis",
      desc: `Klavirski performans „In Memoriam Actualis" kroz muziku evocira sjećanje na žrtve ratova moderne povijesti, istovremeno služeći kao apel za promišljanje i djelovanje u suočavanju sa zastrašujućim kontekstom današnjice. Putem muzičke okosnice performansa, Bajo scenskim elementima, tijelom u službi medija, fokus postavlja na genocid u Palestini koji se dešava uz punu pozornost cijelog svijeta i naglašava kolektivni vrisak za djelovanjem. U performansu imamo priliku čuti djelo Josipa Magdića, Supernumerary, op. 233 koje je, nažalost, nikad aktuelnije. Sam autor kaže: „Danonoćno slušajući jezive, ali impresivne eksplozije topovskih, tenkovskih, avionskih i drugih granata u gradu podno Trebevića (trajanje opsade 1425 dana; dužina obruča 62 km; svakih 25 m top, haubica ili slično; broj granata – nema konsenzusa; ja sam čuo svaku!), odlučio sam snimiti taj grandiozni zastrašujući zvuk, misleći: ako preživim, možda ću ga negdje moći upotrijebiti."`,
    },
  },
];