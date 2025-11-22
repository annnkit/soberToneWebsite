// SoberTone Website Interactive Functionality

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeTypewriter();
    initializeVoiceSimulator();
    initializeProgressTracker();
    initializeImpactCalculator();
    initializeTeamCards();
    initializeScrollAnimations();
    initializeNavigation();
});

// Typewriter animation for key statistics
function initializeTypewriter() {
    if (typeof Typed !== 'undefined') {
        new Typed('#typed-stats', {
            strings: [
                '350+ million people worldwide struggle with addiction',
                '60% relapse rate due to lack of real-time support',
                'AI-powered voice support can save lives'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }
}

// AI Voice Simulator
function initializeVoiceSimulator() {
    const voiceDemo = document.getElementById('voice-demo');
    if (!voiceDemo) return;

    const scenarios = {
        craving: {
            title: "Dealing with Cravings",
            responses: {
                friend: "Hey, I know this is tough right now. Remember why you started this journey. You've got this!",
                family: "Sweetheart, you're stronger than these cravings. Take a deep breath and think about how proud we are of you.",
                therapist: "Let's use the 4 D's technique: Delay, Distract, Deep breathing, and Drink water. Which one feels right for you?"
            }
        },
        anxiety: {
            title: "Managing Anxiety",
            responses: {
                friend: "I'm here for you. Let's do some box breathing together - 4 seconds in, hold for 4, out for 4.",
                family: "You're safe and loved. Remember your coping strategies - what has helped you before?",
                therapist: "Anxiety is temporary. Let's ground ourselves with the 5-4-3-2-1 technique. What are 5 things you can see?"
            }
        },
        depression: {
            title: "Overcoming Depression",
            responses: {
                friend: "I know it's hard to see the light right now, but you're not alone. I'm here to listen.",
                family: "We love you so much. Your life has value, and we want to help you through this darkness.",
                therapist: "Depression lies. Let's challenge these thoughts together. What evidence do we have that contradicts these feelings?"
            }
        }
    };

    // Create voice simulator interface
    const scenariosContainer = document.getElementById('scenarios');
    const voicesContainer = document.getElementById('voices');
    const responseContainer = document.getElementById('response');

    // Add scenario buttons
    Object.keys(scenarios).forEach(scenario => {
        const button = document.createElement('button');
        button.className = 'scenario-btn bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg mr-2 mb-2 transition-colors';
        button.textContent = scenarios[scenario].title;
        button.onclick = () => selectScenario(scenario);
        scenariosContainer.appendChild(button);
    });

    function selectScenario(scenarioKey) {
        // Clear previous voice buttons
        voicesContainer.innerHTML = '';
        responseContainer.innerHTML = '';

        // Add voice options
        const voices = ['friend', 'family', 'therapist'];
        voices.forEach(voice => {
            const button = document.createElement('button');
            button.className = 'voice-btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mr-2 mb-2 transition-colors';
            button.textContent = voice.charAt(0).toUpperCase() + voice.slice(1);
            button.onclick = () => showResponse(scenarioKey, voice);
            voicesContainer.appendChild(button);
        });
    }

    function showResponse(scenarioKey, voice) {
        const response = scenarios[scenarioKey].responses[voice];
        responseContainer.innerHTML = `
            <div class="bg-white p-6 rounded-lg shadow-lg mt-4">
                <h4 class="text-lg font-semibold text-purple-700 mb-2">${voice.charAt(0).toUpperCase() + voice.slice(1)} Voice Response:</h4>
                <p class="text-gray-700 leading-relaxed">${response}</p>
                <div class="mt-4">
                    <div class="h-16 bg-gradient-to-r from-purple-200 to-blue-200 rounded-lg animate-pulse"></div>
                    <p class="text-sm text-gray-500 mt-2 text-center">Voice waveform visualization</p>
                </div>
            </div>
        `;
    }
}

// Progress Tracker Visualization
function initializeProgressTracker() {
    const trackerContainer = document.getElementById('progress-tracker');
    if (!trackerContainer) return;

    const milestones = [
        { id: 1, title: "Recognition", description: "Acknowledging the problem and seeking help", status: "completed" },
        { id: 2, title: "Detoxification", description: "Physical and mental cleansing process", status: "completed" },
        { id: 3, title: "Early Abstinence", description: "Learning coping strategies and building support systems", status: "current" },
        { id: 4, title: "Maintaining Abstinence", description: "Developing long-term recovery habits", status: "pending" },
        { id: 5, title: "Advanced Recovery", description: "Living a fulfilling life in recovery", status: "pending" }
    ];

    const trackerHTML = milestones.map(milestone => `
        <div class="milestone-item flex items-center p-4 rounded-lg cursor-pointer transition-all hover:shadow-lg ${milestone.status === 'current' ? 'bg-purple-100 border-2 border-purple-500' : milestone.status === 'completed' ? 'bg-green-100' : 'bg-gray-100'}" 
             onclick="showMilestoneDetails(${milestone.id})">
            <div class="w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                milestone.status === 'completed' ? 'bg-green-500 text-white' :
                milestone.status === 'current' ? 'bg-purple-500 text-white' :
                'bg-gray-300 text-gray-600'
            }">
                ${milestone.status === 'completed' ? '✓' : milestone.id}
            </div>
            <div>
                <h4 class="font-semibold text-gray-800">${milestone.title}</h4>
                <p class="text-sm text-gray-600">${milestone.description}</p>
            </div>
        </div>
    `).join('');

    trackerContainer.innerHTML = `
        <div class="space-y-4">
            ${trackerHTML}
        </div>
        <div id="milestone-details" class="mt-6 p-4 bg-white rounded-lg shadow-lg hidden">
            <h5 class="font-semibold text-purple-700 mb-2">Stage Details</h5>
            <p id="milestone-description" class="text-gray-700"></p>
        </div>
    `;
}

function showMilestoneDetails(milestoneId) {
    const details = {
        1: "Recognition is the first and most crucial step. It involves acknowledging that addiction exists and that professional help is needed. This stage often includes intervention from loved ones and initial contact with treatment providers.",
        2: "Detoxification is the process of removing addictive substances from the body. This can be physically and mentally challenging, requiring medical supervision and emotional support to manage withdrawal symptoms safely.",
        3: "Early abstinence focuses on developing coping strategies, building support networks, and learning to manage triggers. This is where SoberTone's AI voice support becomes most valuable, providing real-time assistance.",
        4: "Maintaining abstinence involves establishing long-term recovery habits, continued therapy, and ongoing support. This stage emphasizes relapse prevention and building a fulfilling life without substances.",
        5: "Advanced recovery represents a new way of living. Individuals have developed strong coping mechanisms, rebuilt relationships, and found purpose in their recovery journey, often helping others in similar situations."
    };

    const detailsContainer = document.getElementById('milestone-details');
    const descriptionElement = document.getElementById('milestone-description');
    
    descriptionElement.textContent = details[milestoneId];
    detailsContainer.classList.remove('hidden');
}

// Impact Calculator
function initializeImpactCalculator() {
    const calculatorContainer = document.getElementById('impact-calculator');
    if (!calculatorContainer) return;

    calculatorContainer.innerHTML = `
        <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold text-purple-700 mb-4">Impact Calculator</h3>
            <div class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Number of Users</label>
                    <input type="range" id="user-count" min="1000" max="100000" value="10000" 
                           class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                           oninput="updateImpactCalculation()">
                    <span id="user-count-display" class="text-sm text-gray-600">10,000 users</span>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Success Rate (%)</label>
                    <input type="range" id="success-rate" min="40" max="80" value="60" 
                           class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                           oninput="updateImpactCalculation()">
                    <span id="success-rate-display" class="text-sm text-gray-600">60% success rate</span>
                </div>
            </div>
            <div id="impact-results" class="mt-6 p-4 bg-purple-50 rounded-lg">
                <h4 class="font-semibold text-purple-700 mb-2">Projected Impact</h4>
                <div class="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <span class="text-gray-600">Lives Saved:</span>
                        <span id="lives-saved" class="font-semibold text-purple-700">6,000</span>
                    </div>
                    <div>
                        <span class="text-gray-600">Economic Impact:</span>
                        <span id="economic-impact" class="font-semibold text-purple-700">$12M saved</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function updateImpactCalculation() {
    const userCount = document.getElementById('user-count').value;
    const successRate = document.getElementById('success-rate').value;
    
    document.getElementById('user-count-display').textContent = `${parseInt(userCount).toLocaleString()} users`;
    document.getElementById('success-rate-display').textContent = `${successRate}% success rate`;
    
    const livesSaved = Math.round(userCount * (successRate / 100));
    const economicImpact = Math.round(livesSaved * 2000); // $2000 saved per successful recovery
    
    document.getElementById('lives-saved').textContent = livesSaved.toLocaleString();
    document.getElementById('economic-impact').textContent = `$${(economicImpact / 1000000).toFixed(1)}M saved`;
}

// Team Member Cards
function initializeTeamCards() {
    const teamContainer = document.getElementById('team-cards');
    if (!teamContainer) return;

    const teamMembers = [
        {
            name: "Ankit Jangir",
            role: "Founder & CEO",
            expertise: "AI/ML Specialist, Behavioral Psychology",
            image: "resources/team-ankit.jpeg",
            bio: "Ankit is a passionate AI/ML specialist with deep interest in behavioral psychology. He founded SoberTone with the vision of using technology to make mental health support accessible to everyone. His background in machine learning and understanding of human behavior drives the innovative approach of SoberTone's AI voice technology."
        },
        {
            name: "Ayush Raj",
            role: "Tech Lead",
            expertise: "AI Voice Engine, App Architecture",
            image: "resources/team-ayush.jpg",
            bio: "Ayush leads the technical development of SoberTone's AI voice engine and mobile application architecture. With expertise in natural language processing and voice synthesis, he ensures that the platform delivers personalized, empathetic support to users in their most challenging moments."
        },
        {
            name: "Vikas Kumar",
            role: "Marketing Specialist",
            expertise: "Social Media, Digital Marketing",
            image: "resources/team-vikas.jpg",
            bio: "Vikas heads all marketing initiatives for SoberTone, focusing on building awareness about addiction prevention and the innovative solutions offered by the platform. His strategic approach to digital marketing helps reach those who need support most."
        },
        {
            name: "Rao Krishna",
            role: "Advisor",
            expertise: "Mental Health Enthusiast",
            image: "resources/team-rao.jpg",
            bio: "Rao Krishna brings extensive experience in mental health advocacy and support. As an advisor, he ensures that SoberTone's approach aligns with evidence-based practices and maintains the highest standards of care for individuals struggling with addiction."
        }
    ];

    const teamHTML = teamMembers.map(member => `
        <div class="team-card bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl cursor-pointer"
             onclick="showTeamMemberModal('${member.name}')">
            <div class="aspect-w-1 aspect-h-1">
                <img src="${member.image}" alt="${member.name}" class="w-full h-48 object-cover">
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold text-purple-700 mb-2">${member.name}</h3>
                <p class="text-blue-600 font-medium mb-2">${member.role}</p>
                <p class="text-gray-600 text-sm">${member.expertise}</p>
            </div>
        </div>
    `).join('');

    teamContainer.innerHTML = teamHTML;

    // Store team data globally for modal
    window.teamData = teamMembers.reduce((acc, member) => {
        acc[member.name] = member;
        return acc;
    }, {});
}

function showTeamMemberModal(memberName) {
    const member = window.teamData[memberName];
    if (!member) return;

    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
    modal.innerHTML = `
        <div class="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
            <div class="p-6">
                <div class="flex justify-between items-start mb-4">
                    <h2 class="text-2xl font-bold text-purple-700">${member.name}</h2>
                    <button onclick="this.closest('.fixed').remove()" class="text-gray-500 hover:text-gray-700">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div class="flex flex-col md:flex-row gap-6">
                    <img src="${member.image}" alt="${member.name}" class="w-32 h-32 rounded-lg object-cover mx-auto md:mx-0">
                    <div class="flex-1">
                        <p class="text-blue-600 font-semibold mb-2">${member.role}</p>
                        <p class="text-gray-700 mb-4">${member.expertise}</p>
                        <p class="text-gray-600 leading-relaxed">${member.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Navigation
function initializeNavigation() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Utility function for smooth animations
function animateValue(element, start, end, duration) {
    const startTime = performance.now();
    const difference = end - start;

    function updateValue(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = start + (difference * progress);
        element.textContent = Math.round(current).toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(updateValue);
        }
    }

    requestAnimationFrame(updateValue);
}
