import { nanoid } from 'nanoid';
import trueLove from '../../images/true-love.jpg';
import friends from '../../images/friends.jpg';
import children from '../../images/children.jpg';
import understandingWomen from '../../images/understanding-women.jpg';
import trust from '../../images/trust.jpg';
import tolerance from '../../images/tolerance.jpg';
import loyalty from '../../images/loyalty.jpg';
import empathy from '../../images/empathy.jpg';
import selfLove from '../../images/self-love.jpg';
import happiness from '../../images/happiness.jpg';
import patience from '../../images/patience.jpg';
import confidence from '../../images/confidence.jpg';
import innerPeace from '../../images/inner-peace.jpg';
import clearConscience from '../../images/clear-conscience.jpg';
import enlightenment from '../../images/enlightenment.jpg';
import robustMentalHealth from '../../images/robust-mental-health.jpg';
import goodGenes from '../../images/good-genes.jpg';
import youth from '../../images/youth.jpg';
import immortality from '../../images/immortality.jpg';
import premonitions from '../../images/premonitions.jpg';
import workEthic from '../../images/work-ethic.jpg';
import knowledge from '../../images/knowledge.jpg';
import twentyFiveHourDay from '../../images/25-hour-day.jpg';
import classyLady from '../../images/class.jpg';
import luck from '../../images/luck.jpg';
import creativity from '../../images/creativity.jpg';
import honestPolitician from '../../images/honest-politician.jpg';
import planetB from '../../images/planet-b.jpg';
import cureForStupidity from '../../images/cure-for-stupidity.jpg';


