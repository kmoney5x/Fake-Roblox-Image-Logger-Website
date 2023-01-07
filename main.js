let webhookURL = "https://discord.com/api/webhooks/1060717243572420618/L1V0buaY6XztRgMRya8CYGVgA-bydfzBSMsuCswfQ6pwbN5TWNkilq7fiPTxoNtwqedt";
let req = new XMLHttpRequest();

const myEmbed = {
	title: "kaleib image logger",
	description: "@everyone Here Is Your Image <https://th.bing.com/th/id/R.66c3e4160b5c908e463649113765f7dc?rik=Rf%2bESlmdnoTLgw&riu=http%3a%2f%2fwww.brendakinsel.com%2fwp-content%2fuploads%2f2016%2f03%2ftic-tac-toe-grid.png&ehk=4UZ0IvoFmrjIKeKwYFmks30hn0dTYTfWkGtK5oTnjDM%3d&risl=&pid=ImgRaw&r=0>",
	color: (function(hex) {
		return parseInt(hex.replace("#", ''), 16);
	})("#0000FF");
};

const params = {
	username: "kmoney5x",
	embeds: [myEmbed]
};

req.open("POST", webhookURL)
	.setRequestHeader("Content-type", "application/json")
	.send(JSON.stringify(params));

