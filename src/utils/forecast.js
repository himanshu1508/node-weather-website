const request = require('request')
const http = require('http')

const forecast =(lang,lati,callback) =>{

    const url = 'http://api.weatherstack.com/current?access_key=72dabf98b6b54a96670e61da98c56530&query=' + encodeURIComponent(lang) + ',' + encodeURIComponent(lati) 
    
    request({ url:url, json:true}, (error,{body}) =>{
        if(error){
            callback('Unable to connect to weather service!')
        }else if(body.error){
            callback('Unable to find location')
        }else{
            callback(undefined,'Current Temprature : '+
                body.current.temperature+
                 '   ||' + ' Feels like : '+ 
                body.current.feelslike + '   ||'+ ' Weather description : '+
                body.current.weather_descriptions+ ' ||' + ' Wind Speed : ' +
                body.current.wind_speed+'   ||'+ ' Humidity : '+
                body.current.humidity+'   ||'+' Local Time : '+
                body.location.localtime+ '   ||' + ' Day? : '+
                body.current.is_day
                )
           }
    
      })
    }
    module .exports = forecast