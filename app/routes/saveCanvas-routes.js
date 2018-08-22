module.exports = function(app, db) {
    app.post("/saveCanvas", (req, res) => {
      // You'll create your note here.
      console.log("req", req);
      let reqObj = {
        //   id: Math.random(),
        //   name: req.body.userName,
        id: req.body.userID,
        canvasName: req.body.canvasName,
        canvasJSON: req.body.canvasJSON
      };
      db.query(
        "SELECT * FROM `users` WHERE id = ?",
        [reqObj.id],
        function(error, results, fields) {
          console.log("HEREEEEEEE---> error", error);
          console.log("HEREEEEEEE---> results", results);
          console.log("HEREEEEEEE---> fields", fields);
          if (error) {
            res.send({ error: "Please try again." });
          } else {
              if(results.length === 1){
                  console.log("here===>", results);
                db.query('INSERT INTO `image_urls` SET user_id = ?, canvas_json = ?, canvas_name = ?', [reqObj.id, reqObj.canvasJSON, reqObj.canvasName], function (error, results, fields) {
                    if (error) {
                        console.log("Error====>", error);
                        res.send({ error: "An error has occurred" });
                    } else {
                        console.log("REsponse", results);
                        res.send({ success: "Successfully Saved.", results});
                    } 
                });
              }
              else if(results.length > 1) {
                  res.send({ error: "Multiple users found." }); 
              }
              else{
                  res.send({ error: "User not registered" }); 
              }
          }
          // error will be an Error if one occurred during the query
          // results will contain the results of the query
          // fields will contain information about the returned results fields (if any)
        }
      );
    });
    app.put("/updateCanvas", (req, res) => {
      // You'll create your note here.
      console.log("req", req);
      let reqObj = {
        //   id: Math.random(),
        //   name: req.body.userName,
        id: req.body.userID,
        canvasName: req.body.canvasName,
        canvasJSON: req.body.canvasJSON
      };
      db.query(
        "UPDATE `image_urls` SET user_id = ?, canvas_json = ?, canvas_name = ? WHERE user_id = ? AND canvas_name = ?",
        [reqObj.id, reqObj.canvasJSON, reqObj.canvasName, reqObj.id, reqObj.canvasName],
        function(error, results, fields) {
          console.log("HEREEEEEEE---> error", error);
          console.log("HEREEEEEEE---> results", results);
          console.log("HEREEEEEEE---> fields", fields);
          if (error) {
            res.send({ error: "Please try again." });
          } else {
              if(results.hasOwnProperty('affectedRows') && results.affectedRows === 1){
                  console.log("here===>", results);
                  res.send({success: "Successfully Updated."});
                // db.query('INSERT INTO `image_urls` SET user_id = ?, canvas_json = ?, canvas_name = ?', [reqObj.id, reqObj.canvasJSON, reqObj.canvasName], function (error, results, fields) {
                //     if (error) {
                //         console.log("Error====>", error);
                //         res.send({ error: "An error has occurred" });
                //     } else {
                //         console.log("REsponse", results);
                //         res.send({ success: "Successfully Saved.", results});
                //     } 
                // });
              }
              else{
                  res.send({ error: "User not registered" }); 
              }
          }
          // error will be an Error if one occurred during the query
          // results will contain the results of the query
          // fields will contain information about the returned results fields (if any)
        }
      );
    });
  };
  