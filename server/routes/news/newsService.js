const News = require('../../schemas/newsSchema');

module.exports.getAll = async (req, res) => {
    const news = await News.find({}).exec();
    res.send(news);
}

module.exports.getById = async (req, res) => {
    const one = await News.find({title: req.params._id}).exec();
    if (one) {
        res.send(one)
    } else {
        res.sendStatus(404);
    };
}

module.exports.createNews = async (req, res) => {
    if (req.body) {
        if (Object.entries(req.body).length === 0
            && req.body.constructor === Object) {
            res.status(400).json({message: "Body is empty"});
        }
        const data = req.body;
        const news = new News({
            title: data.title,
            body: data.body,
            photo: data.photoString,
            date: data.date
        })
        const response = await news.save();
        if (response) {
            res.sendStatus(200);
        } else {
            res.status(418).json({message: "Something went wrong"})
        }
    } else {
        res.status(400).json({message: "Body is empty"});
    }
}

module.exports.delete = async (req, res) => {
    if (req.body) {
        const news = await News.findOneAndDelete(req.params._id);
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
            res.status(204).json({message: "Body is empty"});
        } else {
            const update = await News.findByIdAndUpdate(req.param.id, req.param.update);
            if (update) {
                res.sendStatus(200);
            } else {
                res.status(418).json({message: "Something went wrong"});
            }
        }
    } else {
        res.status(204).json({message: "Body is empty"});
    }
}


