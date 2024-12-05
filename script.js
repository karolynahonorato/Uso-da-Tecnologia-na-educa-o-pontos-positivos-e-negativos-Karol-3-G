function showCategory(category) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => section.classList.add('hidden'));
    document.getElementById(category).classList.remove('hidden');
}
