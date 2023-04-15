1. Requirements:
    1. Feature:

        Header
            -hamberger icon
            -logo
            -search bar
            -user Icon
        Body
            -sidebar ==> It should be collapseble
            -main content
                -video catagory button list
                -video container
                    -video card  ==> If we click on the video card then it should be redirect in /watch page. Where the particular video will start stream


        **Need to use youtube API.
        **should use shimmar effect.

    2. Tech stack:
            --> Tailwind css for style our app
            --> Webpack bundler.
            --> react-router-dom for routing
            --> redux for manage our store.
            -->

2. Planning:

        Header
            -hamberger icon
            -logo
            -search bar
            -user Icon

        Body
            -sidebar
            -main content
                -video catagory button list
                    -button
                -video container
                    -video card


------------------------------------------------------------------------------------------------------------------------------------------------

To DO:
1. set up redux store ==> 15 mnt | 1 hour (done)
2. set toggle functionality ==> 15 mnt | 1 hour (done)
3. fetch you-tube videos through youtube API ==> 1 hour | 3+
4. set up routing for /watch page. ==> 15 mnt

https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[YOUR_API_KEY]


//.env

REACT_APP_API_KEY=AIzaSyB-bMtFf8Pm8U4W4_oSooV5Vrr6gVNT0cM

#API URI
REACT_APP_FETCH_POPULAR_VIDEO_DATA_API_URL=https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=
REACT_APP_FETCH_CHANNEL_INFO_API_URL=https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${REACT_APP_API_KEY}&id=
REACT_APP_FETCH_GOOGLE_SUGGEST_QUERY=https://suggestqueries.google.com/complete/search?output=toolbar&hl=en&q=

REACT_APP_VIDEO_SEARCH_API=https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyB-bMtFf8Pm8U4W4_oSooV5Vrr6gVNT0cM&q=happy