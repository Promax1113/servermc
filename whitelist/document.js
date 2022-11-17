function WriteToFile(passForm) { 
 
    fso = CreateObject("Scripting.FileSystemObject");  
    s = fso.CreateTextFile("/username.txt", True); 
 
    var username = document.getElementById('uName'); 
 
    s.writeline("First Name :" + FirstName); 
    s.writeline("Last Name :" + lastName); 
 
    s.writeline("-----------------------------"); 
    s.Close(); 
 } 