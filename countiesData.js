const {
    createApp
} = Vue

createApp({
    data() {
        return {
            counties: [
                {
                    county: 'Bedfordshire',
                    link: 'https://etsy.me/3fa2NY1',
                    portrait: true,
                    districts: [
                        { authority: "Bedford" },
                        { authority: "Luton" }
                    ],
                    cities: false,
                    landmark: [
                        { location: 'Bedford' },
                        { location: 'Luton' },
                        { location: 'Leighton Buzzard' },
                    ],
                    motto: '',
                    translation: '',
                    coastal: false,
                    flag: true,
                    closeby: [
                        { county: 'Cambridgeshire' },
                        { county: 'Hertfordshire' },
                        { county: 'Buckinghamshire' },
                        { county: "Northamptonshire" }
                    ]
                },
                {
                    county: 'Berkshire',
                    link: 'https://etsy.me/3SGlZdy',
                    portrait: '',
                    districts: [
                        { authority: "Bracknell Forest" },
                        { authority: "Reading" },
                        { authority: "Slough" },
                        { authority: "West Berkshire" },
                        { authority: "Windsor & Maidenhead" },
                        { authority: "Wokingham" }
                    ],
                    cities: true,
                    landmark: [
                        { location: 'Reading' },
                        { location: 'Newbury' },
                        { location: 'Maidenhead' },
                        { location: 'Slough' },
                        { location: "Windsor" },
                    ],
                    motto: '',
                    translation: '',
                    coastal: false,
                    flag: true,
                    closeby: [
                        { county: 'Oxfordshire' },
                        { county: 'Buckinghamshire' },
                        { county: 'Hampshire' },
                        { county: 'Wiltshire' },
                        { county: 'Surrey' }
                    ]
                },
                {
                    county: 'Bristol',
                    link: 'https://etsy.me/3SVt3U5',
                    portrait: true,
                    districts: [],
                    cities: false,
                    landmark: [
                        { location: 'Avonmouth' },
                        { location: 'Westbury-on-Trym' },
                        { location: 'Fishponds' }
                    ],
                    coastal: true,
                    motto: 'Virtue et Industria',
                    translation: 'virtue and industry',
                    flag: 'crest',
                    closeby: [
                        { county: 'Gloucestershire' },
                        { county: 'Somerset' }
                    ]
                },
                {
                    county: 'Buckinghamshire',
                    link: 'https://etsy.me/3W7Gi6z',
                    portrait: true,
                    districts: [
                        { authority: 'Milton Keynes' }
                    ],
                    cities: true,
                    landmark: [
                        { location: 'Milton Keynes' },
                        { location: 'Aylesbury' },
                        { location: 'Amersham' },
                        { location: 'High Wycombe' },
                        { location: 'Buckingham' }
                    ],
                    coastal: true,
                    motto: 'Vestigia Nulla Retrorsum',
                    translation: 'No turning back',
                    flag: true,
                    closeby: [
                        { county: 'Oxfordshire' },
                        { county: 'Northamptonshire' },
                        { county: 'Bedfordshire' },
                        { county: 'Hertfordshire' },
                        { county: 'Greater London' }
                    ]
                },
                {
                    county: 'Cambridgeshire',
                    link: 'https://etsy.me/3UL7cQz',
                    portrait: true,
                    districts: [
                        { authority: 'Peterborough' }
                    ],
                    cities: true,
                    landmark: [
                        { location: 'Cambridge' },
                        { location: 'Ely' },
                        { location: 'Peterborough' }
                    ],
                    coastal: false,
                    motto: 'Corde Uno Sapientes Simus',
                    translation: 'With one heart let us be wise',
                    flag: true,
                    closeby: [
                        { county: 'Bedfordshire' },
                        { county: 'Norfolk' },
                        { county: 'Suffolk' },
                        { county: 'Essex' }
                    ]
                },
                {
                    county: 'Cheshire',
                    link: 'https://etsy.me/3WwVL0r',
                    portrait: '',
                    districts: [
                        { authority: 'Cheshire East' },
                        { authority: 'Cheshire West & Chester' },
                        { authority: 'Halton' },
                        { authority: 'Warrington' }
                    ],
                    cities: true,
                    landmark: [
                        { location: 'Chester' },
                        { location: 'Warrington' },
                        { location: 'Macclesfield' },
                        { location: 'Crewe' },
                        { location: 'Widnes' }
                    ],
                    coastal: true,
                    motto: 'Jure Et Dignitate Gladii',
                    translation: 'By the right and dignity of the sword',
                    flag: true,
                    closeby: [
                        { county: 'Merseyside' },
                        { county: 'Greater Manchester' },
                        { county: 'Staffordshire' },
                        { county: 'Shropshire' }
                    ]
                },
                {
                    county: 'Cornwall',
                    link: 'https://etsy.me/3t31Sfy',
                    portrait: true,
                    districts: [
                        { authority: 'Isles of Scilly' }
                    ],
                    cities: true,
                    landmark: [
                        { location: 'Truro' },
                        { location: 'Falmouth' },
                        { location: 'Newquay' },
                        { location: 'St Ives' },
                        { location: 'Redruth' }
                    ],
                    coastal: true,
                    motto: 'Onen hag oll',
                    translation: 'One and all',
                    flag: true,
                    closeby: [
                        { county: 'Devon' },
                        { county: 'Dorset' },
                        { county: 'Somerset' }
                    ]
                },
                {
                    county: 'Cumbria',
                    link: 'https://etsy.me/3t4rgkM',
                    portrait: true,
                    districts: [],
                    cities: true,
                    landmark: [
                        { location: 'Carlisle' },
                        { location: 'Barrow-in-Furness' },
                        { location: 'Windermere' },
                        { location: 'Penrith' },
                        { location: 'Ambleside' }
                    ],
                    coastal: true,
                    motto: 'Ad Montes Oculos Levavi',
                    translation: 'I have lifted up mine eyes unto the hills',
                    flag: true,
                    closeby: [
                        { county: 'Northumberland' },
                        { county: 'County Durham' },
                        { county: 'North Yorkshire' },
                        { county: 'Lancashire' }
                    ]
                },
                {
                    county: 'Derbyshire',
                    link: 'https://etsy.me/3zNz3r6',
                    portrait: true,
                    districts: [],
                    cities: true,
                    landmark: [
                        { location: 'Derby' },
                        { location: 'Bakewell' },
                        { location: 'Alfreton' },
                        { location: 'Ripley' },
                        { location: 'Belper' }
                    ],
                    coastal: false,
                    motto: 'Bene consulendo',
                    translation: 'By wise deliberation',
                    flag: true,
                    closeby: [
                        { county: 'Cheshire' },
                        { county: 'Staffordshire' },
                        { county: 'South Yorkshire' },
                        { county: 'Nottinghamshire' },
                        { county: 'Leicestershire' }
                    ]
                },
                {
                    county: 'Devon',
                    link: 'https://etsy.me/3zMfkIj',
                    portrait: true,
                    districts: [
                        { authority: 'Plymouth' },
                        { authority: 'Torbay' }
                    ],
                    cities: true,
                    landmark: [
                        { location: 'Exeter' },
                        { location: 'Plymouth' },
                        { location: 'Ilfracombe' },
                        { location: 'Torquay' },
                        { location: 'Exmouth' }
                    ],
                    coastal: true,
                    motto: 'Auxilio Divino',
                    translation: "With God's help",
                    flag: true,
                    closeby: [
                        { county: 'Cornwall' },
                        { county: 'Somerset' },
                        { county: 'Dorset' }
                    ]
                },
                {
                    county: 'Dorset',
                    link: 'https://etsy.me/3FP0Rzg',
                    portrait: '',
                    districts: [
                        { authority: 'Bournemouth, Christchurch & Poole' }
                    ],
                    cities: false,
                    landmark: [
                        { location: 'Bournemouth' },
                        { location: 'Poole' },
                        { location: 'Christchurch' },
                        { location: 'Dorchester' },
                        { location: 'Bridport' }
                    ],
                    coastal: true,
                    motto: '',
                    translation: "",
                    flag: true,
                    closeby: [
                        { county: 'Somerset' },
                        { county: 'Wiltshire' },
                        { county: 'Hampshire' },
                        { county: 'Isle of Wight' }
                    ]
                },
                {
                    county: 'County Durham',
                    link: 'https://etsy.me/3FLtmOf',
                    portrait: true,
                    districts: [
                        { authority: 'Darlington' },
                        { authority: 'Stockton-on-Tees'}
                    ],
                    cities: false,
                    landmark: [
                        { location: 'Durham' },
                        { location: 'Hartlepool' },
                        { location: 'Darlington' },
                        { location: 'Barnards Castle' }
                    ],
                    coastal: true,
                    motto: '',
                    translation: "",
                    flag: true,
                    closeby: [
                        { county: 'Northumberland' },
                        { county: 'Cumbria' },
                        { county: 'North Yorkshire' }
                    ]
                },
                {
                    county: 'East Riding',
                    link: 'https://etsy.me/3FS7Rv4',
                    portrait: true,
                    districts: [
                        { authority: 'Kingston-upon-Hull' }
                    ],
                    cities: true,
                    landmark: [
                        { location: 'Hull' },
                        { location: 'Bridlington' },
                        { location: 'Hornsea' }
                    ],
                    coastal: true,
                    motto: 'Tradition and progress',
                    translation: "",
                    flag: true,
                    closeby: [
                        { county: 'North Yorkshire' },
                        { county: 'South Yorkshire' },
                        { county: 'West Yorkshire' },
                        { county: 'Lincolnshire' }
                    ]
                },
                {
                    county: 'East Sussex',
                    link: 'https://etsy.me/3FMsrwO',
                    portrait: '',
                    districts: [
                        { authority: 'Brighton and Hove' }
                    ],
                    cities: true,
                    landmark: [
                        { location: 'Brighton' },
                        { location: 'Eastbourne' },
                        { location: 'Hastings' }
                    ],
                    coastal: true,
                    motto: '',
                    translation: "",
                    flag: true,
                    closeby: [
                        { county: 'West Sussex' },
                        { county: 'Surrey' },
                        { county: 'Kent' }
                    ]
                },
                {
                    county: 'Essex',
                    link: 'https://etsy.me/3Wx3A6d',
                    portrait: '',
                    districts: [
                        { authority: 'Southend-on-Sea' },
                        { authority: 'Thurrock' }
                    ],
                    cities: true,
                    landmark: [
                        { location: 'Colchester' },
                        { location: 'Chelmsford' },
                        { location: 'Southend-on-Sea' }
                    ],
                    coastal: true,
                    motto: 'Many Minds, One Heart',
                    translation: "",
                    flag: true,
                    closeby: [
                        { county: 'Suffolk' },
                        { county: 'Cambridgeshire' },
                        { county: 'Hertfordshire' },
                        { county: 'Greater London' }
                    ]
                },
                {
                    county: 'Gloucestershire',
                    link: 'https://etsy.me/3UbAqrE',
                    portrait: true,
                    districts: [
                        { authority: 'South Gloucestershire' }
                    ],
                    cities: true,
                    landmark: [
                        { location: 'Gloucester' },
                        { location: 'Tewkesbury' },
                        { location: 'Cirencester' },
                        { location: 'Cheltenham' }
                    ],
                    coastal: true,
                    motto: 'Prorsum semper',
                    translation: "Ever forward",
                    flag: true,
                    closeby: [
                        { county: 'Herefordshire' },
                        { county: 'Worcestershire' },
                        { county: 'Oxfordshire' },
                        { county: 'Wiltshire' },
                        { county: 'Bristol' }
                    ]
                },
                {
                    county: 'Greater London',
                    link: 'https://etsy.me/3UjV48O',
                    portrait: '',
                    districts: [
                        { authority: 'the London Boroughs' }
                    ],
                    cities: true,
                    landmark: [
                        { location: 'City of London' },
                        { location: 'City of Westminster' },
                        { location: 'Croydon' },
                        { location: 'Islington' },
                        { location: 'Enfield' }
                    ],
                    coastal: false,
                    motto: '',
                    translation: "",
                    flag: false,
                    closeby: [
                        { county: 'Hertfordshire' },
                        { county: 'Essex' },
                        { county: 'Kent' },
                        { county: 'Surrey' },
                        { county: 'Berkshire' },
                        { county: 'Buckinghamshire' }
                    ]
                },
                {
                    county: 'Greater Manchester',
                    link: 'https://etsy.me/3UaMh9k',
                    portrait: '',
                    districts: [],
                    cities: true,
                    landmark: [
                        { location: 'Manchester' },
                        { location: 'Salford' },
                        { location: 'Stockport' },
                        { location: 'Oldham' },
                        { location: 'Rochdale' }
                    ],
                    coastal: true,
                    motto: '',
                    translation: "",
                    flag: false,
                    closeby: [
                        { county: 'Lancashire' },
                        { county: 'West Yorkshire' },
                        { county: 'Derbyshire' },
                        { county: 'Staffordshire' },
                        { county: 'Cheshire' },
                        { county: 'Merseyside' }
                    ]
                },
                {
                    county: 'Hampshire',
                    link: 'https://etsy.me/3Wz00Zm',
                    portrait: true,
                    districts: [
                        { authority: 'Portsmouth' },
                        { authority: 'Southampton' }
                    ],
                    cities: true,
                    landmark: [
                        { location: 'Southampton' },
                        { location: 'Portsmouth' },
                        { location: 'Winchester' },
                        { location: 'Aldershot' }
                    ],
                    coastal: true,
                    motto: '',
                    translation: "",
                    flag: true,
                    closeby: [
                        { county: 'Dorset' },
                        { county: 'Wiltshire' },
                        { county: 'Berkshire' },
                        { county: 'Surrey' },
                        { county: 'West Sussex' },
                        { county: 'Isle of Wight' }
                    ]
                },
                {
                    county: 'Herefordshire',
                    link: 'https://etsy.me/3U9EQiV',
                    portrait: true,
                    districts: [],
                    cities: true,
                    landmark: [
                        { location: 'Hereford' },
                        { location: 'Leominster' },
                        { location: 'Ledbury' }
                    ],
                    coastal: false,
                    motto: 'Pulchra terra Dei donum',
                    translation: "This fair land is the gift of God",
                    flag: true,
                    closeby: [
                        { county: 'Shropshire' },
                        { county: 'Worcestershire' },
                        { county: 'Gloucestershire' }
                    ]
                },
                {
                    county: 'Hertfordshire',
                    link: 'https://etsy.me/3NBJEev',
                    portrait: true,
                    districts: [],
                    cities: true,
                    landmark: [
                        { location: 'St Albans' },
                        { location: 'Hertford' },
                        { location: 'Watford' },
                        { location: 'Welyn Garden City' }
                    ],
                    coastal: false,
                    motto: 'Trust and fear not',
                    translation: "",
                    flag: true,
                    closeby: [
                        { county: 'Buckinghamshire' },
                        { county: 'Bedfordshire' },
                        { county: 'Cambridgeshire' },
                        { county: 'Essex' },
                        { county: 'Greater London' }
                    ]
                },
                {
                    county: 'Isle of Wight',
                    link: 'https://etsy.me/3t2Whpf',
                    portrait: '',
                    districts: [],
                    cities: false,
                    landmark: [
                        { location: 'Newport' },
                        { location: 'Cowes' }
                    ],
                    coastal: true,
                    motto: 'All this beauty is of God',
                    translation: "",
                    flag: true,
                    closeby: [
                        { county: 'Hampshire' },
                        { county: 'Dorset' },
                        { county: 'West Sussex' }
                    ]
                },
                {
                    county: 'Kent',
                    link: 'https://etsy.me/3zMsKny',
                    portrait: '',
                    districts: [
                        { authority: 'Medway' }
                    ],
                    cities: true,
                    landmark: [
                        { location: 'Canterbury' },
                        { location: 'Maidstone' },
                        { location: 'Dover' },
                        { location: 'Margate' },
                        { location: 'Dartford' }
                    ],
                    coastal: true,
                    motto: 'Invicta',
                    translation: "undefeated",
                    flag: true,
                    closeby: [
                        { county: 'Surrey' },
                        { county: 'East Sussex' },
                        { county: 'Greater London' }
                    ]
                },
                {
                    county: 'Lancashire',
                    link: 'https://etsy.me/3zM8F0Q',
                    portrait: true,
                    districts: [
                        { authority: 'Blackburn with Darwen' },
                        { authority: 'Blackpool & Lancashire' }
                    ],
                    cities: true,
                    landmark: [
                        { location: 'Lancaster' },
                        { location: 'Preston' },
                        { location: 'Blackburn' },
                        { location: 'Blackpool' },
                        { location: 'Morecambe' }
                    ],
                    coastal: true,
                    motto: 'In Concilio Consilium',
                    translation: "In Council is Wisdom",
                    flag: true,
                    closeby: [
                        { county: 'Cumbria' },
                        { county: 'North Yorkshire' },
                        { county: 'West Yorkshire' },
                        { county: 'Greater Manchester' },
                        { county: 'Merseyside' }
                    ]
                },
                {
                    county: 'Leicestershire',
                    link: 'https://etsy.me/3fGKB8L',
                    portrait: true,
                    districts: [
                        { authority: 'Leicester' }
                    ],
                    cities: true,
                    landmark: [
                        { location: 'Leicester' },
                        { location: 'Market Harborough' },
                        { location: 'Melton Mowbray' }
                    ],
                    coastal: false,
                    motto: "For'ard and For'ard",
                    translation: "",
                    flag: true,
                    closeby: [
                        { county: 'Derbyshire' },
                        { county: 'Nottinghamshire' },
                        { county: 'Lincolnshire' },
                        { county: 'Northamptonshire' },
                        { county: 'Warwickshire' }
                    ]
                },
                {
                    county: 'Lincolnshire',
                    link: 'https://etsy.me/3FPhWcf',
                    portrait: true,
                    districts: [
                        { authority: 'North Lincolnshire' }
                        , { authority: 'North East Lincolnshire' }
                    ],
                    cities: true,
                    landmark: [
                        { location: 'Lincoln' },
                        { location: 'Grimsby' },
                        { location: 'Cleethorpes' },
                        { location: 'Scunthorpe' },
                        { location: 'Boston' }
                    ],
                    coastal: true,
                    motto: "Land and God",
                    translation: "",
                    flag: true,
                    closeby: [
                        { county: 'East Riding' },
                        { county: 'Nottinghamshire' },
                        { county: 'Cambridgeshire' },
                        { county: 'Leicestershire' },
                        { county: 'Norfolk' }
                    ]
                },
                {
                    county: 'Merseyside',
                    link: 'https://etsy.me/3Uc9wjo',
                    portrait: true,
                    districts: [],
                    cities: true,
                    landmark: [
                        { location: 'Liverpool' },
                        { location: 'Southport' },
                        { location: 'St Helens' },
                        { location: 'Bootle' },
                        { location: 'Wallasey' }
                    ],
                    coastal: true,
                    motto: "",
                    translation: "",
                    flag: true,
                    closeby: [
                        { county: 'Lancashire' },
                        { county: 'Cheshire' },
                        { county: 'Greater Manchester' }
                    ]
                },
                {
                    county: 'Norfolk',
                    link: 'https://etsy.me/3hgbhO4',
                    portrait: '',
                    districts: [],
                    cities: true,
                    landmark: [
                        { location: 'Norwich' },
                        { location: 'Great Yarmouth' },
                        { location: "King's Lynn" },
                        { location: 'Thetford' },
                        { location: 'Swaffam' }
                    ],
                    coastal: true,
                    motto: "",
                    translation: "",
                    flag: true,
                    closeby: [
                        { county: 'Lincolnshire' },
                        { county: 'Cambridgeshire' },
                        { county: 'Suffolk' }
                    ]
                },
                {
                    county: 'Northamptonshire',
                    link: 'https://etsy.me/3DDhdIt',
                    portrait: true,
                    districts: [
                        { authority: 'North Northamptonshire' },
                        { authority: 'West Northamptonshire' }
                    ],
                    cities: false,
                    landmark: [
                        { location: 'Northampton' },
                        { location: 'Kettering' },
                        { location: "Corby" },
                        { location: 'Rushden' },
                        { location: 'Daventry' }
                    ],
                    coastal: false,
                    motto: "Rosa Concordia Signum",
                    translation: "The rose, emblem of harmony",
                    flag: true,
                    closeby: [
                        { county: 'Lincolnshire' },
                        { county: 'South Yorkshire' },
                        { county: 'Derbyshire' }
                    ]
                },
                {
                    county: 'Northumberland',
                    link: 'https://etsy.me/3UdL5lU',
                    portrait: true,
                    districts: [],
                    cities: false,
                    landmark: [
                        { location: 'Berwick-upon-Tweed' },
                        { location: 'Hexham' },
                        { location: "Blythe" },
                        { location: 'Morpeth' }
                    ],
                    coastal: true,
                    motto: "",
                    translation: "",
                    flag: true,
                    closeby: [
                        { county: 'Cumbria' },
                        { county: 'County Durham' }
                    ]
                },
                {
                    county: 'North Yorkshire',
                    link: 'https://etsy.me/3NLSNkD',
                    portrait: '',
                    districts: [
                        { authority: 'Middlesborough' },
                        { authority: 'Redcar & Cleveland' },
                        { authority: 'York' }
                    ],
                    cities: true,
                    landmark: [
                        { location: 'York' },
                        { location: 'Rippon' },
                        { location: "Middlesborough" },
                        { location: 'Whitby' },
                        { location: 'Scarborough' }
                    ],
                    coastal: true,
                    motto: "Unitate Fortior",
                    translation: "Stronger by union",
                    flag: false,
                    closeby: [
                        { county: 'West Yorkshire' },
                        { county: 'South Yorkshire' },
                        { county: 'East Riding' }
                    ]
                },
                {
                    county: 'Nottinghamshire',
                    link: 'https://etsy.me/3U9tBqH',
                    portrait: true,
                    districts: [],
                    cities: true,
                    landmark: [
                        { location: 'Nottingham' },
                        { location: 'Worksop' }
                    ],
                    coastal: false,
                    motto: "Sapienter proficiens",
                    translation: "Progress with wisdom",
                    flag: true,
                    closeby: [
                        { county: 'South Yorkshire' },
                        { county: 'Derbyshire' },
                        { county: 'Lincolnshire' },
                        { county: 'Leicestershire' }
                    ]
                },
                {
                    county: 'Oxfordshire',
                    link: 'https://etsy.me/3DIT4Qz',
                    portrait: true,
                    districts: [],
                    cities: true,
                    landmark: [
                        { location: 'Oxford' },
                        { location: 'Banbury' },
                        { location: 'Henley-on-Thames' },
                        { location: 'Abingdon' },
                        { location: 'Bicester' }
                    ],
                    coastal: false,
                    motto: "Sapre Aude",
                    translation: "Dare to be Wise",
                    flag: true,
                    closeby: [
                        { county: 'Gloucestershire' },
                        { county: 'Warwickshire' },
                        { county: 'Buckinghamshire' },
                        { county: 'Berkshire' },
                        { county: 'Wiltshire' }
                    ]
                },
                {
                    county: 'Rutland',
                    link: 'https://etsy.me/3zMILdj',
                    portrait: true,
                    districts: [],
                    cities: false,
                    landmark: [
                        { location: 'Oakham' },
                        { location: 'Uppingham' }
                    ],
                    coastal: false,
                    motto: "Maltum in Parvo",
                    translation: "Much in little",
                    flag: true,
                    closeby: [
                        { county: 'Leicestershire' },
                        { county: 'Lincolnshire' },
                        { county: 'Cambridgeshire' },
                        { county: 'Northamptonshire' }
                    ]
                },
                {
                    county: 'Shropshire',
                    link: 'https://etsy.me/3E4TcLT',
                    portrait: true,
                    districts: [
                        { authority: 'Telford & Wrekin' }
                    ],
                    cities: false,
                    landmark: [
                        { location: 'Shrewsbury' },
                        { location: 'Telford' },
                        { location: 'Whitchurch' },
                        { location: 'Ludlow' },
                        { location: 'Bridgnorth' }
                    ],
                    coastal: false,
                    motto: "Floreat Salopia",
                    translation: "May Shropshire flourish",
                    flag: true,
                    closeby: [
                        { county: 'Cheshire' },
                        { county: 'Staffordshire' },
                        { county: 'Herefordshire' }
                    ]
                },
                {
                    county: 'Somerset',
                    link: 'https://etsy.me/3t3zgm8',
                    portrait: '',
                    districts: [
                        { authority: 'Bath & North East Somerset' },
                        { authority: 'North Somerset' }
                    ],
                    cities: true,
                    landmark: [
                        { location: 'Bath' },
                        { location: 'Wells' },
                        { location: 'Glastonbury' },
                        { location: 'Weston-Super-Mare' },
                        { location: 'Yeovil' }
                    ],
                    coastal: true,
                    motto: "Sumorsǣte ealle",
                    translation: "All The People of Somerset",
                    flag: true,
                    closeby: [
                        { county: 'Bristol' },
                        { county: 'Wiltshire' },
                        { county: 'Dorset' },
                        { county: 'Devon' }
                    ]
                },
                {
                    county: 'South Yorkshire',
                    link: 'https://etsy.me/3hihxVl',
                    portrait: '',
                    districts: [],
                    cities: true,
                    landmark: [
                        { location: 'Doncaster' },
                        { location: 'Sheffield' },
                        { location: 'Barnsley' },
                        { location: 'Rotherham' },
                        { location: 'Maltby' }
                    ],
                    coastal: false,
                    motto: "",
                    translation: "",
                    flag: false,
                    closeby: [
                        { county: 'North Yorkshire' },
                        { county: 'West Yorkshire' },
                        { county: 'East Riding' },
                        { county: 'Derbyshire' },
                        { county: 'Nottinghamshire' }
                    ]
                },
                {
                    county: 'Staffordshire',
                    link: 'https://etsy.me/3NFYHUr',
                    portrait: true,
                    districts: [
                        { authority: 'Stoke-on-Trent' }
                    ],
                    cities: true,
                    landmark: [
                        { location: 'Stoke-on-Trent' },
                        { location: 'Lichfield' },
                        { location: 'Uttoxeter' },
                        { location: 'Stafford' },
                        { location: 'Stone' }
                    ],
                    coastal: false,
                    motto: "The Knot Unites",
                    translation: "",
                    flag: true,
                    closeby: [
                        { county: 'Shropshire' },
                        { county: 'Cheshire' },
                        { county: 'Derbyshire' },
                        { county: 'West Midlands' }
                    ]
                },
                {
                    county: 'Suffolk',
                    link: 'https://etsy.me/3WyOUDw',
                    portrait: '',
                    districts: [],
                    cities: false,
                    landmark: [
                        { location: 'Ipswich' },
                        { location: 'Lowestoft' },
                        { location: 'Bury St Edmunds' },
                        { location: 'Newmarket' },
                        { location: 'Felixstowe' }
                    ],
                    coastal: true,
                    motto: "Guide Our Endeavour",
                    translation: "",
                    flag: true,
                    closeby: [
                        { county: 'Norfolk' },
                        { county: 'Cambridgeshire' },
                        { county: 'Essex' }
                    ]
                },
                {
                    county: 'Surrey',
                    link: 'https://etsy.me/3U8fQsr',
                    portrait: '',
                    districts: [],
                    cities: false,
                    landmark: [
                        { location: 'Guildford' },
                        { location: 'Dorking' },
                        { location: 'Reigate' },
                        { location: 'Leatherhead' },
                        { location: 'Epsom' }
                    ],
                    coastal: false,
                    motto: "",
                    translation: "",
                    flag: true,
                    closeby: [
                        { county: 'Berkshire' },
                        { county: 'Hampshire' },
                        { county: 'West Sussex' },
                        { county: 'Kent' },
                        { county: 'Greater London' }
                    ]
                },
                {
                    county: 'Tyne & Wear',
                    link: 'https://etsy.me/3UbIpFk',
                    portrait: true,
                    districts: [],
                    cities: true,
                    landmark: [
                        { location: 'Newcastle upon Tyne' },
                        { location: 'Sunderland' },
                        { location: 'Gateshead' },
                        { location: 'Tynemouth' }
                    ],
                    coastal: true,
                    motto: "",
                    translation: "",
                    flag: true,
                    closeby: [
                        { county: 'Northumberland' },
                        { county: 'County Durham' }
                    ]
                },
                {
                    county: 'Warwickshire',
                    link: 'https://etsy.me/3zN7rT5',
                    portrait: true,
                    districts: [],
                    cities: false,
                    landmark: [
                        { location: 'Stratford-upon-Avon' },
                        { location: 'Warwick' },
                        { location: 'Rugby' },
                        { location: 'Royal Leamington Spa' }
                    ],
                    coastal: false,
                    motto: "Non Sanz Droict",
                    translation: "Not without right",
                    flag: true,
                    closeby: [
                        { county: 'West Midlands' },
                        { county: 'Leicestershire' },
                        { county: 'Leicestershire' },
                        { county: 'Northamptonshire' },
                        { county: 'Oxfordshire' },
                        { county: 'Worcestershire' }
                    ]
                },
                {
                    county: 'West Midlands',
                    link: 'https://etsy.me/3t3sMnp',
                    portrait: '',
                    districts: [],
                    cities: true,
                    landmark: [
                        { location: 'Birmingham' },
                        { location: 'Wolverhampton' },
                        { location: 'Coventry' },
                        { location: 'Dudley' },
                        { location: 'Walsall' }
                    ],
                    coastal: false,
                    motto: "",
                    translation: "",
                    flag: true,
                    closeby: [
                        { county: 'Staffordshire' },
                        { county: 'Warwickshire' },
                        { county: 'Worcestershire' }
                    ]
                },
                {
                    county: 'West Sussex',
                    link: 'https://etsy.me/3fEaNAQ',
                    portrait: '',
                    districts: [],
                    cities: true,
                    landmark: [
                        { location: 'Chichester' },
                        { location: 'Crawley' },
                        { location: 'Worthing' },
                        { location: 'Bognor Regis' }
                    ],
                    coastal: true,
                    motto: "",
                    translation: "",
                    flag: true,
                    closeby: [
                        { county: 'Hampshire' },
                        { county: 'Surrey' },
                        { county: 'East Sussex' }
                    ]
                },
                {
                    county: 'West Yorkshire',
                    link: 'https://etsy.me/3zKukGM',
                    portrait: '',
                    districts: [],
                    cities: true,
                    landmark: [
                        { location: 'Bradford' },
                        { location: 'Leeds' },
                        { location: 'Wakefield' }
                    ],
                    coastal: false,
                    motto: "",
                    translation: "",
                    flag: false,
                    closeby: [
                        { county: 'North Yorkshire' },
                        { county: 'South Yorkshire' },
                        { county: 'Lancashire' },
                        { county: 'Greater Manchester' }
                    ]
                },
                {
                    county: 'Wiltshire',
                    link: 'https://etsy.me/3t3taST',
                    portrait: true,
                    districts: [
                        { authority: 'Swindon'}
                    ],
                    cities: true,
                    landmark: [
                        { location: 'Swindon' },
                        { location: 'Salisbury' },
                        { location: 'Trowbridge' },
                        { location: 'Chippenham' },
                        { location: 'Marlborough' }
                    ],
                    coastal: false,
                    motto: "",
                    translation: "",
                    flag: true,
                    closeby: [
                        { county: 'Somerset' },
                        { county: 'Gloucestershire' },
                        { county: 'Hampshire' },
                        { county: 'Dorset' },
                        { county: 'Berkshire' }
                    ]
                },
                {
                    county: 'Worcestershire',
                    link: 'https://etsy.me/3FPC6TA',
                    portrait: true,
                    districts: [],
                    cities: true,
                    landmark: [
                        { location: 'Worcester' },
                        { location: 'Kidderminster' },
                        { location: 'Redditch' },
                        { location: 'Malvern' },
                        { location: 'Evesham' }
                    ],
                    coastal: false,
                    motto: "",
                    translation: "",
                    flag: true,
                    closeby: [
                        { county: 'Herefordshire' },
                        { county: 'Shropshire' },
                        { county: 'West Midlands' },
                        { county: 'Warwickshire' },
                        { county: 'Gloucestershire' }
                    ]
                }
            ],
            message: 'English Counties Copypasta!'
        }
    },
    methods: {
        getLink(county) {
            return this.counties.find(c => c.county.toLowerCase() === county.toLowerCase())?.link
        }
    }
}).mount('#app')