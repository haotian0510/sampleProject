const express=require("express");
const exphbs = require("express-handlebars");

const app=express();

app.engine("handlebars",exphbs());
app.set("view engine","handlebars");



app.use(express.static("public"));

app.get("/",(req,res)=>{
        res.render("home",{
            title:"Home Page"
        })
});




const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("Web is up");
})