import { Heading } from "@/components/heading";
import { Music } from "lucide-react";

const MusicPage = () => {
    return (
        <div>
            <Heading 
                title="Music"
                description="Our most advanced music composer model."
                icon={Music}
                iconColor="text-emerald-500"
                bgColor="bg-emerald-500/10"
                />
        </div>
    );
}

export default MusicPage;