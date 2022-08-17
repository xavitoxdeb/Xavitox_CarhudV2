window.addEventListener("message", (event) => {
    var v = event.data;
    var dollar = Intl.NumberFormat('en-US');
    switch (v.action) {

    case 'showCarHud': 
        $('.velocidad').text(v.velo.toFixed(0));
        $('.gasolina').text(v.gaso.toFixed(0));
        $('.estadom').html(v.estadomotor.toFixed(2));
        if (v.cinturon == true) {
            $('.on span').text('ON');
            $('.on').css({'color':'green'})
        } else if(v.cinturon == false) {
            $('.on span').text('OFF');
            $('.on').css({'color':'red'})
        }
        $('.container').show(500)
    break;

    case 'hideCarHud':
        $('.container').hide(500)
    break;

    }
});