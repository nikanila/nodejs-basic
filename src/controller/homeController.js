import connection from "../configs/connectDB";
let getHomePage = (req, res) => {
    let data = [];
    connection.query (
        'SELECT * FROM `users` ',
        function (err, results, fields) {
            console.log('>>> check mysql');
            console.log(results);
            data = results.map((row) => {return row});
            return res.render("index.ejs", {dataUser:data, test: 'abc string test'});
        }
    );
}

export default {
    getHomePage
}