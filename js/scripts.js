

$("#button").click(function()
{
    let inputval =  $('#input').val();
    $('#list').append('<li>'+inputval+'</li>');
   
    
});





$('.item').on('click', function()
{
    alert(this.innerText);
});