import { AppConfig } from './types';

export const APP_CONFIG: AppConfig = {
  globalCompletion: 67,
  religions: [
    { 
      id: "christianity",
      name: "Christianity", 
      percent: 72, 
      description: "Based on fulfillment of biblical signs in Revelation.",
      iconType: "religion",
      details: {
        intro: "Christian eschatology focuses on the Second Coming of Jesus Christ, preceded by a period of Tribulation. The 'Signs of the Times' (Matthew 24, Revelation) serve as markers for this event.",
        timeline: [
          { year: "33 AD", title: "The Resurrection", description: "The pivotal event initiating the 'Last Days' according to New Testament theology." },
          { year: "1948", title: "Restoration of Israel", description: "The re-establishment of Israel is widely viewed by dispensationalists as a key prophetic super-sign." },
          { year: "Current", title: "Gospel Preached to All Nations", description: "With the internet and global missions, the precondition of Matthew 24:14 is nearing completion." },
          { year: "Prophesied", title: "The Great Apostasy", description: "A mass falling away from faith and truth, predicted to occur prior to the end." },
          { year: "Prophesied", title: "The Mark of the Beast", description: "Implementation of a global economic control system required for buying and selling." }
        ]
      }
    },
    { 
      id: "islam",
      name: "Islam", 
      percent: 65, 
      description: "Based on Minor and Major signs of Qiyamah.",
      iconType: "religion",
      details: {
        intro: "Islamic eschatology (The Day of Qiyamah) is preceded by Minor Signs, which are mostly moral and social, and Major Signs, which are cosmic and supernatural.",
        timeline: [
          { year: "632 AD", title: "Death of the Prophet", description: "The Prophet Muhammad's passing is considered the first sign of the approaching Hour." },
          { year: "Observed", title: "Construction of Tall Buildings", description: "Bedouins competing in constructing tall buildings (skyscrapers in the Gulf) is a specific fulfilled prophecy." },
          { year: "Observed", title: "Widespread Usury (Riba)", description: "The dominance of interest-based global finance is cited as a sign of the end times." },
          { year: "Prophesied", title: "The Mahdi", description: "The arrival of a redeemer who will rule for years before the Day of Judgment." },
          { year: "Prophesied", title: "The Sun Rises from the West", description: "A major cosmic event signifying the closing of the door of repentance." }
        ]
      }
    },
    { 
      id: "hinduism",
      name: "Hinduism", 
      percent: 40, 
      description: "Progress through the Kali Yuga cycle.",
      iconType: "religion",
      details: {
        intro: "Hindu cosmology is cyclical. We are currently in the Kali Yuga (The Age of Iron/Strife), the last and most degenerate of the four yugas, ending with the avatar Kalki.",
        timeline: [
          { year: "3102 BC", title: "Start of Kali Yuga", description: "Traditional date marking the death of Krishna and the beginning of the dark age." },
          { year: "Current", title: "Decline of Dharma", description: "Dharma (righteousness) is said to stand on only one leg (truth) during this age, and even that is withering." },
          { year: "Current", title: "Rise of Materialism", description: "Rulers become unreasonable, levying unfair taxes, and people become addicted to food and wealth." },
          { year: "Future", title: "Shortened Lifespans", description: "It is predicted that human lifespan will decrease drastically as the age progresses." },
          { year: "Prophesied", title: "Arrival of Kalki", description: "The final avatar of Vishnu arrives on a white horse to cleanse the world of impurity." }
        ]
      }
    },
    { 
      id: "buddhism",
      name: "Buddhism", 
      percent: 55, 
      description: "Decline of Dharma and the 5,000 year cycle.",
      iconType: "religion",
      details: {
        intro: "Buddhist prophecy speaks of the gradual disappearance of the Dharma (teachings). The current era is the 'Latter Day of the Law' (Mappō).",
        timeline: [
          { year: "5th C. BC", title: "Parinirvana", description: "The passing of Gautama Buddha marks the beginning of the timeline." },
          { year: "First 500 Yrs", title: "Age of Enlightenment", description: "A period where enlightenment was robust and achievable." },
          { year: "Current", title: "Age of Dharma Decline", description: "Teachings exist but practice is formalistic; genuine realization is rare." },
          { year: "Prophesied", title: "Loss of the Relics", description: "Physical remnants of the Buddha will disappear or sink into the earth." },
          { year: "Future", title: "Maitreya Buddha", description: "The future Buddha arrives when the Dharma has been completely forgotten." }
        ]
      }
    },
    { 
      id: "age-of-earth",
      name: "Age of Earth", 
      percent: 90, 
      description: "Based on geological consensus relative to the planet's habitable lifespan.",
      iconType: "religion",
      details: {
        intro: "While the Earth is 4.5 billion years old, its habitable window is closing. As the sun brightens, the biosphere's remaining lifespan is significantly shorter than its history.",
        timeline: [
          { year: "-4.5 BYA", title: "Formation of Earth", description: "The planet forms from the solar nebula." },
          { year: "-3.5 BYA", title: "First Life", description: "Simple single-celled organisms appear." },
          { year: "Current", title: "Human Civilization", description: "A brief flash in geological time." },
          { year: "+600 MY", title: "C4 Photosynthesis Ends", description: "Low CO2 levels (due to weathering) make photosynthesis impossible for most plants." },
          { year: "+1 BY", title: "Oceans Evaporate", description: "Solar luminosity increases by 10%, causing a moist greenhouse effect that sterilizes the surface." }
        ]
      }
    },
    { 
      id: "spiritual-apostasy",
      name: "Spiritual Apostasy", 
      percent: 70, 
      description: "Based on esoteric interpretations of global moral decline.",
      iconType: "religion",
      details: {
        intro: "Esoteric traditions monitor the 'etheric health' of humanity. This metric tracks the disconnection from spiritual sources and the inversion of traditional values.",
        timeline: [
          { year: "1800s", title: "Industrial Materialism", description: "The shift from agrarian spiritual connection to mechanistic worldview." },
          { year: "1900s", title: "Death of God", description: "Nietzsche's proclamation signifying the collapse of shared metaphysical frameworks." },
          { year: "Current", title: "Hyper-Individualism", description: "The dissolution of community and sacred bonds in favor of the atomized self." },
          { year: "Prophesied", title: "The Great Forgetfulness", description: "Total amnesia of the soul's origin and purpose." },
          { year: "Future", title: "Ethereal Separation", description: "The point where the material world becomes fully severed from spiritual sustenance." }
        ]
      }
    }
  ],
  science: [
    { 
      id: "climate-risk",
      name: "Climate Risk", 
      percent: 58, 
      description: "Approaching irreversible tipping points.",
      iconType: "water",
      details: {
        intro: "Climate risk assesses the probability of triggering runaway greenhouse effects that render large portions of the planet uninhabitable for human civilization.",
        evidence: [
          { label: "Atmospheric CO2", value: "421 ppm", description: "Highest levels in 14 million years.", trend: "up" },
          { label: "Global Temp", value: "+1.2°C", description: "Degrees above pre-industrial baseline.", trend: "up" },
          { label: "Ocean Acidity", value: "30% Inc", description: "Increase in acidity since industrial revolution.", trend: "up" },
          { label: "Arctic Sea Ice", value: "-13%", description: "Decline per decade in September extent.", trend: "down" }
        ]
      }
    },
    { 
      id: "asteroid-risk",
      name: "Asteroid Risk", 
      percent: 12, 
      description: "Probability of Near-Earth Object impact.",
      iconType: "asteroid",
      details: {
        intro: "The risk of a Near-Earth Object (NEO) greater than 1km in diameter impacting Earth. While low probability, the impact would be an extinction-level event.",
        evidence: [
          { label: "Tracked NEOs", value: "34,000+", description: "Number of near-earth objects currently cataloged.", trend: "up" },
          { label: "PHAs", value: "2,300", description: "Potentially Hazardous Asteroids (>140m).", trend: "stable" },
          { label: "Apophis", value: "2029", description: "Next major close approach (will miss, but close).", trend: "stable" },
          { label: "Impact Interval", value: "500k yrs", description: "Average time between 1km+ impacts.", trend: "stable" }
        ]
      }
    },
    { 
      id: "ai-risk",
      name: "AI Risk", 
      percent: 70, 
      description: "Potential for superintelligence misalignment.",
      iconType: "tech",
      details: {
        intro: "The risk that an Artificial General Intelligence (AGI) could surpass human control and act in ways that are catastrophically misaligned with human survival.",
        evidence: [
          { label: "Compute Growth", value: "10x / yr", description: "Increase in computing power used for training models.", trend: "up" },
          { label: "P(Doom)", value: "10-50%", description: "Surveyed researcher estimates of existential catastrophe.", trend: "up" },
          { label: "Capabilities", value: "Rapid", description: "Reasoning, coding, and persuasion skills emerging faster than predicted.", trend: "up" },
          { label: "Alignment", value: "Unsolved", description: "No proven method exists to guarantee superintelligent obedience.", trend: "stable" }
        ]
      }
    },
    { 
      id: "nuclear-war",
      name: "Nuclear War", 
      percent: 85, 
      description: "Doomsday Clock setting (90 seconds to midnight).",
      iconType: "fire",
      details: {
        intro: "The probability of a global thermonuclear exchange, driven by geopolitical instability, proliferation, and breakdown of deterrence treaties.",
        evidence: [
          { label: "Doomsday Clock", value: "90 sec", description: "Closest setting to midnight in history.", trend: "up" },
          { label: "Warheads", value: "12,500", description: "Global inventory of nuclear weapons.", trend: "down" },
          { label: "Proliferation", value: "High", description: "More state and non-state actors seeking capability.", trend: "up" },
          { label: "Treaties", value: "Failing", description: "Collapse of START and INF treaties.", trend: "down" }
        ]
      }
    },
    { 
      id: "resource-depletion",
      name: "Resource Depletion", 
      percent: 65, 
      description: "Critical scarcity of arable land and fresh water.",
      iconType: "earth",
      details: {
        intro: "The exhaustion of finite planetary resources required to sustain industrial civilization and human biology.",
        evidence: [
          { label: "Topsoil Loss", value: "60 Years", description: "Estimated harvests remaining at current degradation rates.", trend: "down" },
          { label: "Fresh Water", value: "Scarce", description: "2/3 of world population may face shortages by 2025.", trend: "down" },
          { label: "Sand", value: "Critical", description: "Shortage of construction-grade sand for concrete/glass.", trend: "down" },
          { label: "Phosphorus", value: "Peak", description: "Essential fertilizer mineral nearing production peak.", trend: "down" }
        ]
      }
    },
    { 
      id: "pandemic-potential",
      name: "Pandemic Potential", 
      percent: 75, 
      description: "Risk of engineered or novel zoonotic super-pathogens.",
      iconType: "bio",
      details: {
        intro: "The likelihood of a catastrophic biological event, either natural (zoonotic spillover) or artificial (lab leak/bioweapon), causing global collapse.",
        evidence: [
          { label: "Gain of Function", value: "Active", description: "Research creating enhanced pathogens continues globally.", trend: "up" },
          { label: "Zoonosis", value: "Freq Inc", description: "Rate of spillover events increasing due to habitat loss.", trend: "up" },
          { label: "Bio-Tech cost", value: "Dropping", description: "Cost to synthesize DNA falling, democratizing access.", trend: "down" },
          { label: "Urbanization", value: "High", description: "Density aids rapid transmission of novel viruses.", trend: "up" }
        ]
      }
    },
    { 
      id: "biodiversity-collapse",
      name: "Biodiversity Collapse", 
      percent: 68, 
      description: "Acceleration of the Holocene extinction event.",
      iconType: "warning",
      details: {
        intro: "The rapid loss of species and ecosystem integrity, threatening the web of life that supports the biosphere.",
        evidence: [
          { label: "Extinction Rate", value: "1000x", description: "Times higher than background geological rate.", trend: "up" },
          { label: "Wildlife Pop", value: "-69%", description: "Average decline in vertebrate populations since 1970.", trend: "down" },
          { label: "Insect Biomass", value: "-2.5%/yr", description: "Rapid decline threatening pollination and food webs.", trend: "down" },
          { label: "Dead Zones", value: "Expanding", description: "Hypoxic ocean areas doubling every decade.", trend: "up" }
        ]
      }
    }
  ]
};