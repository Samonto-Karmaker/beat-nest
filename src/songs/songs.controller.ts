import { Controller, Get } from "@nestjs/common";
import { SongsService } from "./songs.service";

@Controller("songs")
export class SongsController {
    constructor(private songsService: SongsService) {}
    @Get()
    getAllSongs() {
        return this.songsService.getAllSongs();
    }
}
