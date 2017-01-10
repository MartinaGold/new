export class Init {
	load(){
		if(localStorage.getItem('todos') === null || localStorage.getItem('todos') === undefined){
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
			return
		} else {
			console.log('found todos');
		}
	}
}