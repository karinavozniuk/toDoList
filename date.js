//jshint esversion: 6

exports.getDate = function(){

    const today = new Date();

    const dateFormat = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    return today.toLocaleDateString('en-US', dateFormat);

}