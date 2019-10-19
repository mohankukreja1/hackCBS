var mongoose=require('mongoose');
var bcrypt=require('bcrypt-nodejs');

var doctorSchema = mongoose.Schema({
    email:{
		type:String,
		default: null
    },
    firstname: {
        type: String,
        default : null
    },
    lastname:{
        type:String,
	    default: null
    },
    password:{
		type:String,
		default: null
    },
    
    phone:{
        type:String,
		default: null
    },
    speciality:{
        type:String,
		default: null
    }


});

doctorSchema.methods.encryptPassword=function (password) {
    return bcrypt.hashSync(password,bcrypt.genSaltSync(10),null);
}

doctorSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password,this.password);
}
var obj = {};

obj.doctor = mongoose.model('user',doctorSchema);

module.exports = obj;