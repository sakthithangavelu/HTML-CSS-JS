/* 
var rectangle = new Object();
    rectangle.length = 10;
    rectangle.width = 20;

    rectangle.area = function()
    {
        return (this.length*this.width)
    }

    rectangle.perimeter = function()
    {
        return (2*(this.length+this.width))
    }

    document.write(rectangle.area());
    document.write(rectangle.perimeter());
*/


function reactangle(length,width)
{
    this.length = length;
    this.width = width;

    this.getarea =function()
    {
        return length*width;
    }

    this.getperi = function ()
    {
        return 2*length*width;
    }
}
var rec = new reactangle(10,20);
    document.write(rec.getarea());
    document.write(rec.getperi());