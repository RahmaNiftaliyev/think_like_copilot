// !HTML elements 
let button, input, textBox, initial_message, life, life_counter, rnd_number;
button = document.getElementById( "button" );
input = document.getElementById( "number" );
textBox = document.getElementById( "textBox" );
life_counter = document.getElementById( "lifeCounter" );
// !Global variables
initial_message = 'System message is:';
rnd_number = Math.floor( Math.random() * 10 ) + 1;
life = 3;



eventListeners();


function eventListeners ()
{
    button.addEventListener( "click", gameStartController );
}



function gameStartController ()
{

    let player_choise = input.value.trim();
    let player_choise_int = parseInt( player_choise );


    try
    {
        if ( player_choise === "" ) throw 'pls insert number 1 - 10';
        if ( player_choise_int > 10 || player_choise_int < 1 ) throw `${ player_choise_int < 1 ? 'under condition error' : 'upper condition error' } `
        if ( isNaN( player_choise_int ) ) throw 'insert only integer value';
        game_start( player_choise_int, rnd_number, life, textBox, initial_message );
    } catch ( paramsThrow )
    {
        textBox.textContent = initial_message + ' ' + paramsThrow
    } finally
    {

        finally_block_handler( textBox, input, life_counter, life, initial_message );

    }

}



function finally_block_handler ( params_text_box, params_input, params_life_counter, params_counter, params_initial_message )
{
    params_input.value !== "" ? params_input.value = "" : null;
    params_life_counter.textContent = params_counter;
    setTimeout( () => system_message_handler( params_text_box, params_initial_message ), 2500 );

}

function system_message_handler ( params_text_box, params_initial_message )
{
    params_text_box.textContent = params_initial_message;
}



function game_start ( params_player, params_rnd_number, params_life, params_text_box, params_system_message )
{
    if ( params_player === params_rnd_number )
    {
        winner( params_text_box, `${ params_system_message }  lucky number is ${ params_player } winner`, reloader )

    } else
    {

        life--;
        params_life = life;
        looser( params_life > 0, reloader, params_text_box, params_life > 0 ? `${ params_system_message } wrong choice` : undefined )
    }
}


function winner ( param2_text_box, params_message, callback )
{

    param2_text_box.textContent = params_message
    callback()
}

function looser ( //!parameter block

    params_content_logic,
    callback,
    params_text_box,
    params_message_logic = `${ initial_message } your life is ${ life } true number is ${ rnd_number }`

)
{  // !code block
    params_text_box.textContent = params_message_logic;

    if ( !params_content_logic )
    {

        callback()
    }
}



function reloader ()
{
    setTimeout( function ()
    {
        location.reload()
    }, 2500 )
}