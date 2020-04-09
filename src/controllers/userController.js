const getUser = (req, res) => {
    const { userId } = req.params;
    const { search, name } = req.query;
    res.status(200).render("pages/user", { method: "GET", userId: userId, search: search, name: name,ville: ""});
};
const postUser = (req, res) => {
    const { userId } = req.params;
    const { search, name } = req.query;
    const { ville } = req.body;
    res.status(200).render("pages/user", { method: "POST", userId: userId, search: search, name: name, ville: ville});
};
const putUser = (req, res) => {
    const { userId } = req.params;
    const { search, name } = req.query;
    const { ville } = req.body;
    res.status(200).render("pages/user", { method: "PUT", userId: userId, search: search, name: name, ville: ville});
};
const deleteUser = (req, res) => {
    const { userId } = req.params;
    const { search, name } = req.query;
    const { ville } = req.body;
    res.status(200).render("pages/user", { method: "DELETE", userId: userId, search: search, name: name,ville: ville});
};


export default{
    getUser,
    postUser,
    putUser,
    deleteUser
};