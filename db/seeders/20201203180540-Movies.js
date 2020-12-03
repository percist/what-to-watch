'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('Movies', [
        {
          title: "One Flew Over the Cuckoo's Nest",
          posterPath: '/3jcbDmRFiQ83drXNOvRDeKHxS0C.jpg',
          tmdbId: 510,
          genres:  'Drama', 
          overview: 'While serving time for insanity at a state mental hospital, implacable rabble-rouser, Randle Patrick McMurphy, inspires his fellow patients to rebel against the authoritarian rule of head nurse, Mildred Ratched.',
          releaseDate: '1975-11-18',
          runtime: 133
        },
        {
          title: 'The Promised Land',
          posterPath: '/uwMs9axSBS0opiO7Ih2J3AjUvMv.jpg',
          tmdbId: 511,
          genres:  'Drama', 
          overview: 'The Polish film based on the book of the same name by Wladyslaw Reymont. Taking place in the nineteenth century town of Łódź, Poland, three friends want to make a lot of money by building and investing in a textile factory. An exceptional portrait of rapid industrial expansion shown through the eyes of one Polish town.',
          releaseDate: '1975-02-21',
          runtime: 179
        },
        {
          title: 'Scoop',
          posterPath: '/aHvZYoQNRTMrfs46pj64b9GrbaK.jpg',
          tmdbId: 512,
          genres:  'Comedy',
          overview: 'An American journalism student in London scoops a big story, and begins an affair with an aristocrat as the incident unfurls.',
          releaseDate: '2006-07-27',
          runtime: 96
        },
        {
          title: 'Fire',
          posterPath: '/jDUCcZ7bBkqhbZ8R0vml3YUd4GG.jpg',
          tmdbId: 513,
          genres:  'Drama',
          overview: "In a barren, arranged marriage to an amateur swami who seeks enlightenment through celibacy, Radha's life takes an irresistible turn when her beautiful young sister-in-law seeks to free herself from the confines of her own loveless marriage.",
          releaseDate: '1997-08-22',
          runtime: 108
        },
        {
          title: 'Dial M for Murder',
          posterPath: '/4qPIsFXLVH9feiRBpCf2XRZqK4k.jpg',
          tmdbId: 521,
          genres:  'Crime',
          overview: 'An ex-tennis pro carries out a plot to have his wife murdered after discovering she is having an affair, and assumes she will soon leave him for the other man anyway. When things go wrong, he improvises a new plan—to frame her for murder instead.',
          releaseDate: '1954-05-29',
          runtime: 105
        },
        {
          title: 'Ed Wood',
          posterPath: '/mwIpZTVgnHl08RvNFvgHCINR8BL.jpg',
          tmdbId: 522,
          genres: 
            'Comedy',
          
          overview: 'The mostly true story of the legendary "worst director of all time", who, with the help of his strange friends, filmed countless B-movies without ever becoming famous or successful.',
          releaseDate: '1994-09-27',
          runtime: 127
        },
        {
          title: 'Requiem',
          posterPath: '/m42xNNYk3Nxs3xmucuKjl4zSjMc.jpg',
          tmdbId: 523,
          genres:  'Drama',
          overview: 'Michaela, an epileptic, enrolls in college to study education. She goes off her medication and soon begins hearing voices and seeing apparitions that tell her to avoid religious objects, although she is devoutly Roman Catholic. One priest scoffs at the idea that Michaela could be possessed by demons, but a younger pastor arranges an exorcism for the young woman.',
          releaseDate: '2006-03-02',
          runtime: 92
        },
        {
          title: 'Casino',
          posterPath: '/4TS5O1IP42bY2BvgMxL156EENy.jpg',
          tmdbId: 524,
          genres:  'Crime', 
          overview: `In early-1970s Las Vegas, low-level mobster Sam "Ace" Rothstein gets tapped by his bosses to head the Tangiers Casino. At first, he's a great success in the job, but over the years, problems with his loose-cannon enforcer Nicky Santoro, his ex-hustler wife Ginger, her con-artist ex Lester Diamond and a handful of corrupt politicians put Sam in ever-increasing danger.`,
          releaseDate: '1995-11-22',
          runtime: 179
        },
        {
          title: 'The Blues Brothers',
          posterPath: '/3DiSrcYELCLkwnjl9EZp2pkKGep.jpg',
          tmdbId: 525,
          genres: 
            'Music',
          
          overview: "Jake Blues is just out of jail, and teams up with his brother, Elwood on a 'mission from God' to raise funds for the orphanage in which they grew up. The only thing they can do is do what they do best: play music. So they get their old band together, and set out on their way—while getting in a bit of trouble here and there.",
          releaseDate: '1980-06-16',
          runtime: 133
        },
        {
          title: 'Ladyhawke',
          posterPath: '/vJA2Fhw2uBMiVFdBde2kH7kZ2gw.jpg',
          tmdbId: 526,
          genres:  'Adventure',
          overview: 'Captain Etienne Navarre is a man on whose shoulders lies a cruel curse. Punished for loving each other, Navarre must become a wolf by night whilst his lover, Lady Isabeau, takes the form of a hawk by day. Together, with the thief Philippe Gaston, they must try to overthrow the corrupt Bishop and in doing so break the spell.',
          releaseDate: '1985-03-27',
          runtime: 121
        },

        {
          title: 'A Grand Day Out',
          posterPath: '/og1s6iwv73WMShgNzg0WTtmrKXy.jpg',
          tmdbId: 530,
          genres: 
            'Adventure',
          
          overview: 'Wallace and Gromit have run out of cheese and this provides an excellent excuse for the animated duo to take their holiday on the moon, where, as everyone knows, there is ample cheese. The moon is inhabited by a mechanical caretaker, who is not too happy about the two visitors from earth that nibble on the moon.',
          releaseDate: '1990-05-18',
          runtime: 23
        },
        {
          title: 'The Wrong Trousers',
          posterPath: '/wRTCxYHx1d9diFFmOHQZT7CjdUV.jpg',
          tmdbId: 531,
          genres: 
            'Animation',
          
          overview: 'Gromit finds himself being pushed out of his room and home by a new lodger who is actually a ruthless criminal (and a small penguin). The penguin is planning a robbery and needs to use Wallace and his mechanical remote controlled trousers to pull off the raid. However, Gromit is wise to the penguin and comes to the rescue.',
          releaseDate: '1993-12-17',
          runtime: 30
        },
        {
          title: 'A Close Shave',
          posterPath: '/4hRtelqMooXuVUVXuMYt3KbdCWM.jpg',
          tmdbId: 532,
          genres: 
            'Family',
          
          overview: 'Wallace falls in love with wool-shop owner Wendolene, not suspecting that she (or rather, her dog) is at the head of a fiendish sheep-rustling plot. Gromit is set up and jailed, but his new-found sheepish friend is determined to give Wallace a helping hand in finding out the real truth.',
          releaseDate: '1995-04-10',
          runtime: 30
        },
        {
          title: 'Wallace & Gromit: The Curse of the Were-Rabbit',
          posterPath: '/cMQ2lNd7sBe6PCf6zF5QxrKzbRG.jpg',
          tmdbId: 533,
          genres: 
            'Adventure',
          
          overview: "Cheese-loving eccentric Wallace and his cunning canine pal, Gromit, investigate a mystery in Nick Park's animated adventure, in which the lovable inventor and his intrepid pup run a business ridding the town of garden pests. Using only humane methods that turn their home into a halfway house for evicted vermin, the pair stumble upon a mystery involving a voracious vegetarian monster that threatens to ruin the annual veggie-growing contest.",
          releaseDate: '2005-09-04',
          runtime: 85
        },
        {
          title: 'Terminator Salvation',
          posterPath: '/gw6JhlekZgtKUFlDTezq3j5JEPK.jpg',
          tmdbId: 534,
          genres: 
            'Action',
          
          overview: "All grown up in post-apocalyptic 2018, John Connor must lead the resistance of humans against the increasingly dominating militaristic robots. But when Marcus Wright appears, his existence confuses the mission as Connor tries to determine whether Wright has come from the future or the past -- and whether he's friend or foe.",
          releaseDate: '2009-05-20',
          runtime: 115
        },
        {
          title: 'Flashdance',
          posterPath: '/ziiy6ORt8BlxWFXskBChBMInvDA.jpg',
          tmdbId: 535,
          genres:  'Drama',
          overview: 'The popular 1980s dance movie that depicts the life of an exotic dancer with a side job as a welder whose true desire is to get into ballet school. It’s her dream to be a professional dancer and now is her chance.',
          releaseDate: '1983-04-14',
          runtime: 95
        },
        {
          title: 'Stuttgart Shanghai',
          posterPath: null,
          tmdbId: 536,
          genres:  'Documentary', 
          overview: 'A young pair from Stuttgart fly to Shanghai to hop aboard the textile business of his father while she prepares for the birth of their son. A story about the ever more common movement of Germans into the East for professional gain.',
          releaseDate: '2007-03-01',
          runtime: 60
        },
        {
          title: 'Not Here to Be Loved',
          posterPath: '/zwm45xc3SL3in0Y3BvKoIciPWRa.jpg',
          tmdbId: 537,
          genres:  'Romance',
          overview: 'Jean-Claude Delsart, a 50 years-old bailiff, with his worn-out smile and heart, abandoned a long time ago the idea that life could give him pleasures. Until the day, he dares to push the doors of a tango lesson...',
          releaseDate: '2005-10-12',
          runtime: 93
        },
        {
          title: 'Janine F.',
          posterPath: null,
          tmdbId: 538,
          genres: "Horror",
          overview: 'The humorous portrait of a female artist. The film follows the career of 24-year-old Janine F. who in 2002 caused a commotion from the rooftop of a Berlin building.',
          releaseDate: '2004-02-11',
          runtime: 52
        },
        {
          title: 'Psycho',
          posterPath: '/nR4LD4ZJg2n6LZQpcOrLFdMq0cD.jpg',
          tmdbId: 539,
          genres: 
            'Horror',
          overview: 'When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother.',
          releaseDate: '1960-06-22',
          runtime: 109
        },
        {
          title: 'D.E.B.S.',
          posterPath: '/cMwLTcG5aVBYeh5W6SVSfowboAf.jpg',
          tmdbId: 540,
          genres:  'Action', 
          overview: 'The star of a team of teenage crime fighters falls for the alluring villainess she must bring to justice.',
          releaseDate: '2004-01-21',
          runtime: 91
        },
        {
          title: 'The Man with the Golden Arm',
          posterPath: '/dEw3SzGbKVYXKTJ2kIXC3jLmG5s.jpg',
          tmdbId: 541,
          genres: 
            'Crime',
          
          overview: 'A junkie must face his true self to kick his drug addiction.',
          releaseDate: '1955-12-26',
          runtime: 119
        },
        {
          title: 'The Crime of Padre Amaro',
          posterPath: '/wqwt2DKcQV6EeSwXuYTk7pkLFii.jpg',
          tmdbId: 542,
          genres:  'Drama',
          overview: 'The young Father Amaro is put to the test. He is sent to Mexico to help take care of aging Father Benito when he meets a 16-year-old girl that he begins and affair with. It turns out the girls mother had been having an affair with Father Benito. Father Amaro must soon choose between the holy or the sinful life.',
          releaseDate: '2002-10-01',
          runtime: 118
        },
        {
          title: 'Blackmail',
          posterPath: '/klilqRJDTANv9XMTBbL51NOsOXZ.jpg',
          tmdbId: 543,
          genres:  'Drama',
          overview: 'London, 1929. Frank Webber, a very busy Scotland Yard detective, seems to be more interested in his work than in Alice White, his girlfriend. Feeling herself ignored, Alice agrees to go out with an elegant and well-mannered artist who invites her to visit his fancy apartment.',
          releaseDate: '1929-07-28',
          runtime: 86
        },
        {
          title: "There's Something About Mary",
          posterPath: '/g03pwohXHOI75InM3zraiaEGguO.jpg',
          tmdbId: 544,
          genres:  'Romance',
          overview: 'For Ted, prom night went about as bad as it’s possible for any night to go. Thirteen years later, he finally gets another chance with his old prom date, only to run up against other suitors including the sleazy detective he hired to find her.',
          releaseDate: '1998-07-15',
          runtime: 119
        },
        {
          title: 'Transamerica',
          posterPath: '/q8AIa13nrILd6Io2UCqOOJpjLM8.jpg',
          tmdbId: 546,
          genres:  'Drama', 
          overview: 'Bree is about to get a sex change operation that will finally allow her to actually be what she’s already been in her mind for a long time: a transitioned woman. Yet before this happens she suddenly runs into her son who ends up coming for the trip across the United States.',
          releaseDate: '2005-12-23',
          runtime: 103
        },
        {
          title: 'The Horse Whisperer',
          posterPath: '/1Ptdh2fdA5xpH5Zj8AQUAp9Tdoa.jpg',
          tmdbId: 547,
          genres:  'Drama',
          overview: 'Based on the novel by the same name from Nicholas Evans, the talented Robert Redford presents this meditative family drama set in the country side. Redford not only directs but also stars in the roll of a cowboy with a magical talent for healing.',
          releaseDate: '1998-05-14',
          runtime: 170
        },
        {
          title: 'Rashomon',
          posterPath: '/mwNCpjejHwq9KlpNB2gKII2yvbr.jpg',
          tmdbId: 548,
          genres: 'Crime',
          overview: `Brimming with action while incisively examining the nature of truth, "Rashomon" is perhaps the finest film ever to investigate the philosophy of justice. Through an ingenious use of camera and flashbacks, Kurosawa reveals the complexities of human nature as four people recount different versions of the story of a man's murder and the rape of his wife.`,
          releaseDate: '1950-08-26',
          runtime: 88
        },
        {
          title: 'Basquiat',
          posterPath: '/qS3zqMxjcXcHUUExvt2uhRvqi8Y.jpg',
          tmdbId: 549,
          genres:  'Drama',
          overview: 'The brief life of Jean Michel Basquiat, a world renowned New York street artist struggling with fame, drugs and his identity.',
          releaseDate: '1996-08-09',
          runtime: 108
        },
        {
          title: 'Fight Club',
          posterPath: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
          tmdbId: 550,
          genres:  'Drama', 
          overview: 'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
          releaseDate: '1999-10-15',
          runtime: 139
        },
        {
          title: 'The Poseidon Adventure',
          posterPath: '/cOzyaodbRPSQgD6bC6G5QlGFlFV.jpg',
          tmdbId: 551,
          genres: 'Action',
          overview: 'When their ocean liner capsizes, a group of passengers struggle to survive and escape.',
          releaseDate: '1972-12-13',
          runtime: 117
        },
        {
          title: 'Bread and Tulips',
          posterPath: '/vz0THk3uPmYip2U761UqB2D0hRl.jpg',
          tmdbId: 552,
          genres: 'Drama',
          overview: 'An endearing light comedy about a woman who spontaneously becomes a resident of Venice after her family left her begin. While enjoying the wonderful people she meets she achieves a new life and the first time independent of her family.',
          releaseDate: '2000-03-03',
          runtime: 114
        },
        {
          title: 'Dogville',
          posterPath: '/80iFKwaNumOuk5xDKSoS5H3qICc.jpg',
          tmdbId: 553,
          genres: 
            'Crime',
          overview: "A barren soundstage is stylishly utilized to create a minimalist small-town setting in which a mysterious woman named Grace hides from the criminals who pursue her. The town is two-faced and offers to harbor Grace as long as she can make it worth their effort, so Grace works hard under the employ of various townspeople to win their favor. Tensions flare, however, and Grace's status as a helpless outsider provokes vicious contempt and abuse from the citizens of Dogville.",
          releaseDate: '2003-05-19',
          runtime: 178
        },
        {
          title: 'The Cuckoo',
          posterPath: '/jz5u5anVn3PTAjHC1nQehZGQ41C.jpg',
          tmdbId: 554,
          genres: 
            'Drama',
          overview: "September of 1944, a few days before Finland went out of the Second World War. A chained to a rock Finnish sniper-kamikadze Veikko managed to set himself free. Ivan, a captain of the Soviet Army, arrested by the Front Secret Police 'Smersh', has a narrow escape. They are soldiers of the two enemy armies. A Lapp woman Anni gives a shelter to both of them at her farm. For Anni they are not enemies, but just men.",
          releaseDate: '2002-01-01',
          runtime: 100
        },
        {
          title: 'Absolut',
          posterPath: '/cwxOwSDwbwUfceIlaWFoo65SdzX.jpg',
          tmdbId: 555,
          genres:  'Thriller', 
          overview: 'Two guys against globalization want to plant a virus in the network of a finance corporation. On the day of the attack Alex has an accident and cannot remember anything.',
          releaseDate: '2005-04-20',
          runtime: 94
        },
        {
          title: 'Spider-Man',
          posterPath: '/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg',
          tmdbId: 557,
          genres:  'Fantasy',
          overview: 'After being bitten by a genetically altered spider, nerdy high school student Peter Parker is endowed with amazing powers to become the Amazing superhero known as Spider-Man.',
          releaseDate: '2002-05-01',
          runtime: 121
        },
        {
          title: 'Spider-Man 2',
          posterPath: '/olxpyq9kJAZ2NU1siLshhhXEPR7.jpg',
          tmdbId: 558,
          genres: 
            'Action',
          overview: "Peter Parker is going through a major identity crisis. Burned out from being Spider-Man, he decides to shelve his superhero alter ego, which leaves the city suffering in the wake of carnage left by the evil Doc Ock. In the meantime, Parker still can't act on his feelings for Mary Jane Watson, a girl he's loved since childhood.",
          releaseDate: '2004-06-25',
          runtime: 127
        },
        {
          title: 'Spider-Man 3',
          posterPath: '/sqZKCRYGovZ8aN99VVJSdL8Ja9k.jpg',
          tmdbId: 559,
          genres: 
            'Fantasy',
          overview: 'The seemingly invincible Spider-Man goes up against an all-new crop of villains—including the shape-shifting Sandman. While Spider-Man’s superpowers are altered by an alien organism, his alter ego, Peter Parker, deals with nemesis Eddie Brock and also gets caught up in a love triangle.',
          releaseDate: '2007-05-01',
          runtime: 139
        },
        {
          title: 'Secret Beyond the Door',
          posterPath: '/9qeB2MVRsfAzPw5tviUX4yfpZdh.jpg',
          tmdbId: 560,
          genres: 
            'Crime',
          overview: 'Fritz Lang’s psycho thriller tells the story of a woman who marries a stranger with a deadly hobby and through their love he attempts to fight off his obsessive-compulsive actions.',
          releaseDate: '1948-01-01',
          runtime: 99
        },
        {
          title: 'Constantine',
          posterPath: '/vPYgvd2MwHlxTamAOjwVQp4qs1W.jpg',
          tmdbId: 561,
          genres: 
            'Drama',
          overview: 'John Constantine has literally been to Hell and back. When he teams up with a policewoman to solve the mysterious suicide of her twin sister, their investigation takes them through the world of demons and angels that exists beneath the landscape of contemporary Los Angeles.',
          releaseDate: '2005-02-08',
          runtime: 121
        },
        {
          title: 'Die Hard',
          posterPath: '/p5hURTvac8sxLRhe5hLchvfy5Pu.jpg',
          tmdbId: 562,
          genres:  'Action',
          overview: "NYPD cop John McClane's plan to reconcile with his estranged wife is thrown for a serious loop when, minutes after he arrives at her office, the entire building is overtaken by a group of terrorists. With little help from the LAPD, wisecracking McClane sets out to single-handedly rescue the hostages and bring the bad guys down.",
          releaseDate: '1988-07-15',
          runtime: 131
        },
        {
          title: 'Starship Troopers',
          posterPath: '/cxCmv23O7p3hyHwqoktHYkZcGsY.jpg',
          tmdbId: 563,
          genres: 'Adventure',
          overview: `Set in the future, the story follows a young soldier named Johnny Rico and his exploits in the Mobile Infantry. Rico's military career progresses from recruit to non-commissioned officer and finally to officer against the backdrop of an interstellar war between mankind and an arachnoid species known as "the Bugs".`,
          releaseDate: '1997-11-07',
          runtime: 129
        },
        {
          title: 'The Mummy',
          posterPath: '/yhIsVvcUm7QxzLfT6HW2wLf5ajY.jpg',
          tmdbId: 564,
          genres:  'Adventure',
          overview: "Dashing legionnaire Rick O'Connell stumbles upon the hidden ruins of Hamunaptra while in the midst of a battle to claim the area in 1920s Egypt. It has been over three thousand years since former High Priest Imhotep suffered a fate worse than death as a punishment for a forbidden love—along with a curse that guarantees eternal doom upon the world if he is ever awoken.",
          releaseDate: '1999-04-16',
          runtime: 124
        },
        {
          title: 'The Ring',
          posterPath: '/e2t5CKMox7tjv3iD3Ko7NdFa5lJ.jpg',
          tmdbId: 565,
          genres:  'Horror',
          overview: "It sounded like just another urban legend: A videotape filled with nightmarish images, leading to a phone call foretelling the viewer's death in exactly seven days. As a newspaper reporter, Rachel Keller was naturally skeptical of the story, until four teenagers all met with mysterious deaths exactly one week after watching just such a tape. Allowing her investigative curiosity to get the better of her, Rachel tracks down the video... and watches it. Now she has just seven days to unravel the mystery of the Ring.",
          releaseDate: '2002-10-18',
          runtime: 115
        },
        
        {
          title: 'Rear Window',
          posterPath: '/qitnZcLP7C9DLRuPpmvZ7GiEjJN.jpg',
          tmdbId: 567,
          genres: 
            'Thriller',
          
          overview: 'A wheelchair-bound photographer spies on his neighbors from his apartment window and becomes convinced one of them has committed murder.',
          releaseDate: '1954-09-01',
          runtime: 112
        },
        {
          title: 'Apollo 13',
          posterPath: '/jokiCLdNS58eJTALfNcerQRhwAo.jpg',
          tmdbId: 568,
          genres:  'Drama',
          overview: 'The true story of technical troubles that scuttle the Apollo 13 lunar mission in 1970, risking the lives of astronaut Jim Lovell and his crew, with the failed journey turning into a thrilling saga of heroism. Drifting more than 200,000 miles from Earth, the astronauts work furiously with the ground crew to avert tragedy.',
          releaseDate: '1995-06-30',
          runtime: 140
        },
        {
          title: 'Fat Girl',
          posterPath: '/thtwUMRaN2cB769CE0NMiAXSE50.jpg',
          tmdbId: 570,
          genres:  'Drama', 
          overview: "Anaïs is twelve and bears the weight of the world on her shoulders. She watches her older sister, Elena, whom she both loves and hates. Elena is fifteen and devilishly beautiful. Neither more futile, nor more stupid than her younger sister, she cannot understand that she is merely an object of desire. And, as such, she can only be taken. Or had. Indeed, this is the subject: a girl's loss of virginity. And, that summer, it opens a door to tragedy.",
          releaseDate: '2001-03-07',
          runtime: 86
        },
        {
          title: 'The Birds',
          posterPath: '/z0iYrJ6GsAMP3abOha7uGMuc5kZ.jpg',
          tmdbId: 571,
          genres:  'Horror', 
          overview: 'Chic socialite Melanie Daniels enjoys a passing flirtation with an eligible attorney in a San Francisco pet shop and, on an impulse, follows him to his hometown bearing a gift of lovebirds. But upon her arrival, the bird population runs amok. Suddenly, the townsfolk face a massive avian onslaught, with the feathered fiends inexplicably attacking people all over Bodega Bay.',
          releaseDate: '1963-03-28',
          runtime: 119
        },
        {
          title: 'Next Door',
          posterPath: '/xqS5Y8f6EQy9i9YFuPuTlPRopV4.jpg',
          tmdbId: 572,
          genres: 
            'Horror',
          
          overview: 'After Ingrid leaves John, he allows himself to be pulled into a mystical and scary world where it is impossible to separate truth from lies.',
          releaseDate: '2005-03-10',
          runtime: 75
        },
        {
          title: 'Frenzy',
          posterPath: '/4SFvqrlSigAt9tnhXFSMyKeJWQk.jpg',
          tmdbId: 573,
          genres:  'Crime',
          overview: "After a serial killer strangles several women with a necktie, London police identify a suspect—but he's the wrong man.",
          releaseDate: '1972-04-14',
          runtime: 116
        },
        {
          title: 'The Man Who Knew Too Much',
          posterPath: '/gy8YBRjCQRIT9x9G9F5fpnFD4xw.jpg',
          tmdbId: 574,
          genres: 
            'Crime',
          
          overview: 'A widescreen, Technicolor remake by Hitchcock of his 1934 film of the same title. A couple vacationing in Morocco with their young son accidentally stumble upon an assassination plot. When the child is kidnapped to ensure their silence, they have to take matters into their own hands to save him.',
          releaseDate: '1956-05-16',
          runtime: 120
        },
        {
          title: 'The Experiment',
          posterPath: '/zhXDiq09JoWIXoLehK2F6ECzwks.jpg',
          tmdbId: 575,
          genres:  'Drama',
          overview: 'Das Experiment is a shocking psycho thriller about the potential for brutality that humans hide. Even more shocking is the fact that it’s based on an actual occurrence — a 1971 psychological experiment at Stanford University that was aborted prematurely when the experimenters lost control.',
          releaseDate: '2001-03-07',
          runtime: 114
        },
        {
          title: 'The Wild Bunch',
          posterPath: '/zZhp7p8qvfVrSLKpOFHcKjpEj8f.jpg',
          tmdbId: 576,
          genres:  'Adventure',
          overview: 'Aging outlaw, Pike Bishop prepares to retire after one final robbery. Joined by his gang, Dutch Engstrom and brothers Lyle and Tector Gorch, Bishop discovers the heist is a setup orchestrated in part by a former partner, Deke Thornton. As the remaining gang takes refuge in Mexican territory, Thornton trails them—resulting in fierce gunfights with plenty of casualties.',
          releaseDate: '1969-06-17',
          runtime: 145
        },
        {
          title: 'To Die For',
          posterPath: '/c3ZBLDzc3OvZoUResg2UN79gnYa.jpg',
          tmdbId: 577,
          genres: 
            'Drama',
          
          overview: 'Suzanne Stone wants to be a world-famous news anchor and she is willing to do anything to get what she wants. What she lacks in intelligence, she makes up for in cold determination and diabolical wiles. As she pursues her goal with relentless focus, she is forced to destroy anything and anyone that may stand in her way, regardless of the ultimate cost or means necessary.',
          releaseDate: '1995-09-22',
          runtime: 106
        },
        {
          title: 'Jaws',
          posterPath: '/s2xcqSFfT6F7ZXHxowjxfG0yisT.jpg',
          tmdbId: 578,
          genres: 
            'Horror',
          
          overview: 'When an insatiable great white shark terrorizes the townspeople of Amity Island, the police chief, an oceanographer and a grizzled shark hunter seek to destroy the blood-thirsty beast.',
          releaseDate: '1975-06-18',
          runtime: 124
        },
        {
          title: 'Jaws 2',
          posterPath: '/cN3ijEwsn4kBaRuHfcJpAQJbeWe.jpg',
          tmdbId: 579,
          genres:  'Horror',
          overview: 'Police chief Brody must protect the citizens of Amity after a second monstrous shark begins terrorizing the waters.',
          releaseDate: '1978-06-16',
          runtime: 116
        },
        {
          title: 'Jaws: The Revenge',
          posterPath: '/kGiaOztahZV2x7bil7sbk7fb6ob.jpg',
          tmdbId: 580,
          genres:  'Adventure',
          overview: "After another deadly shark attack, Ellen Brody decides she has had enough of New England's Amity Island and moves to the Caribbean to join her son, Michael, and his family. But a great white shark has followed her there, hungry for more lives.",
          releaseDate: '1987-07-17',
          runtime: 89
        },
        {
          title: 'Dances with Wolves',
          posterPath: '/cvaBVpS0GzKqBd63pFT8f1E8OKv.jpg',
          tmdbId: 581,
          genres: 
            'Adventure',
          
          overview: "Wounded Civil War soldier, John Dunbar tries to commit suicide—and becomes a hero instead. As a reward, he's assigned to his dream post, a remote junction on the Western frontier, and soon makes unlikely friends with the local Sioux tribe.",
          releaseDate: '1990-03-30',
          runtime: 181
        },
        {
          title: 'The Lives of Others',
          posterPath: '/5BCyeLJHPcRwhu0YaRqUzw00JJ4.jpg',
          tmdbId: 582,
          genres:  'Drama',
          overview: 'A tragic love story set in East Berlin with the backdrop of an undercover Stasi controlled culture. Stasi captain Wieler is ordered to follow author Dreyman and plunges deeper and deeper into his life until he reaches the threshold of doubting the system.',
          releaseDate: '2006-03-15',
          runtime: 137
        },
        {
          title: 'Life of Brian',
          posterPath: '/lSSA64WF0M0BXnjwr2quMh6shCl.jpg',
          tmdbId: 583,
          genres:  'Comedy', 
          overview: "Brian Cohen is an average young Jewish man, but through a series of ridiculous events, he gains a reputation as the Messiah. When he's not dodging his followers or being scolded by his shrill mother, the hapless Brian has to contend with the pompous Pontius Pilate and acronym-obsessed members of a separatist movement. Rife with Monty Python's signature absurdity, the tale finds Brian's life paralleling Biblical lore, albeit with many more laughs.",
          releaseDate: '1979-08-17',
          runtime: 94
        },
        {
          title: '2 Fast 2 Furious',
          posterPath: '/osgUUpwst1TEaSDTBrrTE6KuCbW.jpg',
          tmdbId: 584,
          genres: 
            'Action',
          
          overview: `It's a major double-cross when former police officer Brian O'Conner teams up with his ex-con buddy Roman Pearce to transport a shipment of "dirty" money for shady Miami-based import-export dealer Carter Verone. But the guys are actually working with undercover agent Monica Fuentes to bring Verone down.`,
          releaseDate: '2003-06-05',
          runtime: 107
        },
        {
          title: 'Monsters, Inc.',
          posterPath: '/sgheSKxZkttIe8ONsf2sWXPgip3.jpg',
          tmdbId: 585,
          genres: 
            'Animation',
          
          overview: "James Sullivan and Mike Wazowski are monsters, they earn their living scaring children and are the best in the business... even though they're more afraid of the children than they are of them. When a child accidentally enters their world, James and Mike suddenly find that kids are not to be afraid of and they uncover a conspiracy that could threaten all children across the world.",
          releaseDate: '2001-11-01',
          runtime: 92
        },
        {
          title: 'Wag the Dog',
          posterPath: '/kAwOj7t8ZeaniTFtLWVSKO79JxX.jpg',
          tmdbId: 586,
          genres:  'Comedy',
          overview: "During the final weeks of a presidential race, the President is accused of sexual misconduct. To distract the public until the election, the President's adviser hires a Hollywood producer to help him stage a fake war.",
          releaseDate: '1997-12-25',
          runtime: 97
        },
        {
          title: 'Big Fish',
          posterPath: '/tjK063yCgaBAluVU72rZ6PKPH2l.jpg',
          tmdbId: 587,
          genres: 
            'Adventure',
          
          overview: 'Throughout his life Edward Bloom has always been a man of big appetites, enormous passions and tall tales. In his later years, he remains a huge mystery to his son, William. Now, to get to know the real man, Will begins piecing together a true picture of his father from flashbacks of his amazing adventures.',
          releaseDate: '2003-12-25',
          runtime: 125
        },
        {
          title: 'Silent Hill',
          posterPath: '/bQkXL0cSlPviaQhxM090knCc5kS.jpg',
          tmdbId: 588,
          genres:  'Horror',
          overview: "In search for answers, a mother travels to the enigmatic town of Silent Hill when her daughter begins to suffer recurring nightmares related to the place. It doesn't take long for her to discover its home to beings as equally haunting as the town itself.",
          releaseDate: '2006-04-21',
          runtime: 125
        },
        {
          title: 'The Hours',
          posterPath: '/bNxCndh11o28oJGgm85nkt1bmQV.jpg',
          tmdbId: 590,
          genres:  'Drama', 
          overview: '"The Hours" is the story of three women searching for more potent, meaningful lives. Each is alive at a different time and place, all are linked by their yearnings and their fears. Their stories intertwine, and finally come together in a surprising, transcendent moment of shared recognition.',
          releaseDate: '2002-12-27',
          runtime: 114
        },
        {
          title: 'The Da Vinci Code',
          posterPath: '/6jexEWBXepwB1ZLpCEllI04Agrb.jpg',
          tmdbId: 591,
          genres:  'Thriller',
          overview: 'A murder in Paris’ Louvre Museum and cryptic clues in some of Leonardo da Vinci’s most famous paintings lead to the discovery of a religious mystery. For 2,000 years a secret society closely guards information that — should it come to light — could rock the very foundations of Christianity.',
          releaseDate: '2006-05-17',
          runtime: 149
        },
        {
          title: 'The Conversation',
          posterPath: '/dhgW1uGaRj8vIgq54VnCP96X7Sv.jpg',
          tmdbId: 592,
          genres: 
            'Crime',
          
          overview: "Surveillance expert Harry Caul is hired by a mysterious client's brusque aide to tail a young couple. Tracking the pair through San Francisco's Union Square, Caul and his associate Stan manage to record a cryptic conversation between them. Tormented by memories of a previous case that ended badly, Caul becomes obsessed with the resulting tape, trying to determine if the couple are in danger.",
          releaseDate: '1974-04-07',
          runtime: 113
        },
        {
          title: 'Solaris',
          posterPath: '/4bacwb3B2zy8w3eoWfceAmo0V9O.jpg',
          tmdbId: 593,
          genres: 
            'Drama',
          
          overview: 'A psychologist is sent to a space station orbiting a planet called Solaris to investigate the death of a doctor and the mental problems of cosmonauts on the station. He soon discovers that the water on the planet is a type of brain which brings out repressed memories and obsessions.',
          releaseDate: '1972-03-20',
          runtime: 167
        },
        {
          title: 'The Terminal',
          posterPath: '/vRYbjHs129MARMq1VDbnk9Jboen.jpg',
          tmdbId: 594,
          genres:  'Comedy',
          overview: "Viktor Navorski is a man without a country; his plane took off just as a coup d'etat exploded in his homeland, leaving it in shambles, and now he's stranded at Kennedy Airport, where he's holding a passport that nobody recognizes. While quarantined in the transit lounge until authorities can figure out what to do with him, Viktor simply goes on living – and courts romance with a beautiful flight attendant.",
          releaseDate: '2004-06-17',
          runtime: 128
        },
        {
          title: 'To Kill a Mockingbird',
          posterPath: '/1lJzbNX1bfZTNu4NlGmPQ3jafXJ.jpg',
          tmdbId: 595,
          genres:  'Drama',
          overview: 'Scout Finch, 6, and her older brother Jem live in sleepy Maycomb, Alabama, spending much of their time with their friend Dill and spying on their reclusive and mysterious neighbor, Boo Radley. When Atticus, their widowed father and a respected lawyer, defends a black man named Tom Robinson against fabricated rape charges, the trial and tangent events expose the children to evils of racism and stereotyping.',
          releaseDate: '1962-12-25',
          runtime: 129
        },
        {
          title: 'The Grapes of Wrath',
          posterPath: '/jRbRDNi9MgvhRc68PSQPMqnG24x.jpg',
          tmdbId: 596,
          genres:  'Drama', 
          overview: 'Tom Joad returns to his home after a jail sentence to find his family kicked out of their farm due to foreclosure. He catches up with them on his Uncle’s farm, and joins them the next day as they head for California and a new life... Hopefully.',
          releaseDate: '1940-03-15',
          runtime: 129
        },
        {
          title: 'Titanic',
          posterPath: '/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg',
          tmdbId: 597,
          genres:  'Drama',
          overview: "101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi win third-class tickets aboard the ship. Rose tells the whole story from Titanic's departure through to its death—on its first and last voyage—on April 15, 1912.",
          releaseDate: '1997-11-18',
          runtime: 194
        },
        {
          title: 'City of God',
          posterPath: '/k7eYdWvhYQyRQoU2TB2A2Xu2TfD.jpg',
          tmdbId: 598,
          genres:  'Drama',
          overview: 'Buscapé was raised in a very violent environment. Despite the feeling that all odds were against him, he finds out that life can be seen with other eyes...',
          releaseDate: '2002-02-05',
          runtime: 130
        },
        {
          title: 'Sunset Boulevard',
          posterPath: '/zt8aQ6ksqK6p1AopC5zVTDS9pKT.jpg',
          tmdbId: 599,
          genres:  'Drama', 
          overview: 'A hack screenwriter writes a screenplay for a former silent film star who has faded into Hollywood obscurity.',
          releaseDate: '1950-08-10',
          runtime: 110
        },
        
        
      ], {});
   
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('Movies', null, {});
 
  }
};
