// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Cible les éléments de texte qui auront l'effet glitch
    const glitchTexts = document.querySelectorAll('.glitch-text');

    // Met à jour l'attribut data-text pour correspondre au contenu
    // C'est utilisé par les pseudo-éléments ::before et ::after en CSS
    glitchTexts.forEach(el => {
        el.setAttribute('data-text', el.textContent);
    });

    // Cible tous les conteneurs qui doivent avoir un effet glitch (texte et image)
    const glitchContainers = document.querySelectorAll('.glitch-text, .glitch-container');

    // Fonction pour déclencher un glitch aléatoire
    function triggerRandomGlitch() {
        glitchContainers.forEach(container => {
            // Chance de déclencher le glitch (ex: 30% de chance à chaque intervalle)
            if (Math.random() < 0.3) {
                container.classList.add('glitching');

                // Durée pendant laquelle le glitch est "intensifié"
                const glitchDuration = Math.random() * 300 + 100; // entre 100ms et 400ms

                setTimeout(() => {
                    container.classList.remove('glitching');
                }, glitchDuration);
            }
        });

        // Planifie le prochain déclenchement aléatoire
        const nextGlitchTime = Math.random() * 2000 + 500; // entre 0.5s et 2.5s
        setTimeout(triggerRandomGlitch, nextGlitchTime);
    }

    // Lance le premier déclenchement de glitch aléatoire
    triggerRandomGlitch();

});