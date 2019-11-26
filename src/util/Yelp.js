const apiKey = "CUxSlJ4PdrMPBwjlcc9P885gAgWS5krjpwudW4QAYxflu9loLRKN1V3KxTwJx9Igv-TnbYSgs27RRZwoV1UtHZX43QpTtGMKesfHj_jhSMt_KBoa73yqun1GZ2PdXXYx";

const Yelp = {
    searchYelp(term,location,sortBy) {
        return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, )
    }
}
