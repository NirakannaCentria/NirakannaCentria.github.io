function showMore(section) {
    let moreInfo;
    switch (section) {
        case 'hello':
            moreInfo = "I am a passionate developer with a love for learning new technologies and sharing my knowledge.";
            break;
        case 'whoami':
            moreInfo = "Burnout often occurs due to prolonged stress and overwork. It's important to recognize the signs early.";
            break;
        case 'aboutme':
            moreInfo = "Toxic work culture can include poor management, lack of support, and unhealthy competition.";
            break;
        case 'burnoutme':
            moreInfo = "Toxic work culture can include poor management, lack of support, and unhealthy competition.";
            break;
        case 'toxicone':
            moreInfo = "Recovery involves rest, setting boundaries, and seeking support from friends and professionals.";
            break;
        case 'recovery':
            moreInfo = "Recovery involves rest, setting boundaries, and seeking support from friends and professionals.";
            break;
        default:
            moreInfo = "";
    }
    document.getElementById(section + '-more').innerHTML = moreInfo;
    document.getElementById(section + '-more').style.display = 'block';
}