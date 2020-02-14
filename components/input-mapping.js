    AFRAME.registerComponent('input-listen', {
        init:
            function () {


                //X-buttorn Pressed 
                this.el.addEventListener('bbuttondown', function (e) {
                    //Start pointing position to teleport  
                    this.emit('teleportstart');
                });

                //X-buttorn Released 
                this.el.addEventListener('bbuttonup', function (e) {
                    //Jump to pointed position
                    this.emit('teleportend');
                });

                //console.log(this);
            },


    });