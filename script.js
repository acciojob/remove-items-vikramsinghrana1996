document.addEventListener("DOMContentLoaded", function () {
    const removeButton = document.querySelector('input[type="button"][value="Select and Remove"]');
    removeButton.addEventListener("click", function () {
        const colorDropdown = document.getElementById("colorSelect");
        if (colorDropdown.selectedIndex !== -1) {
            colorDropdown.remove(colorDropdown.selectedIndex);
            colorDropdown.dispatchEvent(new Event('change')); // Ensures the UI updates properly
        }
    });
});

    }
}
