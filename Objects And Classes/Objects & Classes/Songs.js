function solve(array) {
    class Song {
        constructor (typeList, name, time) {
            this.typeList = typeList,
            this.name = name,
            this.time = time
        }
    }

    const type = array[array.length - 1];
    const songs = [];
    for (let i = 1; i <= array[0]; i++) {
        const songInfo = array[i].split('_');
        let song = new Song(songInfo[0], songInfo[1], songInfo[2]);
        songs.push(song);
    }

    if (type === 'all') {
        for (let curr of songs) {
            console.log(curr.name);
        }
    } else {
        for (let curr of songs) {
            if (curr.typeList === type) {
                console.log(curr.name);
            }
        }
    }
}

solve([4, 'favourite_DownTown_3:14', 'listenLater_Andalouse_3:24', 'favourite_In To The Night_3:58', 'favourite_Live It Up_3:48', 'listenLater']);