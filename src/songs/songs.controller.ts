import { Controller, Get } from "@nestjs/common";

@Controller("songs")
export class SongsController {
    @Get()
    getAllSongs() {
        return [
            {
                id: 1,
                title: "Song 1",
                artist: "Artist 1",
            },
            {
                id: 2,
                title: "Song 2",
                artist: "Artist 2",
            },
        ];
    }
}
