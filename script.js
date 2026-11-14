const nicheTemplates = {
    underwater: {
        hook: "Most people assume {topic} is physically impossible under crushing ocean pressure—here is how engineers actually pull it off.",
        mech: "At extreme depths, standard materials fail within seconds. Engineers execute {topic} using pressurized caissons, anti-washout chemical admixtures, and acoustic ROV telemetry.",
        scale: "A single miscalculation of just two millimeters under thousands of tons of water pressure could collapse the entire structure instantly.",
        twist: "Without this hidden underwater engineering breakthrough, modern global infrastructure simply could not exist.",
        s1: "Wide-angle underwater shot of massive industrial engineering machinery performing {topic} in deep dark ocean water, glowing ROV floodlights cutting through murky blue water",
        s2: "Close-up mechanical detail shot of heavy steel and anti-washout concrete locking mechanisms during {topic}, pressurized bubbles rising through volumetric light beams",
        s3: "Dramatic underwater scale comparison showing tiny remotely operated vehicles inspecting the colossal foundation of {topic} on the ocean floor",
        s4: "Smooth upward tilt from the completed deep-sea structure of {topic} toward shimmering ocean surface light rays, seamless loop ending",
        sfx: [
            "🔊 SFX: Deep sub-bass ocean rumble + metallic sonar ping",
            "🔊 SFX: Heavy hydraulic hiss + muffled underwater bubbles",
            "🔊 SFX: Low-frequency pressure groaning + subtle tension drone",
            "🔊 SFX: Rising water shimmer + clean ambient fade-out"
        ]
    },
    micro: {
        hook: "Zooming in 1,000x on {topic} reveals a hidden alien world operating right beneath our eyes.",
        mech: "At the microscopic scale, normal physics breaks down. {topic} survives using interlocking cellular armor and bio-mechanical pumps that outperform human machines.",
        scale: "If scaled up to the size of a human, this microscopic structure could withstand impacts that would crush solid titanium.",
        twist: "Materials scientists are now reverse-engineering {topic} to build next-generation aerospace armor and medical micro-bots.",
        s1: "Extreme 1000x scanning-electron style macro shot of {topic}, translucent glowing organic textures, bioluminescent highlights, shallow depth of field",
        s2: "Ultra-close macro cross-section view revealing the geometric cellular armor of {topic}, suspended micro-droplets refracting studio rim light",
        s3: "Dynamic microscopic scale perspective showing {topic} interacting with surrounding micro-particles in crystal-clear fluid",
        s4: "Slow macro pull-back from the intricate surface pattern of {topic} into soft glowing bokeh, seamless loop frame",
        sfx: [
            "🔊 SFX: High-tech digital zoom whoosh + crystalline chime",
            "🔊 SFX: Subtle organic cellular pulse + crisp micro-clicks",
            "🔊 SFX: Deep resonant bass swell + airy synth texture",
            "🔊 SFX: Reverse airy whoosh leading back to opening frame"
        ]
    },
    luxury: {
        hook: "Hidden inside {topic} is an architectural secret that costs more than an entire city block.",
        mech: "Engineered with cantilevered post-tensioned concrete and acoustic isolation, {topic} removes every visual barrier between raw nature and interior living.",
        scale: "Every structural beam in {topic} was mathematically aligned to the sun's seasonal angle—transforming the shadows inside every single hour.",
        twist: "You never see a single visible hinge, drain, or light fixture—because the entire building acts as one seamless machine.",
        s1: "Architectural digest wide vertical shot of {topic}, cantilevered board-formed concrete and warm teak wood, emerald reflection pool, serene atmosphere",
        s2: "Intimate interior detail shot of {topic}, raw travertine stone texture meeting frameless glass, sharp geometric sunlight beam across the floor",
        s3: "Dramatic high-angle atrium reveal showing the massive cantilevered span of {topic} suspended effortlessly above still water",
        s4: "Slow vertical tilt from the skylight oculus of {topic} down to gentle ripples forming across the indoor reflection pool",
        sfx: [
            "🔊 SFX: Soft architectural room tone + distant water drip",
            "🔊 SFX: Warm minimalist piano chord + subtle breeze",
            "🔊 SFX: Deep acoustic echo + gentle water lap against stone",
            "🔊 SFX: Tranquil water ripple shimmer + soft ambient tail"
        ]
    },
    history: {
        hook: "Archaeologists uncovered {topic} sealed for 3,000 years—and its precision still baffles modern engineers.",
        mech: "Carved from solid megalithic stone without iron tools, {topic} features interlocking seismic joints and acoustic chambers tuned to exact frequencies.",
        scale: "Each fitted block weighs over forty tons, yet not even a razor blade can slide between the ancient stone seams.",
        twist: "The biggest mystery isn't how ancient builders engineered {topic}—it's why they deliberately buried it untouched.",
        s1: "Atmospheric vertical shot inside an ancient dimly lit stone chamber revealing {topic}, dust motes floating in a single shaft of sunlight",
        s2: "Macro close-up of razor-sharp ancient stone joinery on {topic}, mysterious geometric carvings illuminated by warm flickering torchlight",
        s3: "Wide monumental interior view showing the towering megalithic scale of {topic} dwarfing a lone explorer beam of light",
        s4: "Slow camera push toward the central sealed stone monolith of {topic} as light rays shift across the ancient engravings",
        sfx: [
            "🔊 SFX: Deep stone cavern echo + eerie wind whistle",
            "🔊 SFX: Stone scraping resonance + subtle fire crackle",
            "🔊 SFX: Massive sub-bass boom + ancient ceremonial drum hit",
            "🔊 SFX: Mysterious vocal harmonic + fading cavern reverb"
        ]
    }
};

