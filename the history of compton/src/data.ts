import { people } from './people'
export interface EventPhoto {
  src: string
  caption: string
  credit: string
  sourceUrl?: string
}

export interface EventSection {
  heading: string
  text: string
}

export interface Event {
  id: string
  year: string
  title: string
  desc: string
  tags: string[]
  era: string
  slug: string
  type: 'event'
  sections?: EventSection[]
  photos?: EventPhoto[]
  sources?: string[]
}

export interface Person {
  id: string
  name: string
  label: 'Person'
  era: string
  desc: string
  slug: string
  type: 'person'
  role: string
  sections?: EventSection[]
  photos?: EventPhoto[]
  sources?: string[]
}

export type Entry = Event | Person

export const categories = ['Events', 'People', 'Places', 'Culture', 'Politics', 'Science']

export const eras = [
  { label: 'All Eras', era: '' },
  { label: 'Roots & Founding (1781–1899)', era: 'pre-1900' },
  { label: 'The Booster Era (1900–1919)', era: '1900-1920' },
  { label: 'Oil, Industry & Depression (1920–1939)', era: '1920-1940' },
  { label: 'Postwar Suburb (1940–1959)', era: '1940-1960' },
  { label: 'Racial Transition (1960–1979)', era: '1960-1980' },
  { label: 'Crisis & Culture (1980–1999)', era: '1980-2000' },
  { label: 'Modern Compton (2000–Present)', era: '2000-present' },
]

export function getEraLabel(era: string): string {
  return eras.find(e => e.era === era)?.label || era
}

export const eraIntros: Record<string, string> = {
  'pre-1900': "Compton's story begins with the multiracial founding of Los Angeles in 1781, when the pueblo's settlers — at least 26 of the 44 at least part African — planted roots that would reshape the region for centuries. Nearly a century later, in 1867, Griffith D. Compton and William Morton founded a Methodist farming community on Rancho San Pedro land: a town of dairy farms, alfalfa fields, and the largest cheese factory in Southern California. These decades also held darker chapters — the 1871 Chinatown massacre, the largest mass lynching in American history, and the public health rhetoric that branded the city's Chinese quarter a \"rotten spot.\" Compton incorporated in 1888, and by the turn of the century the foundations of both its farming economy and its racial geography were set.",
  '1900-1920': "The first two decades of the twentieth century transformed Los Angeles — and Compton with it — through the marriage of press, railroads, and real estate. In 1906, William J. Seymour's Azusa Street Revival gave birth to Pentecostalism, briefly uniting Black, white, Latino, and Asian worshippers. In January 1910, the first international air meet in the United States drew an estimated 226,000 spectators to Dominguez Field, where Glenn Curtiss, Louis Paulhan, and Roy Knabenshue demonstrated the wonder of flight before crowds moved by Henry Huntington's trolley cars. W.E.B. Du Bois and Booker T. Washington visited Los Angeles in these years and reached very different verdicts on its promise for Black Americans, while publishers like Charlotta Bass and Jefferson Edmonds built the institutions that would sustain Black Los Angeles for generations.",
  '1920-1940': "Oil discovered on Dominguez Hill in the 1920s turned Compton from a farming town into an industrial center almost overnight, its population exploding from about 1,500 to nearly 13,500 by 1926. The same booster-speculator culture that sold oil stock — C. C. Julian's \"greatest swindle\" in Los Angeles history — sold house lots in the working-class suburbs of the southeast, where South Gate chased the \"Detroit of the Coast\" vision and lured factories like General Motors and Firestone. Then came the Depression: Mexican American residents faced repatriation campaigns justified by public health rhetoric, the 1933 Long Beach earthquake destroyed nine of ten Compton elementary schools, and by 1939 the city carried the highest school tax rate in California — the first real expression of the fiscal trap that would define its future.",
  '1940-1960': "World War II made Compton the \"Industrial Heart of the California Southland.\" Firestone partnered with the schools on war production training, Park Village housed white defense workers while Watts' projects confined Black workers to central Los Angeles, and the postwar baby boom brought \"acres of children\" to a district built for acres of vegetables. In 1948, Shelley v. Kraemer ended enforcement of the racial covenants that had kept Black families out — homeowners had rallied behind the slogan \"Keep the Negroes North of 130th Street\" — and the pent-up demand of the Great Migration poured into the city. White residents answered with resistance: Willowbrook maintained an \"open policy of segregation,\" and Lynwood (1950) and Paramount (1953) seceded from Compton Union, each stripping the district of its wealthiest territory.",
  '1960-1980': "The 1965 Watts Rebellion accelerated a transformation already underway: white families fled, and in 1969 Compton became the largest city west of the Mississippi to elect a Black mayor, Douglas Dollarhide. Carson incorporated in 1968 specifically to avoid low-income housing, drawing the Black middle class away in a second wave of flight. In the city's Mexican American barrio, Albert Camarillo grew up in these years — counted as \"white\" by the census yet subject to de facto segregation — while the Compton Communicative Arts Academy captured the community's vibrant cultural life on film even as its tax base began to erode.",
  '1980-2000': "The crack epidemic and a surge in gang violence devastated Compton in the 1980s as deindustrialization closed the factories that had built it. The city's reputation was cemented — and complicated — by NWA's \"Straight Outta Compton\" (1988) and John Singleton's \"Boyz n the Hood\" (1991), works that brought Compton's streets to the world while flattening its complexity. In 1993, Compton Unified became the first California district taken over by the state for both financial and academic failure, with state control lasting until 2001. By the end of the decade, large-scale Latino immigration had made Compton a majority-Latino city — the third great demographic transition in a century.",
  '2000-present': "The new century brought new struggles and new voices. In 2010, McKinley Elementary parents invoked the nation's first \"parent trigger\" law to demand a charter conversion. A deputy treasurer embezzled $3.7 million from the city between 2010 and 2016, and Measure P's street-repair funds sat largely unspent. In 2022, the California State Auditor ranked Compton the most financially at-risk city in the state — the endpoint of a century-long structural trap — while Baldwin Hills stood in contrast as Black Los Angeles's wealthiest enclave. In 2024, Stanford historian Albert Camarillo published \"Compton in My Soul,\" giving the city's Mexican American community the first-person history it had long lacked.",
}

