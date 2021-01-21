const request = require("request")


const geocode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)  + '.json?access_token=pk.eyJ1IjoiaGltYW5zaHUxNTA4IiwiYSI6ImNram9hZm8wMDB6emMydGw5ZnhmNnhvdmQifQ.J7r4wfpRW_ygj0YrAqqYig'
    request({url:url ,json:true},(error,{body}) => {
        if(error){
            callback('Unable to connect to location services!' , undefined)
        }else if(body.features.length === 0){
            callback('Unable to find location ',undefined)
        }else{
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location :body.features[0].place_name,
                city :body.features[0].text
            })
        }
    })

}

module.exports = geocode