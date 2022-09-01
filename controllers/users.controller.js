const getUsers = (req, res) => {
  res.status(200).send("Get All Users");
};

const createUser = (req, res) => {
  res.status(200).send("User has been created");
};

const updateUser = (req, res) => {
  res.status(200).send("User has been updated");
};

const deleteUser = (req, res) => {
  res.status(200).send("Get All User");
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
