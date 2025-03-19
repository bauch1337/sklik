
// Po načtení stránky
document.addEventListener('DOMContentLoaded', function() {

  // Vygenerujeme časové intervaly od 6:00 do 24:00
  const generateTimeIntervalsHTML = (prefix) => {
    let html = '';
    for(let hour = 6; hour < 24; hour++) {
      let nextHour = hour + 1;
      html += `
      <div class="time-interval">
        <h5>${hour}:00 - ${nextHour}:00</h5>
        <div class="row">
          <div class="col-md-3">
            <label>Celkové prokliky</label>
            <input type="number" class="form-control" id="${prefix}_clicks_${hour}" min="0" value="0">
          </div>
          <div class="col-md-3">
            <label>Celková zobrazení</label>
            <input type="number" class="form-control" id="${prefix}_impressions_${hour}" min="0" value="0">
          </div>
          <div class="col-md-3">
            <label>Intervalové prokliky</label>
            <input type="number" class="form-control" id="${prefix}_interval_clicks_${hour}" min="0" value="0">
          </div>
          <div class="col-md-3">
            <label>Intervalová zobrazení</label>
            <input type="number" class="form-control" id="${prefix}_interval_impressions_${hour}" min="0" value="0">
          </div>
        </div>
        <div class="mt-2">
          <label>Procentuální změna (%)</label>
          <input type="number" class="form-control" id="${prefix}_percentage_${hour}" min="0" value="100">
        </div>
        <div class="form-check mt-2">
          <input class="form-check-input" type="checkbox" id="${prefix}_active_${hour}" checked>
          <label class="form-check-label" for="${prefix}_active_${hour}">Aktivní interval</label>
        </div>
      </div>
      `;
    }
    return html;
  };

  // Naplníme sekce pro celkové statistiky, umístění a téma
  document.getElementById('overallData').innerHTML = generateTimeIntervalsHTML('overall');
  document.getElementById('placementData').innerHTML = generateTimeIntervalsHTML('placement');
  document.getElementById('topicData').innerHTML = generateTimeIntervalsHTML('topic');

  // Zpracování formuláře – uložení dat do LocalStorage
  document.getElementById('dailyDataForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Získání a validace základních údajů
    let entryDate = document.getElementById('entryDate').value;
    let dayOfWeek = document.getElementById('dayOfWeek').value;
    let dailyBudget = document.getElementById('dailyBudget').value;
    if (!entryDate || !dayOfWeek || !dailyBudget) {
      alert('Vyplňte prosím všechny povinné údaje.');
      return;
    }
    
    // Objekt pro denní data
    let dayData = {
      entryDate,
      dayOfWeek,
      dailyBudget,
      categories: {
        overall: {},
        placement: {},
