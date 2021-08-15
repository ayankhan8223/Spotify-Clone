// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint="https://accounts.spotify.com/authorize"
export const redirectUri="https://spotify-25b9a.firebaseapp.com/";
export const clientId="b364614348284bc89ca8af1140e9b734";

const scopes=[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-top-read",
    "user-modify-playback-state"
];
export const getTokenFromUrl = () =>{
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial,item)=>{
        var parts = item.split("=");
        initial[parts[0]]=decodeURIComponent(parts[1])
        return initial;
    }, {});
}

export const loginUrl =`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;