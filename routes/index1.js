//业务逻辑结构
// var express=require("express")
router.post("/studentHandler",function(req,res){
    var actions = req.query.type
    switch(action){
        case "addStudent":
        
        db.find("student",{},function(err,data){
            var studentData={
                username:req.body.username,
                password:"123456",
                phone:/^1[34578][0-9]{9}$/.test(parseInt(req.body.phone))?req.body.phone:"false",
                // email:/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
                email:/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z]/.test(req.body.email)?req.body.email:"false",
                createAt:new Date(),
                updateAt:new Date(),
                tokenId:data.length+1,
                isstate:false
            }
            db.add("student", studentData, function (err, data) {
                if(err){
                    throw err
                }
                res.send({ "success": "添加成功","data":data})
            })
        })
    }
})