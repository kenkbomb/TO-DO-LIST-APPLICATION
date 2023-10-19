

$("#button").click(function()
{
    let li = $('<li></li>');
    let inputval = $('#input').val();
    li.append(inputval);


    
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    // $(crossOutButton).addClass('crossOutButton');
    li.append(crossOutButton);
    
    



    $('#list').append(li);
  

        $('li').on('dblclick', function()
    {
        // alert(this.innerText);
        let listItem = $(this);
        listItem.addClass('strike');

    });
    

    $('crossOutButton').on('click', function()
    {
            
        let listItem = $(this).parent();
        listItem.addClass('delete');
        // alert('test');


    });

    $('#list').sortable();
});






