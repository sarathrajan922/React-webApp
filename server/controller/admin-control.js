const adminHelper = require("../helpers/admin-helper");

module.exports = {
  adminLogin: async (req, res) => {
    const result = await adminHelper.adminLogin(req.body);
    result.status
      ? console.log("admin authentication successful")
      : console.log("admin authentication failed");
    res.json({ result });
  },

  getUserData: async (req, res) => {
    const result = await adminHelper.getUserData();

    res.json({ result });
  },                 

  deleteUser: async (req, res) => {
    const id = req.params.id;

    const result = await adminHelper.deleteUser(id);

    res.json({ result });
  },
};
