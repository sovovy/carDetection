module.exports = (app) => {
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
  };
  