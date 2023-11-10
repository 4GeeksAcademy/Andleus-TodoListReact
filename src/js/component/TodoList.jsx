import React, { useEffect, useState } from "react";







const TodoList = () => {
	const [isHover, setIsHover] = useState(false);
	const [newTask, setNewTask] = useState('');
	const [listTasks, setListTasks] = useState(["Decir 'hola buenos días'"])

	useEffect(() => {
		// console.log(listTasks);
		listTasks.forEach((task) => {
			console.log(task)
		});
		console.log("________________________________________________");
	}, [listTasks]);


	const handleNewTask = (e) => {
		setNewTask(e.target.value);
		// console.log(e.target.value);
	}

	const handleAddNewTask = () => {
		if (newTask.trim() != '') {
			setListTasks([...listTasks, newTask]);
			setNewTask('');

		} else {
			alert("NO SE ADMITEN TASKS VACIAS");
		}
	}


	const handleEnter = (e) => {
		if (e.key === 'Enter') {
			handleAddNewTask();
		}
	}

	const handleHover = (e) => {
		e.target.classList.toggle('hovered')
	}


	const handleRemoveTask = (index) => {
		setListTasks((listTasks) => {
			const updatedList = [...listTasks];
			updatedList.splice(index, 1);
			return updatedList;
		});
	}



	return (

		<div className="container-fluid">
			<div className="d-flex justify-content-center align-items-center">
				<div className="container-fluid col-8">
					<h1 className="text-center">MIRA ESTA LISTA DE TODOS</h1>
					<div>
						<input type="text" id="addText" className="col-12" value={newTask} onChange={handleNewTask} onKeyDown={handleEnter} autoFocus />
						<ul className="col-12 list-group ">

							{listTasks.map((task, index) => {
								return (
								<li key={index} className={`list-group-item d-flex justify-content-between task`}
									onMouseEnter = {handleHover}
									onMouseLeave = {handleHover}
								>
									<span>{task}</span>
									<span className="removeTask">
										<i className="fa-solid fa-xmark" onClick={() => handleRemoveTask(index)}></i>
									</span>
								</li>)
							})}
						</ul>
						<p>Task todo -&gt; {listTasks.length}</p>
					</div>

				</div>
			</div>

		</div>


	);
};

export default TodoList;
