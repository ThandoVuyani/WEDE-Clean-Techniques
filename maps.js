console.log("Javascript loaded");

document.addEventListener("DOMContentLoaded", () => {
    const mapWrapper = document.querySelector(".map-wrapper");
    const mapIframe = document.createElement("iframe");
    mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.6958093132553!2d28.052719799999995!3d-26.108846699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95732d7abaa2bb%3A0x6e3b5ac49f8d784b!2sSandton%20City!5e0!3m2!1sen!2sza!4v1793644894169!5m2!1sen!2sza";
    mapIframe.width = "600";
    mapIframe.height = "450";
    mapIframe.title = "Clean Technique Headquarters map";

    if (mapWrapper) {
        mapWrapper.appendChild(mapIframe);
    }
});