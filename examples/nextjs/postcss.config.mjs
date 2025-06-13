/* GLOBAL RESETS & FONTS */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif; /* Default font */
    background: linear-gradient(135deg, #0d0e12 0%, #1a1e26 50%, #0d0e12 100%); /* Darker, more futuristic gradient */
    color: #e0e6ec; /* Lighter, techy text color */
    min-height: 100vh;
    overflow-x: hidden;
    display: flex; /* Use flexbox for overall layout */
    flex-direction: column;
    align-items: center;
}

/* HEADER */
.interactive-header {
    background: rgba(0,0,0,0.6); /* Slightly more opaque */
    backdrop-filter: blur(25px) brightness(0.8); /* Stronger blur, slightly darker */
    padding: 18px 35px; /* Slightly larger padding */
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid rgba(0, 255, 255, 0.4); /* Cyan/light blue border */
    position: sticky;
    top: 0;
    z-index: 1000; /* Higher z-index */
    width: 100%; /* Full width */
    box-shadow: 0 4px 20px rgba(0, 255, 255, 0.15); /* Soft cyan shadow */
}

.logo-interactive {
    display: flex;
    align-items: center;
    gap: 18px;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Smoother transition */
}

.logo-interactive:hover {
    transform: scale(1.08) translateX(5px); /* More pronounced hover */
}

.stoic-symbol {
    width: 60px; /* Larger symbol */
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(45deg, #00ffff, #39ff14); /* Neon cyan to green */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em; /* Larger emoji */
    color: #0d0e12;
    font-weight: bold;
    position: relative; /* For pulse effect */
    overflow: hidden;
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.7);
}

.symbol-inner {
    position: relative;
    z-index: 2; /* Ensure emoji is on top */
}

.symbol-pulse {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: rgba(0, 255, 255, 0.5);
    animation: symbolPulse 2s infinite cubic-bezier(0.4, 0, 0.2, 1); /* Faster, more dynamic pulse */
    z-index: 1; /* Behind emoji */
}

@keyframes symbolPulse {
    0% { transform: scale(0); opacity: 0.7; }
    50% { transform: scale(1.1); opacity: 0; }
    100% { transform: scale(0); opacity: 0.7; }
}


.title-main {
    font-family: 'Orbitron', sans-serif; /* Techy font */
    font-size: 1.5em;
    font-weight: bold;
    color: #00ffff; /* Neon cyan */
    text-shadow: 0 0 8px rgba(0, 255, 255, 0.7);
}

.subtitle-text {
    font-size: 0.9em;
    opacity: 0.7;
    color: #a0a6b0;
}

.user-status {
    display: flex;
    align-items: center;
    gap: 25px; /* More space */
    font-family: 'Orbitron', sans-serif;
}

.live-indicator {
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(57, 255, 20, 0.2); /* Neon green */
    padding: 10px 18px;
    border-radius: 25px;
    border: 1px solid #39ff14;
    box-shadow: 0 0 10px rgba(57, 255, 20, 0.5);
}

.live-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #39ff14;
    animation: blink 0.8s infinite steps(1, start); /* Faster, sharper blink */
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
}

.virtue-rank {
    color: #ffcc00; /* Gold-like */
    font-size: 1em;
    text-shadow: 0 0 5px rgba(255, 204, 0, 0.5);
}

.gnc-balance {
    display: flex;
    align-items: center;
    gap: 8px;
    background: rgba(139, 92, 246, 0.2); /* Purple tone */
    padding: 8px 15px;
    border-radius: 20px;
    border: 1px solid #8b5cf6;
    font-weight: bold;
    color: #8b5cf6;
    text-shadow: 0 0 5px rgba(139, 92, 246, 0.5);
}

.gnc-icon {
    font-size: 1.2em;
    animation: rotate3D 3s infinite linear;
}

@keyframes rotate3D {
    0% { transform: rotateY(0deg); }
    100% { transform: rotateY(360deg); }
}

