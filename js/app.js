const Table = document.querySelector("#Table")
const InputText = document.querySelector("#InputText")
const InputSubmit = document.querySelector("#InputSubmit")


let NewArray = [
    {id:1,todo:"derse get",},
    {id:2,todo:"derse getme",},
    {id:3,todo:"derse gedirsen",},
    {id:4,todo:"dersden gelir",},
]
const TableEdit = (NewID) =>{
    NewArray.forEach((item) =>{
        if(item.id === NewID){
            let mesaj = prompt("Mesaj daxil et", item.todo)
            item.todo = mesaj
            
            
            
        }
        
    })
    TableShow(NewArray)
}
let NewArray2 = []


InputSubmit.addEventListener("click",(e) =>{
    
    if(InputText.value !== ""){
        e.preventDefault()
    NewArray.push({id:Date.now(),todo:InputText.value})
    InputText.value = ""
    TableShow(NewArray)
        
    }else{
        alert("bos todo gondere bilmezsiz")
    }
})



const TableShow = (array) =>{
    Table.innerHTML = ""
    array.forEach((element,index) => {
        Table.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${element.todo}</td>
                <td onclick="(TableEdit(${element.id}))">edit</td>
                <td onclick=(TableDelete(${element.id}))>delete</td>
            </tr>`
            
            
    });
    
}
const TableDelete = (NewID) =>{
    NewArray.forEach((item,index) =>{
        
     if(NewID === item.id){
         NewArray.splice(index, 1)
     }
        
        
        
    })
    TableShow(NewArray)
 } 
TableShow(NewArray)

