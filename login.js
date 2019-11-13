function loadLogin(){
    hide();
}

function hide(){
    document.getElementsByClassName('profile')[0].style.display = 'none';
    document.getElementsByClassName('welcome')[0].style.display = 'none';
    document.getElementsByClassName('name')[0].style.display = 'none';
    document.getElementById('dropdown').style.display = 'none';

    document.getElementsByClassName('login')[0].style.display = 'block';
}

function show(){
    document.getElementsByClassName('profile')[0].style.display = 'block';
    document.getElementsByClassName('welcome')[0].style.display = 'block';
    document.getElementsByClassName('name')[0].style.display = 'block';
    document.getElementById('dropdown').style.display = 'block';

    document.getElementsByClassName('login')[0].style.display = 'none';
}

function login(){
    show();
    showModal();
}

loadLogin();
