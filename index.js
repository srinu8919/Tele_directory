 var todolist = ['{"name": "srinivas" , "phone": "9182251380" }'];
            for(var i=0; i<todolist.length;i++){
                var jsparse=JSON.parse(todolist[i]);
                var a = document.createElement('tr');
                a.innerHTML= "<td>"+jsparse.name+"</td><td>"+jsparse.phone+"</td>";
                document.getElementById('showtable').appendChild(a);
            }
            const addtask = () =>{
                var text = document.getElementById('name').value;
                var number = document.getElementById('number').value;
                var demo = '{ "name":'+text +' , "phone":'+number +'}'; 
                todolist.push(demo);
                var a = document.createElement('tr');
                a.innerHTML= "<td>"+text+"</td><td>"+number+"</td>";
                document.getElementById('showtable').appendChild(a);
                document.getElementById('name').value = ""
                document.getElementById('number').value = ""
            }