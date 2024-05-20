document.addEventListener("DOMContentLoaded", function() {
    fetch('https://api.example.com/ipl-points') // replace with API URL
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#pointsTable tbody');
            data.forEach((team, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${team.name}</td>
                    <td>${team.matchesPlayed}</td>
                    <td>${team.wins}</td>
                    <td>${team.losses}</td>
                    <td>${team.points}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
