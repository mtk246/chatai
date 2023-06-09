import ComponentSwitcher from "@/components/utils/ComponentSwitcher";
import ImageRequestComponent from "@/components/ImageRequestComponent";
import FooterComponent from "@/components/utils/FooterComponent";

export default function GenerateImage() {
    return (
        <>
            <div className="container d-flex flex-column justify-content-evenly">
                <ComponentSwitcher />
                <ImageRequestComponent />
                <FooterComponent />
            </div>
        </>
    )
}