/* MAIN ARENA */
.conversation-arena {
    max-width: 1300px; /* Slightly wider */
    margin: 40px auto;
    padding: 0 30px;
    width: 100%;
}

.scenario-selector {
    background: rgba(255,255,255,0.03); /* Subtle transparency */
    border-radius: 25px; /* More rounded */
    padding: 40px;
    margin-bottom: 40px;
    border: 1px solid rgba(0, 255, 255, 0.2); /* Cyan border */
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.1);
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.scenario-selector.active {
    opacity: 1;
    transform: translateY(0);
}

.scenario-selector:not(.active) {
    opacity: 0;
    transform: translateY(50px);
    pointer-events: none; /* Disable interaction when hidden */
    position: absolute; /* Take out of flow when hidden */
    width: calc(100% - 60px); /* Match main arena width */
}

.scenario-title {
    text-align: center;
    font-size: 2.5em; /* Larger title */
    color: #00ffff;
    margin-bottom: 25px;
    font-family: 'Orbitron', sans-serif;
    text-shadow: 0 0 12px rgba(0, 255, 255, 0.8);
}

.intro-text {
    text-align: center;
    font-size: 1.1em;
    opacity: 0.8;
    margin-bottom: 40px;
    line-height: 1.6;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    color: #c0c6d0;
}

.scenario-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); /* Slightly wider cards */
    gap: 25px;
    margin-bottom: 30px;
}

.scenario-card {
    background: rgba(0,0,0,0.4); /* Darker transparent */
    border-radius: 20px; /* More rounded */
    padding: 30px;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Smoother transition */
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: 0 5px 20px rgba(0,0,0,0.3);
}

.scenario-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.1), transparent); /* Cyan shimmer */
    transition: left 0.6s ease-in-out;
    z-index: 0; /* Behind content */
}

.scenario-card:hover::before {
    left: 100%;
}

.scenario-card:hover {
    border-color: #00ffff; /* Neon cyan border */
    transform: translateY(-8px); /* More lift */
    box-shadow: 0 12px 35px rgba(0, 255, 255, 0.25); /* Stronger glow */
}

.scenario-card.selected {
    border-color: #39ff14; /* Neon green border */
    background: rgba(57, 255, 20, 0.15); /* Greenish background */
    transform: scale(1.04); /* More pronounced pop */
    box-shadow: 0 0 40px rgba(57, 255, 20, 0.6); /* Stronger green glow */
    z-index: 1; /* Bring it slightly to the front */
}

.scenario-emoji {
    font-size: 3em; /* Larger emoji */
    margin-bottom: 20px;
    filter: drop-shadow(0 0 8px rgba(255,255,255,0.5)); /* Subtle glow to emoji */
}

.scenario-name {
    font-size: 1.4em; /* Larger name */
    font-weight: bold;
    margin-bottom: 15px;
    color: #00ffff;
    font-family: 'Orbitron', sans-serif;
    text-shadow: 0 0 5px rgba(0, 255, 255, 0.5);
}

.scenario-description {
    opacity: 0.75;
    margin-bottom: 20px;
    line-height: 1.5;
    flex-grow: 1; /* Push reward to bottom */
}

