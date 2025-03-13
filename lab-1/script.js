document.addEventListener("DOMContentLoaded", function () {
    const countButton = document.getElementById("countButton");
    if (countButton) {
        countButton.addEventListener("click", function () {
            let numbers = document.getElementById("numberInput").value.trim();
            let digit = document.getElementById("digitInput").value.trim();

            if (!numbers || isNaN(numbers) || digit.length !== 1 || isNaN(digit)) {
                document.getElementById("countOutput").innerText = "Некоректний ввід!";
                return;
            }

            let count = numbers.split('').filter(num => num === digit).length;
            document.getElementById("countOutput").innerText = `Цифра ${digit} зустрічається ${count} разів`;
        });
    }


    const reverseButton = document.getElementById("reverseButton");
    if (reverseButton) {
        reverseButton.addEventListener("click", function () {
            let num = document.getElementById("reverseInput").value.trim();
            if (!num || isNaN(num)) {
                document.getElementById("reverseOutput").innerText = "Введіть коректне число!";
                return;
            }
            document.getElementById("reverseOutput").innerText = num.split('').reverse().join('');
        });
    }


    const rpsButtons = document.querySelectorAll(".rpsButton");
    if (rpsButtons.length > 0) {
        rpsButtons.forEach(button => {
            button.addEventListener("click", function () {
                const choices = ["Камінь", "Ножиці", "Папір"];
                let userChoice = this.dataset.choice;
                let compChoice = choices[Math.floor(Math.random() * 3)];

                let result = "";
                if (userChoice === compChoice) {
                    result = "Нічия!";
                } else if (
                    (userChoice === "Камінь" && compChoice === "Ножиці") ||
                    (userChoice === "Ножиці" && compChoice === "Папір") ||
                    (userChoice === "Папір" && compChoice === "Камінь")
                ) {
                    result = "Ви виграли!";
                } else {
                    result = "Ви програли!";
                }

                document.getElementById("gameResult").innerText = `Комп: ${compChoice}. ${result}`;
            });
        });
    }


    const slotButton = document.getElementById("slotButton");
    if (slotButton) {
        slotButton.addEventListener("click", function () {
            const symbols = ["🍒", "🍋", "🍊", "🍉", "⭐"];
            let slots = [
                symbols[Math.floor(Math.random() * symbols.length)],
                symbols[Math.floor(Math.random() * symbols.length)],
                symbols[Math.floor(Math.random() * symbols.length)]
            ];

            document.getElementById("slotDisplay").innerText = slots.join(" ");

            if (slots[0] === slots[1] && slots[1] === slots[2]) {
                document.getElementById("slotResult").innerText = "Ви виграли!";
            } else {
                document.getElementById("slotResult").innerText = "Спробуйте ще!";
            }
        });
    }


    function setupModal() {
        const modal = document.getElementById("myModal");
        const btn = document.getElementById("logo");
        const closeBtn = document.querySelector(".close");

        if (!modal || !btn || !closeBtn) return;

        btn.addEventListener("click", function () {
            modal.style.display = "flex"; 
        });

        closeBtn.addEventListener("click", function () {
            modal.style.display = "none";
        });

        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    setupModal();
});
