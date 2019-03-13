exports.userdetailsmodel=function users(sequelize,Sequelize){
	return sequelize.define('userdetails',{
		userID:{
			type:Sequelize.STRING,
			allowNull:false,
			primaryKey:true

		},
		dept:{
			type:Sequelize.STRING,
			allowNull:false	
		}
		
	});

}