export const events: Event[] = [
  {
    id: 'evt-pobladores',
    year: '1781',
    title: 'Los Angeles Founded by Multiracial Settlers',
    desc: 'El Pueblo de Nuestra Senora la Reina de Los Angeles is established. The majority of the 44 original settlers (pobladores) have African ancestry — at least 26 are at least part African. The settlers come from western Mexico, where the Spanish empire relied heavily on African and mulatto soldiers. This multiracial origin establishes the deep African roots of the region that would later include Compton.',
    tags: ['Founding', 'Race', 'African American'],
    era: 'pre-1900',
    slug: 'la-founded-pobladores',
    type: 'event',
    sections: [
      {
        heading: 'African Roots of the Pueblo',
        text: 'When El Pueblo de Nuestra Senora la Reina de Los Angeles was established in 1781, the majority of the 44 original settlers had African ancestry — at least 26 of the 44 pobladores were at least part African. The settlers came from western Mexico, where the Spanish empire relied heavily on African and mulatto soldiers and laborers. Racial restrictions on upward mobility were more relaxed on the western frontier than elsewhere in the Spanish empire.',
      },
      {
        heading: '"Gente de Razon"',
        text: 'Africans and Indians who became Christians were considered "gente de razon" (people of reason), which elevated their social standing. By 1760, most soldiers on Spain\'s western frontier were mulatto, and the multiracial pueblo was crucial to Spain\'s colonial expansion. Early Anglo-American historians obscured this founding by leveling "unsubstantiated charges of laziness, ignorance, and uselessness" at the original inhabitants.',
      },
      {
        heading: 'The "Browning" of Early California',
        text: 'Racial mixing was more common in California than in Anglo-dominated parts of North America. Men of all races tended to marry indigenous women or mixed-race women, and mulattoes and mestizos quickly outnumbered other groups. The original African Californios exhibited a gradual "browning" over time as people married into other ethnic groups — a reminder that the region\'s racial history begins with African presence, not despite it.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Pobladores_memorial%2C_Grand_Park%2C_Los_Angeles%2C_Jan._31%2C_2014.jpg/960px-Pobladores_memorial%2C_Grand_Park%2C_Los_Angeles%2C_Jan._31%2C_2014.jpg',
        caption: 'The Los Angeles Pobladores memorial in Grand Park — honoring the multiracial 1781 settlers of El Pueblo de Los Angeles',
        credit: 'palewire, CC BY-SA 3.0, via Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Pobladores_memorial,_Grand_Park,_Los_Angeles,_Jan._31,_2014.jpg',
      },
    ],
    sources: [
      'Hunt & Ramon (eds.), "Black Los Angeles: American Dreams and Racial Realities" (2010), ch. 1 (P. Robinson)',
    ],
  },

  {
    id: 'evt-1',
    year: '1867',
    title: 'Compton Founded',
    desc: 'Griffith D. Compton and William Morton establish Compton as a Methodist farming community on land from the Rancho San Pedro grant. The town becomes known for dairy products, operating the largest cheese factory in Southern California, and alfalfa farming.',
    tags: ['Founding', 'Agriculture'],
    era: 'pre-1900',
    slug: 'compton-founded',
    type: 'event',
    sections: [
      {
        heading: 'A Farming Settlement on Rancho San Pedro',
        text: 'Compton was founded in 1867 by Griffith D. Compton and William Morton as a Methodist farming community on land from the Rancho San Pedro grant. Like many settlements in the region, it began with disappointed gold-seekers who turned to farming when the mines failed to deliver. The town became known for dairy products — operating the largest cheese factory in Southern California — and for alfalfa farming, which dominated the county\'s agricultural economy in the town\'s early decades.',
      },
      {
        heading: '"A Town of Recent Growth"',
        text: 'Austrian Archduke Ludwig Louis Salvator visited Los Angeles County in 1876 — nine years after Compton\'s founding — and produced one of the earliest surviving descriptions of the settlement. His travelogue, "Los Angeles in the Sunny Seventies," lists Compton among the county\'s "towns of recent growth," alongside Anaheim, Wilmington, El Monte, Downey City, and Westminster, distinguished from mission-era sites like San Juan Capistrano and the pueblo of Los Angeles (founded 1781). He documented the railroad and stagecoach infrastructure that made the farming settlement accessible.',
      },
      {
        heading: 'The County Around Compton',
        text: 'Salvator\'s account paints the region as overwhelmingly white in population, with small Mexican Californio, Chinese, and Native American communities. Agriculture dominated the economy, and no mention was made of oil — which would not be discovered on nearby Dominguez Hill until the 1920s. The county\'s climate was already being marketed as "a veritable sanitarium," a promotional theme that would later drive waves of migration to communities like Compton.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Heritage_House_%28Compton%2C_California%29.jpg/960px-Heritage_House_%28Compton%2C_California%29.jpg',
        caption: 'Heritage House — one of Compton\'s oldest surviving homes, built in 1869',
        credit: 'LittleT889, CC BY-SA 4.0, via Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Heritage_House_(Compton,_California).jpg',
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Dominguez_Rancho_Adobe_Museum.jpg/960px-Dominguez_Rancho_Adobe_Museum.jpg',
        caption: 'Dominguez Rancho Adobe — home of the Dominguez family, whose Rancho San Pedro land grant became the site of Compton',
        credit: 'Vanesser III, CC BY-SA 2.0, via Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Dominguez_Rancho_Adobe_Museum.jpg',
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/A_windmill_used_to_pump_water_for_irrigation%2C_Compton%2C_California%2C_ca.1900-1901_%28CHS-1431%29.jpg/960px-A_windmill_used_to_pump_water_for_irrigation%2C_Compton%2C_California%2C_ca.1900-1901_%28CHS-1431%29.jpg',
        caption: 'A windmill pumping water for irrigation in Compton, ca. 1900–1901',
        credit: 'California Historical Society, public domain, via Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:A_windmill_used_to_pump_water_for_irrigation,_Compton,_California,_ca.1900-1901_(CHS-1431).jpg',
      },
    ],
    sources: [
      'Salvator, "Los Angeles in the Sunny Seventies" (1878; trans. 1929)',
      'Straus, "Death of a Suburban Dream" (2014)',
    ],
  },

  {
    id: 'evt-chinatown',
    year: '1871',
    title: 'Los Angeles Chinatown Massacre',
    desc: 'The largest mass lynching in American history occurs in Los Angeles\'s Chinatown when a mob of approximately 500 white and Latino residents kills 18 Chinese residents (most accounts count 18 victims; some historians, including Natalia Molina, count 19). The event demonstrates the extremity of racial violence in the region and the willingness of legal authorities to tolerate it. This culture of extra-legal violence creates a precedent for the racial intimidation that later underlies the enforcement of housing covenants in communities like Compton.',
    tags: ['Violence', 'Race', 'Chinese American'],
    era: 'pre-1900',
    slug: 'chinatown-massacre',
    type: 'event',
    sections: [
      {
        heading: 'The Largest Mass Lynching in American History',
        text: 'In October 1871, a mob of approximately 500 white and Latino residents descended on Los Angeles\'s Chinatown and killed 18 Chinese residents — most accounts count 18 victims, though some historians, including Natalia Molina, count 19 — in the largest mass lynching in American history. Historian John Mack Faragher documents how the event demonstrated the extremity of racial violence in the region and the willingness of legal authorities to tolerate it. The victims were hanged from wagon tongues and a corral gate while onlookers cheered.',
      },
      {
        heading: 'Violence as Property Protection',
        text: 'Faragher shows how violence in frontier Los Angeles was routinely instrumentalized to protect property values — a clear precedent for the racial covenants, police surveillance, and informal intimidation that Compton\'s white residents would later deploy to maintain racial boundaries. The connection between racial violence and real estate economics runs as a thread from the 1850s through the 1965 Watts Rebellion.',
      },
      {
        heading: 'The Vigilante Tradition',
        text: 'The vigilance committees that terrorized non-white communities were not spontaneous mobs but organized groups backed by prominent businessmen and politicians. This institutional dimension of racial violence parallels the institutional dimension of racial exclusion documented in Compton\'s history — housing covenants, school districting, and public health regulation all functioned as organized systems of gatekeeping.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Los_Angeles%2C_corpses_of_Chinese_victims%2C_Oct_1871.jpg/960px-Los_Angeles%2C_corpses_of_Chinese_victims%2C_Oct_1871.jpg',
        caption: 'The aftermath of the 1871 massacre: Los Angeles residents view the bodies of Chinese victims, October 1871',
        credit: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Los_Angeles,_corpses_of_Chinese_victims,_Oct_1871.jpg',
      },
    ],
    sources: [
      'Faragher, "Eternity Street: Violence and Justice in Frontier Los Angeles" (2016)',
    ],
  },

  {
    id: 'evt-rotten-spot',
    year: '1879',
    title: 'LA Health Officer Brands Chinatown a "Rotten Spot"',
    desc: 'Los Angeles Health Officer Dr. Walter Lindley calls for eradicating Chinatown, describing it as a "rotten spot" that "pollutes the air we breathe and poisons the water we drink." This rhetoric — blaming a marginalized neighborhood for disease while ignoring the real causes of inadequate medical care and raw sewage exposure — is applied over the following decades to Chinese, then Japanese, then Mexican neighborhoods, establishing public health as a tool of racial gatekeeping that historian Natalia Molina later documents.',
    tags: ['Public Health', 'Race', 'Chinese American', 'Science'],
    era: 'pre-1900',
    slug: 'rotten-spot-rhetoric',
    type: 'event',
    sections: [
      {
        heading: '"That Rotten Spot"',
        text: 'In 1879, Los Angeles Health Officer Dr. Walter Lindley called for eradicating Chinatown — "that rotten spot [that pollutes] the air we breathe and poisons the water we drink." The framing blamed a marginalized neighborhood for disease while ignoring the real causes: inadequate medical care, raw sewage exposure, and malnutrition.',
      },
      {
        heading: 'A Template Applied Again and Again',
        text: 'Molina documents how this rhetorical pattern was applied serially to Chinese, then Japanese, then Mexican neighborhoods between 1879 and 1939. The discourse legitimized spatial control of non-white populations — sanitation inspections, laundry restrictions, segregated health facilities, and eventually repatriation campaigns. Public health became a route to citizenship for some and a barrier for others, deciding who could work, attend school, and operate businesses.',
      },
    ],
    photos: [],
    sources: [
      'Molina, "Fit to Be Citizens? Public Health and Race in Los Angeles, 1879-1939" (2006)',
    ],
  },

  {
    id: 'evt-2',
    year: '1888',
    title: 'Compton Incorporates',
    desc: 'Compton is officially incorporated as a city. However, residents later disincorporate much of the land due to tax opposition, and the town is not fully reincorporated until 1906.',
    tags: ['Government', 'Founding'],
    era: 'pre-1900',
    slug: 'compton-incorporation',
    type: 'event',
    sections: [
      {
        heading: 'Incorporation and Immediate Tax Revolt',
        text: 'Compton was officially incorporated as a city in 1888. But incorporation brought taxes, and residents quickly rebelled: much of the town\'s land was disincorporated in response to tax opposition, shrinking the municipality. The town was not fully reincorporated until 1906.',
      },
      {
        heading: 'A Pattern That Would Define the City',
        text: 'The resistance to taxation at Compton\'s founding foreshadowed its permanent structural problem. As historian Emily Straus shows, Compton developed as a bedroom community with low property values and no industrial or commercial revenue to fund services. Residents wanted the benefits of municipal government but consistently resisted paying for them — a tension that would deepen into fiscal crisis over the next century.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Compton-Flood-1903.jpg/960px-Compton-Flood-1903.jpg',
        caption: 'The Los Angeles River floods Compton, 1903 — flooded street looking west on Compton Boulevard',
        credit: 'Los Angeles Public Library, public domain, via Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Compton-Flood-1903.jpg',
      },
    ],
    sources: [
      'Straus, "Death of a Suburban Dream" (2014)',
    ],
  },

  {
    id: 'evt-dubois-washington',
    year: '1903-1914',
    title: 'Du Bois and Washington Reach Opposite Verdicts on Black LA',
    desc: 'W.E.B. Du Bois (1913) and Booker T. Washington (1903, 1914) both visit Los Angeles and reach different conclusions about its promise for African Americans. Du Bois romanticizes the city, emphasizing its "sensuous beauty" and interracial hospitality, while Washington is more impressed by the practical networking at a Tuskegee fundraising dinner than by claims of racial progress. Historian Marne L. Campbell argues Du Bois focused too narrowly on elite black Angelenos and overlooked the working-class majority that the Great Migration would soon multiply.',
    tags: ['Race', 'African American', 'Culture'],
    era: '1900-1920',
    slug: 'dubois-washington-la',
    type: 'event',
    sections: [
      {
        heading: 'Two Titans, Two Verdicts',
        text: 'Both W.E.B. Du Bois (1913) and Booker T. Washington (1903 and 1914) visited Los Angeles, and both reached very different conclusions about what the city promised Black Americans. Du Bois romanticized the city, emphasizing its "sensuous beauty" and interracial hospitality, and argued it offered Black Angelenos more than any other region. Washington, in town to fundraise for Tuskegee, was more impressed by the practical networking of a dinner party than by claims of racial progress.',
      },
      {
        heading: 'A Critique of the Elite Gaze',
        text: 'Campbell argues that Du Bois focused too narrowly on elite Black Angelenos and overlooked the working-class majority — the very population that the Washington-aligned Tuskegee message suited better. The two visitors\' blind spots mattered: the working-class majority they debated over would, within two decades, be multiplied by the Great Migration and eventually reshape communities like Compton.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/W.E.B._Du_Bois_by_James_E._Purdy%2C_1907.jpg/960px-W.E.B._Du_Bois_by_James_E._Purdy%2C_1907.jpg',
        caption: 'W.E.B. Du Bois, photographed by James E. Purdy in 1907',
        credit: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:W.E.B._Du_Bois_by_James_E._Purdy,_1907.jpg',
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Booker_T._Washington_by_Francis_Benjamin_Johnston%2C_c._1895.jpg/960px-Booker_T._Washington_by_Francis_Benjamin_Johnston%2C_c._1895.jpg',
        caption: 'Booker T. Washington, photographed by Frances Benjamin Johnston, c. 1895',
        credit: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Booker_T._Washington_by_Francis_Benjamin_Johnston,_c._1895.jpg',
      },
    ],
    sources: [
      'Campbell, "Making Black Los Angeles: Class, Gender, and Community, 1850-1917" (2016)',
    ],
  },

  {
    id: 'evt-azusa',
    year: '1906',
    title: 'Azusa Street Revival Begins',
    desc: 'The Azusa Street Revival, led by William J. Seymour, begins in Los Angeles. This multi-ethnic religious revival gives birth to modern Pentecostalism. The revival initially draws a racially mixed congregation before becoming segregated — a pattern that mirrors the broader racial dynamics of the region.',
    tags: ['Religion', 'Race'],
    era: '1900-1920',
    slug: 'azusa-street-revival',
    type: 'event',
    sections: [
      {
        heading: 'Birthplace of Pentecostalism',
        text: 'Led by William J. Seymour, the Azusa Street Revival (1906–1913) began in a former African Methodist Episcopal church in downtown Los Angeles and gave birth to modern Pentecostalism. The revival drew a famously multi-ethnic congregation — Black, white, Latino, and Asian worshippers prayed together at a time when racial mixing was rare in American religious life.',
      },
      {
        heading: 'Integration, Then Segregation',
        text: 'Historian Marne L. Campbell shows that the revival\'s multi-racial practice did not last: the movement soon became segregated, a pattern that mirrored broader racial dynamics in the region. The arc of the revival — from radical interracial experiment to segregated institution — anticipated the trajectory of the neighborhoods around it, including the white working-class suburbs of southeast Los Angeles that would later become Compton.',
      },
    ],
    photos: [],
    sources: [
      'Campbell, "Making Black Los Angeles" (2016)',
    ],
  },

  {
    id: 'evt-3',
    year: '1910',
    title: 'Los Angeles International Aviation Meet',
    desc: 'The first international air meet in the United States is held at Dominguez Field on the Rancho San Pedro land grant in the Compton area. Over ten days in January, an estimated 226,000 spectators converge on the site — nearly matching the entire population of Los Angeles (320,000). Notable aviators include Glenn Curtiss, Frenchman Louis Paulhan, and Roy Knabenshue, who demonstrates military aviation by dropping sandbags on targets. The event establishes the booster-driven model that would define LA\'s aviation identity.',
    tags: ['Aviation', 'Boosterism', 'Dominguez', 'Science'],
    era: '1900-1920',
    slug: '1910-air-meet',
    type: 'event',
    sections: [
      {
        heading: 'The Crowds',
        text: 'For ten days in January 1910, an estimated 226,000 spectators converged on Dominguez Field — on the Rancho San Pedro land grant of the Dominguez family, in what is now the Compton area — for the first international air meet in the United States. That attendance nearly matched the entire population of Los Angeles at the time (320,000). On peak days, crowds were estimated at 50,000–80,000. Special trolley cars from Henry Huntington\'s Pacific Electric Railway shuttled spectators from downtown Los Angeles to the field.',
      },
      {
        heading: 'The Booster Network',
        text: 'Historian Austin Janisch\'s study of the meet shows it was built by a booster network: newspaper magnates William Randolph Hearst (Los Angeles Examiner) and Harry Chandler (Los Angeles Times), the Merchants and Manufacturers Association, railroad magnate Henry Huntington, and the Dominguez family — particularly Gregorio Del Amo Gonzalez. Promoter Dick Ferris organized the event, which offered $70,000 in prize money (approximately $2 million today), an unprecedented scale for American aviation. The meet established the template of combining press, railroads, and real estate interests that would drive Southern California development for a century.',
      },
      {
        heading: 'Aviation History Made',
        text: 'Notable aviators included Glenn Curtiss, the Frenchman Louis Paulhan, and Roy Knabenshue, who demonstrated the military applications of aviation by dropping sandbags on simulated targets with a U.S. Signal Corps officer aboard — arguably the first demonstration of military aviation on the West Coast. Janisch argues the meet minted Los Angeles\'s identity as an aviation paradise, a legacy that continues with companies like SpaceX (Hawthorne), Virgin Galactic (Mojave), and Northrop Grumman (El Segundo) in the region today. Dominguez Field itself later became part of the industrial corridor that provided jobs for Compton\'s working class.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Louis_Paulhan_flying_with_a_passenger_%28Mrs._Dick_Ferris%3F%29_in_his_Henry_Farman_biplane%2C_at_the_Dominguez_Field_Air_Meet%2C_Los_Angeles%2C_January_1910_%28CHS-5602%29.jpg/960px-Louis_Paulhan_flying_with_a_passenger_%28Mrs._Dick_Ferris%3F%29_in_his_Henry_Farman_biplane%2C_at_the_Dominguez_Field_Air_Meet%2C_Los_Angeles%2C_January_1910_%28CHS-5602%29.jpg',
        caption: 'Louis Paulhan flying with a passenger over Dominguez Field, January 1910',
        credit: 'California Historical Society via Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Louis_Paulhan_flying_with_a_passenger_(Mrs._Dick_Ferris%3F)_in_his_Henry_Farman_biplane,_at_the_Dominguez_Field_Air_Meet,_Los_Angeles,_January_1910_(CHS-5602).jpg',
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/French_aviator_Louis_Paulhan_and_the_first_American_woman_to_fly_in_an_airplane_%28as_a_passenger%29_Mrs._Dick_Ferris_at_the_Dominguez_Air_Meet%2C_Los_Angeles%2C_1910_%28CHS-5592%29.jpg/960px-French_aviator_Louis_Paulhan_and_the_first_American_woman_to_fly_in_an_airplane_%28as_a_passenger%29_Mrs._Dick_Ferris_at_the_Dominguez_Air_Meet%2C_Los_Angeles%2C_1910_%28CHS-5592%29.jpg',
        caption: 'Louis Paulhan and Mrs. Dick Ferris — the first American woman to fly as a passenger — at the Dominguez Air Meet, 1910',
        credit: 'California Historical Society via Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:French_aviator_Louis_Paulhan_and_the_first_American_woman_to_fly_in_an_airplane_(as_a_passenger)_Mrs._Dick_Ferris_at_the_Dominguez_Air_Meet,_Los_Angeles,_1910_(CHS-5592).jpg',
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Hoxseys_smash-up%2C_Dominguez_Field%2C_1910_%2835733%29.jpg/960px-Hoxseys_smash-up%2C_Dominguez_Field%2C_1910_%2835733%29.jpg',
        caption: 'A crash ("smash-up") during the meet at Dominguez Field, 1910',
        credit: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hoxseys_smash-up,_Dominguez_Field,_1910_(35733).jpg',
      },
    ],
    sources: [
      'Janisch, "Soaring into Los Angeles: The 1910 Los Angeles International Aviation Meet" (2020)',
      'McWilliams, "Southern California: An Island on the Land" (1946)',
    ],
  },

  {
    id: 'evt-great-migration',
    year: '1910s-1940s',
    title: 'The Great Migration Reshapes Black Los Angeles',
    desc: 'Tens of thousands of black Southerners migrate to Los Angeles during the Great Migration, transforming a small community into a substantial population base. The county\'s black population grew from 188 in 1880 to 75,209 by 1940, even as the city of Los Angeles grew from 11,000 residents in 1880 to 1.5 million by 1940, and the county as a whole to 2.8 million. This growth builds the population base that, after Shelley v. Kraemer ends restrictive covenants in 1948, moves into Compton and drives its transformation into a black-majority city.',
    tags: ['Race', 'African American', 'Demographics'],
    era: '1920-1940',
    slug: 'great-migration-la',
    type: 'event',
    sections: [
      {
        heading: 'From 188 to 75,209',
        text: 'The African American population of Los Angeles County grew from just 188 in 1880 to 75,209 by 1940 — even as the city of Los Angeles grew from 11,000 residents in 1880 to 1.5 million by 1940, and the county as a whole to 2.8 million. Before the Great Migration, Black Angelenos had never exceeded 5% of the population, yet they had built robust institutions: churches, newspapers, and mutual aid societies documented by historian Marne Campbell.',
      },
      {
        heading: 'The Population Base for Compton\'s Transformation',
        text: 'This growth built the population base that would reshape Compton. When Shelley v. Kraemer ended restrictive covenants in 1948, Black families who had been pent up in central Los Angeles neighborhoods could finally buy homes in the white suburbs of the southeast — and they did, rapidly and in large numbers, transforming Compton into a Black-majority city within two decades.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/African-American-family-South-Chicago-1922.jpg/960px-African-American-family-South-Chicago-1922.jpg',
        caption: 'An African American family in South Chicago, 1922 — a scene from the same Great Migration that reshaped Los Angeles',
        credit: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:African-American-family-South-Chicago-1922.jpg',
      },
    ],
    sources: [
      'Molina, "Fit to Be Citizens?" (2006), population tables',
      'Campbell, "Making Black Los Angeles" (2016)',
      'Hunt & Ramon (eds.), "Black Los Angeles" (2010)',
    ],
  },

  {
    id: 'evt-4',
    year: '1920',
    title: 'Oil Discovered on Dominguez Hill',
    desc: 'Oil is discovered on Dominguez Hill, transforming Compton from an agricultural community into an industrial center. The population explodes from about 1,500 in 1920 to approximately 13,500 by 1926. The oil boom brings workers, refineries, and related industries to the area.',
    tags: ['Oil', 'Industry', 'Dominguez'],
    era: '1920-1940',
    slug: 'oil-discovery',
    type: 'event',
    sections: [
      {
        heading: 'Black Gold on Dominguez Hill',
        text: 'Oil was discovered on Dominguez Hill, transforming Compton from a farming community into an industrial center almost overnight. The date is disputed: Straus places the discovery in 1920, while oil industry records date the Dominguez field\'s discovery well — Callender No. 1-A — to September 1923. The population exploded from about 1,500 in 1920 to approximately 13,500 by 1926. The boom brought workers, refineries, and related industries to the area, accelerating the transition from dairy and alfalfa country to an industrial suburb.',
      },
      {
        heading: 'The Culture of Speculation',
        text: 'The oil era was inseparable from the booster-speculator culture that defined 1920s Los Angeles. Jules Tygiel\'s account of the Julian Petroleum Corporation scandal — the "greatest swindle" in Los Angeles history — shows how the same promotional techniques used to sell oil stock were used to sell house lots in southeast LA County suburbs: free buses, lavish claims, and installment plans. The willingness of ordinary people to take on debt for speculative gains characterized the era and later contributed to Compton\'s fiscal vulnerability.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Signal_Hill%2C_1926.jpg/960px-Signal_Hill%2C_1926.jpg',
        caption: 'Signal Hill, 1926 — the LA Basin oil boom that transformed the region around Compton in the same years',
        credit: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Signal_Hill,_1926.jpg',
      },
    ],
    sources: [
      'Tygiel, "The Great Los Angeles Swindle: Oil, Stocks, and Scandal During the Roaring Twenties" (1994)',
      'Straus, "Death of a Suburban Dream" (2014)',
    ],
  },

  {
    id: 'evt-south-gate-industry',
    year: '1920s',
    title: 'South Gate Chases the "Detroit of the Coast" Vision',
    desc: 'Neighboring South Gate abandons its early rural marketing and actively lures heavy industry, with boosters aiming to make the working-class suburb a manufacturing hub. Industrial realtor R.C. Mason is credited with bringing 19 factories — including General Motors, Firestone, Rheem, and Purex — while Hugh Pomeroy, a South Gate resident on the LA County Regional Planning Commission, helps promote the strategy. The pitch rests on rail access, a non-unionized labor force, low utility costs, and cheap land just outside city limits — the same manufacturing-economy bet that industrializes Compton and later leaves both cities exposed to deindustrialization.',
    tags: ['Industry', 'Places'],
    era: '1920-1940',
    slug: 'south-gate-detroit-of-coast',
    type: 'event',
    sections: [
      {
        heading: 'The Four Advantages of the "Detroit of the Coast"',
        text: 'By the 1920s, South Gate abandoned its rural rhetoric and actively lured heavy industry. The industrial pitch rested on four advantages: rail access with four Southern Pacific and Union Pacific "team tracks"; proximity to a white, non-unionized labor force described as "100 per cent American"; low utility costs; and cheap undeveloped land just outside incorporated boundaries. Industrial realtor R.C. Mason was credited with bringing 19 factories — including General Motors, Firestone, Rheem, and Purex — and Hugh Pomeroy, a South Gate resident on the LA County Regional Planning Commission, helped promote the strategy.',
      },
      {
        heading: 'The Same Bet Compton Made',
        text: 'Nicolaides shows this industrial strategy created jobs but also committed South Gate — and by extension Compton — to a manufacturing economy that would later deindustrialize. The factories anchored a white middle-class community of single-family homes, but they also concentrated the region\'s economic fate in industries that would relocate or close in the 1970s and 1980s, leaving both cities exposed.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Lindt-Wilson_Motors_Inc.%2C_South_Gate_Ford_Dealer_%2883663%29.jpg/960px-Lindt-Wilson_Motors_Inc.%2C_South_Gate_Ford_Dealer_%2883663%29.jpg',
        caption: 'Lindt-Wilson Motors, a South Gate Ford dealership — period postcard from the industrial-suburb era',
        credit: 'Tichnor Brothers, public domain, via Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Lindt-Wilson_Motors_Inc.,_South_Gate_Ford_Dealer_(83663).jpg',
      },
    ],
    sources: [
      'Nicolaides, "My Blue Heaven: Life and Politics in the Working-Class Suburbs of Los Angeles, 1920-1965" (2002)',
    ],
  },

  {
    id: 'evt-5',
    year: '1923',
    title: 'Dominguez Oil Field Discovery',
    desc: 'The Dominguez Oil Field is discovered, becoming one of several major LA Basin fields that transform the regional economy. Compton sees rapid industrialization as refineries and related industries locate nearby, accelerating its transition from farming community to industrial suburb.',
    tags: ['Oil', 'Industry'],
    era: '1920-1940',
    slug: 'dominguez-oil-field',
    type: 'event',
    sections: [
      {
        heading: 'A Regional Transformation',
        text: 'The Dominguez Oil Field, discovered in 1923, was one of several major LA Basin fields that transformed the regional economy. Compton, adjacent to the Dominguez field, saw rapid industrialization as refineries and related industries located nearby. The oil boom brought workers, speculators, and infrastructure to the area, accelerating Compton\'s transition from farming community to industrial suburb.',
      },
      {
        heading: 'The Industrial Corridor',
        text: 'By the 1920s, southeast Los Angeles County was being rebuilt as a manufacturing corridor. Boosters in neighboring South Gate envisioned a "Detroit of the Coast," and Compton shared in the industrial expansion. The same booster mentality that financed the 1910 Air Meet — spending heavily on speculative ventures — now characterized the oil boom and real estate development that shaped the area, committing it to a manufacturing economy that would later deindustrialize.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Signal_Hill%2C_1926.jpg/960px-Signal_Hill%2C_1926.jpg',
        caption: 'Signal Hill, 1926 — one of the other great LA Basin fields discovered in the same boom as Dominguez',
        credit: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Signal_Hill,_1926.jpg',
      },
    ],
    sources: [
      'Tygiel, "The Great Los Angeles Swindle" (1994)',
      'Nicolaides, "My Blue Heaven" (2002)',
    ],
  },

  {
    id: 'evt-repatriation',
    year: '1930s',
    title: 'Mexican Repatriation Campaigns Target Compton',
    desc: 'During the Great Depression, Mexican Americans in places like Compton face repatriation campaigns that use public health rationales to justify deportation. Despite many being U.S. citizens, they are pressured to leave. This campaign reflects how public health discourse functions as racial gatekeeping, a pattern documented by historian Natalia Molina.',
    tags: ['Race', 'Mexican American', 'Public Health'],
    era: '1920-1940',
    slug: 'mexican-repatriation',
    type: 'event',
    sections: [
      {
        heading: 'Deportation in the Name of Health',
        text: 'During the Great Depression, Mexican Americans in places like Compton faced repatriation campaigns that used public health rationales to justify deportation. Despite many being U.S. citizens, they were pressured to leave — often by health officers whose determinations of "fitness" carried the power to decide who could work, attend school, operate businesses, and remain in the country.',
      },
      {
        heading: 'Public Health as Racial Gatekeeping',
        text: 'Historian Natalia Molina shows that public health policy functioned as a form of racial gatekeeping in Los Angeles, determining who was "fit to be citizens" based on medicalized racial stereotypes. Health officials failed to distinguish between U.S.-born and foreign-born Mexican residents, marking even Californios as permanently "foreign" and suspending them in a "not-yet-American" state. The medicalization of race provided a "scientific" justification for the patterns of residential and educational segregation that defined Compton\'s development.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Mexican_Repatriation%2C_1931.jpg/960px-Mexican_Repatriation%2C_1931.jpg',
        caption: 'Relatives and friends wave goodbye to a train carrying 1,500 people expelled from Los Angeles to Mexico, August 20, 1931',
        credit: 'NY Daily News Archive, public domain, via Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mexican_Repatriation,_1931.jpg',
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Repatriation_from_Los_Angeles.jpg/960px-Repatriation_from_Los_Angeles.jpg',
        caption: 'Mexican men, women, and children await repatriation at the Los Angeles rail station, March 9, 1932',
        credit: 'Security Pacific Historical Collection, CC0, via Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Repatriation_from_Los_Angeles.jpg',
      },
    ],
    sources: [
      'Molina, "Fit to Be Citizens? Public Health and Race in Los Angeles, 1879-1939" (2006)',
    ],
  },

  {
    id: 'evt-6',
    year: '1933',
    title: 'Long Beach Earthquake Destroys Compton Schools',
    desc: 'The 1933 Long Beach earthquake destroys nine of ten elementary schools in Compton, leaving the school district with crippling debt that persists for decades. The debt prevents the district from investing in educational quality during the 1940s-1950s boom years, contributing to the racialized decline narrative that follows.',
    tags: ['Disaster', 'Education', 'Earthquake'],
    era: '1920-1940',
    slug: '1933-earthquake',
    type: 'event',
    sections: [
      {
        heading: 'Nine of Ten Elementary Schools Destroyed',
        text: 'The March 1933 Long Beach earthquake destroyed nine of ten elementary schools in Compton, leaving the district with crippling debt that persisted for decades. The rebuilding burden fell on a community that had already resisted taxation and lacked an industrial or commercial tax base to absorb the shock.',
      },
      {
        heading: 'A Generational Fiscal Shock',
        text: 'Straus argues the earthquake was not just a natural disaster but a generational fiscal shock. The debt prevented the district from investing in educational quality during the 1940s–1950s boom years. When Black families began moving in after Shelley v. Kraemer in 1948, the schools were already financially weakened — a crucial, often-forgotten precondition of the "decline" narrative that would later be blamed on the community itself.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Union_High_School_in_Compton_after_an_earthquake%2C_March_10%2C_1933.jpg/960px-Union_High_School_in_Compton_after_an_earthquake%2C_March_10%2C_1933.jpg',
        caption: 'Union High School in Compton after the earthquake, March 10, 1933',
        credit: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Union_High_School_in_Compton_after_an_earthquake,_March_10,_1933.jpg',
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/1933_Long_Beach_earthquake_damage_1.jpg/960px-1933_Long_Beach_earthquake_damage_1.jpg',
        caption: 'Damage from the 1933 Long Beach earthquake',
        credit: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:1933_Long_Beach_earthquake_damage_1.jpg',
      },
    ],
    sources: [
      'Straus, "Death of a Suburban Dream" (2014)',
    ],
  },

  {
    id: 'evt-highest-tax',
    year: '1939',
    title: 'Compton Has Highest School Tax Rate in California',
    desc: 'By 1939, Compton has the highest school tax rate among large districts in California. The city\'s bedroom-community origins — lacking industrial or commercial revenue — left it with an inadequate tax base to fund services and schools. This structural vulnerability, combined with lingering debt from the 1933 earthquake, sets the stage for decades of fiscal crisis.',
    tags: ['Education', 'Tax', 'Crisis'],
    era: '1920-1940',
    slug: 'highest-school-tax',
    type: 'event',
    sections: [
      {
        heading: 'The Highest Tax Rate, the Weakest Base',
        text: 'By 1939, Compton had the highest school tax rate among large districts in California — yet its schools were chronically underfunded. The paradox was structural: Compton\'s bedroom-community origins meant it lacked the industrial and commercial revenue that funded services in other cities. Residents paid high rates from low property values, and the money still was not enough.',
      },
      {
        heading: 'The Fiscal Trap of the Inner-Ring Suburb',
        text: 'The pattern defined what Straus calls the fiscal trap of the inner-ring suburb: Compton needed high property taxes to fund services because it had no tax base to speak of, but its working-class residents had limited ability to pay more. When wealthier residents later left, the tax base collapsed and the remaining population was even less able to support the city\'s needs. The 2022 State Auditor findings — the city\'s most at-risk ranking — are the endpoint of this structural trap, not merely a result of mismanagement, though mismanagement compounded the problem.',
      },
    ],
    photos: [],
    sources: [
      'Straus, "Death of a Suburban Dream" (2014)',
    ],
  },

  {
    id: 'evt-westinghouse',
    year: '1940s',
    title: 'Compton Becomes the "Industrial Heart of the Southland"',
    desc: 'Compton earns the nickname "Industrial Heart of the California Southland" as major employers like Westinghouse Electric and General Steel Pipe and Supply anchor a white middle-class community of single-family homes with a thriving retail sector, including a Sears and family-owned stores. During World War II, the Park Village housing projects in Compton house white defense workers — in contrast to Watts\' Nickerson Gardens, Imperial Courts, and Jordan Downs, public housing projects built for poor African Americans. The contrast illustrates how federal housing policy maintained racial segregation even within public housing.',
    tags: ['Industry', 'Housing', 'Places'],
    era: '1940-1960',
    slug: 'compton-industrial-heart',
    type: 'event',
    sections: [
      {
        heading: 'The Industrial Heart of the California Southland',
        text: 'By the 1940s, Compton had earned the nickname "Industrial Heart of the California Southland." Major employers like Westinghouse Electric and General Steel Pipe and Supply anchored a white middle-class community of single-family homes, with a thriving retail sector including a Sears and family-owned stores. It was the working-class "blue heaven" of the era: modest homes, steady factory jobs, and local control.',
      },
      {
        heading: 'Public Housing, Segregated by Design',
        text: 'During World War II, the Park Village housing projects in Compton housed white defense workers — in contrast to Watts\' Nickerson Gardens, Imperial Courts, and Jordan Downs, public housing projects built for poor African Americans. This distinction illustrates how federal housing policy maintained racial segregation even within public housing, steering white workers toward Compton and confining Black workers to central Los Angeles — a spatial pattern that the postwar housing market would soon upend.',
      },
    ],
    photos: [],
    sources: [
      'Marshall Jr., "The Los Angeles Domino Effect"',
      'Hunt & Ramon (eds.), "Black Los Angeles" (2010)',
    ],
  },

  {
    id: 'evt-7',
    year: '1941',
    title: 'Willowbrook Maintains Open Segregation Policy',
    desc: 'The Willowbrook School District (unincorporated area feeding into Compton Union) is 80% white, 10% Latino, 10% African American in 1941. By 1949, black students more than double. The district maintains an "open policy of segregation" with inferior opportunities for black students. White residents unsuccessfully try to incorporate the area in 1945-1946 to restrict black migration. The Carver Manor tract of 250 homes is built specifically for black buyers.',
    tags: ['Education', 'Segregation', 'Race'],
    era: '1940-1960',
    slug: 'willowbrook-segregation',
    type: 'event',
    sections: [
      {
        heading: 'An "Open Policy of Segregation"',
        text: 'In 1941, the Willowbrook School District — an unincorporated area feeding into Compton Union — was 80% white, 10% Latino, and 10% African American. By 1949, Black students had more than doubled. The district maintained what the Los Angeles Sentinel called an "open policy of segregation," offering Black students "inferior opportunities."',
      },
      {
        heading: 'Failing to Keep Black Families Out',
        text: 'White residents tried to incorporate the area in 1945–1946 specifically to restrict Black migration, but the attempt failed. The Carver Manor tract of 250 homes was built explicitly for Black buyers — one of the early footholds of Black homeownership in the Compton area, and a sign of the pent-up demand that Shelley v. Kraemer would unleash across the region three years later.',
      },
    ],
    photos: [],
    sources: [
      'Straus, "Death of a Suburban Dream" (2014)',
    ],
  },

  {
    id: 'evt-wwii',
    year: '1942',
    title: 'Firestone War Production Training in Compton Schools',
    desc: 'Firestone Tire and Rubber Company collaborates with Compton Union schools to establish a war production training program during World War II. Initially designed for about 100 young men, it expands to include young women. Through the "Food for Victory" program, students raise victory gardens, sell war bonds, and support the war effort — four schools each sell enough bonds to buy a Jeep. Eighteen teachers at Compton Junior College and High School go on active duty.',
    tags: ['World War II', 'Education', 'Industry'],
    era: '1940-1960',
    slug: 'firestone-war-training',
    type: 'event',
    sections: [
      {
        heading: 'The Firestone Partnership',
        text: 'Firestone Tire and Rubber Company collaborated with Compton Union schools to establish a war production training program during World War II. Initially designed for one summer — about 100 young men working eight-hour factory shifts — it expanded to include young women and split students\' time between school and work. Superintendent O. Scott Thompson called it giving students "one side of education sadly lacking in our schools — firsthand experience for youth on a real job, under real work conditions."',
      },
      {
        heading: '"Food for Victory" and the Student War Effort',
        text: 'Through the "Food for Victory" program, Compton-area junior high students raised victory gardens, fowl, and small animals; canned and preserved produce; and sold war bonds and stamps. In April 1943, four schools each sold enough bonds to buy a Jeep; Mayo School reported the purchase of four Jeeps. Eighteen teachers at Compton Junior College and High School went on active duty, and roughly 700 students left school for war work. The program established a system of reciprocal obligation: citizens contributed to war production, and the federal government subsidized their endeavors.',
      },
    ],
    photos: [],
    sources: [
      'Straus, "Death of a Suburban Dream" (2014), ch. 2',
    ],
  },

  {
    id: 'evt-8',
    year: '1946',
    title: 'First Black Candidate Runs for Willowbrook Board',
    desc: 'An African American runs for the Willowbrook board of trustees for the first time. In February 1947, black students walk out of Compton Junior College during an assembly whose program depicts African Americans stereotypically. These events mark early challenges to racial discrimination in Compton\'s schools.',
    tags: ['Race', 'Politics', 'Education'],
    era: '1940-1960',
    slug: 'first-black-candidate',
    type: 'event',
    sections: [
      {
        heading: 'Early Challenges to Discrimination',
        text: 'In 1946, an African American ran for the Willowbrook board of trustees for the first time — an early challenge to the segregated school system in the Compton area. The following February, Black students walked out of Compton Junior College during an assembly whose program depicted African Americans stereotypically.',
      },
      {
        heading: 'The Schools as Battleground',
        text: 'Straus shows that Compton\'s schools served as the district\'s largest employer and center of political power, making them the battlegrounds for control of community resources. These early protests — a candidacy and a walkout — were the first stirrings of the political transformation that would culminate in Compton electing the first Black mayor of any large city west of the Mississippi in 1969.',
      },
    ],
    photos: [],
    sources: [
      'Straus, "Death of a Suburban Dream" (2014)',
    ],
  },

  {
    id: 'evt-9',
    year: '1948',
    title: 'Shelley v. Kraemer Ends Restrictive Covenants',
    desc: 'The U.S. Supreme Court rules in Shelley v. Kraemer that racially restrictive housing covenants are unconstitutional. This landmark decision opens the door for African American families to move into previously all-white neighborhoods like Compton, triggering a rapid demographic transition.',
    tags: ['Civil Rights', 'Housing', 'Supreme Court'],
    era: '1940-1960',
    slug: 'shelley-v-kraemer',
    type: 'event',
    sections: [
      {
        heading: 'The End of the Covenant System',
        text: 'Compton had enforced racial covenants through the 1940s — deeds restricted Black homeownership, and white homeowners rallied behind the slogan \"Keep the Negroes North of 130th Street.\" In 1948, the U.S. Supreme Court ruled in Shelley v. Kraemer that state courts could not enforce racially restrictive covenants, gutting the legal machinery that kept Black families out of white neighborhoods.',
      },
      {
        heading: 'The Door Opens',
        text: 'The decision opened the door for African American families to move into previously all-white neighborhoods like Compton, triggering a rapid demographic transition. Pent-up demand from the Great Migration era and the wartime housing squeeze meant the movement was not slow — within two decades Compton went from a white working-class suburb to a city with a Black majority and a Black mayor.',
      },
    ],
    photos: [],
    sources: [
      'Straus, "Death of a Suburban Dream" (2014)',
      'Marshall Jr., "The Los Angeles Domino Effect"',
    ],
  },

  {
    id: 'evt-overcrowding',
    year: '1949',
    title: 'Postwar School Overcrowding Crisis',
    desc: 'Compton Union School District faces a severe overcrowding crisis after the war. Serving 25+ square miles with a population exceeding 160,000 (third largest in the county), the district runs 24 double-session classes. Washington Elementary, built for 550 students, enrolls 1,350. Superintendent Ardella Tibby testifies: "There were acres of vegetables, but now — in their place — we have acres of children." Between 1940-1950, Compton Union has the greatest population increase of any California district.',
    tags: ['Education', 'Overcrowding', 'Postwar'],
    era: '1940-1960',
    slug: 'school-overcrowding',
    type: 'event',
    sections: [
      {
        heading: '"Acres of Children"',
        text: 'After the war, Compton Union served more than 25 square miles with a population exceeding 160,000 — the third largest district in the county after Los Angeles and Long Beach. By 1949, the Enterprise district alone ran 24 double-session classes. Washington Elementary, built for 550 students, enrolled 1,350. Superintendent Ardella Tibby testified: "There were acres of vegetables, but now — in their place — we have acres of children."',
      },
      {
        heading: 'The Greatest Population Increase in California',
        text: 'Between 1940 and 1950, Compton Union had the greatest population increase of any California school district. The boom was a double-edged sword: it reflected the industrial prosperity of the postwar suburb, but it strained a district already weakened by earthquake debt and a thin tax base — exactly the combination that would buckle under the pressures of the coming decade.',
      },
    ],
    photos: [],
    sources: [
      'Straus, "Death of a Suburban Dream" (2014), ch. 2',
    ],
  },

  {
    id: 'evt-10',
    year: '1950',
    title: 'Lynwood Secedes from Compton Unified',
    desc: 'Lynwood residents, resenting "being attached to Compton\'s coat tails," vote to withdraw from Compton Union School District and create their own unified district. The split is hostile: Compton Union strips the jointly-used Lynwood junior high of its furnishings. Paramount follows suit in 1953. Each secession deprives Compton Union of higher-assessed-valuation territory, worsening the district\'s fiscal position.',
    tags: ['Education', 'Secession', 'Politics'],
    era: '1940-1960',
    slug: 'lynwood-secession',
    type: 'event',
    sections: [
      {
        heading: '"Attached to Compton\'s Coat Tails"',
        text: 'Lynwood residents resented "being attached to Compton\'s coat tails," according to longtime resident J. Jack Willard. In July 1950, they voted to withdraw from Compton Union and create their own unified district. At secession, Lynwood was roughly 3.5 square miles with more than 26,000 residents. The split was hostile: Compton Union stripped the jointly used Lynwood junior high of its furnishings, forcing Lynwood to raise taxes to refurbish it.',
      },
      {
        heading: 'The Secession Dynamic',
        text: 'Each secession deprived Compton Union of higher-assessed-valuation territory, worsening the district\'s fiscal position. Lynwood\'s withdrawal and Paramount\'s follow-up in 1953 established a pattern Straus and Marshall both identify: predominantly white areas separated themselves from poorer or more racially diverse communities to protect their tax base and school quality — each secession weakening the remaining district in a downward spiral.',
      },
    ],
    photos: [],
    sources: [
      'Straus, "Death of a Suburban Dream" (2014), ch. 2',
    ],
  },

  {
    id: 'evt-paramount',
    year: '1953',
    title: 'Paramount Secedes from Compton Unified',
    desc: 'Paramount follows Lynwood\'s lead and secedes from Compton Union School District. This second secession within three years further deprives Compton Union of higher-assessed-valuation territory, worsening the district\'s fiscal position and establishing a pattern of tax-base fragmentation.',
    tags: ['Education', 'Secession', 'Politics'],
    era: '1940-1960',
    slug: 'paramount-secession',
    type: 'event',
    sections: [
      {
        heading: 'The Second Secession',
        text: 'Paramount followed Lynwood\'s lead in 1953 and seceded from Compton Union School District. The second secession within three years further deprived Compton Union of higher-assessed-valuation territory, worsening the district\'s fiscal position.',
      },
      {
        heading: 'Tax-Base Fragmentation',
        text: 'The pattern of tax-base fragmentation — wealthier enclaves extracting themselves from the district — directly undercut Compton Union\'s ability to fund its schools. Combined with earthquake debt and the postwar overcrowding crisis, the secessions left the district structurally incapable of supporting the educational quality its reputation had once promised.',
      },
    ],
    photos: [],
    sources: [
      'Straus, "Death of a Suburban Dream" (2014)',
    ],
  },

  {
    id: 'evt-11',
    year: '1965',
    title: 'Watts Rebellion Accelerates White Flight',
    desc: 'The Watts Rebellion, a major civil disturbance in the neighboring Watts neighborhood, dramatically accelerates white flight from Compton. White families flee to outlying suburbs, and the city\'s demographic transformation rapidly advances. The rebellion marks a turning point in Compton\'s racial transition from white working-class suburb to black middle-class suburb.',
    tags: ['Race', 'Civil Rights', 'Riots'],
    era: '1960-1980',
    slug: 'watts-rebellion',
    type: 'event',
    sections: [
      {
        heading: 'A Turning Point',
        text: 'In August 1965, six days of uprising in the neighboring Watts neighborhood — sparked by a police traffic stop, fueled by years of housing discrimination, police brutality, and unemployment — marked a turning point for Compton. White flight, which had been gradual through the late 1950s and early 1960s, accelerated dramatically as white families fled to outlying suburbs.',
      },
      {
        heading: 'From White Suburb to Black Middle-Class Suburb',
        text: 'The rebellion accelerated Compton\'s racial transition from white working-class suburb to Black middle-class suburb. Black families — many of them working-class, both spouses employed, buying their first homes — moved in and saw Compton as a step up from Watts itself. But the white flight also drained the city of its retail base and much of its tax capacity, beginning the fiscal spiral that would define the next half century.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Watts_Riots_-_buildings_on_fire_on_Avalon_Blvd.jpg/960px-Watts_Riots_-_buildings_on_fire_on_Avalon_Blvd.jpg',
        caption: 'Buildings on fire on Avalon Boulevard during the Watts Rebellion, 1965',
        credit: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Watts_Riots_-_buildings_on_fire_on_Avalon_Blvd.jpg',
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Wattsriots-burningbuildings-loc.jpg/960px-Wattsriots-burningbuildings-loc.jpg',
        caption: 'Burning buildings during the Watts Rebellion, 1965',
        credit: 'Library of Congress via Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Wattsriots-burningbuildings-loc.jpg',
      },
    ],
    sources: [
      'Straus, "Death of a Suburban Dream" (2014)',
      'Nicolaides, "My Blue Heaven" (2002)',
    ],
  },

  {
    id: 'evt-12',
    year: '1968',
    title: 'Carson Incorporates to Avoid Low-Income Housing',
    desc: 'Carson incorporates as a city specifically to avoid the fate of neighboring communities. By refusing to build low-income housing, Carson draws black middle-class families away from Compton. This "municipal incorporation as middle-class flight" strategy parallels the earlier secessions of Lynwood and Paramount from the Compton school district.',
    tags: ['Politics', 'Housing', 'Race'],
    era: '1960-1980',
    slug: 'carson-incorporation',
    type: 'event',
    sections: [
      {
        heading: 'Incorporation as Exit Strategy',
        text: 'In 1968, Carson incorporated as a city specifically to avoid the fate of neighboring communities. By refusing to build low-income housing, Carson drew Black middle-class families away from Compton. The strategy — municipal incorporation as middle-class flight — directly paralleled the earlier secessions of Lynwood and Paramount from the Compton school district: each time, the economically stronger population extracted itself, leaving the remaining community weaker.',
      },
      {
        heading: 'The Domino Effect',
        text: 'Marshall\'s "domino effect" analysis shows how this process unfolded in waves: the first wave of Black residents moved into Compton from Watts in the 1960s; the second wave of Black middle-class families left Compton for Carson and other new suburbs in the 1970s and 1980s. Compton\'s remaining Black population grew increasingly poor and disconnected from economic opportunity.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Carson_city_hall.jpg/960px-Carson_city_hall.jpg',
        caption: 'Carson City Hall — Carson incorporated in 1968 partly to avoid building low-income housing',
        credit: 'The Front Page Online, CC BY-SA 4.0, via Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Carson_city_hall.jpg',
      },
    ],
    sources: [
      'Marshall Jr., "The Los Angeles Domino Effect"',
      'Straus, "Death of a Suburban Dream" (2014)',
    ],
  },

  {
    id: 'evt-13',
    year: '1969',
    title: 'Compton Elects First Black Mayor',
    desc: 'Compton becomes the largest city west of the Mississippi River to elect a black mayor, Douglas Dollarhide. This milestone reflects the city\'s rapid demographic transformation from white working-class suburb to black middle-class suburb.',
    tags: ['Politics', 'Race', 'Milestone'],
    era: '1960-1980',
    slug: 'first-black-mayor',
    type: 'event',
    sections: [
      {
        heading: 'A Historic Election',
        text: 'In 1969, Compton elected Douglas Dollarhide as its first Black mayor — becoming the largest city west of the Mississippi River to do so. The election marked the completion of a transformation that had taken barely two decades: from a white working-class suburb that enforced racial covenants to a Black-majority city with Black political power.',
      },
      {
        heading: 'The Schools as Political Power Base',
        text: 'Straus notes that Black political power in Compton was built substantially through the school district — the city\'s largest employer and the center of community resources. The 1969 election was both a milestone of Black achievement and the beginning of a new chapter in which the city\'s residents would fight to control schools, finances, and services with a tax base already in decline.',
      },
    ],
    photos: [],
    sources: [
      'Straus, "Death of a Suburban Dream" (2014)',
    ],
  },

  {
    id: 'evt-black-flight',
    year: '1970s',
    title: 'Black Middle-Class Flight from Compton Begins',
    desc: 'Middle-class African Americans begin leaving Compton for newly incorporated cities like Carson that refuse to build low-income housing. Compton\'s remaining black population grows increasingly poor and disconnected from economic opportunity. Deindustrialization accelerates job losses as factories close, and the city\'s tax base continues to erode.',
    tags: ['Race', 'Housing', 'Economy'],
    era: '1960-1980',
    slug: 'black-middle-class-flight',
    type: 'event',
    sections: [
      {
        heading: 'A Class-Stratified Migration',
        text: 'Marshall\'s analysis shows the Black migration to Compton was class-stratified from the start. The first wave of Black residents were working-class families — often with both spouses working — who saw Compton as a step up from Watts but a step below Leimert Park. The second wave, in the 1970s and 1980s, were middle-class families who left for Carson and other new suburbs that refused to build low-income housing.',
      },
      {
        heading: 'Wives\' Work and Economic Vulnerability',
        text: 'The key class distinction between Compton and Leimert Park was the occupation of women: Leimert Park wives worked in professional and managerial positions, while Compton wives worked as service workers and industrial operatives. This meant Compton families were more economically vulnerable to deindustrialization and had fewer resources to buffer against fiscal crisis. As factories closed in the 1970s and 1980s, Compton\'s tax base eroded and its remaining population grew poorer and more disconnected from economic opportunity.',
      },
      {
        heading: 'Black Compton in the Early 1970s',
        text: 'Even as the middle class began to leave, early-1970s Compton was home to a vibrant Black cultural scene. The Compton Communicative Arts Academy — based at the Arena on 119 East Magnolia Street — ran art classes, performances, festivals, and community programs, and its photographers documented Black life in the city in hundreds of images now preserved in the CCAA archive. The photographs capture the community\'s institutions and everyday life at the moment its fortunes began to turn.',
      },
    ],
    photos: [
      {
        src: 'https://calisphere.org/clip/500x500/4891/d76942617a98f9ea56e483ae98d03c3a',
        caption: 'Black culture festival talent night at the Compton Communicative Arts Academy, early 1970s',
        credit: 'Compton Communicative Arts Academy Collection, Calisphere / CSULA Library',
        sourceUrl: 'https://calisphere.org/item/ark:/13030/kt467nd275/',
      },
      {
        src: 'https://calisphere.org/clip/500x500/4891/7985ed6d5e1473b3558440e91bc58660',
        caption: 'Boxing match with an audience in the Arena, 119 East Magnolia Street, Compton, early 1970s',
        credit: 'Compton Communicative Arts Academy Collection, Calisphere / CSULA Library',
        sourceUrl: 'https://calisphere.org/item/ark:/13030/kt6z09r2n8/',
      },
      {
        src: 'https://calisphere.org/clip/500x500/4891/6c742131f73c8b6712c436ed688bde1d',
        caption: 'Arvis Ford and John Outterbridge outside the Arena: 119 East Magnolia Street, Compton, 1970–1976',
        credit: 'Compton Communicative Arts Academy Collection, Calisphere / CSULA Library',
        sourceUrl: 'https://calisphere.org/item/ark:/13030/kt109nc9h0/',
      },
      {
        src: 'https://calisphere.org/clip/500x500/4891/bdeecba4263abf0d903d31a89f2a7db8',
        caption: 'An artist painting a mural for the Compton Communicative Arts Academy, early 1970s',
        credit: 'Compton Communicative Arts Academy Collection, Calisphere / CSULA Library',
        sourceUrl: 'https://calisphere.org/item/ark:/13030/kt809nd7wb/',
      },
      {
        src: 'https://calisphere.org/clip/500x500/4891/f04c838d3618bc907bc22a331e9fffd1',
        caption: 'Arts and crafts at Happening House, a Compton Communicative Arts Academy program, early 1970s',
        credit: 'Compton Communicative Arts Academy Collection, Calisphere / CSULA Library',
        sourceUrl: 'https://calisphere.org/item/ark:/13030/kt2199q7gh/',
      },
    ],
    sources: [
      'Marshall Jr., "The Los Angeles Domino Effect"',
      'Compton Communicative Arts Academy Collection, Calisphere',
    ],
  },

  {
    id: 'evt-crack',
    year: '1980s',
    title: 'Crack Epidemic and Gang Violence Surge',
    desc: 'The crack cocaine epidemic and surge in street gang violence devastate Compton. Industrial job losses compound the crisis as factories close. The city becomes synonymous in popular culture with violent crime, a reputation cemented by NWA\'s "Straight Outta Compton" (1988) and John Singleton\'s "Boyz n the Hood" (1991). Compton\'s murder rate spikes during this period.',
    tags: ['Crack', 'Gangs', 'Violence'],
    era: '1980-2000',
    slug: 'crack-epidemic-gang-violence',
    type: 'event',
    sections: [
      {
        heading: 'Devastation and Deindustrialization',
        text: 'The crack cocaine epidemic and a surge in street gang violence devastated Compton in the 1980s. Industrial job losses compounded the crisis as factories closed — the endpoint of the manufacturing economy that the "Industrial Heart of the Southland" had bet everything on. Compton\'s murder rate spiked during this period, and the city\'s remaining institutions — schools, city government, retail — strained under the combined weight of violence, poverty, and fiscal collapse.',
      },
      {
        heading: 'A Reputation Cemented in Popular Culture',
        text: 'The city became synonymous in popular culture with violent crime, a reputation cemented by NWA\'s "Straight Outta Compton" (1988) and John Singleton\'s "Boyz n the Hood" (1991). These works brought Compton\'s streets into the national consciousness — and, as historians note, also flattened the city\'s complexity into a single image of crisis, obscuring the substantial Black middle class and the Latino community living through the same years.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Compton_Car_Wash%2C_Rosecrans_Avenue%2C_Compton%2C_California_LOC_37579385954.jpg/960px-Compton_Car_Wash%2C_Rosecrans_Avenue%2C_Compton%2C_California_LOC_37579385954.jpg',
        caption: 'Compton Car Wash on Rosecrans Avenue, 1981 — John Margolies\' roadside America photograph',
        credit: 'John Margolies / Library of Congress, via Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Compton_Car_Wash,_Rosecrans_Avenue,_Compton,_California_LOC_37579385954.jpg',
      },
    ],
    sources: [
      'Hunt & Ramon (eds.), "Black Los Angeles" (2010)',
      'Straus, "Death of a Suburban Dream" (2014)',
    ],
  },

  {
    id: 'evt-14',
    year: '1988',
    title: 'NWA Releases "Straight Outta Compton"',
    desc: 'The pioneering rap group NWA (Eazy-E, Dr. Dre, Ice Cube, MC Ren, DJ Yella) releases their groundbreaking album "Straight Outta Compton." The album\'s raw depiction of life in Compton brings national and international attention to the city, cementing its image in popular culture as a center of gang violence and police tension.',
    tags: ['Music', 'Culture', 'NWA'],
    era: '1980-2000',
    slug: 'nwa-straight-outta-compton',
    type: 'event',
    sections: [
      {
        heading: 'The Album That Put Compton on the Map',
        text: 'In 1988, NWA — Eazy-E, Dr. Dre, Ice Cube, MC Ren, and DJ Yella — released "Straight Outta Compton," a raw, unflinching depiction of street life, police violence, and survival in the city. The album pioneered gangsta rap and brought national and international attention to Compton, forever linking the city\'s name with the genre and its imagery.',
      },
      {
        heading: 'Representation and Its Limits',
        text: 'The album gave voice to a reality that Compton\'s residents lived daily — police harassment, poverty, and gang violence — and made stars of its Compton-raised members. But the global image it cemented also worked to obscure the city\'s complexity, a tension historians and residents alike have wrestled with ever since. Whatever the debates, "Straight Outta Compton" is one of the most consequential cultural artifacts the city has produced.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/MC_Ren_of_NWA_Los_Angeles_1990_photographed_by_Ithaka_Darin_Pappas.jpg/960px-MC_Ren_of_NWA_Los_Angeles_1990_photographed_by_Ithaka_Darin_Pappas.jpg',
        caption: 'MC Ren of NWA in Los Angeles, 1990',
        credit: 'Ithaka Darin Pappas via Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:MC_Ren_of_NWA_Los_Angeles_1990_photographed_by_Ithaka_Darin_Pappas.jpg',
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/NWA-Logo.png/960px-NWA-Logo.png',
        caption: 'NWA logo',
        credit: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:NWA-Logo.png',
      },
    ],
    sources: [
      'Hunt & Ramon (eds.), "Black Los Angeles" (2010)',
    ],
  },

  {
    id: 'evt-latino',
    year: '1990s',
    title: 'Compton Becomes Majority Latino',
    desc: 'Large-scale Latino immigration transforms Compton, making it a majority-Latino city by the end of the 1990s. This third major demographic transition creates new inter-ethnic dynamics as African American and Latino residents compete for limited resources in schools, housing, and jobs. Albert Camarillo\'s memoir later documents this transition from the perspective of the city\'s long-standing Mexican American community.',
    tags: ['Demographics', 'Latino', 'Immigration'],
    era: '1980-2000',
    slug: 'latino-majority',
    type: 'event',
    sections: [
      {
        heading: 'The Third Demographic Transition',
        text: 'Large-scale Latino immigration transformed Compton in the 1990s, making it a majority-Latino city by the end of the decade. It was the city\'s third major demographic transition — from white working-class suburb to Black-majority city to Latino-majority city — and it created new inter-ethnic dynamics as African American and Latino residents competed for limited resources in schools, housing, and jobs.',
      },
      {
        heading: 'A Community With Deep Roots',
        text: 'Compton\'s Mexican American community was not new — Albert Camarillo grew up in the city\'s Mexican barrio in the 1950s and 1960s, when Mexican Americans were counted as "white" by the census yet subject to de facto segregation. His 2024 memoir, "Compton in My Soul," documents how the Latino population navigated the city\'s changing racial landscape and the inter-ethnic dynamics — both conflict and cooperation — of the 1990s transition.',
      },
    ],
    photos: [],
    sources: [
      'Camarillo, "Compton in My Soul: A Life in Pursuit of Racial Equality" (2024)',
      'Straus, "Death of a Suburban Dream" (2014)',
    ],
  },

  {
    id: 'evt-15',
    year: '1991',
    title: '"Boyz n the Hood" Released',
    desc: 'John Singleton\'s film "Boyz n the Hood" is released, depicting life in South Central Los Angeles. The film is nominated for two Academy Awards including Best Director (Singleton became the youngest nominee and first African American nominated for Best Director). The film further cements Compton\'s image in the national consciousness.',
    tags: ['Film', 'Culture'],
    era: '1980-2000',
    slug: 'boyz-n-the-hood',
    type: 'event',
    sections: [
      {
        heading: 'A Landmark in American Film',
        text: 'John Singleton\'s "Boyz n the Hood" (1991) depicted life in South Central Los Angeles with a depth rarely afforded to Black working-class communities on screen. The film was nominated for two Academy Awards including Best Director — making Singleton the youngest nominee and the first African American ever nominated for Best Director.',
      },
      {
        heading: 'Cementing the Image',
        text: 'Together with NWA\'s music, the film further cemented Compton\'s image in the national consciousness. It also captured the generation that came of age during the crack epidemic — the young people navigating violence, poverty, and the struggle to get out — and remains the most famous cinematic representation of the city.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/John_Singleton_2013.jpg/960px-John_Singleton_2013.jpg',
        caption: 'John Singleton at a 2013 event celebrating his body of work, including "Boyz n the Hood" (1991)',
        credit: 'George Pimentel / Canadian Film Centre, CC BY 2.0, via Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:John_Singleton_2013.jpg',
      },
    ],
    sources: [
      'Hunt & Ramon (eds.), "Black Los Angeles" (2010)',
    ],
  },

  {
    id: 'evt-16',
    year: '1993',
    title: 'State Takeover of Compton Unified School District',
    desc: 'Compton Unified becomes the first California school district taken over by the state for both financial and academic failure. The district has the worst test scores in the state and the lowest-paid teachers in Los Angeles County. State control lasts until 2001. The takeover marks the culmination of decades of fiscal crisis rooted in Compton\'s inadequate tax base.',
    tags: ['Education', 'State Takeover', 'Crisis'],
    era: '1980-2000',
    slug: 'school-district-takeover',
    type: 'event',
    sections: [
      {
        heading: 'The First Takeover of Its Kind',
        text: 'In 1993, Compton Unified became the first California school district taken over by the state for both financial and academic failure. The district had the worst test scores in the state and the lowest-paid teachers in Los Angeles County. State control lasted until 2001.',
      },
      {
        heading: 'The Culmination of a Century of Fiscal Crisis',
        text: 'The takeover marked the culmination of decades of fiscal crisis rooted in Compton\'s inadequate tax base: earthquake debt from 1933, secessions by Lynwood and Paramount that stripped the district of its wealthiest territory, postwar overcrowding, and the collapse of the industrial economy. As Straus argues, the educational crisis was "not at heart a crisis of schooling" but "a long-term crisis of suburban development."',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/ComptonHS-1912.jpg/960px-ComptonHS-1912.jpg',
        caption: 'Compton High School\'s original building, 1912',
        credit: 'Los Angeles Public Library, public domain, via Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:ComptonHS-1912.jpg',
      },
    ],
    sources: [
      'Straus, "Death of a Suburban Dream" (2014)',
    ],
  },

  {
    id: 'evt-baldwin-hills',
    year: '2000',
    title: 'Baldwin Hills Stands as Black LA\'s Wealthiest Enclave',
    desc: 'While Compton grapples with fiscal crisis, Baldwin Hills and Ladera Heights emerge as symbols of black affluence in Los Angeles: the 90008 and 90043 zip codes are 78.5% and 72.4% black in the 2000 census with the county\'s highest black incomes, and Ladera Heights posts a median household income of $103,174 — more than twice the national median. The contrast underscores how class stratification within black Los Angeles produced sharply divergent outcomes for communities that shared a common migration history.',
    tags: ['Race', 'African American', 'Places'],
    era: '2000-present',
    slug: 'baldwin-hills-black-affluence',
    type: 'event',
    sections: [
      {
        heading: 'The Other Black LA',
        text: 'While Compton grappled with fiscal crisis, Baldwin Hills and Ladera Heights emerged as symbols of Black affluence in Los Angeles. In the 2000 census, the 90008 and 90043 zip codes were 78.5% and 72.4% Black, with the county\'s highest Black incomes; Ladera Heights posted a median household income of $103,174 — more than twice the national median.',
      },
      {
        heading: 'Class Stratification in Black Los Angeles',
        text: 'The contrast underscores how class stratification within Black Los Angeles produced sharply divergent outcomes for communities that shared a common migration history. Marshall\'s analysis traces the split to the beginning: Compton\'s Black families worked as service workers and industrial operatives, while the families that settled Leimert Park and the hills worked in professional and managerial positions — a difference in occupations, wives\' work, and resources that compounded over generations.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Downtown_Los_Angeles_from_Baldwin_Hills%2C_1988.jpg/960px-Downtown_Los_Angeles_from_Baldwin_Hills%2C_1988.jpg',
        caption: 'Downtown Los Angeles viewed from Baldwin Hills, 1988',
        credit: 'George R. Fry / Los Angeles Times, CC BY 4.0, via Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Downtown_Los_Angeles_from_Baldwin_Hills,_1988.jpg',
      },
    ],
    sources: [
      'Hunt & Ramon (eds.), "Black Los Angeles" (2010), ch. 1',
      'Marshall Jr., "The Los Angeles Domino Effect"',
    ],
  },


  {
    id: 'evt-17',
    year: '2010',
    title: 'First "Parent Trigger" Law Used at McKinley Elementary',
    desc: 'Parents at McKinley Elementary School in Compton invoke California\'s first "parent trigger" law, demanding a charter conversion — the first use of such a law in the United States. The law allows parents to force changes at persistently failing schools by collecting signatures from a majority of parents.',
    tags: ['Education', 'Parent Trigger', 'Charter Schools'],
    era: '2000-present',
    slug: 'parent-trigger-law',
    type: 'event',
    sections: [
      {
        heading: 'A National First',
        text: 'In 2010, parents at McKinley Elementary School in Compton invoked California\'s first "parent trigger" law — demanding a charter conversion in the first use of such a law in the United States. The law allows parents at persistently failing schools to force changes — including charter conversion, staff replacement, or school closure — by collecting signatures from a majority of parents.',
      },
      {
        heading: 'Contested Reform',
        text: 'The McKinley case became a national flashpoint in the charter school debate, celebrated by reformers and contested by critics. Straus\'s account places it within the longer arc of Compton\'s educational history: a community fighting, generation after generation, for control of its schools in a district long buffeted by forces it could not control.',
      },
    ],
    photos: [],
    sources: [
      'Straus, "Death of a Suburban Dream" (2014)',
    ],
  },

  {
    id: 'evt-embezzlement',
    year: '2016',
    title: 'Deputy Treasurer Embezzles $3.7 Million from Compton',
    desc: 'A former deputy treasurer is discovered to have embezzled $3.7 million from the city between 2010 and 2016. The crime was possible due to virtually nonexistent financial controls in the city government. The embezzlement exemplifies the systemic fiscal mismanagement that would later be detailed in the 2022 State Auditor report.',
    tags: ['Government', 'Corruption', 'Finance'],
    era: '2000-present',
    slug: 'deputy-treasurer-embezzlement',
    type: 'event',
    sections: [
      {
        heading: 'Six Years of Theft',
        text: 'Between 2010 and 2016, a former deputy treasurer embezzled $3.7 million from the city of Compton. The crime was possible because the city\'s financial controls were virtually nonexistent — no effective separation of duties, no meaningful oversight, no system to catch it.',
      },
      {
        heading: 'The Human Cost of Broken Controls',
        text: 'The embezzlement came out of a city already struggling to pay for basic services. It exemplifies the systemic fiscal mismanagement that the California State Auditor would document in 2022: undated policies, an unfilled procurement officer role, budgets with unacknowledged errors, and funds borrowed between departments and never repaid.',
      },
    ],
    photos: [],
    sources: [
      'California State Auditor, City of Compton Financial Mismanagement Report (2021-802, 2022)',
    ],
  },

  {
    id: 'evt-18',
    year: '2016',
    title: 'Measure P Sales Tax Passes',
    desc: 'Compton voters approve Measure P, a sales tax increase intended to fund street repairs. The measure generates roughly $12–15 million annually (about $15 million in peak years). However, by 2022, over $23 million in unspent Measure P revenues accumulate due to poor budgeting, and the citizen oversight committee required by the measure has not convened since 2020.',
    tags: ['Tax', 'Infrastructure', 'Government'],
    era: '2000-present',
    slug: 'measure-p',
    type: 'event',
    sections: [
      {
        heading: 'A Tax for the Streets',
        text: 'In 2016, Compton voters approved Measure P, a sales tax increase intended to fund street repairs. The measure generates roughly $12–15 million annually — a significant sum for a city where half of all streets are in poor or very poor condition.',
      },
      {
        heading: 'The Money That Sat Unspent',
        text: 'By 2022, over $23 million in unspent Measure P revenues had accumulated due to poor budgeting. The citizen oversight committee required by the measure had not convened since 2020. In a bitter irony, the city used $1 million of Measure P funds to pay pothole-related legal claims — the very road damage the tax was meant to fix had generated litigation that consumed some of the revenue.',
      },
    ],
    photos: [],
    sources: [
      'California State Auditor, City of Compton Financial Mismanagement Report (2021-802, 2022)',
    ],
  },

  {
    id: 'evt-19',
    year: '2022',
    title: 'State Auditor Ranks Compton Most At-Risk City in California',
    desc: 'The California State Auditor report ranks Compton as the most financially at-risk city in California. Key findings include: six city managers in six fiscal years, half of streets in poor condition, decaying water infrastructure, failure to complete court-ordered sewer projects, a $3.7 million embezzlement, and nearly $29 million borrowed from city funds that remains unpaid. The report warns the Legislature should consider imposing external oversight if challenges are not addressed within three years.',
    tags: ['Government', 'Crisis', 'Audit'],
    era: '2000-present',
    slug: 'state-auditor-report',
    type: 'event',
    sections: [
      {
        heading: 'The Most At-Risk City in California',
        text: 'Since October 2019, the California State Auditor\'s local high-risk dashboard has ranked Compton as the most financially at-risk city in California. The October 2022 report (2021-802) documented the scale of the crisis: six city managers in six fiscal years; half of the city\'s streets in poor or very poor condition; water wells dating to the 1940s and 1950s with two of eight inactive; three of five court-ordered sewer projects from a 2016 consent judgment unfinished; a $3.7 million embezzlement; and nearly $29 million borrowed from the city\'s own funds that remains unpaid.',
      },
      {
        heading: 'A Decade Without Audited Books',
        text: 'The city has not produced timely, complete audited financial statements for over a decade; for multiple fiscal years, no statements existed at all. Despite receiving roughly $12–15 million annually from Measure P and over $34 million in federal American Rescue Plan Act funds, unspent balances of about $41 million (spanning Measure P and ARPA funds combined) accumulated due to poor budgeting — while infrastructure repairs are estimated to cost well over $100 million.',
      },
      {
        heading: 'The Endpoint of a Structural Trap',
        text: 'The report warns the Legislature should consider imposing ongoing external oversight if Compton cannot address its challenges within three years. But as Straus\'s work makes clear, the 2022 findings are the endpoint of a structural trap — a bedroom community with no tax base, weakened by secessions, earthquake debt, and deindustrialization — compounded by decades of mismanagement.',
      },
    ],
    photos: [],
    sources: [
      'California State Auditor, City of Compton Financial Mismanagement Report (Report 2021-802, October 2022)',
      'Straus, "Death of a Suburban Dream" (2014)',
    ],
  },

  {
    id: 'evt-audit-detail',
    year: '2022',
    title: 'Audit Details Fire Overtime, Frozen Fees, and Vendor Disputes',
    desc: 'Beyond its headline ranking, the State Auditor report details specific governance failures: the fire department overspent its overtime budget by 51% ($16.3 million against $10.8 million budgeted) with no policy to evaluate whether hiring more firefighters would be cheaper. Water, sewer, and business-license fees have not been updated since 2009-2017, costing the general fund an estimated $900,000 and the water fund over $1 million in lost revenue. A 2019 garbage vendor dispute over $1.6 million in undercharged customers forced the city to borrow from its own equipment rental fund to make the final payment. A $10 million discrepancy in the FY2021-22 budget went uncorrected until the city council acknowledged the errors in June 2022. The charter\'s required centralized purchasing system and procurement officer were never effectively implemented.',
    tags: ['Government', 'Crisis', 'Audit'],
    era: '2000-present',
    slug: 'audit-fire-overtime-vendor-disputes',
    type: 'event',
    sections: [
      {
        heading: 'Fire Overtime: 51% Over Budget',
        text: 'From FY2017-18 through March 2022, Compton budgeted $10.8 million for fire department overtime but spent $16.3 million — a 51% overspend — with no policy for determining appropriate overtime levels. The fire chief could not provide analysis comparing overtime costs to hiring additional firefighters, and the auditor noted the city may need more firefighters but lacks the fiscal planning to decide.',
      },
      {
        heading: 'Fees Frozen for a Decade',
        text: 'Water usage charges had not increased since 2014; sewer charges had not been updated since at least 2009; building permit and business license fees were last updated in October 2017. If charges had kept pace with inflation, Compton could have collected more than $900,000 in additional general fund revenue and over $1 million in water fund revenue from FY2017-18 through 2021.',
      },
      {
        heading: 'Vendor Disputes, Budget Errors, Missing Controls',
        text: 'A July 2019 garbage vendor agreement showed the vendor claimed Compton owed $1.6 million because the city had undercharged customers and failed to compensate the vendor for delinquent accounts; to make the final $1.2 million payment in 2022, the city borrowed from its own equipment rental fund. The FY2021-22 budget contained a $10 million discrepancy between the citywide summary and the departmental detail for community development, acknowledged only in a June 2022 council resolution. The charter\'s required centralized purchasing system and procurement officer were never effectively implemented, increasing the risk of fraud, waste, and abuse.',
      },
    ],
    photos: [],
    sources: [
      'California State Auditor, City of Compton Financial Mismanagement Report (Report 2021-802, October 2022)',
    ],
  },

  {
    id: 'evt-20',
    year: '2024',
    title: 'Albert Camarillo Publishes "Compton in My Soul"',
    desc: 'Stanford historian Albert M. Camarillo publishes his memoir "Compton in My Soul: A Life in Pursuit of Racial Equality," recounting his childhood in Compton\'s Mexican American barrio in the 1950s-1960s and his pioneering career as a founding faculty member of Stanford\'s Chicano Studies program. The book provides crucial firsthand perspective on Compton\'s often-overlooked Mexican American community.',
    tags: ['Memoir', 'Education', 'Latino History'],
    era: '2000-present',
    slug: 'compton-in-my-soul',
    type: 'event',
    sections: [
      {
        heading: 'A Life in Pursuit of Racial Equality',
        text: 'In 2024, Stanford historian Albert M. Camarillo published "Compton in My Soul: A Life in Pursuit of Racial Equality." The memoir recounts his childhood in Compton\'s Mexican American barrio in the 1950s and 1960s — when the city was majority white but transitioning — and his pioneering career as a founding faculty member of Stanford\'s Chicano Studies program.',
      },
      {
        heading: 'The Barrio\'s Story',
        text: 'Camarillo\'s parents migrated from Mexico, and his father worked in the industrial sector. The memoir documents how Mexican American families took advantage of the same affordable housing market that attracted white and later Black working-class families to Compton. His family\'s trajectory — from agricultural labor to industrial work to middle-class status — mirrors that of many Mexican-origin families in the region.',
      },
      {
        heading: 'A Crucial First-Person Perspective',
        text: 'The memoir provides rare first-person perspective on Compton\'s third demographic transformation, from Black-majority to Latino-majority, and on the inter-ethnic dynamics of the 1990s-2000s. It documents a community often overlooked in narratives focused on the Black-white binary — Mexican Americans counted as "white" by the census yet subject to de facto segregation, navigating the city\'s changing racial landscape.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Al_Camarillo_Stanford_October_2024.jpg/960px-Al_Camarillo_Stanford_October_2024.jpg',
        caption: 'Albert Camarillo at Stanford University, October 2024',
        credit: 'King of Hearts, CC BY-SA 4.0, via Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Al_Camarillo_Stanford_October_2024.jpg',
      },
    ],
    sources: [
      'Camarillo, "Compton in My Soul: A Life in Pursuit of Racial Equality" (Stanford University Press, 2024)',
    ],
  }
]

