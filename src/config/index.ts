export const API = process.env.REACT_APP_API;

const CONSTANTS = {
    Routes:{
        Labels:{
        Home:'Home',
        Favourites: 'Favourites'
       },
       Paths:{
        Home:'/',
        Favourites: '/favourites',
        NoPathMatch:'*'
       }
    },
    GUITexts:{
        ErrorCode: 404,
        NotFound:'Page not found',
        NotFoundMsg:"We haven't found what you've been looking for",
        Opps: 'Oops!',
        SomethingWentWrong:'Something went wrong...',
        NoFavourites: 'No favourites added...',
        AppTitle:'Movie Explorer',
        NoMovieFound:'No movie found',
        Back: 'Back',
        Year: 'Year:',
        Ratings: 'Ratings:',
        Released: 'Released:',
        Genre: 'Genre:',
        Writer:'Writer:',
        Cast:'Cast:',
        Awards: 'Awards',
        Director:'Director:',
        Plot:'Plot:',
        Language:'Language:',
        Runtime:'Runtime:',
        RemoveFromFavouites:'Remove from Favourites',
        AddToFavourites:'Add to Favourites',
        MovieAddedToFavourites:'Movie added to favourites!',
        MovieRemovedFromFavourites:'Movie removed from favourites!',
        StartExploringMovies:'Start exploring movies...',
        YouAreOffline:'You are offline',
        AppNeedsInternet:'App needs internet to start working',
        SearchBoxPlaceHolder:'Type movie name here...',
    },
};

export const {Routes, GUITexts} = CONSTANTS