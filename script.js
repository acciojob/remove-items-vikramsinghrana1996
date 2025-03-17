//your JS code here. If required.
/*  your css code here. If applicable */
function removeColor() {
    let colorDropdown = document.getElementById("colorSelect");
    if (colorDropdown.selectedIndex !== -1) {
        colorDropdown.remove(colorDropdown.selectedIndex);
    }
}