export { people } from './people'

export const allTags: string[] = (() => {
  const counts = new Map<string, number>()
  for (const e of events) {
    for (const t of e.tags) counts.set(t, (counts.get(t) ?? 0) + 1)
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).map(([t]) => t)
})()

export function countTagged(tag: string): number {
  return events.filter(e => e.tags.some(t => t.toLowerCase() === tag.toLowerCase())).length
}

const personEventLinks: Record<string, string[]> = {
  'person-1': ['evt-1', 'evt-2'],
  'person-2': ['evt-1'],
  'person-28': ['evt-1'],
  'person-3': ['evt-3'],
  'person-4': ['evt-3'],
  'person-5': ['evt-3'],
  'person-6': ['evt-3'],
  'person-7': ['evt-3'],
  'person-8': ['evt-3'],
  'person-29': ['evt-3'],
  'person-30': ['evt-3'],
  'person-22': ['evt-azusa'],
  'person-46': ['evt-rotten-spot'],
  'person-47': ['evt-dubois-washington'],
  'person-48': ['evt-dubois-washington'],
  'person-27': ['evt-4'],
  'person-36': ['evt-wwii'],
  'person-37': ['evt-overcrowding'],
  'person-51': ['evt-10'],
  'person-10': ['evt-13'],
  'person-11': ['evt-14', 'evt-crack'],
  'person-12': ['evt-14'],
  'person-13': ['evt-14', 'evt-15'],
  'person-34': ['evt-14'],
  'person-35': ['evt-14'],
  'person-14': ['evt-15'],
  'person-9': ['evt-latino', 'evt-20'],
  'person-49': ['evt-south-gate-industry'],
  'person-50': ['evt-south-gate-industry'],
}

