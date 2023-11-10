// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/blogs
// pages/api/yourApiRoute.js
import * as fs from 'fs'; 
import path from 'path';

export default function handler(req, res) {
    const files = fs.readdirSync('blogdata');
    const BlogArray = [];
    
    for (const blogFile of files) {
        const filePath = path.join('blogdata', blogFile);
        const data = fs.readFileSync(filePath, 'utf8');
        const blogData = JSON.parse(data);
        BlogArray.push(blogData);
    }
    res.status(200).json(BlogArray);
}

  //export default function handler(req, res) {
  // console.log(req);
  // fs.readdir(`blogdata`, (err,data)=>{
  //   if(err){
  //     res.status(500).json({error : "No such directory"});
  //   }
  //   res.status(200).json(data);
  // })
  
  //}