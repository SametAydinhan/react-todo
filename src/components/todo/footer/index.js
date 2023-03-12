import {useState,useEffect} from 'react'

function Footer({tasks,filterValueSelected,clearCompleted}) {
  const buttonList = [
    {
      name:'All',
      selected:false
    },{
      name:'Active',
      selected:false
    },{
      name:'Completed',
      selected:false
    },
  ]

  const [btnList,setBtnList] = useState(buttonList);
  const [changeStyle,setChangeStyle] = useState({});

  useEffect(() => {
    const newStyle = {};
    btnList.forEach((b,i) => {
      newStyle[i] = b.selected ? 'selected' : '';
    });
    setChangeStyle(newStyle);
  },[btnList]);

  const handleCheck = (clickedBtn, taskIndex) => {
    const newTasks = [...btnList];
    newTasks.forEach((j,i) =>{
      if (i === taskIndex){
        j.selected = true;
      }else {
        j.selected = false;
      }
    });
    setBtnList(newTasks);
    filterValueSelected(clickedBtn.name);
  }
  return (
    <div>
      <footer className="footer">
		<span className="todo-count">
			<strong>{tasks.length} </strong>
			 items left
		</span>

		<ul className="filters">
			{btnList.map((btn,i) => (
        <li key={i}>
            <a href="#/" className={changeStyle[i]} onClick= {() => handleCheck(btn,i)}>{btn.name}</a>
        </li>
      ))}
		</ul>

		<button className="clear-completed" onClick={() => clearCompleted()}>
			Clear completed
		</button>
	</footer>
  </div>
  )
}

export default Footer