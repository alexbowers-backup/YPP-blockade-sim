var BlockadeSim = new function () {
    this.classes = function (number) {
        // Largest MUST be first for the binary sum to work.
        var class_names = [];

        if(number - 2097152 >= 0) {
            number -= 2097152;
            class_names.push('player_2');
        }

        if(number - 1048576 >= 0) {
            number -= 1048576;
            class_names.push('player_1');
        }

        if (number - 16384 >= 0) {
            number = number - 16384;
            class_names.push('cannon_ball');
        }

        if (number - 8192 >= 0) {
            number = number - 8192;
            class_names.push('safe_zone');
        }

        if (number - 4096 >= 0) {
            number = number - 4096;
            class_names.push('war_frig');
        }

        if (number - 2048 >= 0) {
            number = number - 2048;
            class_names.push('war_brig');
        }

        if(number - 512 >= 0) {
            number -= 512;
            class_names.push('enemy');
        }

        if (number - 256 >= 0) {
            number = number - 256;
            class_names.push('friendly');
        }

        if (number - 128 >= 0) {
            number = number - 128;
            class_names.push('whirlpool');
        }

        if (number - 64 >= 0) {
            number = number - 64;
            class_names.push('west');
        }

        if (number - 32 >= 0) {
            number = number - 32;
            class_names.push('south');
        }

        if (number - 16 >= 0) {
            number = number - 16;
            class_names.push('east');
        }

        if (number - 8 >= 0) {
            number = number - 8;
            class_names.push('north');
        }

        if(number - 2 >= 0) {
            number -= 2;
            class_names.push('rock');
        }

        class_names.push('cell');

        return class_names.join(' ');
    };
};

var socket = io('http://localhost:3000');

socket.on('shutdown', function(message) {
    console.log('Shutdown event fired');
});