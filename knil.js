$(function () {
                //zelda game
                $(document).ready(function () {
                    $(document).disableSelection();
                    $('#win').hide();
                    $('#bat1').hide();
                    $('#bat2').hide();
                    $('#tri').hide();
                    $('#inst').click(function () {
                        alert("Welcome to Knil's Arena \nW = up \nA = left \nS = down \nD = right \nClick space bar to use sword \nKill All the Enemies to get the Null-force");
                    });
                    $('#res').click(function () {
                        location.reload();
                    });

                    $(document).keydown(function (key) {

                        //boss fight

                        function boss() {
                            if ($('#octo1').attr('src') === 'https://lh4.googleusercontent.com/-C524klF9MpQ/VULSMYTRzWI/AAAAAAAAAHQ/1Y4FzWDHuVA/s25-no/fire.png' && $('#octo').attr('src') === 'https://lh4.googleusercontent.com/-C524klF9MpQ/VULSMYTRzWI/AAAAAAAAAHQ/1Y4FzWDHuVA/s25-no/fire.png' && $('#chicken').attr('src') === 'https://lh4.googleusercontent.com/-C524klF9MpQ/VULSMYTRzWI/AAAAAAAAAHQ/1Y4FzWDHuVA/s25-no/fire.png' && $('#midna').attr('src') === 'https://lh4.googleusercontent.com/-C524klF9MpQ/VULSMYTRzWI/AAAAAAAAAHQ/1Y4FzWDHuVA/s25-no/fire.png' && $('#heads').attr('src') === 'https://lh4.googleusercontent.com/-C524klF9MpQ/VULSMYTRzWI/AAAAAAAAAHQ/1Y4FzWDHuVA/s25-no/fire.png') {
                                $('#game').css('background-size', 'cover');
                                $('#game').css('background-image', 'url(https://lh3.googleusercontent.com/atvSdLm5Zhgk2P7VTqBKbV-YqMKCZLIjJ7YQQMXUMb0=w331-h207-p-no)');
                                $('#bat1').fadeIn();
                                $('#bat2').fadeIn();
                                alert('Fight The Bosses');
                            } else {
                                $('#game').css('background-size','100%');
                                $('#game').css('background-image', 'url(zeldabackground1.jpg)');
                            }
                        }

                        //triforce

                        function triforce() {
                            if ($('#bat1').attr('src') === 'https://lh4.googleusercontent.com/-C524klF9MpQ/VULSMYTRzWI/AAAAAAAAAHQ/1Y4FzWDHuVA/s25-no/fire.png' && $('#bat2').attr('src') === 'https://lh4.googleusercontent.com/-C524klF9MpQ/VULSMYTRzWI/AAAAAAAAAHQ/1Y4FzWDHuVA/s25-no/fire.png') {
                                $('#game').css('background-size', 'cover');
                                $('#game').css('background-image', 'url(https://lh3.googleusercontent.com/LgywQYSeGkM8LiIVwtkaWb0iyZPs-rmB4qF8YRxDlnw=w276-h207-p-no)');
                                $('#tri').fadeIn();
                            } else {
                                $('#tri').hide();
                            }
                        }

                        //attack enemy 

                        switch (parseInt(key.which, 10)) {
                            case 32:
                                var oct1 = $('#octo1').position();
                                var bat1 = $('#bat1').position();
                                var bat2 = $('#bat2').position();
                                var x = $('#link').position();
                                var y = $('#octo').position();
                                var z = $('#heads').position();
                                var w = $('#chicken').position();
                                var h = $('#midna').position();

                                if (x.top >= (y.top - 30) && x.top <= (y.top + 30) && x.left >= (y.left - 30) && x.left <= (y.left + 30)) {
                                    $('#octo').attr('src', 'https://lh4.googleusercontent.com/-C524klF9MpQ/VULSMYTRzWI/AAAAAAAAAHQ/1Y4FzWDHuVA/s25-no/fire.png');
                                    $('#octo').effect('explode', 'fast');
                                    boss();

                                } else if (x.top >= (z.top - 30) && x.top <= (z.top + 30) && x.left >= (z.left - 30) && x.left <= (z.left + 30)) {
                                    $('#heads').stop();
                                    $('#heads').attr('src', 'https://lh4.googleusercontent.com/-C524klF9MpQ/VULSMYTRzWI/AAAAAAAAAHQ/1Y4FzWDHuVA/s25-no/fire.png');
                                    $('#heads').effect('explode', 'fast');
                                    boss();

                                } else if (x.top >= (bat1.top - 30) && x.top <= (bat1.top + 30) && x.left >= (bat1.left - 30) && x.left <= (bat1.left + 30)) {
                                    $('#bat1').stop();
                                    $('#bat1').attr('src', 'https://lh4.googleusercontent.com/-C524klF9MpQ/VULSMYTRzWI/AAAAAAAAAHQ/1Y4FzWDHuVA/s25-no/fire.png');
                                    $('#bat1').effect('explode', 'fast');
                                    triforce();

                                } else if (x.top >= (bat2.top - 30) && x.top <= (bat2.top + 30) && x.left >= (bat2.left - 30) && x.left <= (bat2.left + 30)) {
                                    $('#bat2').stop();
                                    $('#bat2').attr('src', 'https://lh4.googleusercontent.com/-C524klF9MpQ/VULSMYTRzWI/AAAAAAAAAHQ/1Y4FzWDHuVA/s25-no/fire.png');
                                    $('#bat2').effect('explode', 'fast');
                                    triforce();

                                } else if (x.top >= (oct1.top - 20) && x.top <= (oct1.top + 20) && x.left >= (oct1.left - 20) && x.left <= (oct1.left + 20)) {
                                    $('#octo1').stop();
                                    $('#octo1').attr('src', 'https://lh4.googleusercontent.com/-C524klF9MpQ/VULSMYTRzWI/AAAAAAAAAHQ/1Y4FzWDHuVA/s25-no/fire.png');
                                    $('#octo1').effect('explode', 'fast');
                                    boss();

                                } else if (x.top >= (w.top - 25) && x.top <= (w.top + 25) && x.left >= (w.left - 30) && x.left <= (w.left + 30)) {
                                    $('#chicken').stop();
                                    $('#chicken').attr('src', 'https://lh4.googleusercontent.com/-C524klF9MpQ/VULSMYTRzWI/AAAAAAAAAHQ/1Y4FzWDHuVA/s25-no/fire.png');
                                    $('#chicken').effect('explode', 'fast');
                                    boss();

                                } else if (x.top >= (h.top - 10) && x.top <= (h.top + 60) && x.left >= (h.left - 10) && x.left <= (h.left + 50)) {
                                    $('#midna').attr('src', 'https://lh4.googleusercontent.com/-C524klF9MpQ/VULSMYTRzWI/AAAAAAAAAHQ/1Y4FzWDHuVA/s25-no/fire.png');
                                    $('#midna').effect('explode', 'slow');
                                    boss();
                                }

                                if ($('#link').attr('src') === 'https://lh5.googleusercontent.com/-DSKyTQfVgoM/VUAXGRXe9EI/AAAAAAAAACw/SJz67HCVcP4/w28-h25-no/2left.png') {
                                    $('#link').attr('src', 'https://lh5.googleusercontent.com/-nFXQtGUOGq0/VUAqYwHZW7I/AAAAAAAAAEo/-ip8l5IxkhE/w33-h25-no/swordleft.png');
                                } else if ($('#link').attr('src') === 'https://lh5.googleusercontent.com/-QyNFjHv-VQQ/VUATpeLwJuI/AAAAAAAAACM/8fXnlfFZdFo/w28-h25-no/linkleft.png') {
                                    $('#link').attr('src', 'https://lh5.googleusercontent.com/-nFXQtGUOGq0/VUAqYwHZW7I/AAAAAAAAAEo/-ip8l5IxkhE/w33-h25-no/swordleft.png');

                                    //Sword Right 

                                } else if ($('#link').attr('src') === 'https://lh3.googleusercontent.com/-82DDQbaZR6c/VUATqFWj1vI/AAAAAAAAACU/3twHZ1qlrO4/w28-h25-no/linkright.png' || $('#link').attr('src') === 'https://lh5.googleusercontent.com/-Y3HO2r2daak/VUAXGgZmqgI/AAAAAAAAADA/y3d2in6QMmg/w28-h25-no/2right.png') {
                                    $('#link').attr('src', 'https://lh3.googleusercontent.com/-Y1KX-Kyen08/VUAqZPZyerI/AAAAAAAAAE4/T4aD9bwRWEU/w33-h25-no/swordright.png');

                                    //Sword Up

                                } else if ($('#link').attr('src') === 'https://lh3.googleusercontent.com/-q2oBJ_G0D1I/VUAXGxZhBGI/AAAAAAAAAC8/0oFZdxKMzCE/w28-h25-no/2up.png' || $('#link').attr('src') === 'https://lh5.googleusercontent.com/-WEWw4m4LKlQ/VUBKXo3w14I/AAAAAAAAAGo/PLlH-KZT50I/w28-h25-no/linkup.png') {
                                    $('#link').attr('src', 'https://lh3.googleusercontent.com/--CZKEUpJJnE/VUAqZF-ap5I/AAAAAAAAAE0/ji8TqK8EjI8/w32-h33-no/swordup.png');

                                    //Sword Down

                                } else if ($('#link').attr('src') === 'https://lh5.googleusercontent.com/-WHLiaO4SVzQ/VUAJj_oojOI/AAAAAAAAABY/Y3W5t9ZVpOo/w25-h31-no/linkdown.png' || $('#link').attr('src') === 'https://lh5.googleusercontent.com/-HME5DD3bmeY/VUAXGSTYbPI/AAAAAAAAAC0/9hJgxTOzRyU/w28-h25-no/2down.png') {
                                    $('#link').attr('src', 'https://lh3.googleusercontent.com/-dbmqDYs2Jog/VUAqY-5REKI/AAAAAAAAAEk/5Kse9obYZJ4/w32-h33-no/sworddown.png');
                                }
                                break;

                        }
                    });
                    //movement and bounce off
                    $(document).keyup(function (key) {

                        var tri = $('#tri').position();
                        var bat2 = $('#bat2').position();
                        var bat1 = $('#bat1').position();
                        var oct1 = $('#octo1').position();
                        var x = $('#link').position();
                        var y = $('#octo').position();
                        var w = $('#chicken').position();
                        var z = $('#heads').position();
                        var h = $('#midna').position();

                        // health loss
                        function health() {
                            if ($('#a').attr('src') === 'https://lh3.googleusercontent.com/-qn3bvmxEQtU/VULfqpD-qEI/AAAAAAAAAH4/bJ8Y40Nkxz4/s11-no/heart.png' && $('#health3').attr('src') === 'https://lh3.googleusercontent.com/-qn3bvmxEQtU/VULfqpD-qEI/AAAAAAAAAH4/bJ8Y40Nkxz4/s11-no/heart.png') {
                                $('#a').attr('src', 'https://lh5.googleusercontent.com/-TH0Ck_OH6b4/VULkqJV3TQI/AAAAAAAAAIM/Vob3ZER4e-w/s11-no/heartgrey.png');
                            } else if ($('#a').attr('src') === 'https://lh5.googleusercontent.com/-TH0Ck_OH6b4/VULkqJV3TQI/AAAAAAAAAIM/Vob3ZER4e-w/s11-no/heartgrey.png' && $('#health3').attr('src') === 'https://lh3.googleusercontent.com/-qn3bvmxEQtU/VULfqpD-qEI/AAAAAAAAAH4/bJ8Y40Nkxz4/s11-no/heart.png') {
                                $('#health3').attr('src', 'https://lh5.googleusercontent.com/-TH0Ck_OH6b4/VULkqJV3TQI/AAAAAAAAAIM/Vob3ZER4e-w/s11-no/heartgrey.png');
                            } else if ($("#health3").attr('src') === 'https://lh5.googleusercontent.com/-TH0Ck_OH6b4/VULkqJV3TQI/AAAAAAAAAIM/Vob3ZER4e-w/s11-no/heartgrey.png' && $('#a').attr('src') === 'https://lh5.googleusercontent.com/-TH0Ck_OH6b4/VULkqJV3TQI/AAAAAAAAAIM/Vob3ZER4e-w/s11-no/heartgrey.png') {
                                $('#health2').attr('src', 'https://lh5.googleusercontent.com/-TH0Ck_OH6b4/VULkqJV3TQI/AAAAAAAAAIM/Vob3ZER4e-w/s11-no/heartgrey.png');
                                alert('you died');
                                alert('Game Over');
                                location.reload();
                            }

                        }

                        switch (parseInt(key.which, 10)) {
                            // (65 = A)
                            case 65:
                                //Bounce off enemy
                                if (x.top >= (y.top - 25) && x.top <= (y.top + 25) && x.left >= (y.left - 25) && x.left <= (y.left + 25)) {
                                    $('#link').animate({
                                        left: '+=20px'
                                    }, 'fast');
                                    health();
                                } else if (x.top >= (tri.top - 25) && x.top <= (tri.top + 25) && x.left >= (tri.left - 25) && x.left <= (tri.left + 25)) {
                                    $('#tri').fadeOut();
                                    $('#link').fadeOut();
                                    $('#win').fadeIn();
                                    alert('Congratulations You Got The Null-force');


                                } else if (x.top >= (z.top - 25) && x.top <= (z.top + 25) && x.left >= (z.left - 25) && x.left <= (z.left + 25)) {
                                    $('#link').animate({
                                        left: '+=20px'
                                    }, 'fast');
                                    health();
                                } else if (x.top >= (bat1.top - 25) && x.top <= (bat1.top + 25) && x.left >= (bat1.left - 25) && x.left <= (bat1.left + 25)) {
                                    $('#link').animate({
                                        left: '+=20px'
                                    }, 'fast');
                                    health();
                                } else if (x.top >= (bat2.top - 25) && x.top <= (bat2.top + 25) && x.left >= (bat2.left - 25) && x.left <= (bat2.left + 25)) {
                                    $('#link').animate({
                                        left: '+=20px'
                                    }, 'fast');
                                    health();
                                } else if (x.top >= (oct1.top - 10) && x.top <= (oct1.top + 10) && x.left >= (oct1.left - 10) && x.left <= (oct1.left + 10)) {
                                    $('#link').animate({
                                        left: '+=20px'
                                    }, 'fast');
                                    health();
                                } else if (x.top >= (w.top - 15) && x.top <= (w.top + 15) && x.left >= (w.left - 15) && x.left <= (w.left + 15)) {
                                    $('#link').animate({
                                        left: '+=20px'
                                    }, 'fast');
                                    health();
                                } else if (x.top >= (h.top - 5) && x.top <= (h.top + 55) && x.left >= (h.left - 5) && x.left <= (h.left + 45)) {
                                    $('#link').animate({
                                        left: '+=20px'
                                    }, 'fast');
                                    health();
                                }
                                //moves left               

                                $('#link').animate({
                                    left: "-=10px"
                                }, 'fast');
                                //walking Animation               
                                if ($('#link').attr('src') === 'https://lh5.googleusercontent.com/-DSKyTQfVgoM/VUAXGRXe9EI/AAAAAAAAACw/SJz67HCVcP4/w28-h25-no/2left.png') {
                                    $('#link').attr('src', 'https://lh5.googleusercontent.com/-QyNFjHv-VQQ/VUATpeLwJuI/AAAAAAAAACM/8fXnlfFZdFo/w28-h25-no/linkleft.png');
                                } else {
                                    $('#link').attr('src', 'https://lh5.googleusercontent.com/-DSKyTQfVgoM/VUAXGRXe9EI/AAAAAAAAACw/SJz67HCVcP4/w28-h25-no/2left.png');
                                }
                                break;


                            case 87:
                                //Move up (87 = W)

                                //Bounce off enemy 

                                if (x.top >= (y.top - 25) && x.top <= (y.top + 25) && x.left >= (y.left - 20) && x.left <= (y.left + 20)) {
                                    health();
                                    $('#link').animate({
                                        top: '+=20px'
                                    }, 'fast');
                                } else if (x.top >= (tri.top - 25) && x.top <= (tri.top + 25) && x.left >= (tri.left - 25) && x.left <= (tri.left + 25)) {
                                    $('#tri').fadeOut();
                                    $('#link').fadeOut();
                                    $('#win').fadeIn();
                                    alert('Congratulations You Got The Triforce');

                                } else if (x.top >= (bat2.top - 25) && x.top <= (bat2.top + 25) && x.left >= (bat2.left - 25) && x.left <= (bat2.left + 25)) {
                                    $('#link').animate({
                                        top: '+=20px'
                                    }, 'fast');
                                    health();
                                } else if (x.top >= (bat1.top - 25) && x.top <= (bat1.top + 25) && x.left >= (bat1.left - 25) && x.left <= (bat1.left + 25)) {
                                    $('#link').animate({
                                        top: '+=20px'
                                    }, 'fast');
                                    health();
                                } else if (x.top >= (z.top - 25) && x.top <= (z.top + 25) && x.left >= (z.left - 25) && x.left <= (z.left + 25)) {
                                    $('#link').animate({
                                        top: '+=20px'
                                    }, 'fast');
                                    health();
                                } else if (x.top >= (oct1.top - 10) && x.top <= (oct1.top + 10) && x.left >= (oct1.left - 10) && x.left <= (oct1.left + 10)) {
                                    $('#link').animate({
                                        top: '+=20px'
                                    }, 'fast');
                                    health();
                                } else if (x.top >= (w.top - 15) && x.top <= (w.top + 15) && x.left >= (w.left - 15) && x.left <= (w.left + 15)) {
                                    $('#link').animate({
                                        top: '+=20px'
                                    }, 'fast');
                                    health();
                                } else if (x.top >= (h.top - 5) && x.top <= (h.top + 55) && x.left >= (h.left - 5) && x.left <= (h.left + 45)) {
                                    $('#link').animate({
                                        top: '+=20px'
                                    }, 'fast');
                                    health();
                                }
                                //Move up                
                                $('#link').animate({
                                    top: "-=10px"
                                }, 'fast');

                                if ($('#link').attr('src') === 'https://lh5.googleusercontent.com/-WEWw4m4LKlQ/VUBKXo3w14I/AAAAAAAAAGo/PLlH-KZT50I/w28-h25-no/linkup.png') {
                                    $('#link').attr('src', 'https://lh3.googleusercontent.com/-q2oBJ_G0D1I/VUAXGxZhBGI/AAAAAAAAAC8/0oFZdxKMzCE/w28-h25-no/2up.png');
                                } else {
                                    $('#link').attr('src', 'https://lh5.googleusercontent.com/-WEWw4m4LKlQ/VUBKXo3w14I/AAAAAAAAAGo/PLlH-KZT50I/w28-h25-no/linkup.png');
                                }
                                break;

                            case 68:
                                //Move right (68 = D)
                                //Bounce off enemy 

                                if (x.top >= (y.top - 25) && x.top <= (y.top + 25) && x.left >= (y.left - 20) && x.left <= (y.left + 20)) {
                                    $('#link').animate({
                                        left: '-=20px'
                                    }, 'fast');
                                    health();
                                } else if (x.top >= (tri.top - 25) && x.top <= (tri.top + 25) && x.left >= (tri.left - 25) && x.left <= (tri.left + 25)) {
                                    $('#tri').fadeOut();
                                    $('#link').fadeOut();
                                    $('#win').fadeIn();
                                    alert('Congratulations You Got The Triforce');


                                } else if (x.top >= (bat1.top - 25) && x.top <= (bat1.top + 25) && x.left >= (bat1.left - 25) && x.left <= (bat1.left + 25)) {
                                    $('#link').animate({
                                        left: '-=20px'
                                    }, 'fast');
                                    health();
                                } else if (x.top >= (bat2.top - 25) && x.top <= (bat2.top + 25) && x.left >= (bat2.left - 25) && x.left <= (bat2.left + 25)) {
                                    $('#link').animate({
                                        left: '-=20px'
                                    }, 'fast');
                                    health();
                                } else if (x.top >= (oct1.top - 10) && x.top <= (oct1.top + 10) && x.left >= (oct1.left - 10) && x.left <= (oct1.left + 10)) {
                                    $('#link').animate({
                                        left: '-=20px'
                                    }, 'fast');
                                    health();
                                } else if (x.top >= (z.top - 25) && x.top <= (z.top + 25) && x.left >= (z.left - 25) && x.left <= (z.left + 25)) {
                                    $('#link').animate({
                                        left: '-=20px'
                                    }, 'fast');
                                    health();
                                } else if (x.top >= (w.top - 15) && x.top <= (w.top + 15) && x.left >= (w.left - 15) && x.left <= (w.left + 15)) {
                                    $('#link').animate({
                                        left: '-=20px'
                                    }, 'fast');
                                    health();
                                } else if (x.top >= (h.top - 5) && x.top <= (h.top + 55) && x.left >= (h.left - 5) && x.left <= (h.left + 25)) {
                                    $('#link').animate({
                                        left: '-=20px'
                                    }, 'fast');
                                    health();
                                }
                                //Moves                
                                $('#link').animate({
                                    left: "+=10px"
                                }, 'fast');

                                if ($('#link').attr('src') === 'https://lh3.googleusercontent.com/-82DDQbaZR6c/VUATqFWj1vI/AAAAAAAAACU/3twHZ1qlrO4/w28-h25-no/linkright.png') {
                                    $('#link').attr('src', 'https://lh5.googleusercontent.com/-Y3HO2r2daak/VUAXGgZmqgI/AAAAAAAAADA/y3d2in6QMmg/w28-h25-no/2right.png');
                                } else {
                                    $('#link').attr('src', 'https://lh3.googleusercontent.com/-82DDQbaZR6c/VUATqFWj1vI/AAAAAAAAACU/3twHZ1qlrO4/w28-h25-no/linkright.png');
                                }
                                break;

                            case 83:
                                //move down (83 = S)
                                //Bounce off enemy 

                                if (x.top >= (y.top - 25) && x.top <= (y.top + 25) && x.left >= (y.left - 20) && x.left <= (y.left + 20)) {
                                    $('#link').animate({
                                        top: '-=20px'
                                    }, 'fast');
                                    health();
                                } else if (x.top >= (tri.top - 25) && x.top <= (tri.top + 25) && x.left >= (tri.left - 25) && x.left <= (tri.left + 25)) {
                                    $('#tri').fadeOut();
                                    $('#link').fadeOut();
                                    $('#win').fadeIn();
                                    alert('Congratulations You Got The Triforce');

                                } else if (x.top >= (bat2.top - 25) && x.top <= (bat2.top + 25) && x.left >= (bat2.left - 25) && x.left <= (bat2.left + 25)) {
                                    $('#link').animate({
                                        top: '-=20px'
                                    }, 'fast');
                                    health();
                                } else if (x.top >= (bat1.top - 25) && x.top <= (bat1.top + 25) && x.left >= (bat1.left - 25) && x.left <= (bat1.left + 25)) {
                                    $('#link').animate({
                                        top: '-=20px'
                                    }, 'fast');
                                    health();
                                } else if (x.top >= (oct1.top - 10) && x.top <= (oct1.top + 10) && x.left >= (oct1.left - 10) && x.left <= (oct1.left + 10)) {
                                    $('#link').animate({
                                        top: '-=20px'
                                    }, 'fast');
                                    health();
                                } else if (x.top >= (z.top - 25) && x.top <= (z.top + 25) && x.left >= (z.left - 25) && x.left <= (z.left + 25)) {
                                    $('#link').animate({
                                        top: '-=20px'
                                    }, 'fast');
                                    health();
                                } else if (x.top >= (w.top - 15) && x.top <= (w.top + 15) && x.left >= (w.left - 15) && x.left <= (w.left + 15)) {
                                    $('#link').animate({
                                        top: '-=20px'
                                    }, 'fast');
                                    health();
                                } else if (x.top >= (h.top - 5) && x.top <= (h.top + 55) && x.left >= (h.left - 5) && x.left <= (h.left + 45)) {
                                    $('#link').animate({
                                        top: '-=20px'
                                    }, 'fast');
                                    health();
                                }

                                $('#link').animate({
                                    top: "+=10px"
                                }, 'fast');

                                if ($('#link').attr('src') === 'https://lh5.googleusercontent.com/-WHLiaO4SVzQ/VUAJj_oojOI/AAAAAAAAABY/Y3W5t9ZVpOo/w25-h31-no/linkdown.png') {
                                    $('#link').attr('src', 'https://lh5.googleusercontent.com/-HME5DD3bmeY/VUAXGSTYbPI/AAAAAAAAAC0/9hJgxTOzRyU/w28-h25-no/2down.png');
                                } else {
                                    $('#link').attr('src', 'https://lh5.googleusercontent.com/-WHLiaO4SVzQ/VUAJj_oojOI/AAAAAAAAABY/Y3W5t9ZVpOo/w25-h31-no/linkdown.png');
                                }
                                break;
                            case 32:
                                if ($('#link').attr('src') === 'https://lh3.googleusercontent.com/-dbmqDYs2Jog/VUAqY-5REKI/AAAAAAAAAEk/5Kse9obYZJ4/w32-h33-no/sworddown.png') {
                                    $('#link').attr('src', 'https://lh5.googleusercontent.com/-WHLiaO4SVzQ/VUAJj_oojOI/AAAAAAAAABY/Y3W5t9ZVpOo/w25-h31-no/linkdown.png');

                                    //Sword Left

                                } else if ($('#link').attr('src') === 'https://lh5.googleusercontent.com/-nFXQtGUOGq0/VUAqYwHZW7I/AAAAAAAAAEo/-ip8l5IxkhE/w33-h25-no/swordleft.png') {
                                    $('#link').attr('src', 'https://lh5.googleusercontent.com/-QyNFjHv-VQQ/VUATpeLwJuI/AAAAAAAAACM/8fXnlfFZdFo/w28-h25-no/linkleft.png');

                                    //Sword Right

                                } else if ($('#link').attr('src') === 'https://lh3.googleusercontent.com/-Y1KX-Kyen08/VUAqZPZyerI/AAAAAAAAAE4/T4aD9bwRWEU/w33-h25-no/swordright.png') {
                                    $('#link').attr('src', 'https://lh3.googleusercontent.com/-82DDQbaZR6c/VUATqFWj1vI/AAAAAAAAACU/3twHZ1qlrO4/w28-h25-no/linkright.png');

                                    //Sword UP

                                } else if ($('#link').attr('src') === 'https://lh3.googleusercontent.com/--CZKEUpJJnE/VUAqZF-ap5I/AAAAAAAAAE0/ji8TqK8EjI8/w32-h33-no/swordup.png') {
                                    $('#link').attr('src', 'https://lh3.googleusercontent.com/-q2oBJ_G0D1I/VUAXGxZhBGI/AAAAAAAAAC8/0oFZdxKMzCE/w28-h25-no/2up.png');
                                }
                                break;
                        }
                    });

                    //Enemies Move

                    //Move Up

                    function headsUp() {
                        $("#heads").animate({
                            top: "+=25"
                        }, 5000, headsDown);
                    }

                    //Move Down

                    function headsDown() {
                        $("#heads").animate({
                            top: "-=25"
                        }, 5000, headsUp);
                    }

                    headsUp();

                    //Move Right
                    function chickenRight() {
                        $('#chicken').attr('src', 'https://lh5.googleusercontent.com/-ZXjMksfrqs8/VUBEpiAidoI/AAAAAAAAAGQ/Jk7copkKkTA/s64-no/ezgif.com-reverse.gif');
                        $("#chicken").animate({
                            left: "+=75"
                        }, 5000, chickenLeft);
                    }

                    //Move Left

                    function chickenLeft() {
                        $('#chicken').attr('src', 'https://lh3.googleusercontent.com/-slHg3KkZmpU/VUBD0vRzAcI/AAAAAAAAAGE/715fImULwo8/s64-no/chicken%2B%281%29.gif');
                        $("#chicken").animate({
                            left: "-=75"
                        }, 5000, chickenRight);
                    }
                    chickenRight();
                    //small octo
                    function octoUp() {
                        $('#octo1').attr('src', 'https://lh3.googleusercontent.com/dMwHwCAPgY4fiMMhIrV3DA8lOl3WCiRB0nL_IwZqkQ8=s207-p-no');
                        $('#octo1').animate({
                            top: "-=25"
                        }, 5000, octoLeft);
                    }

                    function octoDown() {
                        $('#octo1').attr('src', 'https://lh3.googleusercontent.com/ootjL7wQFnV2gt67VN4uLYLX6EMxH0kU4pIWrWAqKAc=s207-p-no');
                        $('#octo1').animate({
                            top: '+=25'
                        }, 5000, octoRight);
                    }

                    function octoRight() {
                        $('#octo1').attr('src', 'https://lh3.googleusercontent.com/zUBYc8R377wG9Ui4xh0b3MRylDd7EIseQOQjhS037-U=s207-p-no');
                        $("#octo1").animate({
                            left: "+=75"
                        }, 5000, octoUp);
                    }

                    function octoLeft() {
                        $('#octo1').attr('src', 'https://lh3.googleusercontent.com/xq4FzGniJktt1HNxV3LCCx1F6Vd3SAuOruAMuWXaP_4=s207-p-no');
                        $("#octo1").animate({
                            left: "-=75"
                        }, 5000, octoDown);
                    }
                    octoRight();
                    // bats
                    function randomPosition() {
                        var height = $('#game').height();
                        var width = $('#game').width();

                        var newH = Math.floor(Math.random() * height/2);
                        var newW = Math.floor(Math.random() * width/2);
                        
                        if ((newH > height) || (newW > width)) {
                            randomPosition();
                        } else {
                                return [newH, newW];
                        };
                    }

                    function randomMovement(mid) {
                        var newq = randomPosition();
                        $(mid.toString()).animate({
                            top: newq[0],
                            left: newq[1]
                        }, 2000, function () {
                            randomMovement(mid);
                        });
                    }
                    randomMovement('#midna');
                    randomMovement('#bat2');
                    randomMovement('#bat1')
                    randomMovement('#octo');
                });
            });//]]> 

 

    
