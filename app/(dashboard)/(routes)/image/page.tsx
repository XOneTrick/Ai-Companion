import { Heading } from "@/components/heading";
import { ImageIcon } from "lucide-react";

const ImageGenerationPage = () => {
    return (
        <div>
            <Heading 
                title="Image Generation"
                description="Our most advanced Image Generation model."
                icon={ImageIcon}
                iconColor="text-pink-700"
                bgColor="bg-pink-700/10"
                />
        </div>
    );
}

export default ImageGenerationPage;