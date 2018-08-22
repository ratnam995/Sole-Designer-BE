module.exports = function(app, db) {
  app.post("/login", (req, res) => {
    // You'll create your note here.
    console.log("req", req);
    let reqObj = {
      //   id: Math.random(),
      //   name: req.body.userName,
      email: req.body.userEmail,
      password: req.body.userPassword
    };
    db.query(
      "SELECT id FROM `users` WHERE email = ? AND password = ?",
      [reqObj.email, reqObj.password],
      function(error, results, fields) {
        console.log("HEREEEEEEE---> error", error);
        console.log("HEREEEEEEE---> results", results);
        console.log("HEREEEEEEE---> fields", fields);
        if (error) {
          //   if(error.hasOwnProperty('sqlMessage') && error.sqlMessage.includes('Duplicate')){
          res.send({ error: "Please try again." });
          //   }
          //   else{
          //       res.send({ error: "An error has occurred" });
          //   }
        } else {
            if(results.length === 1){
                res.send({ success: "Successfully logged in.", results });
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
};
