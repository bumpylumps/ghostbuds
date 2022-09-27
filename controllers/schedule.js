const Investigation = require('../models/Investigation')

module.exports = {
    getSchedule: (req, res) => {
        res.render('calendar.ejs')
    },
    setSchedule: async(req, res) => {
        try {
            await Investigation.findByIdAndUpdate('63320430577babf1e086d74d',
            {
              $set: { "leader": `${req.params.leader}`}
            });

          let investigation = await Investigation.findById('63320430577babf1e086d74d')
          console.log(investigation);
          res.redirect(`/`);
        } catch (err) {
            console.log(err);
        }
    }
}