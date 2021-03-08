module.exports = async function (req, res, proceed) {
    // request originated from a logged-in user.  So we can proceed to the next policy
    if (req.session.userId) {
        
        return proceed();
    }

    // this request did not come from a logged-in user.
    return res.unauthorized();

};

