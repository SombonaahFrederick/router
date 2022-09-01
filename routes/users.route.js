const router = require("express").Router;
const {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} = require("../controllers/Users.controller");

const UserRouter = router();

UserRouter.get("/", getUsers);
UserRouter.post("/", createUser);
UserRouter.delete("/", deleteUser);
UserRouter.patch("/", updateUser);

module.exports = UserRouter;
