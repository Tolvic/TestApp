module.exports = function (grunt) {
    grunt.initConfig({
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: "node_modules/bootstrap",
                        src: ["**"],
                        dest: "wwwroot/lib/bootstrap/",
                    },
                    {
                        expand: true,
                        cwd: "node_modules/@fortawesome/fontawesome-free/scss",
                        src: ["**"],
                        dest: "wwwroot/lib/font-awesome/scss",
                    },
                    {
                        expand: true,
                        cwd: "node_modules/@fortawesome/fontawesome-free/webfonts",
                        src: ["**"],
                        dest: "wwwroot/lib/font-awesome/webfonts",
                    },
                    {
                        expand: true,
                        cwd: "node_modules/jquery",
                        src: ["**"],
                        dest: "wwwroot/lib/jquery",
                    },
                    {
                        expand: true,
                        cwd: "node_modules/jquery-validation/dist",
                        src: ["*"],
                        dest: "wwwroot/lib/jquery-validation",
                    },
                    {
                        expand: true,
                        cwd: "node_modules/jquery-validation-unobtrusive/dist",
                        src: ["*"],
                        dest: "wwwroot/lib/jquery-validation-unobtrusive",
                    },
                ],
            },
        },
        clean: ["wwwroot/lib/"],
    });

    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-clean");
};