var express = require('express');
var router = express.Router();

let moment = require('moment');
const db = require('../models/index');
const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

var Article = require('../models/index').Article;

//목록 페이지 조회
router.get('/', function(req, res, next) {
  Article.findAll().then((article)=>{
    console.log(article);
    res.render('list',{data: article, moment:moment});
  });
});

//등록 페이지 조회
router.get('/create', function(req, res, next) {
  res.render('create');
});

//등록 페이지 등록
router.post('/create', function(req, res, next){
  let baseDatetime = Date.now();

  let article = {
    title:req.body.title,
    text:req.body.text, 
    createdAt:baseDatetime,
    updatedAt:baseDatetime
  }

  console.log(article);
  Article.create(article).then(()=>{
    return res.redirect("/");
  });
 });


module.exports = router;
