import { Body, Controller, Get, Post } from "@nestjs/common";
import { SongsService } from "./songs.service";
import { CreateSongDto } from "./dto/create_song_dto";

@Controller("songs")
export class SongsController {
    constructor(private songsService: SongsService) {}
    @Get()
    getAllSongs() {
        return this.songsService.getAllSongs();
    }
    @Post()
    createSong(@Body() song: CreateSongDto) {
        return this.songsService.createSong(song);
    }
}
