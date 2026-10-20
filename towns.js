document.addEventListener("DOMContentLoaded", function() {
    
    // Dohvaćanje elemenata iz DOM-a
    const btnAdd = document.getElementById('btnAdd');
    const btnDelete = document.getElementById('btnDelete');
    const btnShuffle = document.getElementById('btnShuffle');
    
    const input = document.getElementById('townName');
    const select = document.getElementById('towns');
    const result = document.getElementById('result');

    // 1. Dodavanje grada
    if (btnAdd) {
        btnAdd.addEventListener('click', function() {
            let townName = input.value.trim();
            if (townName !== "") {
                let option = document.createElement('option');
                option.text = townName;
                option.value = townName;
                select.add(option);
                
                result.innerText = townName + " added.";
                input.value = "";
            }
        });
    }

    // 2. Brisanje grada
    if (btnDelete) {
        btnDelete.addEventListener('click', function() {
            let selectedIndex = select.selectedIndex;
            if (selectedIndex !== -1) {
                let deletedTown = select.options[selectedIndex].text;
                select.remove(selectedIndex);
                result.innerText = deletedTown + " deleted.";
            } else {
                result.innerText = "Please select a town to delete.";
            }
        });
    }

    // 3. Miješanje gradova (Shuffle)
    if (btnShuffle) {
        btnShuffle.addEventListener('click', function() {
            let options = Array.from(select.options);
            if (options.length === 0) {
                result.innerText = "No towns to shuffle.";
                return;
            }

            for (let i = options.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                let temp = options[i];
                options[i] = options[j];
                options[j] = temp;
            }
            
            select.innerHTML = "";
            options.forEach(option => select.add(option));
            result.innerText = "Towns shuffled.";
        });
    }

});