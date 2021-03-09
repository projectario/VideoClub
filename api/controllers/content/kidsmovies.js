module.exports = {

    friendlyName: 'View  kids movies',

    description: 'Display "Kids Movie" page.',

    exits: {},


    fn: async function () {
        let thisKidsMovie = await Film.find();
        sails.log(thisKidsMovie)
        sails.log(thisKidsMovie.storyline)
        // Respond with view.

        return { thisKidsMovie };

    }


};