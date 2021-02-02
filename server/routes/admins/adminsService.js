const Admin = require('../../schemas/adminsSchema');

module.exports.getAll = async (req, res) => {
    const admins = await Admin.find({}).exec();
    res.send(admins);
}

module.exports.getById = async (req, res) => {
    const admin = await Admin.findById(req.params._id);
    res.send(admin);
}

module.exports.create = async (req, res) => {
    if (req.body) {
        if (Object.entries(req.body).length === 0
            && req.body.constructor === Object) {
            res.status(400).json({message: "Body is empty"});
        }
        const admin = new Admin({
            email: req.body.email,
            password: req.body.password
        });
        const saved = await admin.save();
        if (saved) {
            res.sendStatus(200);
        } else {
            res.status(418).json({message: "Something went wrong"});
        }
    } else {
        res.status(400).json({message: "Body is empty"});
    }
}

module.exports.delete = async (req, res) => {
    if (req.body) {
        const news = await Admin.findOneAndDelete(req.params._id);
        if (news) {
            res.sendStatus(200);
        } else {
            res.status(418).json({message: "Something went wrong"})
        }
    } else {
        res.status(400).json({message: "Body is empty"});
    }
}

module.exports.update = async (req, res) => {
    if (req.body) {
        if (Object.entries(req.body).length === 0
            && req.body.constructor === Object) {
            res.status(400).json({message: "Body is empty"});
        } else {
            const update = await Admin.findByIdAndUpdate(req.param.id, req.param.update);
            if (update) {
                res.sendStatus(200);
            } else {
                res.status(418).json({message: "Something went wrong"});
            }
        }
    } else {
        res.status(400).json({message: "Body is empty"});
    }
}