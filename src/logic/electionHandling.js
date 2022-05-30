const e = require("cors");
const { electiondata, candidates, tallyinfo } = require("../db/models");

/**
 * Adds election
 * @function
 * @async
 * @name insertElection
 * @param {*} title
 * @param {*} sDate
 * @param {*} eDate
 * @param {*} csvLocation
 * @returns {Number}
 */
module.exports.insertElection = async function (
  title,
  sDate,
  eDate,
  csvLocation
) {
  if (title) {
    if (sDate) {
      if (eDate) {
        if (csvLocation) {
          await electiondata.create({
            electionName: title,
            startDate: sDate,
            endDate: eDate,
            csvLocation: csvLocation,
          });
          return 0;
        }
        return 1;
      }
      return 1;
    }
    return 1;
  }
  return 1;
};

/**
 * Finds an election
 * @function
 * @async
 * @name selectElection
 * @param {*} elid
 * @returns {Object}
 */
module.exports.selectElection = async function (elid = 1) {
  if (elid) {
    const election = await electiondata.findAll({});
    return election;
  }
  return 1;
};

/**
 * Removes an election
 * @function
 * @async
 * @name deleteElection
 * @param {*} elid
 * @returns {Number}
 */
module.exports.deleteElection = async function (elid = 1) {
  if (elid) {
    const election = await electiondata.findOne({});

    if (election) {
      await electiondata.destroy({
        where: {
          elid: election.elid,
        },
      });
      return 0;
    } else {
      return 1;
    }
  }
  return 2;
};

/**
 * Insert results into the tally info table
 * @function
 * @async
 * @name insertResults
 * @param {*} name 
 * @param {*} position 
 * @param {*} noOfVotes 
 * @returns {Number}
 */
 module.exports.insertResults = async function (name, email, position, noOfVotes) {
  if (name) {
    if (position) {
      if (noOfVotes) {
        await tallyinfo.create({
          name: name,
          email: email,
          position: position,
          noOfVotes: noOfVotes
        });
        return 0;
      }
      return 1;
    }
    return 1;
  }
  return 1;
};