'use strict';
const bcrypt = require('bcrypt')


module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Users', [
        {firstName: 'John', lastName: 'Johne', email: 'john@doe.com', hashedPassword: bcrypt.hashSync('P@ssw0rd', 10)
        , createdAt: new Date(), updatedAt: new Date() },  
        {firstName: 'Jon', lastName: 'Johne', email: 'jon@doe.com', hashedPassword: bcrypt.hashSync('P@ssw0rd', 10)
        , createdAt: new Date(), updatedAt: new Date() },  
        {firstName: 'Jean', lastName: 'Valjean', email: 'jean@doe.com', hashedPassword: bcrypt.hashSync('P@ssw0rd', 10)
        , createdAt: new Date(), updatedAt: new Date() },  
        {firstName: 'Jonathan', lastName: 'Johns', email: 'jonathan@doe.com', hashedPassword: bcrypt.hashSync('P@ssw0rd', 10)
        , createdAt: new Date(), updatedAt: new Date() },  
        {firstName: 'Geon', lastName: 'Johnson', email: 'geon@doe.com', hashedPassword: bcrypt.hashSync('P@ssw0rd', 10)
        , createdAt: new Date(), updatedAt: new Date() }  
      ], {});

    queryInterface.bulkInsert('Movies', [
      {
        title: 'Reservoir Dogs',
        posterPath: '/AjTtJNumZyUDz33VtMlF1K8JPsE.jpg',
        tmdbId: 500,
        genres: 'Crime',
        overview:
          'A botched robbery indicates a police informant, and the pressure mounts in the aftermath at a warehouse. Crime begets violence as the survivors -- veteran Mr. White, newcomer Mr. Orange, psychopathic parolee Mr. Blonde, bickering weasel Mr. Pink and Nice Guy Eddie -- unravel.',
        releaseDate: '1992-09-02',
        runtime: 99
      },
      {
        title: 'Grizzly Man',
        posterPath: '/zuZWpcuye25rpsiZ4XzsAvmLDHG.jpg',
        tmdbId: 501,
        genres: 'Documentary',
        overview:
          'Werner Herzog\'s documentary film about the "Grizzly Man" Timothy Treadwell and what the thirteen summers in a National Park in Alaska were like in one man\'s attempt to protect the grizzly bears. The film is full of unique images and a look into the spirit of a man who sacrificed himself for nature.',
        releaseDate: '2005-08-12',
        runtime: 103
      },
      {
        title: 'Fail Safe',
        posterPath: '/qrsj5hort5xkLOKw9NyraGMnlVP.jpg',
        tmdbId: 502,
        genres: 'Drama',
        overview:
          'Because of a technical defect an American bomber team mistakenly orders the destruction of Moscow. The President of the United States has but little time to prevent an atomic catastrophe from occurring.',
        releaseDate: '1964-10-07',
        runtime: 112
      },
      {
        title: 'Poseidon',
        posterPath: '/cCx2Ead8KoZhHofsAAr7tyrjfDo.jpg',
        tmdbId: 503,
        genres: 'Adventure',
        overview:
          'A packed cruise ship traveling the Atlantic is hit and overturned by a massive wave, compelling the passengers to begin a dramatic fight for their lives.',
        releaseDate: '2006-05-10',
        runtime: 99
      },
      {
        title: 'Monster',
        posterPath: '/aevmNtJCNG4ZlfEeEGZ79frMUes.jpg',
        tmdbId: 504,
        genres: 'Crime',
        overview:
          'An emotionally scarred highway drifter shoots a sadistic trick who rapes her, and ultimately becomes America\'s first female serial killer.',
        releaseDate: '2003-12-24',
        runtime: 110
      },
      {
        title: 'Johnny Handsome',
        posterPath: '/hdEIkpL17rvfZH0l34FJ8H9LAa.jpg',
        tmdbId: 505,
        genres: 'Crime',
        overview:
          'A career criminal who has been deformed since birth is given a new face by a kindly doctor and paroled from prison. It appears that he has gone straight, but he is really planning his revenge on the man who killed his mentor and sent him to prison.',
        releaseDate: '1989-09-12',
        runtime: 94
      },
      {
        title: 'Marnie',
        posterPath: '/mwEuBWMJyebtJ1OP4W2jeRcVf3k.jpg',
        tmdbId: 506,
        genres: 'Crime',
        overview:
          'Marnie is a thief, a liar, and a cheat. When her new boss, Mark Rutland, catches on to her routine kleptomania, she finds herself being blackmailed.',
        releaseDate: '1964-07-17',
        runtime: 130
      },
      {
        title: 'Killing Zoe',
        posterPath: '/k3UEKMVnkljOlsO5sLmz87YGlaG.jpg',
        tmdbId: 507,
        genres: 'Action',
        overview:
          'Zed is an American vault-cracker who travels to Paris to meet up with his old friend Eric. Eric and his gang have planned to raid the only bank in the city which is open on Bastille day. After offering his services, Zed soon finds himself trapped in a situation beyond his control when heroin abuse, poor planning and a call-girl named Zoe all conspire to turn the robbery into a very bloody siege.',
        releaseDate: '1993-10-01',
        runtime: 96
      },
      {
        title: 'Love Actually',
        posterPath: '/7QPeVsr9rcFU9Gl90yg0gTOTpVv.jpg',
        tmdbId: 508,
        genres: 'Comedy',
        overview:
          'Follows seemingly unrelated people as their lives begin to intertwine while they fall in – and out – of love. Affections languish and develop as Christmas draws near.',
        releaseDate: '2003-09-07',
        runtime: 135
      },
      {
        title: 'Notting Hill',
        posterPath: '/cBpef6K40Su2CcBb3c18WdwRFCL.jpg',
        tmdbId: 509,
        genres: 'Romance',
        overview:
          'William Thacker is a London bookstore owner whose humdrum existence is thrown into romantic turmoil when famous American actress Anna Scott appears in his shop. A chance encounter over spilled orange juice leads to a kiss that blossoms into a full-blown affair. As the average bloke and glamorous movie star draw closer and closer together, they struggle to reconcile their radically different lifestyles in the name of love.',
        releaseDate: '1999-05-13',
        runtime: 124
      },
      {
        title: 'One Flew Over the Cuckoo\'s Nest',
        posterPath: '/3jcbDmRFiQ83drXNOvRDeKHxS0C.jpg',
        tmdbId: 510,
        genres: 'Drama',
        overview:
          'While serving time for insanity at a state mental hospital, implacable rabble-rouser, Randle Patrick McMurphy, inspires his fellow patients to rebel against the authoritarian rule of head nurse, Mildred Ratched.',
        releaseDate: '1975-11-18',
        runtime: 133
      },
      {
        title: 'The Promised Land',
        posterPath: '/uwMs9axSBS0opiO7Ih2J3AjUvMv.jpg',
        tmdbId: 511,
        genres: 'Drama',
        overview:
          'The Polish film based on the book of the same name by Wladyslaw Reymont. Taking place in the nineteenth century town of Łódź, Poland, three friends want to make a lot of money by building and investing in a textile factory. An exceptional portrait of rapid industrial expansion shown through the eyes of one Polish town.',
        releaseDate: '1975-02-21',
        runtime: 179
      },
      {
        title: 'Scoop',
        posterPath: '/aHvZYoQNRTMrfs46pj64b9GrbaK.jpg',
        tmdbId: 512,
        genres: 'Comedy',
        overview:
          'An American journalism student in London scoops a big story, and begins an affair with an aristocrat as the incident unfurls.',
        releaseDate: '2006-07-27',
        runtime: 96
      },
      {
        title: 'Fire',
        posterPath: '/jDUCcZ7bBkqhbZ8R0vml3YUd4GG.jpg',
        tmdbId: 513,
        genres: 'Drama',
        overview:
          'In a barren, arranged marriage to an amateur swami who seeks enlightenment through celibacy, Radha\'s life takes an irresistible turn when her beautiful young sister-in-law seeks to free herself from the confines of her own loveless marriage.',
        releaseDate: '1997-08-22',
        runtime: 108
      },


      {
        title: 'Dial M for Murder',
        posterPath: '/4qPIsFXLVH9feiRBpCf2XRZqK4k.jpg',
        tmdbId: 521,
        genres: 'Crime',
        overview: 'An ex-tennis pro carries out a plot to have his wife murdered after discovering she is having an affair, and assumes she will soon leave him for the other man anyway. When things go wrong, he improvises a new plan—to frame her for murder instead.',
        releaseDate: '1954-05-29',
        runtime: 105
      },
      {
        title: 'Ed Wood',
        posterPath: '/mwIpZTVgnHl08RvNFvgHCINR8BL.jpg',
        tmdbId: 522,
        genres:
          'Comedy',

        overview: 'The mostly true story of the legendary "worst director of all time", who, with the help of his strange friends, filmed countless B-movies without ever becoming famous or successful.',
        releaseDate: '1994-09-27',
        runtime: 127
      },
      {
        title: 'Requiem',
        posterPath: '/m42xNNYk3Nxs3xmucuKjl4zSjMc.jpg',
        tmdbId: 523,
        genres: 'Drama',
        overview: 'Michaela, an epileptic, enrolls in college to study education. She goes off her medication and soon begins hearing voices and seeing apparitions that tell her to avoid religious objects, although she is devoutly Roman Catholic. One priest scoffs at the idea that Michaela could be possessed by demons, but a younger pastor arranges an exorcism for the young woman.',
        releaseDate: '2006-03-02',
        runtime: 92
      },
      {
        title: 'Casino',
        posterPath: '/4TS5O1IP42bY2BvgMxL156EENy.jpg',
        tmdbId: 524,
        genres: 'Crime',
        overview: `In early-1970s Las Vegas, low-level mobster Sam "Ace" Rothstein gets tapped by his bosses to head the Tangiers Casino. At first, he's a great success in the job, but over the years, problems with his loose-cannon enforcer Nicky Santoro, his ex-hustler wife Ginger, her con-artist ex Lester Diamond and a handful of corrupt politicians put Sam in ever-increasing danger.`,
        releaseDate: '1995-11-22',
        runtime: 179
      },
      {
        title: 'The Blues Brothers',
        posterPath: '/3DiSrcYELCLkwnjl9EZp2pkKGep.jpg',
        tmdbId: 525,
        genres:
          'Music',

        overview: "Jake Blues is just out of jail, and teams up with his brother, Elwood on a 'mission from God' to raise funds for the orphanage in which they grew up. The only thing they can do is do what they do best: play music. So they get their old band together, and set out on their way—while getting in a bit of trouble here and there.",
        releaseDate: '1980-06-16',
        runtime: 133
      },
      {
        title: 'Ladyhawke',
        posterPath: '/vJA2Fhw2uBMiVFdBde2kH7kZ2gw.jpg',
        tmdbId: 526,
        genres: 'Adventure',
        overview: 'Captain Etienne Navarre is a man on whose shoulders lies a cruel curse. Punished for loving each other, Navarre must become a wolf by night whilst his lover, Lady Isabeau, takes the form of a hawk by day. Together, with the thief Philippe Gaston, they must try to overthrow the corrupt Bishop and in doing so break the spell.',
        releaseDate: '1985-03-27',
        runtime: 121
      },

      {
        title: 'A Grand Day Out',
        posterPath: '/og1s6iwv73WMShgNzg0WTtmrKXy.jpg',
        tmdbId: 530,
        genres:
          'Adventure',

        overview: 'Wallace and Gromit have run out of cheese and this provides an excellent excuse for the animated duo to take their holiday on the moon, where, as everyone knows, there is ample cheese. The moon is inhabited by a mechanical caretaker, who is not too happy about the two visitors from earth that nibble on the moon.',
        releaseDate: '1990-05-18',
        runtime: 23
      },
      {
        title: 'The Wrong Trousers',
        posterPath: '/wRTCxYHx1d9diFFmOHQZT7CjdUV.jpg',
        tmdbId: 531,
        genres:
          'Animation',

        overview: 'Gromit finds himself being pushed out of his room and home by a new lodger who is actually a ruthless criminal (and a small penguin). The penguin is planning a robbery and needs to use Wallace and his mechanical remote controlled trousers to pull off the raid. However, Gromit is wise to the penguin and comes to the rescue.',
        releaseDate: '1993-12-17',
        runtime: 30
      },
      {
        title: 'A Close Shave',
        posterPath: '/4hRtelqMooXuVUVXuMYt3KbdCWM.jpg',
        tmdbId: 532,
        genres:
          'Family',

        overview: 'Wallace falls in love with wool-shop owner Wendolene, not suspecting that she (or rather, her dog) is at the head of a fiendish sheep-rustling plot. Gromit is set up and jailed, but his new-found sheepish friend is determined to give Wallace a helping hand in finding out the real truth.',
        releaseDate: '1995-04-10',
        runtime: 30
      },
      {
        title: 'Wallace & Gromit: The Curse of the Were-Rabbit',
        posterPath: '/cMQ2lNd7sBe6PCf6zF5QxrKzbRG.jpg',
        tmdbId: 533,
        genres:
          'Adventure',

        overview: "Cheese-loving eccentric Wallace and his cunning canine pal, Gromit, investigate a mystery in Nick Park's animated adventure, in which the lovable inventor and his intrepid pup run a business ridding the town of garden pests. Using only humane methods that turn their home into a halfway house for evicted vermin, the pair stumble upon a mystery involving a voracious vegetarian monster that threatens to ruin the annual veggie-growing contest.",
        releaseDate: '2005-09-04',
        runtime: 85
      },
      {
        title: 'Terminator Salvation',
        posterPath: '/gw6JhlekZgtKUFlDTezq3j5JEPK.jpg',
        tmdbId: 534,
        genres:
          'Action',

        overview: "All grown up in post-apocalyptic 2018, John Connor must lead the resistance of humans against the increasingly dominating militaristic robots. But when Marcus Wright appears, his existence confuses the mission as Connor tries to determine whether Wright has come from the future or the past -- and whether he's friend or foe.",
        releaseDate: '2009-05-20',
        runtime: 115
      },
      {
        title: 'Flashdance',
        posterPath: '/ziiy6ORt8BlxWFXskBChBMInvDA.jpg',
        tmdbId: 535,
        genres: 'Drama',
        overview: 'The popular 1980s dance movie that depicts the life of an exotic dancer with a side job as a welder whose true desire is to get into ballet school. Its her dream to be a professional dancer and now is her chance.',
        releaseDate: '1983-04-14',
        runtime: 95
      },
      {
        title: 'Stuttgart Shanghai',
        posterPath: null,
        tmdbId: 536,
        genres: 'Documentary',
        overview: 'A young pair from Stuttgart fly to Shanghai to hop aboard the textile business of his father while she prepares for the birth of their son. A story about the ever more common movement of Germans into the East for professional gain.',
        releaseDate: '2007-03-01',
        runtime: 60
      },
      {
        title: 'Not Here to Be Loved',
        posterPath: '/zwm45xc3SL3in0Y3BvKoIciPWRa.jpg',
        tmdbId: 537,
        genres: 'Romance',
        overview: 'Jean-Claude Delsart, a 50 years-old bailiff, with his worn-out smile and heart, abandoned a long time ago the idea that life could give him pleasures. Until the day, he dares to push the doors of a tango lesson...',
        releaseDate: '2005-10-12',
        runtime: 93
      },
      {
        title: 'Janine F.',
        posterPath: null,
        tmdbId: 538,
        genres: "Horror",
        overview: 'The humorous portrait of a female artist. The film follows the career of 24-year-old Janine F. who in 2002 caused a commotion from the rooftop of a Berlin building.',
        releaseDate: '2004-02-11',
        runtime: 52
      },
      {
        title: 'Psycho',
        posterPath: '/nR4LD4ZJg2n6LZQpcOrLFdMq0cD.jpg',
        tmdbId: 539,
        genres:
          'Horror',
        overview: 'When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother.',
        releaseDate: '1960-06-22',
        runtime: 109
      },
      {
        title: 'D.E.B.S.',
        posterPath: '/cMwLTcG5aVBYeh5W6SVSfowboAf.jpg',
        tmdbId: 540,
        genres: 'Action',
        overview: 'The star of a team of teenage crime fighters falls for the alluring villainess she must bring to justice.',
        releaseDate: '2004-01-21',
        runtime: 91
      },
      {
        title: 'The Man with the Golden Arm',
        posterPath: '/dEw3SzGbKVYXKTJ2kIXC3jLmG5s.jpg',
        tmdbId: 541,
        genres:
          'Crime',

        overview: 'A junkie must face his true self to kick his drug addiction.',
        releaseDate: '1955-12-26',
        runtime: 119
      },
      {
        title: 'The Crime of Padre Amaro',
        posterPath: '/wqwt2DKcQV6EeSwXuYTk7pkLFii.jpg',
        tmdbId: 542,
        genres: 'Drama',
        overview: 'The young Father Amaro is put to the test. He is sent to Mexico to help take care of aging Father Benito when he meets a 16-year-old girl that he begins and affair with. It turns out the girls mother had been having an affair with Father Benito. Father Amaro must soon choose between the holy or the sinful life.',
        releaseDate: '2002-10-01',
        runtime: 118
      },
      {
        title: 'Blackmail',
        posterPath: '/klilqRJDTANv9XMTBbL51NOsOXZ.jpg',
        tmdbId: 543,
        genres: 'Drama',
        overview: 'London, 1929. Frank Webber, a very busy Scotland Yard detective, seems to be more interested in his work than in Alice White, his girlfriend. Feeling herself ignored, Alice agrees to go out with an elegant and well-mannered artist who invites her to visit his fancy apartment.',
        releaseDate: '1929-07-28',
        runtime: 86
      },
      {
        title: "There's Something About Mary",
        posterPath: '/g03pwohXHOI75InM3zraiaEGguO.jpg',
        tmdbId: 544,
        genres: 'Romance',
        overview: 'For Ted, prom night went about as bad as its possible for any night to go.Thirteen years later, he finally gets another chance with his old prom date, only to run up against other suitors including the sleazy detective he hired to find her.',
        releaseDate: '1998-07-15',
        runtime: 119
      },
      {
        title: 'Transamerica',
        posterPath: '/q8AIa13nrILd6Io2UCqOOJpjLM8.jpg',
        tmdbId: 546,
        genres: 'Drama',
        overview: 'Bree is about to get a sex change operation that will finally allow her to actually be what shes already been in her mind for a long time: a transitioned woman.Yet before this happens she suddenly runs into her son who ends up coming for the trip across the United States.',
        releaseDate: '2005-12-23',
        runtime: 103
      },
      {
        title: 'The Horse Whisperer',
        posterPath: '/1Ptdh2fdA5xpH5Zj8AQUAp9Tdoa.jpg',
        tmdbId: 547,
        genres: 'Drama',
        overview: 'Based on the novel by the same name from Nicholas Evans, the talented Robert Redford presents this meditative family drama set in the country side. Redford not only directs but also stars in the roll of a cowboy with a magical talent for healing.',
        releaseDate: '1998-05-14',
        runtime: 170
      },
      {
        title: 'Rashomon',
        posterPath: '/mwNCpjejHwq9KlpNB2gKII2yvbr.jpg',
        tmdbId: 548,
        genres: 'Crime',
        overview: `Brimming with action while incisively examining the nature of truth, "Rashomon" is perhaps the finest film ever to investigate the philosophy of justice. Through an ingenious use of camera and flashbacks, Kurosawa reveals the complexities of human nature as four people recount different versions of the story of a man's murder and the rape of his wife.`,
        releaseDate: '1950-08-26',
        runtime: 88
      },
      {
        title: 'Basquiat',
        posterPath: '/qS3zqMxjcXcHUUExvt2uhRvqi8Y.jpg',
        tmdbId: 549,
        genres: 'Drama',
        overview: 'The brief life of Jean Michel Basquiat, a world renowned New York street artist struggling with fame, drugs and his identity.',
        releaseDate: '1996-08-09',
        runtime: 108
      },
      {
        title: 'Fight Club',
        posterPath: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
        tmdbId: 550,
        genres: 'Drama',
        overview: 'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
        releaseDate: '1999-10-15',
        runtime: 139
      },
      {
        title: 'The Poseidon Adventure',
        posterPath: '/cOzyaodbRPSQgD6bC6G5QlGFlFV.jpg',
        tmdbId: 551,
        genres: 'Action',
        overview: 'When their ocean liner capsizes, a group of passengers struggle to survive and escape.',
        releaseDate: '1972-12-13',
        runtime: 117
      },
      {
        title: 'Bread and Tulips',
        posterPath: '/vz0THk3uPmYip2U761UqB2D0hRl.jpg',
        tmdbId: 552,
        genres: 'Drama',
        overview: 'An endearing light comedy about a woman who spontaneously becomes a resident of Venice after her family left her begin. While enjoying the wonderful people she meets she achieves a new life and the first time independent of her family.',
        releaseDate: '2000-03-03',
        runtime: 114
      },
      {
        title: 'Dogville',
        posterPath: '/80iFKwaNumOuk5xDKSoS5H3qICc.jpg',
        tmdbId: 553,
        genres:
          'Crime',
        overview: "A barren soundstage is stylishly utilized to create a minimalist small-town setting in which a mysterious woman named Grace hides from the criminals who pursue her. The town is two-faced and offers to harbor Grace as long as she can make it worth their effort, so Grace works hard under the employ of various townspeople to win their favor. Tensions flare, however, and Grace's status as a helpless outsider provokes vicious contempt and abuse from the citizens of Dogville.",
        releaseDate: '2003-05-19',
        runtime: 178
      },
      {
        title: 'The Cuckoo',
        posterPath: '/jz5u5anVn3PTAjHC1nQehZGQ41C.jpg',
        tmdbId: 554,
        genres:
          'Drama',
        overview: "September of 1944, a few days before Finland went out of the Second World War. A chained to a rock Finnish sniper-kamikadze Veikko managed to set himself free. Ivan, a captain of the Soviet Army, arrested by the Front Secret Police 'Smersh', has a narrow escape. They are soldiers of the two enemy armies. A Lapp woman Anni gives a shelter to both of them at her farm. For Anni they are not enemies, but just men.",
        releaseDate: '2002-01-01',
        runtime: 100
      },
      {
        title: 'Absolut',
        posterPath: '/cwxOwSDwbwUfceIlaWFoo65SdzX.jpg',
        tmdbId: 555,
        genres: 'Thriller',
        overview: 'Two guys against globalization want to plant a virus in the network of a finance corporation. On the day of the attack Alex has an accident and cannot remember anything.',
        releaseDate: '2005-04-20',
        runtime: 94
      },
      {
        title: 'Spider-Man',
        posterPath: '/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg',
        tmdbId: 557,
        genres: 'Fantasy',
        overview: 'After being bitten by a genetically altered spider, nerdy high school student Peter Parker is endowed with amazing powers to become the Amazing superhero known as Spider-Man.',
        releaseDate: '2002-05-01',
        runtime: 121
      },
      {
        title: 'Spider-Man 2',
        posterPath: '/olxpyq9kJAZ2NU1siLshhhXEPR7.jpg',
        tmdbId: 558,
        genres:
          'Action',
        overview: "Peter Parker is going through a major identity crisis. Burned out from being Spider-Man, he decides to shelve his superhero alter ego, which leaves the city suffering in the wake of carnage left by the evil Doc Ock. In the meantime, Parker still can't act on his feelings for Mary Jane Watson, a girl he's loved since childhood.",
        releaseDate: '2004-06-25',
        runtime: 127
      },
      {
        title: 'Spider-Man 3',
        posterPath: '/sqZKCRYGovZ8aN99VVJSdL8Ja9k.jpg',
        tmdbId: 559,
        genres:
          'Fantasy',
        overview: 'The seemingly invincible Spider-Man goes up against an all-new crop of villains—including the shape-shifting Sandman. While Spider-Mans superpowers are altered by an alien organism, his alter ego, Peter Parker, deals with nemesis Eddie Brock and also gets caught up in a love triangle.',
        releaseDate: '2007-05-01',
        runtime: 139
      },
      {
        title: 'Secret Beyond the Door',
        posterPath: '/9qeB2MVRsfAzPw5tviUX4yfpZdh.jpg',
        tmdbId: 560,
        genres:
          'Crime',
        overview: 'Fritz Langs psycho thriller tells the story of a woman who marries a stranger with a deadly hobby and through their love he attempts to fight off his obsessive - compulsive actions.',
        releaseDate: '1948-01-01',
        runtime: 99
      },
      {
        title: 'Constantine',
        posterPath: '/vPYgvd2MwHlxTamAOjwVQp4qs1W.jpg',
        tmdbId: 561,
        genres:
          'Drama',
        overview: 'John Constantine has literally been to Hell and back. When he teams up with a policewoman to solve the mysterious suicide of her twin sister, their investigation takes them through the world of demons and angels that exists beneath the landscape of contemporary Los Angeles.',
        releaseDate: '2005-02-08',
        runtime: 121
      },
      {
        title: 'Die Hard',
        posterPath: '/p5hURTvac8sxLRhe5hLchvfy5Pu.jpg',
        tmdbId: 562,
        genres: 'Action',
        overview: "NYPD cop John McClane's plan to reconcile with his estranged wife is thrown for a serious loop when, minutes after he arrives at her office, the entire building is overtaken by a group of terrorists. With little help from the LAPD, wisecracking McClane sets out to single-handedly rescue the hostages and bring the bad guys down.",
        releaseDate: '1988-07-15',
        runtime: 131
      },
      {
        title: 'Starship Troopers',
        posterPath: '/cxCmv23O7p3hyHwqoktHYkZcGsY.jpg',
        tmdbId: 563,
        genres: 'Adventure',
        overview: `Set in the future, the story follows a young soldier named Johnny Rico and his exploits in the Mobile Infantry. Rico's military career progresses from recruit to non-commissioned officer and finally to officer against the backdrop of an interstellar war between mankind and an arachnoid species known as "the Bugs".`,
        releaseDate: '1997-11-07',
        runtime: 129
      },
      {
        title: 'The Mummy',
        posterPath: '/yhIsVvcUm7QxzLfT6HW2wLf5ajY.jpg',
        tmdbId: 564,
        genres: 'Adventure',
        overview: "Dashing legionnaire Rick O'Connell stumbles upon the hidden ruins of Hamunaptra while in the midst of a battle to claim the area in 1920s Egypt. It has been over three thousand years since former High Priest Imhotep suffered a fate worse than death as a punishment for a forbidden love—along with a curse that guarantees eternal doom upon the world if he is ever awoken.",
        releaseDate: '1999-04-16',
        runtime: 124
      },
      {
        title: 'The Ring',
        posterPath: '/e2t5CKMox7tjv3iD3Ko7NdFa5lJ.jpg',
        tmdbId: 565,
        genres: 'Horror',
        overview: "It sounded like just another urban legend: A videotape filled with nightmarish images, leading to a phone call foretelling the viewer's death in exactly seven days. As a newspaper reporter, Rachel Keller was naturally skeptical of the story, until four teenagers all met with mysterious deaths exactly one week after watching just such a tape. Allowing her investigative curiosity to get the better of her, Rachel tracks down the video... and watches it. Now she has just seven days to unravel the mystery of the Ring.",
        releaseDate: '2002-10-18',
        runtime: 115
      },

      {
        title: 'Rear Window',
        posterPath: '/qitnZcLP7C9DLRuPpmvZ7GiEjJN.jpg',
        tmdbId: 567,
        genres:
          'Thriller',

        overview: 'A wheelchair-bound photographer spies on his neighbors from his apartment window and becomes convinced one of them has committed murder.',
        releaseDate: '1954-09-01',
        runtime: 112
      },
      {
        title: 'Apollo 13',
        posterPath: '/jokiCLdNS58eJTALfNcerQRhwAo.jpg',
        tmdbId: 568,
        genres: 'Drama',
        overview: 'The true story of technical troubles that scuttle the Apollo 13 lunar mission in 1970, risking the lives of astronaut Jim Lovell and his crew, with the failed journey turning into a thrilling saga of heroism. Drifting more than 200,000 miles from Earth, the astronauts work furiously with the ground crew to avert tragedy.',
        releaseDate: '1995-06-30',
        runtime: 140
      },
      {
        title: 'Fat Girl',
        posterPath: '/thtwUMRaN2cB769CE0NMiAXSE50.jpg',
        tmdbId: 570,
        genres: 'Drama',
        overview: "Anaïs is twelve and bears the weight of the world on her shoulders. She watches her older sister, Elena, whom she both loves and hates. Elena is fifteen and devilishly beautiful. Neither more futile, nor more stupid than her younger sister, she cannot understand that she is merely an object of desire. And, as such, she can only be taken. Or had. Indeed, this is the subject: a girl's loss of virginity. And, that summer, it opens a door to tragedy.",
        releaseDate: '2001-03-07',
        runtime: 86
      },
      {
        title: 'The Birds',
        posterPath: '/z0iYrJ6GsAMP3abOha7uGMuc5kZ.jpg',
        tmdbId: 571,
        genres: 'Horror',
        overview: 'Chic socialite Melanie Daniels enjoys a passing flirtation with an eligible attorney in a San Francisco pet shop and, on an impulse, follows him to his hometown bearing a gift of lovebirds. But upon her arrival, the bird population runs amok. Suddenly, the townsfolk face a massive avian onslaught, with the feathered fiends inexplicably attacking people all over Bodega Bay.',
        releaseDate: '1963-03-28',
        runtime: 119
      },
      {
        title: 'Next Door',
        posterPath: '/xqS5Y8f6EQy9i9YFuPuTlPRopV4.jpg',
        tmdbId: 572,
        genres:
          'Horror',

        overview: 'After Ingrid leaves John, he allows himself to be pulled into a mystical and scary world where it is impossible to separate truth from lies.',
        releaseDate: '2005-03-10',
        runtime: 75
      },
      {
        title: 'Frenzy',
        posterPath: '/4SFvqrlSigAt9tnhXFSMyKeJWQk.jpg',
        tmdbId: 573,
        genres: 'Crime',
        overview: "After a serial killer strangles several women with a necktie, London police identify a suspect—but he's the wrong man.",
        releaseDate: '1972-04-14',
        runtime: 116
      },
      {
        title: 'The Man Who Knew Too Much',
        posterPath: '/gy8YBRjCQRIT9x9G9F5fpnFD4xw.jpg',
        tmdbId: 574,
        genres:
          'Crime',

        overview: 'A widescreen, Technicolor remake by Hitchcock of his 1934 film of the same title. A couple vacationing in Morocco with their young son accidentally stumble upon an assassination plot. When the child is kidnapped to ensure their silence, they have to take matters into their own hands to save him.',
        releaseDate: '1956-05-16',
        runtime: 120
      },
      {
        title: 'The Experiment',
        posterPath: '/zhXDiq09JoWIXoLehK2F6ECzwks.jpg',
        tmdbId: 575,
        genres: 'Drama',
        overview: 'Das Experiment is a shocking psycho thriller about the potential for brutality that humans hide. Even more shocking is the fact that its based on an actual occurrence — a 1971 psychological experiment at Stanford University that was aborted prematurely when the experimenters lost control.',
        releaseDate: '2001-03-07',
        runtime: 114
      },
      {
        title: 'The Wild Bunch',
        posterPath: '/zZhp7p8qvfVrSLKpOFHcKjpEj8f.jpg',
        tmdbId: 576,
        genres: 'Adventure',
        overview: 'Aging outlaw, Pike Bishop prepares to retire after one final robbery. Joined by his gang, Dutch Engstrom and brothers Lyle and Tector Gorch, Bishop discovers the heist is a setup orchestrated in part by a former partner, Deke Thornton. As the remaining gang takes refuge in Mexican territory, Thornton trails them—resulting in fierce gunfights with plenty of casualties.',
        releaseDate: '1969-06-17',
        runtime: 145
      },
      {
        title: 'To Die For',
        posterPath: '/c3ZBLDzc3OvZoUResg2UN79gnYa.jpg',
        tmdbId: 577,
        genres:
          'Drama',

        overview: 'Suzanne Stone wants to be a world-famous news anchor and she is willing to do anything to get what she wants. What she lacks in intelligence, she makes up for in cold determination and diabolical wiles. As she pursues her goal with relentless focus, she is forced to destroy anything and anyone that may stand in her way, regardless of the ultimate cost or means necessary.',
        releaseDate: '1995-09-22',
        runtime: 106
      },
      {
        title: 'Jaws',
        posterPath: '/s2xcqSFfT6F7ZXHxowjxfG0yisT.jpg',
        tmdbId: 578,
        genres:
          'Horror',

        overview: 'When an insatiable great white shark terrorizes the townspeople of Amity Island, the police chief, an oceanographer and a grizzled shark hunter seek to destroy the blood-thirsty beast.',
        releaseDate: '1975-06-18',
        runtime: 124
      },
      {
        title: 'Jaws 2',
        posterPath: '/cN3ijEwsn4kBaRuHfcJpAQJbeWe.jpg',
        tmdbId: 579,
        genres: 'Horror',
        overview: 'Police chief Brody must protect the citizens of Amity after a second monstrous shark begins terrorizing the waters.',
        releaseDate: '1978-06-16',
        runtime: 116
      },
      {
        title: 'Jaws: The Revenge',
        posterPath: '/kGiaOztahZV2x7bil7sbk7fb6ob.jpg',
        tmdbId: 580,
        genres: 'Adventure',
        overview: "After another deadly shark attack, Ellen Brody decides she has had enough of New England's Amity Island and moves to the Caribbean to join her son, Michael, and his family. But a great white shark has followed her there, hungry for more lives.",
        releaseDate: '1987-07-17',
        runtime: 89
      },
      {
        title: 'Dances with Wolves',
        posterPath: '/cvaBVpS0GzKqBd63pFT8f1E8OKv.jpg',
        tmdbId: 581,
        genres:
          'Adventure',

        overview: "Wounded Civil War soldier, John Dunbar tries to commit suicide—and becomes a hero instead. As a reward, he's assigned to his dream post, a remote junction on the Western frontier, and soon makes unlikely friends with the local Sioux tribe.",
        releaseDate: '1990-03-30',
        runtime: 181
      },
      {
        title: 'The Lives of Others',
        posterPath: '/5BCyeLJHPcRwhu0YaRqUzw00JJ4.jpg',
        tmdbId: 582,
        genres: 'Drama',
        overview: 'A tragic love story set in East Berlin with the backdrop of an undercover Stasi controlled culture. Stasi captain Wieler is ordered to follow author Dreyman and plunges deeper and deeper into his life until he reaches the threshold of doubting the system.',
        releaseDate: '2006-03-15',
        runtime: 137
      },
      {
        title: 'Life of Brian',
        posterPath: '/lSSA64WF0M0BXnjwr2quMh6shCl.jpg',
        tmdbId: 583,
        genres: 'Comedy',
        overview: "Brian Cohen is an average young Jewish man, but through a series of ridiculous events, he gains a reputation as the Messiah. When he's not dodging his followers or being scolded by his shrill mother, the hapless Brian has to contend with the pompous Pontius Pilate and acronym-obsessed members of a separatist movement. Rife with Monty Python's signature absurdity, the tale finds Brian's life paralleling Biblical lore, albeit with many more laughs.",
        releaseDate: '1979-08-17',
        runtime: 94
      },
      {
        title: '2 Fast 2 Furious',
        posterPath: '/osgUUpwst1TEaSDTBrrTE6KuCbW.jpg',
        tmdbId: 584,
        genres:
          'Action',

        overview: `It's a major double-cross when former police officer Brian O'Conner teams up with his ex-con buddy Roman Pearce to transport a shipment of "dirty" money for shady Miami-based import-export dealer Carter Verone. But the guys are actually working with undercover agent Monica Fuentes to bring Verone down.`,
        releaseDate: '2003-06-05',
        runtime: 107
      },
      {
        title: 'Monsters, Inc.',
        posterPath: '/sgheSKxZkttIe8ONsf2sWXPgip3.jpg',
        tmdbId: 585,
        genres:
          'Animation',

        overview: "James Sullivan and Mike Wazowski are monsters, they earn their living scaring children and are the best in the business... even though they're more afraid of the children than they are of them. When a child accidentally enters their world, James and Mike suddenly find that kids are not to be afraid of and they uncover a conspiracy that could threaten all children across the world.",
        releaseDate: '2001-11-01',
        runtime: 92
      },
      {
        title: 'Wag the Dog',
        posterPath: '/kAwOj7t8ZeaniTFtLWVSKO79JxX.jpg',
        tmdbId: 586,
        genres: 'Comedy',
        overview: "During the final weeks of a presidential race, the President is accused of sexual misconduct. To distract the public until the election, the President's adviser hires a Hollywood producer to help him stage a fake war.",
        releaseDate: '1997-12-25',
        runtime: 97
      },
      {
        title: 'Big Fish',
        posterPath: '/tjK063yCgaBAluVU72rZ6PKPH2l.jpg',
        tmdbId: 587,
        genres:
          'Adventure',

        overview: 'Throughout his life Edward Bloom has always been a man of big appetites, enormous passions and tall tales. In his later years, he remains a huge mystery to his son, William. Now, to get to know the real man, Will begins piecing together a true picture of his father from flashbacks of his amazing adventures.',
        releaseDate: '2003-12-25',
        runtime: 125
      },
      {
        title: 'Silent Hill',
        posterPath: '/bQkXL0cSlPviaQhxM090knCc5kS.jpg',
        tmdbId: 588,
        genres: 'Horror',
        overview: "In search for answers, a mother travels to the enigmatic town of Silent Hill when her daughter begins to suffer recurring nightmares related to the place. It doesn't take long for her to discover its home to beings as equally haunting as the town itself.",
        releaseDate: '2006-04-21',
        runtime: 125
      },
      {
        title: 'The Hours',
        posterPath: '/bNxCndh11o28oJGgm85nkt1bmQV.jpg',
        tmdbId: 590,
        genres: 'Drama',
        overview: '"The Hours" is the story of three women searching for more potent, meaningful lives. Each is alive at a different time and place, all are linked by their yearnings and their fears. Their stories intertwine, and finally come together in a surprising, transcendent moment of shared recognition.',
        releaseDate: '2002-12-27',
        runtime: 114
      },
      {
        title: 'The Da Vinci Code',
        posterPath: '/6jexEWBXepwB1ZLpCEllI04Agrb.jpg',
        tmdbId: 591,
        genres: 'Thriller',
        overview: 'A murder in Paris Louvre Museum and cryptic clues in some of Leonardo da Vincis most famous paintings lead to the discovery of a religious mystery. For 2,000 years a secret society closely guards information that — should it come to light — could rock the very foundations of Christianity.',
        releaseDate: '2006-05-17',
        runtime: 149
      },
      {
        title: 'The Conversation',
        posterPath: '/dhgW1uGaRj8vIgq54VnCP96X7Sv.jpg',
        tmdbId: 592,
        genres:
          'Crime',

        overview: "Surveillance expert Harry Caul is hired by a mysterious client's brusque aide to tail a young couple. Tracking the pair through San Francisco's Union Square, Caul and his associate Stan manage to record a cryptic conversation between them. Tormented by memories of a previous case that ended badly, Caul becomes obsessed with the resulting tape, trying to determine if the couple are in danger.",
        releaseDate: '1974-04-07',
        runtime: 113
      },
      {
        title: 'Solaris',
        posterPath: '/4bacwb3B2zy8w3eoWfceAmo0V9O.jpg',
        tmdbId: 593,
        genres:
          'Drama',

        overview: 'A psychologist is sent to a space station orbiting a planet called Solaris to investigate the death of a doctor and the mental problems of cosmonauts on the station. He soon discovers that the water on the planet is a type of brain which brings out repressed memories and obsessions.',
        releaseDate: '1972-03-20',
        runtime: 167
      },
      {
        title: 'The Terminal',
        posterPath: '/vRYbjHs129MARMq1VDbnk9Jboen.jpg',
        tmdbId: 594,
        genres: 'Comedy',
        overview: "Viktor Navorski is a man without a country; his plane took off just as a coup d'etat exploded in his homeland, leaving it in shambles, and now he's stranded at Kennedy Airport, where he's holding a passport that nobody recognizes. While quarantined in the transit lounge until authorities can figure out what to do with him, Viktor simply goes on living – and courts romance with a beautiful flight attendant.",
        releaseDate: '2004-06-17',
        runtime: 128
      },
      {
        title: 'To Kill a Mockingbird',
        posterPath: '/1lJzbNX1bfZTNu4NlGmPQ3jafXJ.jpg',
        tmdbId: 595,
        genres: 'Drama',
        overview: 'Scout Finch, 6, and her older brother Jem live in sleepy Maycomb, Alabama, spending much of their time with their friend Dill and spying on their reclusive and mysterious neighbor, Boo Radley. When Atticus, their widowed father and a respected lawyer, defends a black man named Tom Robinson against fabricated rape charges, the trial and tangent events expose the children to evils of racism and stereotyping.',
        releaseDate: '1962-12-25',
        runtime: 129
      },
      {
        title: 'The Grapes of Wrath',
        posterPath: '/jRbRDNi9MgvhRc68PSQPMqnG24x.jpg',
        tmdbId: 596,
        genres: 'Drama',
        overview: 'Tom Joad returns to his home after a jail sentence to find his family kicked out of their farm due to foreclosure. He catches up with them on his Uncles farm, and joins them the next day as they head for California and a new life...Hopefully.',
        releaseDate: '1940-03-15',
        runtime: 129
      },
      {
        title: 'Titanic',
        posterPath: '/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg',
        tmdbId: 597,
        genres: 'Drama',
        overview: "101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi win third-class tickets aboard the ship. Rose tells the whole story from Titanic's departure through to its death—on its first and last voyage—on April 15, 1912.",
        releaseDate: '1997-11-18',
        runtime: 194
      },
      {
        title: 'City of God',
        posterPath: '/k7eYdWvhYQyRQoU2TB2A2Xu2TfD.jpg',
        tmdbId: 598,
        genres: 'Drama',
        overview: 'Buscapé was raised in a very violent environment. Despite the feeling that all odds were against him, he finds out that life can be seen with other eyes...',
        releaseDate: '2002-02-05',
        runtime: 130
      },
      {
        title: 'Sunset Boulevard',
        posterPath: '/zt8aQ6ksqK6p1AopC5zVTDS9pKT.jpg',
        tmdbId: 599,
        genres: 'Drama',
        overview: 'A hack screenwriter writes a screenplay for a former silent film star who has faded into Hollywood obscurity.',
        releaseDate: '1950-08-10',
        runtime: 110
      },
      {
        title: 'Octopussy',
        posterPath: '/cFDNFEBhnFIN5EVUM2RyHuY8Ipz.jpg',
        tmdbId: 700,
        genres: 'Adventure',
        overview:
          'James Bond is sent to investigate after a fellow “00” agent is found dead with a priceless Fabergé egg. Bond follows the mystery and uncovers a smuggling scandal and a Russian General who wants to provoke a new World War.',
        releaseDate: '1983-06-05',
        runtime: 131
      },
      {
        title: 'Our Hospitality',
        posterPath: '/lQrEfsUrvK7smks2eOOJDf5j9yk.jpg',
        tmdbId: 701,
        genres: 'Comedy',
        overview:
          'A man returns to his Appalachian homestead. On the trip, he falls for a young woman. The only problem is her family has vowed to kill every member of his family.',
        releaseDate: '1923-11-19',
        runtime: 73
      },
      {
        title: 'A Streetcar Named Desire',
        posterPath: '/aicdlO5vt7z2ARm279eGzJeYCLQ.jpg',
        tmdbId: 702,
        genres: 'Drama',
        overview:
          'Disturbed Blanche DuBois moves in with her sister in New Orleans and is tormented by her brutish brother-in-law while her reality crumbles around her.',
        releaseDate: '1951-09-18',
        runtime: 125
      },
      {
        title: 'Annie Hall',
        posterPath: '/wvNu1wnAwHvFyq0gVgtGVG1z5bb.jpg',
        tmdbId: 703,
        genres: 'Comedy',
        overview:
          'New York comedian Alvy Singer falls in love with the ditsy Annie Hall.',
        releaseDate: '1977-04-19',
        runtime: 93
      },
      {
        title: 'A Hard Day\'s Night',
        posterPath: '/bCjjAVPHKTqtX7TTzL4QRuu91Pc.jpg',
        tmdbId: 704,
        genres: 'Comedy',
        overview:
          'Capturing John Lennon, Paul McCartney, George Harrison and Ringo Starr in their electrifying element, \'A Hard Day\'s Night\' is a wildly irreverent journey through this pastiche of a day in the life of The Beatles during 1964. The band have to use all their guile and wit to avoid the pursuing fans and press to reach their scheduled television performance, in spite of Paul\'s troublemaking grandfather and Ringo\'s arrest.',
        releaseDate: '1964-07-07',
        runtime: 88
      },
      {
        title: 'All About Eve',
        posterPath: '/6numIZH6uR3NlJgY9m7nGH0jhs.jpg',
        tmdbId: 705,
        genres: 'Drama',
        overview:
          'From the moment she glimpses her idol at the stage door, Eve Harrington is determined to take the reins of power away from the great actress Margo Channing. Eve maneuvers her way into Margo\'s Broadway role, becomes a sensation and even causes turmoil in the lives of Margo\'s director boyfriend, her playwright and his wife. Only the cynical drama critic sees through Eve, admiring her audacity and perfect pattern of deceit.',
        releaseDate: '1950-10-06',
        runtime: 139
      },
      {
        title: 'Effi Briest',
        posterPath: '/y4DpDwfbrRFaglJhuQplCo8Yj11.jpg',
        tmdbId: 706,
        genres: 'History',
        overview:
          'A German-made film based on one of the most famous German novels by Theodor Fontane. Effi Briest (Hanna Schygulla) is a socially ambitious, 17-year-old German girl who accepts a proposal of marriage from Baron Geert Von Instetten, a much older diplomat. Unfortunately, neither the Baron\'s family nor anyone in the secluded town she now calls home accept Effi as an equal. Starved for companionship, Effi begins an innocent friendship with a well-known womanizer that may jeopardize her position as the Baron\'s wife.',
        releaseDate: '1974-06-20',
        runtime: 141
      },
      {
        title: 'A View to a Kill',
        posterPath: '/ieMTbSdYJJ7RZIW0X02NbwIAxMl.jpg',
        tmdbId: 707,
        genres: 'Adventure',
        overview:
          'A newly developed microchip designed by Zorin Industries for the British Government that can survive the electromagnetic radiation caused by a nuclear explosion has landed in the hands of the KGB. James Bond must find out how and why. His suspicions soon lead him to big industry leader Max Zorin.',
        releaseDate: '1985-05-24',
        runtime: 131
      },
      {
        title: 'The Living Daylights',
        posterPath: '/4qfEjHgXZSfWu6STDFhNVcgIexH.jpg',
        tmdbId: 708,
        genres: 'Action',
        overview:
          'James Bond helps a Russian General escape into the west. He soon finds out that the KGB wants to kill him for helping the General. A little while later the General is kidnapped from the Secret Service leading 007 to be suspicious.',
        releaseDate: '1987-06-29',
        runtime: 130
      },
      {
        title: 'Licence to Kill',
        posterPath: '/eaHTaaAPBhO995R67mrFMsPwCdr.jpg',
        tmdbId: 709,
        genres: 'Adventure',
        overview:
          'After capturing the notorious drug lord Franz Sanchez, Bond\'s close friend and former CIA agent Felix Leiter is left for dead and his wife is murdered. Bond goes rogue and seeks vengeance on those responsible, as he infiltrates Sanchez\'s organization from the inside.',
        releaseDate: '1989-07-07',
        runtime: 133
      },
      {
        title: 'GoldenEye',
        posterPath: '/bFzjdy6ucvNlXmJwoSoYfufV6lP.jpg',
        tmdbId: 710,
        genres: 'Adventure',
        overview:
          'When a powerful satellite system falls into the hands of Alec Trevelyan, AKA Agent 006, a former ally-turned-enemy, only James Bond can save the world from an awesome space weapon that -- in one short pulse -- could destroy the earth! As Bond squares off against his former compatriot, he also battles Trevelyan\'s stunning ally, Xenia Onatopp, an assassin who uses pleasure as her ultimate weapon.',
        releaseDate: '1995-11-16',
        runtime: 130
      },
      {
        title: 'Finding Forrester',
        posterPath: '/heHi6n68fDiQoUc7SMletM9Adjz.jpg',
        tmdbId: 711,
        genres: 'Drama',
        overview:
          'Gus Van Sant tells the story of a young African American man named Jamal who confronts his talents while living on the streets of the Bronx. He accidentally runs into an old writer named Forrester who discovers his passion for writing. With help from his new mentor Jamal receives a scholarship to a private school.',
        releaseDate: '2000-12-21',
        runtime: 136
      },
      {
        title: 'Four Weddings and a Funeral',
        posterPath: '/qa72G2VS0bpxms6yo0tI9vsHm2e.jpg',
        tmdbId: 712,
        genres: 'Comedy',
        overview:
          'Over the course of five social occasions, a committed bachelor must consider the notion that he may have discovered love.',
        releaseDate: '1994-03-09',
        runtime: 117
      },
      {
        title: 'The Piano',
        posterPath: '/rx8RKXn8OtuS6lqloYsjyrGOUp4.jpg',
        tmdbId: 713,
        genres: 'Drama',
        overview:
          'After a long voyage from Scotland, pianist Ada McGrath and her young daughter, Flora, are left with all their belongings, including a piano, on a New Zealand beach. Ada, who has been mute since childhood, has been sold into marriage to a local man named Alisdair Stewart. Making little attempt to warm up to Alisdair, Ada soon becomes intrigued by his Maori-friendly acquaintance, George Baines, leading to tense, life-altering conflicts.',
        releaseDate: '1993-05-19',
        runtime: 121
      },
      {
        title: 'Tomorrow Never Dies',
        posterPath: '/yWXNZHE4k4jlQhGhBEiLwYa2rIt.jpg',
        tmdbId: 714,
        genres: 'Adventure',
        overview:
          'A deranged media mogul is staging international incidents to pit the world\'s superpowers against each other. Now James Bond must take on this evil mastermind in an adrenaline-charged battle to end his reign of terror and prevent global pandemonium.',
        releaseDate: '1997-12-11',
        runtime: 119
      },
      {
        title: 'Murder She Said',
        posterPath: '/8GADjoCjzhu4a24f5KXFVqOjjsY.jpg',
        tmdbId: 750,
        genres: 'Comedy',
        overview:
          'Miss Marple believes she\'s seen a murder in a passing-by train, yet when the police find no evidence she decides to investigate it on her own.',
        releaseDate: '1961-09-26',
        runtime: 87
      },
      {
        title: 'Murder at the Gallop',
        posterPath: '/1SMoWzqgdARO6GsepFC3T5jdc9a.jpg',
        tmdbId: 751,
        genres: 'Comedy',
        overview:
          'Miss Marple and Mr. Stringer are witnesses to the death by heart attack of elderly, rich Mr. Enderby. Yet they have their doubts about what happened. The police don\'t believe them, thus leading Miss Marple to yet again investigate by herself.',
        releaseDate: '1963-01-01',
        runtime: 81
      },
      {
        title: 'V for Vendetta',
        posterPath: '/kxekpqZUpO5W65QT12goucFvyx9.jpg',
        tmdbId: 752,
        genres: 'Action',
        overview:
          'In a world in which Great Britain has become a fascist state, a masked vigilante known only as “V” conducts guerrilla warfare against the oppressive British government. When V rescues a young woman from the secret police, he finds in her an ally with whom he can continue his fight to free the people of Britain.',
        releaseDate: '2006-02-23',
        runtime: 132
      },
      {
        title: 'Faces',
        posterPath: '/qTkhxFQ0o6DEtTtPXkv4IA5M90J.jpg',
        tmdbId: 753,
        genres: 'Drama',
        overview:
          'Middle-aged suburban husband Richard abruptly tells his wife, Maria, that he wants a divorce. As Richard takes up with a younger woman, Maria enjoys a night on the town with her friends and meets a younger man. As the couple and those around them confront a seemingly futile search for what they\'ve lost -- love, excitement, passion -- this classic American independent film explores themes of aging and alienation.',
        releaseDate: '1968-11-24',
        runtime: 130
      },
      {
        title: 'Face/Off',
        posterPath: '/aYZDYdiMym5xEkSs4BrJMXFdZ9g.jpg',
        tmdbId: 754,
        genres: 'Action',
        overview:
          'Obsessed with bringing terrorist Castor Troy to justice, FBI agent Sean Archer tracks down Troy, who has boarded a plane in Los Angeles. After the plane crashes and Troy is severely injured, possibly dead, Archer undergoes surgery to remove his face and replace it with Troy\'s. As Archer tries to use his disguise to elicit information about a bomb from Troy\'s brother, Troy awakes from a coma and forces the doctor who performed the surgery to give him Archer\'s face.',
        releaseDate: '1997-06-27',
        runtime: 139
      },
      {
        title: 'From Dusk Till Dawn',
        posterPath: '/sV3kIAmvJ9tPz4Lq5fuf9LLMxte.jpg',
        tmdbId: 755,
        genres: 'Horror',
        overview:
          'Seth Gecko and his younger brother Richard are on the run after a bloody bank robbery in Texas. They escape across the border into Mexico and will be home-free the next morning, when they pay off the local kingpin. They just have to survive \'from dusk till dawn\' at the rendezvous point, which turns out to be a Hell of a strip joint.',
        releaseDate: '1996-01-19',
        runtime: 108
      },
      {
        title: 'Fantasia',
        posterPath: '/mSJgxrTaTgDSOoggIPcj3ZoZswT.jpg',
        tmdbId: 756,
        genres: 'Animation',
        overview:
          'Walt Disney\'s timeless masterpiece is an extravaganza of sight and sound! See the music come to life, hear the pictures burst into song and experience the excitement that is Fantasia over and over again.',
        releaseDate: '1940-11-13',
        runtime: 124
      },
      {
        title: 'Murder Most Foul',
        posterPath: '/enE3AbGsmxuGEZnQ8yEDZn43Yr3.jpg',
        tmdbId: 757,
        genres: 'Comedy',
        overview:
          'A murderer is brought to court and only Miss Marple is unconvinced of his innocence. Once again she begins her own investigation.',
        releaseDate: '1964-03-01',
        runtime: 90
      },
      {
        title: 'Murder Ahoy',
        posterPath: '/j4qAO7HHz5wJntRxq2GbDys6r09.jpg',
        tmdbId: 758,
        genres: 'Drama',
        overview:
          'During an annual board of trustees meeting, one of the trustees dies. Miss Marple thinks he’s been poisoned after finding a chemical on him. She sets off to investigate at the ship where he had just come from. The fourth and final film from the Miss Marple series starring Margaret Rutherford as the quirky amateur detective.',
        releaseDate: '1964-06-01',
        runtime: 93
      },
      {
        title: 'Gentlemen Prefer Blondes',
        posterPath: '/nC52q5uPctQekwLVn8FFuy1kybf.jpg',
        tmdbId: 759,
        genres: 'Music',
        overview:
          'Lorelei Lee is a beautiful showgirl engaged to be married to the wealthy Gus Esmond, much to the disapproval of Gus\' rich father, Esmond Sr., who thinks that Lorelei is just after his money. When Lorelei goes on a cruise accompanied only by her best friend, Dorothy Shaw, Esmond Sr. hires Ernie Malone, a private detective, to follow her and report any questionable behavior that would disqualify her from the marriage.',
        releaseDate: '1953-07-14',
        runtime: 91
      },
      {
        title: 'The Mad Adventures of Rabbi Jacob',
        posterPath: '/80dKVpKKxexxoFvpCJayxJ7cDif.jpg',
        tmdbId: 760,
        genres: 'Comedy',
        overview:
          'In this riot of frantic disguises and mistaken identities, Victor Pivert, a blustering, bigoted French factory owner, finds himself taken hostage by Slimane, an Arab rebel leader. The two dress up as rabbis as they try to elude not only assasins from Slimane\'s country, but also the police, who think Pivert is a murderer. Pivert ends up posing as Rabbi Jacob, a beloved figure who\'s returned to France for his first visit after 30 years in the United States. Adding to the confusion are Pivert\'s dentist-wife, who thinks her husband is leaving her for another woman, their daughter, who\'s about to get married, and a Parisian neighborhood filled with people eager to celebrate the return of Rabbi Jacob.',
        releaseDate: '1973-10-17',
        runtime: 100
      },
      {
        title: 'The Wing or The Thigh?',
        posterPath: '/ywkIu5l3iAgPZvLFEVBDYxLouH8.jpg',
        tmdbId: 761,
        genres: 'Comedy',
        overview:
          'Charles Duchemin, a well-known gourmet and publisher of a famous restaurant guide, is waging a war against fast food entrepreneur Tri- catel to save the French art of cooking. After having agreed to appear on a talk show to show his skills in naming food and wine by taste, he is confronted with two disasters: his son wants to become a clown rather than a restaurant tester and he, the famous Charles Duchemin, has lost his taste!',
        releaseDate: '1976-10-27',
        runtime: 104
      },
      {
        title: 'Monty Python and the Holy Grail',
        posterPath: '/8AVb7tyxZRsbKJNOTJHQZl7JYWO.jpg',
        tmdbId: 762,
        genres: 'Adventure',
        overview:
          'King Arthur, accompanied by his squire, recruits his Knights of the Round Table, including Sir Bedevere the Wise, Sir Lancelot the Brave, Sir Robin the Not-Quite-So-Brave-As-Sir-Lancelot and Sir Galahad the Pure. On the way, Arthur battles the Black Knight who, despite having had all his limbs chopped off, insists he can still fight. They reach Camelot, but Arthur decides not  to enter, as "it is a silly place".',
        releaseDate: '1975-05-25',
        runtime: 91
      },
      {
        title: 'Braindead',
        posterPath: '/8ppAsvY7HPoNzNvAmkgjx7FTRpw.jpg',
        tmdbId: 763,
        genres: 'Horror',
        overview:
          'When a Sumatran rat-monkey bites Lionel Cosgrove\'s mother, she\'s transformed into a zombie and begins killing (and transforming) the entire town while Lionel races to keep things under control.',
        releaseDate: '1992-08-13',
        runtime: 103
      },
      {
        title: 'The Evil Dead',
        posterPath: '/uYxQ6xhP3WjqPZtxyAOnZQWnZqn.jpg',
        tmdbId: 764,
        genres: 'Horror',
        overview:
          'When a group of college students finds a mysterious book and recording in the old wilderness cabin they\'ve rented for the weekend, they unwittingly unleash a demonic force from the surrounding forest.',
        releaseDate: '1981-09-10',
        runtime: 85
      },
      {
        title: 'Evil Dead II',
        posterPath: '/4zqCKJVHUolGs6C5AZwAZqLWixW.jpg',
        tmdbId: 765,
        genres: 'Horror',
        overview:
          'Ash Williams and his girlfriend Linda find a log cabin in the woods with a voice recording from an archeologist who had recorded himself reciting ancient chants from "The Book of the Dead." As they play the recording an evil power is unleashed taking over Linda\'s body.',
        releaseDate: '1987-03-13',
        runtime: 84
      },
      {
        title: 'Army of Darkness',
        posterPath: '/mOsWtjRGABrPrqqtm0U6WQp4GVw.jpg',
        tmdbId: 766,
        genres: 'Fantasy',
        overview:
          'Ash is transported back to medieval days, where he is captured by the dreaded Lord Arthur. Aided by the deadly chainsaw that has become his only friend, Ash is sent on a perilous mission to recover the Book of the Dead, a powerful tome that gives its owner the power to summon an army of ghouls.',
        releaseDate: '1992-10-09',
        runtime: 81
      },
      {
        title: 'Harry Potter and the Half-Blood Prince',
        posterPath: '/Ag21otqbeynZPGjEbzyr3X5Us0j.jpg',
        tmdbId: 767,
        genres: 'Adventure',
        overview:
          'As Harry begins his sixth year at Hogwarts, he discovers an old book marked as \'Property of the Half-Blood Prince\', and begins to learn more about Lord Voldemort\'s dark past.',
        releaseDate: '2009-07-07',
        runtime: 153
      },
      {
        title: 'From Hell',
        posterPath: '/t2WpWM8nBO4sULXr2bDfNEt4qgr.jpg',
        tmdbId: 768,
        genres: 'Horror',
        overview:
          'Frederick Abberline is an opium-huffing inspector from Scotland Yard who falls for one of Jack the Ripper\'s prostitute targets in this Hughes brothers adaption of a graphic novel that posits the Ripper\'s true identity.',
        releaseDate: '2001-02-08',
        runtime: 122
      },
      {
        title: 'GoodFellas',
        posterPath: '/6QMSLvU5ziIL2T6VrkaKzN2YkxK.jpg',
        tmdbId: 769,
        genres: 'Drama',
        overview:
          'The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.',
        releaseDate: '1990-09-12',
        runtime: 145
      },
      {
        title: 'Gone with the Wind',
        posterPath: '/s0S2KXGRHxOYu8zCcV5p5sczw9d.jpg',
        tmdbId: 770,
        genres: 'Drama',
        overview:
          'The spoiled daughter of a well-to-do plantation owner is forced to use every means at her disposal to claw her way out of poverty, following Maj. Gen. William Sherman\'s destructive "March to the Sea,” during the American Civil War.',
        releaseDate: '1939-12-15',
        runtime: 233
      },
      {
        title: 'Home Alone',
        posterPath: '/9wSbe4CwObACCQvaUVhWQyLR5Vz.jpg',
        tmdbId: 771,
        genres: 'Comedy',
        overview:
          'Eight-year-old Kevin McCallister makes the most of the situation after his family unwittingly leaves him behind when they go on Christmas vacation. But when a pair of bungling burglars set their sights on Kevin\'s house, the plucky kid stands ready to defend his territory. By planting booby traps galore, adorably mischievous Kevin stands his ground as his frantic mother attempts to race home before Christmas Day.',
        releaseDate: '1990-11-16',
        runtime: 103
      },
      {
        title: 'Home Alone 2: Lost in New York',
        posterPath: '/uuitWHpJwxD1wruFl2nZHIb4UGN.jpg',
        tmdbId: 772,
        genres: 'Comedy',
        overview:
          'Instead of flying to Florida with his folks, Kevin ends up alone in New York, where he gets a hotel room with his dad\'s credit card—despite problems from a clerk and meddling bellboy. But when Kevin runs into his old nemeses, the Wet Bandits, he\'s determined to foil their plans to rob a toy store on Christmas eve.',
        releaseDate: '1992-11-19',
        runtime: 120
      },
      {
        title: 'Little Miss Sunshine',
        posterPath: '/tFnTds88mCuLcLPBseK1kF2E3qv.jpg',
        tmdbId: 773,
        genres: 'Comedy',
        overview:
          'A family loaded with quirky, colorful characters piles into an old van and road trips to California for little Olive to compete in a beauty pageant.',
        releaseDate: '2006-07-26',
        runtime: 102
      },
      {
        title: 'Workers Leaving the Lumière Factory',
        posterPath: '/zwaMUm6cxmbMIUziIhkqyIoi2LO.jpg',
        tmdbId: 774,
        genres: 'Documentary',
        overview:
          'Working men and women leave through the main gate of the Lumière factory in Lyon, France. Filmed on 22 March 1895, it is often referred to as the first real motion picture ever made, although Louis Le Prince\'s 1888 Roundhay Garden Scene pre-dated it by seven years.  Three separate versions of this film exist, which differ from one another in numerous ways. The first version features a carriage drawn by one horse, while in the second version the carriage is drawn by two horses, and there is no carriage at all in the third version. The clothing style is also different between the three versions, demonstrating the different seasons in which each was filmed. This film was made in the 35 mm format with an aspect ratio of 1.33:1, and at a speed of 16 frames per second. At that rate, the 17 meters of film length provided a duration of 46 seconds, holding a total of 800 frames.',
        releaseDate: '1895-03-22',
        runtime: 1
      },
      {
        title: 'A Trip to the Moon',
        posterPath: '/aaNIFWrq6eGi259APbB5yaqBFdm.jpg',
        tmdbId: 775,
        genres: 'Adventure',
        overview:
          'Professor Barbenfouillis and five of his colleagues from the Academy of Astronomy travel to the Moon aboard a rocket propelled by a giant cannon. Once on the lunar surface, the bold explorers face the many perils hidden in the caves of the mysterious satellite.',
        releaseDate: '1902-04-17',
        runtime: 14
      },
      {
        title: 'The Rules of the Game',
        posterPath: '/8JOzt7uFZyshcuzCBmYU6CDJL4D.jpg',
        tmdbId: 776,
        genres: 'Drama',
        overview:
          'A weekend at a marquis’ country château lays bare some ugly truths about a group of haut bourgeois acquaintances.',
        releaseDate: '1939-06-08',
        runtime: 106
      },
      {
        title: 'Grand Illusion',
        posterPath: '/lWg41zE0FVixkNsFgxnlRyvDYv9.jpg',
        tmdbId: 777,
        genres: 'Drama',
        overview:
          'A group of French soldiers, including the patrician Captain de Boeldieu and the working-class Lieutenant Maréchal, grapple with their own class differences after being captured and held in a World War I German prison camp. When the men are transferred to a high-security fortress, they must concoct a plan to escape beneath the watchful eye of aristocratic German officer von Rauffenstein, who has formed an unexpected bond with de Boeldieu.',
        releaseDate: '1937-06-04',
        runtime: 114
      },
      {
        title: 'Monsieur Hulot\'s Holiday',
        posterPath: '/r4F4tsU0Ajeh9ZYUkWOJSYmioj7.jpg',
        tmdbId: 778,
        genres: 'Comedy',
        overview:
          'Monsieur Hulot, Jacques Tati’s endearing clown, takes a holiday at a seaside resort, where his presence provokes one catastrophe after another. Tati’s masterpiece of gentle slapstick is a series of effortlessly well-choreographed sight gags involving dogs, boats, and firecrackers; it was the first entry in the Hulot series and the film that launched its maker to international stardom.',
        releaseDate: '1953-02-25',
        runtime: 87
      },
      {
        title: 'Vampyr',
        posterPath: '/m7BKgeW06cgW5512wukfGhLsWGL.jpg',
        tmdbId: 779,
        genres: 'Horror',
        overview:
          'Traveler Allan Gray arrives in the village of Courtempierre and takes lodgings in a small inn. Gray has a great interest in the supernatural, particularly vampires. He\'s barely settled in when he feels a sinister force descending upon him. In the night an old man enters his room to tell him \'she must not die\'. One of the old man\'s daughters, Leone, has been bitten by a vampire. In order to break the curse, Gray and Leone\'s sister Gisele must find the original vampire and drive a stake through her heart.',
        releaseDate: '1932-05-06',
        runtime: 74
      },
      {
        title: 'The Passion of Joan of Arc',
        posterPath: '/8OYGtQlO8k9PcOm49apV62eVJQo.jpg',
        tmdbId: 780,
        genres: 'Drama',
        overview:
          'A classic of the silent age, this film tells the story of the doomed but ultimately canonized 15th-century teenage warrior. On trial for claiming she\'d spoken to God, Jeanne d\'Arc is subjected to inhumane treatment and scare tactics at the hands of church court officials. Initially bullied into changing her story, Jeanne eventually opts for what she sees as the truth. Her punishment, a famously brutal execution, earns her perpetual martyrdom.',
        releaseDate: '1928-04-21',
        runtime: 82
      },
      {
        title: 'Wintersleepers',
        posterPath: '/6GnzOfZbAuxPv7uuQetR0IySbMH.jpg',
        tmdbId: 781,
        genres: 'Drama',
        overview:
          'Young blonde translator Rebecca lives with her boyfriend ski instructor Marco in a mountain villa owned by her friend, nurse Laura. Rene, local cinema projectionist, steals Marco\'s car and gets into a car crash with local Theo, whose daughter, after being in coma for a time, dies. Rene suffers from partial short term memory loss and starts a relationship with Laura. Meanwhile Marco is looking for the man who stole his car and Theo - for the man who killed his daughter...',
        releaseDate: '1997-10-30',
        runtime: 120
      },
      {
        title: 'Gattaca',
        posterPath: '/eSKr5Fl1MEC7zpAXaLWBWSBjgJq.jpg',
        tmdbId: 782,
        genres: 'Thriller',
        overview:
          'In a future society in the era of indefinite eugenics, humans are set on a life course depending on their DNA. Young Vincent Freeman is born with a condition that would prevent him from space travel, yet is determined to infiltrate the GATTACA space program.',
        releaseDate: '1997-09-07',
        runtime: 106
      },
      {
        title: 'Gandhi',
        posterPath: '/mGIDXmuCeLu1nzOxLbN8fWwn1fN.jpg',
        tmdbId: 783,
        genres: 'Drama',
        overview:
          'In the early years of the 20th century, Mohandas K. Gandhi, a British-trained lawyer, forsakes all worldly possessions to take up the cause of Indian independence. Faced with armed resistance from the British government, Gandhi adopts a policy of \'passive resistance\', endeavouring to win freedom for his people without resorting to bloodshed.',
        releaseDate: '1982-11-30',
        runtime: 191
      },
      {
        title: 'Kolya',
        posterPath: '/fB0cGiEOngfsfyDHXIpFOmEwFgi.jpg',
        tmdbId: 784,
        genres: 'Music',
        overview:
          'After a fictitious marriage with a Russian emigrant, Cellisten Louka, a Czech man, must suddenly take responsibility for her son. However, it’s not long before the communication barrier is broken between the two new family members.',
        releaseDate: '1996-05-05',
        runtime: 105
      },
      {
        title: 'To Whom Does the World Belong?',
        posterPath: '/wlgWDBftI6P832bnxUNHPiA3gol.jpg',
        tmdbId: 785,
        genres: 'Drama',
        overview:
          'Kuhle Wampe takes place in early-1930s Berlin. The film begins with a montage of newspaper headlines describing steadily-rising unemployment figures. This is followed by scenes of a young man looking for work in the city and the family discussing the unpaid back rent. The young man, brother of the protagonist Anni, removes his wristwatch and throws himself from a window out of despair. Shortly thereafter his family is evicted from their apartment. Now homeless, the family moves into a garden colony of sorts with the name “Kuhle Wampe.”',
        releaseDate: '1932-05-14',
        runtime: 74
      },
      {
        title: 'Almost Famous',
        posterPath: '/asGfT3PExH4CUyyiClt5X6wJedk.jpg',
        tmdbId: 786,
        genres: 'Drama',
        overview:
          'In 1973, 15-year-old William Miller\'s unabashed love of music and aspiration to become a rock journalist lands him an assignment from Rolling Stone magazine to interview and tour with the up-and-coming band Stillwater—fronted by lead guitar Russell Hammond, and lead singer Jeff Bebe.',
        releaseDate: '2000-09-15',
        runtime: 122
      },
      {
        title: 'Mr. & Mrs. Smith',
        posterPath: '/wzIO3ytxeSNt1wRpXLIdkNbGoDm.jpg',
        tmdbId: 787,
        genres: 'Action',
        overview:
          'After five (or six) years of vanilla-wedded bliss, ordinary suburbanites John and Jane Smith are stuck in a huge rut. Unbeknownst to each other, they are both coolly lethal, highly-paid assassins working for rival organisations. When they discover they\'re each other\'s next target, their secret lives collide in a spicy, explosive mix of wicked comedy, pent-up passion, nonstop action and high-tech weaponry.',
        releaseDate: '2005-06-07',
        runtime: 120
      },
      {
        title: 'Mrs. Doubtfire',
        posterPath: '/szvidvi0Fo4j2gmMtk1sNe1rkzw.jpg',
        tmdbId: 788,
        genres: 'Comedy',
        overview:
          'Loving but irresponsible dad Daniel Hillard, estranged from his exasperated spouse, is crushed by a court order allowing only weekly visits with his kids. When Daniel learns his ex needs a housekeeper, he gets the job -- disguised as an English nanny. Soon he becomes not only his children\'s best pal but the kind of parent he should have been from the start.',
        releaseDate: '1993-11-24',
        runtime: 125
      },
      {
        title: 'Closely Watched Trains',
        posterPath: '/hW4wTvePR6mz3mg8ooCtHuZOUSj.jpg',
        tmdbId: 789,
        genres: 'Comedy',
        overview:
          'In a small town still occupied by the Germans as World War II\'s tide is turning toward the Allies, apprentice train-watcher Milos is oblivious to the war. Instead, he is obsessed with having his first sexual experience. Despite the favors of train conductor Masa, Milos has no luck. His quest leads him to a female Resistance fighter who, in passing, recruits him to the cause. As Milos finally finds love, danger draws closer.',
        releaseDate: '1966-11-18',
        runtime: 93
      },
      {
        title: 'The Fog',
        posterPath: '/gZmdq8HB8SBdOHk5XarjCZIiGGk.jpg',
        tmdbId: 790,
        genres: 'Horror',
        overview:
          'Strange things begin to occurs as a tiny California coastal town prepares to commemorate its centenary. Inanimate objects spring eerily to life; Rev. Malone stumbles upon a dark secret about the town\'s founding; radio announcer Stevie witnesses a mystical fire; and hitchhiker Elizabeth discovers the mutilated corpse of a fisherman. Then a mysterious iridescent fog descends upon the village, and more people start to die.',
        releaseDate: '1980-02-08',
        runtime: 89
      },
      {
        title: 'The Fog',
        posterPath: '/faGixHOrZh5m9MLbYoj6ymi6rry.jpg',
        tmdbId: 791,
        genres: 'Horror',
        overview:
          'Trapped within an eerie mist, the residents of Antonio Bay have become the unwitting victims of a horrifying vengeance. One hundred years earlier, a ship carrying lepers was purposely lured onto the rocky coastline and sank, drowning all aboard. Now they\'re back – long-dead mariners who\'ve waited a century for their revenge.',
        releaseDate: '2005-10-14',
        runtime: 100
      },
      {
        title: 'Platoon',
        posterPath: '/m3mmFkPQKvPZq5exmh0bDuXlD9T.jpg',
        tmdbId: 792,
        genres: 'Drama',
        overview:
          'As a young and naive recruit in Vietnam, Chris Taylor faces a moral crisis when confronted with the horrors of war and the duality of man.',
        releaseDate: '1986-12-19',
        runtime: 120
      },
      {
        title: 'Blue Velvet',
        posterPath: '/7hlgzJXLgyECS1mk3LSN3E72l5N.jpg',
        tmdbId: 793,
        genres: 'Crime',
        overview:
          'The discovery of a severed human ear found in a field leads a young man on an investigation related to a beautiful, mysterious nightclub singer and a group of criminals who have kidnapped her child.',
        releaseDate: '1986-09-19',
        runtime: 120
      },
      {
        title: 'The Omen',
        posterPath: '/p0LcWxOIoBx0MEZMn8tFcrvDXR1.jpg',
        tmdbId: 794,
        genres: 'Horror',
        overview:
          'Immediately after their miscarriage, the US diplomat Robert Thorn adopts the newborn Damien without the knowledge of his wife. Yet what he doesn’t know is that their new son is the son of the devil.',
        releaseDate: '1976-06-06',
        runtime: 111
      },
      {
        title: 'City of Angels',
        posterPath: '/iuzxpUjHsbQJXV3kB9ZAdCimM60.jpg',
        tmdbId: 795,
        genres: 'Drama',
        overview:
          'When guardian angel Seth -- who invisibly watches over the citizens of Los Angeles -- becomes captivated by Maggie, a strong-willed heart surgeon, he ponders trading in his pure, otherworldly existence for a mortal life with his beloved. The couple embarks on a tender but forbidden romance spanning heaven and Earth.',
        releaseDate: '1998-04-10',
        runtime: 114
      },
      {
        title: 'Cruel Intentions',
        posterPath: '/76cCsRtQ5MJBAqoigojXsLXLJwh.jpg',
        tmdbId: 796,
        genres: 'Drama',
        overview:
          'Slaking a thirst for dangerous games, Kathryn challenges her stepbrother, Sebastian, to deflower their headmaster\'s daughter before the summer ends. If he succeeds, the prize is the chance to bed Kathryn. But if he loses, Kathryn will claim his most prized possession.',
        releaseDate: '1999-03-05',
        runtime: 98
      },
      {
        title: 'Persona',
        posterPath: '/mOodF10mRLMHYl8iOsyszm92hVi.jpg',
        tmdbId: 797,
        genres: 'Drama',
        overview:
          'A young nurse, Alma, is put in charge of Elisabeth Vogler: an actress who is seemingly healthy in all respects, but will not talk. As they spend time together, Alma speaks to Elisabeth constantly, never receiving any answer. The time they spend together only strengthens the crushing realization that one does not exist.',
        releaseDate: '1966-10-18',
        runtime: 84
      },
      {
        title: 'Annaluise & Anton',
        posterPath: '/fbdPVOBPBigSw9x4XVj6ItZfblm.jpg',
        tmdbId: 798,
        genres: 'Family',
        overview:
          'Despite their social differences Luise, called Pünktchen, a girl from rich parentage befriends Anton, a boy who has to earn his own money in order to afford life for his sick mother and himself. Together they undergo different adventures, even preventing a theft in Pünktchens home',
        releaseDate: '1953-08-26',
        runtime: 91
      },
      {
        title: 'Annaluise & Anton',
        posterPath: '/d7sc2f57F3jSFew7Nz5dJBPUCFC.jpg',
        tmdbId: 799,
        genres: 'Family',
        overview:
          'Luise, called Pünktchen, and Anton are closest of friends. Being the daughter of a wealthy surgeon, young Pünktchen lives in a great house. Her mother, who always travels through the world more for public relation reasons than for the social tasks she pretends to fulfill, is never available to her as a mother. Anton, son of a single and sick mother in financial trouble, does his best to help her out of it by working late. Pünktchen decides to help her only friend (as nobody else would anyway) and starts singing in public places. Trouble arises when Anton can\'t resist stealing a golden lighter and Pünktchen\'s secret life is discovered by her parents. Two troubled families finally can see the need for actions to be taken.',
        releaseDate: '1999-03-11',
        runtime: 107
      },
      {
        title: 'The Young and the Damned',
        posterPath: '/3bdfN2gosYSxpHBAXPkAhxkUJFr.jpg',
        tmdbId: 800,
        genres: 'Crime',
        overview:
          'A group of juvenile delinquents lives a criminal, violent life in the festering slums of Mexico City, among them the young Pedro, whose morality is gradually corrupted and destroyed by the others.',
        releaseDate: '1950-12-09',
        runtime: 85
      },
      {
        title: 'Good Morning, Vietnam',
        posterPath: '/y4zILnCypdVbiq9pyWrtmygZdWN.jpg',
        tmdbId: 801,
        genres: 'Comedy',
        overview:
          'Radio funny man Adrian Cronauer is sent to Vietnam to bring a little comedy back into the lives of the soldiers. After setting up shop, Cronauer delights the G.I.s but shocks his superior officer, Sergeant Major Dickerson, with his irreverent take on the war. While Dickerson attempts to censor Cronauer\'s broadcasts, Cronauer pursues a relationship with a Vietnamese girl named Trinh, who shows him the horrors of war first-hand.',
        releaseDate: '1987-12-23',
        runtime: 121
      },
      {
        title: 'Lolita',
        posterPath: '/8Puqbeh0D95DpXFWep1rmH78btu.jpg',
        tmdbId: 802,
        genres: 'Crime',
        overview:
          'Humbert Humbert is a middle-aged British novelist who is both appalled by and attracted to the vulgarity of American culture. When he comes to stay at the boarding house run by Charlotte Haze, he soon becomes obsessed with Lolita, the woman\'s teenaged daughter.',
        releaseDate: '1962-06-21',
        runtime: 154
      },
      {
        title: 'Night and Fog',
        posterPath: '/2iWYQia8enOai7QEO3TvenleD7r.jpg',
        tmdbId: 803,
        genres: 'History',
        overview:
          'Filmmaker Alain Resnais documents the atrocities behind the walls of Hitler\'s concentration camps.',
        releaseDate: '1956-04-29',
        runtime: 32
      },
      {
        title: 'Roman Holiday',
        posterPath: '/aIsAxkWv5EHaRn0QR18hy4ZltAN.jpg',
        tmdbId: 804,
        genres: 'Comedy',
        overview:
          'Overwhelmed by her suffocating schedule, touring European princess Ann takes off for a night while in Rome. When a sedative she took from her doctor kicks in, however, she falls asleep on a park bench and is found by an American reporter, Joe Bradley, who takes her back to his apartment for safety. At work the next morning, Joe finds out Ann\'s regal identity and bets his editor he can get exclusive interview with her, but romance soon gets in the way.',
        releaseDate: '1953-08-26',
        runtime: 119
      },
      {
        title: 'Rosemary\'s Baby',
        posterPath: '/rDBHzuuA5uFrc9KbsksrsPvuzgA.jpg',
        tmdbId: 805,
        genres: 'Horror',
        overview:
          'A young couple moves into an infamous New York apartment building to start a family. Things become frightening as Rosemary begins to suspect her unborn baby isn’t safe around their strange neighbors.',
        releaseDate: '1968-06-12',
        runtime: 137
      },
      {
        title: 'The Omen',
        posterPath: '/kf1Qq9b32jn4umll9qD2ue5ftnh.jpg',
        tmdbId: 806,
        genres: 'Horror',
        overview:
          'A diplomatic couple adopts the son of the devil without knowing it. A remake of the classic horror film of the same name from 1976.',
        releaseDate: '2006-06-06',
        runtime: 110
      },
      {
        title: 'Se7en',
        posterPath: '/6yoghtyTpznpBik8EngEmJskVUO.jpg',
        tmdbId: 807,
        genres: 'Crime',
        overview:
          'Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the "seven deadly sins" in this dark and haunting film that takes viewers from the tortured remains of one victim to the next. The seasoned Det. Sommerset researches each sin in an effort to get inside the killer\'s mind, while his novice partner, Mills, scoffs at his efforts to unravel the case.',
        releaseDate: '1995-09-22',
        runtime: 127
      },
      {
        title: 'Shrek',
        posterPath: '/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg',
        tmdbId: 808,
        genres: 'Animation',
        overview:
          'It ain\'t easy bein\' green -- especially if you\'re a likable (albeit smelly) ogre named Shrek. On a mission to retrieve a gorgeous princess from the clutches of a fire-breathing dragon, Shrek teams up with an unlikely compatriot -- a wisecracking donkey.',
        releaseDate: '2001-05-18',
        runtime: 90
      },
      {
        title: 'Shrek 2',
        posterPath: '/oljiDFPyMY437BRRV69AzVDSiKy.jpg',
        tmdbId: 809,
        genres: 'Animation',
        overview:
          'Shrek, Fiona and Donkey set off to Far, Far Away to meet Fiona\'s mother and father. But not everyone is happy. Shrek and the King find it hard to get along, and there\'s tension in the marriage. The fairy godmother discovers that Shrek has married Fiona instead of her Son Prince Charming and sets about destroying their marriage.',
        releaseDate: '2004-05-19',
        runtime: 93
      },
      {
        title: 'Shrek the Third',
        posterPath: '/jaNe16gE9zdAYyVwRqmlmRKshHm.jpg',
        tmdbId: 810,
        genres: 'Fantasy',
        overview:
          'The King of Far Far Away has died and Shrek and Fiona are to become King & Queen. However, Shrek wants to return to his cozy swamp and live in peace and quiet, so when he finds out there is another heir to the throne, they set off to bring him back to rule the kingdom.',
        releaseDate: '2007-05-17',
        runtime: 93
      },
      {
        title: 'Silent Running',
        posterPath: '/uWoj7EfHBprcssXUzCCWeI383Tx.jpg',
        tmdbId: 811,
        genres: 'Adventure',
        overview:
          'In a future Earth barren of all flora and fauna, the planet\'s ecosystems exist only in large pods attached to spacecraft. When word comes in that the pods are to be jettisoned into space and destroyed so that the spacecraft can be reused for commercial purposes, most of the crew of the Valley Forge rejoice at the prospect of going home. Not so for botanist Freeman Lowell who loves the forest and its creatures, so decides to take matters into his own hands to protect what he loves.',
        releaseDate: '1972-03-09',
        runtime: 89
      },
      {
        title: 'Aladdin',
        posterPath: '/eLFfl7vS8dkeG1hKp5mwbm37V83.jpg',
        tmdbId: 812,
        genres: 'Animation',
        overview:
          'Princess Jasmine grows tired of being forced to remain in the palace, so she sneaks out into the marketplace, in disguise, where she meets street-urchin Aladdin.  The couple falls in love, although Jasmine may only marry a prince.  After being thrown in jail, Aladdin becomes embroiled in a plot to find a mysterious lamp, with which the evil Jafar hopes to rule the land.',
        releaseDate: '1992-11-25',
        runtime: 90
      },
      {
        title: 'Airplane!',
        posterPath: '/hiURvJjCgk0s10urHVCg80TFF11.jpg',
        tmdbId: 813,
        genres: 'Comedy',
        overview:
          'Alcoholic pilot, Ted Striker has developed a fear of flying due to wartime trauma, but nevertheless boards a passenger jet in an attempt to woo back his stewardess girlfriend. Food poisoning decimates the passengers and crew, leaving it up to Striker to land the plane with the help of a glue-sniffing air traffic controller and Striker\'s vengeful former Air Force captain, who must both talk him down.',
        releaseDate: '1980-07-02',
        runtime: 88
      },
      {
        title: 'An American Werewolf in London',
        posterPath: '/dlnccJQuRQuxnpDdDtmFlW7MKH1.jpg',
        tmdbId: 814,
        genres: 'Horror',
        overview:
          'Two American tourists in England are attacked by a werewolf that none of the locals will admit exists.',
        releaseDate: '1981-08-21',
        runtime: 97
      },
      {
        title: 'Animal Farm',
        posterPath: '/vFQo4DdhgHBr0Jy06VpzCYaZaPI.jpg',
        tmdbId: 815,
        genres: 'Family',
        overview:
          'An animated film from 1999 based on the famous novel by George Orwell. Animals on a farm lead a revolution against the farmers to put their destiny in their own hands. However this revolution eats their own children and they cannot avoid corruption.',
        releaseDate: '1999-10-03',
        runtime: 91
      },
      {
        title: 'Austin Powers: International Man of Mystery',
        posterPath: '/5uD4dxNX8JKFjWKYMHyOsqhi5pN.jpg',
        tmdbId: 816,
        genres: 'Science Fiction',
        overview:
          'As a swingin\' fashion photographer by day and a groovy British superagent by night, Austin Powers is the \'60s\' most shagadelic spy, baby! But can he stop megalomaniac Dr. Evil after the bald villain freezes himself and unthaws in the \'90s? With the help of sexy sidekick Vanessa Kensington, he just might.',
        releaseDate: '1997-05-02',
        runtime: 94
      },
      {
        title: 'Austin Powers: The Spy Who Shagged Me',
        posterPath: '/f2ohIBEbc3eERyU5pgSknm8DqUj.jpg',
        tmdbId: 817,
        genres: 'Adventure',
        overview:
          'When diabolical genius, Dr. Evil travels back in time to steal superspy Austin Powers\'s ‘mojo’, Austin must return to the swingin\' \'60s himself – with the help of American agent, Felicity Shagwell – to stop the dastardly plan. Once there, Austin faces off against Dr. Evil\'s army of minions and saves the world in his own unbelievably groovy way.',
        releaseDate: '1999-06-08',
        runtime: 95
      },
      {
        title: 'Austin Powers in Goldmember',
        posterPath: '/c4Sus7BvVQM6i9M3Cr0U8Vw0L9f.jpg',
        tmdbId: 818,
        genres: 'Comedy',
        overview:
          'The world\'s most shagadelic spy continues his fight against Dr. Evil. This time, the diabolical doctor and his clone, Mini-Me, team up with a new foe -- \'70s kingpin Goldmember. While pursuing the team of villains to stop them from world domination, Austin gets help from his dad and an old girlfriend.',
        releaseDate: '2002-07-26',
        runtime: 94
      },
      {
        title: 'Sleepers',
        posterPath: '/yUpiEk2EojS9ZEXb3nIQonQCYYF.jpg',
        tmdbId: 819,
        genres: 'Crime',
        overview:
          'Two gangsters seek revenge on the state jail worker who during their stay at a youth prison sexually abused them. A sensational court hearing takes place to charge him for the crimes.',
        releaseDate: '1996-10-18',
        runtime: 147
      },
      {
        title: 'JFK',
        posterPath: '/r0VWVTYlqdRCK5ZoOdNnHdqM2gt.jpg',
        tmdbId: 820,
        genres: 'Drama',
        overview:
          'Follows the investigation into the assassination of President John F. Kennedy led by New Orleans district attorney Jim Garrison.',
        releaseDate: '1991-12-20',
        runtime: 189
      },
      {
        title: 'Judgment at Nuremberg',
        posterPath: '/cqumfgd74ftVzOKJpFGOG64WlXL.jpg',
        tmdbId: 821,
        genres: 'Drama',
        overview:
          'In 1947, four German judges who served on the bench during the Nazi regime face a military tribunal to answer charges of crimes against humanity. Chief Justice Haywood hears evidence and testimony not only from lead defendant Ernst Janning and his defense attorney Hans Rolfe, but also from the widow of a Nazi general, an idealistic U.S. Army captain and reluctant witness Irene Wallner.',
        releaseDate: '1961-12-01',
        runtime: 179
      },
      {
        title: 'The Music Room',
        posterPath: '/nB1mkxQKFRlAUkW8klmXrbs55zo.jpg',
        tmdbId: 822,
        genres: 'Drama',
        overview:
          'A wealthy landlord who lives a decadent life with his wife and son. His passion - his wife would call it his addiction - is music, and he spends a great deal of his fortune on concerts held for the locals in his magnificent music room. He feels threatened by his neighbour, a commoner who has attained riches through business dealings. His passion for music and quest for social respect are his undoing, as he sacrifices his family and wealth trying to retain it.',
        releaseDate: '1958-10-10',
        runtime: 100
      },
      {
        title: 'Jin-Roh: The Wolf Brigade',
        posterPath: '/iyLKFR339GCzTKUtrVO4hbeEhub.jpg',
        tmdbId: 823,
        genres: 'Animation',
        overview:
          'A member of an elite paramilitary counter-terrorism unit becomes traumatized after witnessing the suicide bombing of a young girl and is forced to undergo retraining. However, unbeknownst to him, he becomes a key player in a dispute between rival police divisions, as he finds himself increasingly involved with the sister of the girl he saw die.',
        releaseDate: '1999-11-17',
        runtime: 102
      },
      {
        title: 'Moulin Rouge!',
        posterPath: '/xhuQz2yKPlWvMvvnf2u9RVkAQx6.jpg',
        tmdbId: 824,
        genres: 'Drama',
        overview:
          'A celebration of love and creative inspiration takes place in the infamous, gaudy and glamorous Parisian nightclub, at the cusp of the 20th century. A young poet, who is plunged into the heady world of Moulin Rouge, begins a passionate affair with the club\'s most notorious and beautiful star.',
        releaseDate: '2001-05-24',
        runtime: 127
      },
      {
        title: 'Playing by Heart',
        posterPath: '/3neHR1oPnC0OpcYhLn0TEdSHoEp.jpg',
        tmdbId: 825,
        genres: 'Drama',
        overview:
          'Eleven articulate people work through affairs of the heart in L.A. Paul produces Hannah\'s TV cooking show. Mark is dying of AIDS. Men have scalded Meredith so she rebuffs Trent\'s charm, but he persists. The trendy, prolix Joan tries to pull the solitary Keenan into her orbit. An adulterous couple meet at hotels for evening sex. Hugh tells tall tales, usually tragic, to women in bars.',
        releaseDate: '1998-12-30',
        runtime: 121
      },
      {
        title: 'The Bridge on the River Kwai',
        posterPath: '/rVWacfczT3i1GOjqp2u4K9wahta.jpg',
        tmdbId: 826,
        genres: 'Drama',
        overview:
          'The classic story of English POWs in Burma Myanmar (Burma) forced to build a bridge to aid the war effort of their Japanese captors. British and American intelligence officers conspire to blow up the structure, but Col. Nicholson , the commander who supervised the bridge\'s construction, has acquired a sense of pride in his creation and tries to foil their plans.',
        releaseDate: '1957-10-02',
        runtime: 161
      },
      {
        title: 'Diabolique',
        posterPath: '/pNcwhz3Eyfn3KQ2XykTozbARMpr.jpg',
        tmdbId: 827,
        genres: 'Drama',
        overview:
          'The cruel and abusive headmaster of a boarding school, Michel Delassalle, is murdered by an unlikely duo -- his meek wife and the mistress he brazenly flaunts. The women become increasingly unhinged by a series of odd occurrences after Delassalle\'s corpse mysteriously disappears.',
        releaseDate: '1955-01-29',
        runtime: 117
      },
      {
        title: 'The Day the Earth Stood Still',
        posterPath: '/x2DquTpLTq54aPFDnqlwY7apCC3.jpg',
        tmdbId: 828,
        genres: 'Drama',
        overview:
          'An alien and a robot land on Earth after World War II and tell mankind to be peaceful or face destruction.',
        releaseDate: '1951-09-28',
        runtime: 92
      },
      {
        title: 'Chinatown',
        posterPath: '/iZQSbGtE9qJGRt4OUuUUrwMVqEu.jpg',
        tmdbId: 829,
        genres: 'Crime',
        overview:
          'Private eye Jake Gittes lives off of the murky moral climate of sunbaked, pre-World War II Southern California. Hired by a beautiful socialite to investigate her husband\'s extra-marital affair, Gittes is swept into a maelstrom of double dealings and deadly deceits, uncovering a web of personal and political scandals that come crashing together.',
        releaseDate: '1974-06-20',
        runtime: 130
      },
      {
        title: 'Forbidden Planet',
        posterPath: '/aq0OQfRS7hDDI8vyD0ICbH9eguC.jpg',
        tmdbId: 830,
        genres: 'Science Fiction',
        overview:
          'Starship C57D travels to planet Altair 4 in search of the crew of spaceship "Bellerophon", a scientific expedition that has been missing for 20 years, only to find themselves unwelcome by the expedition\'s lone survivor and warned of destruction by an invisible force if they don\'t turn back immediately.',
        releaseDate: '1956-03-23',
        runtime: 98
      },
      {
        title: 'This Island Earth',
        posterPath: '/bwq7eu4puHyrqMTsKpnUA3jXQI1.jpg',
        tmdbId: 831,
        genres: 'Science Fiction',
        overview:
          'Aliens have landed and are hiding on Earth, but need Earth’s scientists to help them fight an inter-planetary war.',
        releaseDate: '1955-06-01',
        runtime: 87
      },
      {
        title: 'M',
        posterPath: '/6hg2UClwHGnBojemFrLgiF1WK8A.jpg',
        tmdbId: 832,
        genres: 'Drama',
        overview:
          'In this classic German thriller, Hans Beckert, a serial killer who preys on children, becomes the focus of a massive Berlin police manhunt. Beckert\'s heinous crimes are so repellant and disruptive to city life that he is even targeted by others in the seedy underworld network. With both cops and criminals in pursuit, the murderer soon realizes that people are on his trail, sending him into a tense, panicked attempt to escape justice.',
        releaseDate: '1931-05-11',
        runtime: 117
      },
      {
        title: 'Umberto D.',
        posterPath: '/fayAl6RBBvkruxZ4laI9peqeov7.jpg',
        tmdbId: 833,
        genres: 'Drama',
        overview:
          'When elderly pensioner Umberto Domenico Ferrari returns to his boarding house from a protest calling for a hike in old-age pensions, his landlady demands her 15,000-lire rent by the end of the month or he and his small dog will be turned out onto the street. Unable to get the money in time, Umberto fakes illness to get sent to a hospital, giving his beloved dog to the landlady\'s pregnant and abandoned maid for temporary safekeeping.',
        releaseDate: '1952-01-20',
        runtime: 91
      },
      {
        title: 'Underworld: Evolution',
        posterPath: '/oJaQG353uOzOqffQ5K2hg03k4Vp.jpg',
        tmdbId: 834,
        genres: 'Fantasy',
        overview:
          'As the war between the vampires and the Lycans rages on, Selene, a former member of the Death Dealers (an elite vampire special forces unit that hunts werewolves), and Michael, the werewolf hybrid, work together in an effort to unlock the secrets of their respective bloodlines.',
        releaseDate: '2006-01-12',
        runtime: 106
      },
      {
        title: 'F.P.1 Doesn\'t Answer',
        posterPath: '/bthjODBQHdznm6kWtpJxlTFC73d.jpg',
        tmdbId: 835,
        genres: 'Science Fiction',
        overview:
          'F.P.1 is a huge airplane landing dock in the Atlantic where pilots making the transatlantic flight can stop. Yet a saboteur tries to sink the technical wonder in this classic German science fiction film from 1932. The film was also created with English and French speaking actors at the same time.',
        releaseDate: '1932-12-22',
        runtime: 114
      },
      {
        title: 'Barren Lives',
        posterPath: '/sWqa4iDkMfMwACrTdQnAGdlCsSh.jpg',
        tmdbId: 836,
        genres: 'Drama',
        overview:
          'In vivid images, the documentary-like story of a drover and his family in the northern badlands of Brazil during the drought. A family in the search of new hope and destiny.',
        releaseDate: '1963-08-22',
        runtime: 115
      },
      {
        title: 'Videodrome',
        posterPath: '/dBqp1SxlqnJEHYDM9sNelXoQsO1.jpg',
        tmdbId: 837,
        genres: 'Horror',
        overview:
          'As the president of a trashy TV channel, Max Renn is desperate for new programming to attract viewers. When he happens upon "Videodrome," a TV show dedicated to gratuitous torture and punishment, Max sees a potential hit and broadcasts the show on his channel. However, after his girlfriend auditions for the show and never returns, Max investigates the truth behind Videodrome and discovers that the graphic violence may not be as fake as he thought.',
        releaseDate: '1983-02-04',
        runtime: 88
      },
      {
        title: 'American Graffiti',
        posterPath: '/oIJHfGsN57GDyyn60LX1e5BDU5z.jpg',
        tmdbId: 838,
        genres: 'Comedy',
        overview:
          'A couple of high school graduates spend one final night cruising the strip with their buddies before they go off to college.',
        releaseDate: '1973-08-01',
        runtime: 110
      },
      {
        title: 'Duel',
        posterPath: '/tMXG6QQ4dcunbxkHlA7Pek9LZM7.jpg',
        tmdbId: 839,
        genres: 'Action',
        overview:
          'Traveling businessman David Mann angers the driver of a rusty tanker while crossing the California desert. A simple trip turns deadly, as Mann struggles to stay on the road while the tanker plays cat and mouse with his life.',
        releaseDate: '1971-11-13',
        runtime: 90
      },
      {
        title: 'Close Encounters of the Third Kind',
        posterPath: '/zNXmTB5GAUvRdF8FaXjeLNuaQz8.jpg',
        tmdbId: 840,
        genres: 'Science Fiction',
        overview:
          'After an encounter with UFOs, a line worker feels undeniably drawn to an isolated area in the wilderness where something spectacular is about to happen.',
        releaseDate: '1977-11-18',
        runtime: 135
      },
      {
        title: 'Dune',
        posterPath: '/ngUaHgSZGkKy1Izwjk7qwZLOC5A.jpg',
        tmdbId: 841,
        genres: 'Action',
        overview:
          'In the year 10,191, the world is at war for control of the desert planet Dune—the only place where the time-travel substance \'Spice\' can be found. But when one leader gives up control, it\'s only so he can stage a coup with some unsavory characters.',
        releaseDate: '1984-12-14',
        runtime: 137
      },
      {
        title: 'The Assassination of Richard Nixon',
        posterPath: '/5jOOvAVvP0XtwC5yYQpQCy4cjq1.jpg',
        tmdbId: 842,
        genres: 'Drama',
        overview:
          'It’s 1974 and Sam Bicke has lost everything. His wife leaves him with his three kids, his boss fires him, his brother turns away from him, and the bank won’t give him any money to start anew. He tries to find someone to blame for his misfortunes and comes up with the President of the United States who he plans to murder.',
        releaseDate: '2004-05-17',
        runtime: 95
      },
      {
        title: 'In the Mood for Love',
        posterPath: '/iYypPT4bhqXfq1b6EnmxvRt6b2Y.jpg',
        tmdbId: 843,
        genres: 'Drama',
        overview:
          'A melancholy story set in Hong Kong in 1962. A woman and a man who live in the same crowded apartment building discover that their husband and wife are having an affair.',
        releaseDate: '2000-05-22',
        runtime: 99
      },
      {
        title: '2046',
        posterPath: '/jIN65qw0Giplo4CshzMrxz204Wn.jpg',
        tmdbId: 844,
        genres: 'Fantasy',
        overview:
          'Women enter and exit a science fiction author\'s life, over the course of a few years, after the author loses the woman he considers his one true love.',
        releaseDate: '2004-05-20',
        runtime: 128
      },
      {
        title: 'Strangers on a Train',
        posterPath: '/ihC083U7ef56Ui4x0P0dobojrZ1.jpg',
        tmdbId: 845,
        genres: 'Crime',
        overview:
          'A psychotic socialite confronts a pro tennis star with a theory on how two complete strangers can get away with murder—a theory that he plans to implement.',
        releaseDate: '1951-06-27',
        runtime: 101
      },
      {
        title: 'The X Files',
        posterPath: '/yLIw6shz2WC3W3iI0jROsF4B2ha.jpg',
        tmdbId: 846,
        genres: 'Mystery',
        overview:
          'Mulder and Scully, now taken off the FBI\'s X Files cases, must find a way to fight the shadowy elements of the government to find out the truth about a conspiracy that might mean the alien colonization of Earth.',
        releaseDate: '1998-06-19',
        runtime: 121
      },
      {
        title: 'Willow',
        posterPath: '/39OIKfFAOJboQVvZIhVD4pirtBE.jpg',
        tmdbId: 847,
        genres: 'Action',
        overview:
          'Fearful of a prophecy stating that a girl child will be born to bring about her downfall, the evil Queen Bavmorda imprisons all pregnant women within the formidable stronghold of Nockmaar. A child, Elora Danan, is born in the Nockmaar dungeons and identified as the prophesied child by a birthmark on her arm. However, before the black sorceress arrives to claim the child, Elora\'s mother convinces her reluctant midwife to escape with the baby. Willow, a timid farmer and aspiring sorcerer, is entrusted with delivering the royal infant from evil.',
        releaseDate: '1988-05-01',
        runtime: 126
      },
      {
        title: 'Dragonslayer',
        posterPath: '/dDRK8lbFSt2M3UVDvdG5kMSJUjt.jpg',
        tmdbId: 848,
        genres: 'Fantasy',
        overview:
          'The sorcerer and his apprentice Galen are on a mission to kill an evil dragon in order to save the King’s daughter from being sacrificed in accordance to a pact that the King himself made with the dragon to protect his kingdom. A fantasy film from Disney Studios that exhausted all possible visual effects of the time.',
        releaseDate: '1981-06-26',
        runtime: 108
      },
      {
        title: 'Krull',
        posterPath: '/b1anwwbh00R3iOgM88L5jf7qHBt.jpg',
        tmdbId: 849,
        genres: 'Action',
        overview:
          'A prince and a fellowship of companions set out to rescue his bride from a fortress of alien invaders who have arrived on their home planet.',
        releaseDate: '1983-07-29',
        runtime: 117
      }




    ], {});

    queryInterface.bulkInsert('Watchlists', [
      {userId: 1, createdAt: new Date(), updatedAt: new Date()},
      {userId: 2, createdAt: new Date(), updatedAt: new Date()},
      {userId: 3, createdAt: new Date(), updatedAt: new Date()},
      {userId: 4, createdAt: new Date(), updatedAt: new Date()},
      {userId: 5, createdAt: new Date(), updatedAt: new Date()},
        
    ], {});

    queryInterface.bulkInsert('WatchedMovies', [
      { watchListId: 1, movieId: 78, watchStatus: 'watched', createdAt: new Date(), updatedAt: new Date() },
      { watchListId: 1, movieId: 95, watchStatus: 'want', createdAt: new Date(), updatedAt: new Date() },
      { watchListId: 1, movieId: 49, watchStatus: 'want', createdAt: new Date(), updatedAt: new Date() },
      { watchListId: 1, movieId: 79, watchStatus: 'want', createdAt: new Date(), updatedAt: new Date() },
      { watchListId: 1, movieId: 48, watchStatus: 'want', createdAt: new Date(), updatedAt: new Date() },
      { watchListId: 1, movieId: 69, watchStatus: 'want', createdAt: new Date(), updatedAt: new Date() },
      { watchListId: 1, movieId: 45, watchStatus: 'watched', createdAt: new Date(), updatedAt: new Date() },
      { watchListId: 1, movieId: 27, watchStatus: 'watched', createdAt: new Date(), updatedAt: new Date() },
      { watchListId: 1, movieId: 33, watchStatus: 'watched', createdAt: new Date(), updatedAt: new Date() },
      { watchListId: 1, movieId: 49, watchStatus: 'watched', createdAt: new Date(), updatedAt: new Date() },
      { watchListId: 1, movieId: 97, watchStatus: 'watched', createdAt: new Date(), updatedAt: new Date() },
      { watchListId: 2, movieId: 33, watchStatus: 'want', createdAt: new Date(), updatedAt: new Date() },
      { watchListId: 2, movieId: 47, watchStatus: 'want', createdAt: new Date(), updatedAt: new Date() },
      { watchListId: 2, movieId: 25, watchStatus: 'want', createdAt: new Date(), updatedAt: new Date() },
      { watchListId: 2, movieId: 30, watchStatus: 'want', createdAt: new Date(), updatedAt: new Date() },
      { watchListId: 2, movieId: 88, watchStatus: 'want', createdAt: new Date(), updatedAt: new Date() },
      { watchListId: 3, movieId: 27, watchStatus: 'watched', createdAt: new Date(), updatedAt: new Date() },
      { watchListId: 4, movieId: 150, watchStatus: 'want', createdAt: new Date(), updatedAt: new Date() },
      { watchListId: 4, movieId: 27, watchStatus: 'watched', createdAt: new Date(), updatedAt: new Date() },
      { watchListId: 5, movieId: 99, watchStatus: 'watched', createdAt: new Date(), updatedAt: new Date() },
      { watchListId: 4, movieId: 99, watchStatus: 'watched', createdAt: new Date(), updatedAt: new Date() },
      { watchListId: 3, movieId: 99, watchStatus: 'watched', createdAt: new Date(), updatedAt: new Date() },
      { watchListId: 1, movieId: 99, watchStatus: 'watched', createdAt: new Date(), updatedAt: new Date() },
      
      
    ], {});
    return queryInterface.bulkInsert('Reviews', [
      { stars: 5, review: 'What a great film!', userId: 1, movieId: 78, createdAt: new Date(), updatedAt: new Date() },
      { stars: 1, review: 'I hated it.', userId: 3, movieId: 5, createdAt: new Date(), updatedAt: new Date() },
      { stars: 4, review: 'Family fun.', userId: 1, movieId: 27, createdAt: new Date(), updatedAt: new Date() },
      { stars: 3, review: 'left in the middle', userId: 3, movieId: 27, createdAt: new Date(), updatedAt: new Date() },
      { stars: 5, review: 'my favorite movie!', userId: 4, movieId: 27, createdAt: new Date(), updatedAt: new Date() },
      { stars: 5, review: 'jolly good times', userId: 5, movieId: 99, createdAt: new Date(), updatedAt: new Date() },
      { stars: 3, review: 'whose idea was this', userId: 4, movieId: 99, createdAt: new Date(), updatedAt: new Date() },
      { stars: 5, review: 'golden age of cinema', userId: 3, movieId: 99, createdAt: new Date(), updatedAt: new Date() },
      { stars: 5, review: 'this deserves awards', userId: 1, movieId: 99, createdAt: new Date(), updatedAt: new Date() },
   
      
      
    ], {});


    
  },

  down: (queryInterface, Sequelize) => {
  queryInterface.bulkDelete('Users', null, {});
  queryInterface.bulkDelete('Movies', null, {});
  queryInterface.bulkDelete('Watchlists', null, {});
  queryInterface.bulkDelete('WatchedMovies', null, {});
  return queryInterface.bulkDelete('Reviews', null, {});
  
  }
};
