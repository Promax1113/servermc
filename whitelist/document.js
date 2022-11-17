function WriteToFile(passForm) { 
 
    fso = CreateObject("Scripting.FileSystemObject");  
    s = fso.CreateTextFile("/username.txt", True); 
 
    var username = document.getElementById('uName'); 
 
    s.writeline("user: ", username); 
 
    s.writeline("-----------------------------"); 
    s.Close(); 
 } 