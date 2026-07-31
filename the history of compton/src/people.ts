import type { Person } from './data'

export const people: Person[] = [
  {
    id: 'person-1',
    name: 'Griffith D. Compton',
    label: 'Person',
    era: 'pre-1900',
    desc: 'Founder of Compton. Along with William Morton, he established the city in 1867 as a Methodist farming community on land from the Rancho San Pedro grant. The city was named after him.',
    slug: 'griffith-compton',
    type: 'person',
    role: 'Founder',
    sections: [
      {
        heading: 'A Methodist Farming Settlement',
        text: 'Griffith D. Compton was, along with William Morton, one of the two men who founded Compton in 1867 as a Methodist farming community on land from the Rancho San Pedro grant. Like many settlers in the region, he was a disappointed gold-seeker who turned to farming when the mines failed to deliver. The settlement became known for its dairy products — operating the largest cheese factory in Southern California — and for alfalfa farming, which dominated the county\'s agricultural economy in the town\'s early decades.',
      },
      {
        heading: 'A Town Named After Its Founder',
        text: 'The town took its founder\'s name, a practice common among the era\'s land promoters. Compton incorporated as a city in 1888, but residents soon disincorporated much of the land in opposition to taxes, and the town was not fully reincorporated until 1906. Historian Emily Straus sees this early resistance to taxation as the first expression of a structural problem — a bedroom community wanting municipal services without the revenue to pay for them — that would define Compton for the next century.',
      },
    ],
    sources: [
      'Straus, "Death of a Suburban Dream" (2014)',
      'Salvator, "Los Angeles in the Sunny Seventies" (1878; trans. 1929)',
    ],
  },
  {
    id: 'person-2',
    name: 'William Morton',
    label: 'Person',
    era: 'pre-1900',
    desc: 'Co-founder of Compton alongside Griffith D. Compton. Together they established the settlement in 1867 as a Methodist farming community.',
    slug: 'william-morton',
    type: 'person',
    role: 'Co-founder',
    sections: [
      {
        heading: 'Co-founding Compton',
        text: 'William Morton co-founded Compton with Griffith D. Compton in 1867, establishing a Methodist farming community on land from the Rancho San Pedro grant. The two men were part of the wave of disappointed gold-seekers and homesteaders who settled the region after the mines failed.',
      },
      {
        heading: 'The Farming Economy They Built',
        text: 'The settlement Morton helped found thrived on agriculture: dairy production — including the largest cheese factory in Southern California — and alfalfa farming dominated the local economy. Austrian Archduke Ludwig Salvator\'s 1876 account lists Compton among the county\'s "towns of recent growth," a farming settlement served by the railroad and stagecoach infrastructure that made the region accessible.',
      },
    ],
    sources: [
      'Straus, "Death of a Suburban Dream" (2014)',
      'Salvator, "Los Angeles in the Sunny Seventies" (1878; trans. 1929)',
    ],
  },
  {
    id: 'person-21',
    name: 'Francisco Reyes',
    label: 'Person',
    era: 'pre-1900',
    desc: 'First black mayor of Los Angeles (1793, under Spanish rule), predating Tom Bradley by 180 years. His overlooked legacy underscores the African presence in LA dating to the city\'s origins.',
    slug: 'francisco-reyes',
    type: 'person',
    role: 'Mayor of Los Angeles (1793)',
    sections: [
      {
        heading: 'First Black Mayor of Los Angeles',
        text: 'Tom Bradley, elected in 1973, is usually credited as Los Angeles\'s first black mayor — but Francisco Reyes actually held that office first. His term began in 1793 under Spanish rule, 180 years before Bradley\'s. His overlooked legacy underscores the African presence in the region dating to the city\'s origins.',
      },
      {
        heading: 'The African Roots of LA Politics',
        text: 'Reyes\'s mayoralty reflects the multiracial character of early Los Angeles: the pueblo was founded in 1781 by pobladores who were at least 26 of 44 at least part African, and Spain\'s western frontier relied heavily on African and mulatto soldiers and officials. Historian Paul Robinson argues that early Anglo-American accounts obscured this founding, erasing the African presence that Reyes embodied.',
      },
    ],
    sources: [
      'Hunt & Ramon (eds.), "Black Los Angeles: American Dreams and Racial Realities" (2010), ch. 1 (P. Robinson)',
    ],
  },
  {
    id: 'person-28',
    name: 'Ludwig Louis Salvator',
    label: 'Person',
    era: 'pre-1900',
    desc: 'Austrian Archduke who visited Los Angeles County in 1876 and wrote a detailed travelogue "Los Angeles in the Sunny Seventies." His account provides one of the earliest descriptions of Compton as a settlement, listing it among the "towns of recent growth" in the county.',
    slug: 'ludwig-salvator',
    type: 'person',
    role: 'Travel Writer / Archduke',
    sections: [
      {
        heading: 'A Royal Travel Writer',
        text: 'Ludwig Louis Salvator, an Austrian Archduke, visited Los Angeles County in 1876 — nine years after Compton\'s founding — and produced one of the earliest surviving descriptions of the settlement. His travelogue, "Los Angeles in the Sunny Seventies" (published in German in 1878 and translated by Marguerite Eyer Wilbur in 1929), documented the county\'s climate, flora, fauna, agriculture, industries, trade, and settlements.',
      },
      {
        heading: 'Documenting Compton\'s Beginnings',
        text: 'Salvator lists Compton among the county\'s "towns of recent growth," alongside Anaheim, Wilmington, El Monte, Downey City, and Westminster — distinguishing it from mission-era sites like San Juan Capistrano and the pueblo of Los Angeles (founded 1781). He documented the railroad and stagecoach infrastructure that made the farming settlement accessible as a commuter suburb.',
      },
      {
        heading: 'The Climate as Sanitarium',
        text: 'Salvator devoted extensive attention to the county\'s healthful climate, calling it "a veritable sanitarium" for the entire Union: "The invalid can find health in Los Angeles; the rich, a life of ease and pleasure in an earthly paradise." This climate marketing would later drive waves of migration to communities like Compton. His account also confirms an economy entirely agricultural and pastoral — with no mention of oil, which would not be discovered on nearby Dominguez Hill until the 1920s.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Ludwig_Salvator_von_%C3%96sterreich-Toskana.jpg/960px-Ludwig_Salvator_von_%C3%96sterreich-Toskana.jpg',
        caption: 'Portrait of Archduke Ludwig Louis Salvator of Austria',
        credit: 'Public domain, via Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ludwig_Salvator_von_%C3%96sterreich-Toskana.jpg',
      },
    ],
    sources: [
      'Salvator, "Los Angeles in the Sunny Seventies" (1878; trans. 1929)',
    ],
  },
  {
    id: 'person-3',
    name: 'Glenn Curtiss',
    label: 'Person',
    era: '1900-1920',
    desc: 'Pioneering American aviator who performed at the 1910 Los Angeles International Aviation Meet at Dominguez Field. Curtiss was a leading figure in early aviation and a rival of the Wright brothers.',
    slug: 'glenn-curtiss',
    type: 'person',
    role: 'Aviator',
    sections: [
      {
        heading: 'The Leading Man of the 1910 Air Meet',
        text: 'Glenn Curtiss was one of the headline performers at the 1910 Los Angeles International Aviation Meet at Dominguez Field — the first international air meet in the United States, held for ten days in January 1910 on the Rancho San Pedro land grant of the Dominguez family. An estimated 226,000 spectators converged on the site, nearly matching the entire population of Los Angeles at the time (320,000).',
      },
      {
        heading: 'Rival of the Wrights',
        text: 'Curtiss was a leading figure in early American aviation and the chief rival of the Wright brothers. The Los Angeles meet, modeled after the 1909 Reims meet in France, offered $70,000 in prize money (approximately $2 million today) — an unprecedented investment that demonstrated how deeply boosters were willing to commit to making Los Angeles synonymous with aviation.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Glenn_Curtiss_-_1909_%28cropped%29.jpg/960px-Glenn_Curtiss_-_1909_%28cropped%29.jpg',
        caption: 'Glenn Curtiss, photographed in 1909',
        credit: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Glenn_Curtiss_-_1909_(cropped).jpg',
      },
    ],
    sources: [
      'Janisch, "Soaring into Los Angeles: The 1910 LA International Aviation Meet" (2020)',
    ],
  },
  {
    id: 'person-4',
    name: 'Louis Paulhan',
    label: 'Person',
    era: '1900-1920',
    desc: 'French aviator who performed at the 1910 Los Angeles International Aviation Meet at Dominguez Field, the first international air meet in the United States.',
    slug: 'louis-paulhan',
    type: 'person',
    role: 'Aviator',
    sections: [
      {
        heading: 'The French Star of Dominguez Field',
        text: 'Louis Paulhan, a French aviator, was among the notable performers at the 1910 Los Angeles International Aviation Meet at Dominguez Field — the first international air meet in the United States. His flights were a centerpiece of the ten-day spectacle that drew an estimated 226,000 spectators, nearly matching the population of Los Angeles itself.',
      },
      {
        heading: 'Part of an Aviation Dynasty',
        text: 'Paulhan\'s participation in the 1910 meet helped mint Los Angeles\'s identity as an aviation paradise — a legacy that continues with companies like SpaceX, Virgin Galactic, and Northrop Grumman in the region today. The meet established the model of combining boosters, prize money, and public spectacle that would define the aviation industry\'s relationship with Los Angeles.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Louis_Paulhan.jpg/960px-Louis_Paulhan.jpg',
        caption: 'Louis Paulhan (1883-1963), early French aviator',
        credit: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Louis_Paulhan.jpg',
      },
    ],
    sources: [
      'Janisch, "Soaring into Los Angeles: The 1910 LA International Aviation Meet" (2020)',
    ],
  },
  {
    id: 'person-5',
    name: 'Roy Knabenshue',
    label: 'Person',
    era: '1900-1920',
    desc: 'American aviator and balloonist who demonstrated military applications of aviation at the 1910 Air Meet by dropping sandbags on targets with a U.S. Signal Corps officer aboard — arguably the first demonstration of military aviation on the West Coast.',
    slug: 'roy-knabenshue',
    type: 'person',
    role: 'Aviator',
    sections: [
      {
        heading: 'First Military Aviation on the West Coast',
        text: 'Roy Knabenshue, an American aviator and balloonist, demonstrated the military applications of aviation at the 1910 Air Meet by flying with a U.S. Signal Corps officer aboard and dropping sandbags on simulated targets — arguably the first demonstration of military aviation on the West Coast. It presaged the aerospace industry that would become central to the Los Angeles economy and provide jobs for Compton residents in later decades.',
      },
      {
        heading: 'Spectacle at Dominguez Field',
        text: 'Knabenshue performed before crowds estimated at 50,000-80,000 on peak days, with special trolley cars from Henry Huntington\'s Pacific Electric Railway shuttling spectators from downtown Los Angeles to the field. The meet\'s success established the template of booster-driven spectacle that would drive Southern California development.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Roy_Knabenshue_US_aviator_portrait.jpg/960px-Roy_Knabenshue_US_aviator_portrait.jpg',
        caption: 'Augustus Roy Knabenshue, circa 1910',
        credit: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Roy_Knabenshue_US_aviator_portrait.jpg',
      },
    ],
    sources: [
      'Janisch, "Soaring into Los Angeles: The 1910 LA International Aviation Meet" (2020)',
    ],
  },
  {
    id: 'person-6',
    name: 'William Randolph Hearst',
    label: 'Person',
    era: '1900-1920',
    desc: 'Newspaper magnate (Los Angeles Examiner) and key booster of the 1910 Los Angeles International Aviation Meet. His promotional network helped establish the template for combining press, railroads, and real estate interests to drive Southern California development.',
    slug: 'william-randolph-hearst',
    type: 'person',
    role: 'Newspaper Publisher / Booster',
    sections: [
      {
        heading: 'The Examiner and the Air Meet',
        text: 'William Randolph Hearst, publisher of the Los Angeles Examiner, was a key booster of the 1910 Los Angeles International Aviation Meet at Dominguez Field. Alongside Harry Chandler of the Los Angeles Times, he helped turn the ten-day event into the region\'s greatest spectacle yet, drawing an estimated 226,000 spectators.',
      },
      {
        heading: 'The Booster Template',
        text: 'The meet\'s organizing committee — newspaper owners, railroad magnates, and landholders working together — established a template for combining press, railroad, and real estate interests that would drive Southern California development for decades. Historian Austin Janisch argues this booster DNA was hardwired into the region\'s growth, making boom-and-bust cycles inevitable.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/William_Randolph_Hearst_cph_3a49373.jpg/960px-William_Randolph_Hearst_cph_3a49373.jpg',
        caption: 'William Randolph Hearst, American newspaper publisher',
        credit: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:William_Randolph_Hearst_cph_3a49373.jpg',
      },
    ],
    sources: [
      'Janisch, "Soaring into Los Angeles: The 1910 LA International Aviation Meet" (2020)',
    ],
  },
  {
    id: 'person-7',
    name: 'Harry Chandler',
    label: 'Person',
    era: '1900-1920',
    desc: 'Newspaper magnate (Los Angeles Times) and key booster who helped organize the 1910 Los Angeles International Aviation Meet at Dominguez Field.',
    slug: 'harry-chandler',
    type: 'person',
    role: 'Newspaper Publisher / Booster',
    sections: [
      {
        heading: 'The Times and the Meet',
        text: 'Harry Chandler, publisher of the Los Angeles Times, was a key booster and organizer of the 1910 Los Angeles International Aviation Meet at Dominguez Field. His paper\'s promotional power was central to the event\'s success in drawing an estimated 226,000 spectators — nearly matching the population of Los Angeles.',
      },
      {
        heading: 'From Booster to Scandal',
        text: 'Chandler\'s career exemplified the booster-speculator culture of Southern California. The same business elite that promoted the air meet and the region\'s growth was later ensnared in the Julian Petroleum Corporation scandal — the "greatest swindle" in Los Angeles history — which entangled figures including Chandler, Louis B. Mayer, Cecil B. DeMille, Charlie Chaplin, and H. M. Haldeman.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Harry_Chandler%2C_1936.jpg/960px-Harry_Chandler%2C_1936.jpg',
        caption: 'Harry Chandler, American newspaper publisher and investor',
        credit: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Harry_Chandler,_1936.jpg',
      },
    ],
    sources: [
      'Janisch, "Soaring into Los Angeles: The 1910 LA International Aviation Meet" (2020)',
      'Tygiel, "The Great Los Angeles Swindle" (1994)',
    ],
  },
  {
    id: 'person-8',
    name: 'Henry H. Huntington',
    label: 'Person',
    era: '1900-1920',
    desc: 'Railroad magnate who built the Pacific Electric Railway and served on the organizing committee for the 1910 Air Meet. His trolley cars shuttled spectators from downtown LA to Dominguez Field.',
    slug: 'henry-huntington',
    type: 'person',
    role: 'Railroad Magnate',
    sections: [
      {
        heading: 'The Trolley King',
        text: 'Henry E. Huntington, the railroad magnate who built the Pacific Electric Railway, served on the organizing committee for the 1910 Air Meet. His special trolley cars shuttled spectators from downtown Los Angeles to Dominguez Field, moving crowds of 50,000-80,000 on peak days.',
      },
      {
        heading: 'Railroads, Real Estate, and Growth',
        text: 'Huntington\'s involvement embodied the meet\'s central lesson: the combination of press, railroad, and real estate interests could manufacture growth on a staggering scale. The Pacific Electric lines he built connected the rancho land of southeast Los Angeles County to the metropolis — infrastructure that would later carry Compton\'s transformation from farmland to industrial suburb.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Henry_E._Huntington.jpg/960px-Henry_E._Huntington.jpg',
        caption: 'Henry E. Huntington (1850-1927)',
        credit: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Henry_E._Huntington.jpg',
      },
    ],
    sources: [
      'Janisch, "Soaring into Los Angeles: The 1910 LA International Aviation Meet" (2020)',
    ],
  },
  {
    id: 'person-29',
    name: 'Dick Ferris',
    label: 'Person',
    era: '1900-1920',
    desc: 'Promoter who organized the 1910 Los Angeles International Aviation Meet at Dominguez Field, which offered $70,000 in prize money (approximately $2 million today).',
    slug: 'dick-ferris',
    type: 'person',
    role: 'Event Promoter',
    sections: [
      {
        heading: 'The Promoter of the 1910 Meet',
        text: 'Dick Ferris organized the 1910 Los Angeles International Aviation Meet at Dominguez Field, the first international air meet in the United States. The event offered $70,000 in prize money (approximately $2 million today) — an unprecedented sum that drew the era\'s leading aviators, including Glenn Curtiss and Louis Paulhan.',
      },
      {
        heading: 'Spectacle as Development Strategy',
        text: 'Ferris\'s meet established the model for combining boosters, prize money, and public spectacle that would define the aviation industry\'s relationship with Los Angeles. His wife was among the first American women to fly as an airplane passenger during the meet. The same booster mentality — spending heavily on speculative ventures — would characterize the 1920s oil boom and real estate development that shaped Compton.',
      },
    ],
    sources: [
      'Janisch, "Soaring into Los Angeles: The 1910 LA International Aviation Meet" (2020)',
    ],
  },
  {
    id: 'person-30',
    name: 'Gregorio Del Amo Gonzalez',
    label: 'Person',
    era: '1900-1920',
    desc: 'Member of the Dominguez family who served on the organizing committee for the 1910 Air Meet at Dominguez Field, held on the family\'s Rancho San Pedro land grant.',
    slug: 'gregorio-del-amo',
    type: 'person',
    role: 'Landowner / Booster',
    sections: [
      {
        heading: 'The Dominguez Family\'s Land',
        text: 'Gregorio Del Amo Gonzalez was a member of the Dominguez family, whose Rancho San Pedro land grant hosted the 1910 Los Angeles International Aviation Meet. He served on the organizing committee alongside railroad magnates and newspaper owners, representing the landholding interests at the center of the region\'s development.',
      },
      {
        heading: 'Landowners as Boosters',
        text: 'The meet on the Dominguez land demonstrated how land-rich families partnered with press and railroad interests to drive Southern California growth. Dominguez Field itself later became part of the industrial corridor that provided jobs for Compton\'s working class — the Rancho San Pedro lands ultimately remade from agriculture into the region\'s manufacturing heart.',
      },
    ],
    sources: [
      'Janisch, "Soaring into Los Angeles: The 1910 LA International Aviation Meet" (2020)',
    ],
  },
  {
    id: 'person-16',
    name: 'Charlotta Bass',
    label: 'Person',
    era: '1900-1920',
    desc: 'Pioneering African American newspaper publisher and editor of the California Eagle. She was a leading voice for civil rights in Los Angeles and later became the first African American woman nominated for Vice President of the United States (1952, Progressive Party).',
    slug: 'charlotta-bass',
    type: 'person',
    role: 'Publisher / Activist',
    sections: [
      {
        heading: 'Publisher of the California Eagle',
        text: 'Charlotta Bass was a pioneering African American newspaper publisher and editor of the California Eagle, one of the most influential black newspapers in the West. She was a leading voice for civil rights in Los Angeles during the early decades of the twentieth century, part of the early black leadership that historian Marne L. Campbell documents building Los Angeles\'s African American institutions.',
      },
      {
        heading: 'A National Political Figure',
        text: 'In 1952, Bass became the first African American woman nominated for Vice President of the United States, running on the Progressive Party ticket. Her career spanned the era when Black Los Angeles built the institutional foundations — churches, newspapers, mutual aid societies, and political networks — that would later support Compton\'s African American community.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Charlotta_Bass-52.jpg/960px-Charlotta_Bass-52.jpg',
        caption: 'Charlotta Bass, from the 1952 Marion County Voters\' Pamphlet',
        credit: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Charlotta_Bass-52.jpg',
      },
    ],
    sources: [
      'Campbell, "Making Black Los Angeles" (2016)',
    ],
  },
  {
    id: 'person-44',
    name: 'Jefferson Edmonds',
    label: 'Person',
    era: '1900-1920',
    desc: 'Pioneering African American newspaper publisher and editor in Los Angeles. His work helped build the institutional foundations of Black Los Angeles that would later support Compton\'s African American community.',
    slug: 'jefferson-edmonds',
    type: 'person',
    role: 'Newspaper Publisher',
    sections: [
      {
        heading: 'The Early Black Press',
        text: 'Jefferson Edmonds was a pioneering African American newspaper publisher and editor in Los Angeles in the years before the Great Migration. Alongside figures like Charlotta Bass, he helped create the print infrastructure that connected and empowered a black community that never exceeded five percent of the city\'s population through 1910.',
      },
      {
        heading: 'Institutions Before the Migration',
        text: 'Historian Marne L. Campbell shows that despite their small numbers, Black Angelenos established robust institutions — churches, newspapers, mutual aid societies — in the 1850-1917 period. These institutional foundations, built by editors like Edmonds, would later serve the much larger African American community that migrated to Los Angeles and eventually to Compton.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Jefferson_Lewis_Edmonds_Photo_from_the_Liberator_%28Los_Angeles%29.jpg/960px-Jefferson_Lewis_Edmonds_Photo_from_the_Liberator_%28Los_Angeles%29.jpg',
        caption: 'Jefferson Lewis Edmonds, from his newspaper The Liberator (Los Angeles)',
        credit: 'Public domain, via Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Jefferson_Lewis_Edmonds_Photo_from_the_Liberator_(Los_Angeles).jpg',
      },
    ],
    sources: [
      'Campbell, "Making Black Los Angeles" (2016)',
    ],
  },
  {
    id: 'person-22',
    name: 'William J. Seymour',
    label: 'Person',
    era: '1900-1920',
    desc: 'Leader of the Azusa Street Revival (1906-1913), a multi-ethnic religious revival in Los Angeles that gave birth to modern Pentecostalism. The revival initially drew a racially mixed congregation before becoming segregated.',
    slug: 'william-seymour',
    type: 'person',
    role: 'Religious Leader',
    sections: [
      {
        heading: 'Birthplace of Pentecostalism',
        text: 'William J. Seymour led the Azusa Street Revival (1906-1913), which began in a former African Methodist Episcopal church in downtown Los Angeles and gave birth to modern Pentecostalism. The revival famously drew a multi-ethnic congregation — Black, white, Latino, and Asian worshippers prayed together at a time when racial mixing was rare in American religious life.',
      },
      {
        heading: 'Integration, Then Segregation',
        text: 'Historian Marne L. Campbell shows that the revival\'s multiracial practice did not last: the movement soon became segregated, mirroring the broader racial dynamics of the region. The arc of the revival — from radical interracial experiment to segregated institution — anticipated the trajectory of the neighborhoods around it, including the white working-class suburbs of southeast Los Angeles that would later become Compton.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/William_J._Seymour_%28cropped%29.jpg/960px-William_J._Seymour_%28cropped%29.jpg',
        caption: 'William J. Seymour, from a picture of the early 1910s',
        credit: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:William_J._Seymour_(cropped).jpg',
      },
    ],
    sources: [
      'Campbell, "Making Black Los Angeles" (2016)',
    ],
  },
  {
    id: 'person-45',
    name: 'Joseph and Elizabeth Young',
    label: 'Person',
    era: '1900-1920',
    desc: 'African American club and YMCA leaders in early Los Angeles who helped build the community institutions that later served Compton\'s black population.',
    slug: 'joseph-elizabeth-young',
    type: 'person',
    role: 'Community Leaders',
    sections: [
      {
        heading: 'Club and YMCA Leaders',
        text: 'Joseph and Elizabeth Young were African American club and YMCA leaders in early Los Angeles, part of the cohort of institution-builders that Marne L. Campbell documents in "Making Black Los Angeles." Their work in churches, clubs, and the YMCA helped knit together a black community that was small in number but rich in organization.',
      },
      {
        heading: 'The Institutional Foundation for Compton',
        text: 'The organizations the Youngs and their peers built before 1917 created the preconditions for the later black migration to Compton: a pattern of community organizing, social networks, and institutions that would serve the African American families who moved into the city after the end of racial covenants in 1948.',
      },
    ],
    sources: [
      'Campbell, "Making Black Los Angeles" (2016)',
    ],
  },
  {
    id: 'person-17',
    name: 'Ralph Bunche',
    label: 'Person',
    era: '1900-1920',
    desc: 'Nobel Peace Prize winner (1950) who graduated as valedictorian from UCLA in 1927. He was a pioneering diplomat and scholar who helped found the United Nations.',
    slug: 'ralph-bunche',
    type: 'person',
    role: 'Diplomat / Nobel Laureate',
    sections: [
      {
        heading: 'UCLA\'s Valedictorian',
        text: 'Ralph Bunche graduated as valedictorian of UCLA in 1927, one of the black luminaries the university educated in its early decades — a cohort that also included Jackie Robinson and Tom Bradley. His academic brilliance carried him to Harvard and then to a career at the center of world politics.',
      },
      {
        heading: 'Nobel Peace Prize, 1950',
        text: 'Bunche was a pioneering diplomat and scholar who helped found the United Nations, and in 1950 he received the Nobel Peace Prize for his work mediating the Arab-Israeli conflict. His career, from Los Angeles\'s public schools to the world stage, embodied the promise that Black Los Angeles\'s early institutions had been built to make possible.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Ralph_Bunche%2C_1951.jpg/960px-Ralph_Bunche%2C_1951.jpg',
        caption: 'Ralph Bunche, photographed by Carl Van Vechten in 1951',
        credit: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ralph_Bunche,_1951.jpg',
      },
    ],
    sources: [
      'Hunt & Ramon (eds.), "Black Los Angeles" (2010), ch. 1 (P. Robinson)',
    ],
  },
  {
    id: 'person-20',
    name: 'Georgia Robinson',
    label: 'Person',
    era: '1900-1920',
    desc: 'First African American policewoman in America (1919). She later turned to social welfare work in Los Angeles.',
    slug: 'georgia-robinson',
    type: 'person',
    role: 'Police Officer / Social Worker',
    sections: [
      {
        heading: 'First Black Policewoman in America',
        text: 'Georgia Robinson became the first African American policewoman in America in 1919, breaking barriers in a profession that had been entirely closed to black women. She was part of the early black leadership of Los Angeles that historian Marne L. Campbell documents in "Making Black Los Angeles."',
      },
      {
        heading: 'First Black Social Worker',
        text: 'Robinson later turned to social welfare work in Los Angeles. Her two careers — in law enforcement and in social welfare — both served the African American community at a time when its institutions were being built from scratch, foundations that would later support the black families who moved to Compton after 1948.',
      },
    ],
    sources: [
      'Campbell, "Making Black Los Angeles" (2016)',
    ],
  },
  {
    id: 'person-19',
    name: 'Paul Williams',
    label: 'Person',
    era: '1900-1920',
    desc: 'First certified African American architect west of the Mississippi River (1921). He designed over 2,000 buildings and was part of the team that designed the Theme Building at LAX.',
    slug: 'paul-williams',
    type: 'person',
    role: 'Architect',
    sections: [
      {
        heading: 'First Certified Black Architect in the West',
        text: 'Paul R. Williams became the first certified African American architect west of the Mississippi River in 1921 and went on to design over 2,000 buildings, and was one of the architects of the Theme Building at Los Angeles International Airport. His career demonstrated the professional achievements of Black Los Angeles\'s middle class at a time when the city\'s African American population was still small.',
      },
      {
        heading: 'The Black Middle Class Takes Shape',
        text: 'Williams\'s success was part of a broader pattern: by the 2000s, the 90008 and 90043 zip codes (Baldwin Hills and adjacent areas) were over 70 percent black and had among the highest incomes of black communities in the nation. The black middle class that Williams embodied would eventually have a counterpart in Compton — a working-class black suburb built by families whose economic position differed sharply from the professionals of the hills.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Paul_R_Williams.jpg/960px-Paul_R_Williams.jpg',
        caption: 'Paul Revere Williams, architect',
        credit: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Paul_R_Williams.jpg',
      },
    ],
    sources: [
      'Hunt & Ramon (eds.), "Black Los Angeles" (2010), ch. 1 (P. Robinson)',
    ],
  },
  {
    id: 'person-18',
    name: 'Jackie Robinson',
    label: 'Person',
    era: '1920-1940',
    desc: 'Legendary athlete who broke Major League Baseball\'s color barrier in 1947. Attended UCLA, where he became the first athlete to letter in four sports.',
    slug: 'jackie-robinson',
    type: 'person',
    role: 'Athlete / Civil Rights Icon',
    sections: [
      {
        heading: 'The Four-Sport Athlete at UCLA',
        text: 'Jackie Robinson attended UCLA, where he became the first athlete in the university\'s history to letter in four sports — football, basketball, baseball, and track. He was one of the black luminaries the university educated in its early decades, alongside Ralph Bunche and Tom Bradley.',
      },
      {
        heading: 'Breaking Baseball\'s Color Barrier',
        text: 'In 1947, Robinson broke Major League Baseball\'s color barrier with the Brooklyn Dodgers, transforming American sports and becoming one of the most important figures of the civil rights era. His refusal to accept second-class status resonated throughout the region that had educated him, including the Los Angeles area whose black community was about to begin its own migration into the suburbs — including Compton.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Jackie_Robinson%2C_Brooklyn_Dodgers%2C_1954.jpg/960px-Jackie_Robinson%2C_Brooklyn_Dodgers%2C_1954.jpg',
        caption: 'Jackie Robinson of the Brooklyn Dodgers, 1954',
        credit: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Jackie_Robinson,_Brooklyn_Dodgers,_1954.jpg',
      },
    ],
    sources: [
      'Hunt & Ramon (eds.), "Black Los Angeles" (2010), ch. 1 (P. Robinson)',
    ],
  },
  {
    id: 'person-25',
    name: 'Carey McWilliams',
    label: 'Person',
    era: '1920-1940',
    desc: 'Influential author, journalist, and editor of The Nation. His classic work "Southern California: An Island on the Land" (1946) provides a sweeping portrait of the region\'s development. His concept of LA as an "archipelago" of ethnic islands directly applies to Compton\'s demographic transitions.',
    slug: 'carey-mcwilliams',
    type: 'person',
    role: 'Author / Journalist',
    sections: [
      {
        heading: 'Island on the Land',
        text: 'Carey McWilliams\'s classic work "Southern California: An Island on the Land" (1946) is a sweeping portrait of the region\'s development — its "folklore of climatology," its real estate booms of the 1880s and 1920s, its oil industry, and its booster culture. He argued that Southern California is "an island on the land," physically and culturally distinct, shaped by migration and promotion.',
      },
      {
        heading: 'The Los Angeles Archipelago',
        text: 'McWilliams\'s concept of Los Angeles as an archipelago of separate ethnic island communities maps directly onto Compton: initially a white Protestant island among Mexican Californio ranchos, then a white working-class island in the industrial southeast, then a black working-class island, and now a Latino working-class island. Each transition was accompanied by conflict, capital flight, and institutional strain — the concept explains why Compton\'s crises are structural, not unique.',
      },
      {
        heading: 'The Booster Critique',
        text: 'McWilliams documented how the Los Angeles Times and other boosters shaped regional development, including the open-shop movement that made Los Angeles a low-wage city and the 1910 Air Meet at Dominguez Field as a key booster event. His analysis of boom cycles and speculative land markets helps explain why communities like Compton were particularly vulnerable to busts.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Carey_McWilliams_1940.jpg/960px-Carey_McWilliams_1940.jpg',
        caption: 'Carey McWilliams, 1940',
        credit: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Carey_McWilliams_1940.jpg',
      },
    ],
    sources: [
      'McWilliams, "Southern California: An Island on the Land" (1946)',
    ],
  },
  {
    id: 'person-27',
    name: 'C. C. Julian',
    label: 'Person',
    era: '1920-1940',
    desc: 'Central figure in the Julian Petroleum Corporation scandal, the "greatest swindle" in Los Angeles history. His innovative newspaper advertising created a speculative frenzy that collapsed into one of the era\'s biggest financial scandals.',
    slug: 'cc-julian',
    type: 'person',
    role: 'Oil Promoter',
    sections: [
      {
        heading: 'The Greatest Swindle',
        text: 'C. C. Julian was the central figure in the Julian Petroleum Corporation scandal, which historian Jules Tygiel calls the "greatest swindle" in Los Angeles history. Using innovative newspaper advertising that promised astronomical returns, Julian sold stock in his oil company, creating a speculative frenzy that collapsed into one of the era\'s biggest financial scandals.',
      },
      {
        heading: 'The Culture of Speculation',
        text: 'Julian\'s company issued millions of shares, many of them fraudulent, and when the scheme collapsed thousands of small investors lost their savings. The scandal produced one of the longest and most complex criminal trials in Los Angeles history, ensnaring a former district attorney and a future state attorney general, as well as Louis B. Mayer, Cecil B. DeMille, Charlie Chaplin, Harry Chandler, and H. M. Haldeman. The same promotional techniques — free buses, lavish claims, installment plans — were used to sell house lots in South Gate and other working-class suburbs surrounding Compton.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Uclamss_1429_5298_LATIMES_CC_Julian_date_unclear_likely_1926_to_1933.jpg/960px-Uclamss_1429_5298_LATIMES_CC_Julian_date_unclear_likely_1926_to_1933.jpg',
        caption: 'C. C. Julian in court, Los Angeles, 1926–1933',
        credit: 'Los Angeles Times Photographic Collection, CC BY 4.0, via Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Uclamss_1429_5298_LATIMES_CC_Julian_date_unclear_likely_1926_to_1933.jpg',
      },
    ],
    sources: [
      'Tygiel, "The Great Los Angeles Swindle" (1994)',
    ],
  },
  {
    id: 'person-42',
    name: 'H.M. Haldeman',
    label: 'Person',
    era: '1920-1940',
    desc: 'Businessman implicated in the Julian Petroleum Corporation scandal. His grandson H.R. Haldeman would later serve as White House Chief of Staff under President Richard Nixon.',
    slug: 'hm-haldeman',
    type: 'person',
    role: 'Businessman',
    sections: [
      {
        heading: 'Implicated in the Julian Scandal',
        text: 'H. M. Haldeman was among the business figures ensnared in the Julian Petroleum Corporation scandal of the 1920s, the "greatest swindle" in Los Angeles history. The scandal entangled a cross-section of the city\'s elite — movie moguls, newspaper publishers, and businessmen — illustrating how deeply intertwined business, politics, and corruption were in the era\'s speculative economy.',
      },
      {
        heading: 'The Haldeman Connection',
        text: 'Haldeman\'s grandson, H. R. Haldeman, would serve as White House Chief of Staff under President Richard Nixon. The connection illustrates the deep entanglement of Los Angeles business, politics, and scandal that continued to affect governance in places like Compton, where the same booster-speculator culture shaped development.',
      },
    ],
    sources: [
      'Tygiel, "The Great Los Angeles Swindle" (1994)',
    ],
  },
  {
    id: 'person-36',
    name: 'O. Scott Thompson',
    label: 'Person',
    era: '1940-1960',
    desc: 'Superintendent of Compton Union Schools during World War II who helped establish the Firestone war production training program, giving students firsthand work experience.',
    slug: 'o-scott-thompson',
    type: 'person',
    role: 'School Superintendent',
    sections: [
      {
        heading: 'The Firestone Partnership',
        text: 'As superintendent of Compton Union Schools during World War II, O. Scott Thompson helped establish a war production training program in partnership with the Firestone Tire and Rubber Company. Initially designed for one summer — roughly 100 young men working eight-hour factory shifts — the program expanded to include young women and split students\' time between school and work.',
      },
      {
        heading: 'Firsthand Experience',
        text: 'Thompson called the program a way of giving students "one side of education sadly lacking in our schools — firsthand experience for youth on a real job, under real work conditions." The partnership established a system of reciprocal obligation: citizens contributed to war production while the federal government subsidized their endeavors — a template for the school-business relationships that would define Compton\'s postwar education system.',
      },
    ],
    sources: [
      'Straus, "Death of a Suburban Dream" (2014), ch. 2',
    ],
  },
  {
    id: 'person-37',
    name: 'Ardella Tibby',
    label: 'Person',
    era: '1940-1960',
    desc: 'Superintendent of Compton Union Schools in the postwar era who oversaw the district during its most severe overcrowding crisis. She famously testified: "There were acres of vegetables, but now — in their place — we have acres of children."',
    slug: 'ardella-tibby',
    type: 'person',
    role: 'School Superintendent',
    sections: [
      {
        heading: 'Acres of Children',
        text: 'Ardella Tibby was superintendent of Compton Union Schools during the postwar overcrowding crisis. She famously testified that when she first came to Compton, "there were acres of vegetables, but now — in their place — we have acres of children." The line captured the speed of the postwar transformation of the city\'s farmland into tract housing.',
      },
      {
        heading: 'The Overcrowding Crisis',
        text: 'After the war, Compton Union served more than 25 square miles with a population exceeding 160,000 — the third largest district in the county after Los Angeles and Long Beach. By 1949 there were 24 double-session classes in the Enterprise district alone; Washington Elementary, built for 550 students, enrolled 1,350. Between 1940 and 1950, Compton Union had the greatest population increase of any California district — a boom that overwhelmed its infrastructure and its finances.',
      },
    ],
    sources: [
      'Straus, "Death of a Suburban Dream" (2014), ch. 2',
    ],
  },
  {
    id: 'person-43',
    name: 'L.V. Koos',
    label: 'Person',
    era: '1940-1960',
    desc: 'University of Chicago education scholar who called Compton\'s secondary education "the bright spot of America" in a 1949 Rotary Club speech, praising the district\'s 6-4-4 structure.',
    slug: 'lv-koos',
    type: 'person',
    role: 'Education Scholar',
    sections: [
      {
        heading: 'The Bright Spot of America',
        text: 'L. V. Koos, a University of Chicago education scholar, called Compton\'s secondary education "the bright spot of America" in a 1949 Rotary Club speech, praising the district\'s 6-4-4 structure — six years of elementary, four of junior high, and four of high school and junior college. The structure was nationally admired as an innovation in educational organization.',
      },
      {
        heading: 'The 6-4-4 Debate',
        text: 'Critics noted the structure required five separate school boards, five superintendents, and five purchasing departments — all taxing the same property owners. The Compton Herald American\'s "Crisis in Schools" editorial (1950) called the system "unnecessarily expensive and confusing." Political infighting in the fragmented districts — including a Willowbrook superintendent hired for political reasons and fired for "gross incompetency" in 1953 — demonstrated the governance dysfunction built into the structure.',
      },
    ],
    sources: [
      'Straus, "Death of a Suburban Dream" (2014), ch. 2',
    ],
  },
  {
    id: 'person-9',
    name: 'Albert M. Camarillo',
    label: 'Person',
    era: '1960-1980',
    desc: 'Renowned Stanford historian and pioneering scholar of Mexican American history and Chicano Studies. Grew up in Compton\'s Mexican American barrio in the 1950s-1960s. His 2024 memoir "Compton in My Soul" documents the Mexican American experience in Compton and the city\'s third demographic transition from black-majority to Latino-majority.',
    slug: 'albert-camarillo',
    type: 'person',
    role: 'Historian / Memoirist',
    sections: [
      {
        heading: 'Growing Up in the Barrio',
        text: 'Albert Camarillo grew up in Compton\'s Mexican American barrio in the 1950s and 1960s, at a time when the city was majority white but transitioning. His family\'s experience shows how Mexican Americans were counted as "white" by the census yet were subject to de facto segregation and discrimination that placed them between the black and white worlds.',
      },
      {
        heading: 'From Compton\'s Schools to Stanford',
        text: 'Camarillo attended Compton\'s public schools and went on to become a founding faculty member of Stanford\'s Chicano Studies program, pioneering the scholarly field of Mexican American history. His educational journey — from Compton public schools to a Stanford professorship — represents a trajectory of upward mobility that the city\'s schools were still able to provide for some students even as the district began its long decline.',
      },
      {
        heading: 'Documenting the Third Transition',
        text: 'His 2024 memoir "Compton in My Soul" provides rare first-person perspective on Compton\'s third demographic transformation, from black-majority to Latino-majority. Camarillo\'s parents migrated from Mexico and his father worked in the industrial sector; their trajectory — from agricultural labor to industrial work to middle-class status — mirrors that of many Mexican-origin families. The memoir documents the inter-ethnic dynamics of the 1990s-2000s as African Americans and Latinos competed for limited resources.',
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
      'Camarillo, "Compton in My Soul: A Life in Pursuit of Racial Equality" (2024)',
    ],
  },
  {
    id: 'person-10',
    name: 'Douglas Dollarhide',
    label: 'Person',
    era: '1960-1980',
    desc: 'First black mayor of Compton, elected in 1969. His election made Compton the largest city west of the Mississippi River to have a black mayor.',
    slug: 'douglas-dollarhyde',
    type: 'person',
    role: 'Mayor',
    sections: [
      {
        heading: 'First Black Mayor of Compton',
        text: 'Douglas Dollarhide was elected Compton\'s first black mayor in 1969, making the city the largest municipality west of the Mississippi River to elect a black mayor. His election was the political culmination of a demographic transformation that began with the end of racial covenants in 1948.',
      },
      {
        heading: 'The Political Transition',
        text: 'Dollarhide\'s election came after Shelley v. Kraemer (1948) ended restrictive covenants and black families moved into Compton while white families fled — a flight accelerated by the 1965 Watts Rebellion. Black political power, centered on the schools as the city\'s largest employer, consolidated rapidly: Compton\'s schools served as battlegrounds for control of community resources, and the mayor\'s office was the highest-profile prize in the city\'s new political order.',
      },
    ],
    sources: [
      'Straus, "Death of a Suburban Dream" (2014)',
    ],
  },
  {
    id: 'person-15',
    name: 'Tom Bradley',
    label: 'Person',
    era: '1960-1980',
    desc: 'First African American mayor of Los Angeles (elected 1973, served five terms). A UCLA graduate, his career reflected the rise of Black political power in Southern California.',
    slug: 'tom-bradley',
    type: 'person',
    role: 'Mayor of Los Angeles',
    sections: [
      {
        heading: 'Mayor of Los Angeles',
        text: 'Tom Bradley was elected the first African American mayor of Los Angeles in 1973 and served five terms, presiding over the city for twenty years. A graduate of UCLA — one of the black luminaries the university educated in its early decades — his career reflected the rise of Black political power across Southern California, including in neighboring Compton.',
      },
      {
        heading: 'Not the First',
        text: 'Bradley is usually credited as Los Angeles\'s first black mayor, but Francisco Reyes actually held the office first, serving in 1793 under Spanish rule — 180 years before Bradley. The overlooked legacy of Reyes underscores how deeply African presence runs in the region\'s history, from the multiracial founding of the pueblo to the black political ascendancy of the 1960s and 1970s that Bradley and Compton\'s Douglas Dollarhide both represented.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Tom_Bradley%2C_1980.jpg/960px-Tom_Bradley%2C_1980.jpg',
        caption: 'Mayor Tom Bradley at a Freedom of Press exhibit reception, 1980',
        credit: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tom_Bradley,_1980.jpg',
      },
    ],
    sources: [
      'Hunt & Ramon (eds.), "Black Los Angeles" (2010), ch. 1 (P. Robinson)',
    ],
  },
  {
    id: 'person-11',
    name: 'Eazy-E (Eric Wright)',
    label: 'Person',
    era: '1980-2000',
    desc: 'Founding member of the pioneering rap group NWA and a central figure in the rise of gangsta rap. His lyrics brought national attention to Compton\'s street life. Born and raised in Compton.',
    slug: 'eazy-e',
    type: 'person',
    role: 'Rapper / NWA Founder',
    sections: [
      {
        heading: 'The Founder of NWA',
        text: 'Eric Wright, known as Eazy-E, was a founding member of NWA and a central figure in the rise of gangsta rap. Born and raised in Compton, he provided the group\'s street credibility and entrepreneurial drive, helping to build the independent label Ruthless Records into the vehicle that took West Coast rap national.',
      },
      {
        heading: 'Straight Outta Compton',
        text: 'NWA\'s "Straight Outta Compton" (1988) brought Compton\'s street life to the world, and along with John Singleton\'s "Boyz n the Hood" (1991), cemented the city\'s national image as the emblem of black urban crisis. The music made Compton a byword for gang violence and poverty — an image the city has contended with ever since, even as the music itself became a cultural landmark.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Eazy_E_headshot.jpg/960px-Eazy_E_headshot.jpg',
        caption: 'Eazy-E as an LAPD Explorer',
        credit: 'Wikimedia Commons (CC BY 2.0)',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Eazy_E_headshot.jpg',
      },
    ],
    sources: [
      'Straus, "Death of a Suburban Dream" (2014)',
    ],
  },
  {
    id: 'person-12',
    name: 'Dr. Dre (Andre Young)',
    label: 'Person',
    era: '1980-2000',
    desc: 'Founding member of NWA and one of the most influential producers in hip-hop history. Started his career in Compton and later founded Death Row Records and Aftermath Entertainment.',
    slug: 'dr-dre',
    type: 'person',
    role: 'Rapper / Producer',
    sections: [
      {
        heading: 'The Architect of the G-Funk Sound',
        text: 'Andre Young, known as Dr. Dre, was a founding member of NWA and one of the most influential producers in hip-hop history. Starting his career in Compton, he shaped the G-funk sound that defined West Coast rap, producing "The Chronic" (1992) and launching the careers of artists including Snoop Dogg and Eminem.',
      },
      {
        heading: 'Death Row and Aftermath',
        text: 'Dre founded Death Row Records in 1991 and later Aftermath Entertainment, becoming one of the most powerful figures in popular music. His trajectory — from Compton\'s streets to the summit of the music industry — made him, along with the rest of NWA, a central figure in the global image of the city that NWA\'s music had made famous.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Dr._Dre_in_2011.jpg/960px-Dr._Dre_in_2011.jpg',
        caption: 'Dr. Dre at the Beats Store grand opening, November 2011',
        credit: 'Wikimedia Commons (CC BY-SA 3.0)',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Dr._Dre_in_2011.jpg',
      },
    ],
    sources: [
      'Straus, "Death of a Suburban Dream" (2014)',
    ],
  },
  {
    id: 'person-13',
    name: 'Ice Cube (O\'Shea Jackson)',
    label: 'Person',
    era: '1980-2000',
    desc: 'Founding member of NWA and later a successful solo artist, actor, and filmmaker. His lyrics provided sharp social commentary on life in Compton and South Central Los Angeles.',
    slug: 'ice-cube',
    type: 'person',
    role: 'Rapper / Actor',
    sections: [
      {
        heading: 'The Poet of South Central',
        text: 'O\'Shea Jackson, known as Ice Cube, was a founding member of NWA and the primary lyricist of the group\'s early work. His lyrics provided sharp, politically charged social commentary on life in Compton and South Central Los Angeles, documenting police violence, poverty, and the daily reality of the crisis-era city.',
      },
      {
        heading: 'From NWA to Hollywood',
        text: 'After leaving NWA, Ice Cube built a successful solo career and then a second career as an actor and filmmaker, writing and starring in "Boyz n the Hood" (1991) and later the Friday film franchise. He became one of the few hip-hop artists to translate musical stardom into enduring Hollywood success — always carrying Compton\'s name with him.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Ice-Cube_2014-01-09-Chicago-photoby-Adam-Bielawski.jpg/960px-Ice-Cube_2014-01-09-Chicago-photoby-Adam-Bielawski.jpg',
        caption: 'Ice Cube at a Chicago screening for "Ride Along," January 2014',
        credit: 'Wikimedia Commons (CC BY-SA 3.0)',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ice-Cube_2014-01-09-Chicago-photoby-Adam-Bielawski.jpg',
      },
    ],
    sources: [
      'Straus, "Death of a Suburban Dream" (2014)',
    ],
  },
  {
    id: 'person-34',
    name: 'MC Ren (Lorenzo Patterson)',
    label: 'Person',
    era: '1980-2000',
    desc: 'Founding member of NWA. His lyrics and performances helped define the gangsta rap sound and brought national attention to life in Compton.',
    slug: 'mc-ren',
    type: 'person',
    role: 'Rapper / NWA Member',
    sections: [
      {
        heading: 'A Voice of NWA',
        text: 'Lorenzo Patterson, known as MC Ren, was a founding member of NWA. His aggressive delivery and lyrics were central to defining the gangsta rap sound on "Straight Outta Compton" (1988) and the group\'s subsequent work.',
      },
      {
        heading: 'Putting Compton on the Map',
        text: 'With NWA, MC Ren helped make Compton a worldwide name, bringing the city\'s street life into the national conversation. The group\'s music, along with "Boyz n the Hood" (1991), cemented Compton\'s image as the emblem of black urban crisis in the popular imagination.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/MC_Ren_of_NWA_Los_Angeles_1990_photographed_by_Ithaka_Darin_Pappas.jpg/960px-MC_Ren_of_NWA_Los_Angeles_1990_photographed_by_Ithaka_Darin_Pappas.jpg',
        caption: 'MC Ren of NWA in Los Angeles, 1990, photographed by Ithaka Darin Pappas',
        credit: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:MC_Ren_of_NWA_Los_Angeles_1990_photographed_by_Ithaka_Darin_Pappas.jpg',
      },
    ],
    sources: [
      'Straus, "Death of a Suburban Dream" (2014)',
    ],
  },
  {
    id: 'person-35',
    name: 'DJ Yella (Antoine Carraby)',
    label: 'Person',
    era: '1980-2000',
    desc: 'Founding member of NWA, serving as the group\'s DJ and producer. A key part of the groundbreaking sound that put Compton on the map worldwide.',
    slug: 'dj-yella',
    type: 'person',
    role: 'DJ / Producer',
    sections: [
      {
        heading: 'The DJ Behind the Sound',
        text: 'Antoine Carraby, known as DJ Yella, was a founding member of NWA, serving as the group\'s DJ and producer. His work alongside Dr. Dre helped craft the hard, spare sound that made "Straight Outta Compton" (1988) a landmark of hip-hop.',
      },
      {
        heading: 'Putting Compton on the Map',
        text: 'NWA\'s music made Compton a worldwide name, and DJ Yella\'s production was a key part of the groundbreaking sound. Along with the group\'s other members, he became part of the city\'s identity — musicians whose art was inseparable from the place that produced them.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/DJ_Yella.jpg/960px-DJ_Yella.jpg',
        caption: 'DJ Yella',
        credit: 'O\u00edsin O\'Connell, CC BY 3.0, via Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:DJ_Yella.jpg',
      },
    ],
    sources: [
      'Straus, "Death of a Suburban Dream" (2014)',
    ],
  },
  {
    id: 'person-14',
    name: 'John Singleton',
    label: 'Person',
    era: '1980-2000',
    desc: 'Academy Award-nominated film director best known for "Boyz n the Hood" (1991). He became the youngest person and first African American ever nominated for Best Director.',
    slug: 'john-singleton',
    type: 'person',
    role: 'Film Director',
    sections: [
      {
        heading: 'Boyz n the Hood',
        text: 'John Singleton directed "Boyz n the Hood" (1991), filmed in South Central Los Angeles, at the age of 24 — becoming the youngest person and the first African American ever nominated for the Academy Award for Best Director. The film\'s unflinching portrait of life in the shadow of gangs and police made it an instant landmark of American cinema.',
      },
      {
        heading: 'Cementing the Image of Compton',
        text: 'Along with NWA\'s "Straight Outta Compton" (1988), Singleton\'s film cemented Compton\'s national image as the emblem of black urban crisis. The city became synonymous in popular culture with gang violence and poverty — an image that has persisted even as Compton\'s demographics continued to change and its community fought to reclaim its narrative.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/John_Singleton_2000.jpg/960px-John_Singleton_2000.jpg',
        caption: 'John Singleton, Washington D.C., 2000',
        credit: 'Wikimedia Commons (CC BY-SA 2.0)',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:John_Singleton_2000.jpg',
      },
    ],
    sources: [
      'Straus, "Death of a Suburban Dream" (2014)',
    ],
  },
  {
    id: 'person-23',
    name: 'Emily E. Straus',
    label: 'Person',
    era: '2000-present',
    desc: 'Historian and author of "Death of a Suburban Dream: Race and Schools in Compton, California" (2014), the most focused scholarly work on Compton\'s history. A former Teach For America teacher in Compton.',
    slug: 'emily-straus',
    type: 'person',
    role: 'Historian',
    sections: [
      {
        heading: 'Death of a Suburban Dream',
        text: 'Emily Straus\'s "Death of a Suburban Dream: Race and Schools in Compton, California" (2014) is the most focused scholarly work on Compton\'s history. She argues that the city\'s educational crisis is "not at heart a crisis of schooling" but rather "a long-term crisis of suburban development" — the result of an inner-ring suburb built on an inadequate tax base.',
      },
      {
        heading: 'From Teach For America to Historian',
        text: 'Straus taught in Compton as a Teach For America teacher before becoming a historian, giving her work unusual firsthand grounding. The book traces Compton from its founding in 1867 through the 2010 "parent trigger" law at McKinley Elementary — the first use of such a law in the United States.',
      },
      {
        heading: 'Key Findings',
        text: 'Straus documents the city\'s structural vulnerabilities: incorporation in 1888 with a weak tax base, the 1933 earthquake\'s crippling school debt, racial covenants through the 1940s, white flight after 1948 and 1965, the 1993 state takeover of Compton Unified — the first California district taken over for both financial and academic failure — and the Latino immigration that transformed the city in the 1990s.',
      },
    ],
    sources: [
      'Straus, "Death of a Suburban Dream: Race and Schools in Compton, California" (2014)',
    ],
  },
  {
    id: 'person-24',
    name: 'Becky M. Nicolaides',
    label: 'Person',
    era: '2000-present',
    desc: 'Historian and author of "My Blue Heaven: Life and Politics in the Working-Class Suburbs of Los Angeles, 1920-1965" (2002). Her framework directly applies to Compton\'s trajectory as a working-class suburb.',
    slug: 'becky-nicolaides',
    type: 'person',
    role: 'Historian',
    sections: [
      {
        heading: 'My Blue Heaven',
        text: 'Becky Nicolaides\'s "My Blue Heaven: Life and Politics in the Working-Class Suburbs of Los Angeles, 1920-1965" (2002) is the most detailed study of the type of community Compton was during its peak period of white working-class development. Though focused on neighboring South Gate, its framework applies directly to Compton\'s similar but accelerated trajectory.',
      },
      {
        heading: 'The Racializing of Local Politics',
        text: 'Nicolaides shows how working-class suburbs were built on ideals of homeownership, self-sufficiency, and local control — while also practicing racial closure. She coins the term "the racializing of local politics" to describe how race became the primary lens through which suburban politics were conducted: covenants, violence, and political action were all deployed to protect property values.',
      },
      {
        heading: 'Owner-Building and Minimal Infrastructure',
        text: 'South Gate thrived by selling cheap empty lots (starting at $490 in 1918) to white homeseekers who built their own homes with minimal regulation. Developers kept taxes low by providing minimal infrastructure — kerosene lamps, cesspools, dusty roads. This deliberate underinvestment meant working-class suburbs entered the postwar era with already-inadequate infrastructure, a pattern Straus documents for Compton as well.',
      },
    ],
    sources: [
      'Nicolaides, "My Blue Heaven: Life and Politics in the Working-Class Suburbs of Los Angeles, 1920-1965" (2002)',
    ],
  },
  {
    id: 'person-26',
    name: 'Natalia Molina',
    label: 'Person',
    era: '2000-present',
    desc: 'Historian and author of "Fit to Be Citizens? Public Health and Race in Los Angeles, 1879-1939" (2006). Her work examines how public health discourse was used to racialize and marginalize immigrant communities in LA.',
    slug: 'natalia-molina',
    type: 'person',
    role: 'Historian',
    sections: [
      {
        heading: 'Fit to Be Citizens?',
        text: 'Natalia Molina\'s "Fit to Be Citizens? Public Health and Race in Los Angeles, 1879-1939" (2006) examines how public health discourse was used to racialize and marginalize Chinese, Japanese, and Mexican immigrants. She argues that cleanliness became "a route to citizenship, to becoming American" — and that health officers served as gatekeepers deciding who could work, attend school, and operate businesses.',
      },
      {
        heading: 'The "Rotten Spot" Discourse',
        text: 'Molina documents how the 1879 rhetoric of Health Officer Dr. Walter Lindley — who called Chinatown "that rotten spot [that pollutes] the air we breathe and poisons the water we drink" — was applied serially to Chinese, then Japanese, then Mexican neighborhoods between 1879 and 1939. The framing obscured the real causes of disease while legitimating spatial control of non-white populations.',
      },
      {
        heading: 'The Graded Racial Continuum',
        text: 'Unlike the black-white binary dominant elsewhere, Molina finds that Los Angeles developed a graded racial continuum — white at top, then Japanese, Chinese, and Mexican populations arranged along a sliding scale of "nonwhiteness." This framework helps explain why Compton\'s black residents faced different barriers than Latinos in the same period, and how medicalized racial stereotypes justified the residential segregation that defined Compton\'s development.',
      },
    ],
    sources: [
      'Molina, "Fit to Be Citizens? Public Health and Race in Los Angeles, 1879-1939" (2006)',
    ],
  },
  {
    id: 'person-31',
    name: 'Marne L. Campbell',
    label: 'Person',
    era: '2000-present',
    desc: 'Historian and author of "Making Black Los Angeles: Class, Gender, and Community, 1850-1917" (2016). Her work documents the preconditions for later black migration to Compton.',
    slug: 'marne-campbell',
    type: 'person',
    role: 'Historian',
    sections: [
      {
        heading: 'Making Black Los Angeles',
        text: 'Marne L. Campbell\'s "Making Black Los Angeles: Class, Gender, and Community, 1850-1917" (2016) examines the formation of Los Angeles\'s African American community, focusing on class, gender, and institution-building. She shows that Black Angelenos never exceeded five percent of the population through 1910, yet built robust institutions — churches, newspapers, mutual aid societies.',
      },
      {
        heading: 'Du Bois vs. Washington in Los Angeles',
        text: 'Campbell documents how both W.E.B. Du Bois (1913) and Booker T. Washington (1903, 1914) visited Los Angeles and reached different conclusions about its promise for African Americans. She argues Du Bois romanticized the city while focusing too narrowly on elite Black Angelenos, overlooking the working-class majority that the Washington-aligned Tuskegee message actually suited better.',
      },
      {
        heading: 'The Preconditions for Compton',
        text: 'Campbell\'s study ends in 1917, just before the Great Migration brought tens of thousands of black Southerners to Los Angeles. Her work documents the preconditions for the later black migration to Compton: a black middle class, a pattern of racial restriction, and institutions that would later serve the city\'s African American community.',
      },
    ],
    sources: [
      'Campbell, "Making Black Los Angeles: Class, Gender, and Community, 1850-1917" (2016)',
    ],
  },
  {
    id: 'person-32',
    name: 'John Mack Faragher',
    label: 'Person',
    era: '2000-present',
    desc: 'Historian and author of "Eternity Street: Violence and Justice in Frontier Los Angeles" (2016). His work establishes the regional context of racial violence that shaped Compton\'s development.',
    slug: 'john-faragher',
    type: 'person',
    role: 'Historian',
    sections: [
      {
        heading: 'Eternity Street',
        text: 'John Mack Faragher\'s "Eternity Street: Violence and Justice in Frontier Los Angeles" (2016) examines violence and the quest for justice from the city\'s founding in 1781 through the late nineteenth century. The title refers to Los Angeles Street, where the city\'s early gallows stood — a nickname that captured the violent racial order of the frontier city.',
      },
      {
        heading: 'The 1871 Chinatown Massacre',
        text: 'Faragher documents how Los Angeles had one of the highest per-capita lynching rates in the country during the 1850s-1870s, culminating in the 1871 Chinatown massacre — the largest mass lynching in American history, in which a mob of approximately 500 white and Latino residents killed 18 Chinese residents (most accounts count 18 victims; some historians, including Natalia Molina, count 19). Vigilance committees operated openly, backed by prominent businessmen and politicians.',
      },
      {
        heading: 'Violence as Property Protection',
        text: 'Faragher shows how violence in frontier Los Angeles was routinely instrumentalized to protect property values — a clear precedent for the racial covenants, police surveillance, and informal intimidation that Compton\'s white residents would later deploy to maintain racial boundaries. The connection between racial violence and real estate economics runs as a thread from the 1850s through the 1965 Watts Rebellion.',
      },
    ],
    sources: [
      'Faragher, "Eternity Street: Violence and Justice in Frontier Los Angeles" (2016)',
    ],
  },
  {
    id: 'person-33',
    name: 'Jules Tygiel',
    label: 'Person',
    era: '2000-present',
    desc: 'Historian and author of "The Great Los Angeles Swindle: Oil, Stocks, and Scandal During the Roaring Twenties" (1994). He documents the booster culture that drove Compton\'s growth.',
    slug: 'jules-tygiel',
    type: 'person',
    role: 'Historian',
    sections: [
      {
        heading: 'The Great Los Angeles Swindle',
        text: 'Jules Tygiel\'s "The Great Los Angeles Swindle: Oil, Stocks, and Scandal During the Roaring Twenties" (1994) recounts the story of the Julian Petroleum Corporation scandal, which he calls the "greatest swindle" in Los Angeles history. He uses the scandal as a window into 1920s Los Angeles — the decade when Compton was transformed from a small farming town into a rapidly growing industrial suburb.',
      },
      {
        heading: 'Compton in the Boom',
        text: 'The 1920s oil boom included major discoveries in the Dominguez Hill area near Compton, discovered 1923, bringing workers, refineries, and related industries to the area. Compton\'s population grew from under 1,500 in 1920 to approximately 13,500 by 1926. Tygiel shows how the era\'s boosterism and speculative mania — the same techniques used to sell house lots in South Gate — laid the groundwork for both Compton\'s growth and its subsequent fiscal vulnerabilities.',
      },
    ],
    sources: [
      'Tygiel, "The Great Los Angeles Swindle: Oil, Stocks, and Scandal During the Roaring Twenties" (1994)',
    ],
  },
  {
    id: 'person-38',
    name: 'Austin Janisch',
    label: 'Person',
    era: '2000-present',
    desc: 'Historian whose 2020 senior thesis examines the 1910 Los Angeles International Aviation Meet and how it minted LA\'s identity as an aviation paradise.',
    slug: 'austin-janisch',
    type: 'person',
    role: 'Historian',
    sections: [
      {
        heading: 'The 1910 Aviation Meet',
        text: 'Austin Janisch\'s 2020 senior honors thesis (URCA Journal, UC Santa Barbara) examines the 1910 Los Angeles International Aviation Meet at Dominguez Field. For ten days in January 1910, an estimated 226,000 spectators converged on the site — nearly matching the entire population of Los Angeles (320,000) — making it the first international air meet in the United States.',
      },
      {
        heading: 'Minting an Aviation Paradise',
        text: 'Janisch argues that the 1910 meet minted Los Angeles\'s identity as an aviation paradise, establishing the model for combining boosters, prize money, and public spectacle that would define the aviation industry\'s relationship with the city. The legacy continues with companies like SpaceX, Virgin Galactic, and Northrop Grumman in the region today — and Dominguez Field itself later became part of the industrial corridor that provided jobs for Compton\'s working class.',
      },
    ],
    sources: [
      'Janisch, "Soaring into Los Angeles: The 1910 LA International Aviation Meet" (2020)',
    ],
  },
  {
    id: 'person-39',
    name: 'Darnell Hunt',
    label: 'Person',
    era: '2000-present',
    desc: 'Co-editor of "Black Los Angeles: American Dreams and Racial Realities" (2010), examining the African American experience in LA including Compton\'s trajectory.',
    slug: 'darnell-hunt',
    type: 'person',
    role: 'Editor / Scholar',
    sections: [
      {
        heading: 'Black Los Angeles',
        text: 'Darnell Hunt co-edited "Black Los Angeles: American Dreams and Racial Realities" (2010) with Ana-Christina Ramon. The interdisciplinary collection examines the African American experience in Los Angeles through four lenses — Space, People, Image, and Action — with chapters directly addressing Compton\'s history and its place within black Los Angeles.',
      },
      {
        heading: 'Compton in Popular Culture',
        text: 'The volume shows how Compton became synonymous with black urban crisis in popular culture while also being home to a substantial black middle class that emerged through public sector employment, particularly in the Compton Unified School District. The book\'s framing — the tension between "American Dreams and Racial Realities" — is the central theme of Compton\'s trajectory from white working-class suburb to iconic black suburb to contemporary Latino-majority city.',
      },
    ],
    sources: [
      'Hunt & Ramon (eds.), "Black Los Angeles: American Dreams and Racial Realities" (2010)',
    ],
  },
  {
    id: 'person-40',
    name: 'Ana-Christina Ramon',
    label: 'Person',
    era: '2000-present',
    desc: 'Co-editor of "Black Los Angeles: American Dreams and Racial Realities" (2010), covering Compton\'s development as a black working-class suburb.',
    slug: 'ana-christina-ramon',
    type: 'person',
    role: 'Editor / Scholar',
    sections: [
      {
        heading: 'Co-editor of Black Los Angeles',
        text: 'Ana-Christina Ramon co-edited "Black Los Angeles: American Dreams and Racial Realities" (2010) with Darnell Hunt, a landmark interdisciplinary collection examining the African American experience in Los Angeles through the themes of Space, People, Image, and Action.',
      },
      {
        heading: 'The Education Crisis',
        text: 'Ramon contributed to the volume\'s examination of the education crisis in black Los Angeles, including the challenges facing the Compton Unified School District — the city\'s largest employer and center of political power. The volume documents how Compton became synonymous with black urban crisis in popular culture even as a substantial black middle class emerged through public sector employment.',
      },
    ],
    sources: [
      'Hunt & Ramon (eds.), "Black Los Angeles: American Dreams and Racial Realities" (2010)',
    ],
  },
  {
    id: 'person-41',
    name: 'William Marshall Jr.',
    label: 'Person',
    era: '2000-present',
    desc: 'Researcher whose paper "The Los Angeles Domino Effect" traces the ethnic transition of Compton and Leimert Park, emphasizing intra-black class distinctions.',
    slug: 'william-marshall-jr',
    type: 'person',
    role: 'Researcher',
    sections: [
      {
        heading: 'The Domino Effect',
        text: 'William Marshall Jr.\'s paper "The Los Angeles Domino Effect" (CSU Dominguez Hills) traces the ethnic transition of Compton and Leimert Park from white to African American to Latino, arguing for a class-based analysis of black suburbanization. It begins with restrictive housing covenants, the 1948 Shelley v. Kraemer case, and the Great Migration of African Americans to Los Angeles during World War II.',
      },
      {
        heading: 'Wives\' Work and Class',
        text: 'Marshall identifies the key class distinction between Compton and Leimert Park: the occupations of wives. Compton\'s black women worked as service workers and industrial operatives, while Leimert Park\'s worked in professional and managerial positions. This intra-black class difference meant Compton families were more economically vulnerable to deindustrialization.',
      },
      {
        heading: 'Carson and the Incorporation Strategy',
        text: 'Marshall documents how Carson incorporated in 1968 specifically to avoid the fate of neighboring cities — by refusing to build low-income housing, it drew black middle-class families away from Compton. This "municipal incorporation as flight" strategy paralleled the earlier secessions of Lynwood and Paramount from the Compton school district, each stripping the city of higher-valued tax territory.',
      },
    ],
    sources: [
      'Marshall Jr., "The Los Angeles Domino Effect: Ethnic Shifts in Los Angeles Neighborhoods, Compton and Leimert Park"',
    ],
  },
  {
    id: 'person-46',
    name: 'Dr. Walter Lindley',
    label: 'Person',
    era: 'pre-1900',
    desc: 'Los Angeles Health Officer who in 1879 called for eradicating Chinatown, describing it as a "rotten spot" that endangered public health. His rhetoric established a template later applied to Japanese and Mexican neighborhoods, using medicalized racial stereotypes to justify segregation and exclusion.',
    slug: 'walter-lindley',
    type: 'person',
    role: 'Health Officer',
    sections: [
      {
        heading: 'The "Rotten Spot"',
        text: 'In 1879, Los Angeles Health Officer Dr. Walter Lindley called for eradicating Chinatown — "that rotten spot [that pollutes] the air we breathe and poisons the water we drink." His rhetoric framed a marginalized neighborhood as a disease threat, identifying Chinese residents as the problem rather than the inadequate sanitation, medical care, and housing that actually produced disease.',
      },
      {
        heading: 'A Template for Exclusion',
        text: 'Historian Natalia Molina shows that Lindley\'s rhetorical pattern was applied serially to Chinese, then Japanese, then Mexican neighborhoods between 1879 and 1939, legitimating spatial control of non-white populations. This medicalization of race provided a "scientific" justification for the residential and educational segregation that defined communities like Compton.',
      },
    ],
    sources: [
      'Molina, "Fit to Be Citizens? Public Health and Race in Los Angeles, 1879-1939" (2006)',
    ],
  },
  {
    id: 'person-47',
    name: 'W.E.B. Du Bois',
    label: 'Person',
    era: '1900-1920',
    desc: 'Pioneering sociologist and civil rights leader who visited Los Angeles in 1913 and wrote admiringly of the city\'s "sensuous beauty" and interracial hospitality. Historians later argue his account focused too narrowly on the city\'s elite black residents and overlooked the working class.',
    slug: 'web-du-bois',
    type: 'person',
    role: 'Scholar / Activist',
    sections: [
      {
        heading: 'Sensuous Beauty',
        text: 'W.E.B. Du Bois visited Los Angeles in 1913 and romanticized the city, emphasizing its "sensuous beauty" and interracial hospitality, and arguing it offered Black Angelenos more than any other region. His account became one of the most quoted assessments of early black Los Angeles.',
      },
      {
        heading: 'The Elite Gaze',
        text: 'Historian Marne L. Campbell argues that Du Bois focused too narrowly on elite Black Angelenos and overlooked the working-class majority — the very population that the Washington-aligned Tuskegee message suited better. The working class that Du Bois missed would, within two decades, be multiplied by the Great Migration and eventually reshape communities like Compton.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/W.E.B._Du_Bois_by_James_E._Purdy%2C_1907.jpg/960px-W.E.B._Du_Bois_by_James_E._Purdy%2C_1907.jpg',
        caption: 'W.E.B. Du Bois, photographed by James E. Purdy in 1907',
        credit: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:W.E.B._Du_Bois_by_James_E._Purdy,_1907.jpg',
      },
    ],
    sources: [
      'Campbell, "Making Black Los Angeles" (2016)',
      'Hunt & Ramon (eds.), "Black Los Angeles" (2010), ch. 1 (P. Robinson)',
    ],
  },
  {
    id: 'person-48',
    name: 'Booker T. Washington',
    label: 'Person',
    era: '1900-1920',
    desc: 'Educator and founder of the Tuskegee Institute who visited Los Angeles in 1903 and 1914 while fundraising. He was more impressed by the practical networking at Tuskegee dinners than by claims of the city\'s racial progress, reflecting a more cautious assessment than Du Bois\'s.',
    slug: 'booker-t-washington',
    type: 'person',
    role: 'Educator / Activist',
    sections: [
      {
        heading: 'Tuskegee\'s Fundraiser',
        text: 'Booker T. Washington visited Los Angeles in 1903 and again in 1914 while fundraising for the Tuskegee Institute, the school he founded and led. Focused on the practical work of raising money, he was more impressed by the idle gossip of one dinner party than by claims of the city\'s racial progress.',
      },
      {
        heading: 'A Cautious Verdict',
        text: 'Washington\'s more cautious assessment contrasted with W.E.B. Du Bois\'s romanticized account of the same city. Historian Marne L. Campbell argues that the Washington-aligned Tuskegee message — emphasizing industrial training and self-help — actually suited the working-class black majority that Du Bois overlooked: the very population that the Great Migration would soon multiply and that would eventually settle communities like Compton.',
      },
    ],
    photos: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Booker_T._Washington_by_Francis_Benjamin_Johnston%2C_c._1895.jpg/960px-Booker_T._Washington_by_Francis_Benjamin_Johnston%2C_c._1895.jpg',
        caption: 'Booker T. Washington, photographed by Francis Benjamin Johnston, c. 1895',
        credit: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Booker_T._Washington_by_Francis_Benjamin_Johnston,_c._1895.jpg',
      },
    ],
    sources: [
      'Campbell, "Making Black Los Angeles" (2016)',
    ],
  },
  {
    id: 'person-49',
    name: 'R.C. Mason',
    label: 'Person',
    era: '1920-1940',
    desc: 'Industrial realtor credited with bringing 19 factories to South Gate, including General Motors, Firestone, Rheem, and Purex, as part of the "Detroit of the Coast" strategy that shaped the industrial character of southeast Los Angeles County, including neighboring Compton.',
    slug: 'rc-mason',
    type: 'person',
    role: 'Industrial Realtor',
    sections: [
      {
        heading: 'The Detroit of the Coast',
        text: 'Industrial realtor R. C. Mason was credited with bringing 19 factories to South Gate, including General Motors, Firestone, Rheem, and Purex, as part of the "Detroit of the Coast" vision that transformed southeast Los Angeles County into the manufacturing heart of Southern California.',
      },
      {
        heading: 'The Industrial Sales Pitch',
        text: 'The four industrial advantages Mason and his fellow boosters promoted were: rail access with four Southern Pacific and Union Pacific "team tracks"; proximity to a white, non-unionized labor force described as "100 per cent American"; low utility costs; and cheap undeveloped land just outside incorporated boundaries. This industrial strategy created jobs but also committed South Gate — and by extension neighboring Compton — to a manufacturing economy that would later deindustrialize.',
      },
    ],
    sources: [
      'Nicolaides, "My Blue Heaven" (2002), ch. 1-2',
    ],
  },
  {
    id: 'person-50',
    name: 'Hugh Pomeroy',
    label: 'Person',
    era: '1920-1940',
    desc: 'South Gate resident who served on the Los Angeles County Regional Planning Commission and helped promote the industrial development strategy that transformed southeast LA County\'s working-class suburbs, including the area around Compton, into a manufacturing corridor.',
    slug: 'hugh-pomeroy',
    type: 'person',
    role: 'Regional Planner',
    sections: [
      {
        heading: 'The Planner and the Booster',
        text: 'Hugh Pomeroy, a South Gate resident serving on the Los Angeles County Regional Planning Commission, helped promote the industrial development strategy that lured heavy industry to southeast Los Angeles County in the 1920s. Alongside industrial realtor R. C. Mason, he was a key figure in the "Detroit of the Coast" vision.',
      },
      {
        heading: 'The Manufacturing Corridor',
        text: 'The strategy transformed the region\'s working-class suburbs — South Gate, and by extension the area around Compton — into a manufacturing corridor. The industrial advantages promoted were rail access, proximity to a white non-unionized labor force, low utility costs, and cheap land. The commitment to manufacturing brought jobs but left the region vulnerable when industry deindustrialized in later decades.',
      },
    ],
    sources: [
      'Nicolaides, "My Blue Heaven" (2002), ch. 1-2',
    ],
  },
  {
    id: 'person-51',
    name: 'J. Jack Willard',
    label: 'Person',
    era: '1940-1960',
    desc: 'Longtime Lynwood resident who said the community resented "being attached to Compton\'s coat tails," capturing the sentiment that drove Lynwood\'s 1950 secession from Compton Union School District.',
    slug: 'j-jack-willard',
    type: 'person',
    role: 'Lynwood Resident',
    sections: [
      {
        heading: 'Compton\'s Coat Tails',
        text: 'J. Jack Willard, a longtime Lynwood resident, said the community resented "being attached to Compton\'s coat tails" — capturing the sentiment of tax- and status-conscious white residents that drove Lynwood\'s withdrawal from the Compton Union School District.',
      },
      {
        heading: 'The Secession of 1950',
        text: 'Lynwood voted to withdraw from Compton Union and create its own unified district in July 1950, at which point it was approximately 3.5 square miles with more than 26,000 residents. The split was hostile: Compton Union stripped the jointly used Lynwood junior high of its furnishings, forcing Lynwood to raise taxes to refurbish it. Paramount followed suit in 1953. Each secession deprived Compton Union of higher-assessed-valuation territory, worsening the district\'s fiscal position — the first of a series of municipal and school secessions that would drain the city\'s resources.',
      },
    ],
    sources: [
      'Straus, "Death of a Suburban Dream" (2014), ch. 2',
    ],
  },
]
