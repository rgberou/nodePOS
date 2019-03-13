
exports.usermodel=function users(sequelize,Sequelize){
	return sequelize.define('users',{
		userID:{
			type:Sequelize.INTEGER,
			autoIncrement: true,
			allowNull:false,
			primaryKey:true

		},
		fname:{
			type:Sequelize.STRING,
			allowNull:false	
		},
		lname:{
			type:Sequelize.STRING,
			allowNull:false	
		},
		password:{
			type:Sequelize.STRING,
			allowNull:false	

		}

	});

}