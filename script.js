
        // Petite interaction : afficher l'année et gérer l'envoi fictif du formulaire
        document.getElementById('year').textContent = new Date().getFullYear();

        function submitForm(e){
            e.preventDefault();
            const btn = e.target.querySelector('button[type="submit"]');
            const original = btn.textContent;
            btn.textContent = 'Envoi...';
            btn.disabled = true;
            setTimeout(() => {
                btn.textContent = 'Envoyé ✓';
                // Simuler remise à zéro après un court délai
                setTimeout(() => {
                    e.target.reset();
                    btn.textContent = original;
                    btn.disabled = false;
                }, 1200);
            }, 900);
        }
    