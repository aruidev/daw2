type Playlist = {
    songs: Set<string>;
};

const playlists = new Map<string, Playlist>();

function createPlaylist(name: string): void {
    playlists.set(name, { songs: new Set<string>() });
}

function deletePlaylist(name: string): void {
    playlists.delete(name);
}

function addSongToPlaylist(playlistName: string, song: string): void {
    const playlist = playlists.get(playlistName);
    if (playlist) {
        playlist.songs.add(song);
    }
}

function removeSongFromPlaylist(playlistName: string, song: string): void {
    const playlist = playlists.get(playlistName);
    if (playlist) {
        playlist.songs.delete(song);
    }
}

function getSongsFromPlaylist(playlistName: string): Set<string> | undefined {
    const playlist = playlists.get(playlistName);
    return playlist ? playlist.songs : undefined;
}

function logPlaylists(): void {
    for (const [name, playlist] of playlists) {
        console.log("Playlist:", name, "Songs:", Array.from(playlist.songs));
    }
    console.log("---");
    // Alternativa amb forEach
    // playlists.forEach((playlist, name) => {
    //     console.log("Playlist:", name, "Songs:", Array.from(playlist.songs));
    // });
}

createPlaylist("Rock");
addSongToPlaylist("Rock", "Song 1");
addSongToPlaylist("Rock", "Song 2");
console.log(getSongsFromPlaylist("Rock"));

logPlaylists();

removeSongFromPlaylist("Rock", "Song 1");
console.log(getSongsFromPlaylist("Rock"));
deletePlaylist("Rock");
console.log(getSongsFromPlaylist("Rock"));