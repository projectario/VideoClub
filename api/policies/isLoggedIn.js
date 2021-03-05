module.exports = async function (req, res, proceed) {
    // request originated from a logged-in user.  So we can proceed to the next policy
    if (req.me) {
        sails.log(this.req.me)
        sails.log(this.req.session)
        return proceed();
    }

    // this request did not come from a logged-in user.
    return res.unauthorized();

};
