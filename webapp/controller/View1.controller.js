sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "umg/my/custom/library/util"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, util) {
        "use strict";

        return Controller.extend("umg.my.custom.application.controller.View1", {
            onInit: function () {

            },

            onButtonPress: function (oEvent) {
                // use function from the library
                util.sayHello();
            }
        });
    });
