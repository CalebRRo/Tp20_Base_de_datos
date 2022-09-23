const db = require("../database/models")
module.exports = {
    list : (req,res) => {

        db.Actor.findAll({
            order : ["last_name"]
        }).then((actors) => {
          res.render("actorsList.ejs", { actors });
        });
        
    },
    detail: (req, res) => {
        db.Actor.findByPk(req.params.id).then(actor => {
          res.render("actorsDetail.ejs", { actor });
        }).catch(() => console.log(error))
    },
}