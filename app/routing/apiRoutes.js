var path = require("path");


var tableData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(tableData)
        // console.log(tableData);
        var score;
    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body);
        if(req.body==undefined|null){
            console.log("nope");
            return;
        }
        var mainUser = req.body.scores;
        // console.log(mainUser);
        tableData.push(req.body);
        // res.json(true);
        var totalDiff = 0;
        var tempDiff=[];
        var checkDiff=[];
        // console.log(x);
        // for(ele in tableData){
        //     console.log(ele);
        //     // console.log(tableData[ele]);
        //     if (tableData[ele] !== req.body) {
        //         console.log(tableData[ele]);
        //         for (var i = 0; i < 10; i++) {
        //             totalDiff += mainUser[i] - tableData[ele].scores[i];
        //             // console.log(totalDiff);
        //         }
        //         console.log("ikdx is "+ele);
        //         tempDiff.push({'idx':ele,'value':Math.abs(totalDiff)});
        //         // console.log(tempDiff);
        //         // console.log(tableData.length-1);
        //         // console.log(tempDiff.length);
        //     }
        // }

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
                totalDiff=0;
                console.log(tempDiff);
                // console.log(tableData.length-1);
                // console.log(tempDiff.length);
            }
        });
       
            for(ele in tempDiff){
                // console.log(tempDiff[ele]);
                checkDiff.push(tempDiff[ele].value);
            }
            var lowest=Math.min(...checkDiff);
            console.log(lowest);
            var findidx=tempDiff.map(obj => obj.value).indexOf(lowest);
            console.log(findidx);
            // tempDiff=[];
            // checkDiff=[];
            // totalDiff=0;//reset this so itiration does not accumulate

            //pass idx to object and get the user data and pass it to html
            res.json(tableData[findidx]);
    });



};