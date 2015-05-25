export class HomeCtrl {
	$title = 'Home';

	$fab = {
		label: 'Add',
		icon: 'add',
		click: this.fabClick.bind(this)
	}

	$actions = [
		{
			label: 'More',
			icon: 'more_vert',
			menu: [
				{
					label: 'An item',
					click: function() {
						console.log('item clicked');
					}
				}
			]
		}
	];

	items = ['A', 'B', 'C', 'D', 'E'];

	static $inject = ['User'];
	constructor(User) {
		User.checkUsername({
			username: 'lellimecnar'
		}, function(result) {
			console.log(result);
		});

		// User.get({
		// 	username: 'lellimecnar'
		// }, function(result) {
		// 	console.log(result);
		// });
	}

	actionClick(e) {
		console.log('action clicked');
	}

	fabClick() {
		console.log('fab clicked');
	}
}