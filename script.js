
cy.get('select#colorSelect').select('Red').should('have.value', 'Red');
cy.get('input[type="button"][value="Select and Remove"]').click();
cy.wait(500); // Helps UI update before the next assertion
cy.get('select#colorSelect option').should('have.length', 3).and('not.contain', 'Red');
document.addEventListener("DOMContentLoaded", function () {
    const removeButton = document.querySelector('input[type="button"][value="Select and Remove"]');

    removeButton.addEventListener("click", function () {
        const colorDropdown = document.getElementById("colorSelect");
        if (colorDropdown.selectedIndex !== -1) {
            colorDropdown.remove(colorDropdown.selectedIndex);
        }
    });
});

