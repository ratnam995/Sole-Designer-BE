module.exports = function(app, db) {
  app.post("/user/addUser", (req, res) => {
    // You'll create your note here.
    console.log("req", req);
    let reqObj = {
        id: Math.random(),
        name: req.body.userName,
        email: req.body.userEmail,
        password: req.body.userPassword
    };
    db.query('INSERT INTO `users` SET id = ?, name = ?, email = ?, password = ?', [reqObj.id, reqObj.name, reqObj.email, reqObj.password], function (error, results, fields) {
        console.log("HEREEEEEEE---> error", error);
        console.log("HEREEEEEEE---> results", results);
        console.log("HEREEEEEEE---> fields", fields);
        if (error) {
            if(error.hasOwnProperty('sqlMessage') && error.sqlMessage.includes('Duplicate')){
                res.send({ error: "User already registered" });
            }
            else{
                res.send({ error: "An error has occurred" });
            }
        } else {
            res.send({ success: "Successfully Signed Up.", results});
        }
        // error will be an Error if one occurred during the query
        // results will contain the results of the query
        // fields will contain information about the returned results fields (if any)
    });
  });
};
