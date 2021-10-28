$(function(){
    $("#nombre").click(function(){
        $("#name").css('border-color', '#fff');
        $("#email").css('border-color', '#3d3660');
        $("#password").css('border-color', '#3d3660');
        $("#confirm").css('border-color', '#3d3660');
    });
    $("#correo").click(function(){
        $("#email").css('border-color', '#fff');
        $("#name").css('border-color', '#3d3660');
        $("#password").css('border-color', '#3d3660');
        $("#confirm").css('border-color', '#3d3660');
    });
    $("#passwordd").click(function(){
        $("#password").css('border-color', '#fff');
        $("#name").css('border-color', '#3d3660');
        $("#email").css('border-color', '#3d3660');
        $("#confirm").css('border-color', '#3d3660');
    });
    $("#confirma").click(function(){
        $("#confirm").css('border-color', '#fff');
        $("#name").css('border-color', '#3d3660');
        $("#email").css('border-color', '#3d3660');
        $("#password").css('border-color', '#3d3660');
    });
    // $(".formulario").click(function(){
    //     $("#confirm").css('border-color', '#3d3660');
    //     $("#name").css('border-color', '#3d3660');
    //     $("#email").css('border-color', '#3d3660');
    //     $("#password").css('border-color', '#3d3660');
    // });
    $(".action").click(function(){
        $(".registroexitoso").show();
        $(".completo").hide();
    })
});