const userController = require('../controllers/users');
module.exports = function(app){
    app.get('/', (req,res) => res.redirect('/users')) //
    app.get('/users',  userController.index);
    app.get('/users/new',  userController.new);
    app.get('/users/:id',  userController.show);
    app.post('/users',  userController.create);
    app.get('/users/:id/edit',  userController.edit);
    app.post('/users/:id',userController.update)
    app.post('/users/:id/delete',  userController.destroy);
    app.post('/login', (req, res) => {
        User.findOne({email: req.body.email})
            .then( userInfo => {
                if(!userInfo){
                    throw new Error();
                }
                return User.validatePassword(req.body.password, userInfo.password)
                    .then( ()=> {
                        //add session id
                    })
            })
            .catch( error => {
                //render error
                res.render('/', { errror: 'user password combno doesen\'t exist' })
            })
    });
    
    //logout user
    app.post('/logout', (req, res) => {
    
    });
}