const lightingModifiers = {
    cinematic: "cinematic moody lighting, volumetric god rays, deep contrast shadows, 35mm anamorphic lens, photorealistic, 8k resolution --ar 9:16",
    macro: "ultra-detailed 8k macro photography, razor-sharp focus, subsurface scattering, studio rim light, photorealistic --ar 9:16",
    documentary: "raw National Geographic documentary footage style, natural ambient lighting, authentic textures, 4k realism --ar 9:16",
    architectural: "warm golden hour sunlight, minimalist long shadows, architectural photography, high dynamic range, 8k --ar 9:16"
};

let currentScriptSegments = [];
let currentTopicSlug = "video-subtitles";

function analyzeContext(topic) {
    const lower = topic.toLowerCase();
    if (lower.includes("water") || lower.includes("ocean") || lower.includes("concrete") || lower.includes("bridge") || lower.includes("dam")) {
        return {
            label: "Hydro-Structural Physics & Fluid Pressure Dynamics",
            lensBoost: "underwater caustics, suspended micro-sediment, high-pressure industrial realism"
        };
    } else if (lower.includes("cell") || lower.includes("bug") || lower.includes("fish") || lower.includes("betta") || lower.includes("micro") || lower.includes("bacteria")) {
        return {
            label: "Bio-Mechanical Micro-Scale & Subsurface Optics",
            lensBoost: "100mm macro lens f/2.8, translucent cellular detail, iridescent scale reflection"
        };
    } else if (lower.includes("house") || lower.includes("villa") || lower.includes("pool") || lower.includes("concrete") || lower.includes("wood")) {
        return {
            label: "Minimalist Cantilever Geometry & Natural Light Pathing",
            lensBoost: "24mm tilt-shift architectural lens, crisp shadow geometry, natural material grain"
        };
    } else {
        return {
            label: "High-Retention Documentary Visual Storytelling",
            lensBoost: "cinematic depth of field, rich atmospheric texture, hyper-realistic detail"
        };
    }
}

function generateBlueprint() {
    const niche = document.getElementById("niche").value;
    const topicInput = document.getElementById("topic").value.trim();
    const lighting = document.getElementById("lighting").value;
    const camera = document.getElementById("camera").value;

    const topic = topicInput !== "" ? topicInput : "deep-sea mega structures";
    currentTopicSlug = topic.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

    const template = nicheTemplates[niche];
    const lightTag = lightingModifiers[lighting];
    const contextInfo = analyzeContext(topic);

    document.getElementById("contextDetected").innerText = `🧠 Context Engine Active: ${contextInfo.label}`;

    const hookText = template.hook.replace(/{topic}/g, topic);
    const mechText = template.mech.replace(/{topic}/g, topic);
    const scaleText = template.scale.replace(/{topic}/g, topic);
    const twistText = template.twist.replace(/{topic}/g, topic);

    document.getElementById("hookOutput").innerText = hookText;
    document.getElementById("mechOutput").innerText = mechText;
    document.getElementById("scaleOutput").innerText = scaleText;
    document.getElementById("twistOutput").innerText = twistText;

    currentScriptSegments = [hookText, mechText, scaleText, twistText];

    const scenes = [template.s1, template.s2, template.s3, template.s4];
    for (let i = 0; i < 4; i++) {
        const scenePrompt = `${scenes[i].replace(/{topic}/g, topic)}, ${contextInfo.lensBoost}, ${camera}, ${lightTag}`;
        document.getElementById(`prompt${i + 1}`).innerText = scenePrompt;
        document.getElementById(`sfx${i + 1}`).innerText = template.sfx[i];
    }

    document.getElementById("outputSection").classList.remove("hidden");
}

function copyText(elementId) {
    const text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Scene prompt copied to clipboard!");
    });
}

function formatSRTTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    const ms = Math.floor((seconds % 1) * 1000);
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')},${String(ms).padStart(3, '0')}`;
}

function downloadSRT() {
    if (currentScriptSegments.length === 0) return;

    let srtContent = "";
    let currentTime = 0.0;
    const wordsPerSecond = 2.6;

    currentScriptSegments.forEach((segment, index) => {
        const wordCount = segment.split(/\s+/).length;
        const duration = Math.max(4.5, +(wordCount / wordsPerSecond).toFixed(2));
        const startTime = formatSRTTime(currentTime);
        const endTime = formatSRTTime(currentTime + duration);

        srtContent += `${index + 1}\n${startTime} --> ${endTime}\n${segment}\n\n`;
        currentTime += duration;
    });

    const blob = new Blob([srtContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${currentTopicSlug || "subtitles"}.srt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}
