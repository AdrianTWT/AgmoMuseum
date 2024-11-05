import Activity from "../models/activity";
import moment from "moment";

export const ACTIVITIES = [
  new Activity('a1', 'In-reach Programme', moment(new Date(2025, 0, 12, 13, 0)).format("ddd, DD MMM YYYY, h:mm A"), 'Talk A: How to Invest', 'Sasana Kijang, Bank Negara Malaysia', 'Unlimited Slots', require('../assets/images/A-invest.jpg')),
  new Activity('a2', 'In-reach Programme', moment(new Date(2025, 0, 14, 13, 0)).format("ddd, DD MMM YYYY, h:mm A"), 'Talk B: How to Save Money', 'Sasana Kijang, Bank Negara Malaysia', 'Unlimited Slots', require('../assets/images/B-money.jpg')),
  new Activity('a3', 'In-reach Programme', moment(new Date(2025, 0, 16, 13, 0)).format("ddd, DD MMM YYYY, h:mm A"), 'Talk C: How to Retire Early', 'Sasana Kijang, Bank Negara Malaysia', 'Unlimited Slots', require('../assets/images/C-retire.jpg')),
  new Activity('a4', 'Art Bazaar', moment(new Date(2025, 0, 18, 13, 0)).format("ddd, DD MMM YYYY, h:mm A"), 'Expedition 1: Classic Arts', 'Sasana Kijang, Bank Negara Malaysia', 'Unlimited Slots', require('../assets/images/D-classic.jpg')),
  new Activity('a5', 'Art Bazaar', moment(new Date(2025, 0, 20, 13, 0)).format("ddd, DD MMM YYYY, h:mm A"), 'Expedition 2: Modern Arts', 'Sasana Kijang, Bank Negara Malaysia', 'Unlimited Slots', require('../assets/images/E-modern.jpg')),
  new Activity('a6', 'Art Bazaar', moment(new Date(2025, 0, 22, 13, 0)).format("ddd, DD MMM YYYY, h:mm A"), 'Expedition 3: Ancient Arts', 'Sasana Kijang, Bank Negara Malaysia', 'Unlimited Slots', require('../assets/images/F-ancient.jpg')),
  new Activity('a7', 'Art Bazaar', moment(new Date(2025, 0, 24, 13, 0)).format("ddd, DD MMM YYYY, h:mm A"), 'Expedition 4: Abstract Arts', 'Sasana Kijang, Bank Negara Malaysia', 'Unlimited Slots', require('../assets/images/G-abstract.jpg')),
  new Activity('a8', 'Guided Tour', moment(new Date(2025, 0, 26, 13, 0)).format("ddd, DD MMM YYYY, h:mm A"), 'Tour I: Journey to the West', 'Sasana Kijang, Bank Negara Malaysia', 'Limited Slots', require('../assets/images/H-west.jpg')),
  new Activity('a9', 'Guided Tour', moment(new Date(2025, 0, 28, 13, 0)).format("ddd, DD MMM YYYY, h:mm A"), 'Tour II: World War One', 'Sasana Kijang, Bank Negara Malaysia', 'Limited Slots', require('../assets/images/I-wwone.jpg')),
  new Activity('a10', 'Guided Tour', moment(new Date(2025, 0, 30, 13, 0)).format("ddd, DD MMM YYYY, h:mm A"), 'Tour III: World War Two', 'Sasana Kijang, Bank Negara Malaysia', 'Limited Slots', require('../assets/images/J-wwtwo.jpg')),
  new Activity('a11', 'Guided Tour', moment(new Date(2025, 0, 31, 13, 0)).format("ddd, DD MMM YYYY, h:mm A"), 'Tour IV: Human History', 'Sasana Kijang, Bank Negara Malaysia', 'Limited Slots', require('../assets/images/K-history.jpg')),
]