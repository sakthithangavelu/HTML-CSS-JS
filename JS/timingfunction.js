var id = 0;
var message = () => alert("Welcome");
function start()
{
    //  id = setTimeout(message,3000)
    id = setInterval(message,3000)
}
function stop()
{
    clearTimeout(id); 
}