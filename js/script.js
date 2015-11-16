$(document).ready(
    function () {

        var price = 25000;

        var changePrice = function (e) {
            console.log(e);
            var months = Math.ceil(price / e);

            var monthsSplit = months % 12;
            var years = (months - monthsSplit) / 12;

            $("#months").val(monthsSplit);
            $("#years").val(years);
        };

        var monthly = $("#money").slider({
            ticks: [300, 500, 1000, 1500, 2000, 2500, 3000, 3500],

            ticks_labels: ['$300', '$500', '$1000', '$1500', '$2000', '$300', '$500', '$1000'],
            ticks_snap_bounds: 30
        });

        monthly.on('slide', function () {
            changePrice(monthly.slider('getValue'));
        });


        monthly.slider('setValue', 500);
        changePrice(monthly.slider('getValue'));
    }
);