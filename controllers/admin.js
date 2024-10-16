exports.getAdmin = (req, res, next) => {
  res.status(200).render("admin", {
    title: "admin",
    path: "/admin",
  });
};
