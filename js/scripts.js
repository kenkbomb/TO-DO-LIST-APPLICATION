

$("#button").click(function()
{
    let li = $('<li></li>');
    let inputval = $('#input').val();
    li.append(inputval);


    // let inputval =  $('#input').val();
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    $(crossOutButton).addClass('crossOutButton');
    li.append(crossOutButton);
    // inputval.append(crossOutButton);
    



    $('#list').append(li);//adds the <li> element as the value taken from the form and also on this line, appends another 'button' element to the <li>....
  

        $('li').on('dblclick', function()
    {
        alert(this.innerText);
        let listItem = $(this);
        listItem.addClass('strike');

    });
    

    $('crossOutButton').on('click', function()
    {
            
        let listItem = $(this).parent();
        listItem.addClass('delete');
        alert('test');


    });

    $('#list').sortable();
});






