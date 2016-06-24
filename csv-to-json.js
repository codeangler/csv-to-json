fs = require('fs')

fs.readFile(process.argv[2], 'utf8', function(err, csv){
        
        // split .csv at linebreaks
        var lines  = csv.split('\r\n')

        // create variables to store results Array
        var results = []
        var headers = lines[0].split(',')

        // loop through each value of lines 
        for(var i = 1; i < lines.length; i++){
            var obj = {}  // create obj to push results into
            var currentLine = lines[i].split(',')// split current line at each word

            // At each item of headers array, loop and assign it value form current line value
            for (var j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentLine[j]
            }
            results.push(obj)// 
        }

        var raphel = JSON.stringify(results)// JSON.stringify returns a value an.
        
        console.log('this is results', typeof(raphel))
        fs.writeFile(process.argv[3], raphel, (err) => {
            if (err) {throw err}
                console.log('it\'s saved')
        })
    
})
