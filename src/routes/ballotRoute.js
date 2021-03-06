const express = require("express");
const bApp = require("../app/ballotApp");

const router = express.Router();

router.route("/presidents").get(bApp.getPresidentCandidates);
router.route("/vpssp").get(bApp.getVPSSPCandidates);
router.route("/vppsi").get(bApp.getVPPSICandidates);
router.route("/secretary").get(bApp.getSecretaryCandidates);
router.route("/treasurer").get(bApp.getTreasurerCandidates);
router.route("/gcc").get(bApp.getGCCCandidates);
router.route("/pro").get(bApp.getPROCandidates);
router.route("/ceac").get(bApp.getCEACCandidates);
router.route("/eac").get(bApp.getEACCandidates);
router.route("/facultyrep").get(bApp.getFacultyCandidates);
router.route("/commuting").get(bApp.getCommutingCandidates);
router.route("/postgrad").get(bApp.getPostGradCandidates);
router.route("/submitBallot").patch(bApp.submitBallot);
router.route("/hallchair").get(bApp.getHallChairmanCandidates);
router.route("/dhallchair").get(bApp.getDHallChairmanCandidates);

module.exports = router;
