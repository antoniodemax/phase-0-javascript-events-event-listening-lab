function addingEventListener() {
    //Get the element
    const input = document.getElementById('button');

    //An event listener is being defined inorder to be called(anonymous/named function)
    function clickAlert() {
        alert('click me!');
    }
    input.addEventListener('click', clickAlert);
}
    addingEventListener();//call the function

