angular
    .module('starterApp', ['ngMaterial'])
            .config(function($mdThemingProvider, $mdIconProvider){
                $mdIconProvider
                      .icon("runlist", "./images/ic_cloud_circle_black_24px.svg")
                      .icon("mngdevice", "./images/ic_devices_black_24px.svg")
                      .icon("setting", "./images/ic_settings_black_24px.svg");
                $mdThemingProvider.theme('default')
                    .primaryPalette('blue-grey')
                    .accentPalette('pink');
            });