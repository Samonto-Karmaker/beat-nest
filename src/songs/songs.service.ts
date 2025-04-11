import { Injectable } from "@nestjs/common";

@Injectable()
export class SongsService {
    private songs = [
        {
            id: 1,
            title: "Song 1",
            artist: "Artist 1",
            album: "Album 1",
        },
        {
            id: 2,
            title: "Song 2",
            artist: "Artist 2",
            album: "Album 2",
        },
    ];

    getAllSongs() {
        return this.songs;
    }
}
