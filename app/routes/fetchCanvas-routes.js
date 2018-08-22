module.exports = function(app, db) {
    app.post("/fetchCanvas", (req, res) => {
      // You'll create your note here.
      console.log("req", req);
      let reqObj = {
        fileName: req.body.canvasName,
        userId: req.body.userID
      };
      db.query(
        "SELECT canvas_json, canvas_name FROM `image_urls` WHERE canvas_name = ? AND user_id = ?",
        [reqObj.fileName, reqObj.userId],
        function(error, results, fields) {
          console.log("HEREEEEEEE---> error", error);
          console.log("HEREEEEEEE---> results", results);
          console.log("HEREEEEEEE---> fields", fields);
          if (error) {
            res.send({ error: "Please try again." });
          } else {
              if(results.length >= 1){
                  res.send({ success: "Fetched saved file", results });
              }
              else{
                  res.send({ error: "No saved files found." }); 
              }
          }
          // error will be an Error if one occurred during the query
          // results will contain the results of the query
          // fields will contain information about the returned results fields (if any)
        }
      );
    });
    app.post("/fetchCanvasNames", (req, res) => {
      // You'll create your note here.
      console.log("req===>", req);
      let reqObj = {
        userId: req.body.userID
      };
      db.query(
        "SELECT canvas_name FROM `image_urls` WHERE user_id = ?",
        [reqObj.userId],
        function(error, results, fields) {
          console.log("HEREEEEEEE---> error", error);
          console.log("HEREEEEEEE---> results", results);
          console.log("HEREEEEEEE---> fields", fields);
          if (error) {
            res.send({ error: "Please try again." });
          } else {
              if(results.length >= 1){
                  res.send({ success: "Fetched saved file", results });
              }
              else{
                  res.send({ error: "No saved files found." }); 
              }
          }
          // error will be an Error if one occurred during the query
          // results will contain the results of the query
          // fields will contain information about the returned results fields (if any)
        }
      );
    });
  };
  