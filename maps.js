console.log("Javascript loaded");

document.addEventListener("DOMContentLoaded", () => {
    const mapWrapper = document.querySelector(".map-wrapper");
    const mapIframe = document.createElement("iframe");
    mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.1234567890123!2d28.0473053152584!3d-26.20410298312345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950b8c1234567%3A0xabcdef1234567890!2sClean%20Technique%20Headquarters!5e0!3m2!1sen!2sza!4v1699999999999";
    mapIframe.width = "600";
    mapIframe.height = "450";
    mapIframe.title = "Clean Technique Headquarters map";

    if (mapWrapper) {
        mapWrapper.appendChild(mapIframe);
    }
});