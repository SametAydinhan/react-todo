import React,{useState} from 'react'
import Footer from './footer'
import Header from './header'
import List from './list'
import './style.css'

function ToDo() {
  const [tasks, setTasks] = useState([{
    isChecked:true,
    taskName:'Learn JavaScript',
  },{
    isChecked:false,
    taskName:'Learn React',
  },{
    isChecked:false,
    taskName:'Have a life'
  }]);
  const [filterTextValue, updateFilterValue] = useState('All');

  let filteredTaskList = tasks.filter((task) =>{
    if(filterTextValue ==='All'){
      return task;
    }else if(filterTextValue ==='Active'){
      return task.isChecked===false;
    }else{
      return task.isChecked === true;
    }
  });
  const onFilterBtnClicked = (filterBtn) => {
    updateFilterValue(filterBtn)
  }
  const onDeleteSelectedValue = (deleteValue) => {
    console.log(deleteValue,' main value')
    let itemsCopy = [...tasks]
    console.log(itemsCopy,' itemsCopy e atılan task listesi');
    itemsCopy.splice(deleteValue,1);
    console.log(itemsCopy,' splicedan sonra items copy');
    setTasks(itemsCopy);
  }
  const onDeleteCompletedValues=()=>{
    const completedTasks = tasks.filter((task) =>!task.isChecked)
    setTasks(completedTasks)
  }
  return (
    <div>
<section className="todoapp">
        <Header addTask={setTasks} tasks ={tasks}/>
        <List tasks= {filteredTaskList} deleteValueSelected={onDeleteSelectedValue}/>
        <Footer tasks={tasks} filterValueSelected={onFilterBtnClicked} clearCompleted={onDeleteCompletedValues}/>
  </section>
    </div>
  )
}

export default ToDo