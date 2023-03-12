import {useState, useEffect} from 'react'

const initialFormValues = {isChecked:false, taskName:''};

function Header({tasks,addTask}) {
    const [form,setForm]= useState(initialFormValues);

    useEffect(()=>{
        setForm(initialFormValues);
    },[tasks]);
    const onChangeInput = (e) =>{
        setForm({...form, [e.target.name]: e.target.value});
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        if(form.taskName ===''){
            return false;
        }
        addTask([...tasks,form]);
    }
    return (
        <div>
        
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={onSubmit}>
                <input name='taskName' value={form.taskName} onChange={onChangeInput} className="new-todo" placeholder="What needs to be done?" autoFocus />
            </form>
        </header>
        </div>
    )
}

export default Header