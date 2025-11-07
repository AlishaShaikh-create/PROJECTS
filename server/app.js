import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app =express();
const PORT =5000;
app.use(express.json());

const buildPath = path.join(__dirname,"build")
if(fs.existsSync(buildPath))
{
    app.use(express.static(buildPath));
    app.get(/^\/(!api).*/,(req,res)=>{
        res.sendFile(path.join(buildPath,"index.html"));
    });

}
app.get("/api/test",(req,res)=>{
    res.json({message:"Hello from /api/test"});
})


// If api does not found
app.use((req,res)=>{  
    res.send(404).send("404 - NOT FOUND");
})

app.use((err,req,res,next)=>{
    console.log(err.stack)
    res.send(500).send("500 -Internal server error");
})

app.listen(PORT ,()=>{
    console.log(`Server is running at the ${PORT}`);
})