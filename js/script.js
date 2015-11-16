$(document).ready(
    function () {

        var labelM = $("label[for='" + $("#months").attr('id') + "']");
        var labelY = $("label[for='" + $("#years").attr('id') + "']");


        var changePrice = function (e) {
            // console.log(e);

            if (e === 0) {
                $("#months").val(0);
                $("#years").val(0);
                return;
            }

            var months = Math.ceil($("#price").val() / e);

            var monthsSplit = months % 12;
            var years = (months - monthsSplit) / 12;

            $("#months").val(monthsSplit);
            $("#years").val(years);

            //may odin forgive me, but I've got no time
            if (monthsSplit === 1) {
                labelM.text("mesiac");
            }

            else if (monthsSplit === 2 || monthsSplit === 3 || monthsSplit === 4) {
                labelM.text("mesiace");
            }
            else {
                labelM.text("mesiacov");
            }


            if (years === 1) {
                labelY.text("rok");
            }

            else if (years === 2 || years === 3 || years === 4) {
                labelY.text("roky");
            }
            else {
                labelY.text("rokov");
            }

        };

        var monthly = $("#money").slider({
            ticks: [0, 300, 500, 1000, 1500, 2000, 2500, 3000, 3500],
            ticks_labels: ['0', '300 kc', '500 kc', '1000 kc', '1500 kc', '2000 kc', '2500 kc', '3000 kc', '3500 kc'],
            ticks_positions: [0, 9, 14, 28, 42, 57, 71, 85, 100],
            ticks_snap_bounds: 10,
            tooltip: 'always'
        });

        monthly.on('slide', function () {
            changePrice(monthly.slider('getValue'));
        });


        monthly.slider('setValue', 500);
        changePrice(monthly.slider('getValue'));

        $("#price").change(function () {
            changePrice(monthly.slider('getValue'));
        });

        $(".slider-track").click(function () {
            changePrice(monthly.slider('getValue'));
        });


    }
);