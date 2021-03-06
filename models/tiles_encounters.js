/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tiles_encounters', {
		tile: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		encounter: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		difficulty: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		probability: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '10'
		}
	}, {
		tableName: 'tiles_encounters'
	});
};
