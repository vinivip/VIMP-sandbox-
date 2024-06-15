function selectItem(item){
    $(item).addClass('selected');
}
function unselectItem(item){
    $(item).removeClass('selected');
    
}

function enableItem(item){
    $(item).addClass('enabled');
    $(item).on('click',rendermins)
}
function disableItem(item){
    $(item).removeClass('enabled');
    unselectItem(item)
}