.difficulty-badge {
    padding: 7px 15px;
    border-radius: 15px;
    font-size: 0.9em;
    font-weight: bold;
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.difficulty-medium { background: rgba(255, 187, 36, 0.2); color: #fbbf24; border: 1px solid #fbbf24; }
.difficulty-hard { background: rgba(239, 68, 68, 0.2); color: #ef4444; border: 1px solid #ef4444; }
.difficulty-expert { background: rgba(139, 92, 246, 0.2); color: #8b5cf6; border: 1px solid #8b5cf6; }

.scenario-reward {
    font-family: 'Orbitron', sans-serif;
    color: #39ff14; /* Neon green for reward */
    font-weight: bold;
    font-size: 1.1em;
    margin-top: 10px;
    text-shadow: 0 0 10px rgba(57, 255, 20, 0.7);
}

.action-buttons {
    text-align: center;
    margin-top: 20px;
}

/* CONVERSATION AREA */
.interactive-conversation {
    background: rgba(0,0,0,0.5); /* Darker background */
    border-radius: 25px;
    padding: 40px;
    min-height: 650px; /* Slightly taller */
    display: none;
    border: 1px solid rgba(0, 255, 255, 0.2);
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.1);
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    position: relative; /* For end controls positioning */
}

.interactive-conversation.active {
    display: block;
    opacity: 1;
    transform: translateY(0);
}

.conversation-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;
    padding-bottom: 25px;
    border-bottom: 1px solid rgba(0, 255, 255, 0.15);
}

.conversation-info {
    display: flex;
    align-items: center;
    gap: 20px;
}

.character-avatar {
    width: 70px; /* Larger avatar */
    height: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8em; /* Larger emoji */
    font-weight: bold;
    background: linear-gradient(45deg, #ef4444, #dc2626); /* Red gradient */
    box-shadow: 0 0 15px rgba(239, 68, 68, 0.7);
    animation: avatarGlow 3s infinite alternate ease-in-out; /* Pulsing glow */
}

@keyframes avatarGlow {
    0% { box-shadow: 0 0 15px rgba(239, 68, 68, 0.7); }
    50% { box-shadow: 0 0 25px rgba(239, 68, 68, 1); }
    100% { box-shadow: 0 0 15px rgba(239, 68, 68, 0.7); }
}

.character-avatar.typing-avatar-active {
    animation: typingAvatarPulse 1.2s infinite ease-in-out; /* Faster pulse for typing */
}

@keyframes typingAvatarPulse {
    0%, 100% { transform: scale(1); border: 3px solid transparent; }
    50% { transform: scale(1.08); border: 3px solid rgba(0, 255, 255, 0.7); }
}


.character-info h3 {
    color: #00ffff;
    margin-bottom: 8px;
    font-family: 'Orbitron', sans-serif;
    font-size: 1.6em;
    text-shadow: 0 0 6px rgba(0, 255, 255, 0.7);
}

.character-mood {
    font-size: 1em;
    opacity: 0.7;
    color: #c0c6d0;
}

.stress-meter {
    display: flex;
    align-items: center;
    gap: 15px;
    font-family: 'Orbitron', sans-serif;
    font-size: 1.1em;
    color: #c0c6d0;
}

.stress-bar {
    width: 120px; /* Wider bar */
    height: 10px; /* Taller bar */
    background: rgba(255,255,255,0.1);
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid rgba(0, 255, 255, 0.3);
}

.stress-fill {
    height: 100%;
    background: linear-gradient(90deg, #39ff14, #fbbf24, #ef4444); /* Green to yellow to red */
    width: 75%; /* Initial width */
    border-radius: 5px;
    transition: width 0.5s ease-out; /* Smooth transition */
}

/* CONVERSATION FEED */
.conversation-feed {
    max-height: 450px; /* Taller feed */
    overflow-y: auto;
    margin-bottom: 35px;
    padding: 25px;
    background: rgba(255,255,255,0.03);
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,0.1);
    scroll-behavior: smooth; /* Smooth scrolling */
}

.conversation-feed::-webkit-scrollbar {
    width: 8px;
}

.conversation-feed::-webkit-scrollbar-track {
    background: rgba(0,0,0,0.3);
    border-radius: 10px;
}

.conversation-feed::-webkit-scrollbar-thumb {
    background: rgba(0, 255, 255, 0.5);
    border-radius: 10px;
    border: 2px solid rgba(0,0,0,0.5);
}

.message {
    margin-bottom: 25px; /* More space between messages */
    animation: messageAppear 0.5s ease-out forwards; /* Apply animation */
}

@keyframes messageAppear {
    from { opacity: 0; transform: translateY(25px); }
    to { opacity: 1; transform: translateY(0); }
}

.message-npc {
    display: flex;
    align-items: flex-start;
    gap: 18px;
}

.message-player {
    display: flex;
    align-items: flex-start;
    gap: 18px;
    flex-direction: row-reverse; /* Player message on right */
    margin-left: auto; /* Push to right */
    max-width: 90%; /* Allow more room */
}

.message-avatar {
    width: 45px; /* Slightly larger message avatars */
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    flex-shrink: 0;
    font-size: 1.1em;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
}

.npc-avatar {
    background: linear-gradient(45deg, #ef4444, #dc2626); /* Red */
}

.player-avatar {
    background: linear-gradient(45deg, #3b82f6, #1d4ed8); /* Blue */
}

.message-content {
    background: rgba(255,255,255,0.1);
    padding: 15px 20px;
    border-radius: 18px; /* More rounded bubbles */
    max-width: 75%; /* Allow content to be a bit wider */
    position: relative;
    line-height: 1.5;
}

.message-npc .message-content {
    border-bottom-left-radius: 8px; /* Pointy bottom left */
    border: 1px solid rgba(239, 68, 68, 0.2);
}

.message-player .message-content {
    border-bottom-right-radius: 8px; /* Pointy bottom right */
    background: rgba(59, 130, 246, 0.15);
    border: 1px solid rgba(59, 130, 246, 0.2);
}

.message-timestamp {
    font-size: 0.75em;
    opacity: 0.6;
    margin-top: 8px;
    text-align: right; /* Align timestamp to right in player messages */
    color: #a0a6b0;
}

.stoic-analysis {
    background: rgba(0, 255, 255, 0.08); /* Cyan-toned analysis */
    border-left: 4px solid #00ffff;
    padding: 12px 18px;
    margin-top: 15px;
    border-radius: 8px;
    font-style: italic;
    font-size: 0.95em;
    color: #a0f0ff;
    box-shadow: inset 0 0 8px rgba(0, 255, 255, 0.2);
}

.typing-indicator {
    display: flex;
    align-items: center;
    gap: 8px; /* More space */
    opacity: 0.8;
    font-style: italic;
    color: #00ffff; /* Cyan for typing */
    text-shadow: 0 0 5px rgba(0, 255, 255, 0.5);
}

.typing-dots {
    display: flex;
    gap: 4px;
}

.typing-dot {
    width: 6px; /* Larger dots */
    height: 6px;
    border-radius: 50%;
    background: #00ffff;
    animation: typingBounce 1.2s infinite ease-in-out; /* Faster bounce */
}

.typing-dot:nth-child(2) { animation-delay: 0.2s; }
.typing-dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes typingBounce {
    0%, 60%, 100% { transform: translateY(0); }
    30% { transform: translateY(-10px); }
}


/* RESPONSE OPTIONS */
.response-options {
    display: grid;
    gap: 18px; /* More space between options */
}

.response-option {
    background: rgba(255,255,255,0.06); /* Slightly more opaque */
    border: 2px solid rgba(255,255,255,0.15); /* Stronger border */
    padding: 22px;
    border-radius: 18px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
}

.response-option::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.08), transparent); /* Cyan shimmer */
    transition: left 0.5s ease-in-out;
}

.response-option:hover::before {
    left: 100%;
}

.response-option:hover {
    border-color: #00ffff; /* Neon cyan */
    transform: translateX(8px) scale(1.01); /* More pronounced lift */
    background: rgba(0, 255, 255, 0.05);
    box-shadow: 0 8px 25px rgba(0, 255, 255, 0.15);
}

.response-option.selected-player { /* New class for the chosen option */
    border-color: #39ff14; /* Neon green */
    background: rgba(57, 255, 20, 0.1);
    transform: translateX(0) scale(1.02); /* Pop without shifting */
    box-shadow: 0 0 20px rgba(57, 255, 20, 0.5);
    pointer-events: none; /* Disable clicking after selection */
}


.response-option.stoic {
    border-color: #00ffff; /* Cyan for Stoic */
    background: rgba(0, 255, 255, 0.1);
}

.response-option.impulsive {
    border-color: #ff3333; /* Brighter red */
    background: rgba(255,51,51,0.08);
}

.response-option.diplomatic {
    border-color: #3b82f6;
    background: rgba(59,130,246,0.08);
}

.response-text {
    font-size: 1.2em; /* Larger text */
    margin-bottom: 12px;
    line-height: 1.5;
}

.response-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9em;
    opacity: 0.8;
}

.response-type {
    padding: 5px 10px;
    border-radius: 15px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    box-shadow: 0 1px 5px rgba(0,0,0,0.2);
}

.type-stoic { background: rgba(0, 255, 255, 0.3); color: #00ffff; }
.type-impulsive { background: rgba(255,51,51,0.3); color: #ff3333; }
.type-diplomatic { background: rgba(59,130,246,0.3); color: #3b82f6; }

.virtue-impact {
    display: flex;
    gap: 7px; /* More space */
}

.virtue-meter {
    width: 25px; /* Wider meters */
    height: 5px; /* Taller meters */
    background: rgba(255,255,255,0.15);
    border-radius: 3px;
    transition: background 0.3s;
}

.virtue-meter.positive { background: #39ff14; box-shadow: 0 0 8px rgba(57, 255, 20, 0.5); }
.virtue-meter.negative { background: #ef4444; box-shadow: 0 0 8px rgba(239, 68, 68, 0.5); }


/* LIVE COACHING */
.live-coaching {
    position: fixed;
    bottom: 30px; /* Higher */
    right: 30px;
    width: 320px; /* Wider */
    background: rgba(57, 255, 20, 0.97); /* Neon green background */
    border-radius: 20px; /* More rounded */
    padding: 25px;
    transform: translateX(400px);
    transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.4s ease-out;
    z-index: 1000;
    border: 2px solid #39ff14;
    box-shadow: 0 0 25px rgba(57, 255, 20, 0.4);
}

.live-coaching.show {
    transform: translateX(0);
    opacity: 1;
}

.coach-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 18px;
}

.coach-avatar {
    width: 35px; /* Larger avatar */
    height: 35px;
    border-radius: 50%;
    background: #0d0e12;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #39ff14;
    font-weight: bold;
    font-size: 1.1em;
    box-shadow: 0 0 10px rgba(57, 255, 20, 0.6);
}

.coach-name {
    font-weight: bold;
    color: #0d0e12;
    font-family: 'Orbitron', sans-serif;
    font-size: 1.1em;
}

.coach-role {
    font-size: 0.85em;
    opacity: 0.8;
    color: #2a3a2a;
}

.coach-message {
    color: #0d0e12;
    line-height: 1.5;
    font-size: 0.95em;
    text-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

/* AUDIO CONTROLS */
.audio-controls {
    position: fixed;
    bottom: 30px;
    left: 30px;
    display: flex;
    gap: 18px;
    z-index: 1000;
}

.audio-btn {
    width: 55px; /* Larger buttons */
    height: 55px;
    border-radius: 50%;
    border: none;
    background: rgba(59, 130, 246, 0.9); /* Blue */
    color: white;
    font-size: 1.4em; /* Larger icon */
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 5px 15px rgba(59, 130, 246, 0.4);
}

.audio-btn:hover {
    transform: scale(1.15); /* More pronounced hover */
    background: #3b82f6;
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.6);
}

.audio-btn.recording {
    background: #ff3333; /* Red for recording */
    animation: pulse 1s infinite;
    box-shadow: 0 0 20px rgba(255, 51, 51, 0.7);
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

/* PROGRESS TRACKER */
.progress-tracker {
    position: fixed;
    top: 90px; /* Lower from top */
    right: 30px;
    width: 280px; /* Wider */
    background: rgba(0,0,0,0.7);
    border-radius: 20px;
    padding: 25px;
    border: 1px solid rgba(0, 255, 255, 0.2);
    z-index: 999;
    box-shadow: 0 0 25px rgba(0, 255, 255, 0.15);
    font-family: 'Orbitron', sans-serif;
}

.tracker-title {
    text-align: center;
    font-weight: bold;
    margin-bottom: 20px;
    color: #00ffff;
    font-size: 1.2em;
    text-shadow: 0 0 8px rgba(0, 255, 255, 0.7);
}

.virtue-progress {
    margin-bottom: 18px;
}

.virtue-name {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    font-size: 0.95em;
    color: #e0e6ec;
}

.virtue-bar {
    width: 100%;
    height: 8px; /* Taller bar */
    background: rgba(255,255,255,0.15);
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.1);
}

.virtue-fill {
    height: 100%;
    border-radius: 4px;
    transition: width 1s ease-out; /* Slower animation */
}

.wisdom-fill { background: linear-gradient(90deg, #ffd700, #ffea00); } /* Gold-yellow */
.justice-fill { background: linear-gradient(90deg, #39ff14, #00ff00); } /* Neon green */
.courage-fill { background: linear-gradient(90deg, #ef4444, #ff0000); } /* Red */
.temperance-fill { background: linear-gradient(90deg, #3b82f6, #0000ff); } /* Blue */

/* BUTTONS */
.btn {
    padding: 15px 30px; /* Larger padding */
    border: none;
    border-radius: 30px; /* More rounded */
    cursor: pointer;
    font-size: 1.1em;
    font-weight: 700; /* Bolder */
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    margin: 8px;
    font-family: 'Orbitron', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}

.btn-start {
    background: linear-gradient(45deg, #00ffff, #39ff14); /* Cyan to green */
    color: #0d0e12;
    font-size: 1.4em; /* Larger start button */
    padding: 18px 35px;
    border: 1px solid rgba(0, 255, 255, 0.5);
}

.btn-start:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 12px 30px rgba(0, 255, 255, 0.4);
    background: linear-gradient(45deg, #39ff14, #00ffff); /* Reverse gradient on hover */
}

/* NOTIFICATIONS */
.notification-system {
    position: fixed;
    top: 25px; /* Slightly lower */
    left: 50%;
    transform: translateX(-50%);
    z-index: 2000; /* Highest z-index */
    display: flex;
    flex-direction: column;
    align-items: center;
}

.notification {
    background: rgba(57, 255, 20, 0.98); /* Neon green */
    color: #0d0e12;
    padding: 18px 30px;
    border-radius: 15px;
    margin-bottom: 12px;
    transform: translateY(-120px);
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55); /* Springy animation */
    border: 2px solid #39ff14;
    max-width: 450px;
    text-align: center;
    font-weight: 500;
    box-shadow: 0 5px 20px rgba(57, 255, 20, 0.5);
}

.notification.show {
    transform: translateY(0);
    opacity: 1;
}

/* END OF SCENARIO CONTROLS */
.end-of-scenario-controls {
    text-align: center;
    margin-top: 40px;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.end-of-scenario-controls.show {
    opacity: 1;
    transform: translateY(0);
}

.btn-reflect {
    background: rgba(0, 255, 255, 0.3);
    color: #00ffff;
    border: 1px solid #00ffff;
}

.btn-reflect:hover {
    background: rgba(0, 255, 255, 0.4);
    box-shadow: 0 8px 20px rgba(0, 255, 255, 0.2);
}

.feedback-message {
    font-size: 1.3em;
    color: #00ffff;
    margin-bottom: 25px;
    font-family: 'Orbitron', sans-serif;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.7);
}
