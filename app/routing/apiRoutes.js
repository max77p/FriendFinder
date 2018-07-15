var path = require("path");


var tableData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(tableData)
        // console.log(tableData);
        var score;
    });

    app.post("/api/friends", function (req, res) {
        //    console.log(tableData[0].json);
        var mainUser = req.body.scores;
        // console.log(mainUser);
        tableData.push(req.body);
        // res.json(true);
        var totalDiff = 0;
        var tempDiff=[];
        var checkDiff=[];
        // console.log(x);
        Object.keys(tableData).forEach(x => {
            console.log(x);
            if (tableData[x] !== req.body) {
                console.log(tableData[x]);
                for (var i = 0; i < 10; i++) {
                    totalDiff += mainUser[i] - tableData[x].scores[i];
                    // console.log(totalDiff);
                }
                console.log("ikdx is "+x);
                tempDiff.push({'idx':x,'value':Math.abs(totalDiff)});
                console.log(tempDiff);
                console.log(tableData.length-1);
                console.log(tempDiff.length);
            }
            totalDiff=0;//reset this so itiration does not accumulate
        });
       
            for(ele in tempDiff){
                console.log(tempDiff[ele]);
                checkDiff.push(tempDiff[ele].value);
            }
            var lowest=Math.min(...checkDiff);
            console.log(lowest);
            var findidx=tempDiff.map(obj => obj.value).indexOf(lowest);
            console.log(findidx);
            //pass idx to object and get the user data and pass it to html
            res.json(tableData[findidx]);
    });



};