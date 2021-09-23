function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true,
        },
        002: {
            artist: "Kontra",
            title: "Na Svoj Nacin",
            release_year: 2020,
            id: 9643,
            formats: {
                1: "MP3",
                2: "SDA",
                3: "SDP"
            }
        }

    };
    return myMusic;
}
myFunction()[2];
module.exports = myFunction;