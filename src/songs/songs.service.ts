import { Injectable } from "@nestjs/common";
import { CreateSongDto } from "./dto/create_song_dto";

@Injectable()
export class SongsService {
    private songs: CreateSongDto[] = [];

    getAllSongs() {
        return this.songs;
    }

    createSong(song: CreateSongDto) {
        this.songs.push(song);
        return song;
    }
}
