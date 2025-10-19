const AddInput = document.getElementById("taskInput")
const addBtn = document.getElementById("addBtn")
const searchBox = document.getElementById("searchBox")
const TaskList = document.getElementById("taskList")
const TotalCount = document.getElementById("counter")
const LastAc = document.getElementById("lastAction")
const clearBtn = document.getElementById("clearBtn")

// clear ทุกอย่าง
//*** สำคัญมากๆ */
document.addEventListener('DOMContentLoaded',()=> {
    function clearTask() {
    task =[]
    counter.reset()
    renderTasks()
    LastAc.textContent = "Clear all task"
    localStorage.removeItem('task')
   }

   clearBtn.addEventListener('click',clearTask)
})

// closure 
function counterAction() {
    let count = 0
    return {
        //เพิ่ม
       increase: function() {count++},
       //ลด
       decrease: function() {if (count > 0) count--},
       // กลับค่าเดิม 
       reset:function() {count = 0},
       // เก็บค่า count  แล้ว return ออกไป
       getCount: function() {return count}
        
    }
}

const counter = counterAction()

//collect all data 
let task= []

// add function
function Addtask() {
    const text = AddInput.value.trim()
    if(!text) return
    const newtask = {
        id: Date.now(),
        text: AddInput.value,
        done:false
    }
    
    task.push(newtask)
    counter.increase()
    
  
    renderTasks()
    AddInput.value= ''
    LastAc.textContent =`Last action : Added ${text}`
}

// show function
function renderTasks() {
    TaskList.innerHTML = ''

    task.forEach((t) => {
        const li = document.createElement('li')
        li.textContent = t.text

        if (t.done) li.classList.add('done')

        li.addEventListener('click', () => toggleTask(t.id))

        const delBtn = document.createElement('button')
        //เอาข้อความออกทีละอัน
        delBtn.textContent = 'remove'
        delBtn.addEventListener('click', e => {
            e.stopPropagation()
            deleteTask(t.id)
        })

        li.appendChild(delBtn)
        TaskList.appendChild(li)
    })

    TotalCount.textContent = `Total tasks: ${counter.getCount()}`
}


    //toggle
    
    function  toggleTask (id) {
        const t = task.find(t => t.id ===id)
        if(t) t.done = !t.done
        renderTasks()
        LastAc.textContent = `Last action: Marked "${t.text}" as ${t.done ? "done" : "not done"}`
        li.addEventListener('click' , () => toggleTask(t.id))

    }

    // delete task

    function deleteTask(id) {
     const deleted = task.find(t => t.id === id)
        task = task.filter(t => t.id !== id)
     counter.decrease()
     renderTasks()
        if(deleted) LastAc.textContent = `Last action: Deleted "${deleted.text}"`
    }

        addBtn.addEventListener('click' , Addtask)
    
    AddInput.addEventListener('keypress',(e) => {
        if (e.key === 'Enter') Addtask()
    })
    
   

