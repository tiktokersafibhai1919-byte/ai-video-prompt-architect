const nicheTemplates = {
    underwater: {
        hook: "Most people think {topic} is physically impossible under millions of tons of ocean pressure—here is how engineers pull it off.",
        body: "At extreme depths, ordinary materials fail instantly. Engineers solve {topic} using specialized pressure-equalized chambers, anti-washout admixtures, and precision robotics that operate without human divers.",
        twist: "Without this hidden underwater breakthrough, modern global infrastructure simply wouldn't exist.",
        scene1: "Wide-angle underwater shot of massive industrial engineering equipment working on {topic} in deep dark ocean water, glowing ROV floodlights cutting through murky blue water, rising air bubbles",
        scene2: "Close-up mechanical detail shot of heavy steel and concrete locking mechanisms during {topic}, extreme water pressure distortion, particles floating in light beams"
    },
    micro: {
        hook: "Zooming in 1,000x on {topic} reveals a hidden alien world happening right under our noses.",
        body: "At the microscopic scale, physics behaves completely differently. {topic} relies on cellular armor and bio-mechanical structures that outperform human-made technology.",
        twist: "Scientists are now copying this exact microscopic blueprint to build next-generation medicine and materials.",
        scene1: "Extreme 1000x electron-microscope style macro shot of {topic}, translucent glowing organic textures, bioluminescent highlights, shallow depth of field",
        scene2: "Ultra-close macro cross-section view showing the cellular structure of {topic}, intricate geometric patterns, suspended micro-droplets"
    },
    luxury: {
        hook: "Hidden inside {topic} is a secret architectural feature that costs more than an entire city block.",
        body: "Designed by ultra-minimalist architects, {topic} blends raw natural stone, acoustic silence, and seamless indoor-outdoor engineering so no wall feels like a boundary.",
        twist: "Every single angle of this structure was mathematically aligned to the sun's path—creating a different room every hour.",
        scene1: "Architectural digest wide vertical shot of {topic}, cantilevered concrete and warm teak wood, infinity water reflection, serene atmosphere",
        scene2: "Intimate interior detail shot of {topic}, natural travertine stone texture, dramatic light beam casting sharp geometric shadows across the floor"
    },
    history: {
        hook: "Archaeologists found {topic} sealed for 3,000 years—and its precision defies modern tools.",
        body: "Carved from solid stone without iron tools, {topic} displays acoustic resonance and astronomical alignment that historians still struggle to explain.",
        twist: "The real mystery isn't how they built {topic}—it's why they deliberately buried it untouched.",
        scene1: "Atmospheric vertical shot inside an ancient dimly lit stone chamber revealing {topic}, dust motes floating in a single shaft of sunlight, weathered carvings",
        scene2: "Macro close-up of ancient precision stonework on {topic}, mysterious geometric inscriptions, torchlight flicker illuminating rough mineral textures"
    }
};

const lightingModifiers = {
    cinematic: "cinematic moody lighting, volumetric god rays, deep shadows, 35mm lens, photorealistic, 8k resolution --ar 9:16",
    macro: "ultra-detailed 8k macro photography, razor-sharp focus, subsurface scattering, studio rim light, photorealistic --ar 9:16",
    documentary: "raw National Geographic documentary footage style, natural ambient lighting, authentic textures, 4k realism --ar 9:16",
    architectural: "warm golden hour sunlight, minimalist long shadows, architectural photography, high dynamic range, 8k --ar 9:16"
};

function generateBlueprint() {
    const niche = document.getElementById("niche").value;
    const topicInput = document.getElementById("topic").value.trim();
    const lighting = document.getElementById("lighting").value;

    const topic = topicInput !== "" ? topicInput : "deep-sea mega structures";
    const template = nicheTemplates[niche];
    const lightTag = lightingModifiers[lighting];

    document.getElementById("hookOutput").innerText = template.hook.replace(/{topic}/g, topic);
    document.getElementById("bodyOutput").innerText = template.body.replace(/{topic}/g, topic);
    document.getElementById("twistOutput").innerText = template.twist.replace(/{topic}/g, topic);

    document.getElementById("prompt1").innerText = `${template.scene1.replace(/{topic}/g, topic)}, ${lightTag}`;
    document.getElementById("prompt2").innerText = `${template.scene2.replace(/{topic}/g, topic)}, ${lightTag}`;

    document.getElementById("outputSection").classList.remove("hidden");
}

function copyText(elementId) {
    const text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Prompt copied to clipboard!");
    });
      }
