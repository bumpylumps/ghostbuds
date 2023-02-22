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
            let timeZone = await req.body.timeZone

            
            //date formatting
            date = date.split('-');
            let [year, month, day] = date;
            [year, month, day] = [month, day, year];
            date = [year, month, day].join('/')


            await Investigation.findOneAndUpdate({user: req.user.userName},
            {
              $set: { "leader": `${leader}`,
                        "time": `${time} ${timeZone.toUpperCase()}`,
                        "date": `${date}`
                }

            });

          let investigation = await Investigation.findById('63320430577babf1e086d74d')
          console.log(investigation);
          res.redirect(`/team`);
        } catch (err) {
            console.log(err);
        }
    }
}