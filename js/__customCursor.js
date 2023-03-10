const cursor = document.createElement("div");
cursor.className = "cursor";
document.body.appendChild(cursor);
document.body.style.overflowX = "hidden";

function repositionCursor(e) {
  cursor.style.top = `${e.pageY}px`;
  cursor.style.left = `${e.pageX}px`;
}

// TODO: Add requestanimationframe()
window.addEventListener("mousemove", (e) => repositionCursor(e));
