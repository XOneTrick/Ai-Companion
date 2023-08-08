import { Heading } from "@/components/heading";
import { VideoIcon } from "lucide-react";

const VideoPage = () => {
    return (
        <div>
            <Heading 
                title="Video"
                description="Our most advanced video generation model."
                icon={VideoIcon}
                iconColor="text-orange-700"
                bgColor="bg-orange-700/10"
                />
        </div>
    );
}

export default VideoPage;