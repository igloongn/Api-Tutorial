$(document).ready(function () {
    $('#msg').hide();
    $('#myform').submit(function (e) { 
        e.preventDefault();
        url=$(this).attr("action");
        formdata=$(this).serialize();

        $.ajax({
            type: "POST",
            url: url,
            data: formdata,
            success: (res) => {
                console.log("This is the call Back Normal"+ res)
                var res=JSON.parse(res)
                console.log(res)
                // console.log(res.firstname)
                $('#msg').addClass("alert alert-success");
                $('#msg').text("Your firstname is "+ res.firstname);
            }
        });
        $('#msg').show();

    });
});