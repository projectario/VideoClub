module.exports = async function (req, res, proceed) {
    // request originated from a logged-in user.  So we can proceed to the next policy
    if (req.session.userId) {
        // sails.log(this.req.me)
        // sails.log(this.req.session)
        return proceed();
    }

    // this request did not come from a logged-in user.
    return res.unauthorized();

};

// module.exports = async function (req, res, proceed) {
//     console.log("isLoggedIn")
//     if (req.session.userId !== undefined) {
//         return proceed();
//     }
//     res.statusCode = 498
//     return res.view("pages/homepage", {data: "forbidden"})
//     // return res.forbidden();
// }