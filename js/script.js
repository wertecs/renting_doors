$(document).ready(
    function () {

        var price = 25000;

        var changePrice = function (e) {
            console.log(e);
            var years = price / monthly.getValue();
            $("#years").value(years);
        };

        var monthly = $("#money").slider({
            ticks: [300, 500, 1000, 1500, 2000, 2500, 3000, 3500],

            ticks_labels: ['$300', '$500', '$1000', '$1500', '$2000', '$300', '$500', '$1000'],
            ticks_snap_bounds: 30
        }).on('slide', function () {
            console.log("aa");
            $("#years").val("1");
        });


    }
);