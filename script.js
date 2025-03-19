        let storageKey = 'sklikStats';
        let savedData = JSON.parse(localStorage.getItem(storageKey)) || {};

        function updateDayAndLoadData() {
            const dateInput = document.getElementById('date').value;
            if (dateInput) {
                const date = new Date(dateInput);
                const days = ['Neděle', 'Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota'];
                document.getElementById('day').value = days[date.getDay()];
                loadData();
            }
        }

        function generateTable(tableId) {
            const table = document.getElementById(tableId);
            table.innerHTML = '';
            for (let i = 6; i < 24; i++) {
                let row = `<tr data-hour="${i}">
                    <td>${i}:00 - ${i+1}:00</td>
                    <td><input type="checkbox" checked onchange="toggleRow(this)"></td>
                    <td><input type="number" value="100"></td>
                    <td><input type="number" value="0"></td>
                    <td><input type="number" value="0"></td>
                    <td><input type="number" value="0"></td>
                    <td><input type="number" value="0"></td>
                </tr>`;
                table.innerHTML += row;
            }
        }

        function saveData() {
            alert("Ukládání do LocalStorage");
        }

        function exportCSV() {
            alert("Export do CSV zde");
        }

        function exportPDF() {
            const { jsPDF } = window.jspdf;
            let doc = new jsPDF();
            doc.text("Sklik Statistiky", 10, 10);
            doc.save(`sklik_statistiky.pdf`);
        }

        function generateReport() {
            alert("Generování reportu zde");
        }

        generateTable('statsTotal');
        generateTable('statsPlacement');
        generateTable('statsTopic');