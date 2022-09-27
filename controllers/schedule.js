const Investigation = require('../models/Investigation')

module.exports = {
    getSchedule: (req, res) => {
        res.render('calendar.ejs')
    },
    setSchedule: async(req, res) => {
        try {
            let leader = await req.body.leader
            let time = await req.body.time
            let date = await req.body.date
            await Investigation.findByIdAndUpdate('63320430577babf1e086d74d',
            {
              $set: { "leader": `${leader}`,
                        "time": `${time}`},
                        "date": `${date}`
            });

          let investigation = await Investigation.findById('63320430577babf1e086d74d')
          console.log(investigation);
          res.redirect(`/`);
        } catch (err) {
            console.log(err);
        }
    }
}