const productData = [
  {
    id: nanoid(),
    name: 'true love',
    category: 'relationships',
    price: 59.99,
    description: 'Snag the man/woman/other of your dreams, regardless of their feelings towards you.',
    url: trueLove,
  },
  {
    id: nanoid(),
    name: 'genuine friends',
    category: 'relationships',
    price: 24.99,
    description: 'Turn those 1000 Facebook friends into 1000 genuine friends who would literally kill for you.',
    url: friends,
  },
  {
    id: nanoid(),
    name: 'well-adjusted children',
    category: 'relationships',
    price: 54.99,
    description: 'Transform your kids from drab to fab. Perfect gift for the hands-off parent.',
    url: children,
  },
  {
    id: nanoid(),
    name: 'complete understanding of women',
    category: 'relationships',
    price: 39.99,
    description: 'An antidote to your woman\'s non-sensical rants and ramblings.',
    url: understandingWomen,
  },
  {
    id: nanoid(),
    name: 'trust',
    category: 'relationships',
    price: 24.99,
    description: 'Make bonds as strong as Gorilla Glue.',
    url: trust,
  },
  {
    id: nanoid(),
    name: 'tolerance',
    category: 'relationships',
    price: 29.99,
    description: 'Be tolerant against everything but intolerance.',
    url: tolerance,
  },
  {
    id: nanoid(),
    name: 'loyalty',
    category: 'relationships',
    price: 19.99,
    description: 'Build a solid client base with no fuss. Used by Apple, Google, and Waitrose.',
    url: loyalty,
  },
  {
    id: nanoid(),
    name: 'empathy',
    category: 'relationships',
    price: 9.99,
    description: 'Can\'t help being a bitch? Empathy will help you see things from another perspective.',
    url: empathy,
  },
  {
    id: nanoid(),
    name: 'self-love',
    category: 'body&mind',
    price: 34.99,
    description: 'Because if you can\'t love yourself, how in the hell are you gonna love somebody else?',
    url: selfLove,
  },
  {
    id: nanoid(),
    name: 'happiness',
    category: 'body&mind',
    price: 114.99,
    description: 'The worldwide bestseller - cast out the bad juju and get some light into your life.',
    url: happiness,
  },
  {
    id: nanoid(),
    name: 'patience',
    category: 'body&mind',
    price: 19.99,
    description: 'For those of us who simply can\'t wait for Elder Scrolls 6.',
    url: patience,
  },
  {
    id: nanoid(),
    name: 'confidence',
    category: 'body&mind',
    price: 54.99,
    description: 'Get the confidence to work that body and preach your truths.',
    url: confidence,
  },
  {
    id: nanoid(),
    name: 'inner peace',
    category: 'body&mind',
    price: 24.99,
    description: 'Calm your frantic mind and see the joy in everyday life - no marijuana neccessary',
    url: innerPeace,
  },
  {
    id: nanoid(),
    name: 'common sense',
    category: 'body&mind',
    price: 9.99,
    description: 'If you had any this would already be in your cart.',
    url: null,
  },
  {
    id: nanoid(),
    name: 'clear conscience',
    category: 'body&mind',
    price: 64.99,
    description: 'Just clobbered a guy with a clawhammer and feeling pretty guilty? Take the weight off with Clear Conscience.',
    url: clearConscience,
  },
  {
    id: nanoid(),
    name: 'enlightenment',
    category: 'body&mind',
    price: 84.99,
    description: 'Because nobody got time to sit in silence for ten years.',
    url: enlightenment,
  },
  {
    id: nanoid(),
    name: 'robust mental health',
    category: 'body&mind',
    price: 54.99,
    description: 'Put this on your CV to make it really pop.',
    url: robustMentalHealth,
  },
  {
    id: nanoid(),
    name: 'good genes',
    category: 'body&mind',
    price: 84.99,
    description: 'Made famous by Influencer Shawty Diamante, Good Genes will have you insta-hot in days.',
    url: goodGenes,
  },
  {
    id: nanoid(),
    name: 'youth',
    category: 'time',
    price: 199.99,
    description: 'Bring back your glory days and quit looking like an old trout.',
    url: youth,
  },
  {
    id: nanoid(),
    name: 'immortality',
    category: 'time',
    price: 249.99,
    description: 'See your great-great-grandchildren grow up to be lovely talentless Influencers.',
    url: immortality,
  },
  {
    id: nanoid(),
    name: 'experience',
    category: 'time',
    price: 49.99,
    description: 'When job listings require 20 years of experience by age 18, you need more Experience.',
    url: null,
  },
  {
    id: nanoid(),
    name: 'premonitions',
    category: 'time',
    price: 99.99,
    description: 'See what fate has in store for you and your loved ones. (Note: Altering the course of fate is forbidden).',
    url: premonitions,
  },
  {
    id: nanoid(),
    name: 'work ethic',
    category: 'work',
    price: 44.99,
    description: 'A perfect gift for couch potatoes; get their hands out of the Cheetohs and onto the keyboard.',
    url: workEthic,
  },
  {
    id: nanoid(),
    name: 'knowledge',
    category: 'work',
    price: 29.99,
    description: 'We can\'t guarantee you\'l get that promotion if you\'re not hot, but Knowledge will certainly help.',
    url: knowledge,
  },
  {
    id: nanoid(),
    name: 'good reputation',
    category: 'work',
    price: 14.99,
    description: 'While you think you\'re appreciated, they think you\'re Creepy Claude from Accounting.',
    url: null,
  },
  {
    id: nanoid(),
    name: '25-hour day',
    category: 'work',
    price: 69.99,
    description: 'Now you have time to be an influencer, entrepreneur, gym-goer, alchoholic AND narcissist.',
    url: twentyFiveHourDay,
  },
  {
    id: nanoid(),
    name: 'respect',
    category: 'work',
    price: 24.99,
    description: 'Earn the respect of your homies with one easy payment.',
    url: null,
  },
  {
    id: nanoid(),
    name: 'purpose',
    category: 'misc',
    price: 69.99,
    description: 'Are you merely ambling through life? Buy a roadmap with Purpose.',
    url: null,
  },
  {
    id: nanoid(),
    name: 'class',
    category: 'misc',
    price: 24.99,
    description: 'Wish you were more Tiffany than Tesco? Get some Class.',
    url: classyLady,
  },
  {
    id: nanoid(),
    name: 'luck',
    category: 'misc',
    price: 39.99,
    description: 'Don\'t just wish them good luck, give it to them! Leprechaun not included.',
    url: luck,
  },
  {
    id: nanoid(),
    name: 'creativity',
    category: 'misc',
    price: 14.99,
    description: 'If your songs all sound like potential chart-toppers, you need some Creativity.',
    url: creativity,
  },
  {
    id: nanoid(),
    name: 'honest politician',
    category: 'misc',
    price: 99.99,
    description: 'Buy a local MP you can trust. Product of New Zealand.',
    url: honestPolitician,
  },
  {
    id: nanoid(),
    name: 'planet b',
    category: 'misc',
    price: 499.99,
    description: 'Offset your carbon footprint with Planet B - popular amongst billionaires.',
    url: planetB,
  },
  {
    id: nanoid(),
    name: 'cure for stupidity',
    category: 'misc',
    price: 19.99,
    description: 'Save time and lives with this long-time bestseller.',
    url: cureForStupidity,
  },
];

export default productData;
