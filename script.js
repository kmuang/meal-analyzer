:root {
    --bg-dark: #0a0a0f;
    --text-primary: #ffffff;
    --text-secondary: #a0a0b0;
    --accent-primary: #00f2ff;
    /* Cyan */
    --accent-secondary: #bc13fe;
    /* Purple */
    --glass-bg: rgba(255, 255, 255, 0.05);
    --glass-border: rgba(255, 255, 255, 0.1);
    --font-main: 'Outfit', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--bg-dark);
    color: var(--text-primary);
    font-family: var(--font-main);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    position: relative;
}

/* Dynamic Background Glow */
.background-glow {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 50% 50%, rgba(188, 19, 254, 0.15), rgba(0, 242, 255, 0.1) 40%, transparent 70%);
    animation: rotate 20s linear infinite;
    z-index: -1;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.container {
    width: 100%;
    max-width: 600px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

/* Typography */
.hero {
    text-align: center;
}

h1 {
    font-size: 3.5rem;
    font-weight: 700;
    letter-spacing: -1px;
    margin-bottom: 0.5rem;
}

.gradient-text {
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.subtitle {
    color: var(--text-secondary);
    font-size: 1.1rem;
    font-weight: 300;
}

/* Glass Card */
.glass-card {
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    border: 1px solid var(--glass-border);
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
}

.glass-card:hover {
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.2);
}

/* Tabs */
.tabs {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid var(--glass-border);
    padding-bottom: 1rem;
}

.tab-btn {
    background: none;
    border: none;
    color: var(--text-secondary);
    font-family: var(--font-main);
    font-size: 1rem;
    cursor: pointer;
    transition: color 0.3s ease;
    padding: 0 0.5rem;
}

.tab-btn.active {
    color: var(--text-primary);
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

/* Inputs */
.input-group {
    display: none;
    margin-bottom: 1.5rem;
}

.input-group.active {
    display: block;
}

input[type="text"] {
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid var(--glass-border);
    padding: 1rem;
    border-radius: 12px;
    color: var(--text-primary);
    font-size: 1.1rem;
    font-family: var(--font-main);
    outline: none;
    transition: border-color 0.3s ease;
}

input[type="text"]:focus {
    border-color: var(--accent-primary);
}

.file-drop-area {
    border: 2px dashed var(--glass-border);
    border-radius: 12px;
    padding: 2rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
}

.file-drop-area:hover {
    border-color: var(--accent-secondary);
    background: rgba(255, 255, 255, 0.02);
}

.file-drop-area.highlight {
    border-color: var(--accent-primary);
    background: rgba(0, 242, 255, 0.05);
    transform: scale(1.02);
}

.file-msg {
    color: var(--text-secondary);
    font-size: 0.9rem;
}

.file-input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
}

/* Button */
.cta-btn {
    width: 100%;
    background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
    border: none;
    padding: 1rem;
    border-radius: 12px;
    color: #fff;
    font-weight: 600;
    font-size: 1.1rem;
    cursor: pointer;
    transition: opacity 0.3s ease, transform 0.2s ease;
}

.cta-btn:hover {
    opacity: 0.9;
    transform: scale(1.02);
}

/* Results */
.hidden {
    display: none;
}

.results-section {
    animation: slideUp 0.5s ease forwards;
}

.spinner {
    width: 40px;
    height: 40px;
    border: 3px solid rgba(255, 255, 255, 0.1);
    border-top-color: var(--accent-primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 1rem;
}

.loading-state {
    text-align: center;
    color: var(--text-secondary);
    padding: 2rem 0;
}

.result-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

.confidence-badge {
    background: rgba(0, 242, 255, 0.1);
    color: var(--accent-primary);
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.stat-box {
    background: rgba(255, 255, 255, 0.03);
    padding: 1rem;
    border-radius: 12px;
    text-align: center;
}

.stat-label {
    display: block;
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
}

.stat-value {
    font-size: 1.5rem;
    font-weight: 700;
}

.health-score-container h3 {
    font-weight: 600;
    margin-bottom: 0.8rem;
}

.progress-bar-bg {
    width: 100%;
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    margin-bottom: 0.8rem;
    overflow: hidden;
}

.progress-bar-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
    border-radius: 4px;
    transition: width 1s ease;
}

.insight-text {
    font-size: 0.9rem;
    color: var(--text-secondary);
}

/* Animations */
@keyframes spin {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in {
    opacity: 0;
    animation: slideUp 0.8s ease forwards;
}

.delay-1 {
    animation-delay: 0.2s;
}

.delay-2 {
    animation-delay: 0.4s;
}

/* Mobile */
@media (max-width: 480px) {
    h1 {
        font-size: 2.5rem;
    }

    .container {
        padding: 1rem;
    }

    .stats-grid {
        gap: 1rem;
    }
}
