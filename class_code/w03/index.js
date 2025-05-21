import express from "express";
const app = express();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

app.get("/", (req, res)=>{
    res.send("Hello from the server");
});

app.post("/", (req, res)=>{
    res.send("Hello from the POST Request");
});

app.put("/", (req, res)=>{
    res.send("Hello from the PUT Request");
});

/* 
DOMAIN: https://www.youtube.com
ENDPOINT: /watch
? - query object
v=pAsmrKyMqaA

req: {
    ip,
    OS, 
    url,
    method
    query (?) - for searching information on DB
    params, body
}
*/

// example of a query
app.get("/watch", (req, res)=>{
    console.log(req.url); // /watch
    console.log(req.query);
    console.log(req.params);
    console.log(req.body);
    res.send("You got to the watch endpoint")
});

// for params
// https://www.ebay.ca/itm/316181501655
app.get("/params/:itemID", (req, res)=>{
    console.log(req.url); // /watch
    console.log(req.query);
    console.log(req.params);
    console.log(req.body);
    res.send("You got to the params endpoint")
});

/*
https://www.bestbuy.ca
/en-ca
/category
/windows-laptops
/36711?
path=category:Computers+&+Tablets
%253Bcategory:Laptops+&+MacBooks
%253Bcategory:Windows+Laptops%253B

custom0ramsize:64%253B
laptopsscreensizefs0enrchrange:15+Inches
%253Bcustom0nativescreenresolution:%25E2%2580%258E1920+x+1080


*/

