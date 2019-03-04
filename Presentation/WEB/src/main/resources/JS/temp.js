$(function() {
    setTimeout(function () {
        var source = $("#test-template").html();
        var template = Handlebars.compile(source);

        $('body').append(template);
    }, 0000);

    Handlebars.registerHelper('if_eq', function() {
        console.log('if_eq start')
    });
});