
/* GET home page */
module.exports.index  = function(req, res, next) {
  res.render('index', { title: 'Express' , content: 'Hello World!\nThis is my first express app.'});
}; 
