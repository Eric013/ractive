var makeTransitionManager = function ( callback ) {
	var transitionManager;

	transitionManager = {
		active: 0,
		i: 0,
		push: function () {
			transitionManager.active += 1;
			transitionManager.i += 1;
		},
		pop: function () {
			transitionManager.active -= 1;
			if ( callback && !transitionManager.active && transitionManager.ready ) {
				callback();
			}
		}
	};

	return transitionManager;
};