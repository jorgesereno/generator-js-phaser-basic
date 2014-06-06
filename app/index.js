'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var JsPhaserBasicGenerator = yeoman.generators.Base.extend({
	promptUser: function () {
		var done = this.async();
		
		this.log(yosay('Welcome to the marvelous JsPhaserBasic generator!'));

		var prompts = [{
			name: 'gameName',
			message: 'What is your game\'s name?'
		}];

		this.prompt(prompts, function (props) {
			this.gameName = props.gameName;

			done();
		}.bind(this));
	},
	
	scaffoldFolders: function() {
		this.mkdir(this.gameName);
		this.mkdir(this.gameName + "/css");
		this.mkdir(this.gameName + "/assets");
		this.mkdir(this.gameName + "/src");
		this.mkdir(this.gameName + "/src/libs");
		this.mkdir(this.gameName + "/src/states");
		this.mkdir(this.gameName + "/build");
	},
	
	copyMainFiles: function() {
		var context = {
			game_name: this.gameName
		};
		this.template("_index.html", this.gameName + "/index.html", context);
		this.copy("_main.css", this.gameName + "/css/main.css");
		this.copy("_gruntfile.js", this.gameName + "/Gruntfile.js");
		this.copy("_package.json", this.gameName + "/package.json");
		
		this.copy("_main.js", this.gameName + "/src/main.js");
		this.copy("_gameBoot.js", this.gameName + "/src/states/gameBoot.js");
		this.copy("_gameMenu.js", this.gameName + "/src/states/gameMenu.js");
		this.copy("_gamePlay.js", this.gameName + "/src/states/gamePlay.js");
		this.copy("_gameOver.js", this.gameName + "/src/states/gameOver.js");
	}
});

module.exports = JsPhaserBasicGenerator;
