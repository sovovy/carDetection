module.exports = (app) => {
  // 모델 정의
  const Detection = require('../models/detection');

  /* CCTV */
  app.get("/", (req, res) => {
    res.render("cctv/index");
  });

  /* ByTime */
  app.get("/time", (req, res) => {
    res.render("time/index");
  });

  /* ByClass */
  app.get("/class", (req, res) => {
    res.render("class/index");
  });

  /* ByDay */
  app.get("/day", (req, res) => {
    res.render("day/index");
  });

  /* new Data from Python */
  app.post('/data', (req, res) => {
    console.log("밍 ",req.body);
    res.send("thanks :)");
    // 받아 오는 데이터
    // 날짜, 시간, car, suv, truck
    // -> DB에 저장
  });

  /* GET API */
  app.get('/data/time/:date', (req, res) => {
    // 해당 날짜의 시간별, 레이블별 차량 수
    // {
    //   "00":{
    //     "car":12,
    //     "suv":30,
    //     "truck":1
    //   },
    //   ...
    // }
    let result = {};

    Detection.find({ date: req.params.date }).lean().exec(function(err, docs) {
      docs.forEach(function(doc) {
        result[doc.hour.toString()] = {
          "car" : doc.car,
          "suv" : doc.suv,
          "truck" : doc.truck
        }
      });

      res.json(result);
    })
  });
    

  app.get('/data/class/:date', (req, res) => {
    // 해당 날짜의 레이블별 차량 수
    // {
    //   "car":100,
    //   "suv":120,
    //   "truck":50
    // }
    let carCnt = 0;
    let suvCnt = 0;
    let truckCnt = 0;

    Detection.find({ date: req.params.date }).lean().exec(function(err, docs) {
      docs.forEach(function(doc) {
        carCnt += doc.car;
        suvCnt += doc.suv;
        truckCnt += doc.truck;
      });
      let result = {
        "car" : carCnt,
        "suv" : suvCnt,
        "truck" : truckCnt
      };
      res.json(result);
    })
  });
};