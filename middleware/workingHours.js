// middleware/workingHours.js
const workingHours = (req, res, next) => {
    const now = new Date();
    const day = now.getDay(); // 0 (Sunday) to 6 (Saturday)
    const hour = now.getHours(); // 0 to 23

    if (day >= 1 && day <= 6 && hour >= 9 && hour < 17) {
        next(); // within working hours
    } else {
        res.send('Sorry, the website is only available during working hours (Mon-Fri, 9-17).');
    }
};

module.exports = workingHours;
