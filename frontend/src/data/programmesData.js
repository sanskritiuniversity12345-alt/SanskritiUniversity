// Refactored programmes data with added schools
const programmes = [
{
  title: 'Engineering & IT',
  imgAlt: 'Engineering & IT',
  imgSrc: '/programImages/IT.jpeg',
  courses: [
    // Under Graduate Programmes
    'B.Tech – CSE',
    'B.Tech – Mechanical Engineering',
    'B.Tech – CSE with Artificial Intelligence & Machine Learning',
    'BCA (Bachelor of Computer Applications)',
    'BCA – Artificial Intelligence & Machine Learning',
    'BCA – Data Science',
    'BCA – Cyber Security',

    // Post Graduate Programmes
    'M.Tech – CSE',
    'MCA (Master of Computer Application)',

    // Integrated Programmes
    'Integrated BCA + MCA',

    // Doctoral Programmes
    'Ph.D – Computer Science & Engineering',
    'Ph.D – Mechanical Engineering'
  ]
}
,
{
  title: 'Management & Commerce',
  imgAlt: 'Management & Commerce',
  imgSrc: '/programImages/management.jpeg',
  courses: [
    // Under Graduate Programmes
    'BBA',
    'BBA – Logistics Management',
    'B.Com',
    'B.Com (Hons.)',

    // Post Graduate Programmes
    'MBA – Dual Specialization (Human Resource, Finance, International Business, Marketing Management)',
    'MBA – Agri-Business',

    // Integrated Programmes
    'Integrated BBA + MBA',

    // Doctoral Programmes
    'Ph.D – Management'
  ]
},
{
  title: 'Tourism and Hospitality',
  imgAlt: 'Tourism and Hospitality',
  imgSrc: '/programImages/tourism.jpg',
  courses: [
    // Under Graduate Programmes
    'B.Sc – Hotel Management'
  ]
},
{
  title: 'Education',
  imgAlt: 'Education',
  imgSrc: '/programImages/education.jpeg',
  courses: [
    // Under Graduate Programmes
    'B.Ed',
    'BA B.Ed',
    'B.Sc B.Ed (Integrated)',
    'B.El.Ed',

    // Post Graduate Programmes
    'M.Ed',

    // Diploma Programmes
    'Diploma in Elementary Education (D.El.Ed)',

    // Doctoral Programmes
    'Ph.D – Education'
  ]
},
{
  title: 'Rehabilitation',
  imgAlt: 'Rehabilitation',
  imgSrc: '/programImages/rehabilitation.jpeg',
  courses: [
    // Under Graduate Programmes
    'B.Ed Special Education – Learning Disability (LD)',
    'B.Ed Special Education – Hearing Impairment (HI)',
    'B.Ed Special Education – Intellectual Disability (ID)',
    'B.Ed Special Education – Visual Impairment (VI)',

    // Post Graduate / Diploma Programmes
    'D.Ed Special Education – Visual Impairment (VI)',
    'D.Ed Special Education – Intellectual Disability (ID)',
    'D.Ed Special Education with MD'
  ]
},
{
  title: 'Yoga & Naturopathy',
  imgAlt: 'Yoga & Naturopathy',
  imgSrc: '/programImages/yogic.jpeg',
  courses: [
    // Under Graduate Programmes
    'BNYS'

    // Post Graduate Programmes
    // None specified
  ]
},
{
  title: 'Law & Legal Studies',
  imgAlt: 'Law & Legal Studies',
  imgSrc: '/programImages/law.jpeg',
  courses: [
    // Integrated Programmes
    'BA LLB'
  ]
},
{
  title: 'Pharmaceutical Sciences',
  imgAlt: 'Pharmaceutical Sciences',
  imgSrc: '/programImages/pharmacal.jpg',
  courses: [
    // Under Graduate Programmes
    'B.Pharma',
    'B.Pharma – Lateral Entry',

    // Diploma Programmes
    'D.Pharma',

    // Doctoral Programmes
    'Ph.D – Pharmaceutical Science'
  ]
},
{
  title: 'Nursing',
  imgAlt: 'Nursing',
  imgSrc: '/programImages/nursing.jpeg',
  courses: [
    // Under Graduate Programmes
    'B.Sc – Nursing',

    // Diploma Programmes
    'Diploma in Auxiliary Nursing & Midwifery (ANM)',
    'Diploma in General Nursing & Midwifery (GNM)'
  ]
},
{
  title: 'Pharmacy & Research Centre',
  imgAlt: 'Pharmacy & Research Centre',
  imgSrc: '/programImages/pharmacy.jpg',
  courses: [
    // Under Graduate Programmes
    'B.Pharma',
    'B.Pharma – Lateral Entry',

    // Post Graduate Programmes
    'M.Pharma',

    // Diploma Programmes
    'D.Pharma'
  ]
},

{
  title: 'Basic & Applied Sciences',
  imgAlt: 'Basic & Applied Sciences',
  imgSrc: '/programImages/science.jpeg',
  courses: [
    // Under Graduate Programmes
    'B.Sc – Biotech',
    'B.Sc – Forensic',
    'BA – Psychology (Hons.)',
    'BA – Psychology',

    // Post Graduate Programmes
    'M.Sc – Biotech',

    // Doctoral Programmes
    'Ph.D – Chemistry',
    'Ph.D – Mathematics',
    'Ph.D – Physics',
    'Ph.D – Sanskrit'
  ]
},
{
  title: 'Agriculture',
  imgAlt: 'Agriculture',
  imgSrc: '/programImages/agriculture.jpg',
  courses: [
    // Under Graduate Programmes
    'B.Sc – Agriculture (Hons.)',

    // Post Graduate Programmes
    'M.Sc – Agriculture',

    // Doctoral Programmes
    'Ph.D – Agriculture'
  ]
},
{
  title: 'Ayurvedic Medical College & Hospital',
  imgAlt: 'Ayurveda',
  imgSrc: '/programImages/ayurveda.jpeg',
  courses: [
    // Under Graduate Programmes
    'BAMS',

    // Post Graduate Programmes
    'M.S. Ayurveda – Prasuti Stri Rog (Gynaecology)',
    'M.S. Ayurveda – Shalya Tantra (Surgery)',

    // Doctoral Programmes
    'Ph.D – Ayurveda',

    // Certificate Programmes
    'Certificate Course in Panchkarma'
  ]
},
{
  title: 'Medical & Allied Sciences',
  imgAlt: 'Medical & Allied Sciences',
  imgSrc: '/programImages/Medical.jpg',
  courses: [
    // Under Graduate Programmes
    'Bachelor of Medical Lab Science (B.M.L.S)',
    'B.Sc – Cardiovascular Technology',
    'B.Sc – Radiology & Imaging Technology',
    'B.Voc – MLT',
    'BPT',
    'B.Sc – Operation Theatre Technology',

    // Post Graduate Programmes
    'MPT'
  ]
},

 {
  title: 'University Polytechnic',
  imgAlt: 'University Polytechnic',
  imgSrc: '/programImages/diploma.jpeg',
  courses: [
    // Diploma Programmes
    'Diploma in Computer Science & Engineering',
    'Diploma in Civil Engineering',
    'Diploma in Electrical Engineering',
    'Diploma in Mechanical (Automobile) Engineering',
    'Diploma in Mechanical (Production) Engineering',
    'Diploma after 10+2 – Civil Engineering',
    'Diploma after 10+2 – Computer Science & Engineering',
    'Diploma after 10+2 – Electrical Engineering',
    'Diploma after 10+2 – Mechanical (Automobile) Engineering',
    'Diploma after 10+2 – Mechanical (Production) Engineering'
  ]
}

];

export default programmes;
