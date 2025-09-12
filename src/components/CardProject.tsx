import CardFlip from "@/components/mvpblocks/card-flip";

export default function CardProject() {
    return (
        <div className="flex items-center justify-center min-h-screen p-8">
            <CardFlip 
            title="My Project"
            subtitle="A brief description"
            // imageUrl="/path/to/image.jpg"
            // imageAlt="Project Screenshot"
            features={['Feature 1', 'Feature 2', 'Feature 3']}
            description="Detailed project description goes here..."
            />
        </div>
    );
}