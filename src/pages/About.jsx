import InfoContainer from "../components/infoContainer/InfoContainer";
import Banner from "../components/banner/Banner";


function About() {
    const pageType = "about";

    return (
        <>
            <Banner pageType={pageType} />
            <InfoContainer />
        </>
    );
}

export default About;
