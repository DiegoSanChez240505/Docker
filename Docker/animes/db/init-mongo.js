db = db.getSiblingDB('anime_db');
db.animes.insertMany([
    {
        name: "Komi san no puede comunicarse",
        year: "2016",
        genre: "Romance",
        studio: "TV Man Union",
        ongoing: false,
        seasons:[{ season: 1, episodes: 12 }, { season: 2, episodes: 12 }],
        image: "komi.jpg"

    },
    {
        name: "Ishuzoku Reviewers",
        year: "2020",
        genre: "Fantasy",
        studio: "Passione",
        ongoing: false,
        seasons:[{ season: 1, episodes: 12}],
        image:"ishuzoku.jpg"

    },
    {
        name: "Overflow",
        year: "2020",
        genre: "Romance",
        studio: "Hōkiboshi",
        ongoing: false,
        seasons:[{ season: 1, episodes: 5}],
        image:"overflow.jpg"

    },
    {
        name: "Naruto",
        year: 2002,
        genre: "Action",
        studio: "Pierrot",
        ongoing: false,
        seasons: [{ season: 1, episodes: 220 }],
        image: "naruto.jpg"
    },
    {
        name: "One Piece",
        year: 1999,
        genre: "Adventure",
        studio: "Toei Animation",
        ongoing: true,
        seasons: [{ season: 1, episodes: 61 }, { season: 2, episodes: 16 }],
        image: "one.jpg"
    },
    {
        name: "Attack on Titan",
        year: 2013,
        genre: "Action",
        studio: "Wit Studio",
        ongoing: true,
        seasons: [
            { season: 1, episodes: 25 },
            { season: 2, episodes: 12 },
            { season: 3, episodes: 22 },
            { season: 4, episodes: 28 }
        ],
        image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg"
    },
    {
        name: "My Hero Academia",
        year: 2016,
        genre: "Action",
        studio: "Bones",
        ongoing: true,
        seasons: [
            { season: 1, episodes: 13 },
            { season: 2, episodes: 25 },
            { season: 3, episodes: 25 },
            { season: 4, episodes: 25 },
            { season: 5, episodes: 25 }
        ],
        image: "https://cdn.myanimelist.net/images/anime/10/78745.jpg"
    },
    {
        name: "Demon Slayer",
        year: 2019,
        genre: "Action",
        studio: "ufotable",
        ongoing: true,
        seasons: [
            { season: 1, episodes: 26 },
            { season: 2, episodes: 18 }
        ],
        image: "demonslayer.jpg"
    },
    {
        name: "Fullmetal Alchemist: Brotherhood",
        year: 2009,
        genre: "Adventure",
        studio: "Bones",
        ongoing: false,
        seasons: [{ season: 1, episodes: 64 }],
        image: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg"
    },
    {
        name: "Death Note",
        year: 2006,
        genre: "Mystery",
        studio: "Madhouse",
        ongoing: false,
        seasons: [{ season: 1, episodes: 37 }],
        image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg"
    },
    {
        name: "Sword Art Online",
        year: 2012,
        genre: "Fantasy",
        studio: "A-1 Pictures",
        ongoing: true,
        seasons: [
            { season: 1, episodes: 25 },
            { season: 2, episodes: 24 },
            { season: 3, episodes: 47 }
        ],
        image: "https://cdn.myanimelist.net/images/anime/11/39717.jpg"
    },
    {
        name: "Tokyo Ghoul",
        year: 2014,
        genre: "Horror",
        studio: "Pierrot",
        ongoing: false,
        seasons: [
            { season: 1, episodes: 12 },
            { season: 2, episodes: 12 },
            { season: 3, episodes: 24 }
        ],
        image: "https://cdn.myanimelist.net/images/anime/5/64449.jpg"
    },
    {
        name: "Hunter x Hunter",
        year: 2011,
        genre: "Adventure",
        studio: "Madhouse",
        ongoing: false,
        seasons: [{ season: 1, episodes: 148 }],
        image: "hunter.jpg"
    },
    {
        name: "Fairy Tail",
        year: 2009,
        genre: "Adventure",
        studio: "A-1 Pictures",
        ongoing: false,
        seasons: [
            { season: 1, episodes: 175 },
            { season: 2, episodes: 102 },
            { season: 3, episodes: 51 }
        ],
        image: "https://cdn.myanimelist.net/images/anime/5/18179.jpg"
    },
    {
        name: "Bleach",
        year: 2004,
        genre: "Action",
        studio: "Pierrot",
        ongoing: false,
        seasons: [{ season: 1, episodes: 366 }],
        image: "https://cdn.myanimelist.net/images/anime/3/40451.jpg"
    },
    {
        name: "Steins;Gate",
        year: 2011,
        genre: "Sci-Fi",
        studio: "White Fox",
        ongoing: false,
        seasons: [{ season: 1, episodes: 24 }],
        image: "https://cdn.myanimelist.net/images/anime/5/73199.jpg"
    },
    {
        name: "Re:Zero - Starting Life in Another World",
        year: 2016,
        genre: "Fantasy",
        studio: "White Fox",
        ongoing: true,
        seasons: [
            { season: 1, episodes: 25 },
            { season: 2, episodes: 25 }
        ],
        image: "https://cdn.myanimelist.net/images/anime/11/79410.jpg"
    },
    {
        name: "Dragon Ball Z",
        year: 1989,
        genre: "Action",
        studio: "Toei Animation",
        ongoing: false,
        seasons: [{ season: 1, episodes: 291 }],
        image: "https://cdn.myanimelist.net/images/anime/6/20936.jpg"
    },
    {
        name: "Black Clover",
        year: 2017,
        genre: "Action",
        studio: "Pierrot",
        ongoing: true,
        seasons: [
            { season: 1, episodes: 51 },
            { season: 2, episodes: 51 },
            { season: 3, episodes: 52 },
            { season: 4, episodes: 16 }
        ],
        image: "https://cdn.myanimelist.net/images/anime/2/88336.jpg"
    },
    {
        name: "Sword Art Online: Alicization",
        year: 2018,
        genre: "Fantasy",
        studio: "A-1 Pictures",
        ongoing: false,
        seasons: [
            { season: 1, episodes: 24 },
            { season: 2, episodes: 23 },
            { season: 3, episodes: 11 }
        ],
        image: "saoA.jpg"
    },
    {
        name: "The Rising of the Shield Hero",
        year: 2019,
        genre: "Fantasy",
        studio: "Kinema Citrus",
        ongoing: true,
        seasons: [
            { season: 1, episodes: 25 },
            { season: 2, episodes: 13 }
        ],
        image: "heroe.jpg"
    },
    {
        name: "One Punch Man",
        year: 2015,
        genre: "Action",
        studio: "Madhouse",
        ongoing: true,
        seasons: [
            { season: 1, episodes: 12 },
            { season: 2, episodes: 12 }
        ],
        image: "https://cdn.myanimelist.net/images/anime/12/76049.jpg"
    },
    {
        name: "Mob Psycho 100",
        year: 2016,
        genre: "Action",
        studio: "Bones",
        ongoing: true,
        seasons: [
            { season: 1, episodes: 12 },
            { season: 2, episodes: 13 }
        ],
        image: "mob.jpg"
    },
    {
        name: "No Game No Life",
        year: 2014,
        genre: "Fantasy",
        studio: "Madhouse",
        ongoing: false,
        seasons: [{ season: 1, episodes: 12 }],
        image: "no game.jpg"
    },
    {
        name: "Overlord",
        year: 2015,
        genre: "Fantasy",
        studio: "Madhouse",
        ongoing: true,
        seasons: [
            { season: 1, episodes: 13 },
            { season: 2, episodes: 13 },
            { season: 3, episodes: 13 },
            { season: 4, episodes: 13 }
        ],
        image: "over.jpg"
    },
    {
        name: "The Promised Neverland",
        year: 2019,
        genre: "Mystery",
        studio: "CloverWorks",
        ongoing: false,
        seasons: [
            { season: 1, episodes: 12 },
            { season: 2, episodes: 11 }
        ],
        image: "promised.jpg"
    },
    {
        name: "Fruits Basket (2019)",
        year: 2019,
        genre: "Drama",
        studio: "TMS Entertainment",
        ongoing: false,
        seasons: [
            { season: 1, episodes: 25 },
            { season: 2, episodes: 25 },
            { season: 3, episodes: 13 }
        ],
        image: "fruits.jpg"
    },
    {
        name: "Jujutsu Kaisen",
        year: 2020,
        genre: "Action",
        studio: "MAPPA",
        ongoing: true,
        seasons: [
            { season: 1, episodes: 24 },
            { season: 2, episodes: 23 }
        ],
        image: "jutsu.jpg"
    },
    {
        name: "Hunter x Hunter",
        year: 2011,
        genre: "Adventure",
        studio: "Madhouse",
        ongoing: false,
        seasons: [{ season: 1, episodes: 148 }],
        image: "https://cdn.myanimelist.net/images/anime/11/33657.jpg"
    },
    {
        name: "Fairy Tail",
        year: 2009,
        genre: "Adventure",
        studio: "A-1 Pictures",
        ongoing: false,
        seasons: [
            { season: 1, episodes: 175 },
            { season: 2, episodes: 102 },
            { season: 3, episodes: 51 }
        ],
        image: "https://cdn.myanimelist.net/images/anime/5/18179.jpg"
    },
    {
        name: "Bleach",
        year: 2004,
        genre: "Action",
        studio: "Pierrot",
        ongoing: false,
        seasons: [{ season: 1, episodes: 366 }],
        image: "https://cdn.myanimelist.net/images/anime/3/40451.jpg"
    },
    {
        name: "Steins;Gate",
        year: 2011,
        genre: "Sci-Fi",
        studio: "White Fox",
        ongoing: false,
        seasons: [{ season: 1, episodes: 24 }],
        image: "https://cdn.myanimelist.net/images/anime/5/73199.jpg"
    },
    {
        name: "Cowboy Bebop",
        year: 1998,
        genre: "Sci-Fi",
        studio: "Sunrise",
        ongoing: false,
        seasons: [{ season: 1, episodes: 26 }],
        image: "https://cdn.myanimelist.net/images/anime/4/19644.jpg"
    },
    {
        name: "Neon Genesis Evangelion",
        year: 1995,
        genre: "Mecha",
        studio: "Gainax",
        ongoing: false,
        seasons: [{ season: 1, episodes: 26 }],
        image: "neon.jpg"
    },
    {
        name: "Spirited Away",
        year: 2001,
        genre: "Fantasy",
        studio: "Studio Ghibli",
        ongoing: false,
        seasons: [{ season: 1, episodes: 1 }],  // Movie
        image: "https://cdn.myanimelist.net/images/anime/6/79597.jpg"
    },
    {
        name: "Ghost in the Shell",
        year: 1995,
        genre: "Sci-Fi",
        studio: "Production I.G",
        ongoing: false,
        seasons: [{ season: 1, episodes: 1 }],  // Movie
        image: "ghost.jpg"
    },
    {
        name: "Your Name",
        year: 2016,
        genre: "Romance",
        studio: "CoMix Wave Films",
        ongoing: false,
        seasons: [{ season: 1, episodes: 1 }],  // Movie
        image: "https://cdn.myanimelist.net/images/anime/5/87048.jpg"
    },
    {
        name: "Akira",
        year: 1988,
        genre: "Action",
        studio: "Tokyo Movie Shinsha",
        ongoing: false,
        seasons: [{ season: 1, episodes: 1 }],  // Movie
        image: "akira.jpg"
    },
    {
        name: "Gurren Lagann",
        year: 2007,
        genre: "Action",
        studio: "Gainax",
        ongoing: false,
        seasons: [{ season: 1, episodes: 27 }],
        image: "https://cdn.myanimelist.net/images/anime/4/5123.jpg"
    },
    {
        name: "Fate/Zero",
        year: 2011,
        genre: "Action",
        studio: "ufotable",
        ongoing: false,
        seasons: [{ season: 1, episodes: 13 }, { season: 2, episodes: 12 }],
        image: "fate.jpg"
    },
    {
        name: "Code Geass: Lelouch of the Rebellion",
        year: 2006,
        genre: "Mecha",
        studio: "Sunrise",
        ongoing: false,
        seasons: [{ season: 1, episodes: 25 }, { season: 2, episodes: 25 }],
        image: "https://cdn.myanimelist.net/images/anime/4/9391.jpg"
    },
    {
        name: "Clannad: After Story",
        year: 2008,
        genre: "Drama",
        studio: "Kyoto Animation",
        ongoing: false,
        seasons: [{ season: 1, episodes: 24 }],
        image: "https://cdn.myanimelist.net/images/anime/1299/110774.jpg"
    },
    {
        name: "Hellsing",
        year: 2001,
        genre: "Action",
        studio: "Gonzo",
        ongoing: false,
        seasons: [{ season: 1, episodes: 13 }],
        image: "hellsing.jpg"
    },
    {
        name: "Samurai Champloo",
        year: 2004,
        genre: "Adventure",
        studio: "Manglobe",
        ongoing: false,
        seasons: [{ season: 1, episodes: 26 }],
        image: "https://cdn.myanimelist.net/images/anime/10/75815.jpg"
    },
    {
        name: "Violet Evergarden",
        year: 2018,
        genre: "Drama",
        studio: "Kyoto Animation",
        ongoing: false,
        seasons: [{ season: 1, episodes: 13 }],
        image: "https://cdn.myanimelist.net/images/anime/1795/95088.jpg"
    },
    {
        name: "Berserk",
        year: 1997,
        genre: "Action",
        studio: "OLM",
        ongoing: false,
        seasons: [{ season: 1, episodes: 25 }],
        image: "berserk.jpg"
    },
    {
        name: "Naruto: Shippuden",
        year: 2007,
        genre: "Action",
        studio: "Pierrot",
        ongoing: false,
        seasons: [{ season: 1, episodes: 500 }],
        image: "https://cdn.myanimelist.net/images/anime/5/17407.jpg"
    },
    {
        name: "K-On!",
        year: 2009,
        genre: "Music",
        studio: "Kyoto Animation",
        ongoing: false,
        seasons: [{ season: 1, episodes: 13 }, { season: 2, episodes: 26 }],
        image: "k-on.jpg"
    },
    {
        name: "The Melancholy of Haruhi Suzumiya",
        year: 2006,
        genre: "Comedy",
        studio: "Kyoto Animation",
        ongoing: false,
        seasons: [{ season: 1, episodes: 14 }, { season: 2, episodes: 14 }],
        image: "https://cdn.myanimelist.net/images/anime/4/50361.jpg"
    },
    {
        name: "Monster",
        year: 2004,
        genre: "Thriller",
        studio: "Madhouse",
        ongoing: false,
        seasons: [{ season: 1, episodes: 74 }],
        image: "https://cdn.myanimelist.net/images/anime/2/15227.jpg"
    },
    {
        name: "Toradora!",
        year: 2008,
        genre: "Romance",
        studio: "J.C.Staff",
        ongoing: false,
        seasons: [{ season: 1, episodes: 25 }],
        image: "https://cdn.myanimelist.net/images/anime/13/22128.jpg"
    },
    {
        name: "Psycho-Pass",
        year: 2012,
        genre: "Sci-Fi",
        studio: "Production I.G",
        ongoing: true,
        seasons: [
            { season: 1, episodes: 22 },
            { season: 2, episodes: 11 },
            { season: 3, episodes: 8 }
        ],
        image: "https://cdn.myanimelist.net/images/anime/5/43399.jpg"
    },
    {
        name: "Kill la Kill",
        year: 2013,
        genre: "Action",
        studio: "Trigger",
        ongoing: false,
        seasons: [{ season: 1, episodes: 24 }],
        image: "https://cdn.myanimelist.net/images/anime/5/50331.jpg"
    }
]);
