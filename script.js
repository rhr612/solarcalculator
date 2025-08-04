function calculateVoltage() {
    // Get user input values
    let lowestTemp = parseFloat(document.getElementById('lowestTemp').value);
    let highestTemp = parseFloat(document.getElementById('highestTemp').value);
    let tkVoc = parseFloat(document.getElementById('tkVoc').value);
    let voc = parseFloat(document.getElementById('voc').value);
    let pmax = parseFloat(document.getElementById('pmax').value);
    let vmpp = parseFloat(document.getElementById('vmpp').value);

    let resultMaxVoltage = 0;
    let resultMinVoltage = 0;

    // For Maximum Voltage at Low Temperature calculation
    let step1Max = lowestTemp - 25;  // Step 1: lowest temp - STC temp (default 25)
    let step2Max = (tkVoc * voc) / 100;  // Step 2: (tkVoc * Voc) / 100
    let step3Max = step1Max * step2Max;  // Step 3: step1 * step2
    resultMaxVoltage = step3Max + voc;  // Step 4/Result: step3 / Voc

    // For Minimum Voltage at High Temperature calculation
    let step1Min = highestTemp - 25;  // Step 1: highest temp - STC temp (default 25)
    let step2Min = (pmax * vmpp) / 100;  // Step 2: (Tk Pmax * Vmpp) / 100
    let step3Min = step1Min * step2Min;  // Step 3: step1 * step2
    resultMinVoltage = step3Min + vmpp;  // Step 4/Result: step3 / Vmpp

    // Display result and steps for both calculations
    document.getElementById('result').innerHTML = `
        <h3>Maximum Voltage at Low Temperature Calculation:</h3>
        <div class="step">Step 1: Lowest Temp - STC Temp = ${step1Max}°C</div>
        <div class="step">Step 2: (Tk Voc * Voc) / 100 = ${step2Max}</div>
        <div class="step">Step 3: Step 1 * Step 2 = ${step3Max}</div>
        <div class="step1">Step 4: Step 3 / Voc = <strong>${resultMaxVoltage.toFixed(2)} V</strong></div>
        
        <h3>Minimum Voltage at High Temperature Calculation:</h3>
        <div class="step">Step 1: Highest Temp - STC Temp = ${step1Min}°C</div>
        <div class="step">Step 2: (Tk Pmax * Vmpp) / 100 = ${step2Min}</div>
        <div class="step">Step 3: Step 1 * Step 2 = ${step3Min}</div>
        <div class="step1">Step 4: Step 3 / Vmpp = <strong>${resultMinVoltage.toFixed(2)} V</strong></div>
    `;
}
