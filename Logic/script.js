function createFirstTruthTable() {
    console.log("Formula 1: (p ∧ q) ⇒ r");
    const p = [true, true, false, false];
    const q = [true, false, true, false];
    const r = [true, false, true, false];
    
    const pAndQ = p.map((val, i) => val && q[i]);
    const result = pAndQ.map((val, i) => !val || r[i]);

    const tableBody = document.getElementById('truthTableBody1');
    tableBody.innerHTML = '';

    for (let i = 0; i < p.length; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${p[i]}</td>
            <td>${q[i]}</td>
            <td>${r[i]}</td>
            <td>${pAndQ[i]}</td>
            <td>${result[i]}</td>
        `;
        tableBody.appendChild(row);
    }
}

function createSecondTruthTable() {
    console.log("Formula 2: (q ∧ r) ∧ (p ∨ r)");
    const p = [true, true, false, false];
    const q = [true, false, true, false];
    const r = [true, false, true, false];

    const qAndR = q.map((val, i) => val && r[i]);
    const pOrR = p.map((val, i) => val || r[i]);
    const result = qAndR.map((val, i) => val && pOrR[i]);

    const tableBody = document.getElementById('truthTableBody2');
    tableBody.innerHTML = '';

    for (let i = 0; i < p.length; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${p[i]}</td>
            <td>${q[i]}</td>
            <td>${r[i]}</td>
            <td>${qAndR[i]}</td>
            <td>${pOrR[i]}</td>
            <td>${result[i]}</td>
        `;
        tableBody.appendChild(row);
    }
}

function createThirdTruthTable() {
    console.log("Formula 3: (p ⇒ q) ⇔ (q ∨ p)");
    const p = [true, true, false, false];
    const q = [true, false, true, false];

    const pImpliesQ = p.map((val, i) => !val || q[i]);
    const qOrP = q.map((val, i) => val || p[i]);
    const result = pImpliesQ.map((val, i) => val === qOrP[i]);

    const tableBody = document.getElementById('truthTableBody3');
    tableBody.innerHTML = '';

    for (let i = 0; i < p.length; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${p[i]}</td>
            <td>${q[i]}</td>
            <td>${pImpliesQ[i]}</td>
            <td>${qOrP[i]}</td>
            <td>${result[i]}</td>
        `;
        tableBody.appendChild(row);
    }
}

function createFourthTruthTable() {
    console.log("Formula 4: [p ∧ (p ⇒ q)] ⇒ q");
    const p = [true, true, false, false];
    const q = [true, false, true, false];

    const pImpliesQ = p.map((val, i) => !val || q[i]);
    const pAndImplies = p.map((val, i) => val && pImpliesQ[i]);
    const result = pAndImplies.map((val, i) => !val || q[i]);

    const tableBody = document.getElementById('truthTableBody4');
    tableBody.innerHTML = '';

    for (let i = 0; i < p.length; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${p[i]}</td>
            <td>${q[i]}</td>
            <td>${pImpliesQ[i]}</td>
            <td>${pAndImplies[i]}</td>
            <td>${result[i]}</td>
        `;
        tableBody.appendChild(row);
    }
}

function createFifthTruthTable() {
    console.log("Formula 5: [(r ⇔ q) ∨ (p ⇒ q)] ⇒ (p ∧ r)");
    const p = [true, true, false, false];
    const q = [true, false, true, false];
    const r = [true, false, true, false];

    const rEquivQ = r.map((val, i) => val === q[i]);
    const pImpliesQ = p.map((val, i) => !val || q[i]);
    const leftSide = rEquivQ.map((val, i) => val || pImpliesQ[i]);
    const pAndR = p.map((val, i) => val && r[i]);
    const result = leftSide.map((val, i) => !val || pAndR[i]);

    const tableBody = document.getElementById('truthTableBody5');
    tableBody.innerHTML = '';

    for (let i = 0; i < p.length; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${p[i]}</td>
            <td>${q[i]}</td>
            <td>${r[i]}</td>
            <td>${rEquivQ[i]}</td>
            <td>${pImpliesQ[i]}</td>
            <td>${leftSide[i]}</td>
            <td>${pAndR[i]}</td>
            <td>${result[i]}</td>
        `;
        tableBody.appendChild(row);
    }
}

// Create all tables on page load
createFirstTruthTable();
createSecondTruthTable();
createThirdTruthTable();
createFourthTruthTable();
createFifthTruthTable();
