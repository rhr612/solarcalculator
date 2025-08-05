function calculateVoltage() {
    // Get user input values
    let lowTemp = parseFloat(document.getElementById('lowTemp').value);
    let highTemp = parseFloat(document.getElementById('highTemp').value);
    let avgTemp = parseFloat(document.getElementById('avgTemp').value);
    let tkVoc = parseFloat(document.getElementById('tkVoc').value);
    let tkPmax = parseFloat(document.getElementById('tkPmax').value);
    let voc = parseFloat(document.getElementById('voc').value);
    let vmpp = parseFloat(document.getElementById('vmpp').value);

    let resultMaxVoltage = 0;
    let resultMinVoltage = 0;
    let resultAvgVoltage = 0;

    // For Maximum Voltage at Low Temperature calculation
    let step1Max = lowTemp - 25;  // Step 1: lowest temp - STC temp (default 25)
    let step2Max = (tkVoc * voc) / 100;  // Step 2: (tkVoc * Voc) / 100
    let step3Max = step1Max * step2Max;  // Step 3: step1 * step2
    resultMaxVoltage = step3Max + voc;  // Step 4/Result: step3 + Voc

    // For Minimum Voltage at High Temperature calculation
    let step1Min = highTemp - 25;  // Step 1: highest temp - STC temp (default 25)
    let step2Min = (tkPmax * vmpp) / 100;  // Step 2: (Tk Pmax * Vmpp) / 100
    let step3Min = step1Min * step2Min;  // Step 3: step1 * step2
    resultMinVoltage = step3Min + vmpp;  // Step 4/Result: step3 + Vmpp

    // For Average Voltage for Average Temperature calculation
    let step1Avg = avgTemp - 25;  // Step 1: avg temp - STC temp (default 25)
    let step2Avg = (tkPmax * vmpp) / 100;  // Step 2: (Tk Pmax * Vmpp) / 100
    let step3Avg = step1Avg * step2Avg;  // Step 3: step1 * step2
    resultAvgVoltage = step3Avg + vmpp;  // Step 4/Result: step3 + Vmpp

    // Display result and steps for all calculations with 2 decimal places
    document.getElementById('result').innerHTML = `
        <h3>Maximum Voltage at Low Temperature Calculation:</h3>
        <div class="step">Step 1: Lowest Temp - STC Temp (25°C) = ${step1Max.toFixed(2)}°C</div>
        <div class="step">Step 2: (Tk Voc * Voc) / 100 = ${step2Max.toFixed(2)}</div>
        <div class="step">Step 3: Step 1 * Step 2 = ${step3Max.toFixed(2)}</div>
        <div class="step">Step 4: Step 3 + Voc = <strong>${resultMaxVoltage.toFixed(2)} V</strong></div>
        <div class="step1">So, Maximum Voltage is ${resultMaxVoltage.toFixed(2)} V</strong></div>
        
        <h3>Minimum Voltage at High Temperature Calculation:</h3>
        <div class="step">Step 1: Highest Temp - STC Temp (25°C) = ${step1Min.toFixed(2)}°C</div>
        <div class="step">Step 2: (Tk Pmax * Vmpp) / 100 = ${step2Min.toFixed(2)}</div>
        <div class="step">Step 3: Step 1 * Step 2 = ${step3Min.toFixed(2)}</div>
        <div class="step">Step 4: Step 3 + Vmpp = <strong>${resultMinVoltage.toFixed(2)} V</strong></div>
        <div class="step1">So, Minimum Voltage is ${resultMinVoltage.toFixed(2)} V</strong></div>

        <h3>Average Voltage for Average Temperature Calculation:</h3>
        <div class="step">Step 1: Average Temp  - STC Temp (25°C) = ${step1Avg.toFixed(2)}°C</div>
        <div class="step">Step 2: (Tk Pmax * Vmpp) / 100 = ${step2Avg.toFixed(2)}</div>
        <div class="step">Step 3: Step 1 * Step 2 = ${step3Avg.toFixed(2)}</div>
        <div class="step">Step 4: Step 3 + Vmpp = <strong>${resultAvgVoltage.toFixed(2)} V</strong></div>
        <div class="step1">So, Average Voltage is ${resultAvgVoltage.toFixed(2)} V</strong></div>
    `;
}
