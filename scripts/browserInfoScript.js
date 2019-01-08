function GetAllBrowserInfo() {
    GetAppName();
    GetAppVersion();
    GetLanguage();
    GetHeightWidth();
    GetPixelDepth();
    GetColorDepth();
}
function GetAppVersion() {
    var appVersion = navigator.appVersion;
    var outputVersion = document.getElementById("outputVersion");
    outputVersion.innerHTML = "The version number of your application is " + appVersion + ".";
}
function GetAppName() {
    var appName = navigator.appName;
    var outputName = document.getElementById("outputName");
    outputName.innerHTML = "The name of your application is " + appName + ".";
}
function GetLanguage() {
    var language = navigator.language;
    var outputlanguage = document.getElementById("outputLanguage");
    outputlanguage.innerHTML = "The language of your application is " + language + ".";
}
function GetHeightWidth() {
    var height = screen.height;
    var width = screen.width;
    var outputHeightWidth = document.getElementById("outputHeightWidth");
    outputHeightWidth.innerHTML = "The size of your screen is " + width + "px long by " + height + "px tall" + ".";
}
function GetPixelDepth() {
    var pixelDepth = screen.pixelDepth;
    var outputPixelDepth = document.getElementById("outputPixelDepth");
    outputPixelDepth.innerHTML = "The pixel depth of your screen is " + pixelDepth + ".";
}
function GetColorDepth() {
    var colorDepth = screen.colorDepth;
    var outputColorDepth = document.getElementById("outputColorDepth");
    outputColorDepth.innerHTML = "The color depth of your screen is " + colorDepth + ".";
}