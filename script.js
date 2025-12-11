document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const form = document.getElementById('analysis-form');
    const inputGroupText = document.getElementById('text-input-group');
    const inputGroupImage = document.getElementById('image-input-group');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const mealInput = document.getElementById('meal-input');
    const resultsSection = document.getElementById('results-section');
    const loadingState = document.querySelector('.loading-state');
    const resultContent = document.querySelector('.result-content');

    // Result Elements
    const foodNameEl = document.getElementById('food-name');
    const caloriesEl = document.getElementById('calories-val');
    const proteinEl = document.getElementById('protein-val');
    const carbsEl = document.getElementById('carbs-val');
    const fatsEl = document.getElementById('fats-val');
    const healthBar = document.getElementById('health-score-bar');
    const healthInsight = document.getElementById('health-insight');

    // Tab Switching
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const tab = btn.dataset.tab;
            if (tab === 'text') {
                inputGroupText.classList.add('active');
                inputGroupImage.classList.remove('active');
            } else {
                inputGroupImage.classList.add('active');
                inputGroupText.classList.remove('active');
            }
        });
    });

    // Mock Database
    const foodDB = {
        'pizza': { cals: 285, p: '12g', c: '36g', f: '10g', score: 45, insight: 'High in carbs and fats. Enjoy in moderation.' },
        'salad': { cals: 150, p: '3g', c: '10g', f: '8g', score: 95, insight: 'Excellent source of fiber and vitamins.' },
        'burger': { cals: 550, p: '25g', c: '40g', f: '30g', score: 30, insight: 'High calorie density. Consider a side salad.' },
        'salmon': { cals: 400, p: '45g', c: '0g', f: '22g', score: 90, insight: 'Great source of Omega-3 fatty acids.' },
        'oatmeal': { cals: 150, p: '5g', c: '27g', f: '3g', score: 85, insight: 'Heart-healthy complex carbohydrates.' }
    };

    // Form Submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const inputVal = mealInput.value.toLowerCase().trim();
        if (!inputVal && inputGroupText.classList.contains('active')) return;

        // Show UI
        resultsSection.classList.remove('hidden');
        loadingState.classList.remove('hidden');
        resultContent.classList.add('hidden');

        // Scroll to results
        resultsSection.scrollIntoView({ behavior: 'smooth' });

        // Simulate Network Delay
        setTimeout(() => {
            loadingState.classList.add('hidden');
            resultContent.classList.remove('hidden');

            analyzeFood(inputVal);
        }, 2000);
    });

    function analyzeFood(input) {
        let data;
        let name;

        // Simple keyword match
        const key = Object.keys(foodDB).find(k => input.includes(k));

        if (key) {
            data = foodDB[key];
            name = input.charAt(0).toUpperCase() + input.slice(1);
        } else {
            // Random generation for unknown
            data = {
                cals: Math.floor(Math.random() * 600) + 100,
                p: Math.floor(Math.random() * 30) + 5 + 'g',
                c: Math.floor(Math.random() * 50) + 10 + 'g',
                f: Math.floor(Math.random() * 20) + 5 + 'g',
                score: Math.floor(Math.random() * 60) + 40,
                insight: 'Nutritional estimation based on generic profile.'
            };
            name = input || "Uploaded Specimen";
        }

        // Update DOM
        foodNameEl.textContent = name;
        caloriesEl.textContent = data.cals;
        proteinEl.textContent = data.p;
        carbsEl.textContent = data.c,
            fatsEl.textContent = data.f;
        healthInsight.textContent = data.insight;

        // Animate Bar
        setTimeout(() => {
            healthBar.style.width = `${data.score}%`;

            // Color code bar
            if (data.score > 70) healthBar.style.background = 'var(--accent-primary)';
            else if (data.score > 40) healthBar.style.background = '#ffd700'; // Gold
            else healthBar.style.background = '#ff4444'; // Red
        }, 100);
    }
});