const eventPersonLinks: Record<string, string[]> = {}
for (const [personId, eventIds] of Object.entries(personEventLinks)) {
  for (const eventId of eventIds) {
    if (!eventPersonLinks[eventId]) eventPersonLinks[eventId] = []
    eventPersonLinks[eventId].push(personId)
  }
}

export function getRelatedEventsForPerson(person: Person): Event[] {
  return (personEventLinks[person.id] ?? [])
    .map(id => events.find(e => e.id === id))
    .filter((e): e is Event => Boolean(e))
}

export function getRelatedPeopleForEvent(event: Event): Person[] {
  return (eventPersonLinks[event.id] ?? [])
    .map(id => people.find(p => p.id === id))
    .filter((p): p is Person => Boolean(p))
}

export const allEntries: Entry[] = [...events, ...people]

export function getEntryBySlug(slug: string): Entry | undefined {
  return allEntries.find(e => e.slug === slug)
}

export function getEntriesByEra(era: string): Entry[] {
  if (!era) return allEntries
  return allEntries.filter(e => e.era === era)
}

export function searchEntries(query: string): Entry[] {
  const q = query.toLowerCase()
  if (!q.trim()) return allEntries
  return allEntries.filter(e => {
    const text = 'title' in e ? e.title.toLowerCase() : e.name.toLowerCase()
    const desc = e.desc.toLowerCase()
    const tags = 'tags' in e ? e.tags.join(' ').toLowerCase() : e.role.toLowerCase()
    return text.includes(q) || desc.includes(q) || tags.includes(q)
  })
}
