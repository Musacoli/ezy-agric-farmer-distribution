
// get GeoJSON for Ugandan Map from HighCharts
fetch("https://code.highcharts.com/mapdata/countries/ug/ug-all.geo.json")
    .then( (response) => response.json())
    .then((mapData)=> {
        //data for districts
        const districts = mapData.features

        // get map distribution data from our api
        fetch("http://127.0.0.1:5000/api/v1/farmers/distribution")
            .then((res) => res.json())
            .then((data)=> {

                const distributionData = data.distribution

                // final formated array for map data e.g [['hc-key', 'value']]
                let result = []

                // run through each distribution point and assign it to the 
                distributionData.forEach((item) => {

                    // find the matching feature data for each district entry
                    const districtFeatures = districts.find((district) => district.properties.name === item.district)

                    // if a match is found add its formatted data to the result
                    if (districtFeatures) {
                        result.push([districtFeatures.properties['hc-key'], item.number])
                    }
                })

                 // Create the chart
                Highcharts.mapChart('container', {
                    chart: {
                        map: 'countries/ug/ug-all'
                    },
                
                    title: {
                        text: 'EzyAgric Farmer Distribution per District (Uganda)'
                    },
                
                    subtitle: {
                        text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/ug/ug-all.js">Uganda</a>'
                    },
                
                    mapNavigation: {
                        enabled: true,
                        buttonOptions: {
                            verticalAlign: 'bottom'
                        }
                    },
                
                    colorAxis: {
                        min: 0
                    },
                
                    series: [{
                        data: result,
                        name: 'Number of Farmers in District',
                        states: {
                            hover: {
                                color: '#00FF00'
                            }
                        },
                        dataLabels: {
                            enabled: true,
                            format: '{point.name}'
                        }
                    }]
                });

            })
            .catch( (error) => console.log(error))
    })
    .catch( (error) => console.log(error))