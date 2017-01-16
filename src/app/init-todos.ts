export class Init {
	load(){
    let parseTodos = JSON.parse(localStorage.getItem('todos'));

		if(localStorage.getItem('todos') === null || localStorage.getItem('todos') === undefined || parseTodos.length === 0){
			console.log('no todos found....creating');
			var todos = [
		  		{
		  			text: 'Pickup kids at school'
		  		},
		  		{
		  			text: 'Meeting with boss'
		  		},
		  		{
		  			text: 'Dinner with wife'
				}
			];

			localStorage.setItem('todos', JSON.stringify(todos));
		} else {
			console.log('found todos');
		}
	}
}
