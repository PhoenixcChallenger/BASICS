// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/getblog?slug=javascript
import * as fs from 'fs';

export default function handler(req, res) {
  // console.log(req);
  fs.readFile(`blogdata/${req.query.slug}.json`, (err,data)=>{
    if(err){
      res.status(500).json({error : "No such blog found"})
    }
    console.log(req.query);
    res.status(200).json(JSON.parse(data));
  })
}
