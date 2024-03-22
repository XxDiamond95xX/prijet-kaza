import './Banner.css';

function Banner({ pageType }) {
    let bannerClasses = "banner";
    let contentClasses = "banner_content";
    let paragraphClasses = "banner_content_p";

    if (pageType === "about") {
        bannerClasses = "about_banner";
        contentClasses = "";
        paragraphClasses = "about_banner_content_p";
    }

    return (
        <div className={bannerClasses}>
            <div className={contentClasses}>
                <p className={paragraphClasses}>Chez vous, partout et ailleurs</p>
            </div>
        </div>
    );
}

export default Banner;
